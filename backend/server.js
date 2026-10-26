const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
require('dotenv').config();
const express = require('express');
const cors = require('cors');

const db = require('./db');
const push = require('./push');
const auth = require('./auth');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: '15mb' })); // chat can include base64 images/voice notes

// ══════════════════════════════════════════════════════════════════════
// AUTH — real server-side login. Passwords are bcrypt-hashed in MySQL and
// never sent to or trusted from the browser. Every other API route below
// requires a valid JWT obtained here.
// ══════════════════════════════════════════════════════════════════════

app.post('/api/auth/login', async (req, res) => {
  try {
    const { username, password } = req.body || {};
    if (!username || !password) return res.status(400).json({ error: 'Username and password are required' });

    const row = await db.findUserByUsername(username);
    if (!row) return res.status(401).json({ error: 'Invalid username or password' });
    if (!row.active) return res.status(403).json({ error: 'This account is blocked' });

    const ok = await auth.comparePassword(password, row.password_hash);
    if (!ok) return res.status(401).json({ error: 'Invalid username or password' });

    const safe = db.toSafeUser(row);
    const token = auth.signToken(safe);
    res.json({ token, user: safe });
  } catch (e) {
    console.error('Login failed:', e);
    res.status(500).json({ error: 'Server error, please try again' });
  }
});

// Everything from here on requires a valid session.
app.use('/api', auth.requireAuth);

// ── Users (server-owned; passwords never travel through the generic
// sync endpoint below) ─────────────────────────────────────────────
app.get('/api/users', async (req, res) => {
  try {
    res.json(await db.listUsersSafe());
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to load users' });
  }
});

// Create a new employee login. Only the owner can do this.
app.post('/api/users', auth.requireRole('owner'), async (req, res) => {
  try {
    const { username, password, name, role, branch, phone, active } = req.body || {};
    if (!username || !password || !name || !role) {
      return res.status(400).json({ error: 'username, password, name and role are required' });
    }
    if (password.length < 4) return res.status(400).json({ error: 'Password must be at least 4 characters' });
    const existing = await db.findUserByUsername(username);
    if (existing) return res.status(409).json({ error: 'Username already exists' });

    const passwordHash = await auth.hashPassword(password);
    const created = await db.createUser({ username, passwordHash, name, role, branch, phone, active });
    res.status(201).json(db.toSafeUser(created));
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to create user' });
  }
});

// Update profile fields. Anyone can update their own name/phone/username;
// only the owner can change role/branch/active, or edit other accounts.
app.put('/api/users/:username', async (req, res) => {
  try {
    const target = await db.findUserByUsername(req.params.username);
    if (!target) return res.status(404).json({ error: 'User not found' });

    const isSelf = req.user.username === target.username;
    const isOwner = req.user.role === 'owner';
    if (!isSelf && !isOwner) return res.status(403).json({ error: 'Not allowed' });

    const { username, name, phone, role, branch, active } = req.body || {};
    const fields = {};
    if (username && username !== target.username) {
      const dup = await db.findUserByUsername(username);
      if (dup) return res.status(409).json({ error: 'Username already exists' });
      fields.username = username;
    }
    if (name !== undefined) fields.name = name;
    if (phone !== undefined) fields.phone = phone;
    if (isOwner) {
      if (role !== undefined) fields.role = role;
      if (branch !== undefined) fields.branch = branch;
      if (active !== undefined) fields.active = active ? 1 : 0;
    }

    const updated = await db.updateUser(target.id, fields);
    res.json(db.toSafeUser(updated));
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to update user' });
  }
});

// Change password. Self-service requires the current password; the owner
// can reset anyone's password without knowing the old one.
app.put('/api/users/:username/password', async (req, res) => {
  try {
    const target = await db.findUserByUsername(req.params.username);
    if (!target) return res.status(404).json({ error: 'User not found' });

    const isSelf = req.user.username === target.username;
    const isOwner = req.user.role === 'owner';
    if (!isSelf && !isOwner) return res.status(403).json({ error: 'Not allowed' });

    const { oldPassword, newPassword } = req.body || {};
    if (!newPassword || newPassword.length < 4) {
      return res.status(400).json({ error: 'New password must be at least 4 characters' });
    }
    if (isSelf) {
      if (!oldPassword) return res.status(400).json({ error: 'Current password is required' });
      const ok = await auth.comparePassword(oldPassword, target.password_hash);
      if (!ok) return res.status(401).json({ error: 'Incorrect current password' });
    }
    const passwordHash = await auth.hashPassword(newPassword);
    await db.updateUser(target.id, { passwordHash });
    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to change password' });
  }
});

