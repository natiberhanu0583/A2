// Run this once, after your .env DB_* settings are correct, to create the
// first login accounts in MySQL:   node seed.js
//
// Safe to re-run — it skips any username that already exists.

require('dotenv').config();
const db = require('./db');
const auth = require('./auth');

const ACCOUNTS = [
  // ── Owner ──────────────────────────────────────────────
  { username: 'owner',        password: 'owner123',   name: 'አብርሃም ወልዴ',   role: 'owner',       branch: 'all' },

  // ── Production (Cutting & Sewing) ─────────────────────
  { username: 'cutting1',     password: 'cutting123', name: 'ቆረጣ ክፍል',      role: 'cutting',     branch: 'b1' },
  { username: 'sewing1',      password: 'sewing123',  name: 'ስፌት ክፍል',      role: 'sewing',      branch: 'b1' },

  // ── Store / Warehouse ─────────────────────────────────
  { username: 'store1',       password: 'store123',   name: 'ዕቃ ቤት',        role: 'store',       branch: 'b1' },

  // ── Sales ─────────────────────────────────────────────
  { username: 'sales1',       password: 'sales123',   name: 'ሽያጭ ክፍል',      role: 'sales',       branch: 'b1' },

  // ── HR ────────────────────────────────────────────────
  { username: 'hr1',          password: 'hr123',      name: 'HR ክፍል',        role: 'hr',          branch: 'all' },

  // ── Procurement ───────────────────────────────────────
  { username: 'procurement1', password: 'proc123',    name: 'ግዥ ክፍል',       role: 'procurement', branch: 'all' },

  // ── Marketing ─────────────────────────────────────────
  { username: 'marketing1',   password: 'mkt123',     name: 'ማርኬቲንግ ክፍል',   role: 'marketing',   branch: 'all' },
];

async function seed() {
  await db.initTables();
  for (const acc of ACCOUNTS) {
    const existing = await db.findUserByUsername(acc.username);
    if (existing) {
      console.log(`- ${acc.username} already exists, skipping`);
      continue;
    }
    const passwordHash = await auth.hashPassword(acc.password);
    await db.createUser({ ...acc, passwordHash, active: true });
    console.log(`✓ created ${acc.username} / ${acc.password}  (role: ${acc.role}) — change this password after first login!`);
  }
  console.log('\nDone. You can now log in with the account(s) above.');
  process.exit(0);
}

seed().catch(e => {
  console.error('Seeding failed:', e);
  process.exit(1);
});