// ══════════════════════════════════════════════════════════════════════
// Notification routing (mirrors the old client-only badge/chat checks,
// now server-side so pushes fire even with the app fully closed).
// ══════════════════════════════════════════════════════════════════════
const LABELS = {
  am: { procurementOrders: 'ግዥ', storeTransfers: 'ዕቃ ቤት', pendingTransfers: 'ዕቃ ቤት', wholesale: 'ጅምላ ሽያጭ', branchLoans: 'ብድር', prodFlow: 'ምርት' },
  en: { procurementOrders: 'Procurement', storeTransfers: 'Store', pendingTransfers: 'Store', wholesale: 'Wholesale', branchLoans: 'Loan', prodFlow: 'Production' },
};
const WATCHED_KEY_ROLES = {
  procurementOrders: ['owner'],
  storeTransfers: ['owner', 'store', 'sales'],
  pendingTransfers: ['owner', 'store'],
  wholesale: ['owner'],
  branchLoans: ['owner'],
  prodFlow: ['owner', 'cutting', 'sewing', 'store'],
};
const GENERIC_WATCHED_KEYS = Object.keys(WATCHED_KEY_ROLES);

function diffNewItems(oldArr, newArr) {
  if (!Array.isArray(oldArr) || !Array.isArray(newArr)) return [];
  const oldIds = new Set(oldArr.map(x => x && x.id));
  return newArr.filter(x => x && !oldIds.has(x.id));
}

async function notifyForChat(oldArr, newArr, byUsername) {
  const newMsgs = diffNewItems(oldArr, newArr).filter(m => m.from && m.from !== byUsername);
  for (const m of newMsgs) {
    const isDM = m.to && m.to !== 'group';
    const preview = m.image ? '📷 Photo' : m.audio ? '🎤 Voice message' : (m.text || '');
    const payload = {
      title: `💬 ${m.fromName || m.from}`,
      body: preview.slice(0, 140),
      tag: 'chat-' + (isDM ? [m.from, m.to].sort().join('_') : 'group'),
      url: '/',
    };
    if (isDM) await push.sendToUser(m.to, payload);
    else await push.sendToAllExcept(m.from, payload);
  }
}

async function notifyForGenericKey(key, oldArr, newArr, byUsername) {
  const newItems = diffNewItems(oldArr, newArr);
  if (!newItems.length) return;
  const roles = WATCHED_KEY_ROLES[key] || [];
  const users = await db.listUsersSafe();
  const targets = users.filter(u => roles.includes(u.role) && u.username !== byUsername).map(u => u.username);
  if (!targets.length) return;
  const labelAm = LABELS.am[key] || key;
  const labelEn = LABELS.en[key] || key;
  const payload = {
    title: `🔔 New notification — ${labelEn} / ${labelAm}`,
    body: `${newItems.length} new item${newItems.length > 1 ? 's' : ''} need${newItems.length > 1 ? '' : 's'} your attention`,
    tag: 'badge-' + key,
    url: '/',
  };
  await Promise.all(targets.map(u => push.sendToUser(u, payload)));
}

async function maybeNotify(key, oldValue, newValue, byUsername) {
  try {
    if (key === 'teamChat') await notifyForChat(oldValue, newValue, byUsername);
    else if (GENERIC_WATCHED_KEYS.includes(key)) await notifyForGenericKey(key, oldValue, newValue, byUsername);
  } catch (e) {
    console.error('Notification dispatch failed for', key, e);
  }
}

// ══════════════════════════════════════════════════════════════════════
// Sync API — shared central data store (everything EXCEPT `users`, which
// is only ever readable/writable through the dedicated routes above).
// ══════════════════════════════════════════════════════════════════════
app.get('/api/sync', async (req, res) => {
  try {
    res.json(await db.getAllData());
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to load data' });
  }
});

app.get('/api/sync/:key', async (req, res) => {
  if (req.params.key === 'users') return res.status(400).json({ error: 'Use /api/users for user data' });
  try {
    res.json({ value: (await db.getKey(req.params.key)) ?? null });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to load data' });
  }
});

app.post('/api/sync/:key', async (req, res) => {
  const key = req.params.key;
  if (key === 'users') return res.status(400).json({ error: 'Use /api/users to manage user accounts' });
  try {
    const { value, deletedId, deletedIds } = req.body || {};
    const oldValue = await db.getKey(key);

    let finalValue = value;

    // Smart non-destructive merge for Array data (prevents concurrent departments from overwriting each other)
    if (Array.isArray(oldValue) && Array.isArray(value)) {
      const delSet = new Set();
      if (deletedId) delSet.add(String(deletedId));
      if (Array.isArray(deletedIds)) deletedIds.forEach(id => delSet.add(String(id)));

      // Maintain persistent tombstone set for dismissed transfers so they can never be resurrected
      let dismissedSet = new Set();
      if (key === 'pendingTransfers') {
        const storedDismissed = (await db.getKey('dismissedTransferIds')) || [];
        dismissedSet = new Set(Array.isArray(storedDismissed) ? storedDismissed.map(String) : []);
        delSet.forEach(id => dismissedSet.add(String(id)));
        oldValue.forEach(item => {
          if (item && item.dismissed && item.id) dismissedSet.add(String(item.id));
        });
        await db.setKey('dismissedTransferIds', Array.from(dismissedSet).slice(-1000));
      }

      const getItemKey = item => {
        if (!item || typeof item !== 'object') return null;
        if (key === 'branchStock' && item.branch && item.type) return 'bs:' + item.branch + ':' + item.type;
        if (key === 'sewingCutStock' && item.type) return 'scs:' + item.type;
        if ((key === 'cuttingRaw' || key === 'rawStock') && item.name) return 'raw:' + item.name;
        if (key === 'productPrices' && item.type) return 'pp:' + item.type;
        if ((key === 'sewingDeptMeta' || key === 'cuttingDeptMeta') && item.key) return 'dept:' + item.key;
        if (item.id !== undefined && item.id !== null) return 'id:' + item.id;
        if (item._id !== undefined && item._id !== null) return 'id:' + item._id;
        if (item.branch && item.type) return 'bt:' + item.branch + ':' + item.type;
        if (item.name !== undefined && item.name !== null) return 'name:' + item.name;
        if (item.type !== undefined && item.type !== null && item.date !== undefined) return 'td:' + item.type + ':' + item.date;
        try { return 'json:' + JSON.stringify(item); } catch { return null; }
      };

      const map = new Map();
      // First, seed with items from oldValue (persisted server state)
      oldValue.forEach(item => {
        const itemId = item && (item.id !== undefined ? String(item.id) : (item._id !== undefined ? String(item._id) : null));
        if (itemId && (delSet.has(itemId) || dismissedSet.has(itemId))) return;
        const k = getItemKey(item);
        if (k) map.set(k, item);
      });

      // Next, overlay with all items from incoming client value (updates and new additions)
      value.forEach(item => {
        const itemId = item && (item.id !== undefined ? String(item.id) : (item._id !== undefined ? String(item._id) : null));
        if (itemId && (delSet.has(itemId) || dismissedSet.has(itemId))) return;
        const k = getItemKey(item);
        if (k) {
          const existing = map.get(k);
          if (existing && existing.status && item.status) {
            // CRITICAL STATUS PROTECTION:
            // Once an owner has approved or rejected a record on server,
            // an incoming stale client item with 'pending' status can NEVER revert it!
            if ((existing.status === 'approved' || existing.status === 'rejected') && item.status === 'pending') {
              item = {
                ...item,
                status: existing.status,
                approvedAt: existing.approvedAt || item.approvedAt,
                approvedBy: existing.approvedBy || item.approvedBy
              };
            }
          }
          map.set(k, item);
        }
      });

      // Ensure explicitly deleted and dismissed IDs are removed
      delSet.forEach(delId => {
        map.delete('id:' + delId);
        map.delete(String(delId));
      });
      dismissedSet.forEach(delId => {
        map.delete('id:' + delId);
        map.delete(String(delId));
      });

      let merged = Array.from(map.values());

      // Special deduplication for expenses (procurement expense duplicates)
      if (key === 'expenses') {
        const seenProcOrders = new Set();
        merged = merged.filter(e => {
          if (!e || !e.procOrderId) return true;
          if (seenProcOrders.has(e.procOrderId)) return false;
          seenProcOrders.add(e.procOrderId);
          return true;
        });
      }

      // Special deduplication for transfer sales (prevent accidental duplicate records from repeated clicks)
      if (key === 'sales') {
        const seenTransfers = new Set();
        merged = merged.filter(s => {
          if (!s || s.payment !== 'transfer') return true;
          const sig = s.transferId
            ? 'trId:' + s.transferId + ':' + (s.product || '')
            : 'trSig:' + (s.branch || '') + ':' + (s.date || '') + ':' + (s.product || '') + ':' + (s.qty || '') + ':' + (s.price || '') + ':' + (s.transferVia || '') + ':' + (s.customerName || s.creditCustomer || '');
          if (seenTransfers.has(sig)) return false;
          seenTransfers.add(sig);
          return true;
        });
      }

      finalValue = merged;
    }

    await db.setKey(key, finalValue);
    res.json({ ok: true, value: finalValue });
    maybeNotify(key, oldValue, finalValue, req.user.username); // fire-and-forget
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to save data' });
  }
});

// ── Push subscription API ─────────────────────────────────────────────
app.get('/api/push/vapid-public-key', (req, res) => {
  res.json({ publicKey: push.VAPID_PUBLIC_KEY || null });
});

app.post('/api/push/subscribe', async (req, res) => {
  try {
    const { subscription } = req.body || {};
    if (!subscription || !subscription.endpoint) return res.status(400).json({ error: 'subscription is required' });
    await db.addSubscription(req.user.username, subscription); // always the logged-in user, never client-supplied
    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to save subscription' });
  }
});

app.post('/api/push/unsubscribe', async (req, res) => {
  try {
    const { endpoint } = req.body || {};
    if (!endpoint) return res.status(400).json({ error: 'endpoint is required' });
    await db.removeSubscription(req.user.username, endpoint);
    res.json({ ok: true });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: 'Failed to remove subscription' });
  }
});

app.get('/api/health', (req, res) => res.json({ ok: true, time: new Date().toISOString() }));

// ── Serve the frontend (single deploy: this one server hosts everything) ──
const FRONTEND_DIR = path.join(__dirname, '..', 'frontend');
app.use(express.static(FRONTEND_DIR));
app.get('*', (req, res) => {
  if (req.path.startsWith('/api/')) return res.status(404).json({ error: 'not found' });
  res.sendFile(path.join(FRONTEND_DIR, 'index.html'));
});

async function start() {
  try {
    await db.initTables();
    console.log('✅ Database tables ready.');
    try {
      const existingUsers = await db.listUsersSafe();
      if (!existingUsers || existingUsers.length === 0) {
        console.log('🌱 No users found in database. Performing initial auto-seed...');
        const ACCOUNTS = [
          { username: 'owner',        password: 'owner123',   name: 'አብርሃም ወልዴ',   role: 'owner',       branch: 'all' },
          { username: 'cutting1',     password: 'cutting123', name: 'ቆረጣ ክፍል',      role: 'cutting',     branch: 'b1' },
          { username: 'sewing1',      password: 'sewing123',  name: 'ስፌት ክፍል',      role: 'sewing',      branch: 'b1' },
          { username: 'store1',       password: 'store123',   name: 'ዕቃ ቤት',        role: 'store',       branch: 'b1' },
          { username: 'sales1',       password: 'sales123',   name: 'ሽያጭ ክፍል',      role: 'sales',       branch: 'b1' },
          { username: 'hr1',          password: 'hr123',      name: 'HR ክፍል',        role: 'hr',          branch: 'all' },
          { username: 'procurement1', password: 'proc123',    name: 'ግዥ ክፍል',       role: 'procurement', branch: 'all' },
          { username: 'marketing1',   password: 'mkt123',     name: 'ማርኬቲንግ ክፍል',   role: 'marketing',   branch: 'all' },
        ];
        for (const acc of ACCOUNTS) {
          const passwordHash = await auth.hashPassword(acc.password);
          await db.createUser({ ...acc, passwordHash, active: true });
        }
        console.log('✅ Default accounts seeded (owner: owner / owner123).');
      }
    } catch (err) {
      console.warn('⚠️ Auto-seed check:', err.message);
    }
  } catch (e) {
    console.error('❌ Could not connect to / initialize MySQL. Check your .env DB_* settings.', e.message);
    process.exit(1);
  }
  app.listen(PORT, () => {
    console.log(`A2 ERP server running on http://localhost:${PORT}`);
    if (!push.VAPID_PUBLIC_KEY) {
      console.log('Run `node generate-vapid-keys.js` and put the keys in .env to enable push notifications.');
    }
  });
}

start();
