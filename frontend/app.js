/* ═══════════════════════════════════════════════════════════════
   A2 CLOTHES ERP v2 — app.js
   Full ERP: Multi-branch, Inventory, Customers, Delete Approval,
             Sales stock deduction, Notifications
═══════════════════════════════════════════════════════════════ */

// ── TRANSLATIONS ──────────────────────────────────────────────
const T = {
  am: {
    loginSubtitle:"የERP ማኔጅመንት ሲስተም", lf1:"ብዙ ቅርንጫፍ", lf2:"ዕቃ ቤት", lf3:"ሪፖርቶች", lf4:"ደንበኞች",
    lblUsername:"የተጠቃሚ ስም", lblPassword:"የይለፍ ቃል", loginBtn:"ወደ ሲስተሙ ግባ", loginHint:"ፓስዋርድ ከረሱ? ሃላፊዎን ያናግሩ",
    loginError:"የተጠቃሚ ስም ወይም ፓስዋርድ ትክክል አይደለም",
    sbChgPwd:"ፓስዋርድ ቀይር", sbLogout:"ወጣ", sbTagline:"ERP ሲስተም",
    navDashboard:"ዳሽቦርድ", navProduction:"ምርት", navCutting:"ቆረጣ ክፍል", navSewing:"ስፌት ክፍል",
    navStore:"ዕቃ ቤት", navSales:"ሽያጭ", navCustomers:"ቋሚ ደንበኞች",
    navFinance:"ሒሳብ / ፋይናንስ", navHR:"ሠራተኞች (HR)", navHRReport:"HR ሪፖርት", navAttendance:"ስራ ሂደት",
    navReports:"ሪፖርቶች", navBranches:"ቅርንጫፍ ማኔጅመንት", navPrices:"የልብስ ዋጋ", navSalesReport:"የሽያጭ ሪፖርት",
    pageTitle_dashboard:"ዳሽቦርድ — አጠቃላይ ሪፖርት", pageTitle_production:"ምርት", pageTitle_cutting:"ቆረጣ ክፍል",
    pageTitle_sewing:"ስፌት ክፍል", pageTitle_store:"ዕቃ ቤት / ክምችት",
    pageTitle_sales:"ሽያጭ", pageTitle_customers:"ቋሚ ደንበኞች",
    pageTitle_finance:"ሒሳብ / ፋይናንስ", pageTitle_hr:"ሠራተኞች ማኔጅመንት",
    pageTitle_attendance:"ስራ ሂደት", pageTitle_reports:"ሪፖርቶች",
    kpiRevenue:"አጠቃላይ ገቢ (ETB)", kpiExpense:"አጠቃላይ ወጪ (ETB)",
    kpiProfit:"ትርፍ / ኪሳራ (ETB)", kpiItems:"አጠቃላይ ክምችት",
    kpiSales:"ዛሬ ሽያጭ", kpiEmployees:"ሠራተኞች",
    dashSalesChart:"ወርሃዊ ሽያጭ", dashProductChart:"ምርቶች ሽያጭ",
    dashFlowChart:"የምርት ፍሰት", dashBranch:"ቅርንጫፍ ሱቆች", dashReports:"ሪፖርቶች",
    btnAddBranch:"+ ቅርንጫፍ ጨምር", btnAddCutting:"+ ቆረጣ ጨምር",
    btnAddSewing:"+ ስፌት ጨምር",
    btnAddSale:"+ ሽያጭ ጨምር", btnAddExpense:"+ ወጪ ጨምር",
    btnAddEmployee:"+ ሠራተኛ ጨምር",
    btnExport:"📥 PDF", btnPrint:"🖨️ ፕሪንት",
    save:"አስቀምጥ", cancel:"ሰርዝ", delete:"ሰርዝ", edit:"ቀይር",
    today:"ዛሬ", daily:"ዕለታዊ", weekly:"ሳምንታዊ", monthly:"ወርሃዊ",
    checkIn:"✅ ስራ ገባሁ", alreadyChecked:"ዛሬ ቀድሞ ገብተዋል",
    checkedInAt:"ተመዘጋቢ ሰዓት", noData:"ምንም መረጃ የለም",
    disable:"አግድ", enable:"አንቃ", blocked:"ታግዷል", active_:"ንቁ",
    lowStockWarn:"⚠️ ዝቅተኛ ዕቃ — ያለቀ ነው",
    outStockWarn:"❌ ዕቃ አልቋል",
    dispatchedTo:"ወደ ሱቅ ተልኳል",
    pendingDelete:"ሰረዛው ኦነሩ እስቲያፀድቀው ይጠብቃል",
    approveDelete:"አጽድቅ",
    rejectDelete:"ውድቅ",
    roles:{owner:"ባለቤት",cutting:"ቆረጣ",sewing:"ስፌት",store:"ዕቃ ቤት",sales:"ሽያጭ",hr:"HR",procurement:"ግዥ ክፍል",marketing:"ማርኬቲንግ"},
    payTypes:{cash:"ጥሬ ገንዘብ",transfer:"ዝውውር",credit:"ብድር"},
    reportBtns:["📅 ዕለታዊ","📆 ሳምንታዊ","🗓️ ወርሃዊ","📊 ምርት","💰 ፋይናንስ","👥 HR","🏪 ቅርንጫፍ","🛒 ግዥ"],
    navProcurement:"ግዥ ክፍል", pageTitle_procurement:"ግዥ ክፍል",
    navChat:"ቻት", pageTitle_chat:"የቡድን ቻት", navNotes:"ማስታወሻ", pageTitle_notes:"የግል ማስታወሻ",
    navAssets:"ቋሚ ንብረቶች", pageTitle_assets:"ቋሚ ንብረቶች",
    navMarketing:"ማርኬቲንግ", pageTitle_marketing:"የማርኬቲንግ ስራ መዝገብ",
    btnAddProcurement:"+ ግዥ ትዕዛዝ ጨምር",
    procItem:"ዕቃ ስም", procQty:"ብዛት", procUnit:"መለኪያ", procCost:"ዋጋ (ETB)",
    procSupplier:"አቅራቢ", procBranch:"ለቅርንጫፍ", procNote:"ማስታወሻ",
    procStatus:{pending:"ይጠበቃል",approved:"ፀደቀ",rejected:"ውድቅ",received:"ደረሰ"},
    procPending:"ፀደቃ የሚጠብቅ ግዥ", procApproveMsg:"ግዥ ፀደቀ ✓", procRejectMsg:"ግዥ ውድቅ ሆነ",
    procSavedMsg:"የግዥ ትዕዛዝ ተልኳል — ኦነሩ ያፀድቃል ✓",
    procReceivedMsg:"ዕቃ ደረሰ ✓",
  },
  en: {
    loginSubtitle:"ERP Management System", lf1:"Multi-Branch", lf2:"Warehouse", lf3:"Reports", lf4:"Customers",
    lblUsername:"Username", lblPassword:"Password", loginBtn:"Sign In", loginHint:"Forgot password? Contact your manager",
    loginError:"Invalid username or password",
    sbChgPwd:"Change Password", sbLogout:"Sign Out", sbTagline:"ERP System",
    navDashboard:"Dashboard", navProduction:"Production", navCutting:"Cutting Dept", navSewing:"Sewing Dept",
    navStore:"Warehouse / Store", navSales:"Sales", navCustomers:"Regular Customers",
    navFinance:"Finance / Accounting", navHR:"HR", navHRReport:"HR Report", navAttendance:"Attendance",
    navReports:"Reports", navBranches:"Branch Management", navPrices:"Product Prices", navSalesReport:"Sales Report",
    pageTitle_dashboard:"Dashboard — Overview", pageTitle_production:"Production", pageTitle_cutting:"Cutting Department",
    pageTitle_sewing:"Sewing Department", pageTitle_store:"Store / Warehouse",
    pageTitle_sales:"Sales", pageTitle_customers:"Regular Customers",
    pageTitle_finance:"Finance / Accounting", pageTitle_hr:"HR Management",
    pageTitle_attendance:"Attendance", pageTitle_reports:"Reports",
    kpiRevenue:"Total Revenue (ETB)", kpiExpense:"Total Expenses (ETB)",
    kpiProfit:"Profit / Loss (ETB)", kpiItems:"Total Stock Items",
    kpiSales:"Today's Sales", kpiEmployees:"Employees",
    dashSalesChart:"Monthly Sales", dashProductChart:"Product Sales",
    dashFlowChart:"Production Flow", dashBranch:"Branch Stores", dashReports:"Reports",
    btnAddBranch:"+ Add Branch", btnAddCutting:"+ Add Cutting",
    btnAddSewing:"+ Add Sewing",
    btnAddSale:"+ Add Sale", btnAddExpense:"+ Add Expense",
    btnAddEmployee:"+ Add Employee",
    btnExport:"📥 PDF", btnPrint:"🖨️ Print",
    save:"Save", cancel:"Cancel", delete:"Delete", edit:"Edit",
    today:"Today", daily:"Daily", weekly:"Weekly", monthly:"Monthly",
    checkIn:"✅ Check In", alreadyChecked:"Already checked in today",
    checkedInAt:"Checked in at", noData:"No data available",
    disable:"Disable", enable:"Enable", blocked:"Blocked", active_:"Active",
    lowStockWarn:"⚠️ Low stock — running out",
    outStockWarn:"❌ Out of stock",
    dispatchedTo:"Dispatched to branch",
    pendingDelete:"Deletion pending owner approval",
    approveDelete:"Approve",
    rejectDelete:"Reject",
    roles:{owner:"Owner",cutting:"Cutting",sewing:"Sewing",store:"Store",sales:"Sales",hr:"HR",procurement:"Procurement",marketing:"Marketing"},
    payTypes:{cash:"Cash",transfer:"Transfer",credit:"Credit"},
    reportBtns:["📅 Daily","📆 Weekly","🗓️ Monthly","📊 Production","💰 Finance","👥 HR","🏪 Branch","🛒 Procurement"],
    navProcurement:"Procurement", pageTitle_procurement:"Procurement",
    navChat:"Chat", pageTitle_chat:"Team Chat", navNotes:"Notes", pageTitle_notes:"Private Notes",
    navAssets:"Fixed Assets", pageTitle_assets:"Fixed Assets",
    navMarketing:"Marketing", pageTitle_marketing:"Marketing Activity Log",
    btnAddProcurement:"+ Add Purchase Order",
    procItem:"Item Name", procQty:"Qty", procUnit:"Unit", procCost:"Cost (ETB)",
    procSupplier:"Supplier", procBranch:"For Branch", procNote:"Note",
    procStatus:{pending:"Pending",approved:"Approved",rejected:"Rejected",received:"Received"},
    procPending:"Procurement Pending Approval", procApproveMsg:"Purchase Approved ✓", procRejectMsg:"Purchase Rejected",
    procSavedMsg:"Purchase order submitted — awaiting owner approval ✓",
    procReceivedMsg:"Items Received ✓",
  }
};

// ── STATE ──────────────────────────────────────────────────────
let lang = 'am';
let currentUser = null;
let salesChartInst = null, productChartInst = null, flowChartInst = null;
const STORE_LOW = 10;  // store low stock threshold
const SALES_LOW = 5;   // sales low stock threshold

function loadData(key, def) {
  try { return JSON.parse(localStorage.getItem('a2_' + key)) || def; } catch { return def; }
}
function saveData(key, val) {
  localStorage.setItem('a2_' + key, JSON.stringify(val));
  if (key !== 'users') syncToServer(key, val); // `users` never goes through the generic endpoint — see refreshUsersCache()/user-management functions below
}
function getData(key) { return loadData(key, []); }

// ── SERVER SYNC (shared backend, so data + notifications work across
// devices/branches and even when a user's own browser is fully closed) ──
// Real login sessions (JWT), not a shared static secret: every request
// carries the token issued by POST /api/auth/login.
function getAuthToken() { return localStorage.getItem('a2_authToken') || ''; }
function setAuthToken(t) { if (t) localStorage.setItem('a2_authToken', t); else localStorage.removeItem('a2_authToken'); }
function apiHeaders() {
  const h = { 'Content-Type': 'application/json' };
  const token = getAuthToken();
  if (token) h['Authorization'] = 'Bearer ' + token;
  return h;
}
// Wrapper around fetch that returns parsed JSON and throws a readable
// Error (with the server's message) on any non-2xx response.
async function apiFetch(url, options = {}) {
  const res = await fetch(url, { ...options, headers: { ...apiHeaders(), ...(options.headers || {}) } });
  let body = null;
  try { body = await res.json(); } catch { /* no JSON body */ }
  if (!res.ok) {
    const msg = (body && body.error) ? body.error : `Request failed (${res.status})`;
    throw new Error(msg);
  }
  return body;
}
async function syncToServer(key, val) {
  try {
    await fetch('/api/sync/' + encodeURIComponent(key), {
      method: 'POST',
      headers: apiHeaders(),
      body: JSON.stringify({ value: val }),
    });
  } catch (e) {
    // Offline or server unreachable — localStorage already has the latest
    // data locally, so nothing is lost; it will sync again on the next save.
  }
}
// Pulls the full dataset (everything except `users`) from the server into
// localStorage. Call this before rendering, so every device starts from
// the shared latest data.
async function pullFromServer() {
  try {
    const res = await fetch('/api/sync', { headers: apiHeaders() });
    if (!res.ok) return false;
    const all = await res.json();
    Object.keys(all).forEach(key => {
      if (all[key] !== undefined) localStorage.setItem('a2_' + key, JSON.stringify(all[key]));
    });
    return true;
  } catch (e) {
    return false; // offline — fall back to whatever is already in localStorage
  }
}
// Refreshes the local (password-free) users cache from the authoritative
// server list. Call this after login and after any user/employee change.
async function refreshUsersCache() {
  try {
    const users = await apiFetch('/api/users');
    localStorage.setItem('a2_users', JSON.stringify(users));
    return users;
  } catch (e) {
    return getData('users'); // offline fallback: whatever was cached last
  }
}

// ── PUSH NOTIFICATIONS (real browser/phone push — arrives even if this
// tab/browser is closed, as long as the device is online) ──────────────
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding).replace(/-/g, '+').replace(/_/g, '/');
  const raw = atob(base64);
  return Uint8Array.from([...raw].map(c => c.charCodeAt(0)));
}
async function subscribeUserToPush() {
  if (!currentUser || !('serviceWorker' in navigator) || !('PushManager' in window)) return;
  try {
    const reg = await navigator.serviceWorker.ready;
    const keyRes = await fetch('/api/push/vapid-public-key', { headers: apiHeaders() });
    const { publicKey } = await keyRes.json();
    if (!publicKey) return; // backend hasn't set up VAPID keys yet
    let sub = await reg.pushManager.getSubscription();
    if (!sub) {
      sub = await reg.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: urlBase64ToUint8Array(publicKey),
      });
    }
    await fetch('/api/push/subscribe', {
      method: 'POST',
      headers: apiHeaders(),
      body: JSON.stringify({ subscription: sub }),
    });
  } catch (e) {
    console.error('Push subscription failed:', e);
  }
}
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js').catch(() => {});
  });
}

// Bump this whenever a delivery should start truly blank, even in a browser that already
// has older app data saved. On mismatch, every "a2_*" key is wiped before anything re-seeds.
const DATA_RESET_STAMP = 'blank-2026-07-08';
function wipeAllDataIfStampMismatch() {
  const stamp = localStorage.getItem('a2_resetStamp');
  if (stamp === DATA_RESET_STAMP) return;
  Object.keys(localStorage)
    .filter(k => k.startsWith('a2_'))
    .forEach(k => localStorage.removeItem(k));
  localStorage.setItem('a2_resetStamp', DATA_RESET_STAMP);
}

// ── INIT ──────────────────────────────────────────────────────
function initData() {
  wipeAllDataIfStampMismatch();
  // Force update branch names and add b3 if missing (migration v2)
  if (loadData('inited', false)) {
    const branches = loadData('branches', []);
    let changed = false;
    const nameMap = { b1:'የምርት ቦታ', b2:'ሸኖ ቅርንጫፍ', b3:'መኪና ላይ' };
    const locMap  = { b1:'Sheno', b2:'Sheno', b3:'Mobile' };
    const noSalesMap = { b1:true, b2:false, b3:false };
    ['b1','b2','b3'].forEach(id => {
      const existing = branches.find(b => b.id === id);
      if (!existing) {
        branches.push({ id, name:nameMap[id], location:locMap[id], active:true, noSales:noSalesMap[id] });
        changed = true;
      } else {
        if (existing.name !== nameMap[id] || existing.location !== locMap[id] || existing.noSales !== noSalesMap[id]) {
          existing.name     = nameMap[id];
          existing.location = locMap[id];
          existing.noSales  = noSalesMap[id];
          changed = true;
        }
      }
    });
    if (changed) saveData('branches', branches);

    // Ensure productPrices exists
    if (!loadData('productPrices', null)) {
      saveData('productPrices', [{ type:'ሸሚዝ', price:450 }, { type:'ሱሪ', price:650 }]);
    }

    // Migration v6: add procurement employee record if missing
    // (Note: the actual login account now lives in MySQL — add it via
    // backend/seed.js or the HR "Add Employee" screen, not here.)
    const empsV6 = loadData('employees', []);
    if (!empsV6.find(e => e.role === 'procurement')) {
      empsV6.push({ id:'emp6', name:'Hana Girma', role:'procurement', branch:'b1', phone:'0966666666', salary:5500, start:'2023-01-01', username:'procurement1', active:true });
      saveData('employees', empsV6);
    }
    // Ensure procurementOrders exists
    if (loadData('procurementOrders', null) === null) {
      saveData('procurementOrders', []);
    }

    // Migration v7: add marketing employee record if missing
    // (login account lives in MySQL — see note above)
    const empsV7 = loadData('employees', []);
    if (!empsV7.find(e => e.role === 'marketing')) {
      empsV7.push({ id:'emp7', name:'Selam Fikru', role:'marketing', branch:'b1', phone:'0977777777', salary:5000, start:'2023-01-01', username:'marketing1', active:true });
      saveData('employees', empsV7);
    }
    if (loadData('marketingLogs', null) === null) {
      saveData('marketingLogs', []);
    }
  }

  if (!loadData('inited', false)) {
    // Blank slate: only the owner account exists (created in MySQL via
    // `node backend/seed.js` — see README). Every other collection starts
    // empty so the owner builds the real business (branches, staff,
    // prices, stock...) from scratch.
    saveData('productPrices', []);
    saveData('refunds', []);
    saveData('branches', []);
    saveData('cutting', []);
    saveData('cuttingDamage', []);
    saveData('sewing', []);
    saveData('sewingDamage', []);
    saveData('store', []);       // master inventory (warehouse)
    saveData('branchStock', []); // items dispatched to branches
    saveData('dispatches', []);  // dispatch log
    saveData('sales', []);
    saveData('customers', []);
    saveData('expenses', []);
    saveData('raw', []);
    saveData('employees', []);
    saveData('attendance', []);
    saveData('pendingDeletes', []); // pending delete requests
    saveData('wholesale', []); // wholesale sales
    saveData('branchLoans', []); // branch-to-branch loans
    saveData('sewingWorkers', []); // sewing department workers
    saveData('marketingLogs', []); // marketing team activity log
    saveData('pendingTransfers', []); // all transfer-payment sales, awaiting owner approval
    saveData('procurementOrders', []); // procurement orders awaiting owner approval
    saveData('rawStock', []);
    saveData('storeTransfers', []);
    saveData('rawDispatches', []);
    saveData('cuttingRaw', []);
    saveData('sewingRaw', []);
    saveData('sewingCutStock', []);
    saveData('sewingDeptMeta', []); // re-seeded automatically with the built-in departments on first use
    saveData('prodFlow', []);
    saveData('fixedAssets', []);
    saveData('teamChat', []);
    saveData('chatLastSeen', []);
    saveData('ownerNotes', []);
    saveData('paymentChannels', []);
    saveData('inited', true);
  } // end if !inited

  // ── Always ensure new keys exist (migration for existing users) ──
  if (loadData('storeTransfers', null) === null) saveData('storeTransfers', []);
  if (loadData('rawStock', null) === null) saveData('rawStock', []);
  if (loadData('rawDispatches', null) === null) saveData('rawDispatches', []);
  if (loadData('cuttingRaw', null) === null) saveData('cuttingRaw', []);
  if (loadData('sewingRaw', null) === null) saveData('sewingRaw', []);

  // Sync procurement expenses into finance
  syncProcurementExpenses();
} // end initData

// ── EXPENSE & PROCUREMENT SYNCHRONIZATION ────────────────────────
function syncProcurementExpenses() {
  const orders = getData('procurementOrders') || [];
  const expenses = getData('expenses') || [];

  const validOrders = orders.filter(o => o.status === 'approved' || o.status === 'received');

  // Keep non-procurement manual expenses (e.g. rent, salary, utilities, etc.)
  const nonProcExpenses = expenses.filter(e => {
    if (e.procOrderId) return false;
    const cat = (e.category || '').trim();
    const desc = (e.desc || '').trim();
    if (cat === 'ግዥ' || cat === 'Procurement' || desc.includes('ትዕዛዝ #') || desc.includes('Order #')) {
      return false;
    }
    return true;
  });

  // Generate clean procurement expense entries for all valid orders
  const procExpenses = validOrders.map(o => {
    const cost = Number(o.cost) || 0;
    const shortId = o.id ? o.id.slice(-5) : '';
    const existing = expenses.find(e => e.procOrderId === o.id || (shortId && e.desc && e.desc.includes(`#${shortId}`)));
    return {
      id: existing ? existing.id : uid(),
      date: o.date || new Date().toISOString().slice(0, 10),
      category: lang === 'am' ? 'ግዥ' : 'Procurement',
      amount: cost,
      branch: o.branch || 'b1',
      desc: `${o.item} × ${o.qty} ${o.unit || ''} | ${lang === 'am' ? 'አቅራቢ' : 'Supplier'}: ${o.supplier || '—'} | ${lang === 'am' ? 'ትዕዛዝ' : 'Order'} #${shortId}`,
      procOrderId: o.id
    };
  });

  const synced = [...nonProcExpenses, ...procExpenses];

  if (JSON.stringify(expenses) !== JSON.stringify(synced)) {
    saveData('expenses', synced);
  }
  return synced;
}


// ── LANGUAGE ──────────────────────────────────────────────────
function setLang(l) {
  lang = l;
  document.documentElement.lang = l === 'am' ? 'am' : 'en';
  ['langAmBtn','langEnBtn'].forEach(id => document.getElementById(id)?.classList.toggle('active', id === (l==='am'?'langAmBtn':'langEnBtn')));
  ['topLangAm','topLangEn'].forEach(id => document.getElementById(id)?.classList.toggle('active', id === (l==='am'?'topLangAm':'topLangEn')));
  applyTranslations();
  updateBackBtn();
  if (currentUser) refreshActivePanel();
}
function t(key) { return T[lang][key] || T['en'][key] || key; }

function applyTranslations() {
  const map = {
    loginSubtitle:'loginSubtitle', lf1:'lf1', lf2:'lf2', lf3:'lf3', lf4:'lf4',
    lblUsername:'lblUsername', lblPassword:'lblPassword', loginBtn:'loginBtn', loginHint:'loginHint',
    sbChgPwd:'sbChgPwd', sbLogout:'sbLogout', sbTagline:'sbTagline',
  };
  Object.entries(map).forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) el.textContent = T[lang][key] || key;
  });
  // Update dept tab labels
  const tabLabels = lang === 'am'
    ? { owner:'ባለቤት', production:'ምርት', sales:'ሽያጭ', hr:'HR', procurement:'ግዥ ክፍል', marketing:'ማርኬቲንግ' }
    : { owner:'Owner', production:'Production', sales:'Sales', hr:'HR', procurement:'Procurement', marketing:'Marketing' };
  Object.entries(tabLabels).forEach(([dept, label]) => {
    const tab = document.querySelector(`.dept-tab[data-dept="${dept}"] span:last-child`);
    if (tab) tab.textContent = label;
  });
  // Procurement tab label
  const procTab = document.getElementById('tabProcurement');
  if (procTab) procTab.textContent = lang==='am'?'ግዥ ክፍል':'Procurement';
  // Refresh branch dropdown if visible
  if (selectedDept === 'sales') populateBranchSelect();
  if (currentUser) buildSidebar();
}

// ── LOGIN ──────────────────────────────────────────────────────
let selectedDept = 'owner';

function selectDept(dept) {
  selectedDept = dept;
  document.querySelectorAll('.dept-tab').forEach(t => t.classList.remove('active'));
  const tab = document.querySelector(`.dept-tab[data-dept="${dept}"]`);
  if (tab) tab.classList.add('active');
  const branchWrap = document.getElementById('branchSelectWrap');
  if (dept === 'sales') {
    branchWrap.classList.remove('hidden');
    populateBranchSelect();
  } else {
    branchWrap.classList.add('hidden');
  }
}


async function doLogin() {
  const username = document.getElementById('loginUsername').value.trim();
  const password = document.getElementById('loginPassword').value;
  const errEl = document.getElementById('loginError');
  errEl.classList.add('hidden');

  // If sales dept selected, check branch first
  if (selectedDept === 'sales') {
    const branchVal = document.getElementById('loginBranch').value;
    if (!branchVal) {
      errEl.textContent = lang === 'am' ? 'እባክዎ ብራንች ይምረጡ' : 'Please select a branch';
      errEl.classList.remove('hidden');
      return;
    }
  }

  let loginResult;
  try {
    loginResult = await apiFetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
    });
  } catch (e) {
    // Server message is already user-safe ("Invalid username or password", "This account is blocked", ...)
    errEl.textContent = e.message === 'Invalid username or password' ? t('loginError')
      : (e.message === 'This account is blocked' ? (lang==='am'?'ይህ ሂሳብ ታግዷል':'This account is blocked') : e.message);
    errEl.classList.remove('hidden');
    return;
  }

  const user = loginResult.user;

  // Validate dept matches user role
  const deptRoleMap = { owner: ['owner'], production: ['cutting','sewing','store'], sales: ['sales'], hr: ['hr'], procurement: ['procurement'], marketing: ['marketing'] };
  const allowedRoles = deptRoleMap[selectedDept] || [];
  if (!allowedRoles.includes(user.role)) {
    const deptNames = { am: {owner:'ባለቤት',production:'ምርት',sales:'ሽያጭ',hr:'HR',procurement:'ግዥ ክፍል',marketing:'ማርኬቲንግ'}, en: {owner:'Owner',production:'Production',sales:'Sales',hr:'HR',procurement:'Procurement',marketing:'Marketing'} };
    const dName = deptNames[lang][selectedDept] || selectedDept;
    errEl.textContent = lang==='am' ? `ይህ ሂሳብ ለ${dName} ዘርፍ አይደለም` : `This account does not belong to ${dName} department`;
    errEl.classList.remove('hidden');
    return;
  }

  // If sales, verify user belongs to the selected branch (prevent cross-branch login)
  if (selectedDept === 'sales') {
    const branchVal = document.getElementById('loginBranch').value;
    if (user.branch !== branchVal) {
      errEl.textContent = lang==='am'
        ? 'ይህ ሠራተኛ ለዚህ ብራንች አልተመደበም'
        : 'This employee is not assigned to the selected branch';
      errEl.classList.remove('hidden');
      return;
    }
    user.loginBranch = branchVal;
  }

  setAuthToken(loginResult.token);
  currentUser = user;
  if (currentUser.loginBranch) currentUser.branch = currentUser.loginBranch;

  // Now that we have a valid session, pull the shared business data + the
  // authoritative (password-free) user list before rendering anything.
  await Promise.all([pullFromServer(), refreshUsersCache()]);

  document.getElementById('loginScreen').classList.add('hidden');
  document.getElementById('appShell').classList.remove('hidden');

  document.getElementById('sidebarAvatar').textContent = user.name.charAt(0).toUpperCase();
  document.getElementById('sidebarUserName').textContent = user.name;
  document.getElementById('sidebarUserRole').textContent = T[lang].roles[user.role] || user.role;
  document.getElementById('topbarBranch').textContent = getBranchName(user.branch);

  buildSidebar();
  // Navigate to the right first panel per role
  const firstPanel = {
    owner: 'dashboard',
    hr: 'hrgroup',
    procurement: 'procurement',
    cutting: 'cutting',
    sewing: 'sewing',
    store: 'store',
    sales: 'sales',
  };
  navigateTo(firstPanel[user.role] || 'attendance');
  startClock();

  initNotifications();
  if (isNotificationSupported() && Notification.permission === 'granted') {
    subscribeUserToPush(); // silently re-register this device/user pair with the backend
  }
}

function doLogout() {
  stopNotifications();
  setAuthToken(null);
  currentUser = null;
  posCart = [];
  navHistory = [];
  currentPanelId = null;
  updateBackBtn();

  // Hide overlays that might cover login
  const bb = document.getElementById('bottomCartBar'); if (bb) bb.style.display = 'none';
  const cm = document.getElementById('cartModal'); if (cm) cm.style.display = 'none';
  const toast = document.getElementById('itemAddedToast'); if (toast) toast.classList.remove('toast-visible');

  document.getElementById('appShell').classList.add('hidden');
  document.getElementById('loginScreen').classList.remove('hidden');
  document.getElementById('loginUsername').value = '';
  document.getElementById('loginPassword').value = '';
  document.getElementById('loginError').classList.add('hidden');

  // Reset to owner tab
  selectDept('owner');
}

// ── BROWSER NOTIFICATIONS (chat + approval queue) ────────────────
// Uses the Notification API. This works as long as the browser tab/window is
// open somewhere — including while it's in the background, minimized, or
// another tab is focused — because the page's JS keeps running. It CANNOT
// wake up a fully closed browser; true "closed browser" push notifications
// need a server that can push to the device, which this app (local-storage
// only, no backend) does not have.
const NOTIF_LABELS = {
  am: { procurement:'ግዥ', store:'ዕቃ ቤት', cutting:'ካቲንግ', sewing:'ስፌት', dashboard:'ተጠባቂ ማጽደቆች', sales:'ሽያጭ', salesreport:'ሽያጭ ሪፖርት' },
  en: { procurement:'Procurement', store:'Store', cutting:'Cutting', sewing:'Sewing', dashboard:'Pending approvals', sales:'Sales', salesreport:'Sales report' },
};
let notifBadgeSnapshot = {};
let notifChatSnapshot = {};
let notifBaselineReady = false;
let notifPollInterval = null;

function isNotificationSupported() { return typeof Notification !== 'undefined'; }

function updateNotifBell() {
  const btn = document.getElementById('notifBellBtn');
  if (!btn) return;
  if (!isNotificationSupported()) { btn.style.display = 'none'; return; }
  btn.textContent = Notification.permission === 'granted' ? '🔔' : '🔕';
  btn.title = Notification.permission === 'granted'
    ? (lang==='am' ? 'ኖትፍኬሽን በርቷል' : 'Notifications on')
    : (lang==='am' ? 'ኖትፍኬሽን ለማብራት ይጫኑ' : 'Click to enable notifications');
}

function toggleNotificationPermission() {
  if (!isNotificationSupported()) {
    toast(lang==='am' ? 'ይህ አሳሽ ኖትፍኬሽን አይደግፍም' : 'This browser does not support notifications', 'error');
    return;
  }
  if (Notification.permission === 'granted') {
    toast(lang==='am' ? '🔔 ኖትፍኬሽን ተከፍቷል' : '🔔 Notifications are already on');
    return;
  }
  if (Notification.permission === 'denied') {
    toast(lang==='am' ? '🔕 ኖትፍኬሽን ታግዷል — ከአሳሽዎ ቅንብር (site settings) ውስጥ ይፍቀዱ' : '🔕 Notifications are blocked — allow them from your browser site settings', 'error');
    return;
  }
  Notification.requestPermission().then(perm => {
    updateNotifBell();
    if (perm === 'granted') {
      subscribeUserToPush(); // register this device for real push (works even when the app is closed)
      notifyUser(
        lang==='am' ? '✅ ኖትፍኬሽን ተከፍቷል' : '✅ Notifications enabled',
        lang==='am' ? 'ከአሁን በኋላ አዳዲስ ቻት መልእክቶች እና ማጽደቅ የሚያስፈልጋቸው ጉዳዮች ሲኖሩ ያሳውቁዎታል' : "You'll now be notified about new chat messages and items needing approval"
      );
    } else if (perm === 'denied') {
      toast(lang==='am' ? '🔕 ኖትፍኬሽን ውድቅ ተደርጓል' : '🔕 Notification permission denied', 'error');
    }
  });
}

function notifyUser(title, body, tag, onClickPanel) {
  if (!isNotificationSupported() || Notification.permission !== 'granted') return;
  try {
    const n = new Notification(title, { body, tag, icon: 'logo.png' });
    n.onclick = () => {
      window.focus();
      if (onClickPanel) navigateTo(onClickPanel);
      n.close();
    };
  } catch (e) { /* Notification constructor unsupported on some mobile browsers — fail silently */ }
}

// Re-run on every buildSidebar() (normal render cycle) and on cross-tab
// storage changes, so approval badges and unread chat are checked often.
function checkForNewNotifications() {
  if (!currentUser) return;
  const role = currentUser.role;
  const watchByRole = {
    owner: ['dashboard','store','cutting','sewing','procurement'],
    cutting: ['cutting'], sewing: ['sewing'], store: ['store'],
    sales: ['sales','salesreport'], procurement: [], hr: [], marketing: [],
  };
  const idsToWatch = watchByRole[role] || [];

  if (!notifBaselineReady) {
    // First check this session — just record current counts silently so
    // logging in doesn't trigger a burst of notifications for things that
    // were already pending before this session started.
    idsToWatch.forEach(id => { notifBadgeSnapshot[id] = getNavBadgeCount(id, role).count; });
    notifChatSnapshot = getLatestMessageIdsPerConversation();
    notifBaselineReady = true;
    return;
  }

  idsToWatch.forEach(id => {
    const newCount = getNavBadgeCount(id, role).count;
    const prevCount = notifBadgeSnapshot[id] || 0;
    if (newCount > prevCount) {
      const label = (NOTIF_LABELS[lang] && NOTIF_LABELS[lang][id]) || id;
      notifyUser(
        lang==='am' ? `🔔 አዲስ ማሳወቂያ — ${label}` : `🔔 New notification — ${label}`,
        lang==='am' ? `${newCount - prevCount} አዲስ ፍቃድ የሚያስፈልገው ጉዳይ አለ` : `${newCount - prevCount} new item needs your attention`,
        'badge-' + id, id
      );
    }
    notifBadgeSnapshot[id] = newCount;
  });

  checkForNewChatNotifications();
}

function getLatestMessageIdsPerConversation() {
  const snap = {};
  getData('teamChat').filter(isMessageVisibleToMe).forEach(m => { snap[getConvKeyForMessage(m)] = m.id; });
  return snap;
}

function checkForNewChatNotifications() {
  const messages = getData('teamChat').filter(isMessageVisibleToMe);
  const byConv = {};
  messages.forEach(m => { (byConv[getConvKeyForMessage(m)] = byConv[getConvKeyForMessage(m)] || []).push(m); });
  Object.keys(byConv).forEach(convKey => {
    const convMessages = byConv[convKey];
    const lastSeenId = notifChatSnapshot[convKey];
    const lastSeenIdx = lastSeenId ? convMessages.findIndex(m => m.id === lastSeenId) : -1;
    const newOnes = convMessages.slice(lastSeenIdx + 1).filter(m => m.from !== currentUser.username);
    if (newOnes.length) {
      const last = newOnes[newOnes.length - 1];
      const preview = last.image ? '📷 ' + (lang==='am'?'ፎቶ':'Photo') : last.audio ? '🎤 ' + (lang==='am'?'የድምፅ መልእክት':'Voice message') : last.text;
      notifyUser(
        `💬 ${last.fromName}`,
        newOnes.length > 1 ? `${preview} (+${newOnes.length - 1} ${lang==='am'?'ተጨማሪ':'more'})` : preview,
        'chat-' + convKey, 'chat'
      );
    }
    if (convMessages.length) notifChatSnapshot[convKey] = convMessages[convMessages.length - 1].id;
  });
}

const NOTIF_WATCHED_KEYS = ['a2_teamChat','a2_procurementOrders','a2_storeTransfers','a2_pendingTransfers','a2_wholesale','a2_branchLoans','a2_prodFlow'];
function handleCrossTabStorageChange(ev) {
  if (!currentUser) return;
  if (!ev.key || !NOTIF_WATCHED_KEYS.includes(ev.key)) return;
  checkForNewNotifications();
}

function initNotifications() {
  notifBaselineReady = false;
  notifBadgeSnapshot = {};
  notifChatSnapshot = {};
  updateNotifBell();
  checkForNewNotifications(); // silently records the starting point

  // Cross-tab: fires when a DIFFERENT tab/window of this app changes
  // localStorage — e.g. someone else sends a chat message or submits an
  // approval request from another logged-in session on this browser —
  // even while this tab is unfocused or minimized.
  window.removeEventListener('storage', handleCrossTabStorageChange);
  window.addEventListener('storage', handleCrossTabStorageChange);

  // Fallback poll (covers same-tab edge cases / browsers with unreliable
  // storage events). Timers keep firing while the tab is backgrounded,
  // just possibly throttled to once a minute or so by the browser.
  clearInterval(notifPollInterval);
  notifPollInterval = setInterval(async () => {
    if (!currentUser) return;
    await pullFromServer();
    checkForNewNotifications();
    if (typeof renderCurrentPanel === 'function') renderCurrentPanel();
  }, 15000);
}

function stopNotifications() {
  clearInterval(notifPollInterval);
  window.removeEventListener('storage', handleCrossTabStorageChange);
  notifBaselineReady = false;
}


function buildSidebar() {
  const nav = document.getElementById('sidebarNav');
  nav.innerHTML = '';
  const role = currentUser.role;

  const menus = {
    owner:      ['dashboard','branches','production','finance','hrgroup','procurement','reports','assets','marketing','chat','notes'],
    cutting:    ['cutting','attendance','chat'],
    sewing:     ['sewing','attendance','chat'],
    store:      ['store','attendance','chat'],
    sales:      ['sales','salesreport','customers','assets','attendance','chat'],
    hr:         ['hrgroup','attendance','chat'],
    procurement: ['procurement','attendance','chat'],
    marketing:  ['marketing','attendance','chat'],
  };

  // Production-site sales staff see no sales/finance
  const isProductionBranch = currentUser.branch === 'b1';
  if (isProductionBranch && currentUser.role === 'sales') {
    menus['sales'] = ['attendance'];
  }

  const navConfig = {
    dashboard:  { icon:'🏠', key:'navDashboard' },
    branches:   { icon:'🏪', key:'navBranches' },
    prices:     { icon:'💰', key:'navPrices' },
    production: { icon:'🏭', key:'navProduction' },
    cutting:    { icon:'✂️', key:'navCutting' },
    sewing:     { icon:'🪡', key:'navSewing' },
    store:      { icon:'📦', key:'navStore' },
    salesreport:{ icon:'📊', key:'navSalesReport' },
    sales:      { icon:'🛍️', key:'navSales' },
    customers:  { icon:'👤', key:'navCustomers' },
    finance:    { icon:'💵', key:'navFinance' },
    hrgroup:    { icon:'👥', key:'navHR' },
    hr:         { icon:'👥', key:'navHR' },
    hrreport:   { icon:'📋', key:'navHRReport' },
    attendance: { icon:'✅', key:'navAttendance' },
    reports:    { icon:'📊', key:'navReports' },
    procurement:{ icon:'🛒', key:'navProcurement' },
    assets:     { icon:'🏛️', key:'navAssets' },
    marketing:  { icon:'📣', key:'navMarketing' },
    chat:       { icon:'💬', key:'navChat' },
    notes:      { icon:'📝', key:'navNotes' },
  };

  (menus[role] || ['attendance']).forEach(id => {
    const cfg = navConfig[id];
    const item = document.createElement('div');
    item.className = 'nav-item';
    item.dataset.panel = id;
    // Badge: owner sees pending count on dashboard, staff sees approved (ready to hand off) on salesreport
    const { count: badgeCount, color: badgeColor } = getNavBadgeCount(id, role);
    const badge = badgeCount ? `<span style="margin-left:auto;background:${badgeColor};color:#000;font-size:10px;font-weight:700;padding:1px 6px;border-radius:10px;min-width:16px;text-align:center">${badgeCount}</span>` : '';
    item.innerHTML = `<span class="nav-icon">${cfg.icon}</span><span class="nav-label">${T[lang][cfg.key]}</span>${badge}`;
    item.onclick = () => navigateTo(id);
    nav.appendChild(item);
  });
  checkForNewNotifications();
}

// Pulled out of buildSidebar so the same counts can be reused by the
// background notification checker (see checkForNewNotifications below).
function getNavBadgeCount(id, role) {
  let badgeCount = 0;
  let badgeColor = '#FFA726';
  if (id === 'procurement' && role === 'owner') {
    badgeCount = getData('procurementOrders').filter(p => p.status === 'pending').length;
    badgeColor = '#FFA726';

  } else if (id === 'store' && role === 'owner') {
    // store→branch transfers awaiting owner approval + incoming shipments awaiting store confirmation
    const pendingBranchTr = getData('storeTransfers').filter(t => t.status === 'pending_owner').length;
    const incomingProc = getData('prodFlow').filter(x => x.stage==='proc_store' && x.status==='pending').length;
    const incomingSew  = getData('prodFlow').filter(x => x.stage==='sewing_store' && x.status==='pending').length;
    badgeCount = pendingBranchTr + incomingProc + incomingSew;
    badgeColor = '#FFA726';
  } else if (id === 'store' && role === 'store') {
    // incoming shipments (from Procurement + Sewing) awaiting this store staff's confirmation
    badgeCount = getData('prodFlow').filter(x => (x.stage==='proc_store'||x.stage==='sewing_store') && x.status==='pending').length;
    badgeColor = '#4FC3F7';
  } else if (id === 'cutting' && (role === 'cutting' || role === 'owner')) {
    // incoming raw material from Store awaiting confirmation
    badgeCount = getData('prodFlow').filter(x => x.stage==='store_cutting' && x.status==='pending').length;
    badgeColor = '#4FC3F7';
  } else if (id === 'sewing' && (role === 'sewing' || role === 'owner')) {
    // incoming cut pieces from Cutting awaiting confirmation
    badgeCount = getData('prodFlow').filter(x => x.stage==='cutting_sewing' && x.status==='pending').length;
    badgeColor = '#4FC3F7';
  } else if (id === 'dashboard' && role === 'owner') {
    // combine pending store transfers + pending wholesale
    const wsPending = getData('wholesale').filter(w => w.status === 'pending').length;
    badgeCount = getData('pendingTransfers').filter(p => p.status === 'pending').length + wsPending;
    badgeColor = '#FFA726';
  } else if (id === 'sales' && role === 'sales') {
    // incoming transfers + branch loans ready for this sales staff to confirm receipt
    const incomingTr   = getData('storeTransfers').filter(t => t.status === 'pending_receiver' && t.branch === currentUser.branch).length;
    const incomingLoan = getData('branchLoans').filter(l => l.status === 'pending_receiver' && l.toBranch === currentUser.branch).length;
    badgeCount = incomingTr + incomingLoan;
    badgeColor = '#4FC3F7';
  } else if (id === 'salesreport' && role === 'sales') {
    // approved pending-transfer requests waiting for hand-off
    badgeCount = getData('pendingTransfers').filter(p => p.branch === currentUser.branch && p.status === 'approved').length;
    badgeColor = '#4CAF50';
  } else if (id === 'chat') {
    badgeCount = getUnreadChatCount();
    badgeColor = '#4FC3F7';
  }
  return { count: badgeCount, color: badgeColor };
}

let navHistory = [];
let currentPanelId = null;

function navigateTo(panelId, isBack = false) {
  if (!isBack) {
    if (currentPanelId && currentPanelId !== panelId) {
      navHistory.push(currentPanelId);
      if (navHistory.length > 30) navHistory.shift();
    }
  }
  currentPanelId = panelId;

  document.querySelectorAll('.panel').forEach(p => p.classList.add('hidden'));
  // All .prod-panel elements (not .panel) live nested inside a wrapper group
  // (production, finance, hrgroup). Hide every one of them explicitly too, or
  // a previously-shown one can stay visible when navigating to an unrelated
  // section, since the top-level loop above only targets .panel.
  document.querySelectorAll('.prod-panel').forEach(p => p.classList.add('hidden'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const panel = document.getElementById('panel-' + panelId);
  if (panel) panel.classList.remove('hidden');

  // Some panels are nested .prod-panel elements reached two ways:
  //   1) OWNER, via a sub-tab inside the merged wrapper — show the wrapper AND
  //      its sub-tab bar, hide sibling sub-panels.
  //   2) A single-department STAFF role, via their own dedicated standalone nav
  //      item (cutting/sewing/store/sales staff) — the wrapper must still be
  //      revealed (a hidden parent hides this nested child regardless of the
  //      child's own class), but the sub-tab bar must stay hidden so staff only
  //      see their one panel, with no other tabs visible.
  const nestedPanelWrappers = {
    cutting: 'panel-production', sewing: 'panel-production', store: 'panel-production', prices: 'panel-production', wholesale: 'panel-production',
    sales: 'panel-finance',
    customers: 'panel-hrgroup',
  };
  const wrapperId = nestedPanelWrappers[panelId];
  if (wrapperId) {
    const wrapper = document.getElementById(wrapperId);
    if (wrapper) {
      wrapper.classList.remove('hidden');
      wrapper.querySelectorAll('.prod-panel').forEach(p => p.classList.add('hidden'));
      if (panel) panel.classList.remove('hidden');
      if (wrapperId === 'panel-production') currentProdTab = panelId;
      else if (wrapperId === 'panel-hrgroup') currentHRTab = panelId;
      else if (wrapperId === 'panel-finance') currentFinanceTab = panelId;
      const subtabBar = wrapper.querySelector('.prod-subtabs');
      const isOwner = currentUser && currentUser.role === 'owner';
      if (subtabBar) subtabBar.style.display = isOwner ? '' : 'none';
    }
  }

  const navItem = document.querySelector(`.nav-item[data-panel="${panelId}"]`);
  if (navItem) navItem.classList.add('active');
  const titleKey = 'pageTitle_' + panelId;
  document.getElementById('pageTitle').textContent = T[lang][titleKey] || panelId;
  renderPanel(panelId);
  updateBackBtn();
  if (window.innerWidth <= 768) document.getElementById('sidebar').classList.remove('mobile-open');
}

function goBackNav() {
  if (navHistory.length > 0) {
    const prevPanel = navHistory.pop();
    navigateTo(prevPanel, true);
  } else {
    const homePanel = (currentUser && currentUser.role === 'owner') ? 'dashboard' : 'attendance';
    if (currentPanelId !== homePanel) {
      navigateTo(homePanel, true);
    }
  }
}

function updateBackBtn() {
  const backBtn = document.getElementById('backNavBtn');
  if (!backBtn) return;
  const homePanel = (currentUser && currentUser.role === 'owner') ? 'dashboard' : 'attendance';
  const shouldShow = navHistory.length > 0 || (currentPanelId && currentPanelId !== homePanel);
  backBtn.classList.toggle('hidden', !shouldShow);
  const backTextEl = document.getElementById('backNavBtnText');
  if (backTextEl) {
    backTextEl.textContent = lang === 'am' ? 'ወደ ኋላ' : 'Back';
  }
}

function refreshActivePanel() {
  const active = document.querySelector('.panel:not(.hidden)');
  if (active) renderPanel(active.id.replace('panel-', ''));
}

// ── PRODUCTION (merged Cutting + Sewing + Store) ──────────────────
let currentProdTab = 'cutting';

function renderProductionTab() {
  switchProductionTab(currentProdTab);
}

function switchProductionTab(sub) {
  currentProdTab = sub;
  const wrapper = document.getElementById('panel-production');
  if (wrapper) {
    wrapper.querySelectorAll('.prod-panel').forEach(p => p.classList.add('hidden'));
    const target = document.getElementById('panel-' + sub);
    if (target) target.classList.remove('hidden');
    // Always show the sub-tab bar here — this function only runs when someone
    // is actively clicking a sub-tab inside the merged Production group (owner UI).
    const subtabBar = wrapper.querySelector('.prod-subtabs');
    if (subtabBar) subtabBar.style.display = '';
    wrapper.querySelectorAll('.prod-subtab').forEach(btn => {
      const isActive = btn.dataset.sub === sub;
      btn.classList.toggle('active', isActive);
      btn.style.borderBottomColor = isActive ? 'var(--gold)' : 'transparent';
      btn.style.color = isActive ? 'var(--gold)' : 'var(--white-dim)';
      btn.style.fontWeight = isActive ? '700' : '600';
    });
  }
  // Render the relevant data for that sub-tab
  if (sub === 'cutting') renderCutting();
  else if (sub === 'sewing') renderSewing();
  else if (sub === 'store') renderStore();
  else if (sub === 'prices') renderPrices();
  else if (sub === 'wholesale') renderWholesale();
}

// ── HR GROUP (merged Employee list + HR Report) ────────────────────
let currentHRTab = 'hr';

function renderHRGroupTab() {
  switchHRTab(currentHRTab);
}

function switchHRTab(sub) {
  currentHRTab = sub;
  // Toggle sub-panels (scoped to the HR group wrapper)
  const wrapper = document.getElementById('panel-hrgroup');
  if (wrapper) {
    wrapper.querySelectorAll('.prod-panel').forEach(p => p.classList.add('hidden'));
    const target = document.getElementById('panel-' + sub);
    if (target) target.classList.remove('hidden');
    // Always show the sub-tab bar here — this function only runs when someone
    // is actively clicking a sub-tab inside the merged HR group (owner UI).
    const subtabBar = wrapper.querySelector('.prod-subtabs');
    if (subtabBar) subtabBar.style.display = '';
    // Toggle sub-tab button styles (scoped to this wrapper only)
    wrapper.querySelectorAll('.prod-subtab').forEach(btn => {
      const isActive = btn.dataset.sub === sub;
      btn.classList.toggle('active', isActive);
      btn.style.borderBottomColor = isActive ? 'var(--gold)' : 'transparent';
      btn.style.color = isActive ? 'var(--gold)' : 'var(--white-dim)';
      btn.style.fontWeight = isActive ? '700' : '600';
    });
  }
  // Render the relevant data
  if (sub === 'hr') renderHR();
  else if (sub === 'hrreport') renderHRReport();
  else if (sub === 'customers') renderCustomers();
}

// ── FINANCE GROUP (merged Finance + Sales) ──────────────────────
let currentFinanceTab = 'financemain';

function renderFinanceGroupTab() {
  switchFinanceTab(currentFinanceTab);
}

function switchFinanceTab(sub) {
  currentFinanceTab = sub;
  const wrapper = document.getElementById('panel-finance');
  if (wrapper) {
    wrapper.querySelectorAll('.prod-panel').forEach(p => p.classList.add('hidden'));
    const target = document.getElementById('panel-' + sub);
    if (target) target.classList.remove('hidden');
    // Always show the sub-tab bar here — this function only runs when someone
    // is actively clicking a sub-tab inside the merged Finance group (owner UI).
    const subtabBar = wrapper.querySelector('.prod-subtabs');
    if (subtabBar) subtabBar.style.display = '';
    wrapper.querySelectorAll('.prod-subtab').forEach(btn => {
      const isActive = btn.dataset.sub === sub;
      btn.classList.toggle('active', isActive);
      btn.style.borderBottomColor = isActive ? 'var(--gold)' : 'transparent';
      btn.style.color = isActive ? 'var(--gold)' : 'var(--white-dim)';
      btn.style.fontWeight = isActive ? '700' : '600';
    });
  }
  // Render the relevant data
  if (sub === 'financemain') renderFinance();
  else if (sub === 'sales') renderSales();
}

function renderPanel(id) {
  switch(id) {
    case 'dashboard':  renderDashboard(); break;
    case 'branches':   renderBranchMgmt(); break;
    case 'prices':     renderPrices(); break;
    case 'wholesale':  renderWholesale(); break;
    case 'salesreport': renderSalesReport(); break;
    case 'production': renderProductionTab(); break;
    case 'cutting':    renderCutting(); break;
    case 'sewing':     renderSewing(); break;
    case 'store':      renderStore(); break;
    case 'sales':      renderSales(); break;
    case 'customers':  renderCustomers(); break;
    case 'finance':    renderFinanceGroupTab(); break;
    case 'financemain': renderFinance(); break;
    case 'hrgroup':    renderHRGroupTab(); break;
    case 'hr':         renderHR(); break;
    case 'hrreport':   renderHRReport(); break;
    case 'attendance': renderAttendance(); break;
    case 'reports':    renderReports(); break;
    case 'procurement': renderProcurement(); break;
    case 'chat':        renderChat(); break;
    case 'notes':       renderNotes(); break;
    case 'assets':      renderAssets(); break;
    case 'marketing':   renderMarketing(); break;
  }
}

// ── TEAM CHAT (group channel + 1:1 direct messages) ─────────────
let currentChatTarget = 'group';
const CHAT_AVATAR_COLORS = ['#4FC3F7','#80e080','#FFA726','#F06292','#BA68C8','#4DD0E1','#FF8A65','#AED581','#64B5F6','#DCE775'];

function avatarColorFor(key) {
  let hash = 0;
  for (let i=0; i<key.length; i++) hash = key.charCodeAt(i) + ((hash<<5)-hash);
  return CHAT_AVATAR_COLORS[Math.abs(hash) % CHAT_AVATAR_COLORS.length];
}

function getUserBranchLabel(u) {
  if (!u || !u.branch) return '';
  const br = getData('branches').find(b => b.id === u.branch);
  return br ? br.name : '';
}

// Who the current user is allowed to direct-message:
// the Owner can DM any active staff member; everyone else can only DM the Owner
// (staff cannot message each other directly — only through the group channel).
function getChatUsers() {
  const employees = getData('employees');
  const seen = new Set();
  const validUsers = [];
  getData('users').forEach(u => {
    if (u.username === currentUser.username) return;     // exclude self
    if (u.active === false) return;                       // exclude deactivated accounts
    if (seen.has(u.username)) return;                      // de-dupe accidental duplicate entries
    if (u.role !== 'owner') {
      // Non-owner accounts must have a matching, currently-active employee record —
      // this keeps stale/orphaned or removed staff out of the chat list.
      const emp = employees.find(e => e.username === u.username);
      if (!emp || emp.active === false) return;
    }
    seen.add(u.username);
    validUsers.push(u);
  });
  const list = currentUser.role === 'owner' ? validUsers : validUsers.filter(u => u.role === 'owner');
  return list.sort((a,b) => (a.role==='owner'?-1:b.role==='owner'?1:0) || a.name.localeCompare(b.name));
}

// A message's "conversation key" from the current user's point of view:
// 'group' for the shared channel, or the other participant's username for a DM.
function getConvKeyForMessage(m) {
  if (m.to === 'group') return 'group';
  return m.from === currentUser.username ? m.to : m.from;
}
function isMessageVisibleToMe(m) {
  if (m.to === 'group') return true;
  return m.from === currentUser.username || m.to === currentUser.username;
}
function getLastSeen(convKey) {
  const rec = getData('chatLastSeen').find(x => x.username === currentUser.username && x.convKey === convKey);
  return rec ? rec.ts : '1970-01-01T00:00:00.000Z';
}
function setLastSeen(convKey) {
  const arr = getData('chatLastSeen');
  const rec = arr.find(x => x.username === currentUser.username && x.convKey === convKey);
  const now = new Date().toISOString();
  if (rec) rec.ts = now; else arr.push({ username: currentUser.username, convKey, ts: now });
  saveData('chatLastSeen', arr);
}
function getUnreadCountForConv(convKey) {
  const since = getLastSeen(convKey);
  return getData('teamChat').filter(isMessageVisibleToMe)
    .filter(m => getConvKeyForMessage(m) === convKey && m.from !== currentUser.username && m.ts > since).length;
}
function getUnreadChatCount() {
  if (!currentUser) return 0;
  const keys = ['group', ...getChatUsers().map(u => u.username)];
  return keys.reduce((sum,k) => sum + getUnreadCountForConv(k), 0);
}

function selectChatTarget(target) {
  currentChatTarget = target;
  renderChat();
}

function getOtherPartySeenTs(otherUsername) {
  const rec = getData('chatLastSeen').find(x => x.username === otherUsername && x.convKey === currentUser.username);
  return rec ? rec.ts : null;
}

function renderChat() {
  const chatUsers = getChatUsers();
  if (!getChatUsers().find(u=>u.username===currentChatTarget) && currentChatTarget !== 'group') currentChatTarget = 'group';

  // ── Conversation chip row ──
  const chipsEl = document.getElementById('chatChips');
  if (chipsEl) {
    const chips = [
      { key:'group', name: lang==='am'?'ቡድን':'Group', icon:'🌐', roleLabel:null, branchLabel:null },
      ...chatUsers.map(u => ({ key:u.username, name:u.name, icon:null, roleLabel: T[lang].roles[u.role]||u.role, branchLabel: getUserBranchLabel(u), isOwner: u.role==='owner' })),
    ];
    chipsEl.innerHTML = chips.map(c => {
      const active = currentChatTarget === c.key;
      const unread = getUnreadCountForConv(c.key);
      const initial = c.name.trim()[0]?.toUpperCase() || '?';
      const avatarBg = c.icon ? 'linear-gradient(135deg,#4FC3F7,#1a6cb0)' : (c.isOwner ? 'linear-gradient(135deg,var(--gold),#A87820)' : avatarColorFor(c.key));
      const tip = [c.name, c.roleLabel, c.branchLabel].filter(Boolean).join(' · ');
      return `<button onclick="selectChatTarget('${c.key}')" title="${tip}" style="display:flex;flex-direction:column;align-items:center;gap:5px;flex-shrink:0;background:none;border:none;cursor:pointer;padding:8px 10px;border-radius:12px;transition:background 0.15s;${active?'background:rgba(201,168,76,0.14)':''}">
        <div style="position:relative;width:44px;height:44px;border-radius:50%;background:${avatarBg};display:flex;align-items:center;justify-content:center;font-size:18px;font-weight:700;color:#fff;border:2px solid ${active?'var(--gold)':'transparent'};box-shadow:0 3px 8px rgba(0,0,0,0.3)">
          ${c.icon || initial}
          ${unread>0?`<span style="position:absolute;top:-3px;right:-3px;background:#E05A5A;color:#fff;font-size:9px;font-weight:800;border-radius:8px;min-width:16px;height:16px;display:flex;align-items:center;justify-content:center;padding:0 3px;box-shadow:0 0 0 2px #1a1f2e">${unread}</span>`:''}
        </div>
        <span style="font-size:10px;color:${active?'var(--gold)':'var(--white-dim)'};font-weight:${active?'700':'600'};white-space:nowrap;max-width:66px;overflow:hidden;text-overflow:ellipsis">${c.name}</span>
      </button>`;
    }).join('');
  }

  // ── Thread header ──
  const headerEl = document.getElementById('chatThreadHeader');
  if (headerEl) {
    if (currentChatTarget === 'group') {
      headerEl.innerHTML = `<div style="width:38px;height:38px;border-radius:50%;background:linear-gradient(135deg,#4FC3F7,#1a6cb0);display:flex;align-items:center;justify-content:center;font-size:16px;flex-shrink:0;box-shadow:0 2px 8px rgba(79,195,247,0.35)">🌐</div>
        <div><div style="font-size:14.5px;font-weight:700;color:var(--white)">${lang==='am'?'የቡድን ቻት':'Group Chat'}</div>
        <div style="font-size:10.5px;color:var(--white-dim)">👥 ${lang==='am'?'ሁሉም ሰራተኞች ያያሉ':'Visible to everyone'}</div></div>`;
    } else {
      const u = chatUsers.find(x => x.username === currentChatTarget);
      const roleLabel = u ? (T[lang].roles[u.role]||u.role) : currentChatTarget;
      const branchLabel = getUserBranchLabel(u);
      const initial = (u?u.name:currentChatTarget).trim()[0]?.toUpperCase()||'?';
      const isOwnerTarget = u && u.role === 'owner';
      const avatarBg = isOwnerTarget ? 'linear-gradient(135deg,var(--gold),#A87820)' : avatarColorFor(currentChatTarget);
      headerEl.innerHTML = `<div style="width:38px;height:38px;border-radius:50%;background:${avatarBg};display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:700;color:#fff;flex-shrink:0;box-shadow:0 2px 8px rgba(0,0,0,0.3)">${isOwnerTarget?'👑':initial}</div>
        <div><div style="font-size:14.5px;font-weight:700;color:var(--white)">${u?u.name:currentChatTarget}</div>
        <div style="font-size:10.5px;color:var(--white-dim)">${isOwnerTarget?'👑 ':'💼 '}${roleLabel}${branchLabel?` · 🏪 ${branchLabel}`:''} · 🔒 ${lang==='am'?'የግል':'Private'}</div></div>`;
    }
  }

  // ── Messages ──
  const listEl = document.getElementById('chatMessages');
  if (listEl) {
    const messages = getData('teamChat').filter(isMessageVisibleToMe).filter(m => getConvKeyForMessage(m) === currentChatTarget);
    const lastMsgId = messages.length ? messages[messages.length-1].id : null;
    const otherSeenTs = currentChatTarget !== 'group' ? getOtherPartySeenTs(currentChatTarget) : null;
    listEl.innerHTML = messages.length ? messages.map(m => {
      const mine = m.from === currentUser.username;
      const isOwnerMsg = m.fromRole === 'owner';
      const roleLabel = T[lang].roles[m.fromRole] || m.fromRole;
      const senderMeta = m.to==='group' ? [roleLabel, m.fromBranchName].filter(Boolean).join(' · ') : '';
      const time = new Date(m.ts).toLocaleString(lang==='am'?'am-ET':'en-US', { month:'short', day:'numeric', hour:'2-digit', minute:'2-digit' });
      let seenTag = '';
      if (mine && m.id === lastMsgId && currentChatTarget !== 'group') {
        const isSeen = otherSeenTs && otherSeenTs >= m.ts;
        seenTag = isSeen
          ? `<span style="color:#4FC3F7;font-weight:600">✓✓ ${lang==='am'?'ታይቷል':'Seen'}</span>`
          : `<span style="color:rgba(197,203,216,0.4)">✓ ${lang==='am'?'ተልኳል':'Sent'}</span>`;
      }
      const bodyParts = [];
      if (m.image) {
        bodyParts.push(`<img src="${m.image}" class="chat-img-msg" onclick="openChatLightbox('${m.image.replace(/'/g,"\\'")}')" alt="photo">`);
      }
      if (m.audio) {
        const dur = m.audioDuration ? `${Math.floor(m.audioDuration/60)}:${String(m.audioDuration%60).padStart(2,'0')}` : '';
        bodyParts.push(`<div class="chat-audio-msg" style="display:flex;align-items:center;gap:8px${m.text||m.image?';margin-top:6px':''}">
          <audio controls preload="none" src="${m.audio}"></audio>
          ${dur?`<span style="font-size:10px;opacity:0.7;flex-shrink:0">🎤 ${dur}</span>`:''}
        </div>`);
      }
      if (m.text) {
        bodyParts.push(`<div style="font-size:13.5px;line-height:1.5;white-space:pre-wrap;word-break:break-word${m.image?';margin-top:6px':''}">${escapeHtml(m.text)}</div>`);
      }
      return `<div style="display:flex;flex-direction:column;align-items:${mine?'flex-end':'flex-start'};margin-bottom:14px">
        <div style="max-width:78%;padding:${m.image&&!m.text?'6px':'10px 14px'};border-radius:15px;${mine
            ? 'background:linear-gradient(135deg,var(--gold),#A87820);color:var(--navy);border-bottom-right-radius:4px'
            : (isOwnerMsg
                ? 'background:rgba(201,168,76,0.14);border:1px solid rgba(201,168,76,0.35);color:var(--white);border-bottom-left-radius:4px'
                : 'background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);color:var(--white);border-bottom-left-radius:4px')}; box-shadow:0 3px 10px rgba(0,0,0,0.18)">
          ${!mine ? `<div style="font-size:10px;font-weight:700;margin-bottom:4px;color:${isOwnerMsg?'var(--gold)':'#4FC3F7'}">${isOwnerMsg?'👑 ':''}${m.fromName}${senderMeta?` · ${senderMeta}`:''}</div>` : ''}
          ${bodyParts.join('')}
        </div>
        <div style="font-size:9px;color:rgba(197,203,216,0.4);margin-top:3px;padding:0 2px;display:flex;gap:6px">
          <span>${time}</span>${seenTag}
        </div>
      </div>`;
    }).join('') : `<div style="text-align:center;color:var(--white-dim);padding:50px 10px;font-size:13px">
        <div style="font-size:32px;margin-bottom:10px;opacity:0.4">${currentChatTarget==='group'?'🌐':'💬'}</div>
        ${currentChatTarget==='group' ? (lang==='am'?'ገና ምንም መልእክት የለም — መጻጻፍ ጀምሩ 👋':'No messages yet — start the conversation 👋') : (lang==='am'?'ገና ምንም የግል መልእክት የለም':'No private messages yet')}
      </div>`;
    listEl.scrollTop = listEl.scrollHeight;
  }

  // ── Input placeholder ──
  const inputEl = document.getElementById('chatInput');
  if (inputEl) {
    inputEl.placeholder = currentChatTarget === 'group'
      ? (lang==='am'?'የቡድን መልእክት ይጻፉ...':'Message the group...')
      : (lang==='am'?'የግል መልእክት ይጻፉ...':'Send a private message...');
  }

  setLastSeen(currentChatTarget);
  buildSidebar();
}

function sendChatMessage() {
  const input = document.getElementById('chatInput');
  if (!input) return;
  const text = input.value.trim();
  if (!text) return;
  const ok = pushChatMessage({ text });
  if (ok) input.value = '';
}

function handleChatKeydown(ev) {
  if (ev.key === 'Enter' && !ev.shiftKey) { ev.preventDefault(); sendChatMessage(); }
}

// Shared sender used by text / photo / voice messages.
// extra can include: text, image (dataURL), audio (dataURL), audioDuration (seconds)
function pushChatMessage(extra) {
  if (currentChatTarget !== 'group' && !getChatUsers().find(u => u.username === currentChatTarget)) {
    toast(lang==='am'?'ይህን ሰው በቀጥታ መጻፍ አይችሉም':"You can't message this person directly",'error');
    currentChatTarget = 'group'; renderChat(); return false;
  }
  const messages = getData('teamChat');
  messages.push({
    id: uid(), to: currentChatTarget,
    from: currentUser.username, fromName: currentUser.name, fromRole: currentUser.role,
    fromBranchName: getUserBranchLabel(currentUser),
    ts: new Date().toISOString(),
    text: '', image: null, audio: null, audioDuration: 0,
    ...extra,
  });
  try {
    saveData('teamChat', messages);
  } catch (e) {
    toast(lang==='am'?'⚠️ የማህደረ ትውስታ ቦታ አልቂ — ፎቶ/ድምፅ መላክ አልተቻለም':'⚠️ Storage is full — could not send photo/voice message','error');
    return false;
  }
  renderChat();
  return true;
}

// ── Photo messages ────────────────────────────────────────────
function handleChatImageSelect(ev) {
  const file = ev.target.files && ev.target.files[0];
  ev.target.value = '';
  if (!file) return;
  if (!file.type.startsWith('image/')) {
    toast(lang==='am'?'እባክዎ የምስል ፋይል ይምረጡ':'Please choose an image file','error');
    return;
  }
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image();
    img.onload = () => {
      // Downscale + compress before storing, since chat history lives in localStorage.
      const MAX_DIM = 1000;
      let { width, height } = img;
      if (width > MAX_DIM || height > MAX_DIM) {
        const scale = MAX_DIM / Math.max(width, height);
        width = Math.round(width * scale); height = Math.round(height * scale);
      }
      const canvas = document.createElement('canvas');
      canvas.width = width; canvas.height = height;
      canvas.getContext('2d').drawImage(img, 0, 0, width, height);
      const dataUrl = canvas.toDataURL('image/jpeg', 0.72);
      pushChatMessage({ image: dataUrl });
    };
    img.onerror = () => toast(lang==='am'?'ምስሉ መክፈት አልተቻለም':'Could not open image','error');
    img.src = reader.result;
  };
  reader.onerror = () => toast(lang==='am'?'ምስሉ ማንበብ አልተቻለም':'Could not read image','error');
  reader.readAsDataURL(file);
}

function openChatLightbox(src) {
  document.getElementById('chatImgLightboxSrc').src = src;
  document.getElementById('chatImgLightbox').classList.remove('hidden');
}
function closeChatLightbox() {
  document.getElementById('chatImgLightbox').classList.add('hidden');
  document.getElementById('chatImgLightboxSrc').src = '';
}

// ── Voice messages ────────────────────────────────────────────
let chatMediaRecorder = null;
let chatRecordedChunks = [];
let chatRecordStream = null;
let chatRecordTimerInt = null;
let chatRecordStartTs = 0;
const CHAT_MAX_RECORD_SECONDS = 120;

async function startVoiceRecording() {
  if (!navigator.mediaDevices || !window.MediaRecorder) {
    toast(lang==='am'?'ይህ መሳሪያ ድምፅ መቅዳት አይደግፍም':'This device does not support voice recording','error');
    return;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    chatRecordStream = stream;
    chatRecordedChunks = [];
    const mimeType = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : '';
    chatMediaRecorder = mimeType ? new MediaRecorder(stream, { mimeType }) : new MediaRecorder(stream);
    chatMediaRecorder.ondataavailable = (e) => { if (e.data && e.data.size > 0) chatRecordedChunks.push(e.data); };
    chatMediaRecorder.onstop = onChatRecordingStopped;
    chatMediaRecorder.start();
    chatRecordStartTs = Date.now();
    document.getElementById('chatInputBar').classList.add('hidden');
    document.getElementById('chatRecordingBar').classList.remove('hidden');
    document.getElementById('chatRecTimer').textContent = '0:00';
    chatRecordTimerInt = setInterval(() => {
      const secs = Math.floor((Date.now() - chatRecordStartTs) / 1000);
      const m = Math.floor(secs / 60), s = secs % 60;
      const timerEl = document.getElementById('chatRecTimer');
      if (timerEl) timerEl.textContent = `${m}:${String(s).padStart(2,'0')}`;
      if (secs >= CHAT_MAX_RECORD_SECONDS) stopVoiceRecording();
    }, 250);
  } catch (e) {
    toast(lang==='am'?'ማይክራፎን መጠቀም አልተቻለም — ፍቃድ ያረጋግጡ':'Could not access microphone — check permissions','error');
  }
}

function stopVoiceRecording() {
  if (chatMediaRecorder && chatMediaRecorder.state !== 'inactive') {
    chatMediaRecorder._shouldSend = true;
    chatMediaRecorder.stop();
  }
  teardownVoiceRecordingUI();
}

function cancelVoiceRecording() {
  if (chatMediaRecorder && chatMediaRecorder.state !== 'inactive') {
    chatMediaRecorder._shouldSend = false;
    chatMediaRecorder.stop();
  }
  teardownVoiceRecordingUI();
}

function teardownVoiceRecordingUI() {
  clearInterval(chatRecordTimerInt);
  document.getElementById('chatRecordingBar').classList.add('hidden');
  document.getElementById('chatInputBar').classList.remove('hidden');
  if (chatRecordStream) { chatRecordStream.getTracks().forEach(t => t.stop()); chatRecordStream = null; }
}

function onChatRecordingStopped() {
  const shouldSend = chatMediaRecorder._shouldSend;
  const durationSec = Math.round((Date.now() - chatRecordStartTs) / 1000);
  const blobType = chatRecordedChunks[0] ? chatRecordedChunks[0].type : 'audio/webm';
  const blob = new Blob(chatRecordedChunks, { type: blobType || 'audio/webm' });
  chatRecordedChunks = [];
  chatMediaRecorder = null;
  if (!shouldSend || blob.size === 0) return;
  const reader = new FileReader();
  reader.onload = () => {
    pushChatMessage({ audio: reader.result, audioDuration: durationSec });
  };
  reader.onerror = () => toast(lang==='am'?'የድምፅ መልእክት ማዘጋጀት አልተቻለም':'Could not prepare voice message','error');
  reader.readAsDataURL(blob);
}

function escapeHtml(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// ── PRIVATE NOTES (owner only) — add, edit, delete ───────────────
let editingNoteId = null;

function renderNotes() {
  const listEl = document.getElementById('notesList');
  if (!listEl) return;
  const notes = getData('ownerNotes').sort((a,b)=>b.ts.localeCompare(a.ts));
  const NOTE_ACCENTS = ['#C9A84C','#4FC3F7','#80e080','#F06292','#BA68C8','#FFA726'];
  listEl.innerHTML = notes.length ? notes.map((n,i) => {
    const accent = NOTE_ACCENTS[i % NOTE_ACCENTS.length];
    const time = new Date(n.ts).toLocaleString(lang==='am'?'am-ET':'en-US', { year:'numeric', month:'short', day:'numeric', hour:'2-digit', minute:'2-digit' });
    const editedTag = n.editedAt ? ` · <span style="opacity:0.7;font-style:italic">${lang==='am'?'ተስተካክሏል':'edited'}</span>` : '';
    if (editingNoteId === n.id) {
      return `<div class="card" style="padding:14px 16px;margin-bottom:12px;border-radius:12px;border:1px solid rgba(201,168,76,0.4);border-left:4px solid ${accent}">
        <textarea id="editNoteInput_${n.id}" class="form-input" rows="4" style="width:100%;resize:vertical;box-sizing:border-box;border-radius:10px;font-size:13px;line-height:1.5">${escapeHtml(n.text)}</textarea>
        <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:10px">
          <button onclick="cancelEditNote()" class="btn-outline" style="font-size:11px;padding:7px 16px;border-radius:9px">ሰርዝ</button>
          <button onclick="saveEditNote('${n.id}')" class="btn-gold" style="font-size:11px;padding:7px 16px;border-radius:9px;font-weight:700">💾 አስቀምጥ</button>
        </div>
      </div>`;
    }
    return `<div class="card" style="padding:14px 16px;margin-bottom:12px;border-radius:12px;border-left:4px solid ${accent};transition:transform 0.15s">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:8px">
        <span style="font-size:10.5px;color:var(--white-dim);display:flex;align-items:center;gap:4px">🕒 ${time}${editedTag}</span>
        <div style="display:flex;gap:6px;flex-shrink:0">
          <button onclick="startEditNote('${n.id}')" title="${lang==='am'?'አስተካክል':'Edit'}" style="width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-size:11px;font-family:inherit;border-radius:8px;border:1px solid rgba(201,168,76,0.4);background:rgba(201,168,76,0.1);color:var(--gold);cursor:pointer">✏️</button>
          <button onclick="deleteNote('${n.id}')" title="${lang==='am'?'ሰርዝ':'Delete'}" style="width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-size:11px;font-family:inherit;border-radius:8px;border:1px solid rgba(224,90,90,0.4);background:rgba(224,90,90,0.1);color:#FF9090;cursor:pointer">🗑</button>
        </div>
      </div>
      <div style="font-size:13.5px;line-height:1.55;color:var(--white);white-space:pre-wrap;word-break:break-word">${escapeHtml(n.text)}</div>
    </div>`;
  }).join('') : `<div style="text-align:center;color:var(--white-dim);padding:50px 10px;font-size:13px">
      <div style="font-size:36px;margin-bottom:10px;opacity:0.35">🗒️</div>
      ${lang==='am'?'ገና ምንም ማስታወሻ የለም':'No notes yet'}
    </div>`;
}

function saveNote() {
  const input = document.getElementById('noteInput');
  if (!input) return;
  const text = input.value.trim();
  if (!text) { toast(lang==='am'?'ማስታወሻ ባዶ ነው':'Note is empty','error'); return; }
  const notes = getData('ownerNotes');
  notes.push({ id: uid(), text, ts: new Date().toISOString() });
  saveData('ownerNotes', notes);
  input.value = '';
  renderNotes();
  toast(lang==='am'?'✅ ማስታወሻ ተቀምጧል':'Note saved ✓');
}

function startEditNote(id) { editingNoteId = id; renderNotes(); }
function cancelEditNote() { editingNoteId = null; renderNotes(); }
function saveEditNote(id) {
  const ta = document.getElementById('editNoteInput_'+id);
  const text = ta?.value.trim();
  if (!text) { toast(lang==='am'?'ማስታወሻ ባዶ ሊሆን አይችልም':'Note cannot be empty','error'); return; }
  const notes = getData('ownerNotes');
  const n = notes.find(x => x.id === id);
  if (n) { n.text = text; n.editedAt = new Date().toISOString(); }
  saveData('ownerNotes', notes);
  editingNoteId = null;
  renderNotes();
  toast(lang==='am'?'✅ ተስተካክሏል':'Updated ✓');
}

function deleteNote(id) {
  if (!confirm(lang==='am'?'ይህን ማስታወሻ መሰረዝ ይፈልጋሉ?':'Delete this note?')) return;
  saveData('ownerNotes', getData('ownerNotes').filter(n => n.id !== id));
  renderNotes();
}

// ── FIXED ASSETS (non-sellable branch property) ──────────────────
// Branches (sales staff) register assets for their own branch only — they can never delete.
// The owner sees every branch's assets in one place and is the only one who can delete
// (e.g. once an item is removed, replaced, or written off).
const ASSET_ICONS = { 'ኮምፒተር':'🖥️', 'ወንበር':'🪑', 'ጠረጴዛ':'🗄️', 'መደርደሪያ':'🗃️', 'ማቀዝቀዣ':'🧊', 'ማሽን':'⚙️', 'ተሽከርካሪ':'🚗', 'ሌላ':'🏛️' };

function getFixedAssets(branch) {
  const all = getData('fixedAssets');
  return branch ? all.filter(a => a.branch === branch) : all;
}

function renderAssets() {
  const isOwner = currentUser.role === 'owner';
  const addBtn = document.getElementById('btnAddAsset');
  if (addBtn) addBtn.style.display = isOwner ? 'none' : ''; // only branches register — owner only views/deletes

  const assets = isOwner ? getFixedAssets() : getFixedAssets(currentUser.branch);
  const branches = getData('branches');
  const totalValue = assets.reduce((a,x) => a + (x.value||0), 0);

  const summaryEl = document.getElementById('assetsSummary');
  if (summaryEl) {
    summaryEl.innerHTML = `
      <div class="kpi-card"><div class="kpi-icon">🏛️</div><div class="kpi-val">${assets.length}</div><div class="kpi-label">${lang==='am'?'ጠቅላላ ንብረት':'Total Assets'}</div></div>
      <div class="kpi-card"><div class="kpi-icon">💰</div><div class="kpi-val">${fmtMoney(totalValue)}</div><div class="kpi-label">${lang==='am'?'ጠቅላላ ዋጋ':'Total Value'}</div></div>`;
  }

  const listEl = document.getElementById('assetsList');
  if (!listEl) return;

  if (!assets.length) {
    listEl.innerHTML = `<div class="card" style="text-align:center;color:var(--white-dim);padding:30px 10px">
      <div style="font-size:32px;margin-bottom:8px;opacity:0.35">🏛️</div>
      ${lang==='am'?'ገና ምንም ቋሚ ንብረት አልተመዘገበም':'No fixed assets registered yet'}
    </div>`;
    return;
  }

  const assetRow = (a, canDelete) => `
    <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 12px;background:rgba(255,255,255,0.03);border-radius:9px;margin-bottom:8px;gap:8px;flex-wrap:wrap">
      <div>
        <div style="font-size:13px;font-weight:700;color:var(--white)">${ASSET_ICONS[a.category]||'🏛️'} ${a.name}</div>
        <div style="font-size:11px;color:var(--white-dim);margin-top:2px">${a.category||'—'} · 📅 ${a.date}${a.note?` · 📝 ${a.note}`:''} · 👤 ${a.registeredByName||a.registeredBy||'—'}</div>
      </div>
      <div style="display:flex;align-items:center;gap:10px">
        <span style="font-size:13px;font-weight:700;color:var(--gold)">${fmtMoney(a.value||0)}</span>
        ${canDelete?`<button onclick="deleteAsset('${a.id}')" title="${lang==='am'?'ሰርዝ':'Delete'}" style="width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-size:12px;border-radius:7px;border:1px solid rgba(224,90,90,0.4);background:rgba(224,90,90,0.1);color:#FF9090;cursor:pointer;font-family:inherit">🗑</button>`:''}
      </div>
    </div>`;

  if (isOwner) {
    const byBranch = {};
    assets.forEach(a => { (byBranch[a.branch] = byBranch[a.branch]||[]).push(a); });
    listEl.innerHTML = Object.entries(byBranch).map(([bid, items]) => {
      const br = branches.find(b=>b.id===bid);
      const branchTotal = items.reduce((a,x)=>a+(x.value||0),0);
      return `<div class="card" style="margin-bottom:14px">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;flex-wrap:wrap;gap:6px">
          <h4 style="margin:0;color:var(--gold-lt)">🏪 ${br?br.name:bid}</h4>
          <span style="font-size:12px;color:var(--white-dim)">${items.length} ${lang==='am'?'ንብረት':'items'} · ${fmtMoney(branchTotal)}</span>
        </div>
        ${items.map(a=>assetRow(a,true)).join('')}
      </div>`;
    }).join('');
  } else {
    listEl.innerHTML = `<div class="card">${assets.map(a=>assetRow(a,false)).join('')}</div>`;
  }
}

function openAssetModal() {
  if (currentUser.role === 'owner') { toast(lang==='am'?'ኦነሩ ንብረት አይመዘግብም — ቅርንጫፎች ራሳቸው ይመዘግባሉ':'The owner does not register assets — branches register their own','error'); return; }
  ['assetName','assetValue','assetNote'].forEach(id => { const el=document.getElementById(id); if(el) el.value=''; });
  const c = document.getElementById('assetCategory'); if (c) c.value = 'ሌላ';
  const d = document.getElementById('assetDate'); if (d) d.value = new Date().toISOString().slice(0,10);
  openModal('assetModal');
}

function saveAsset() {
  if (currentUser.role === 'owner') { toast(lang==='am'?'ኦነሩ ንብረት አይመዘግብም — ቅርንጫፎች ራሳቸው ይመዘግባሉ':'The owner does not register assets — branches register their own','error'); return; }
  const name = v('assetName');
  const category = v('assetCategory');
  const value = parseFloat(v('assetValue')) || 0;
  const date = v('assetDate');
  const note = v('assetNote');
  if (!name || !date) { toast(lang==='am'?'ስም እና ቀን ያስፈልጋሉ':'Name and date required','error'); return; }

  const assets = getData('fixedAssets');
  assets.push({
    id: uid(), branch: currentUser.branch, name, category, value, date, note,
    registeredBy: currentUser.username, registeredByName: currentUser.name,
    createdAt: new Date().toISOString(),
  });
  saveData('fixedAssets', assets);
  closeModal('assetModal');
  renderAssets();
  toast(lang==='am'?'✅ ቋሚ ንብረት ተመዝግቧል':'Fixed asset registered ✓');
}

function deleteAsset(id) {
  if (currentUser.role !== 'owner') { toast(lang==='am'?'⛔ ንብረት ማጥፋት የሚችለው ኦነሩ ብቻ ነው':'⛔ Only the owner can delete assets','error'); return; }
  if (!confirm(lang==='am'?'ይህን ቋሚ ንብረት መሰረዝ ይፈልጋሉ?':'Delete this fixed asset?')) return;
  saveData('fixedAssets', getData('fixedAssets').filter(a => a.id !== id));
  renderAssets();
  renderDashboard();
  toast(lang==='am'?'🗑 ንብረት ተሰርዟል':'Asset deleted');
}

// ── MARKETING TEAM ACTIVITY LOG ───────────────────────────────────
// The marketing team registers what they did, how much, and how — the owner monitors
// everything here and is the only one who can delete an entry.
const MARKETING_CATEGORIES = {
  'ማህበራዊ ሚዲያ': '📱', 'ፖስተር/ህትመት': '🖼️', 'ካምፔይን': '📢', 'ቪዲዮ': '🎬', 'ኢቨንት': '🎪', 'ሌላ': '📣',
};

function getMarketingLogs() { return getData('marketingLogs'); }

function renderMarketing() {
  const isOwner = currentUser.role === 'owner';
  const addBtn = document.getElementById('btnAddMarketingLog');
  if (addBtn) addBtn.style.display = isOwner ? 'none' : ''; // owner monitors only — the team registers its own work

  const logs = [...getMarketingLogs()].sort((a,b) => b.date.localeCompare(a.date) || b.createdAt.localeCompare(a.createdAt));

  // Summary
  const totalCost = logs.reduce((a,x) => a + (x.cost||0), 0);
  const byCategory = {};
  logs.forEach(x => { byCategory[x.category] = (byCategory[x.category]||0) + 1; });
  const topCategory = Object.entries(byCategory).sort((a,b)=>b[1]-a[1])[0];

  const summaryEl = document.getElementById('marketingSummary');
  if (summaryEl) {
    summaryEl.innerHTML = `
      <div class="kpi-card"><div class="kpi-icon">📣</div><div class="kpi-val">${logs.length}</div><div class="kpi-label">${lang==='am'?'ጠቅላላ የተመዘገበ ስራ':'Total Activities Logged'}</div></div>
      <div class="kpi-card"><div class="kpi-icon">💰</div><div class="kpi-val">${fmtMoney(totalCost)}</div><div class="kpi-label">${lang==='am'?'ጠቅላላ ወጪ':'Total Spend'}</div></div>
      <div class="kpi-card"><div class="kpi-icon">${topCategory?MARKETING_CATEGORIES[topCategory[0]]||'📣':'📣'}</div><div class="kpi-val" style="font-size:16px">${topCategory?topCategory[0]:'—'}</div><div class="kpi-label">${lang==='am'?'ብዙ የተሰራበት ምድብ':'Most Active Category'}</div></div>`;
  }

  const listEl = document.getElementById('marketingList');
  if (!listEl) return;

  if (!logs.length) {
    listEl.innerHTML = `<div class="card" style="text-align:center;color:var(--white-dim);padding:30px 10px">
      <div style="font-size:32px;margin-bottom:8px;opacity:0.35">📣</div>
      ${lang==='am'?'ገና ምንም የማርኬቲንግ ስራ አልተመዘገበም':'No marketing activity logged yet'}
    </div>`;
    return;
  }

  listEl.innerHTML = `<div class="card">${logs.map(x => `
    <div style="padding:12px;background:rgba(255,255,255,0.03);border-radius:10px;margin-bottom:10px;border-left:3px solid #BA68C8">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:8px;margin-bottom:6px;flex-wrap:wrap">
        <div style="font-size:13.5px;font-weight:700;color:var(--white)">${MARKETING_CATEGORIES[x.category]||'📣'} ${x.title}</div>
        ${isOwner?`<button onclick="deleteMarketingLog('${x.id}')" title="${lang==='am'?'ሰርዝ':'Delete'}" style="width:26px;height:26px;flex-shrink:0;display:flex;align-items:center;justify-content:center;font-size:11px;border-radius:8px;border:1px solid rgba(224,90,90,0.4);background:rgba(224,90,90,0.1);color:#FF9090;cursor:pointer;font-family:inherit">🗑</button>`:''}
      </div>
      <div style="font-size:11px;color:var(--white-dim);margin-bottom:6px">📅 ${x.date} · 🏷️ ${x.category}${x.qty?` · 📊 ${x.qty} ${x.unit||''}`:''}${x.cost?` · 💰 ${fmtMoney(x.cost)}`:''}${x.reach?` · 👁️ ${x.reach}`:''}</div>
      <div style="font-size:12.5px;color:var(--white);line-height:1.5">${x.description||'—'}</div>
      ${x.note?`<div style="font-size:11px;color:rgba(197,203,216,0.5);margin-top:4px">💬 ${x.note}</div>`:''}
      <div style="font-size:10px;color:rgba(197,203,216,0.4);margin-top:6px">👤 ${x.byName||x.by||'—'}</div>
    </div>`).join('')}</div>`;
}

function openMarketingLogModal() {
  if (currentUser.role === 'owner') { toast(lang==='am'?'ኦነሩ ስራ አይመዘግብም — የማርኬቲንግ ቡድኑ ራሱ ይመዘግባል':'The owner does not log activities — the marketing team logs its own work','error'); return; }
  ['mktTitle','mktQty','mktUnit','mktCost','mktReach','mktDescription','mktNote'].forEach(id => { const el=document.getElementById(id); if(el) el.value=''; });
  const c = document.getElementById('mktCategory'); if (c) c.value = 'ማህበራዊ ሚዲያ';
  const d = document.getElementById('mktDate'); if (d) d.value = new Date().toISOString().slice(0,10);
  openModal('marketingLogModal');
}

function saveMarketingLog() {
  if (currentUser.role === 'owner') { toast(lang==='am'?'ኦነሩ ስራ አይመዘግብም — የማርኬቲንግ ቡድኑ ራሱ ይመዘግባል':'The owner does not log activities — the marketing team logs its own work','error'); return; }
  const date = v('mktDate');
  const title = v('mktTitle');
  const category = v('mktCategory');
  const qty = parseFloat(v('mktQty')) || 0;
  const unit = v('mktUnit');
  const cost = parseFloat(v('mktCost')) || 0;
  const reach = v('mktReach');
  const description = v('mktDescription');
  const note = v('mktNote');

  if (!date || !title || !description) {
    toast(lang==='am'?'ቀን፣ ርዕስ እና እንዴት እንደተሰራ ያስፈልጋሉ':'Date, title, and description are required','error'); return;
  }

  const logs = getMarketingLogs();
  logs.push({
    id: uid(), date, title, category, qty, unit, cost, reach, description, note,
    by: currentUser.username, byName: currentUser.name, createdAt: new Date().toISOString(),
  });
  saveData('marketingLogs', logs);
  closeModal('marketingLogModal');
  renderMarketing();
  toast(lang==='am'?'✅ የማርኬቲንግ ስራ ተመዝግቧል':'Marketing activity logged ✓');
}

function deleteMarketingLog(id) {
  if (currentUser.role !== 'owner') { toast(lang==='am'?'⛔ ማጥፋት የሚችለው ኦነሩ ብቻ ነው':'⛔ Only the owner can delete entries','error'); return; }
  if (!confirm(lang==='am'?'ይህን የማርኬቲንግ ምዝገባ መሰረዝ ይፈልጋሉ?':'Delete this marketing log entry?')) return;
  saveData('marketingLogs', getMarketingLogs().filter(x => x.id !== id));
  renderMarketing();
  toast(lang==='am'?'🗑 ተሰርዟል':'Deleted');
}

function toggleSidebar() {
  const sb = document.getElementById('sidebar');
  if (window.innerWidth <= 768) sb.classList.toggle('mobile-open');
  else sb.classList.toggle('collapsed');
}

// ── CLOCK ──────────────────────────────────────────────────────
function startClock() {
  function tick() {
    const now = new Date();
    const ts = now.toLocaleTimeString();
    ['topbarClock','attClockDisplay'].forEach(id => { const el=document.getElementById(id); if(el) el.textContent=ts; });
    const dt = document.getElementById('attDateDisplay');
    if (dt) dt.textContent = now.toLocaleDateString(lang==='am'?'am-ET':'en-US', {weekday:'long',year:'numeric',month:'long',day:'numeric'});
  }
  tick(); setInterval(tick, 1000);
}

// ── STOCK HELPERS ──────────────────────────────────────────────
// Get total warehouse (store) stock per type
function getStoreStockMap() {
  const store = getData('store');
  const transfers = getData('storeTransfers');
  const m = {};
  // Sum all store entries (original receipts — never mutated)
  store.forEach(r => { m[r.type] = (m[r.type]||0) + (r.qty||0); });
  // Deduct transfers that are in-transit (pending_owner or pending_receiver) or confirmed
  // i.e. any transfer that has left the store
  transfers.forEach(t => {
    if (t.status === 'rejected') return; // rejected → stock returned, don't deduct
    if (m[t.type] !== undefined) m[t.type] -= (t.qty||0);
  });
  // Remove zero/negative
  Object.keys(m).forEach(k => { if (m[k] <= 0) delete m[k]; });
  return m;
}

// Get branch stock map for a specific branch
// branchStock is already decremented on every sale/dispatch, so we just sum it directly
function getBranchStockMap(branchId) {
  const bs = getData('branchStock');
  const m = {};
  bs.filter(x => x.branch === branchId).forEach(r => { m[r.type] = (m[r.type]||0) + r.qty; });
  return m;
}

function checkStockAlerts(stockMap, lowThreshold, containerId) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const alerts = [];
  Object.entries(stockMap).forEach(([type, qty]) => {
    if (qty <= 0) alerts.push(`<div class="notif-banner danger-notif">❌ <strong>${type}</strong> — ${lang==='am'?'አልቋል!':'Out of stock!'}</div>`);
    else if (qty <= lowThreshold) alerts.push(`<div class="notif-banner">⚠️ <strong>${type}</strong> — ${lang==='am'?`ዝቅተኛ ክምችት: ${qty} ቁ.`:`Low stock: ${qty} pcs`}</div>`);
  });
  el.innerHTML = alerts.join('');
}

// ── PRODUCTION FLOW: Procurement → Store → Cutting → Sewing → Store → Branch ──
// Generic shipment records live in `prodFlow`, keyed by `stage`:
//   proc_store     : Procurement → Store   (raw material)
//   store_cutting  : Store → Cutting       (raw material)
//   cutting_sewing : Cutting → Sewing      (cut pieces, tracked by type + size)
//   sewing_store   : Sewing → Store        (finished goods, tracked by type + size)
// (Store → Branch is the existing, separate `storeTransfers` system.)
// Nothing moves into the receiver's usable stock until the receiver explicitly confirms.
function getProdFlow(stage) { return getData('prodFlow').filter(x => x.stage === stage); }
function pushProdFlow(entry) { const all = getData('prodFlow'); all.push(entry); saveData('prodFlow', all); return entry; }
function updateProdFlow(id, patch) {
  const all = getData('prodFlow');
  const x = all.find(e => e.id === id);
  if (x) { Object.assign(x, patch); saveData('prodFlow', all); }
  return x;
}
// Owner-managed clothing-type catalog (from the "የልብስ ዋጋ ቁጥጥር" price page) — the single source of
// truth for garment type names, so Cutting/Sewing pick from a fixed list instead of typing freely.
function clothingTypeOptionsHTML(selected) {
  const prices = getData('productPrices');
  if (!prices.length) return `<option value="">— ${lang==='am'?'ምንም የልብስ አይነት አልተመቀ':'No clothing types set'} —</option>`;
  return `<option value="">— ${lang==='am'?'ምረጥ':'Select'} —</option>` +
    prices.map(p => `<option value="${p.type}" ${p.type===selected?'selected':''}>${p.type}</option>`).join('');
}

// For the FIRST department in the sequence, only types actually received from Cutting (with
// stock > 0) can be picked — this is what "ready for sewing" means. Every other department
// works on pieces already in process, so it uses the full owner clothing-type catalog.
function sewTypeOptionsForDept(deptKey, selected) {
  if (deptKey !== getFirstSewDeptKey()) return clothingTypeOptionsHTML(selected);
  const cutStock = getData('sewingCutStock').filter(p => p.qty > 0);
  if (!cutStock.length) return `<option value="">— ${lang==='am'?'ከቆረጣ የደረሰ ምንም የለም':'Nothing received from Cutting yet'} —</option>`;
  return `<option value="">— ${lang==='am'?'ምረጥ':'Select'} —</option>` +
    cutStock.map(p => `<option value="${p.type}" ${p.type===selected?'selected':''}>${p.type} (${lang==='am'?'ዝግጁ':'ready'}: ${p.qty})</option>`).join('');
}

function updateSewTypeSelectForDept() {
  const deptSel = document.getElementById('sewDept');
  const typeSel = document.getElementById('sewType');
  if (!deptSel || !typeSel || deptSel.value === '__addnew__') return;
  typeSel.innerHTML = sewTypeOptionsForDept(deptSel.value, typeSel.value);
}

function canActProcurement() { return !!currentUser && (currentUser.role === 'owner' || currentUser.role === 'procurement'); }
function canActStore()       { return !!currentUser && (currentUser.role === 'owner' || currentUser.role === 'store'); }
function canActCutting()     { return !!currentUser && (currentUser.role === 'owner' || currentUser.role === 'cutting'); }
// (sewing role/owner check reuses the existing isSewDeptManager() helper defined below)

// Reusable "incoming — awaiting confirmation" list block used on Store/Cutting/Sewing pages
function prodFlowPendingHTML(stage, canConfirm, confirmFnName, itemLabelFn) {
  const items = getProdFlow(stage).filter(x => x.status === 'pending');
  if (!items.length) return '';
  return `<div style="background:rgba(79,195,247,0.06);border:1px solid rgba(79,195,247,0.25);border-radius:10px;padding:10px 12px;margin-bottom:12px">
    <div style="font-size:11px;font-weight:700;color:#4FC3F7;letter-spacing:0.5px;margin-bottom:8px">📥 ${lang==='am'?'የደረሱ — ማረጋገጫ ይጠብቃሉ':'INCOMING — AWAITING CONFIRMATION'} (${items.length})</div>
    ${items.map(x => `<div style="display:flex;align-items:center;justify-content:space-between;gap:8px;padding:7px 0;border-top:1px solid rgba(255,255,255,0.06)">
      <div style="font-size:12px;color:var(--white);font-weight:600">${itemLabelFn(x)}
        <div style="font-size:10px;color:var(--white-dim);font-weight:400;margin-top:2px">${x.date} · ${lang==='am'?'ላከ':'from'}: ${x.sentByName||x.sentBy||'—'}</div>
      </div>
      ${canConfirm
        ? `<button onclick="${confirmFnName}('${x.id}')" style="flex-shrink:0;padding:6px 12px;font-size:11px;font-weight:700;font-family:inherit;border-radius:8px;border:1px solid rgba(76,175,80,0.5);background:rgba(76,175,80,0.12);color:#80e080;cursor:pointer">✅ ${lang==='am'?'ተቀበልኩ':'Confirm'}</button>`
        : `<span style="flex-shrink:0;font-size:10px;font-weight:700;color:#FFA726">⏳ ${lang==='am'?'ይጠበቃል':'Pending'}</span>`}
    </div>`).join('')}
  </div>`;
}

// ── DASHBOARD ──────────────────────────────────────────────────
function renderDashboard() {
  syncProcurementExpenses();
  // Exclude wholesale-origin sales — they're counted separately to avoid double-counting
  const sales = getData('sales').filter(s => !s.isWholesale);
  const refunds = getData('refunds');
  const expenses = getData('expenses');
  const procApprovedReceived = getData('procurementOrders').filter(o => o.status === 'approved' || o.status === 'received');
  const procCost = procApprovedReceived.reduce((a,o) => a + (Number(o.cost)||0), 0);
  const directRawCost = getData('raw').filter(r => !r.procOrderId).reduce((a,x) => a + (Number(x.cost)||0), 0);
  const rawCost = procCost + directRawCost;
  const wsApproved = getData('wholesale').filter(w => w.status === 'approved').reduce((a,w)=>a+w.total,0);
  const employees = getData('employees');
  const branches = getData('branches');
  const storeMap = getStoreStockMap();

  const grossRevenue = sales.reduce((s,x) => s+(x.qty*x.price),0);
  const totalRefunds = refunds.reduce((a,r) => a + (r.financialDiff || r.origTotal || 0), 0);
  const totalRevenue = Math.max(0, grossRevenue - totalRefunds) + wsApproved;
  const totalExpense = expenses.reduce((s,x) => s + (Number(x.amount)||0), 0);
  const profit = totalRevenue - totalExpense;
  const totalStock = Object.values(storeMap).reduce((a,b)=>a+b,0);
  const today = new Date().toISOString().slice(0,10);
  const todayRefAmt = refunds.filter(r => r.date === today).reduce((a,r) => a + (r.financialDiff || r.origTotal || 0), 0);
  const todaySales = Math.max(0, sales.filter(x=>x.date===today).reduce((s,x)=>s+(x.qty*x.price),0) - todayRefAmt);

  // Stock alerts in dashboard
  checkStockAlerts(storeMap, STORE_LOW, 'stockAlerts');

  // ── Unified approval queue (wholesale + store transfers + pending transfers + procurement) ──
  const wsQueueEl = document.getElementById('wholesaleQueueDash');
  if (wsQueueEl && currentUser.role === 'owner') {
    const pendingWS   = getData('wholesale').filter(w => w.status === 'pending');
    const pendingStr  = getData('storeTransfers').filter(t => t.status === 'pending_owner');
    const pendingTr   = getData('pendingTransfers').filter(p => p.status === 'pending');
    const pendingProc = getData('procurementOrders').filter(p => p.status === 'pending');
    const pendingLoan = getData('branchLoans').filter(l => l.status === 'pending_owner');
    const total = pendingWS.length + pendingStr.length + pendingTr.length + pendingProc.length + pendingLoan.length;

    if (total === 0) { wsQueueEl.innerHTML = ''; }
    else {
      if (!document.getElementById('pulseStyle')) {
        const st = document.createElement('style'); st.id = 'pulseStyle';
        st.textContent = '@keyframes pulse-border{0%,100%{box-shadow:0 0 0 0 rgba(255,167,38,0.35)}50%{box-shadow:0 0 0 6px rgba(255,167,38,0)}}';
        document.head.appendChild(st);
      }

      const row = (icon, label, detail, amount, approveCall, rejectCall) => `
        <div style="display:flex;align-items:center;gap:8px;padding:7px 10px;margin-bottom:4px;
                    background:rgba(0,0,0,0.18);border-radius:8px;flex-wrap:wrap">
          <span style="font-size:14px;flex-shrink:0">${icon}</span>
          <div style="flex:1;min-width:0">
            <div style="font-size:12px;font-weight:600;color:var(--white);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${label}</div>
            <div style="font-size:10px;color:rgba(197,203,216,0.45);margin-top:1px">${detail}</div>
          </div>
          ${amount ? `<span style="font-size:12px;font-weight:700;color:var(--gold);flex-shrink:0">${amount}</span>` : ''}
          <div style="display:flex;gap:4px;flex-shrink:0">
            <button onclick="${approveCall}" style="padding:4px 10px;border-radius:6px;border:1px solid rgba(76,175,80,0.5);background:rgba(76,175,80,0.12);color:#80e080;cursor:pointer;font-family:inherit;font-size:11px;font-weight:700">✅</button>
            <button onclick="${rejectCall}"  style="padding:4px 9px;border-radius:6px;border:1px solid rgba(224,90,90,0.4);background:rgba(224,90,90,0.1);color:#FF9090;cursor:pointer;font-family:inherit;font-size:11px">❌</button>
          </div>
        </div>`;

      const sections = [];

      if (pendingWS.length) sections.push(`
        <div style="font-size:10px;font-weight:700;color:#FFA726;letter-spacing:0.5px;margin:8px 0 4px">🏪 ${lang==='am'?'ጅምላ ሽያጭ':'WHOLESALE'} (${pendingWS.length})</div>
        ${pendingWS.map(w => row('📦', `${w.customer} · ${w.product} ×${w.qty}`, `${w.date} · ${w.byName||w.by}`, fmtMoney(w.total), `approveWholesale('${w.id}')`, `rejectWholesale('${w.id}')`)).join('')}`);

      if (pendingStr.length) sections.push(`
        <div style="font-size:10px;font-weight:700;color:#FFA726;letter-spacing:0.5px;margin:8px 0 4px">📤 ${lang==='am'?'ዕቃ ቤት ወደ ሱቅ':'STORE DISPATCH'} (${pendingStr.length})</div>
        ${pendingStr.map(t => {
          const br = branches.find(b=>b.id===t.branch);
          const items = (t.items&&t.items.length?t.items:[{type:t.type,qty:t.qty}]).map(x=>`${x.type||x.product} ×${x.qty}`).join(', ');
          return row('🚚', `${items} → ${br?br.name:t.branch}`, `${t.date} · ${t.sentByName||t.by||'—'}`, '', `approveStoreTransfer('${t.id}')`, `rejectStoreTransfer('${t.id}')`);
        }).join('')}`);

      if (pendingTr.length) sections.push(`
        <div style="font-size:10px;font-weight:700;color:#FFA726;letter-spacing:0.5px;margin:8px 0 4px">💳 ${lang==='am'?'ትራንስፈር ሽያጭ':'TRANSFER SALES'} (${pendingTr.length})</div>
        ${pendingTr.map(p => {
          const br = branches.find(b=>b.id===p.branch);
          const items = (p.items||[]).map(x=>`${x.product} ×${x.qty}`).join(', ') || '—';
          const dt = p.createdAt ? new Date(p.createdAt) : null;
          const dateStr = dt ? dt.toLocaleDateString(lang==='am'?'am-ET':'en-US', { year:'numeric', month:'short', day:'numeric' }) : p.date;
          const timeStr = dt ? dt.toLocaleTimeString(lang==='am'?'am-ET':'en-US', { hour:'2-digit', minute:'2-digit' }) : '—';
          const field = (icon, label, val, color) => `<div style="min-width:120px">
            <div style="font-size:9px;color:rgba(197,203,216,0.45);font-weight:700;letter-spacing:0.3px">${icon} ${label}</div>
            <div style="font-size:12.5px;font-weight:600;color:${color||'var(--white)'};margin-top:1px">${val}</div>
          </div>`;
          return `<div style="background:rgba(0,0,0,0.2);border:1px solid rgba(255,167,38,0.25);border-radius:12px;padding:12px 14px;margin-bottom:8px;animation:pulse-border 2.5s infinite">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;margin-bottom:10px;flex-wrap:wrap">
              <div style="font-size:13.5px;font-weight:700;color:var(--white)">🛍️ ${items}</div>
              <div style="font-size:15px;font-weight:800;color:var(--gold)">${fmtMoney(p.total)}</div>
            </div>
            <div style="display:flex;flex-wrap:wrap;gap:12px;margin-bottom:12px">
              ${field('👤', lang==='am'?'የደንበኛ ስም':'Customer', p.customerName||'—')}
              ${field('📲', lang==='am'?'የተላለፈበት ቻናል':'Transfer Channel', p.transferVia||'—', '#4FC3F7')}
              ${field('📅', lang==='am'?'ቀን':'Date', dateStr)}
              ${field('🕒', lang==='am'?'ሰዓት':'Time', timeStr)}
              ${field('🏪', lang==='am'?'ቅርንጫፍ':'Branch', br?br.name:p.branch)}
              ${field('👨‍💼', lang==='am'?'የመዘገበው':'Recorded by', p.byName||p.by||'—')}
            </div>
            <div style="display:flex;gap:8px">
              <button onclick="approvePendingTransfer('${p.id}')" style="flex:1;padding:9px;border-radius:9px;border:1px solid rgba(76,175,80,0.5);background:rgba(76,175,80,0.14);color:#80e080;cursor:pointer;font-family:inherit;font-size:12.5px;font-weight:700">✅ ${lang==='am'?'አጽድቅ':'Approve'}</button>
              <button onclick="rejectPendingTransfer('${p.id}')" style="flex:1;padding:9px;border-radius:9px;border:1px solid rgba(224,90,90,0.4);background:rgba(224,90,90,0.1);color:#FF9090;cursor:pointer;font-family:inherit;font-size:12.5px;font-weight:700">❌ ${lang==='am'?'ውድቅ':'Reject'}</button>
            </div>
          </div>`;
        }).join('')}`);

      if (pendingProc.length) sections.push(`
        <div style="font-size:10px;font-weight:700;color:#4FC3F7;letter-spacing:0.5px;margin:8px 0 4px">🛒 ${lang==='am'?'ግዥ ትዕዛዝ':'PROCUREMENT'} (${pendingProc.length})</div>
        ${pendingProc.map(p => {
          const br = branches.find(b=>b.id===p.branch);
          return row('📋', `${p.item} ×${p.qty} ${p.unit}`, `${br?br.name:p.branch} · ${p.date}`, fmtMoney(p.cost), `approveProcurement('${p.id}')`, `rejectProcurement('${p.id}')`);
        }).join('')}`);

      if (pendingLoan.length) sections.push(`
        <div style="font-size:10px;font-weight:700;color:#C9A8F0;letter-spacing:0.5px;margin:8px 0 4px">🤝 ${lang==='am'?'ቅርንጫፍ ብድር':'BRANCH LOAN'} (${pendingLoan.length})</div>
        ${pendingLoan.map(ln => {
          const fromBr = branches.find(b=>b.id===ln.fromBranch);
          const toBr   = branches.find(b=>b.id===ln.toBranch);
          return row('🤝', `${ln.product} ×${ln.qty}`, `${fromBr?fromBr.name:ln.fromBranch} → ${toBr?toBr.name:ln.toBranch} · ${ln.date}`, '', `approveBranchLoan('${ln.id}')`, `rejectBranchLoan('${ln.id}')`);
        }).join('')}`);

      wsQueueEl.innerHTML = `
        <div style="margin-bottom:12px;padding:10px 12px;background:rgba(255,167,38,0.06);
                    border:1.5px solid rgba(255,167,38,0.4);border-radius:10px;animation:pulse-border 1.8s infinite">
          <div style="font-size:11px;font-weight:700;color:#FFA726;margin-bottom:2px">
            🔔 ${lang==='am'?`ፈቃድ የሚጠብቁ (${total})`:`Actions needed (${total})`}
          </div>
          ${sections.join('')}
        </div>`;
    }
  }


  // Hero header
  const heroTitleEl = document.getElementById('dashHeroTitle');
  const heroSubEl = document.getElementById('dashHeroSub');
  const heroDateEl = document.getElementById('dashHeroDate');
  if (heroTitleEl) heroTitleEl.textContent = lang==='am' ? `እንኳን ደህና መጡ${currentUser?.name?', '+currentUser.name:''}` : `Welcome back${currentUser?.name?', '+currentUser.name:''}`;
  if (heroSubEl) heroSubEl.textContent = lang==='am' ? 'የንግድዎ አጠቃላይ እይታ' : "Here's your business at a glance";
  if (heroDateEl) {
    const dayNames = lang==='am'
      ? ['እሁድ','ሰኞ','ማክሰኞ','ረቡዕ','ሐሙስ','አርብ','ቅዳሜ']
      : ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const now = new Date();
    heroDateEl.textContent = `📅 ${dayNames[now.getDay()]}, ${today}`;
  }
  const chartsLabelEl = document.getElementById('dashChartsLabel');
  if (chartsLabelEl) chartsLabelEl.textContent = lang==='am' ? 'አጠቃላይ ትንተና' : 'Overview & Analytics';
  const opsLabelEl = document.getElementById('dashOpsLabel');
  if (opsLabelEl) opsLabelEl.textContent = lang==='am' ? 'ቅርንጫፍ እና ሪፖርት' : 'Branches & Reports';

  const kpiData = [
    { icon:'💵', val:fmtMoney(totalRevenue), label:t('kpiRevenue'), page:'finance' },
    { icon:'📤', val:fmtMoney(totalExpense), label:t('kpiExpense'), page:'finance' },
    { icon:profit>=0?'📈':'📉', val:fmtMoney(Math.abs(profit)), label:t('kpiProfit')+(profit<0?' (ኪሳራ)':' (ትርፍ)'), color:profit>=0?'#80E080':'#FF8080', page:'finance' },
    { icon:'📦', val:totalStock, label:t('kpiItems'), page:'store' },
    { icon:'🛍️', val:fmtMoney(todaySales), label:t('kpiSales'), page:'sales' },
    { icon:'👥', val:employees.filter(e=>e.active).length, label:t('kpiEmployees'), page:'hr' },
  ];
  document.getElementById('dashKpis').innerHTML = kpiData.map(k=>`
    <div class="kpi-card-hero" style="cursor:pointer;transition:transform 0.2s, border-color 0.2s" onclick="navigateTo('${k.page}')" onmouseover="this.style.transform='translateY(-2px)'" onmouseout="this.style.transform=''">
      <div class="kpi-row">
        <div class="kpi-icon-badge">${k.icon}</div>
        <span style="font-size:11px;opacity:0.5;margin-left:auto">➔</span>
      </div>
      <div class="kpi-val" style="${k.color?`color:${k.color}`:''}">${k.val}</div>
      <div class="kpi-label">${k.label}</div>
    </div>`).join('');

  // Branch list with sales + wholesale + per-branch stock summary
  const wholesaleApprovedAll = getData('wholesale').filter(w => w.status === 'approved');
  const branchEl = document.getElementById('branchList');
  branchEl.innerHTML = branches.map(b => {
    const bRefAmt = refunds.filter(r=>r.branch===b.id).reduce((a,r)=>a+(r.financialDiff||r.origTotal||0),0);
    const branchSales = Math.max(0, sales.filter(s=>s.branch===b.id).reduce((a,x)=>a+(x.qty*x.price),0) - bRefAmt);
    const branchWholesale = wholesaleApprovedAll.filter(w=>w.branch===b.id).reduce((a,w)=>a+w.total,0);
    const branchTotal = branchSales + branchWholesale;
    const bStock = getBranchStockMap(b.id);
    const stockSummary = Object.entries(bStock).map(([type,qty])=>`${type}:${qty}`).join(', ') || '—';
    const bAssets = getFixedAssets(b.id);
    const bAssetsValue = bAssets.reduce((a,x)=>a+(x.value||0),0);
    const isActive = b.active !== false;
    const toggleLabel = isActive ? (lang==='am'?'አግድ':'Deactivate') : (lang==='am'?'አንቃ':'Activate');
    const statusBadge = isActive
      ? `<span style="font-size:9px;background:rgba(76,175,80,0.15);color:#4CAF50;padding:2px 6px;border-radius:8px;border:1px solid rgba(76,175,80,0.3)">${lang==='am'?'ንቁ':'Active'}</span>`
      : `<span style="font-size:9px;background:rgba(224,90,90,0.15);color:#E05A5A;padding:2px 6px;border-radius:8px;border:1px solid rgba(224,90,90,0.3)">${lang==='am'?'ታግዷል':'Inactive'}</span>`;
    return `<div class="branch-item" style="${!isActive?'opacity:0.55':''}">
      <div style="flex:1">
        <div class="branch-name" style="display:flex;align-items:center;gap:6px">${b.name} ${statusBadge}</div>
        <div class="branch-loc">📍 ${b.location}</div>
        <div class="branch-loc" style="margin-top:2px">📦 ${stockSummary}</div>
        ${bAssets.length?`<div class="branch-loc" style="margin-top:2px;color:#BA68C8">🏛️ ${lang==='am'?'ቋሚ ንብረት':'Fixed Assets'}: ${bAssets.length} (${fmtMoney(bAssetsValue)})</div>`:''}
        ${branchWholesale>0?`<div class="branch-loc" style="margin-top:2px;color:#4FC3F7">🏪 ${lang==='am'?'ጅምላ':'Wholesale'}: ${fmtMoney(branchWholesale)}</div>`:''}
      </div>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px">
        <div class="branch-badge">${fmtMoney(branchTotal)}</div>
        ${branchWholesale>0?`<div style="font-size:10px;color:rgba(197,203,216,0.4)">🛍️${fmtMoney(branchSales)} + 🏪${fmtMoney(branchWholesale)}</div>`:''}
        <button onclick="toggleBranchActive('${b.id}')" style="font-size:10px;padding:3px 8px;border-radius:6px;border:1px solid ${isActive?'rgba(224,90,90,0.4)':'rgba(76,175,80,0.4)'};background:${isActive?'rgba(224,90,90,0.08)':'rgba(76,175,80,0.08)'};color:${isActive?'#FF9090':'#4CAF50'};cursor:pointer;font-family:inherit">${toggleLabel}</button>
      </div>
    </div>`;
  }).join('');

  // Report buttons — map index to category+period
  const reportBtnMeta = [
    {cat:'sales',period:'daily'}, {cat:'sales',period:'weekly'}, {cat:'sales',period:'monthly'},
    {cat:'production',period:'daily'}, {cat:'finance',period:'daily'},
    {cat:'hr',period:'daily'}, {cat:'branch',period:'daily'}, {cat:'procurement',period:'daily'}
  ];
  document.getElementById('reportBtns').innerHTML = T[lang].reportBtns.map((l,i)=>{
    const m = reportBtnMeta[i]||{cat:'sales',period:'daily'};
    return `<button class="report-btn" onclick="navigateToReport('${m.cat}','${m.period}')">${l}</button>`;
  }).join('');

  // Payment Channels card (owner only)
  const chCard = document.getElementById('paymentChannelsCard');
  if (chCard) {
    chCard.style.display = currentUser.role === 'owner' ? '' : 'none';
    if (currentUser.role === 'owner') renderPaymentChannels();
  }

  // Procurement quick-access card (owner only)
  const procDashCard = document.getElementById('procurementDashCard');
  if (procDashCard) {
    if (currentUser.role === 'owner') {
      procDashCard.style.display = '';
      const pendingCount = getData('procurementOrders').filter(p => p.status === 'pending').length;
      const approvedCount = getData('procurementOrders').filter(p => p.status === 'approved').length;
      const totalSpend = getData('procurementOrders').filter(p=>p.status==='approved'||p.status==='received').reduce((a,o)=>a+o.cost,0);
      procDashCard.innerHTML = `
        <div class="card" style="flex:1;cursor:pointer" onclick="navigateTo('procurement')">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px">
            <span style="font-size:22px">🛒</span>
            <h3 class="card-title" style="margin:0">${lang==='am'?'ግዥ ክፍል':'Procurement'}</h3>
            ${pendingCount ? `<span style="margin-left:auto;background:#4FC3F7;color:#000;font-size:11px;font-weight:700;padding:2px 8px;border-radius:10px">${pendingCount} ${lang==='am'?'ይጠበቃሉ':'Pending'}</span>` : ''}
          </div>
          <div style="display:flex;gap:16px;flex-wrap:wrap">
            <div style="flex:1;min-width:80px;text-align:center;padding:10px;background:rgba(79,195,247,0.07);border-radius:10px;border:1px solid rgba(79,195,247,0.2)">
              <div style="font-size:20px;font-weight:700;color:#4FC3F7">${pendingCount}</div>
              <div style="font-size:11px;color:var(--white-dim)">${lang==='am'?'ያልፀደቁ':'Pending'}</div>
            </div>
            <div style="flex:1;min-width:80px;text-align:center;padding:10px;background:rgba(76,175,80,0.07);border-radius:10px;border:1px solid rgba(76,175,80,0.2)">
              <div style="font-size:20px;font-weight:700;color:#4CAF50">${approvedCount}</div>
              <div style="font-size:11px;color:var(--white-dim)">${lang==='am'?'ፀደቁ':'Approved'}</div>
            </div>
            <div style="flex:1;min-width:80px;text-align:center;padding:10px;background:rgba(201,168,76,0.07);border-radius:10px;border:1px solid rgba(201,168,76,0.2)">
              <div style="font-size:16px;font-weight:700;color:#C9A84C">${fmtMoney(totalSpend)}</div>
              <div style="font-size:11px;color:var(--white-dim)">${lang==='am'?'አጠቃላይ ወጪ':'Total Spend'}</div>
            </div>
          </div>
          <div style="margin-top:12px;text-align:right">
            <span style="font-size:12px;color:#4FC3F7">${lang==='am'?'ለዝርዝር ጫን ›':'View Details ›'}</span>
          </div>
        </div>`;
    } else {
      procDashCard.style.display = 'none';
    }
  }

  // Fixed assets overview (owner only) — every branch's registered assets in one place
  const assetsDashCard = document.getElementById('assetsDashCard');
  if (assetsDashCard) {
    if (currentUser.role === 'owner') {
      assetsDashCard.style.display = '';
      const allAssets = getFixedAssets();
      const totalValue = allAssets.reduce((a,x)=>a+(x.value||0),0);
      const branchCount = new Set(allAssets.map(a=>a.branch)).size;

      const summaryEl = document.getElementById('assetsDashSummary');
      if (summaryEl) summaryEl.innerHTML = `
        <div class="kpi-card"><div class="kpi-icon">🏛️</div><div class="kpi-val">${allAssets.length}</div><div class="kpi-label">${lang==='am'?'ጠቅላላ ንብረት':'Total Assets'}</div></div>
        <div class="kpi-card"><div class="kpi-icon">💰</div><div class="kpi-val">${fmtMoney(totalValue)}</div><div class="kpi-label">${lang==='am'?'ጠቅላላ ዋጋ':'Total Value'}</div></div>
        <div class="kpi-card"><div class="kpi-icon">🏪</div><div class="kpi-val">${branchCount}</div><div class="kpi-label">${lang==='am'?'ቅርንጫፎች':'Branches'}</div></div>`;

      const listEl = document.getElementById('assetsDashList');
      if (listEl) {
        const recent = [...allAssets].sort((a,b)=>b.createdAt.localeCompare(a.createdAt)).slice(0,5);
        listEl.innerHTML = recent.length ? `
          <div style="font-size:10.5px;font-weight:700;color:rgba(197,203,216,0.45);letter-spacing:0.5px;margin-bottom:8px">🕒 ${lang==='am'?'በቅርብ የተመዘገቡ':'RECENTLY REGISTERED'}</div>
          ${recent.map(a => {
            const br = branches.find(b=>b.id===a.branch);
            return `<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 10px;background:rgba(255,255,255,0.03);border-radius:8px;margin-bottom:6px;font-size:12px">
              <span style="color:var(--white)">${ASSET_ICONS[a.category]||'🏛️'} ${a.name} <span style="color:var(--white-dim);font-size:10.5px">· 🏪 ${br?br.name:a.branch}</span></span>
              <span style="font-weight:700;color:var(--gold)">${fmtMoney(a.value||0)}</span>
            </div>`;
          }).join('')}` : `<div style="text-align:center;color:var(--white-dim);padding:16px;font-size:12px">${lang==='am'?'ገና ምንም ቋሚ ንብረት አልተመዘገበም':'No fixed assets registered yet'}</div>`;
      }
    } else {
      assetsDashCard.style.display = 'none';
    }
  }

  // Charts
  const months=lang==='am'
    ? ['ጃንዩ','ፌብሩ','ማርች','ኤፕሪ','ሜይ','ጁን','ጁላይ','ኦገስ','ሴፕቴ','ኦክቶ','ኖቬም','ዲሴም']
    : ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  const monthlySales=Array(12).fill(0);
  sales.forEach(s=>{ const m=new Date(s.date).getMonth(); monthlySales[m]+=s.qty*s.price; });

  if (salesChartInst) salesChartInst.destroy();
  salesChartInst = new Chart(document.getElementById('salesChart').getContext('2d'),{
    type:'bar',
    data:{labels:months,datasets:[{
      label:lang==='am'?'ገቢ (ብር)':'Revenue (ETB)', data:monthlySales,
      backgroundColor:'rgba(201,168,76,0.55)', hoverBackgroundColor:'rgba(201,168,76,0.85)',
      borderColor:'#C9A84C', borderWidth:1, borderRadius:5, maxBarThickness:22
    }]},
    options:{
      responsive:true, maintainAspectRatio:false,
      plugins:{legend:{display:false}},
      scales:{
        x:{ticks:{color:'#C5CBD8',font:{size:9}},grid:{display:false}},
        y:{ticks:{color:'#C5CBD8',font:{size:9}},grid:{color:'rgba(255,255,255,0.04)'}}
      }
    }
  });

  const productMap={};
  sales.forEach(s=>{productMap[s.product]=(productMap[s.product]||0)+(s.qty*s.price);});
  const colors=['#C9A84C','#1A6CB0','#4CAF50','#FF9800','#9C27B0','#E91E63'];
  if (productChartInst) productChartInst.destroy();
  productChartInst = new Chart(document.getElementById('productChart').getContext('2d'),{
    type:'doughnut',
    data:{labels:Object.keys(productMap),datasets:[{
      data:Object.values(productMap), backgroundColor:colors.slice(0,Object.keys(productMap).length),
      borderWidth:2, borderColor:'#161D3F', hoverOffset:6
    }]},
    options:{
      responsive:true, maintainAspectRatio:false, cutout:'62%',
      plugins:{legend:{position:'bottom',labels:{color:'#C5CBD8',padding:8,font:{size:9.5},boxWidth:9,boxHeight:9}}}
    }
  });

  const cutting=getData('cutting'), sewing=getData('sewing');
  const totalCut=cutting.reduce((a,x)=>a+x.qty,0), totalSew=sewing.reduce((a,x)=>a+x.qty,0), totalSold=sales.reduce((a,x)=>a+x.qty,0);
  if (flowChartInst) flowChartInst.destroy();
  flowChartInst = new Chart(document.getElementById('flowChart').getContext('2d'),{
    type:'bar',
    data:{
      labels:[lang==='am'?'ቆረጣ':'Cutting',lang==='am'?'ስፌት':'Sewing',lang==='am'?'ዕቃ ቤት':'Store',lang==='am'?'ሽያጭ':'Sales'],
      datasets:[{
        label:lang==='am'?'ብዛት':'Qty', data:[totalCut,totalSew,totalStock,totalSold],
        backgroundColor:['#C9A84C','#1A6CB0','#4CAF50','#FF9800'], borderRadius:5, borderWidth:0, maxBarThickness:16
      }]
    },
    options:{
      indexAxis:'y', responsive:true, maintainAspectRatio:false,
      plugins:{legend:{display:false}},
      scales:{
        x:{ticks:{color:'#C5CBD8',font:{size:9}},grid:{color:'rgba(255,255,255,0.04)'}},
        y:{ticks:{color:'#C5CBD8',font:{size:10}},grid:{display:false}}
      }
    }
  });
}

// ── CUTTING ────────────────────────────────────────────────────
function renderCutting() {
  const data       = getData('cutting');
  const cuttingRaw = getData('cuttingRaw');
  const dmg        = getData('cuttingDamage');
  const today    = new Date().toISOString().slice(0,10);
  const weekAgo  = new Date(Date.now() -  6*86400000).toISOString().slice(0,10);
  const monthAgo = new Date(Date.now() - 29*86400000).toISOString().slice(0,10);
  const sum = arr => arr.reduce((a,r)=>a+(r.qty||0),0);
  const tBreak = arr => {
    const m={}; arr.forEach(r=>{m[r.type]=(m[r.type]||0)+(r.qty||0);});
    return Object.entries(m).sort((a,b)=>b[1]-a[1]).map(([t,q])=>`${t} <b>${q}</b>`).join(' · ')||'—';
  };

  // ── 0. Incoming raw material from Store — awaiting confirmation ──
  const cutInEl = document.getElementById('cuttingStoreIncoming');
  if (cutInEl) {
    cutInEl.innerHTML = prodFlowPendingHTML('store_cutting', canActCutting(), 'confirmStoreToCutting',
      x => `🧵 ${x.qty} ${x.unit||''} ${x.item}`);
  }

  // ── 1. Fabric strip ──
  const cRawEl = document.getElementById('cuttingRawCards');
  if (cRawEl) {
    cRawEl.innerHTML = cuttingRaw.length ? `
      <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px;padding:10px 12px;
                  background:rgba(201,168,76,0.05);border:1px solid rgba(201,168,76,0.18);border-radius:9px">
        <div style="width:100%;font-size:10px;color:var(--gold);font-weight:700;letter-spacing:0.5px;margin-bottom:6px">
          🧵 ${lang==='am'?'ያለ ጨርቅ ክምችት':'Fabric Stock'}
        </div>
        ${cuttingRaw.map(r=>{
          const c = r.qty<=0?'#FF9090':r.qty<=2?'#FFA726':'#80e080';
          return `<div style="display:flex;align-items:center;gap:6px;padding:5px 10px;
                              background:rgba(0,0,0,0.18);border:1px solid ${c}33;border-radius:7px">
            <span style="font-size:14px;font-weight:700;color:${c}">${r.qty}</span>
            <span style="font-size:11px;color:var(--white)">${r.name}</span>
            <span style="font-size:10px;color:var(--white-dim)">${r.unit||''}</span>
            ${r.qty<=0?'<span style="font-size:10px">❌</span>':r.qty<=2?'<span style="font-size:10px">⚠️</span>':''}
          </div>`;
        }).join('')}
      </div>` : '';
  }

  // ── 2. Stats + bar chart ──
  const statsEl = document.getElementById('cuttingStats');
  if (statsEl) {
    const days7 = [...Array(7)].map((_,i)=>{
      const d=new Date(Date.now()-(6-i)*86400000);
      return {date:d.toISOString().slice(0,10),label:['እሁድ','ሰኞ','ማክሰ','ረቡዕ','ሐሙስ','አርብ','ቅዳሜ'][d.getDay()]};
    });
    const maxDay=Math.max(...days7.map(({date})=>sum(data.filter(r=>r.date===date))),1);
    const todayQ=sum(data.filter(r=>r.date===today));
    const weekQ =sum(data.filter(r=>r.date>=weekAgo));
    const monthQ=sum(data.filter(r=>r.date>=monthAgo));
    const dmgQ  =dmg.reduce((a,d)=>a+(d.qty||0),0);

    statsEl.innerHTML = `
      <div style="padding:12px 14px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);border-radius:10px;margin-bottom:12px">
        <!-- KPI row -->
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:12px">
          ${[
            {icon:'📅',val:todayQ, label:lang==='am'?'ዛሬ':'Today',     sub:tBreak(data.filter(r=>r.date===today))},
            {icon:'📆',val:weekQ,  label:lang==='am'?'ሳምንት':'Week',    sub:tBreak(data.filter(r=>r.date>=weekAgo)), color:'#4FC3F7'},
            {icon:'🗓️',val:monthQ, label:lang==='am'?'ወር':'Month',     sub:tBreak(data.filter(r=>r.date>=monthAgo)),color:'var(--gold)'},
            {icon:'⚠️',val:dmgQ.toFixed(1),label:lang==='am'?'ዳሜጅ':'Damage',sub:'',color:'#FF9090'},
          ].map(k=>`
            <div style="text-align:center;padding:8px 4px;background:rgba(255,255,255,0.02);border-radius:8px">
              <div style="font-size:12px;margin-bottom:2px">${k.icon}</div>
              <div style="font-size:18px;font-weight:700;color:${k.color||'var(--white)'}">${k.val}</div>
              <div style="font-size:10px;color:rgba(197,203,216,0.45)">${k.label}</div>
              ${k.sub?`<div style="font-size:9px;color:rgba(197,203,216,0.3);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${k.sub}</div>`:''}
            </div>`).join('')}
        </div>
        <!-- 7-day bars -->
        <div style="display:flex;gap:4px;align-items:flex-end;height:52px">
          ${days7.map(({date,label})=>{
            const q=sum(data.filter(r=>r.date===date));
            const pct=Math.max(Math.round((q/maxDay)*100),q>0?8:2);
            const isT=date===today;
            return `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:1px">
              <div style="font-size:9px;color:${isT?'var(--gold)':'var(--white-dim)'};font-weight:${isT?'700':'400'}">${q||''}</div>
              <div style="width:100%;flex:1;display:flex;align-items:flex-end">
                <div style="width:100%;height:${pct}%;background:${isT?'var(--gold)':'rgba(79,195,247,0.45)'};border-radius:2px 2px 0 0"></div>
              </div>
              <div style="font-size:9px;color:${isT?'var(--gold)':'rgba(197,203,216,0.3)'}">${label}</div>
            </div>`;
          }).join('')}
        </div>
      </div>`;
  }

  // ── 3. Fabric report (collapsible) ──
  renderCuttingFabricReport();

  // ── 4. Cutting history ──
  const h=lang==='am'?['ቀን','አይነት','ብዛት','ጨርቅ','ፍጆታ','ሰራተኛ','ማስ.','→ ስፌት','ስረዝ']:['Date','Type','Qty','Fabric','Used','By','Note','→ Sewing','Del'];
  document.getElementById('cuttingThead').innerHTML=`<tr>${h.map(x=>`<th>${x}</th>`).join('')}</tr>`;
  document.getElementById('cuttingTbody').innerHTML = data.length
    ? [...data].sort((a,b)=>b.date.localeCompare(a.date)).map(r=>{
        const remaining = r.qty - (r.sentQty||0);
        const sendCell = remaining > 0
          ? (canActCutting()
              ? `<button onclick="openCutToSewing('${r.id}')" style="padding:4px 9px;font-size:10px;font-weight:700;font-family:inherit;border-radius:7px;border:1px solid rgba(201,168,76,0.4);background:rgba(201,168,76,0.1);color:var(--gold);cursor:pointer;white-space:nowrap">📤 ${remaining}</button>`
              : `<span style="font-size:10px;color:rgba(197,203,216,0.4)">${remaining} ${lang==='am'?'ይቀራል':'left'}</span>`)
          : `<span style="font-size:10px;color:#80e080">✅ ${lang==='am'?'ተልኳል':'Sent'}</span>`;
        return `<tr>
        <td style="white-space:nowrap;color:var(--white-dim)">${r.date}</td>
        <td style="font-weight:600">${r.type}</td>
        <td style="text-align:center;font-weight:700;color:var(--gold)">${r.qty}</td>
        <td>${r.fabric}</td>
        <td style="text-align:center;color:#4FC3F7">${r.fabricQtyUsed>0?r.fabricQtyUsed:'—'}</td>
        <td style="color:var(--white-dim)">${r.operator||'—'}</td>
        <td style="color:var(--white-dim)">${r.note||'—'}</td>
        <td>${sendCell}</td>
        <td>${requestDeleteBtn('cutting',r.id)}</td>
      </tr>`;
      }).join('')
    : noDataRow(h.length);

  // ── 5. Damage history ──
  const dh=lang==='am'?['ቀን','ጨርቅ','ብዛት','ምክንያት','ስረዝ']:['Date','Fabric','Qty','Reason','Del'];
  document.getElementById('cuttingDmgThead').innerHTML=`<tr>${dh.map(x=>`<th>${x}</th>`).join('')}</tr>`;
  document.getElementById('cuttingDmgTbody').innerHTML = dmg.length
    ? [...dmg].sort((a,b)=>b.date.localeCompare(a.date)).map(r=>`<tr>
        <td style="white-space:nowrap;color:var(--white-dim)">${r.date}</td>
        <td style="color:#FF9090;font-weight:600">${r.fabric}</td>
        <td style="text-align:center"><span class="badge badge-damage">${r.qty} ${r.unit||''}</span></td>
        <td style="color:var(--white-dim)">${r.reason||'—'}</td>
        <td>${requestDeleteBtn('cuttingDamage',r.id)}</td>
      </tr>`).join('')
    : noDataRow(5);

  // ── 6. Tab styling + cross-reference report (Type × Fabric: cut vs sewn) ──
  updateCuttingTabStyle();
  renderCuttingReportTab();
}

let cuttingActiveTab = 'history';

function switchCuttingTab(tab) {
  cuttingActiveTab = tab;
  updateCuttingTabStyle();
}

function updateCuttingTabStyle() {
  const histBtn = document.getElementById('cutTabHistoryBtn');
  const repBtn  = document.getElementById('cutTabReportBtn');
  const histEl  = document.getElementById('cuttingTabHistory');
  const repEl   = document.getElementById('cuttingTabReport');
  if (!histBtn || !repBtn || !histEl || !repEl) return;
  const on  = 'background:var(--gold);color:var(--navy)';
  const off = 'background:transparent;color:var(--white-dim)';
  histBtn.style.cssText += cuttingActiveTab==='history' ? on : off;
  repBtn.style.cssText  += cuttingActiveTab==='report'  ? on : off;
  histEl.style.display = cuttingActiveTab==='history' ? '' : 'none';
  repEl.style.display  = cuttingActiveTab==='report'  ? '' : 'none';
  if (cuttingActiveTab === 'report') renderCuttingReportTab();
}

// Full cross-reference report: for every (clothing type, fabric) combo — how much was cut,
// how much fabric was used, and how much of that type has actually been sewn (finished stage) —
// so cutting and sewing can be checked against each other at a glance.
function renderCuttingReportTab() {
  const el = document.getElementById('cuttingTabReport');
  if (!el || cuttingActiveTab !== 'report') return;

  const cutting = getData('cutting');
  const sewing  = getData('sewing');
  const lastDept = getLastSewDeptKey();

  // Group cutting records by (type, fabric)
  const byKey = {};
  cutting.forEach(r => {
    const key = `${r.type}||${r.fabric}`;
    if (!byKey[key]) byKey[key] = { type:r.type, fabric:r.fabric, qtyCut:0, fabricUsed:0 };
    byKey[key].qtyCut += (r.qty||0);
    byKey[key].fabricUsed += (r.fabricQtyUsed||0);
  });

  // Total finished (fully sewn, at the last department) per clothing type — for cross-checking
  const sewnByType = {};
  sewing.filter(s => s.dept === lastDept).forEach(s => { sewnByType[s.type] = (sewnByType[s.type]||0) + (s.qty||0); });

  const rows = Object.values(byKey).sort((a,b) => a.type.localeCompare(b.type) || a.fabric.localeCompare(b.fabric));
  const totalCut = rows.reduce((a,r)=>a+r.qtyCut,0);
  const totalFabric = rows.reduce((a,r)=>a+r.fabricUsed,0);

  if (!rows.length) {
    el.innerHTML = `<div style="text-align:center;color:var(--white-dim);padding:30px 10px;font-size:13px">${lang==='am'?'ገና ምንም የቆረጣ መረጃ የለም':'No cutting data yet'}</div>`;
    return;
  }

  el.innerHTML = `
    <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px">
      <div style="padding:8px 14px;background:rgba(201,168,76,0.1);border:1px solid rgba(201,168,76,0.3);border-radius:9px;text-align:center">
        <div style="font-size:10px;color:rgba(197,203,216,0.5)">${lang==='am'?'ጠቅላላ የተቆረጠ':'Total Cut'}</div>
        <div style="font-size:17px;font-weight:700;color:var(--gold)">${totalCut}</div>
      </div>
      <div style="padding:8px 14px;background:rgba(79,195,247,0.08);border:1px solid rgba(79,195,247,0.25);border-radius:9px;text-align:center">
        <div style="font-size:10px;color:rgba(197,203,216,0.5)">${lang==='am'?'ጠቅላላ ጨርቅ ፍጆታ':'Total Fabric Used'}</div>
        <div style="font-size:17px;font-weight:700;color:#4FC3F7">${totalFabric.toFixed(1)}</div>
      </div>
    </div>
    <div style="overflow-x:auto">
      <table class="data-table" style="min-width:640px">
        <thead><tr>
          <th>${lang==='am'?'የልብስ አይነት':'Clothing Type'}</th>
          <th>${lang==='am'?'የጨርቅ አይነት':'Fabric'}</th>
          <th style="text-align:center">${lang==='am'?'የተቆረጠ ብዛት':'Qty Cut'}</th>
          <th style="text-align:center">${lang==='am'?'የጨርቅ ፍጆታ':'Fabric Used'}</th>
          <th style="text-align:center">${lang==='am'?'የተሰፋ (ጨርሶ)':'Sewn (Finished)'}</th>
          <th style="text-align:center">${lang==='am'?'ያልተሰፋ ቀሪ':'Not Yet Sewn'}</th>
        </tr></thead>
        <tbody>
          ${rows.map(r => {
            const sewnTotal = sewnByType[r.type] || 0; // note: shared across fabrics of the same type if any
            const remaining = Math.max(0, r.qtyCut - sewnTotal);
            return `<tr>
              <td style="font-weight:600;color:var(--white)">${r.type}</td>
              <td style="color:var(--white-dim)">${r.fabric}</td>
              <td style="text-align:center;font-weight:700;color:var(--gold)">${r.qtyCut}</td>
              <td style="text-align:center;color:#4FC3F7">${r.fabricUsed.toFixed(1)}</td>
              <td style="text-align:center;color:#80e080">${sewnTotal}</td>
              <td style="text-align:center;font-weight:700;color:${remaining>0?'#FFA726':'var(--white-dim)'}">${remaining}</td>
            </tr>`;
          }).join('')}
        </tbody>
      </table>
    </div>
    <div style="font-size:10.5px;color:rgba(197,203,216,0.4);margin-top:10px;line-height:1.5">
      ${lang==='am'
        ? '💡 "የተሰፋ" ቁጥሩ በልብስ አይነት ደረጃ ነው የሚሰላው (የመጨረሻው ስፌት ዘርፍ ላይ የተመዘገበው) — ተመሳሳይ አይነት ልብስ ከተለያየ ጨርቅ ከተቆረጠ በሁሉም ረድፎች ላይ ተመሳሳይ ድምር ይታያል።'
        : '💡 "Sewn" is calculated per clothing type (logged at the final sewing stage) — if the same clothing type was cut from more than one fabric, the same total will show on each row.'}
    </div>`;
}

// saveCutting moved to fabric stock section below

function dmgOpenModal() {
  const sel = document.getElementById('dmgFabric');
  if (sel) {
    const cuttingRaw = getData('cuttingRaw');
    sel.innerHTML = '<option value="">— ጨርቅ ምረጥ —</option>' +
      cuttingRaw.map(r => `<option value="${r.name}" data-qty="${r.qty}" data-unit="${r.unit||''}">${r.name} (${r.qty} ${r.unit||''})</option>`).join('');
  }
  const d = document.getElementById('dmgDate');
  if (d && !d.value) d.value = new Date().toISOString().slice(0,10);
  const qEl = document.getElementById('dmgQty'); if (qEl) qEl.value = '';
  const rEl = document.getElementById('dmgReason'); if (rEl) rEl.value = '';
  document.getElementById('dmgFabricStock').textContent = '';
  document.getElementById('dmgFabricUnit').textContent  = '';
  openModal('cuttingDmgModal');
}

function dmgUpdateFabricStock() {
  const sel = document.getElementById('dmgFabric');
  const opt = sel?.selectedOptions[0];
  const stockEl = document.getElementById('dmgFabricStock');
  const unitEl  = document.getElementById('dmgFabricUnit');
  if (!opt || !opt.value) {
    if (stockEl) stockEl.textContent = '';
    if (unitEl)  unitEl.textContent  = '';
    return;
  }
  const available = parseFloat(opt.dataset.qty) || 0;
  const unit      = opt.dataset.unit || '';
  const damaged   = parseFloat(document.getElementById('dmgQty')?.value) || 0;
  const remaining = available - damaged;
  if (stockEl) {
    stockEl.textContent = `${lang==='am'?'ያለ ክምችት':'Available'}: ${available} ${unit}`;
    if (damaged > 0) {
      stockEl.textContent += ` → ${lang==='am'?'ቀሪ':'After'}: ${remaining.toFixed(1)} ${unit}`;
      stockEl.style.color = remaining < 0 ? '#FF9090' : remaining < 2 ? '#FFA726' : '#80e080';
    } else {
      stockEl.style.color = 'var(--white-dim)';
    }
  }
  if (unitEl) unitEl.textContent = unit ? `${lang==='am'?'መለኪያ':'Unit'}: ${unit}` : '';
}

function saveCuttingDamage() {
  const date   = v('dmgDate');
  const fabric = v('dmgFabric');
  const qty    = parseFloat(document.getElementById('dmgQty')?.value);
  const reason = v('dmgReason');

  if (!date || !fabric || !qty) {
    toast(lang==='am'?'ሁሉንም ሙሉ':'Fill all fields','error'); return;
  }

  // Deduct from cuttingRaw
  const cuttingRaw  = getData('cuttingRaw');
  const fabricStock = cuttingRaw.find(r => r.name === fabric);
  if (!fabricStock || fabricStock.qty < qty) {
    toast(`${fabric}: ${lang==='am'?`ክምችት አልቋል (${fabricStock?.qty||0} ብቻ አለ)`:`Insufficient stock (${fabricStock?.qty||0} available)`}`, 'error');
    return;
  }
  fabricStock.qty -= qty;
  if (fabricStock.qty < 0) fabricStock.qty = 0;
  saveData('cuttingRaw', cuttingRaw);

  // Record damage
  const data = getData('cuttingDamage');
  const sel  = document.getElementById('dmgFabric');
  const unit = sel?.selectedOptions[0]?.dataset.unit || '';
  data.push({ id:uid(), date, fabric, qty, unit, reason: reason || '—' });
  saveData('cuttingDamage', data);

  closeModal('cuttingDmgModal');
  renderCutting();
  toast(lang==='am'
    ? `⚠️ ${qty} ${unit} ${fabric} ዳሜጅ ተመዝግቧል — ከክምችት ተቀንሷል`
    : `⚠️ ${qty} ${unit} ${fabric} damage recorded — deducted from stock`);
}

// ── SEWING ─────────────────────────────────────────────────────
function saveSewing() {
  const date   = v('sewDate');
  const worker = v('sewWorker');
  const dept   = v('sewDept');
  const type   = v('sewType');
  const qty    = parseInt(v('sewQty'));
  const dmgQty = parseInt(v('sewDmgQty'))||0;
  const note   = v('sewNote');
  if (!date || !worker || !qty) { toast(lang==='am'?'ሁሉንም ሙሉ':'Fill all required fields','error'); return; }
  if (!type || !getData('productPrices').some(p => p.type === type)) {
    toast(lang==='am'?'የልብስ አይነት ከዋጋ ዝርዝር ውስጥ መመረጥ አለበት':'Clothing type must be chosen from the price list','error'); return;
  }
  if (!dept || dept === '__addnew__') { toast(lang==='am'?'ሙያ ይምረጡ':'Please select a department','error'); return; }

  // Whichever department is FIRST in the configured sequence is where cut pieces from Cutting
  // actually enter the sewing process — so that's what draws down the "received from Cutting"
  // pool. Later stages work on pieces already in process and don't draw the pool again.
  if (dept === getFirstSewDeptKey()) {
    const pool = getData('sewingCutStock');
    const stock = pool.find(p => p.type === type);
    const avail = stock ? stock.qty : 0;
    if (avail < qty) {
      toast(lang==='am'?`⛔ ከቆረጣ ክፍል የደረሰው በቂ አይደለም — ${type} ያለው ${avail} ብቻ ነው`:`⛔ Not enough received from Cutting — only ${avail} of ${type} available`,'error');
      return;
    }
    stock.qty -= qty;
    saveData('sewingCutStock', pool);
  }

  const data = getData('sewing');
  data.push({ id:uid(), date, worker, dept, type:type||dept, qty, dmgQty, note });
  saveData('sewing', data);
  closeModal('sewingModal');
  renderSewing();
  toast(lang==='am'?'✅ ምዝገባ ተቀምጧል':'Record saved ✓');
}


// ── STORE (WAREHOUSE) ──────────────────────────────────────────

// ── TRANSFER CARD (top-level so onclick works from HTML) ───────
function renderTransferCard(tr) {
  const branches = getData('branches');
  const br = branches.find(b => b.id === tr.branch);
  const SC = {pending_owner:'#FFA726', pending_receiver:'#4FC3F7', confirmed:'#4CAF50', rejected:'#E05A5A'};
  const SL = {
    pending_owner:   lang==='am'?'ኦነሩ ሊያፀድቅ':'Pending Approval',
    pending_receiver:lang==='am'?'ተቀባዩ ሊያረጋግጥ':'Pending Receipt',
    confirmed:       lang==='am'?'ተቀብሏል':'Confirmed',
    rejected:        lang==='am'?'ውድቅ':'Rejected'
  };
  const sc = SC[tr.status] || '#aaa';
  const isOwner2 = currentUser.role === 'owner';
  const isSales2 = currentUser.role === 'sales';
  let actions = '';
  if (isOwner2 && tr.status === 'pending_owner') {
    actions = `<div style="display:flex;gap:6px;margin-top:10px">
      <button onclick="approveStoreTransfer('${tr.id}')" style="flex:1;padding:7px;font-size:11px;font-weight:700;font-family:inherit;border-radius:8px;border:1px solid rgba(76,175,80,0.5);background:rgba(76,175,80,0.1);color:#80e080;cursor:pointer">✅ ${lang==='am'?'አፅድቅ':'Approve'}</button>
      <button onclick="rejectStoreTransfer('${tr.id}')" style="flex:1;padding:7px;font-size:11px;font-weight:700;font-family:inherit;border-radius:8px;border:1px solid rgba(224,90,90,0.4);background:rgba(224,90,90,0.08);color:#FF9090;cursor:pointer">❌ ${lang==='am'?'ውድቅ':'Reject'}</button>
    </div>`;
  } else if (tr.status === 'pending_receiver' && isSales2 && tr.branch === currentUser.branch) {
    actions = `<button onclick="confirmStoreTransferReceipt('${tr.id}')" style="width:100%;margin-top:10px;padding:8px;font-size:11px;font-weight:700;font-family:inherit;border-radius:8px;border:1px solid rgba(79,195,247,0.4);background:rgba(79,195,247,0.1);color:#4FC3F7;cursor:pointer">📦 ${lang==='am'?'ተቀበልኩ ↗ ሱቅ ይግባ':'Confirm Receipt → Add to Stock'}</button>`;
  }
  return `<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px;position:relative;overflow:hidden">
    <div style="position:absolute;top:0;left:0;width:3px;height:100%;background:${sc};border-radius:2px 0 0 2px"></div>
    <div style="margin-left:10px">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:6px">
        <div>
          <span style="font-size:14px;font-weight:700;color:var(--white)">${tr.qty} × ${tr.type}</span>
          <div style="font-size:11px;color:var(--white-dim);margin-top:1px">${tr.date} · 🏪 ${br?br.name:tr.branch}</div>
        </div>
        <span style="font-size:10px;font-weight:700;color:${sc};background:${sc}22;padding:3px 8px;border-radius:6px;border:1px solid ${sc}44;white-space:nowrap;margin-left:8px">${SL[tr.status]||tr.status}</span>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:6px;margin-top:4px">
        <span style="font-size:11px;color:rgba(197,203,216,0.5)">🚗 ${tr.carrier||'—'}</span>
        <span style="font-size:11px;color:rgba(197,203,216,0.5)">👤 ${tr.sentByName||tr.sentBy||'—'}</span>
        ${tr.receivedByName?`<span style="font-size:11px;color:#80e080">✅ ${tr.receivedByName}</span>`:''}
        ${tr.note?`<span style="font-size:11px;color:rgba(197,203,216,0.35)">💬 ${tr.note}</span>`:''}
      </div>
      ${actions}
    </div>
  </div>`;
}

function renderStore() {
  const storeMap = getStoreStockMap();
  checkStockAlerts(storeMap, STORE_LOW, 'storeAlerts');

  // ── Incoming raw material from Procurement — awaiting confirmation ──
  const procInEl = document.getElementById('storeProcIncoming');
  if (procInEl) {
    procInEl.innerHTML = prodFlowPendingHTML('proc_store', canActStore(), 'confirmProcToStore',
      x => `🧵 ${x.qty} ${x.unit||''} ${x.item}`);
  }

  // ── Raw material held at Store, ready to send to Cutting ──
  const rawStock = getData('rawStock').filter(r => r.qty > 0);
  const rawEl = document.getElementById('storeRawStockCards');
  if (rawEl) {
    rawEl.innerHTML = rawStock.length ? `<div style="display:flex;flex-wrap:wrap;gap:6px">
      ${rawStock.map(r=>`
        <div style="display:flex;align-items:center;gap:8px;background:rgba(201,168,76,0.08);border:1px solid rgba(201,168,76,0.2);border-radius:20px;padding:5px 12px 5px 8px">
          <span style="font-size:13px">🧵</span>
          <div>
            <span style="font-size:12px;font-weight:700;color:var(--white)">${r.qty} ${r.unit||''}</span>
            <span style="font-size:11px;color:var(--white-dim);margin-left:4px">${r.name}</span>
          </div>
          ${canActStore() ? `<button onclick="openStoreToCutting('${r.name}','${r.unit||''}')" style="margin-left:4px;padding:3px 8px;font-size:10px;font-family:inherit;font-weight:700;border-radius:10px;border:1px solid rgba(201,168,76,0.4);background:rgba(201,168,76,0.12);color:var(--gold);cursor:pointer">✂️ ${lang==='am'?'ላክ':'Send'}</button>` : ''}
        </div>`).join('')}
    </div>` : `<p style="opacity:.4;font-size:12px;margin:0">${lang==='am'?'ምንም ጥሬ እቃ የለም':'No raw material yet'}</p>`;
  }

  // ── Incoming finished goods from Sewing — awaiting confirmation ──
  const sewInEl = document.getElementById('storeSewIncoming');
  if (sewInEl) {
    sewInEl.innerHTML = prodFlowPendingHTML('sewing_store', canActStore(), 'openReceiveShelfModal',
      x => `🪡 ${x.qty} ${x.type}`);
  }

  // Stock summary cards
  const stockEl = document.getElementById('storeStockCards');
  stockEl.innerHTML = Object.keys(storeMap).length
    ? Object.entries(storeMap).map(([type,qty])=>{
        const cls = qty<=0?'out-stock':qty<=STORE_LOW?'low-stock':'';
        const qCls = qty<=0?'qty-out':qty<=STORE_LOW?'qty-low':'';
        const warn = qty<=0?`<div class="stock-card-warn">❌ ${lang==='am'?'አልቋል':'Out!'}</div>`:qty<=STORE_LOW?`<div class="stock-card-warn">⚠️ ${lang==='am'?'ያለቀ ነው':'Low!'}</div>`:'';
        return `<div class="stock-card ${cls}">
          <div class="stock-card-type">${type}</div>
          <div class="stock-card-qty ${qCls}">${qty}</div>
          <div class="stock-card-unit">${lang==='am'?'ቁጥር':'pcs'}</div>
          ${warn}
        </div>`;
      }).join('')
    : `<p style="opacity:.5">${t('noData')}</p>`;

  // Store items table
  const data=getData('store');
  const h=lang==='am'?['ቀን','አይነት','ብዛት','ቦታ','ስረዝ']:['Date','Type','Qty','Location','Del'];
  document.getElementById('storeThead').innerHTML=`<tr>${h.map(x=>`<th>${x}</th>`).join('')}</tr>`;
  document.getElementById('storeTbody').innerHTML = data.length
    ? data.map(r=>`<tr><td>${r.date}</td><td>${r.type}</td><td>${r.qty}</td><td>${r.location||'—'}</td>
        <td>${requestDeleteBtn('store',r.id)}</td></tr>`).join('')
    : noDataRow(5);

  // ── Transfers section
  const transfers = getData('storeTransfers');
  const branches2 = getData('branches');
  const isOwner2 = currentUser.role==='owner';
  const isSales2 = currentUser.role==='sales';
  const myBranch2 = currentUser.branch;

  // Pending owner approval
  const pendingOwner = transfers.filter(t=>t.status==='pending_owner');
  // Pending receiver confirmation (for my branch)
  const pendingMe = transfers.filter(t=>t.status==='pending_receiver'&&isSales2&&t.branch===myBranch2);
  // All for history
  const confirmed = transfers.filter(t=>t.status==='confirmed'||t.status==='rejected').sort((a,b)=>b.date.localeCompare(a.date));

  const trEl = document.getElementById('storeTransfersPanel');
  if (trEl) {
    const allTransfers = [...transfers].sort((a,b) => {
      const order = {pending_owner:0, pending_receiver:1, confirmed:2, rejected:3};
      const od = (order[a.status]??9) - (order[b.status]??9);
      return od !== 0 ? od : (b.date||'').localeCompare(a.date||'');
    });

    if (!allTransfers.length) {
      trEl.innerHTML = `<p style="opacity:.4;font-size:12px;padding:6px 0">${lang==='am'?'ዝውውር የለም':'No transfers yet'}</p>`;
    } else {
      const SC = {pending_owner:'#FFA726', pending_receiver:'#4FC3F7', confirmed:'#4CAF50', rejected:'#E05A5A'};
      const SL = {
        pending_owner:   lang==='am'?'ፈቃድ ይጠበቃል':'Pending Approval',
        pending_receiver:lang==='am'?'ተቀባዩ ሊያረጋግጥ':'Pending Receipt',
        confirmed:       lang==='am'?'ተቀብሏል':'Confirmed',
        rejected:        lang==='am'?'ውድቅ':'Rejected'
      };
      const hdrs = lang==='am'
        ? ['ቀን','አይነት','ብዛት','ቅርንጫፍ','ተሸካሚ','የላከ','የተቀበለ','ሁኔታ','አክሽን']
        : ['Date','Type','Qty','Branch','Carrier','Sent By','Received By','Status','Action'];

      const rows = allTransfers.map(t => {
        const br = branches2.find(b => b.id === t.branch);
        const sc = SC[t.status] || '#aaa';
        const sl = SL[t.status] || t.status;
        const statusBadge = `<span style="font-size:10px;font-weight:700;color:${sc};background:${sc}18;padding:2px 8px;border-radius:5px;border:1px solid ${sc}44;white-space:nowrap">${sl}</span>`;

        let actionCell = '—';
        if (isOwner2 && t.status === 'pending_owner') {
          actionCell = `<div style="display:flex;gap:4px">
            <button onclick="approveStoreTransfer('${t.id}')" style="padding:3px 9px;border-radius:5px;border:1px solid rgba(76,175,80,0.5);background:rgba(76,175,80,0.12);color:#80e080;cursor:pointer;font-family:inherit;font-size:11px;font-weight:700">✅ ${lang==='am'?'አፅድቅ':'Approve'}</button>
            <button onclick="rejectStoreTransfer('${t.id}')" style="padding:3px 9px;border-radius:5px;border:1px solid rgba(224,90,90,0.4);background:rgba(224,90,90,0.1);color:#FF9090;cursor:pointer;font-family:inherit;font-size:11px;font-weight:700">❌</button>
          </div>`;
        } else if (isSales2 && t.status === 'pending_receiver' && t.branch === myBranch2) {
          actionCell = `<button onclick="confirmStoreTransferReceipt('${t.id}')" style="padding:3px 9px;border-radius:5px;border:1px solid rgba(79,195,247,0.5);background:rgba(79,195,247,0.1);color:#4FC3F7;cursor:pointer;font-family:inherit;font-size:11px;font-weight:700">📦 ${lang==='am'?'ተቀበልኩ':'Receive'}</button>`;
        }

        return `<tr>
          <td style="white-space:nowrap">${t.date||'—'}</td>
          <td style="font-weight:600;color:var(--white)">${t.type||'—'}</td>
          <td style="text-align:center;font-weight:700;color:var(--gold)">${t.qty||0}</td>
          <td>${br?br.name:t.branch||'—'}</td>
          <td>${t.carrier||'—'}</td>
          <td>${t.sentByName||t.sentBy||t.by||'—'}</td>
          <td style="color:#80e080">${t.receivedByName||t.receivedBy||'—'}</td>
          <td>${statusBadge}</td>
          <td>${actionCell}</td>
        </tr>`;
      }).join('');

      trEl.innerHTML = `
        <div style="overflow-x:auto">
          <table class="data-table" style="min-width:700px">
            <thead><tr>${hdrs.map(h=>`<th style="white-space:nowrap;font-size:11px">${h}</th>`).join('')}</tr></thead>
            <tbody>${rows}</tbody>
          </table>
        </div>`;
    }
  }

  // Populate dispatch modal dropdowns
  const typesSel = document.getElementById('dispatchType');
  if (typesSel) {
    const opts = Object.keys(storeMap).map(t=>`<option value="${t}">${t} (${storeMap[t]} ${lang==='am'?'ቁ.':'pcs'})</option>`).join('');
    typesSel.innerHTML = opts || `<option value="">${lang==='am'?'ክምችት የለም':'No stock available'}</option>`;
    typesSel.onchange = updateDispatchAvail;
  }
  const dispDate = document.getElementById('dispatchDate');
  if (dispDate && !dispDate.value) dispDate.value = new Date().toISOString().slice(0,10);
  populateBranchSelect('dispatchBranch');
  updateDispatchAvail();
}

function openDispatchModal() {
  // Refresh stock dropdowns fresh every time
  const storeMap = getStoreStockMap();
  const typesSel = document.getElementById('dispatchType');
  if (typesSel) {
    const opts = Object.entries(storeMap)
      .filter(([,qty]) => qty > 0)
      .map(([t,qty]) => `<option value="${t}">${t} (${qty} ${lang==='am'?'ቁ.':'pcs'})</option>`)
      .join('');
    typesSel.innerHTML = opts || `<option value="">${lang==='am'?'ክምችት የለም — አስቀድሞ ዕቃ ጨምሩ':'No stock — add items first'}</option>`;
    typesSel.onchange = updateDispatchAvail;
  }
  const dispDate = document.getElementById('dispatchDate');
  if (dispDate) dispDate.value = new Date().toISOString().slice(0,10);
  const carrier = document.getElementById('dispatchCarrier');
  if (carrier) carrier.value = '';
  const note = document.getElementById('dispatchNote');
  if (note) note.value = '';
  populateBranchSelect('dispatchBranch');
  updateDispatchAvail();
  openModal('storeDispatchModal');
}


function updateDispatchAvail() {
  const type = v('dispatchType');
  const storeMap = getStoreStockMap();
  const el = document.getElementById('dispatchAvail');
  if (el && type) el.textContent = `${lang==='am'?'ያለ ክምችት':'Available'}: ${storeMap[type]||0} ${lang==='am'?'ቁ.':'pcs'}`;
}

function saveDispatch() {
  const date=v('dispatchDate'), type=v('dispatchType'), qty=parseInt(v('dispatchQty'));
  const branch=v('dispatchBranch'), note=v('dispatchNote'), carrier=v('dispatchCarrier');
  if (!date||!type||!qty||!branch) { toast(lang==='am'?'ሁሉንም ሙሉ':'Fill all fields','error'); return; }
  if (!carrier.trim()) { toast(lang==='am'?'የወሰደው ሰው ስም ያስፈልጋል':'Carrier name required','error'); return; }
  const storeMap=getStoreStockMap();
  if ((storeMap[type]||0) < qty) { toast(lang==='am'?'ክምችት በቂ አይደለም':'Insufficient stock','error'); return; }

  // Create PENDING transfer — store rows stay untouched.
  // getStoreStockMap() deducts in-transit transfers automatically.
  const transfers=getData('storeTransfers');
  transfers.push({
    id:uid(), date, type, qty,
    items:[{type, qty}],   // array form for notification cards
    branch, note, carrier:carrier.trim(),
    by:currentUser.username,
    sentBy:currentUser.username, sentByName:currentUser.name||currentUser.username,
    status:'pending_owner',   // pending_owner → pending_receiver → confirmed
    createdAt:new Date().toISOString()
  });
  saveData('storeTransfers',transfers);

  closeModal('storeDispatchModal');
  renderStore();
  renderDashboard();   // show notification on owner dashboard immediately
  buildSidebar();
  toast(lang==='am'?`📤 ${qty} ${type} ተልኳል — ኦነሩ ሊያፀድቅ ይጠበቃል`:`📤 ${qty} ${type} sent — awaiting owner approval`);
}

// ── OWNER: approve transfer
function approveStoreTransfer(id) {
  const transfers=getData('storeTransfers');
  const t=transfers.find(x=>x.id===id);
  if(!t) return;
  t.status='pending_receiver';
  t.approvedBy=currentUser.username;
  t.approvedAt=new Date().toISOString();
  saveData('storeTransfers',transfers);
  renderStore();
  renderDashboard();
  buildSidebar();
  toast(lang==='am'?'✅ ተፈቅዷል — ሽያጭ ሰራተኛዋ ትቀበላለች':'✅ Approved — sales staff will confirm receipt');
}

// ── OWNER: reject transfer (return stock)
function rejectStoreTransfer(id) {
  const transfers=getData('storeTransfers');
  const t=transfers.find(x=>x.id===id);
  if(!t) return;
  t.status='rejected';
  t.rejectedBy=currentUser.username;
  t.rejectedAt=new Date().toISOString();
  saveData('storeTransfers',transfers);
  renderStore();
  renderDashboard();
  buildSidebar();
  toast(lang==='am'?'❌ ውድቅ — ዕቃ ወደ ስቶር ተመልሷል':'❌ Rejected — stock returned to store');
}

// ── RECEIVER (sales staff): confirm receipt → stock enters branch
function confirmStoreTransferReceipt(id) {
  const transfers=getData('storeTransfers');
  const t=transfers.find(x=>x.id===id);
  if(!t) return;
  // Security: only the sales staff of the matching branch can confirm receipt
  if(currentUser.role !== 'sales' || currentUser.branch !== t.branch) {
    toast(lang==='am'?'⛔ ይህን ለማረጋገጥ ፈቃድ የለዎትም':'⛔ Only the branch sales staff can confirm receipt', 'error');
    return;
  }
  t.status='confirmed';
  t.receivedBy=currentUser.username;
  t.receivedByName=currentUser.name||currentUser.username;
  t.receivedAt=new Date().toISOString();
  saveData('storeTransfers',transfers);

  // NOW add to branch stock
  const bs=getData('branchStock');
  const ex=bs.find(x=>x.branch===t.branch&&x.type===t.type);
  if(ex) ex.qty+=t.qty; else bs.push({id:uid(),branch:t.branch,type:t.type,qty:t.qty});
  saveData('branchStock',bs);

  // Legacy dispatch log entry
  const dispatches=getData('dispatches');
  dispatches.push({id:uid(),date:t.date,type:t.type,qty:t.qty,branch:t.branch,note:t.note||'',carrier:t.carrier,transferId:t.id});
  saveData('dispatches',dispatches);

  renderStore();
  if(typeof renderSales==='function') renderSales();
  if(typeof renderPOS==='function') renderPOS();
  buildSidebar();
  toast(lang==='am'?`✅ ${t.qty} ${t.type} ተቀብሎ ወደ ሱቅ ገብቷል`:`✅ ${t.qty} ${t.type} received — added to branch stock`);
}

// ── SALES ──────────────────────────────────────────────────────
function renderSales() {
  const myBranch = currentUser.branch;
  // Exclude wholesale sales from the retail sales table — they have their own section
  const sales = getData('sales').filter(s => !s.isWholesale);
  const branches = getData('branches');

  // Switch views based on role
  const ownerView = document.getElementById('salesOwnerView');
  const posView = document.getElementById('salesPosView');
  if (currentUser.role === 'sales') {
    if (ownerView) ownerView.style.display = 'none';
    if (posView) posView.style.display = 'block';
    renderPOS();
    return;
  } else {
    if (ownerView) ownerView.style.display = 'block';
    if (posView) posView.style.display = 'none';
  }

  // Get branch stock for this user's branch
  const bStock = currentUser.role==='owner' ? {} : getBranchStockMap(myBranch);

  // For owner show all; for sales only their branch
  const filtered = currentUser.role==='owner' ? sales : sales.filter(s=>s.branch===myBranch);

  // Sales stock cards (for sales staff) — single branch view
  if (currentUser.role !== 'owner') {
    checkStockAlerts(bStock, SALES_LOW, 'salesAlerts');
    const stockEl = document.getElementById('salesStockCards');
    if (stockEl) {
      const cardsHtml = Object.keys(bStock).length
        ? Object.entries(bStock).map(([type,qty])=>{
            const cls=qty<=0?'out-stock':qty<=SALES_LOW?'low-stock':'';
            const qCls=qty<=0?'qty-out':qty<=SALES_LOW?'qty-low':'';
            const warn=qty<=0?`<div class="stock-card-warn">❌ ${lang==='am'?'አልቋል':'Out!'}</div>`:qty<=SALES_LOW?`<div class="stock-card-warn">⚠️ ${lang==='am'?'ዝቅተኛ':'Low!'}</div>`:'';
            return `<div class="stock-card ${cls}"><div class="stock-card-type">${type}</div><div class="stock-card-qty ${qCls}">${qty}</div><div class="stock-card-unit">${lang==='am'?'ቁ.':'pcs'}</div>${warn}</div>`;
          }).join('')
        : `<p style="opacity:.5">${t('noData')}</p>`;
      stockEl.innerHTML = `<div class="stock-cards">${cardsHtml}</div>`;
    }
  } else {
    // Owner view — show stock grouped by branch, one section per branch
    const alertEl=document.getElementById('salesAlerts');
    if(alertEl) alertEl.innerHTML='';
    const stockEl = document.getElementById('salesStockCards');
    if (stockEl) {
      const ownerBranches = branches.filter(b => !b.noSales);
      stockEl.innerHTML = ownerBranches.length ? ownerBranches.map(br => {
        const stockMap = getBranchStockMap(br.id);
        const cardsHtml = Object.keys(stockMap).length
          ? Object.entries(stockMap).map(([type,qty])=>{
              const cls=qty<=0?'out-stock':qty<=SALES_LOW?'low-stock':'';
              const qCls=qty<=0?'qty-out':qty<=SALES_LOW?'qty-low':'';
              const warn=qty<=0?`<div class="stock-card-warn">❌ ${lang==='am'?'አልቋል':'Out!'}</div>`:qty<=SALES_LOW?`<div class="stock-card-warn">⚠️ ${lang==='am'?'ዝቅተኛ':'Low!'}</div>`:'';
              return `<div class="stock-card ${cls}"><div class="stock-card-type">${type}</div><div class="stock-card-qty ${qCls}">${qty}</div><div class="stock-card-unit">${lang==='am'?'ቁ.':'pcs'}</div>${warn}</div>`;
            }).join('')
          : `<p style="opacity:.4;font-size:12px;padding:8px 0">${t('noData')}</p>`;
        return `<div style="margin-bottom:18px">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:8px;padding-bottom:6px;border-bottom:1px solid var(--border)">
            <span style="font-size:13px">🏪</span>
            <span style="font-size:13px;font-weight:700;color:var(--gold-lt)">${br.name}</span>
            <span style="font-size:11px;color:var(--white-dim)">${br.location?'— '+br.location:''}</span>
          </div>
          <div class="stock-cards">${cardsHtml}</div>
        </div>`;
      }).join('') : `<p style="opacity:.5">${t('noData')}</p>`;
    }
  }

  // KPIs — retail + wholesale combined
  const today=new Date().toISOString().slice(0,10);
  const weekAgoO = new Date(Date.now()-6*86400000).toISOString().slice(0,10);
  const refundsAll = getData('refunds').filter(r => currentUser.role === 'owner' || r.branch === myBranch);
  const todayRefundAmt = refundsAll.filter(r => r.date === today).reduce((a,r) => a + (r.financialDiff || r.origTotal || 0), 0);
  const totalRefundAmt = refundsAll.reduce((a,r) => a + (r.financialDiff || r.origTotal || 0), 0);
  const todaySales=filtered.filter(s=>s.date===today);
  const todayRev=Math.max(0, todaySales.reduce((a,x)=>a+(x.qty*x.price),0) - todayRefundAmt);
  const totalRev=Math.max(0, filtered.reduce((a,x)=>a+(x.qty*x.price),0) - totalRefundAmt);
  const creditTotal=filtered.filter(s=>s.payment==='credit').reduce((a,x)=>a+(x.qty*x.price),0);
  // Wholesale totals
  const wsData = getData('wholesale');
  const wsApproved = wsData.filter(w => w.status === 'approved');
  const wsTodayRev = wsApproved.filter(w=>w.date===today).reduce((a,w)=>a+w.total,0);
  const wsWeekRev  = wsApproved.filter(w=>w.date>=weekAgoO).reduce((a,w)=>a+w.total,0);
  const wsTotalRev = wsApproved.reduce((a,w)=>a+w.total,0);
  const wsPending  = wsData.filter(w=>w.status==='pending').length;
  // Combined
  const combTodayRev = todayRev + wsTodayRev;
  const combTotalRev = totalRev + wsTotalRev;

  const kpiEl = document.getElementById('salesKpis');
  if (kpiEl) kpiEl.innerHTML = `
    <!-- Combined total banner -->
    <div style="width:100%;padding:14px 16px;background:linear-gradient(135deg,rgba(201,168,76,0.12),rgba(79,195,247,0.08));border:1.5px solid rgba(201,168,76,0.4);border-radius:13px;margin-bottom:12px">
      <div style="font-size:10px;font-weight:700;color:rgba(197,203,216,0.45);letter-spacing:1px;margin-bottom:10px">${lang==='am'?'አጠቃላይ ገቢ (ኖርማል ሽያጭ + ጅምላ)':'TOTAL REVENUE (RETAIL + WHOLESALE)'}</div>
      <div style="display:flex;gap:12px;flex-wrap:wrap">
        <div style="flex:1;min-width:120px">
          <div style="font-size:10px;color:rgba(197,203,216,0.4)">${lang==='am'?'ዛሬ አጠቃላይ':'Today Combined'}</div>
          <div style="font-size:22px;font-weight:700;color:var(--gold)">${fmtMoney(combTodayRev)}</div>
          <div style="font-size:11px;color:rgba(197,203,216,0.4);margin-top:3px">🛍️ ${fmtMoney(todayRev)} &nbsp;+&nbsp; 🏪 ${fmtMoney(wsTodayRev)}</div>
        </div>
        <div style="width:1px;background:rgba(255,255,255,0.08)"></div>
        <div style="flex:1;min-width:120px">
          <div style="font-size:10px;color:rgba(197,203,216,0.4)">${lang==='am'?'ጠቅላላ አጠቃላይ':'All-Time Combined'}</div>
          <div style="font-size:22px;font-weight:700;color:#4FC3F7">${fmtMoney(combTotalRev)}</div>
          <div style="font-size:11px;color:rgba(197,203,216,0.4);margin-top:3px">🛍️ ${fmtMoney(totalRev)} &nbsp;+&nbsp; 🏪 ${fmtMoney(wsTotalRev)}</div>
        </div>
      </div>
    </div>
    <!-- breakdown KPIs -->
    ${[
      {icon:'🛍️', val:fmtMoney(todayRev),   label:lang==='am'?'ዛሬ ኖርማል':'Today Retail'},
      {icon:'🏪',  val:fmtMoney(wsTodayRev), label:lang==='am'?'ዛሬ ጅምላ':'Today WS',   color:'#4FC3F7'},
      {icon:'📊',  val:fmtMoney(totalRev),   label:lang==='am'?'ጠቅ ኖርማል':'Total Retail'},
      {icon:'🏪',  val:fmtMoney(wsTotalRev), label:lang==='am'?'ጠቅ ጅምላ':'Total WS',    color:'#4FC3F7'},
      {icon:'🤝',  val:fmtMoney(creditTotal),label:lang==='am'?'ብድር ሽያጭ':'Credit'},
      {icon:'⏳',  val:wsPending,             label:lang==='am'?'ጅምላ ፈቃድ':'WS Pending',  color:'#FFA726'},
    ].map(k=>`<div class="kpi-card" style="${k.color?'border-color:'+k.color+'44':''};flex:1;min-width:90px">
      <div class="kpi-icon">${k.icon}</div>
      <div class="kpi-val" ${k.color?`style="color:${k.color}"`:''}>${k.val}</div>
      <div class="kpi-label">${k.label}</div>
    </div>`).join('')}`;

  // Populate sale modal dropdowns
  const branchForSale = currentUser.role==='owner' ? null : myBranch;
  const stockForModal = branchForSale ? getBranchStockMap(branchForSale) : getStoreStockMap();
  const selProd = document.getElementById('saleProduct');
  if (selProd) {
    selProd.innerHTML = Object.keys(stockForModal).map(t=>`<option value="${t}">${t} (${stockForModal[t]} ${lang==='am'?'ቁ.':'pcs'})</option>`).join('') || `<option value="">—</option>`;
    // Auto-fill price for first product
    setTimeout(updateSaleStock, 0);
  }
  // customers for credit
  const customers=getData('customers');
  const custFilter = currentUser.role==='owner' ? customers : customers.filter(c=>!c.branch||c.branch===myBranch);
  const selCust=document.getElementById('saleCreditCustomer');
  if (selCust) selCust.innerHTML=custFilter.map(c=>`<option value="${c.id}">${c.name}</option>`).join('')||'<option value="">—</option>';

  updateSaleStock();

  // Table
  const h=lang==='am'?['ቀን','ምርት','ብዛት','ዋጋ','ጠቅላላ','አከፋፈል','ቻናል/ደንበኛ','ቅርንጫፍ','ስረዝ']:['Date','Product','Qty','Price','Total','Payment','Via/Customer','Branch','Del'];
  document.getElementById('salesThead').innerHTML=`<tr>${h.map(x=>`<th>${x}</th>`).join('')}</tr>`;
  document.getElementById('salesTbody').innerHTML = filtered.length
    ? filtered.sort((a,b)=>b.date.localeCompare(a.date)).map(r=>{
        const total=r.qty*r.price;
        const payBadge=`<span class="badge badge-${r.payment}">${T[lang].payTypes[r.payment]||r.payment}</span>`;
        let via='—';
        if (r.payment==='transfer') via=r.transferVia||'—';
        else if (r.payment==='credit') {
          const cust=customers.find(c=>c.id===r.creditCustomer);
          via=cust?cust.name:(r.creditCustomer||'—');
        }
        const br=branches.find(b=>b.id===r.branch);
        return `<tr><td>${r.date}</td><td>${r.product}</td><td>${r.qty}</td>
          <td>${fmtMoney(r.price)}</td><td style="color:var(--gold-lt);font-weight:600">${fmtMoney(total)}</td>
          <td>${payBadge}</td><td>${via}</td><td>${br?br.name:r.branch}</td>
          <td>${requestDeleteBtn('sales',r.id)}</td></tr>`;
      }).join('')
    : noDataRow(h.length);
  // Wholesale section for owner
  renderWholesaleReportForOwner();
  renderBranchLoanForOwner();
}

function updateSaleStock() {
  const product = v('saleProduct');
  const qty = parseInt(v('saleQty')) || 0;
  const branchForSale = currentUser && currentUser.role !== 'owner' ? currentUser.branch : null;
  const stockMap = branchForSale ? getBranchStockMap(branchForSale) : getStoreStockMap();
  const avail = stockMap[product] || 0;
  const el = document.getElementById('saleStockInfo');
  if (el) {
    el.textContent = product ? `${lang==='am'?'ያለ ክምችት':'Available'}: ${avail} ${lang==='am'?'ቁ.':'pcs'} ${qty>avail?'⚠️ '+(lang==='am'?'ብዛቱ አይበቃም':'Exceeds stock'):''}` : '';
    el.style.color = qty > avail ? 'var(--danger)' : 'var(--gold)';
  }
  // Auto-fill price from productPrices
  const priceInput = document.getElementById('salePrice');
  const priceNote = document.getElementById('salePriceNote');
  if (product && priceInput) {
    const setPrice = getProductPrice(product);
    if (setPrice > 0) {
      priceInput.value = setPrice;
      if (priceNote) priceNote.textContent = lang==='am'?`የቀረበ ዋጋ: ${fmtMoney(setPrice)}`:`Set price: ${fmtMoney(setPrice)}`;
      // Only owner can override price
      if (currentUser.role === 'owner') {
        priceInput.readOnly = false;
        priceInput.style.opacity = '1';
        priceInput.style.cursor = 'auto';
        if (priceNote) priceNote.textContent = lang==='am'?'(ዋጋ ሊቀይሩ ይችላሉ)':'(You can override price)';
      } else {
        priceInput.readOnly = true;
        priceInput.style.opacity = '0.75';
        priceInput.style.cursor = 'not-allowed';
      }
    } else {
      priceInput.value = '';
      if (priceNote) priceNote.textContent = lang==='am'?'⚠️ ዋጋ አልተቀመጠም — ባለቤቱ ይቀምጣሉ':'⚠️ No price set — ask owner';
    }
  }
}

function openSaleModal() {
  // Reset payment to cash and hide transfer/credit fields
  const payEl = document.getElementById('salePayment');
  if (payEl) payEl.value = 'cash';
  togglePaymentFields('cash');
  // Pre-populate channel dropdown so it's ready when transfer is selected
  const sel = document.getElementById('saleTransferVia');
  if (sel) {
    const channels = getData('paymentChannels');
    sel.innerHTML = channels.map(c => `<option value="${c.name}" data-account="${c.accountNumber||''}">${c.name}${c.accountNumber?' — '+c.accountNumber:''}</option>`).join('');
  }
  openModal('salesModal');
}

function togglePaymentFields(val) {
  document.getElementById('saleTransferDetails').style.display = val==='transfer' ? '' : 'none';
  document.getElementById('saleTransferCustomerWrap').style.display = val==='transfer' ? '' : 'none';
  document.getElementById('saleCreditDetails').style.display = val==='credit' ? '' : 'none';
  // Populate channel dropdown dynamically
  if (val === 'transfer') {
    const sel = document.getElementById('saleTransferVia');
    if (sel) {
      const channels = getData('paymentChannels');
      sel.innerHTML = channels.map(c => `<option value="${c.name}" data-account="${c.accountNumber||''}">${c.name}${c.accountNumber?' — '+c.accountNumber:''}</option>`).join('');
      // show hint for currently selected
      showChannelAccount(sel.value,'saleChannelAccountHint');
    }
  }
}

// ── POS CASHIER ────────────────────────────────────────────────
let posCart = [];
let posSearchQuery = '';

function renderPOS() {
  // Also refresh salesreport panel if it's currently visible
  const srPanel = document.getElementById('panel-salesreport');
  if (srPanel && !srPanel.classList.contains('hidden')) {
    renderSalesReport();
  }

  // Block sales at production site (b1)
  if (currentUser.branch === 'b1') {
    const pv = document.getElementById('salesPosView');
    if (pv) pv.innerHTML = `<div class="card" style="text-align:center;padding:40px 20px;max-width:400px;margin:0 auto">
      <div style="font-size:40px;margin-bottom:12px">🏭</div>
      <div style="font-size:15px;font-weight:700;color:var(--gold);margin-bottom:8px">የምርት ቦታ</div>
      <div style="font-size:13px;color:var(--white-dim);line-height:1.6">${lang==='am'?'ይህ ቦታ ለሽያጭ አይደለም። ሽያጭ ሸኖ ቅርንጫፍ ወይም መኪና ላይ ብቻ ይካሄዳል።':'This is a production site. Sales are only conducted at Sheno Branch or Mobile.'}</div>
    </div>`;
    return;
  }

  // ── Incoming transfer banner (pending_receiver for this branch) ──
  const incomingBanner = document.getElementById('posIncomingBanner');
  if (incomingBanner) {
    const incomingTransfers = getData('storeTransfers').filter(
      t => t.status === 'pending_receiver' && t.branch === currentUser.branch
    );
    if (incomingTransfers.length) {
      incomingBanner.innerHTML = `
        <div style="margin-bottom:14px;padding:14px 16px;background:rgba(79,195,247,0.1);border:1.5px solid rgba(79,195,247,0.45);border-radius:13px;animation:pulse-border 1.8s infinite">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
            <span style="font-size:20px">📦</span>
            <span style="font-size:14px;font-weight:700;color:#4FC3F7">${lang==='am'?`ዕቃ ከዕቃ ቤት ደረሰ — ተቀበይ (${incomingTransfers.length})`:`Stock arrived from warehouse — Confirm receipt (${incomingTransfers.length})`}</span>
          </div>
          ${incomingTransfers.map(t => {
            const _itemsList = t.items && t.items.length ? t.items : [{type: t.type, qty: t.qty}];
            const itemsStr = _itemsList.map(x=>`<b style="color:var(--white)">${x.type||x.product||'—'}</b> ×${x.qty}`).join(', ');
            const sentBy = t.sentBy || t.by || '—';
            return `<div style="background:rgba(0,0,0,0.25);border-radius:10px;padding:10px 12px;margin-bottom:8px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
              <div>
                <div style="font-size:13px;color:#4FC3F7;margin-bottom:3px">📤 ${itemsStr}</div>
                <div style="font-size:11px;color:var(--white-dim)">👤 ${lang==='am'?'የላከ':'Sent by'}: <b style="color:var(--white)">${sentBy}</b> &nbsp;|&nbsp; 📅 ${t.date||''}</div>
              </div>
              <button onclick="confirmStoreTransferReceipt('${t.id}')"
                style="padding:8px 16px;border-radius:9px;border:1.5px solid #4FC3F7;background:rgba(79,195,247,0.15);color:#4FC3F7;cursor:pointer;font-family:inherit;font-size:12px;font-weight:700;white-space:nowrap">
                ✅ ${lang==='am'?'ተቀብያለሁ':'Confirm Receipt'}
              </button>
            </div>`;
          }).join('')}
        </div>`;
      // pulse animation
      if (!document.getElementById('pulseStyle')) {
        const st = document.createElement('style');
        st.id = 'pulseStyle';
        st.textContent = '@keyframes pulse-border{0%,100%{box-shadow:0 0 0 0 rgba(79,195,247,0.3)}50%{box-shadow:0 0 0 6px rgba(79,195,247,0)}}';
        document.head.appendChild(st);
      }
    } else {
      incomingBanner.innerHTML = '';
    }
  }
  loanRenderIncomingBanner();

  const branch = getData('branches').find(b => b.id === currentUser.branch);
  const el = document.getElementById('posBranchName');
  if (el) el.textContent = branch ? branch.name : '';
  const dateEl = document.getElementById('posDate');
  if (dateEl) dateEl.textContent = new Date().toLocaleDateString('am-ET', {weekday:'long', year:'numeric', month:'long', day:'numeric'});

  const stockMap = getBranchStockMap(currentUser.branch);
  const prices = getData('productPrices');
  renderPOSProducts(stockMap, prices);

  // Populate refund product selectors
  const refProd = document.getElementById('refundProduct');
  const refNewProd = document.getElementById('refundNewProduct');
  const allTypes = [...new Set([...Object.keys(stockMap), ...prices.map(p=>p.type)])];
  const opts = allTypes.map(t=>`<option value="${t}">${t}</option>`).join('') || '<option value="">—</option>';
  if (refProd) { refProd.innerHTML = opts; }
  if (refNewProd) { refNewProd.innerHTML = opts; }
  const refDate = document.getElementById('refundDate');
  if (refDate && !refDate.value) refDate.value = new Date().toISOString().slice(0,10);
  updateRefundDiff();

  const sales = getData('sales').filter(s => !s.isWholesale);
  const today = new Date().toISOString().slice(0,10);
  const weekAgo = new Date(Date.now() - 6*86400000).toISOString().slice(0,10);
  const todayMine = sales.filter(s => s.branch === currentUser.branch && s.date === today);
  const weekMine  = sales.filter(s => s.branch === currentUser.branch && s.date >= weekAgo);
  const todayRev  = todayMine.reduce((a,x) => a + x.qty*x.price, 0);
  const weekRev   = weekMine.reduce((a,x) => a + x.qty*x.price, 0);

  // Clear the separate header KPIs — everything goes into the weekly card
  const kpis = document.getElementById('posKpis');
  if (kpis) kpis.innerHTML = '';

  // Weekly card — ዛሬ + 6 ቀናት (ዛሬ ጀምሮ ወደ ሳምንት)
  const wkEl = document.getElementById('posWeeklyKpis');
  if (wkEl) {
    // Top summary row
    const summaryRow = `
      <div style="display:flex;gap:8px;flex-wrap:wrap;width:100%;margin-bottom:10px">
        <div class="kpi-card" style="flex:1;min-width:100px;padding:10px 12px">
          <div class="kpi-icon" style="font-size:15px">🛍️</div>
          <div class="kpi-val" style="font-size:14px">${todayMine.length}</div>
          <div class="kpi-label" style="font-size:10px">${lang==='am'?'ዛሬ ሽያጭ':'Today Sales'}</div>
        </div>
        <div class="kpi-card" style="flex:1;min-width:100px;padding:10px 12px">
          <div class="kpi-icon" style="font-size:15px">💵</div>
          <div class="kpi-val" style="font-size:14px">${fmtMoney(todayRev)}</div>
          <div class="kpi-label" style="font-size:10px">${lang==='am'?'ዛሬ ገቢ':'Today Revenue'}</div>
        </div>
        <div class="kpi-card" style="flex:1;min-width:100px;padding:10px 12px;border-color:rgba(66,165,245,0.3)">
          <div class="kpi-icon" style="font-size:15px">📆</div>
          <div class="kpi-val" style="font-size:14px;color:var(--blue-lt)">${weekMine.length}</div>
          <div class="kpi-label" style="font-size:10px">${lang==='am'?'ሳምንታዊ ሽያጭ':'Week Sales'}</div>
        </div>
        <div class="kpi-card" style="flex:1;min-width:100px;padding:10px 12px;border-color:rgba(66,165,245,0.3)">
          <div class="kpi-icon" style="font-size:15px">💰</div>
          <div class="kpi-val" style="font-size:14px;color:var(--blue-lt)">${fmtMoney(weekRev)}</div>
          <div class="kpi-label" style="font-size:10px">${lang==='am'?'ሳምንታዊ ገቢ':'Week Revenue'}</div>
        </div>
      </div>`;

    // Per-day mini bars — ዛሬ ጀምሮ 7 ቀናት ወደ ኋላ
    const dayNames = ['እሁድ','ሰኞ','ማክሰኞ','ረቡዕ','ሐሙስ','አርብ','ቅዳሜ'];
    const dayNamesEn = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
    const days = [...Array(7)].map((_,i) => {
      const d = new Date(Date.now() - (6-i)*86400000);
      return d.toISOString().slice(0,10);
    }); // [6 days ago … today]
    const maxRev = Math.max(...days.map(d => sales.filter(s=>s.branch===currentUser.branch&&s.date===d).reduce((a,x)=>a+x.qty*x.price,0)), 1);

    const dayBars = days.map(d => {
      const dSales = sales.filter(s => s.branch === currentUser.branch && s.date === d);
      const rev = dSales.reduce((a,x) => a + x.qty*x.price, 0);
      const pct = Math.round((rev / maxRev) * 100);
      const isToday = d === today;
      const dow = new Date(d).getDay();
      const label = lang==='am' ? dayNames[dow] : dayNamesEn[dow];
      return `<div onclick="document.getElementById('posFilterDate').value='${d}';renderPOSByDate()"
        style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;
        padding:6px 4px;border-radius:8px;transition:background 0.15s;
        background:${isToday?'rgba(201,168,76,0.1)':'transparent'};
        border:1px solid ${isToday?'rgba(201,168,76,0.3)':'transparent'}"
        onmouseover="this.style.background='rgba(255,255,255,0.06)'"
        onmouseout="this.style.background='${isToday?'rgba(201,168,76,0.1)':'transparent'}'">
        <div style="font-size:11px;font-weight:700;color:${isToday?'var(--gold)':'var(--white-dim)'}">${fmtMoney(rev,true)}</div>
        <div style="width:100%;height:40px;display:flex;align-items:flex-end">
          <div style="width:100%;height:${Math.max(pct,4)}%;background:${isToday?'var(--gold)':'rgba(66,165,245,0.5)'};border-radius:3px 3px 0 0;transition:height 0.3s"></div>
        </div>
        <div style="font-size:10px;color:${isToday?'var(--gold)':'rgba(197,203,216,0.45)'}">${label}</div>
        <div style="font-size:9px;color:rgba(197,203,216,0.3)">${d.slice(5)}</div>
      </div>`;
    }).join('');

    wkEl.innerHTML = summaryRow + `<div style="display:flex;gap:4px;width:100%;align-items:flex-end">${dayBars}</div>`;
  }

  // Set today as default date in filter
  const df = document.getElementById('posFilterDate');
  if (df && !df.value) df.value = today;

  renderPOSTodayLog(todayMine);

  const customers = getData('customers').filter(c => !c.branch || c.branch === currentUser.branch);
  const custSel = document.getElementById('posCreditCustomer');
  if (custSel) custSel.innerHTML = customers.map(c=>`<option value="${c.id}">${c.name}</option>`).join('') || '<option value="">—</option>';

  renderPOSCart();
}

function renderPOSProducts(stockMapArg, pricesArg) {
  const grid = document.getElementById('posProductGrid');
  if (!grid) return;
  const stockMap = stockMapArg || getBranchStockMap(currentUser.branch);
  const prices   = pricesArg   || getData('productPrices');
  const q = posSearchQuery.trim().toLowerCase();
  let items = Object.entries(stockMap);
  if (q) items = items.filter(([type]) => type.toLowerCase().includes(q));

  grid.innerHTML = items.length ? items.map(([type, qty]) => {
    const p = prices.find(x => x.type === type);
    const price = p ? p.price : 0;
    const out = qty <= 0;
    return `<div onclick="${out ? '' : `posAddToCart('${type}',${price})`}"
      style="background:${out?'rgba(255,255,255,0.02)':'rgba(255,255,255,0.05)'};
      border:1.5px solid ${out?'rgba(255,255,255,0.08)':'rgba(201,168,76,0.25)'};
      border-radius:14px;padding:18px 12px 14px;text-align:center;
      cursor:${out?'not-allowed':'pointer'};transition:all 0.15s;${out?'opacity:0.4':''}user-select:none"
      onmouseover="if(!${out}){this.style.background='rgba(201,168,76,0.1)';this.style.borderColor='rgba(201,168,76,0.5)';this.style.transform='translateY(-2px)'}"
      onmouseout="if(!${out}){this.style.background='rgba(255,255,255,0.05)';this.style.borderColor='rgba(201,168,76,0.25)';this.style.transform='none'}">
      <div style="font-size:30px;margin-bottom:8px">👕</div>
      <div style="font-size:13px;font-weight:700;color:var(--white);margin-bottom:5px">${type}</div>
      <div style="font-size:15px;font-weight:700;color:var(--gold);margin-bottom:4px">${price ? fmtMoney(price) : '<span style="color:rgba(197,203,216,0.4);font-size:11px">ዋጋ የለም</span>'}</div>
      <div style="font-size:10px;padding:2px 8px;border-radius:20px;display:inline-block;margin-top:2px;
        color:${out?'#FF9090':'rgba(197,203,216,0.55)'};
        background:${out?'rgba(224,90,90,0.1)':'rgba(255,255,255,0.04)'}">
        ${out ? (lang==='am'?'✗ አልቋል':'✗ Out') : `${qty} ${lang==='am'?'ቁ.':'pcs'}`}
      </div>
    </div>`;
  }).join('')
  : `<div style="color:var(--white-dim);grid-column:1/-1;text-align:center;padding:40px;font-size:13px">
      ${q ? `"${posSearchQuery}" — ${lang==='am'?'አልተገኘም':'not found'}` : (lang==='am'?'ምርት የለም':'No products')}
    </div>`;
}

function renderSalesReport() {
  // Reuse renderPOS weekly logic but for the salesreport panel
  // Exclude wholesale sales — they have their own dedicated section
  const sales = getData('sales').filter(s => !s.isWholesale);
  const refunds = getData('refunds');
  const today = new Date().toISOString().slice(0,10);
  const weekAgo = new Date(Date.now() - 6*86400000).toISOString().slice(0,10);
  const myBranch = currentUser.branch;
  const todayMine = sales.filter(s => s.branch === myBranch && s.date === today);
  const weekMine  = sales.filter(s => s.branch === myBranch && s.date >= weekAgo);
  const todayRev  = todayMine.reduce((a,x) => a + x.qty*x.price, 0);
  const weekRev   = weekMine.reduce((a,x) => a + x.qty*x.price, 0);
  // Refund totals
  const todayRefunds = refunds.filter(r => r.branch === myBranch && r.date === today);
  const weekRefunds  = refunds.filter(r => r.branch === myBranch && r.date >= weekAgo);
  const todayRefAmt  = todayRefunds.reduce((a,r) => a + (r.financialDiff || r.origTotal || 0), 0);
  const weekRefAmt   = weekRefunds.reduce((a,r) => a + (r.financialDiff || r.origTotal || 0), 0);
  const todayNet = todayRev - todayRefAmt;
  const weekNet  = weekRev  - weekRefAmt;

  // ── Pending & approved transfers for sales staff ──
  const staffPendingEl = document.getElementById('salesPendingTransfersSection');
  if (staffPendingEl) {
    const allPending = getData('pendingTransfers').filter(p => p.branch === myBranch);
    const pending  = allPending.filter(p => p.status === 'pending');
    const approved = allPending.filter(p => p.status === 'approved');
    const sections = [];
    if (approved.length) {
      sections.push(`
        <div style="margin-bottom:12px;padding:14px 16px;background:rgba(76,175,80,0.09);border:1px solid rgba(76,175,80,0.4);border-radius:12px">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
            <span style="font-size:18px">✅</span>
            <span style="font-size:14px;font-weight:700;color:#80e080">${lang==='am'?`ፀድቋል — ለደንበኛ ስጪ (${approved.length})`:`Approved — Hand to customer (${approved.length})`}</span>
          </div>
          ${approved.map(p => {
            const itemsStr = (p.items||[]).map(x=>`${x.product} ×${x.qty}`).join(', ');
            return `<div style="background:rgba(0,0,0,0.2);border-radius:9px;padding:10px 12px;margin-bottom:6px;display:flex;justify-content:space-between;align-items:center">
              <div>
                <div style="font-size:13px;font-weight:600;color:#80e080">📦 ${itemsStr}</div>
                <div style="font-size:11px;color:var(--white-dim);margin-top:2px">
                  👤 <b style="color:var(--white)">${p.customerName||'—'}</b> &nbsp;|&nbsp; 📲 ${p.transferVia||'—'} &nbsp;|&nbsp; ${p.date}
                </div>
              </div>
              <div style="display:flex;flex-direction:column;align-items:flex-end;gap:5px">
                <span style="font-size:13px;font-weight:700;color:#80e080">${fmtMoney(p.total)}</span>
                <button onclick="staffDismissApproved('${p.id}')"
                  style="padding:4px 10px;border-radius:7px;border:1px solid rgba(76,175,80,0.4);background:rgba(76,175,80,0.12);color:#80e080;cursor:pointer;font-family:inherit;font-size:11px;font-weight:600">
                  📦 ${lang==='am'?'ተቀብያለሁ ✓':'Received ✓'}
                </button>
              </div>
            </div>`;
          }).join('')}
        </div>`);
    }
    if (pending.length) {
      sections.push(`
        <div style="margin-bottom:12px;padding:14px 16px;background:rgba(255,165,0,0.07);border:1px solid rgba(255,165,0,0.3);border-radius:12px">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
            <span style="font-size:18px">⏳</span>
            <span style="font-size:14px;font-weight:700;color:#FFA726">${lang==='am'?`ኦነሩ እስቲያፀድቀው (${pending.length})`:`Awaiting owner (${pending.length})`}</span>
          </div>
          ${pending.map(p => {
            const itemsStr = (p.items||[]).map(x=>`${x.product} ×${x.qty}`).join(', ');
            return `<div style="background:rgba(0,0,0,0.2);border-radius:9px;padding:10px 12px;margin-bottom:6px;display:flex;justify-content:space-between;align-items:center">
              <div>
                <div style="font-size:13px;font-weight:600;color:var(--white)">📦 ${itemsStr}</div>
                <div style="font-size:11px;color:var(--white-dim);margin-top:2px">
                  👤 <b style="color:#FFA726">${p.customerName||'—'}</b> &nbsp;|&nbsp; 📲 ${p.transferVia||'—'} &nbsp;|&nbsp; ${p.date}
                </div>
              </div>
              <span style="font-size:13px;font-weight:700;color:#FFA726">${fmtMoney(p.total)}</span>
            </div>`;
          }).join('')}
        </div>`);
    }
    staffPendingEl.innerHTML = sections.join('');
  }
  // ── Wholesale totals for this branch ──
  const wsAll      = getData('wholesale').filter(w => w.branch === myBranch && w.status === 'approved');
  const wsToday    = wsAll.filter(w => w.date === today);
  const wsWeek     = wsAll.filter(w => w.date >= weekAgo);
  const wsTodayRev = wsToday.reduce((a,w) => a + w.total, 0);
  const wsWeekRev  = wsWeek.reduce((a,w) => a + w.total, 0);
  // Combined totals (retail + wholesale)
  const combinedTodayRev = todayRev + wsTodayRev;
  const combinedWeekRev  = weekRev  + wsWeekRev;
  const combinedTodayNet = todayNet + wsTodayRev;
  const combinedWeekNet  = weekNet  + wsWeekRev;

  const wkEl = document.getElementById('posWeeklyKpis');
  if (wkEl) {
    const dayNames = ['እሁድ','ሰኞ','ማክሰኞ','ረቡዕ','ሐሙስ','አርብ','ቅዳሜ'];
    const days = [...Array(7)].map((_,i) => new Date(Date.now()-(6-i)*86400000).toISOString().slice(0,10));
    const maxRev = Math.max(...days.map(d => {
      const norm = sales.filter(s=>s.branch===myBranch&&s.date===d).reduce((a,x)=>a+x.qty*x.price,0);
      const ws   = getData('wholesale').filter(w=>w.branch===myBranch&&w.date===d&&w.status==='approved').reduce((a,w)=>a+w.total,0);
      return norm + ws;
    }), 1);

    // Payment breakdown for today
    const todayCash     = todayMine.filter(s=>s.payment==='cash').reduce((a,x)=>a+x.qty*x.price,0);
    const todayTransfer = todayMine.filter(s=>s.payment==='transfer').reduce((a,x)=>a+x.qty*x.price,0);
    const todayCredit   = todayMine.filter(s=>s.payment==='credit').reduce((a,x)=>a+x.qty*x.price,0);
    // Payment breakdown for week
    const weekCash      = weekMine.filter(s=>s.payment==='cash').reduce((a,x)=>a+x.qty*x.price,0);
    const weekTransfer  = weekMine.filter(s=>s.payment==='transfer').reduce((a,x)=>a+x.qty*x.price,0);
    const weekCredit    = weekMine.filter(s=>s.payment==='credit').reduce((a,x)=>a+x.qty*x.price,0);

    const summaryRow = `
    <!-- COMBINED TOTAL banner -->
    <div style="padding:12px 16px;background:linear-gradient(135deg,rgba(201,168,76,0.12),rgba(79,195,247,0.08));border:1.5px solid rgba(201,168,76,0.35);border-radius:12px;margin-bottom:10px">
      <div style="font-size:10px;font-weight:700;color:rgba(197,203,216,0.5);letter-spacing:1px;margin-bottom:8px">${lang==='am'?'አጠቃላይ ሽያጭ (ኖርማል + ጅምላ)':'TOTAL REVENUE (RETAIL + WHOLESALE)'}</div>
      <div style="display:flex;gap:10px;flex-wrap:wrap">
        <div style="flex:1;min-width:110px">
          <div style="font-size:10px;color:rgba(197,203,216,0.45);margin-bottom:2px">${lang==='am'?'ዛሬ አጠቃላይ':'Today Total'}</div>
          <div style="font-size:20px;font-weight:700;color:var(--gold)">${fmtMoney(combinedTodayNet)}</div>
          <div style="font-size:10px;color:rgba(197,203,216,0.4);margin-top:2px">
            🛍️ ${fmtMoney(todayNet)} &nbsp;+&nbsp; 🏪 ${fmtMoney(wsTodayRev)}
          </div>
        </div>
        <div style="width:1px;background:rgba(255,255,255,0.08)"></div>
        <div style="flex:1;min-width:110px">
          <div style="font-size:10px;color:rgba(197,203,216,0.45);margin-bottom:2px">${lang==='am'?'ሳምንት አጠቃላይ':'Week Total'}</div>
          <div style="font-size:20px;font-weight:700;color:#4FC3F7">${fmtMoney(combinedWeekNet)}</div>
          <div style="font-size:10px;color:rgba(197,203,216,0.4);margin-top:2px">
            🛍️ ${fmtMoney(weekNet)} &nbsp;+&nbsp; 🏪 ${fmtMoney(wsWeekRev)}
          </div>
        </div>
      </div>
    </div>
    <!-- individual KPIs -->
    <div style="display:flex;gap:8px;flex-wrap:wrap;width:100%;margin-bottom:10px">
      <div class="kpi-card" style="flex:1;min-width:80px;padding:8px 10px"><div class="kpi-icon" style="font-size:13px">🛍️</div><div class="kpi-val" style="font-size:12px">${fmtMoney(todayRev)}</div><div class="kpi-label" style="font-size:10px">${lang==='am'?'ዛሬ ኖርማል':'Today Retail'}</div></div>
      <div class="kpi-card" style="flex:1;min-width:80px;padding:8px 10px;border-color:rgba(79,195,247,0.3)"><div class="kpi-icon" style="font-size:13px">🏪</div><div class="kpi-val" style="font-size:12px;color:#4FC3F7">${fmtMoney(wsTodayRev)}</div><div class="kpi-label" style="font-size:10px">${lang==='am'?'ዛሬ ጅምላ':'Today WS'}</div></div>
      ${todayRefunds.length>0?`<div class="kpi-card" style="flex:1;min-width:80px;padding:8px 10px;border-color:rgba(224,90,90,0.35)"><div class="kpi-icon" style="font-size:13px">🔄</div><div class="kpi-val" style="font-size:12px;color:#FF9090">-${fmtMoney(todayRefAmt)}</div><div class="kpi-label" style="font-size:10px">${lang==='am'?'ሪፈንድ':'Refund'}</div></div>`:''}
      <div class="kpi-card" style="flex:1;min-width:80px;padding:8px 10px;border-color:rgba(66,165,245,0.3)"><div class="kpi-icon" style="font-size:13px">📆</div><div class="kpi-val" style="font-size:12px;color:var(--blue-lt)">${fmtMoney(weekRev)}</div><div class="kpi-label" style="font-size:10px">${lang==='am'?'ሳምንት ኖርማል':'Week Retail'}</div></div>
      <div class="kpi-card" style="flex:1;min-width:80px;padding:8px 10px;border-color:rgba(79,195,247,0.2)"><div class="kpi-icon" style="font-size:13px">🏪</div><div class="kpi-val" style="font-size:12px;color:#4FC3F7">${fmtMoney(wsWeekRev)}</div><div class="kpi-label" style="font-size:10px">${lang==='am'?'ሳምንት ጅምላ':'Week WS'}</div></div>
      ${weekRefunds.length>0?`<div class="kpi-card" style="flex:1;min-width:80px;padding:8px 10px;border-color:rgba(224,90,90,0.35)"><div class="kpi-icon" style="font-size:13px">🔄</div><div class="kpi-val" style="font-size:12px;color:#FF9090">-${fmtMoney(weekRefAmt)}</div><div class="kpi-label" style="font-size:10px">${lang==='am'?'ሳምን ሪፈንድ':'Wk Ref'}</div></div>`:''}
    </div>
    <div style="margin-bottom:12px;padding:12px 14px;background:rgba(255,255,255,0.03);border-radius:10px;border:1px solid rgba(255,255,255,0.07)">
      <div style="font-size:11px;font-weight:700;color:rgba(197,203,216,0.5);letter-spacing:1px;margin-bottom:8px">${lang==='am'?'ዛሬ — በአከፋፈል ዓይነት':'TODAY BY PAYMENT TYPE'}</div>
      <div style="display:flex;gap:8px;flex-wrap:wrap">
        <div style="flex:1;min-width:80px;padding:8px 10px;background:rgba(76,175,80,0.08);border:1px solid rgba(76,175,80,0.25);border-radius:8px;text-align:center">
          <div style="font-size:11px;color:#80D080;margin-bottom:3px">💵 ${lang==='am'?'ጥሬ':'Cash'}</div>
          <div style="font-size:13px;font-weight:700;color:#80D080">${fmtMoney(todayCash)}</div>
          <div style="font-size:10px;color:rgba(197,203,216,0.4)">${todayMine.filter(s=>s.payment==='cash').length} ${lang==='am'?'ሽያጭ':'sales'}</div>
        </div>
        <div style="flex:1;min-width:80px;padding:8px 10px;background:rgba(66,165,245,0.08);border:1px solid rgba(66,165,245,0.25);border-radius:8px;text-align:center">
          <div style="font-size:11px;color:#90CAF9;margin-bottom:3px">📲 ${lang==='am'?'ዝውውር':'Transfer'}</div>
          <div style="font-size:13px;font-weight:700;color:#90CAF9">${fmtMoney(todayTransfer)}</div>
          <div style="font-size:10px;color:rgba(197,203,216,0.4)">${todayMine.filter(s=>s.payment==='transfer').length} ${lang==='am'?'ሽያጭ':'sales'}</div>
        </div>
        <div style="flex:1;min-width:80px;padding:8px 10px;background:rgba(255,167,38,0.08);border:1px solid rgba(255,167,38,0.25);border-radius:8px;text-align:center">
          <div style="font-size:11px;color:#FFCC80;margin-bottom:3px">🤝 ${lang==='am'?'ብድር':'Credit'}</div>
          <div style="font-size:13px;font-weight:700;color:#FFCC80">${fmtMoney(todayCredit)}</div>
          <div style="font-size:10px;color:rgba(197,203,216,0.4)">${todayMine.filter(s=>s.payment==='credit').length} ${lang==='am'?'ሽያጭ':'sales'}</div>
        </div>
      </div>
      <div style="margin-top:8px;border-top:1px solid rgba(255,255,255,0.06);padding-top:8px">
        <div style="font-size:11px;font-weight:700;color:rgba(197,203,216,0.5);letter-spacing:1px;margin-bottom:6px">${lang==='am'?'ሳምንታዊ — በአከፋፈል ዓይነት':'WEEK BY PAYMENT TYPE'}</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <div style="flex:1;min-width:80px;padding:6px 10px;background:rgba(76,175,80,0.05);border:1px solid rgba(76,175,80,0.15);border-radius:8px;text-align:center">
            <div style="font-size:10px;color:#80D080;margin-bottom:2px">💵 ${lang==='am'?'ጥሬ':'Cash'}</div>
            <div style="font-size:12px;font-weight:700;color:#80D080">${fmtMoney(weekCash)}</div>
          </div>
          <div style="flex:1;min-width:80px;padding:6px 10px;background:rgba(66,165,245,0.05);border:1px solid rgba(66,165,245,0.15);border-radius:8px;text-align:center">
            <div style="font-size:10px;color:#90CAF9;margin-bottom:2px">📲 ${lang==='am'?'ዝውውር':'Transfer'}</div>
            <div style="font-size:12px;font-weight:700;color:#90CAF9">${fmtMoney(weekTransfer)}</div>
          </div>
          <div style="flex:1;min-width:80px;padding:6px 10px;background:rgba(255,167,38,0.05);border:1px solid rgba(255,167,38,0.15);border-radius:8px;text-align:center">
            <div style="font-size:10px;color:#FFCC80;margin-bottom:2px">🤝 ${lang==='am'?'ብድር':'Credit'}</div>
            <div style="font-size:12px;font-weight:700;color:#FFCC80">${fmtMoney(weekCredit)}</div>
          </div>
        </div>
      </div>
    </div>`;
    const dayBars = days.map(d => {
      const dRev = sales.filter(s=>s.branch===myBranch&&s.date===d).reduce((a,x)=>a+x.qty*x.price,0);
      const pct = Math.round((dRev/maxRev)*100);
      const isToday = d === today;
      const label = dayNames[new Date(d).getDay()];
      const dWsRev = getData('wholesale').filter(w=>w.branch===myBranch&&w.date===d&&w.status==='approved').reduce((a,w)=>a+w.total,0);
      const dTotal = dRev + dWsRev;
      return `<div onclick="document.getElementById('posFilterDate').value='${d}';renderPOSByDate()"
        style="flex:1;display:flex;flex-direction:column;align-items:center;gap:3px;cursor:pointer;
        padding:6px 4px;border-radius:8px;background:${isToday?'rgba(201,168,76,0.1)':'transparent'};
        border:1px solid ${isToday?'rgba(201,168,76,0.3)':'transparent'}"
        onmouseover="this.style.background='rgba(255,255,255,0.06)'"
        onmouseout="this.style.background='${isToday?'rgba(201,168,76,0.1)':'transparent'}'">
        <div style="font-size:10px;font-weight:700;color:${isToday?'var(--gold)':'var(--white-dim)'}">${fmtMoney(dTotal,true)}</div>
        <div style="width:100%;height:36px;display:flex;align-items:flex-end">
          <div style="width:100%;height:${Math.max(pct,4)}%;background:${isToday?'var(--gold)':'rgba(66,165,245,0.5)'};border-radius:3px 3px 0 0"></div>
        </div>
        <div style="font-size:10px;color:${isToday?'var(--gold)':'rgba(197,203,216,0.4)'}">${label}</div>
      </div>`;
    }).join('');
    wkEl.innerHTML = summaryRow + `<div style="display:flex;gap:4px;width:100%">${dayBars}</div>`;
  }

  // Show selected or today's sales log
  const df = document.getElementById('posFilterDate');
  if (!df || !df.value) {
    if (df) df.value = today;
    renderPOSTodayLog(todayMine, today, todayRefunds);
  } else {
    renderPOSByDate();
  }
  renderWholesaleReportForStaff();
}

// ── Called at end of renderSalesReport to add wholesale section ──
function _appendWholesaleToSalesReport() {
  if (currentUser.role === 'sales') renderWholesaleReportForStaff();
}

function renderPOSByDate() {
  const df = document.getElementById('posFilterDate');
  const date = df ? df.value : new Date().toISOString().slice(0,10);
  const sales = getData('sales').filter(s => s.branch === currentUser.branch && s.date === date);
  const refunds = getData('refunds').filter(r => r.branch === currentUser.branch && r.date === date);
  renderPOSTodayLog(sales, date, refunds);
}

function renderPOSTodayLog(salesList, labelDate, refundList) {
  const log = document.getElementById('posTodaySales');
  if (!log) return;
  const list = salesList || [];
  const refs = refundList || getData('refunds').filter(r => r.branch === currentUser.branch && r.date === (labelDate || new Date().toISOString().slice(0,10)));
  const grossTotal = list.reduce((a,x) => a + x.qty*x.price, 0);
  const refTotal   = refs.reduce((a,r) => a + (r.financialDiff || r.origTotal || 0), 0);
  const netTotal   = grossTotal - refTotal;
  const label = labelDate || new Date().toISOString().slice(0,10);
  const isToday = label === new Date().toISOString().slice(0,10);
  const headerLabel = isToday ? (lang==='am'?'ዛሬ ሽያጮች':'Today\'s Sales') : label;

  const salesRows = [...list].reverse().map(s => {
    const payIcon = {cash:'💵',transfer:'📲',credit:'🤝'}[s.payment]||'💵';
    const leftColor = {cash:'#4CAF50',transfer:'#42A5F5',credit:'#FFA726'}[s.payment]||'var(--gold)';
    const isRefunded = s.fullyRefunded ? ' style="opacity:0.45;text-decoration:line-through"' : (s.refundedQty ? ' style="opacity:0.7"' : '');
    return `<div${isRefunded} style="display:flex;align-items:center;justify-content:space-between;padding:8px 10px;
      background:rgba(255,255,255,0.03);border-radius:8px;margin-bottom:4px;
      border-left:3px solid ${leftColor}">
      <div>
        <span style="font-size:13px;font-weight:600;color:var(--white)">${s.product}</span>
        <span style="font-size:11px;color:var(--white-dim);margin-left:6px">× ${s.qty}</span>
        ${s.fullyRefunded?`<span style="font-size:10px;color:#FF9090;margin-left:4px">(${lang==='am'?'ሪፈንድ':'refunded'})</span>`:''}
        ${s.refundedQty&&!s.fullyRefunded?`<span style="font-size:10px;color:#FFA726;margin-left:4px">(${lang==='am'?'ከፊል':'partial'})</span>`:''}
      </div>
      <div style="display:flex;align-items:center;gap:6px">
        <span style="font-size:12px;font-weight:700;color:var(--gold)">${fmtMoney(s.qty*s.price)}</span>
        <span>${payIcon}</span>
      </div>
    </div>`;
  });

  const refundRows = refs.length ? [
    `<div style="margin-top:8px;margin-bottom:4px;padding:4px 2px;border-top:1px solid rgba(255,90,90,0.2)">
      <span style="font-size:11px;color:#FF9090;font-weight:600">🔄 ${lang==='am'?'ሪፈንዶች':'Refunds'} (${refs.length})</span>
    </div>`,
    ...[...refs].reverse().map(r => {
      const exchInfo = r.type==='exchange' ? ` → ${r.newProduct} ×${r.newQty}` : '';
      const diffLabel = r.type==='exchange'
        ? (r.financialDiff>0 ? `+${fmtMoney(r.financialDiff)} ${lang==='am'?'ተመላሽ':'back'}` : r.financialDiff<0 ? `+${fmtMoney(Math.abs(r.financialDiff))} ${lang==='am'?'ተጨምሮ':'added'}` : lang==='am'?'እኩል':'even')
        : `-${fmtMoney(r.origTotal||0)}`;
      return `<div style="display:flex;align-items:center;justify-content:space-between;padding:7px 10px;
        background:rgba(224,90,90,0.07);border-radius:8px;margin-bottom:4px;
        border-left:3px solid rgba(224,90,90,0.5)">
        <div>
          <span style="font-size:13px;font-weight:600;color:#FF9090">${r.product} ×${r.qty}${exchInfo}</span>
          ${r.reason?`<span style="font-size:10px;color:var(--white-dim);margin-left:6px">${r.reason}</span>`:''}
        </div>
        <span style="font-size:12px;font-weight:700;color:#FF9090">${diffLabel}</span>
      </div>`;
    })
  ] : [];

  const hasContent = list.length || refs.length;
  log.innerHTML = hasContent ? [
    `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;padding:4px 2px">
      <span style="font-size:11px;color:rgba(197,203,216,0.5)">${headerLabel} — ${list.length} ${lang==='am'?'ሽያጭ':'sales'}</span>
      <div style="display:flex;flex-direction:column;align-items:flex-end;gap:1px">
        ${refs.length?`<span style="font-size:10px;color:#FF9090">-${fmtMoney(refTotal)} ${lang==='am'?'ሪፈንድ':'refund'}</span>`:''}
        <span style="font-size:12px;font-weight:700;color:${refs.length?'#80e080':'var(--gold)'}">
          ${refs.length?(lang==='am'?'ተጣራ: ':'Net: '):''}${fmtMoney(netTotal)}
        </span>
      </div>
    </div>`,
    ...salesRows,
    ...refundRows
  ].join('')
  : `<div style="text-align:center;color:rgba(197,203,216,0.3);font-size:12px;padding:14px">${lang==='am'?'ሽያጭ የለም':'No sales'}</div>`;
}

function posAddToCart(type, price) {
  const existing = posCart.find(x => x.type === type);
  const stockMap = getBranchStockMap(currentUser.branch);
  const avail = stockMap[type] || 0;
  const inCart = existing ? existing.qty : 0;
  if (inCart >= avail) { toast(lang==='am'?'ክምችት አልቋል':'Out of stock','error'); return; }
  if (existing) existing.qty++;
  else posCart.push({ type, qty:1, price });
  renderPOSCart();
  showItemToast(type, price);
}

function showItemToast(type, price) {
  const el = document.getElementById('itemAddedToast');
  if (!el) return;
  document.getElementById('itemToastName').textContent = type;
  document.getElementById('itemToastPrice').textContent = fmtMoney(price);
  el.classList.remove('toast-visible');
  void el.offsetWidth;
  el.classList.add('toast-visible');
  clearTimeout(el._hideTimer);
  el._hideTimer = setTimeout(() => el.classList.remove('toast-visible'), 1800);
}

function posChangeQty(type, delta) {
  const item = posCart.find(x => x.type === type);
  if (!item) return;
  const stockMap = getBranchStockMap(currentUser.branch);
  item.qty = Math.max(0, Math.min(item.qty + delta, stockMap[type] || 0));
  if (item.qty === 0) posCart = posCart.filter(x => x.type !== type);
  renderPOSCart();
}

function posClearCart() { posCart = []; renderPOSCart(); }

function openCartModal() {
  const modal = document.getElementById('cartModal');
  const panel = document.getElementById('cartPanel');
  if (!modal) return;
  modal.style.display = 'block';
  requestAnimationFrame(() => { panel.style.transform = 'translateX(0)'; });
  buildPosPaymentButtons();
  renderPOSCart();
}

function closeCartModal() {
  const panel = document.getElementById('cartPanel');
  if (panel) panel.style.transform = 'translateX(100%)';
  setTimeout(() => {
    const modal = document.getElementById('cartModal');
    if (modal) modal.style.display = 'none';
  }, 280);
}

function renderPOSCart() {
  const cartEl = document.getElementById('posCart');
  const totalQty   = posCart.reduce((a,x) => a + x.qty, 0);
  const totalPrice = posCart.reduce((a,x) => a + x.qty * x.price, 0);

  const qtyEl = document.getElementById('posCartQty');
  const totEl = document.getElementById('posCartTotal');
  if (qtyEl) qtyEl.textContent = totalQty;
  if (totEl) totEl.textContent = fmtMoney(totalPrice);

  // Bottom cart bar
  const bottomBar = document.getElementById('bottomCartBar');
  const barQty = document.getElementById('barCartQty');
  const barTotal = document.getElementById('barCartTotal');
  if (bottomBar) {
    if (posCart.length > 0) {
      bottomBar.style.display = 'flex';
      if (barQty) barQty.textContent = totalQty;
      if (barTotal) barTotal.textContent = fmtMoney(totalPrice);
    } else {
      bottomBar.style.display = 'none';
    }
  }

  // Badge on FAB button (if exists)
  const badge = document.getElementById('posCartBadge');
  const modalBadge = document.getElementById('cartModalBadge');
  if (badge) { badge.textContent = totalQty; badge.style.display = totalQty ? 'flex' : 'none'; }
  if (modalBadge) modalBadge.textContent = `${totalQty} ዕቃ`;

  const btn = document.getElementById('posCheckoutBtn');
  if (btn) btn.disabled = posCart.length === 0;

  if (!cartEl) return;
  cartEl.innerHTML = posCart.length
    ? posCart.map(item => `
      <div style="display:flex;align-items:center;gap:10px;padding:10px 12px;
        background:rgba(255,255,255,0.04);border-radius:10px;margin-bottom:8px;
        border:1px solid rgba(201,168,76,0.12)">
        <div style="flex:1;min-width:0">
          <div style="font-size:14px;font-weight:700;color:var(--white)">${item.type}</div>
          <div style="font-size:11px;color:var(--gold-lt);margin-top:2px">${fmtMoney(item.price)} / ቁ.</div>
        </div>
        <div style="display:flex;align-items:center;gap:6px;flex-shrink:0">
          <button onclick="posChangeQty('${item.type}',-1)"
            style="width:28px;height:28px;border-radius:7px;border:1px solid rgba(255,255,255,0.15);
            background:rgba(255,255,255,0.05);color:var(--white);cursor:pointer;font-size:16px;
            display:flex;align-items:center;justify-content:center">−</button>
          <span style="font-size:15px;font-weight:700;color:var(--white);min-width:22px;text-align:center">${item.qty}</span>
          <button onclick="posChangeQty('${item.type}',1)"
            style="width:28px;height:28px;border-radius:7px;border:1px solid rgba(255,255,255,0.15);
            background:rgba(255,255,255,0.05);color:var(--white);cursor:pointer;font-size:16px;
            display:flex;align-items:center;justify-content:center">+</button>
        </div>
        <div style="font-size:13px;font-weight:700;color:var(--gold);min-width:72px;text-align:right">${fmtMoney(item.qty*item.price)}</div>
      </div>`)
      .join('')
    : `<div style="display:flex;flex-direction:column;align-items:center;justify-content:center;height:120px;color:rgba(197,203,216,0.3)">
        <div style="font-size:36px;margin-bottom:8px">🛒</div>
        <div style="font-size:13px">${lang==='am'?'ቅርጫት ባዶ ነው':'Cart is empty'}</div>
      </div>`;
}

function switchPosTab(tab) {
  const tabs = { sale: 'posSaleTab', refund: 'posRefundTab', wholesale: 'posWholesaleTab', loan: 'posLoanTab' };
  Object.entries(tabs).forEach(([key, id]) => {
    const el = document.getElementById(id);
    if (el) el.style.display = key === tab ? 'block' : 'none';
  });
  const sBtn = document.getElementById('posTabSale');
  const rBtn = document.getElementById('posTabRefund');
  const wBtn = document.getElementById('posTabWholesale');
  const lBtn = document.getElementById('posTabLoan');
  if (sBtn) { sBtn.style.background = tab==='sale' ? 'linear-gradient(135deg,var(--gold),#A87820)' : 'transparent'; sBtn.style.color = tab==='sale' ? 'var(--navy)' : 'var(--white-dim)'; sBtn.style.fontWeight = tab==='sale' ? '700' : '600'; }
  if (rBtn) { rBtn.style.background = tab==='refund' ? 'linear-gradient(135deg,#E05A5A,#B03030)' : 'transparent'; rBtn.style.color = tab==='refund' ? 'var(--white)' : 'var(--white-dim)'; rBtn.style.fontWeight = tab==='refund' ? '700' : '600'; }
  if (wBtn) { wBtn.style.background = tab==='wholesale' ? 'linear-gradient(135deg,#FFA726,#E65100)' : 'transparent'; wBtn.style.color = tab==='wholesale' ? 'var(--white)' : 'var(--white-dim)'; wBtn.style.fontWeight = tab==='wholesale' ? '700' : '600'; }
  if (lBtn) { lBtn.style.background = tab==='loan' ? 'linear-gradient(135deg,#9C6ADE,#6A3FA0)' : 'transparent'; lBtn.style.color = tab==='loan' ? 'var(--white)' : 'var(--white-dim)'; lBtn.style.fontWeight = tab==='loan' ? '700' : '600'; }
  if (tab === 'refund') renderRefundHistory();
  if (tab === 'wholesale') posWholesaleInit();
  if (tab === 'loan') loanInit();
}

// ── REFUND ────────────────────────────────────────────────────
function setRefundType(type) {
  document.getElementById('refundType').value = type;
  const isMoney = type === 'money';
  const mBtn = document.getElementById('rTypeMoney');
  const xBtn = document.getElementById('rTypeExchange');
  if (mBtn) { mBtn.style.border = isMoney ? '1.5px solid rgba(76,175,80,0.6)' : '1.5px solid rgba(255,255,255,0.1)'; mBtn.style.background = isMoney ? 'rgba(76,175,80,0.18)' : 'transparent'; mBtn.style.color = isMoney ? '#80D080' : 'var(--white-dim)'; mBtn.style.fontWeight = isMoney ? '700' : '600'; }
  if (xBtn) { xBtn.style.border = !isMoney ? '1.5px solid rgba(66,165,245,0.5)' : '1.5px solid rgba(255,255,255,0.1)'; xBtn.style.background = !isMoney ? 'rgba(66,165,245,0.15)' : 'transparent'; xBtn.style.color = !isMoney ? '#90CAF9' : 'var(--white-dim)'; xBtn.style.fontWeight = !isMoney ? '700' : '600'; }
  const exchFields = document.getElementById('refundExchangeFields');
  if (exchFields) exchFields.style.display = isMoney ? 'none' : 'block';
  const newPriceRow = document.getElementById('rfNewPriceRow');
  if (newPriceRow) newPriceRow.style.display = isMoney ? 'none' : 'flex';
  updateRefundDiff();
}

function updateRefundPrice() {
  updateRefundDiff();
}

function updateRefundDiff() {
  const saleDate = document.getElementById('refundSaleDate')?.value;
  const product = document.getElementById('refundProduct')?.value;
  const qty = parseInt(document.getElementById('refundQty')?.value) || 0;
  const type = document.getElementById('refundType')?.value || 'money';
  const prices = getData('productPrices');
  const sales = getData('sales');

  let origUnitPrice = 0;
  if (saleDate && product) {
    const matchedSale = sales.slice().reverse().find(s => s.product === product && s.date === saleDate && (s.branch === currentUser.branch || currentUser.role === 'owner'));
    if (matchedSale) origUnitPrice = matchedSale.price;
  }
  if (!origUnitPrice && product) {
    const origP = prices.find(p => p.type === product);
    origUnitPrice = origP ? origP.price : 0;
  }

  const origPrice = origUnitPrice * qty;

  const origEl = document.getElementById('rfOrigPrice');
  if (origEl) origEl.textContent = origPrice ? fmtMoney(origPrice) : '—';

  if (type === 'exchange') {
    const newProd = document.getElementById('refundNewProduct')?.value;
    const newQty = parseInt(document.getElementById('refundNewQty')?.value) || 0;
    const newP = prices.find(p => p.type === newProd);
    const newPrice = newP ? newP.price * newQty : 0;
    const newEl = document.getElementById('rfNewPrice');
    if (newEl) newEl.textContent = newPrice ? fmtMoney(newPrice) : '—';
    const diff = origPrice - newPrice;
    const diffEl = document.getElementById('rfDiffAmount');
    const labelEl = document.getElementById('rfDiffLabel');
    if (diffEl) diffEl.textContent = origPrice || newPrice ? fmtMoney(Math.abs(diff)) : '—';
    if (diffEl) diffEl.style.color = diff > 0 ? '#80D080' : diff < 0 ? '#FF9090' : 'var(--gold)';
    if (labelEl) labelEl.textContent = diff > 0 ? '💵 ደንበኛ ይቀበላሉ' : diff < 0 ? '💵 ደንበኛ ይጨምራሉ' : '↔ እኩል';
  } else {
    const diffEl = document.getElementById('rfDiffAmount');
    const labelEl = document.getElementById('rfDiffLabel');
    if (diffEl) { diffEl.textContent = origPrice ? fmtMoney(origPrice) : '—'; diffEl.style.color = '#80D080'; }
    if (labelEl) labelEl.textContent = '💵 ሂሳብ ተመላሽ';
    const newPriceRow = document.getElementById('rfNewPriceRow');
    if (newPriceRow) newPriceRow.style.display = 'none';
  }
}

function saveRefund() {
  const saleDate = document.getElementById('refundSaleDate').value;
  const refundDate = document.getElementById('refundDate').value || new Date().toISOString().slice(0,10);
  const product  = document.getElementById('refundProduct').value;
  const qty      = parseInt(document.getElementById('refundQty').value);
  const reason   = document.getElementById('refundReason').value.trim();
  const customer = document.getElementById('refundCustomer').value.trim();
  const type     = document.getElementById('refundType').value;

  if (!saleDate) { toast(lang==='am'?'የተሸጠበት ቀን ያስፈልጋል':'Sale date required','error'); return; }
  if (!product || !qty || qty < 1) { toast(lang==='am'?'ምርትና ብዛት ያስፈልጋሉ':'Product and qty required','error'); return; }

  const branch = currentUser.branch;
  const sales = getData('sales');
  const prices = getData('productPrices');

  let origUnitPrice = 0;
  if (saleDate && product) {
    const matchedSale = sales.slice().reverse().find(s => s.product === product && s.date === saleDate && (s.branch === branch || currentUser.role === 'owner'));
    if (matchedSale) origUnitPrice = matchedSale.price;
  }
  if (!origUnitPrice) {
    const origP = prices.find(p => p.type === product);
    origUnitPrice = origP ? origP.price : 0;
  }
  const origTotal = origUnitPrice * qty;

  let newProduct = null, newQty = 0, newTotal = 0, financialDiff = 0;

  if (type === 'exchange') {
    newProduct = document.getElementById('refundNewProduct').value;
    newQty     = parseInt(document.getElementById('refundNewQty').value) || 0;
    if (!newProduct || !newQty) { toast(lang==='am'?'አዲስ ምርት ያስፈልጋሉ':'New product required','error'); return; }
    const newP = prices.find(p => p.type === newProduct);
    newTotal = (newP ? newP.price : 0) * newQty;
    financialDiff = origTotal - newTotal; // positive = give back money, negative = collect more
  } else {
    financialDiff = origTotal; // full refund
  }

  // 1. Return old product to branch stock
  const bs = getData('branchStock');
  let placed = false;
  for (let i = 0; i < bs.length; i++) {
    if (bs[i].branch === branch && bs[i].type === product) { bs[i].qty += qty; placed = true; break; }
  }
  if (!placed) bs.push({ branch, type:product, qty });

  // 2. If exchange, deduct new product from stock
  if (type === 'exchange' && newProduct && newQty > 0) {
    let deducted = false;
    for (let i = 0; i < bs.length; i++) {
      if (bs[i].branch === branch && bs[i].type === newProduct) { bs[i].qty -= newQty; deducted = true; break; }
    }
    if (!deducted) toast(lang==='am'?`⚠️ ${newProduct} ክምችት የለም`:`⚠️ No stock for ${newProduct}`, 'warn');
  }
  saveData('branchStock', bs);

  // 3. Adjust the original sale record's financials on the saleDate
  let adjQty = qty;
  for (let i = sales.length - 1; i >= 0 && adjQty > 0; i--) {
    if (sales[i].branch === branch && sales[i].product === product && sales[i].date === saleDate && !sales[i].fullyRefunded) {
      const remainingQty = sales[i].qty - (sales[i].refundedQty || 0);
      if (remainingQty > 0) {
        const canAdj = Math.min(remainingQty, adjQty);
        sales[i].refundedQty = (sales[i].refundedQty || 0) + canAdj;
        if (sales[i].refundedQty >= sales[i].qty) sales[i].fullyRefunded = true;
        adjQty -= canAdj;
      }
    }
  }
  saveData('sales', sales);

  // 4. Save refund record with full details
  const refunds = getData('refunds');
  refunds.push({
    id:uid(), date:refundDate, saleDate, product, qty,
    origUnitPrice, origTotal,
    type, newProduct, newQty, newTotal,
    financialDiff,
    reason, customer, branch, by:currentUser.username
  });
  saveData('refunds', refunds);

  // Reset form
  document.getElementById('refundSaleDate').value = '';
  document.getElementById('refundDate').value = '';
  document.getElementById('refundQty').value = '1';
  document.getElementById('refundReason').value = '';
  document.getElementById('refundCustomer').value = '';
  if (document.getElementById('refundNewQty')) document.getElementById('refundNewQty').value = '1';
  updateRefundDiff();
  renderRefundHistory();
  renderPOS();

  const msg = type === 'exchange'
    ? (lang==='am'?`🔁 እቃ ተቀይሯል — ${financialDiff > 0 ? fmtMoney(financialDiff)+' ተመላሽ' : financialDiff < 0 ? fmtMoney(Math.abs(financialDiff))+' ተጨምሯል' : 'እኩል'}`:`Exchange done — ${financialDiff !== 0 ? fmtMoney(Math.abs(financialDiff)) : 'even'}`)
    : (lang==='am'?`✅ ሂሳብ ተመላሽ — ${fmtMoney(origTotal)}`:`✅ Refund — ${fmtMoney(origTotal)}`);
  toast(msg);
}

function renderRefundHistory() {
  const el = document.getElementById('refundHistory');
  if (!el) return;
  const refunds = getData('refunds').filter(r => r.branch === currentUser.branch).slice().reverse();
  el.innerHTML = refunds.length ? refunds.map(r => {
    const isExchange = r.type === 'exchange';
    const diffColor = r.financialDiff > 0 ? '#80D080' : r.financialDiff < 0 ? '#FF9090' : 'var(--white-dim)';
    const diffText = r.financialDiff > 0
      ? `💵 ${fmtMoney(r.financialDiff)} ተመላሽ`
      : r.financialDiff < 0
      ? `💵 ${fmtMoney(Math.abs(r.financialDiff))} ተጨምሯል`
      : '↔ እኩል';
    return `<div style="padding:10px 12px;background:${isExchange?'rgba(66,165,245,0.06)':'rgba(224,90,90,0.06)'};border-radius:9px;margin-bottom:8px;border-left:3px solid ${isExchange?'rgba(66,165,245,0.4)':'rgba(224,90,90,0.4)'}">
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px">
        <span style="font-size:13px;font-weight:700;color:var(--white)">${isExchange?'🔁':'💵'} ${r.product} ×${r.qty}</span>
        <span style="font-size:10px;color:var(--white-dim)">${r.date}</span>
      </div>
      ${r.saleDate ? `<div style="font-size:11px;color:rgba(197,203,216,0.45);margin-bottom:3px">📅 ተሸጠ: ${r.saleDate}</div>` : ''}
      ${isExchange && r.newProduct ? `<div style="font-size:11px;color:#90CAF9;margin-bottom:3px">🔁 → ${r.newProduct} ×${r.newQty}</div>` : ''}
      <div style="font-size:12px;font-weight:700;color:${diffColor}">${diffText}</div>
      ${r.customer ? `<div style="font-size:11px;color:rgba(197,203,216,0.45);margin-top:3px">👤 ${r.customer}</div>` : ''}
      ${r.reason ? `<div style="font-size:11px;color:rgba(197,203,216,0.35)">💬 ${r.reason}</div>` : ''}
    </div>`;
  }).join('')
  : `<div style="text-align:center;color:var(--white-dim);font-size:12px;padding:20px">${lang==='am'?'ሪፈንድ የለም':'No refunds'}</div>`;
}

function buildPosPaymentButtons() {
  const container = document.getElementById('posPaymentBtns');
  if (!container) return;
  let channels = getData('paymentChannels');
  // Fallback if channels not yet initialized
  if (!channels || !channels.length) {
    channels = [
      { id:'ch1', name:'CBE Birr' },
      { id:'ch2', name:'Telebirr' },
      { id:'ch3', name:'Amole' },
      { id:'ch4', name:'HelloCash' },
    ];
    saveData('paymentChannels', channels);
  }
  const btns = [
    { val:'cash',     label:'💵 ' + (lang==='am'?'ጥሬ':'Cash'),     color:'76,175,80' },
    { val:'transfer', label:'📲 ' + (lang==='am'?'ዝውውር':'Transfer'), color:'66,165,245' },
    { val:'credit',   label:'🤝 ' + (lang==='am'?'ብድር':'Credit'),    color:'255,167,38' },
  ];
  container.innerHTML = btns.map(b => `
    <button onclick="selectPosPayment('${b.val}')" id="pp${b.val.charAt(0).toUpperCase()+b.val.slice(1)}"
      style="flex:1;min-width:70px;padding:9px 4px;border-radius:8px;border:1.5px solid rgba(255,255,255,0.1);background:transparent;color:var(--white-dim);font-size:11px;font-family:inherit;cursor:pointer;font-weight:600">
      ${b.label}
    </button>`).join('');
  selectPosPayment('cash');
  // Populate channel dropdown
  const sel = document.getElementById('posTransferVia');
  if (sel) {
    sel.innerHTML = channels.map(c => `<option value="${c.name}" data-account="${c.accountNumber||''}">${c.name}${c.accountNumber?' — '+c.accountNumber:''}</option>`).join('');
    showChannelAccount(sel.value,'posChannelAccountHint');
  }
}

function selectPosPayment(val) {
  document.getElementById('posPayment').value = val;
  const styles = {
    cash:     {active:'border:1.5px solid rgba(76,175,80,0.6);background:rgba(76,175,80,0.18);color:#80D080',     inactive:'border:1.5px solid rgba(255,255,255,0.1);background:transparent;color:var(--white-dim)'},
    transfer: {active:'border:1.5px solid rgba(66,165,245,0.6);background:rgba(66,165,245,0.18);color:#90CAF9', inactive:'border:1.5px solid rgba(255,255,255,0.1);background:transparent;color:var(--white-dim)'},
    credit:   {active:'border:1.5px solid rgba(255,167,38,0.6);background:rgba(255,167,38,0.18);color:#FFCC80',  inactive:'border:1.5px solid rgba(255,255,255,0.1);background:transparent;color:var(--white-dim)'},
  };
  ['cash','transfer','credit'].forEach(v => {
    const btn = document.getElementById('pp'+v.charAt(0).toUpperCase()+v.slice(1));
    if (btn) btn.style.cssText = `flex:1;min-width:70px;padding:9px 4px;border-radius:8px;font-size:11px;font-family:inherit;cursor:pointer;font-weight:${v===val?'700':'600'};transition:all 0.15s;${v===val?styles[v].active:styles[v].inactive}`;
  });
  togglePosPayment(val);
}

function togglePosPayment(val) {
  document.getElementById('posTransferWrap').style.display = val==='transfer' ? 'block' : 'none';
  document.getElementById('posCreditWrap').style.display   = val==='credit'   ? 'block' : 'none';
}


// ── SHOW CHANNEL ACCOUNT HINT ──────────────────────────────────
function showChannelAccount(channelName, hintId) {
  const hintEl = document.getElementById(hintId || 'posChannelAccountHint');
  if (!hintEl) return;
  if (!channelName) { hintEl.textContent = ''; return; }
  const channels = getData('paymentChannels');
  const ch = channels.find(c => c.name === channelName);
  if (ch && ch.accountNumber) {
    hintEl.innerHTML = `🔢 <span style="user-select:all;cursor:pointer" onclick="copyToClipboard('${ch.accountNumber}')" title="${lang==='am'?'ለመቅዳት ጫን':'Click to copy'}">${ch.accountNumber}</span> <span style="font-size:10px;opacity:0.6">(${lang==='am'?'ጫን ለቅዳ':'tap to copy'})</span>`;
  } else {
    hintEl.textContent = '';
  }
}

function copyToClipboard(text) {
  if (navigator.clipboard) navigator.clipboard.writeText(text).then(()=>toast(lang==='am'?'ቁጥሩ ተቀደ ✓':'Copied ✓'));
}

// ── PAYMENT CHANNELS (owner) ─────────────────────────────────
function openAddChannelModal() {
  document.getElementById('channelNameInput').value = '';
  document.getElementById('channelAccountInput').value = '';
  openModal('channelModal');
}

function saveChannel() {
  const name = document.getElementById('channelNameInput').value.trim();
  const accountNumber = document.getElementById('channelAccountInput').value.trim();
  if (!name) { toast(lang==='am'?'ስም ያስፈልጋል':'Name required','error'); return; }
  const channels = getData('paymentChannels');
  if (channels.find(c => c.name.toLowerCase() === name.toLowerCase())) {
    toast(lang==='am'?'ቀደም ሲል አለ':'Already exists','error'); return;
  }
  channels.push({ id:'ch'+Date.now(), name, accountNumber });
  saveData('paymentChannels', channels);
  closeModal('channelModal');
  renderPaymentChannels();
  toast(lang==='am'?'ቻናል ተጨምሯል ✓':'Channel added ✓');
}

function deleteChannel(id) {
  const channels = getData('paymentChannels').filter(c => c.id !== id);
  saveData('paymentChannels', channels);
  renderPaymentChannels();
  toast(lang==='am'?'ቻናል ተሰርዟል':'Channel removed');
}

function renderPaymentChannels() {
  const el = document.getElementById('paymentChannelsList');
  if (!el) return;
  const channels = getData('paymentChannels');
  el.innerHTML = channels.length ? channels.map(c => `
    <div style="display:flex;align-items:center;justify-content:space-between;padding:10px 12px;
      background:rgba(66,165,245,0.07);border-radius:9px;margin-bottom:6px;border:1px solid rgba(66,165,245,0.15)">
      <div>
        <span style="font-size:13px;color:var(--white);font-weight:600">📲 ${c.name}</span>
        ${c.accountNumber ? `<div style="font-size:11px;color:#90CAF9;margin-top:2px;letter-spacing:0.3px">🔢 ${c.accountNumber}</div>` : ''}
      </div>
      <button onclick="deleteChannel('${c.id}')"
        style="padding:4px 10px;border-radius:7px;border:1px solid rgba(224,90,90,0.4);background:rgba(224,90,90,0.1);color:#FF9090;cursor:pointer;font-family:inherit;font-size:11px">
        🗑 ${lang==='am'?'ሰርዝ':'Remove'}
      </button>
    </div>`).join('')
  : `<div style="text-align:center;color:var(--white-dim);font-size:12px;padding:16px">${lang==='am'?'ቻናል የለም':'No channels'}</div>`;
}

function posCheckout() {
  if (!posCart.length) return;
  const payment = document.getElementById('posPayment').value;
  const transferVia = document.getElementById('posTransferVia').value;
  const transferCustomer = document.getElementById('posTransferCustomer') ? document.getElementById('posTransferCustomer').value.trim() : '';
  const creditName  = document.getElementById('posCreditName') ? document.getElementById('posCreditName').value.trim() : '';
  const note = document.getElementById('posNote').value;
  const date = new Date().toISOString().slice(0,10);
  const branch = currentUser.branch;

  if (payment === 'credit' && !creditName) { toast(lang==='am'?'የደንበኛ ስም ያስፈልጋል':'Customer name required','error'); return; }
  if (payment === 'transfer' && !transferVia.trim()) { toast(lang==='am'?'የባንክ / ቻናል ስም ያስፈልጋል':'Channel required','error'); return; }
  if (payment === 'transfer' && !transferCustomer) { toast(lang==='am'?'የደንበኛ ስም ያስፈልጋል':'Customer name required','error'); return; }

  // Check stock for all items
  const stockMap = getBranchStockMap(branch);
  for (const item of posCart) {
    if ((stockMap[item.type]||0) < item.qty) {
      toast(`${item.type}: ${lang==='am'?'ክምችት አልቋል':'Out of stock'}`, 'error'); return;
    }
  }

  const total = posCart.reduce((a,x) => a + x.qty*x.price, 0);
  const customerName = payment === 'transfer' ? transferCustomer : creditName;

  // Transfer sales are only truly "sold" once the owner approves the payment —
  // so stock stays untouched here and is deducted at approval time instead.
  if (payment === 'transfer') {
    const pendingTransfers = getData('pendingTransfers');
    pendingTransfers.push({
      id: uid(),
      date,
      items: posCart.map(x => ({ product:x.type, qty:x.qty, price:x.price })),
      total,
      transferVia,
      customerName,
      creditCustomer: creditName,
      note,
      branch,
      by: currentUser.username,
      byName: currentUser.name,
      status: 'pending',
      createdAt: new Date().toISOString()
    });
    saveData('pendingTransfers', pendingTransfers);
    posCart = [];
    const bb = document.getElementById('bottomCartBar'); if (bb) bb.style.display = 'none';
    document.getElementById('posPayment').value = 'cash';
    const tVia = document.getElementById('posTransferVia'); if (tVia) tVia.value = '';
    const tCus = document.getElementById('posTransferCustomer'); if (tCus) tCus.value = '';
    togglePosPayment('cash');
    closeCartModal();
    buildSidebar();
    toast(lang==='am'?`⏳ ${fmtMoney(total)} — ኦነሩ እስቲያፀድቀው ይጠብቃል`:`⏳ ${fmtMoney(total)} — Awaiting owner approval`, 'warn');
    renderPOS();
    return;
  }

  // Auto-register regular customer from POS
  const posIsReg = document.getElementById('posIsRegular') && document.getElementById('posIsRegular').checked;
  const posRegName  = posIsReg ? (document.getElementById('posRegCustName')||{value:''}).value.trim() : '';
  const posRegPhone = posIsReg ? (document.getElementById('posRegCustPhone')||{value:''}).value.trim() : '';
  let posCustId = null;
  if (posIsReg && posRegName) posCustId = autoRegisterCustomer(posRegName, posRegPhone, branch);
  const posCustDisplay = posRegName || customerName;

  // Re-save sales with customer info
  const salesArr = getData('sales');
  const bs2 = getData('branchStock');
  posCart.forEach(item => {
    salesArr.push({ id:uid(), date, product:item.type, qty:item.qty, price:item.price, payment, transferVia, creditCustomer: posCustId||posCustDisplay, customerName: posCustDisplay, branch, note });
    let rem = item.qty;
    for (let i = 0; i < bs2.length && rem > 0; i++) {
      if (bs2[i].branch === branch && bs2[i].type === item.type) {
        const d = Math.min(bs2[i].qty, rem);
        bs2[i].qty -= d; rem -= d;
      }
    }
  });
  saveData('sales', salesArr);
  saveData('branchStock', bs2);

  posCart = [];
  const bb = document.getElementById('bottomCartBar'); if (bb) bb.style.display = 'none';
  document.getElementById('posPayment').value = 'cash';
  const tVia = document.getElementById('posTransferVia'); if (tVia) tVia.value = '';
  const tCus = document.getElementById('posTransferCustomer'); if (tCus) tCus.value = '';
  const cName = document.getElementById('posCreditName'); if (cName) cName.value = '';
  const pNote = document.getElementById('posNote'); if (pNote) pNote.value = '';
  const piReg = document.getElementById('posIsRegular'); if (piReg) piReg.checked = false;
  togglePosRegularCustomer(false);
  togglePosPayment('cash');
  closeCartModal();
  toast(`✅ ${lang==='am'?'ሽያጭ ተጠናቀቀ':'Sale complete'} — ${fmtMoney(total)}`);
  renderPOS();
}

function saveSale() {
  const date = v('saleDate'), product = v('saleProduct'), qty = parseInt(v('saleQty'));
  const price = parseFloat(v('salePrice'));
  const payment = v('salePayment'), transferVia = v('saleTransferVia'), creditCustomer = v('saleCreditCustomer');
  const transferCustomer = (document.getElementById('saleTransferCustomer')||{value:''}).value.trim();
  const branch = currentUser.role === 'owner' ? 'b1' : currentUser.branch;
  const note = v('saleNote');
  if (!date || !product || !qty || !price) { toast(lang==='am'?'ሁሉንም ይሙሉ':'Fill all required fields','error'); return; }
  if (payment === 'transfer' && !transferCustomer) { toast(lang==='am'?'የደንበኛ ስም ያስፈልጋል':'Customer name required','error'); return; }

  // Check stock
  const stockMap = currentUser.role !== 'owner' ? getBranchStockMap(branch) : getStoreStockMap();
  if ((stockMap[product] || 0) < qty) { toast(lang==='am'?'ክምችት በቂ አይደለም!':'Insufficient stock!','error'); return; }

  const data = getData('sales');
  const saleTotal = qty * price;
  const customerName = payment === 'transfer' ? transferCustomer : creditCustomer;

  // Transfer sales are only truly "sold" once the owner approves the payment —
  // so stock stays untouched here and is deducted at approval time instead.
  if (payment === 'transfer') {
    const pendingTransfers = getData('pendingTransfers');
    pendingTransfers.push({
      id: uid(), date, items:[{ product, qty, price }], total: saleTotal,
      transferVia, customerName, creditCustomer: customerName, note,
      branch, by: currentUser.username, byName: currentUser.name,
      status: 'pending', createdAt: new Date().toISOString()
    });
    saveData('pendingTransfers', pendingTransfers);
    buildSidebar();
    closeModal('salesModal');
    renderSales();
    toast(lang==='am'?`⏳ ${fmtMoney(saleTotal)} — ኦነሩ እስቲያፀድቀው ይጠብቃል`:`⏳ ${fmtMoney(saleTotal)} — Awaiting owner approval`, 'warn');
    return;
  }

  // Deduct stock ONCE — from branch stock only (no master store deduct). Cash/credit only —
  // transfer sales returned above before touching stock.
  if (currentUser.role !== 'owner') {
    const bs = getData('branchStock');
    let remaining = qty;
    for (let i = 0; i < bs.length && remaining > 0; i++) {
      if (bs[i].branch === branch && bs[i].type === product) {
        const deduct = Math.min(bs[i].qty, remaining);
        bs[i].qty -= deduct;
        remaining -= deduct;
      }
    }
    saveData('branchStock', bs);
  }

  // Auto-register regular customer
  const isRegular = document.getElementById('saleIsRegular') && document.getElementById('saleIsRegular').checked;
  const regName  = isRegular ? (document.getElementById('saleRegCustName')||{value:''}).value.trim() : '';
  const regPhone = isRegular ? (document.getElementById('saleRegCustPhone')||{value:''}).value.trim() : '';
  let customerId = creditCustomer || null;
  if (isRegular && regName) customerId = autoRegisterCustomer(regName, regPhone, branch) || customerId;
  const displayCustomer = regName || customerName;

  data.push({ id:uid(), date, product, qty, price, payment, transferVia, creditCustomer: customerId||displayCustomer, customerName: displayCustomer, branch, note });
  saveData('sales', data);
  closeModal('salesModal');
  // Reset regular customer fields
  const rc = document.getElementById('saleIsRegular'); if (rc) rc.checked = false;
  toggleSaleRegularCustomer(false);
  renderSales();
  toast(lang==='am'?'ሽያጭ ተመዘገበ ✓':'Sale saved ✓');
}


// ── REGULAR CUSTOMER AUTO-REGISTER ─────────────────────────────

function toggleSaleRegularCustomer(checked) {
  const wrap = document.getElementById('saleRegCustDetails');
  if (wrap) wrap.style.display = checked ? '' : 'none';
  if (!checked) {
    const n = document.getElementById('saleRegCustName'); if (n) n.value = '';
    const p = document.getElementById('saleRegCustPhone'); if (p) p.value = '';
  }
}

function togglePosRegularCustomer(checked) {
  const wrap = document.getElementById('posRegCustDetails');
  if (wrap) wrap.style.display = checked ? '' : 'none';
  if (!checked) {
    const n = document.getElementById('posRegCustName'); if (n) n.value = '';
    const p = document.getElementById('posRegCustPhone'); if (p) p.value = '';
  }
}

/**
 * Auto-register a customer if not already exists (by name+branch).
 * Returns the customer id.
 */
function autoRegisterCustomer(name, phone, branch) {
  if (!name || !name.trim()) return null;
  const trimmed = name.trim();
  const customers = getData('customers');
  // check duplicate by name (case-insensitive)
  let existing = customers.find(c => c.name.toLowerCase() === trimmed.toLowerCase() && (!c.branch || c.branch === branch));
  if (existing) {
    // update phone if missing
    if (phone && !existing.phone) {
      existing.phone = phone.trim();
      saveData('customers', customers);
    }
    return existing.id;
  }
  // New customer
  const newCust = { id: uid(), name: trimmed, phone: (phone||'').trim(), branch, note: lang==='am'?'ቋሚ ደንበኛ':'Regular customer', registeredAt: new Date().toISOString() };
  customers.push(newCust);
  saveData('customers', customers);
  toast(lang==='am'?`👤 ${trimmed} — ቋሚ ደንበኛ ሆኖ ተመዘገበ ✓`:`👤 ${trimmed} registered as regular customer ✓`);
  return newCust.id;
}

// ── CUSTOMERS ──────────────────────────────────────────────────
function renderCustomers() {
  const customers=getData('customers');
  const branches=getData('branches');
  const sales=getData('sales');
  const myBranch=currentUser.branch;
  const canSeeAllBranches = currentUser.role==='owner' || currentUser.role==='hr';
  const filtered=canSeeAllBranches?customers:customers.filter(c=>!c.branch||c.branch===myBranch);

  const el=document.getElementById('customerList');
  el.innerHTML = filtered.length
    ? filtered.map(c=>{
        const br=branches.find(b=>b.id===c.branch);
        const custSales = sales.filter(s => s.creditCustomer===c.id || s.creditCustomer===c.name || s.customerName===c.name);
        const totalSpend = custSales.reduce((a,x) => a+(x.qty*x.price), 0);
        const lastSale = custSales.length ? custSales.sort((a,b)=>b.date.localeCompare(a.date))[0] : null;
        const registeredAt = c.registeredAt ? c.registeredAt.slice(0,10) : '';
        return `<div class="customer-card">
          <div class="customer-name">👤 ${c.name}</div>
          <div class="customer-meta">📞 ${c.phone||'—'} | 🏪 ${br?br.name:(lang==='am'?'ሁሉም':'All')} | ${c.note||''}</div>
          ${registeredAt ? `<div style="font-size:10px;color:rgba(197,203,216,0.4);margin-top:2px">📅 ${lang==='am'?'ተመዘገበ':'Registered'}: ${registeredAt}</div>` : ''}

          <div style="display:flex;gap:8px;margin-top:8px">
            <button class="btn-outline" style="font-size:11px;padding:4px 10px" onclick="viewCustomerHistory('${c.id}','${c.name.replace(/'/g,"\'")}')">📋 ${lang==='am'?'ታሪክ':'History'}</button>
            ${currentUser.role==='owner'?`<button class="btn-danger" onclick="requestDelete('customers','${c.id}')">🗑</button>`:''}
          </div>
        </div>`;
      }).join('')
    : `<p style="opacity:.5;padding:20px">${t('noData')}</p>`;

  // Populate branch selects in modal
  populateBranchSelect('custBranch');
}

function viewCustomerHistory(custId, custName) {
  const sales = getData('sales');
  const custSales = sales.filter(s => s.creditCustomer===custId || s.creditCustomer===custName || s.customerName===custName)
    .sort((a,b) => b.date.localeCompare(a.date));
  const total = custSales.reduce((a,x) => a+(x.qty*x.price), 0);
  const payIcon = p => p==='cash'?'💵':p==='transfer'?'📲':'📋';
  const modal = document.createElement('div');
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.7);z-index:9999;display:flex;align-items:center;justify-content:center;padding:16px';
  modal.innerHTML = `
    <div style="background:#1a1f2e;border-radius:14px;padding:20px;width:100%;max-width:520px;max-height:80vh;overflow-y:auto;border:1px solid rgba(255,255,255,0.1)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
        <h3 style="color:var(--gold);font-size:15px;margin:0">👤 ${custName} — ${lang==='am'?'የሽያጭ ታሪክ':'Purchase History'}</h3>
        <button onclick="this.closest('[style*=fixed]').remove()" style="background:rgba(255,255,255,0.06);border:none;color:var(--white-dim);width:28px;height:28px;border-radius:8px;cursor:pointer;font-size:15px">✕</button>
      </div>
      <div style="display:flex;gap:10px;margin-bottom:14px;flex-wrap:wrap">
        <div style="background:rgba(201,168,76,0.1);border:1px solid rgba(201,168,76,0.2);border-radius:9px;padding:8px 14px;text-align:center">
          <div style="font-size:18px;font-weight:700;color:var(--gold)">${custSales.length}</div>
          <div style="font-size:10px;color:var(--white-dim)">${lang==='am'?'ጠቅላላ ሽያጭ':'Total Sales'}</div>
        </div>
        <div style="background:rgba(76,175,80,0.1);border:1px solid rgba(76,175,80,0.2);border-radius:9px;padding:8px 14px;text-align:center">
          <div style="font-size:18px;font-weight:700;color:var(--success)">${fmtMoney(total)}</div>
          <div style="font-size:10px;color:var(--white-dim)">${lang==='am'?'ጠቅላላ ወጪ':'Total Spend'}</div>
        </div>
      </div>
      ${custSales.length ? `
      <table style="width:100%;border-collapse:collapse;font-size:12px">
        <thead><tr style="color:rgba(197,203,216,0.5);border-bottom:1px solid rgba(255,255,255,0.07)">
          <th style="padding:6px 4px;text-align:left">${lang==='am'?'ቀን':'Date'}</th>
          <th style="padding:6px 4px;text-align:left">${lang==='am'?'ምርት':'Product'}</th>
          <th style="padding:6px 4px;text-align:right">${lang==='am'?'ብዛት':'Qty'}</th>
          <th style="padding:6px 4px;text-align:right">${lang==='am'?'ጠቅላላ':'Total'}</th>
          <th style="padding:6px 4px;text-align:center">${lang==='am'?'አከፋፈል':'Pay'}</th>
        </tr></thead>
        <tbody>${custSales.map(s=>`
          <tr style="border-bottom:1px solid rgba(255,255,255,0.04);color:var(--white)">
            <td style="padding:7px 4px">${s.date}</td>
            <td style="padding:7px 4px">${s.product}</td>
            <td style="padding:7px 4px;text-align:right">${s.qty}</td>
            <td style="padding:7px 4px;text-align:right;color:var(--gold);font-weight:700">${fmtMoney(s.qty*s.price)}</td>
            <td style="padding:7px 4px;text-align:center">${payIcon(s.payment)}</td>
          </tr>`).join('')}
        </tbody>
      </table>` : `<p style="text-align:center;opacity:0.4;padding:20px">${lang==='am'?'ሽያጭ የለም':'No sales found'}</p>`}
    </div>`;
  document.body.appendChild(modal);
  modal.addEventListener('click', e => { if (e.target === modal) modal.remove(); });
}

function saveCustomer() {
  const name=v('custName'),phone=v('custPhone'),branch=v('custBranch'),note=v('custNote');
  if (!name) { toast('Fill name','error'); return; }
  const data=getData('customers');
  data.push({id:uid(),name,phone,branch,note});
  saveData('customers',data); closeModal('customerModal'); renderCustomers();
  toast(lang==='am'?'ደንበኛ ተመዘገበ ✓':'Customer added ✓');
}

// ── FINANCE ────────────────────────────────────────────────────
function renderFinance() {
  syncProcurementExpenses();
  const expenses=getData('expenses'), raw=getData('raw'), sales=getData('sales').filter(s=>!s.isWholesale), refunds=getData('refunds');
  const wsApproved=getData('wholesale').filter(w=>w.status==='approved').reduce((a,w)=>a+w.total,0);
  const grossRetail=sales.reduce((a,x)=>a+(x.qty*x.price),0);
  const totalRefundAmt=refunds.reduce((a,r)=>a+(r.financialDiff||r.origTotal||0),0);
  const totalRevenue=Math.max(0, grossRetail - totalRefundAmt) + wsApproved;
  const totalExpense=expenses.reduce((a,x)=>a + (Number(x.amount)||0), 0);
  const procApprovedReceived = getData('procurementOrders').filter(o => o.status === 'approved' || o.status === 'received');
  const procCost = procApprovedReceived.reduce((a,o) => a + (Number(o.cost)||0), 0);
  const directRawCost = raw.filter(r => !r.procOrderId).reduce((a,x) => a + (Number(x.cost)||0), 0);
  const rawCost = procCost + directRawCost;
  const profit=totalRevenue-totalExpense;

  document.getElementById('financeKpis').innerHTML=[
    {icon:'💵',val:fmtMoney(totalRevenue),label:t('kpiRevenue')},
    {icon:'📤',val:fmtMoney(totalExpense),label:t('kpiExpense')},
    {icon:profit>=0?'📈':'📉',val:fmtMoney(Math.abs(profit)),label:t('kpiProfit')+(profit<0?' (ኪሳራ)':' (ትርፍ)'),color:profit>=0?'#80E080':'#FF8080'},
    {icon:'🧵',val:fmtMoney(rawCost),label:lang==='am'?'ጥሬ እቃ ወጪ':'Raw Material Cost',page:'procurement'},
  ].map(k=>`<div class="kpi-card" ${k.page?`style="cursor:pointer" onclick="navigateTo('${k.page}')" title="${lang==='am'?'ዝርዝር ይመልከቱ':'Click for details'}"`:''}><div class="kpi-icon">${k.icon}</div><div class="kpi-val" style="${k.color?`color:${k.color}`:''}"> ${k.val}</div><div class="kpi-label">${k.label}</div></div>`).join('');

  populateBranchSelect('expBranch');

  const h=lang==='am'?['ቀን','ምድብ','መጠን','ቅርንጫፍ','ዝርዝር','ስረዝ']:['Date','Category','Amount','Branch','Description','Del'];
  document.getElementById('expenseThead').innerHTML=`<tr>${h.map(x=>`<th>${x}</th>`).join('')}</tr>`;
  const branches=getData('branches');
  document.getElementById('expenseTbody').innerHTML=expenses.length
    ? expenses.sort((a,b)=>b.date.localeCompare(a.date)).map(r=>{
        const br=branches.find(b=>b.id===r.branch);
        return `<tr><td>${r.date}</td><td>${r.category}</td><td style="color:var(--danger)">${fmtMoney(r.amount)}</td>
          <td>${br?br.name:(r.branch||'—')}</td><td>${r.desc}</td>
          <td>${requestDeleteBtn('expenses',r.id)}</td></tr>`;
      }).join('')
    : noDataRow(h.length);

  const tfootEl = document.getElementById('expenseTfoot');
  if (tfootEl) {
    tfootEl.innerHTML = expenses.length
      ? `<tr style="font-weight:700;background:rgba(255,255,255,0.05)">
          <td colspan="2">${lang==='am' ? 'አጠቃላይ ድምር ወጪ' : 'Total Expense'}</td>
          <td style="color:var(--danger)">${fmtMoney(totalExpense)}</td>
          <td colspan="3"></td>
        </tr>`
      : '';
  }

}

function saveExpense() {
  const date=v('expDate'),category=v('expCategory'),amount=parseFloat(v('expAmount')),branch=v('expBranch'),desc=v('expDesc');
  if (!date||!category||!amount) { toast('Fill all','error'); return; }
  const data=getData('expenses'); data.push({id:uid(),date,category,amount,branch,desc}); saveData('expenses',data);
  closeModal('expenseModal'); renderFinance(); toast(lang==='am'?'ወጪ ተመዘገበ ✓':'Expense saved ✓');
}




// ── PROCUREMENT ────────────────────────────────────────────────
function renderProcurement() {
  syncProcurementExpenses();
  const orders = getData('procurementOrders');
  const branches = getData('branches');
  const isOwner = currentUser.role === 'owner';
  const isProcurement = currentUser.role === 'procurement';
  const canAct = isOwner || isProcurement;

  populateBranchSelect('procBranch');
  const procDateEl = document.getElementById('procDate');
  if (procDateEl && !procDateEl.value) procDateEl.value = new Date().toISOString().slice(0,10);
  const titleEl = document.getElementById('procurementTitle');
  if (titleEl) titleEl.textContent = t('pageTitle_procurement');
  const addBtnEl = document.getElementById('procAddBtn');
  if (addBtnEl) addBtnEl.classList.toggle('hidden', !isProcurement);

  // ── Stats
  const pending  = orders.filter(o=>o.status==='pending');
  const approved = orders.filter(o=>o.status==='approved');
  const received = orders.filter(o=>o.status==='received');
  const rejected = orders.filter(o=>o.status==='rejected');
  const totalCost = [...approved,...received].reduce((a,o)=>a+o.cost,0);

  const container = document.getElementById('procPanel');
  if (!container) return;

  // ── Status color map
  const SC = { pending:'#FFA726', approved:'#4CAF50', rejected:'#E05A5A', received:'#4FC3F7' };

  // ── Render order card
  function orderCard(o) {
    const br = branches.find(b=>b.id===o.branch);
    const sc = SC[o.status]||'#aaa';
    const stLabel = T[lang].procStatus[o.status]||o.status;
    let actionBtn = '';
    if (isOwner && o.status==='pending') {
      actionBtn = `<div style="display:flex;gap:6px;margin-top:10px">
        <button onclick="approveProcurement('${o.id}')" style="flex:1;padding:7px 4px;font-size:11px;font-family:inherit;font-weight:700;border-radius:8px;border:1px solid rgba(76,175,80,0.5);background:rgba(76,175,80,0.12);color:#80e080;cursor:pointer">✅ ${lang==='am'?'አፅድቅ':'Approve'}</button>
        <button onclick="rejectProcurement('${o.id}')" style="flex:1;padding:7px 4px;font-size:11px;font-family:inherit;font-weight:700;border-radius:8px;border:1px solid rgba(224,90,90,0.4);background:rgba(224,90,90,0.08);color:#FF9090;cursor:pointer">❌ ${lang==='am'?'ውድቅ':'Reject'}</button>
      </div>`;
    } else if (isProcurement && o.status==='approved') {
      actionBtn = `<button onclick="markProcurementReceived('${o.id}')" style="width:100%;margin-top:10px;padding:7px;font-size:11px;font-family:inherit;font-weight:700;border-radius:8px;border:1px solid rgba(79,195,247,0.4);background:rgba(79,195,247,0.1);color:#4FC3F7;cursor:pointer">📦 ${lang==='am'?'ደረሰ':'Mark Received'}</button>`;
    }
    return `<div style="background:var(--surface);border:1px solid var(--border);border-radius:12px;padding:14px;position:relative;overflow:hidden;transition:all 0.2s" onmouseover="this.style.borderColor='${sc}55';this.style.transform='translateY(-1px)'" onmouseout="this.style.borderColor='var(--border)';this.style.transform=''">
      <div style="position:absolute;top:0;left:0;width:3px;height:100%;background:${sc};border-radius:2px 0 0 2px"></div>
      <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-left:8px">
        <div style="flex:1;min-width:0">
          <div style="font-size:13px;font-weight:700;color:var(--white);margin-bottom:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${o.item}</div>
          <div style="font-size:11px;color:var(--white-dim)">${o.date} · ${br?br.name:(o.branch||'—')}</div>
        </div>
        <span style="font-size:10px;font-weight:700;color:${sc};background:${sc}22;padding:3px 8px;border-radius:6px;border:1px solid ${sc}44;white-space:nowrap;margin-left:8px">${stLabel}</span>
      </div>
      <div style="margin-left:8px;margin-top:10px;display:grid;grid-template-columns:1fr 1fr;gap:6px">
        <div style="background:rgba(255,255,255,0.03);border-radius:8px;padding:8px 10px">
          <div style="font-size:10px;color:var(--white-dim);margin-bottom:2px">${lang==='am'?'ብዛት':'Qty'}</div>
          <div style="font-size:14px;font-weight:700;color:var(--gold)">${o.qty} <span style="font-size:10px;font-weight:400;color:var(--white-dim)">${o.unit||''}</span></div>
        </div>
        <div style="background:rgba(255,255,255,0.03);border-radius:8px;padding:8px 10px">
          <div style="font-size:10px;color:var(--white-dim);margin-bottom:2px">${lang==='am'?'ዋጋ':'Cost'}</div>
          <div style="font-size:14px;font-weight:700;color:#FF9090">${fmtMoney(o.cost)}</div>
        </div>
      </div>
      ${o.supplier ? `<div style="margin-left:8px;margin-top:6px;font-size:11px;color:rgba(197,203,216,0.45)">🏭 ${o.supplier}</div>` : ''}
      ${o.note ? `<div style="margin-left:8px;margin-top:3px;font-size:11px;color:rgba(197,203,216,0.35);font-style:italic">💬 ${o.note}</div>` : ''}
      <div style="margin-left:8px">${actionBtn}</div>
    </div>`;
  }

  // ── Shipments sent to Store (raw material) — read-only status here; Store confirms receipt
  function procStoreShipments() {
    const ship = getProdFlow('proc_store').filter(x => x.status === 'pending' || x.status === 'confirmed');
    if (!ship.length) return '';
    return `<div style="display:flex;flex-direction:column;gap:6px">
      ${[...ship].sort((a,b)=>b.date.localeCompare(a.date)).slice(0,12).map(x=>`
        <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;background:rgba(201,168,76,0.06);border:1px solid rgba(201,168,76,0.15);border-radius:9px;padding:7px 12px">
          <div style="font-size:12px;color:var(--white)">
            <span style="font-weight:700">${x.qty} ${x.unit||''}</span> ${x.item}
            <div style="font-size:10px;color:var(--white-dim);margin-top:1px">${x.date}</div>
          </div>
          <span style="font-size:10px;font-weight:700;padding:3px 8px;border-radius:8px;white-space:nowrap;${x.status==='pending'?'color:#FFA726;background:rgba(255,167,38,0.12);border:1px solid rgba(255,167,38,0.3)':'color:#80e080;background:rgba(76,175,80,0.12);border:1px solid rgba(76,175,80,0.3)'}">
            ${x.status==='pending' ? `⏳ ${lang==='am'?'እቃ ቤት ሊያረጋግጥ':'Awaiting Store'}` : `✅ ${lang==='am'?'ተረጋግጧል':'Confirmed'}`}
          </span>
        </div>`).join('')}
    </div>`;
  }

  // ── Sections: pending actions first (prominent), then tabs for all/approved/received/rejected
  const pendingHtml = pending.length
    ? `<div style="margin-bottom:16px">
        <div style="font-size:11px;font-weight:700;color:#FFA726;letter-spacing:0.6px;margin-bottom:8px;display:flex;align-items:center;gap:6px">
          <span style="background:rgba(255,167,38,0.15);border:1px solid rgba(255,167,38,0.35);border-radius:6px;padding:2px 7px">⏳ ${lang==='am'?'ፈቃድ ይጠብቃሉ':'Pending Approval'}</span>
          <span style="background:#FFA72622;border-radius:10px;padding:1px 8px;font-size:11px">${pending.length}</span>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:10px">${pending.map(orderCard).join('')}</div>
      </div>` : '';

  const otherOrders = [...approved,...received,...rejected].sort((a,b)=>b.date.localeCompare(a.date));
  const otherHtml = otherOrders.length
    ? `<div>
        <div style="font-size:11px;font-weight:700;color:var(--white-dim);letter-spacing:0.6px;margin-bottom:8px">${lang==='am'?'ሁሉም ትዕዛዞች':'All Orders'} (${otherOrders.length})</div>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(240px,1fr));gap:10px">${otherOrders.map(orderCard).join('')}</div>
      </div>` : '';

  const emptyHtml = !orders.length
    ? `<div style="text-align:center;padding:40px 20px;opacity:0.4">
        <div style="font-size:36px;margin-bottom:10px">🛒</div>
        <div style="font-size:13px">${lang==='am'?'ምንም ትዕዛዝ የለም':'No orders yet'}</div>
      </div>` : '';

  container.innerHTML = `
    <!-- Summary strip -->
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:14px">
      ${[
        {icon:'🛒',val:orders.length,label:lang==='am'?'ጠቅላላ':'Total',color:'var(--gold)'},
        {icon:'⏳',val:pending.length,label:lang==='am'?'ፈቃድ ይጠብቃሉ':'Pending',color:'#FFA726'},
        {icon:'✅',val:approved.length+received.length,label:lang==='am'?'ፀደቁ':'Approved',color:'#4CAF50'},
        {icon:'💸',val:fmtMoney(totalCost),label:lang==='am'?'ጠቅላላ ወጪ':'Total Spend',color:'#FF9090'},
      ].map(k=>`<div style="background:var(--surface);border:1px solid var(--border);border-radius:10px;padding:10px 12px;text-align:center">
        <div style="font-size:16px;margin-bottom:3px">${k.icon}</div>
        <div style="font-size:${typeof k.val==='string'&&k.val.length>6?'11':'15'}px;font-weight:700;color:${k.color}">${k.val}</div>
        <div style="font-size:9px;color:var(--white-dim);letter-spacing:0.4px;margin-top:1px">${k.label}</div>
      </div>`).join('')}
    </div>
    <!-- Shipments sent to Store -->
    ${getProdFlow('proc_store').length ? `<div style="background:rgba(201,168,76,0.04);border:1px solid rgba(201,168,76,0.15);border-radius:10px;padding:10px 12px;margin-bottom:14px">
      <div style="font-size:10px;font-weight:700;color:var(--gold);letter-spacing:0.5px;margin-bottom:8px">🧵 ${lang==='am'?'ወደ እቃ ቤት የተላከ ጥሬ እቃ':'RAW MATERIAL SENT TO STORE'}</div>
      ${procStoreShipments()}
    </div>` : ''}
    <!-- Orders -->
    ${pendingHtml}${otherHtml}${emptyHtml}
  `;
}

function saveProcurementOrder() {
  const date = v('procDate') || new Date().toISOString().slice(0,10);
  const item = v('procItem');
  const qty = parseInt(v('procQty'));
  const unit = v('procUnit') || 'unit';
  const cost = parseFloat(v('procCost'));
  const supplier = v('procSupplier');
  const branch = v('procBranch');
  const note = v('procNote');
  if (!item || !qty || !cost || !branch) { toast(lang==='am'?'ሁሉንም አስፈላጊ መስኮች ይሙሉ':'Fill all required fields','error'); return; }
  const orders = getData('procurementOrders');
  orders.push({ id:uid(), date, item, qty, unit, cost, supplier, branch, note,
    status:'pending', by:currentUser.username, byName:currentUser.name,
    submittedAt: new Date().toISOString() });
  saveData('procurementOrders', orders);
  closeModal('procurementModal');
  renderProcurement();
  toast(t('procSavedMsg'));
}

function approveProcurement(id) {
  const orders = getData('procurementOrders');
  const o = orders.find(x=>x.id===id);
  if (!o) return;
  o.status = 'approved';
  o.approvedBy = currentUser.username;
  o.approvedAt = new Date().toISOString();
  saveData('procurementOrders', orders);
  // ── Auto-register as expense (Finance) ──
  const expenses = getData('expenses');
  if (!expenses.some(e => e.procOrderId === o.id)) {
    expenses.push({
      id: uid(), date: o.date,
      category: lang==='am' ? 'ግዥ' : 'Procurement',
      amount: o.cost,
      branch: o.branch || 'b1',
      desc: `${o.item} × ${o.qty} ${o.unit||''} | ${lang==='am'?'አቅራቢ':'Supplier'}: ${o.supplier||'—'} | ${lang==='am'?'ትዕዛዝ':'Order'} #${o.id.slice(-5)}`,
      procOrderId: o.id
    });
    saveData('expenses', expenses);
  }
  syncProcurementExpenses();
  renderProcurement();
  buildSidebar();
  toast((t('procApproveMsg')||'Approved') + ' — ' + (lang==='am'?'ወጪ ፋይናንስ ላይ ተመዘገበ ✓':'Expense logged to Finance ✓'));
}

function rejectProcurement(id) {
  const orders = getData('procurementOrders');
  const o = orders.find(x=>x.id===id);
  if (!o) return;
  o.status = 'rejected';
  o.rejectedBy = currentUser.username;
  o.rejectedAt = new Date().toISOString();
  saveData('procurementOrders', orders);
  renderProcurement();
  buildSidebar();
  toast(t('procRejectMsg'), 'error');
}

function markProcurementReceived(id) {
  const orders = getData('procurementOrders');
  const o = orders.find(x=>x.id===id);
  if (!o) return;
  o.status = 'received';
  o.receivedAt = new Date().toISOString();
  saveData('procurementOrders', orders);
  // ── Log to raw materials audit history ──
  const raw = getData('raw');
  if (!raw.some(r => r.procOrderId === o.id)) {
    raw.push({ id:uid(), date:o.date, name:o.item, qty:o.qty, unit:o.unit, cost:o.cost, supplier:o.supplier||'—', branch:o.branch, procOrderId:o.id });
    saveData('raw', raw);
  }
  syncProcurementExpenses();
  // ── Send to Store as a pending shipment — Store must confirm before it becomes usable stock ──
  pushProdFlow({
    id:uid(), stage:'proc_store', date:o.date, item:o.item, qty:o.qty, unit:o.unit,
    status:'pending', sentBy:currentUser.username, sentByName:currentUser.name, procOrderId:o.id,
  });
  renderProcurement();
  buildSidebar();
  toast((t('procReceivedMsg')||'Received') + ' — ' + (lang==='am'?'ወደ እቃ ቤት ተልኳል፣ ማረጋገጫ ይጠብቃል':'Sent to Store — awaiting confirmation'));
}

// Store confirms raw material physically arrived — this is what actually credits store's raw stock
function confirmProcToStore(id) {
  if (!canActStore()) { toast(lang==='am'?'⛔ ይህን ማድረግ የሚችለው እቃ ቤት ብቻ ነው':'⛔ Only Store staff can confirm this','error'); return; }
  const x = updateProdFlow(id, { status:'confirmed', confirmedBy:currentUser.username, confirmedByName:currentUser.name, confirmedAt:new Date().toISOString() });
  if (!x) return;
  const rawStock = getData('rawStock');
  const existing = rawStock.find(r => r.name === x.item);
  if (existing) { existing.qty += x.qty; existing.unit = x.unit; } else rawStock.push({ id:uid(), name:x.item, qty:x.qty, unit:x.unit });
  saveData('rawStock', rawStock);
  renderStore(); renderProcurement();
  toast(lang==='am'?`✅ ${x.qty} ${x.unit||''} ${x.item} ተረጋግጦ ገባ`:`✅ Confirmed — ${x.qty} ${x.unit||''} ${x.item} received`);
}


// ── STORE → CUTTING (raw material) ────────────────────────────
function openStoreToCutting(itemName, unit) {
  if (!canActStore()) { toast(lang==='am'?'⛔ ይህን ማድረግ የሚችለው እቃ ቤት ብቻ ነው':'⛔ Only Store staff can do this','error'); return; }
  const rawStock = getData('rawStock');
  const stock = rawStock.find(r => r.name === itemName);
  const avail = stock ? stock.qty : 0;

  const modal = document.createElement('div');
  modal.id = 'storeToCuttingModal';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.75);z-index:9999;display:flex;align-items:center;justify-content:center;padding:16px';
  modal.innerHTML = `
    <div style="background:#1a1f2e;border-radius:14px;padding:20px;width:100%;max-width:380px;border:1px solid rgba(255,255,255,0.1)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <h3 style="color:var(--gold);font-size:15px;margin:0">✂️ ${itemName} → ${lang==='am'?'ቆረጣ ክፍል':'Cutting'}</h3>
        <button onclick="document.getElementById('storeToCuttingModal').remove()" style="background:rgba(255,255,255,0.06);border:none;color:var(--white-dim);width:28px;height:28px;border-radius:8px;cursor:pointer">✕</button>
      </div>
      <div style="background:rgba(201,168,76,0.08);border:1px solid rgba(201,168,76,0.2);border-radius:9px;padding:10px 14px;margin-bottom:14px;font-size:13px;color:var(--white)">
        🧵 ${lang==='am'?'ያለ ክምችት':'Available'}: <strong style="color:var(--gold)">${avail} ${unit}</strong>
      </div>
      <div style="margin-bottom:16px">
        <div style="font-size:11px;color:rgba(197,203,216,0.5);font-weight:600;margin-bottom:5px">${lang==='am'?'ብዛት':'Quantity'} (max: ${avail})</div>
        <input id="stcQty" type="number" min="1" max="${avail}" placeholder="0"
          style="width:100%;padding:9px 12px;background:rgba(255,255,255,0.05);border:1px solid rgba(201,168,76,0.3);border-radius:9px;color:var(--white);font-family:inherit;font-size:14px;font-weight:700;outline:none;box-sizing:border-box" />
      </div>
      <div style="display:flex;gap:10px">
        <button onclick="saveStoreToCutting('${itemName}','${unit}')" style="flex:1;padding:11px;background:linear-gradient(135deg,var(--gold),#A87820);color:var(--navy);border:none;border-radius:9px;font-size:13px;font-weight:700;font-family:inherit;cursor:pointer">📤 ${lang==='am'?'ላክ':'Send'}</button>
        <button onclick="document.getElementById('storeToCuttingModal').remove()" style="padding:11px 18px;background:transparent;border:1px solid rgba(255,255,255,0.15);color:var(--white-dim);border-radius:9px;font-family:inherit;cursor:pointer">${lang==='am'?'ሰርዝ':'Cancel'}</button>
      </div>
    </div>`;
  document.body.appendChild(modal);
}

function saveStoreToCutting(itemName, unit) {
  const qty = parseInt(document.getElementById('stcQty').value);
  if (!qty || qty <= 0) { toast(lang==='am'?'ብዛት ያስፈልጋል':'Quantity required','error'); return; }
  const rawStock = getData('rawStock');
  const stock = rawStock.find(r => r.name === itemName);
  if (!stock || stock.qty < qty) { toast(lang==='am'?'ክምችት በቂ አይደለም':'Insufficient stock','error'); return; }

  stock.qty -= qty;
  saveData('rawStock', rawStock);

  const today = new Date().toISOString().slice(0,10);
  pushProdFlow({ id:uid(), stage:'store_cutting', date:today, item:itemName, qty, unit, status:'pending', sentBy:currentUser.username, sentByName:currentUser.name });

  document.getElementById('storeToCuttingModal').remove();
  renderStore();
  toast(`📤 ${qty} ${unit} ${itemName} → ${lang==='am'?'ቆረጣ ክፍል ተልኳል':'sent to Cutting'} ✓`);
}

// Cutting confirms raw material physically arrived — this credits cuttingRaw (used by the fabric select)
function confirmStoreToCutting(id) {
  if (!canActCutting()) { toast(lang==='am'?'⛔ ይህን ማድረግ የሚችለው ቆረጣ ክፍል ብቻ ነው':'⛔ Only Cutting staff can confirm this','error'); return; }
  const x = updateProdFlow(id, { status:'confirmed', confirmedBy:currentUser.username, confirmedByName:currentUser.name, confirmedAt:new Date().toISOString() });
  if (!x) return;
  const cd = getData('cuttingRaw');
  const ex = cd.find(r => r.name === x.item);
  if (ex) { ex.qty += x.qty; ex.unit = x.unit; } else cd.push({ id:uid(), name:x.item, qty:x.qty, unit:x.unit });
  saveData('cuttingRaw', cd);
  renderCutting(); renderStore();
  toast(lang==='am'?`✅ ${x.qty} ${x.unit||''} ${x.item} ተረጋግጦ ገባ`:`✅ Confirmed — ${x.qty} ${x.unit||''} ${x.item} received`);
}

// ── HR ─────────────────────────────────────────────────────────
function renderHR() {
  const emps=getData('employees'), branches=getData('branches');
  populateBranchSelect('empBranch');

  const isOwner = currentUser.role === 'owner';
  const h = isOwner
    ? (lang==='am'?['ስም','ሚና','ቅርንጫፍ','ስልክ','ደሞዝ','👤 Login','🔑 ፓስዋርድ','ሁኔታ','አዛዝ']:['Name','Role','Branch','Phone','Salary','👤 Login','🔑 Password','Status','Actions'])
    : (lang==='am'?['ስም','ሚና','ቅርንጫፍ','ስልክ','ደሞዝ','ሁኔታ','አዛዝ']:['Name','Role','Branch','Phone','Salary','Status','Actions']);

  document.getElementById('hrThead').innerHTML=`<tr>${h.map(x=>`<th>${x}</th>`).join('')}</tr>`;
  document.getElementById('hrTbody').innerHTML=emps.length
    ? emps.map(r=>{
        const br=branches.find(b=>b.id===r.branch);
        const statusBadge=r.active?`<span class="badge badge-cash">${t('active_')}</span>`:`<span class="badge badge-damage">${t('blocked')}</span>`;
        const toggleBtn=isOwner?`<button class="btn-sm" onclick="toggleEmployee('${r.id}')">${r.active?t('disable'):t('enable')}</button>`:'';
        const delBtn=isOwner?`<button class="btn-danger" onclick="requestDelete('employees','${r.id}')">🗑</button>`:'';
        const credCols = isOwner
          ? `<td style="font-family:monospace;font-size:12px;color:var(--gold-lt)">${r.username||'—'}</td>
             <td><button class="btn-sm" onclick="resetEmployeePassword('${r.username}')">🔑 ${lang==='am'?'ቀይር':'Reset'}</button></td>`
          : '';
        return `<tr><td>${r.name}</td><td>${T[lang].roles[r.role]||r.role}</td><td>${br?br.name:(r.branch||'—')}</td>
          <td>${r.phone||'—'}</td><td>${fmtMoney(r.salary)}</td>${credCols}<td>${statusBadge}</td>
          <td style="display:flex;gap:6px">${toggleBtn}${delBtn}</td></tr>`;
      }).join('')
    : noDataRow(h.length);
}

// ── HR REPORT (attendance + payroll cycle) ───────────────────────
function renderHRReport() {
  const emps=getData('employees');
  const atts=getData('attendance');
  const isOwner = currentUser.role === 'owner';

  const today = new Date().toISOString().slice(0,10);
  const todayAtt = atts.filter(a=>a.date===today);
  const attListEl = document.getElementById('attendanceList');
  if (attListEl) {
    attListEl.innerHTML = emps.map(e=>{
      const rec=todayAtt.find(a=>a.userId===e.id||a.username===e.username);
      return `<div class="branch-item">
        <div><span class="branch-name">${e.name}</span> <span class="user-role">${T[lang].roles[e.role]||e.role}</span></div>
        ${rec?`<span class="badge badge-cash">✅ ${rec.time}</span>`:`<span class="badge badge-damage">${lang==='am'?'አልገባም':'Absent'}</span>`}
      </div>`;
    }).join('')||`<p style="opacity:.5">${t('noData')}</p>`;
  }

  // ── Payroll cycle section (owner + HR role) ──
  const payrollEl = document.getElementById('payrollCycleSection');
  const canManagePayroll = isOwner || currentUser.role === 'hr';
  if (!payrollEl || !canManagePayroll) return;

  const globalCycleReset = getData('payrollCycleStart');
  const todayPay = new Date().toISOString().slice(0,10);
  const totalSalary = emps.filter(e=>e.active).reduce((a,e)=>a+e.salary,0);

  const empRows = emps.filter(e=>e.active).map(e => {
    const empCycleStart = (globalCycleReset && globalCycleReset > (e.start||'')) ? globalCycleReset : (e.start || todayPay);
    const cycleStartDate = new Date(empCycleStart);
    const todayDate = new Date(todayPay);
    const totalDays = Math.max(1, Math.floor((todayDate - cycleStartDate) / 86400000) + 1);

    const allDays = [...Array(totalDays)].map((_,i) => {
      const d = new Date(cycleStartDate);
      d.setDate(d.getDate() + i);
      return d.toISOString().slice(0,10);
    });

    const myAtts = getData('attendance').filter(a=>(a.userId===e.id||a.username===e.username) && a.date >= empCycleStart);
    const attMap = {};
    myAtts.forEach(a => { attMap[a.date] = a; });

    const presentDays = myAtts.length;
    const totalMins = myAtts.reduce((s,a)=>{
      if (!a.checkIn||!a.checkOut) return s;
      const toMin = t=>{const[h,m,sm]=t.split(':').map(Number);return h*60+m+(sm||0)/60;};
      return s + Math.max(0, toMin(a.checkOut)-toMin(a.checkIn));
    }, 0);
    const hrs = Math.floor(totalMins/60), mins = Math.round(totalMins%60);

    const visibleDays = [...allDays].reverse().slice(0,30);
    const tableRows = visibleDays.map(d => {
      const a = attMap[d];
      const isToday = d === todayPay;
      const absent = !a;
      const shortDate = d.slice(5); // MM-DD only
      return `<tr style="font-size:10px;${absent&&!isToday?'opacity:0.35':''}">
        <td style="color:${isToday?'var(--gold)':absent?'rgba(197,203,216,0.5)':'rgba(197,203,216,0.75)'};padding:2px 5px;white-space:nowrap">${shortDate}${isToday?' ✦':''}</td>
        <td style="padding:2px 5px;color:#80D080;white-space:nowrap">${a?(a.checkIn||a.time||'—'):'—'}</td>
        <td style="padding:2px 5px;color:#FF9090;white-space:nowrap">${a?.checkOut||'—'}</td>
        <td style="padding:2px 5px;color:${a?'var(--gold)':'#FF5050'};white-space:nowrap;font-size:9px">${a?calcDuration(a.checkIn,a.checkOut):(lang==='am'?'ቀሩ':'Abs')}</td>
      </tr>`;
    }).join('');

    return `<div style="margin-bottom:10px;padding:10px 12px;background:rgba(255,255,255,0.03);border-radius:10px;border:1px solid rgba(255,255,255,0.07)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px">
        <div>
          <span style="font-size:12px;font-weight:700;color:var(--white)">${e.name}</span>
          <span style="font-size:10px;color:var(--white-dim);margin-left:5px">${T[lang].roles[e.role]||e.role}</span>
          <span style="font-size:10px;color:rgba(197,203,216,0.4);margin-left:5px">| ${lang==='am'?'ጀምሮ:':'from:'} ${empCycleStart}</span>
        </div>
        <div style="text-align:right;white-space:nowrap">
          <span style="font-size:11px;font-weight:700;color:var(--gold)">${fmtMoney(e.salary)}</span>
          <span style="font-size:10px;color:rgba(197,203,216,0.4);margin-left:5px">${presentDays}/${totalDays}${lang==='am'?'ቀ':'d'} ${hrs}ሰ${mins}ደ</span>
        </div>
      </div>
      <div style="max-height:140px;overflow-y:auto;border-radius:6px;background:rgba(0,0,0,0.15)">
        <table style="width:100%;border-collapse:collapse">
          <thead style="position:sticky;top:0;background:#1a1f35;z-index:1">
            <tr style="font-size:10px;color:rgba(197,203,216,0.4)">
              <th style="text-align:left;padding:3px 5px;font-weight:600">${lang==='am'?'ቀን':'Date'}</th>
              <th style="text-align:left;padding:3px 5px;font-weight:600">${lang==='am'?'ገብቷ':'In'}</th>
              <th style="text-align:left;padding:3px 5px;font-weight:600">${lang==='am'?'ወጥቷ':'Out'}</th>
              <th style="text-align:left;padding:3px 5px;font-weight:600">${lang==='am'?'ቆይታ':'Dur'}</th>
            </tr>
          </thead>
          <tbody>${tableRows}</tbody>
        </table>
      </div>
      ${allDays.length>30?`<div style="font-size:10px;color:rgba(197,203,216,0.3);text-align:center;margin-top:3px">+ ${allDays.length-30} ${lang==='am'?'ቀን':'days'}</div>`:''}
    </div>`;
  }).join('');

  const earliest = globalCycleReset || emps.filter(e=>e.active).reduce((min,e)=>(!min||(e.start||'')>min?min:e.start||min),'');
  const daysSince = earliest ? Math.max(0,Math.floor((new Date(todayPay)-new Date(earliest))/86400000)) : 0;
  const monthFull = daysSince >= 28;

  payrollEl.innerHTML = `
    <div style="margin-top:4px">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;flex-wrap:wrap;gap:8px">
        <div>
          <span style="font-size:14px;font-weight:700;color:var(--white)">📋 ${lang==='am'?'የደሞዝ ዑደት':'Payroll Cycle'}</span>
          <div style="font-size:11px;color:rgba(197,203,216,0.5);margin-top:2px">
            ${lang==='am'?`ዛሬ: <b style="color:var(--gold)">${todayPay}</b>`:`Today: <b style="color:var(--gold)">${todayPay}</b>`}
          </div>
        </div>
        ${monthFull
          ? `<button onclick="payAllSalaries()"
              style="padding:10px 18px;border-radius:10px;border:none;background:linear-gradient(135deg,#4CAF50,#388E3C);color:#fff;font-family:inherit;font-size:13px;font-weight:700;cursor:pointer;box-shadow:0 0 12px rgba(76,175,80,0.4)">
              💰 ${lang==='am'?`ደሞዝ ክፈል — ${fmtMoney(totalSalary)}`:`Pay Salaries — ${fmtMoney(totalSalary)}`}
            </button>`
          : `<div style="font-size:11px;color:rgba(197,203,216,0.4);text-align:right">
              ${lang==='am'?`${28-daysSince} ቀን ሲቀር ደሞዝ ክፈያ`:`Payroll ready in ${28-daysSince} days`}
            </div>`}
      </div>
      <div style="margin-bottom:12px;padding:10px 14px;background:rgba(201,168,76,0.07);border:1px solid rgba(201,168,76,0.2);border-radius:10px;display:flex;justify-content:space-between;align-items:center">
        <span style="font-size:12px;color:rgba(197,203,216,0.6)">${lang==='am'?'ጠቅላላ ደሞዝ:':'Total Salary:'}</span>
        <span style="font-size:15px;font-weight:700;color:var(--gold)">${fmtMoney(totalSalary)}</span>
      </div>
      ${empRows}
    </div>`;
}

function payAllSalaries() {
  if (!confirm(lang==='am'?'ለሁሉም ሠራተኞች ደሞዝ ተከፍሏል? ዳታው ይጠፋል!':'Mark all salaries paid and clear attendance?')) return;
  const emps = getData('employees').filter(e=>e.active);
  const totalSalary = emps.reduce((a,e)=>a+e.salary,0);
  const today = new Date().toISOString().slice(0,10);
  // Log as expense
  const expenses = getData('expenses');
  expenses.push({ id:uid(), date:today, category:'salary', amount:totalSalary, branch: currentUser.branch||'b1',
    desc: lang==='am'?`የ${today} ወር ደሞዝ ክፍያ`:`Monthly salary payment ${today}` });
  saveData('expenses', expenses);
  // Clear attendance for current cycle
  saveData('attendance', []);
  // Reset cycle start to today
  saveData('payrollCycleStart', today);
  renderHRReport();
  toast(lang==='am'?`✅ ${fmtMoney(totalSalary)} ደሞዝ ተከፍሏል — ዳታ ጠፍቷል`:`✅ ${fmtMoney(totalSalary)} paid — attendance cleared`);
}

async function resetEmployeePassword(username) {
  if (!username) return;
  const pwd = prompt(lang==='am' ? `${username} ላይ አዲስ ፓስዋርድ (ቢያንስ 4 ቁምፊ)` : `New password for ${username} (min 4 chars)`);
  if (!pwd) return;
  if (pwd.length < 4) { toast(lang==='am'?'ፓስዋርድ ቢያንስ 4 ቁምፊ':'Min 4 chars','error'); return; }
  try {
    await apiFetch('/api/users/' + encodeURIComponent(username) + '/password', {
      method: 'PUT',
      body: JSON.stringify({ newPassword: pwd }),
    });
    toast(lang==='am'?'ፓስዋርድ ተቀይሯል ✓':'Password reset ✓');
  } catch (e) {
    toast(e.message, 'error');
  }
}

async function toggleEmployee(id) {
  const emps=getData('employees'); const emp=emps.find(e=>e.id===id); if (!emp) return;
  const newActive = !emp.active;
  try {
    await apiFetch('/api/users/' + encodeURIComponent(emp.username), {
      method: 'PUT',
      body: JSON.stringify({ active: newActive }),
    });
  } catch (e) {
    toast(e.message, 'error'); return;
  }
  emp.active = newActive;
  saveData('employees', emps);
  await refreshUsersCache();
  renderHR();
  toast(emp.active?(lang==='am'?'ሠራተኛ ነቅቷል':'Enabled'):(lang==='am'?'ሠራተኛ ታግዷል':'Disabled'));
}

async function saveEmployee() {
  const name=v('empName'),role=v('empRole'),branch=v('empBranch'),phone=v('empPhone');
  const salary=parseFloat(v('empSalary'))||0,start=v('empStart'),username=v('empUsername'),password=v('empPassword');
  if (!name||!role||!username||!password) { toast('Fill all','error'); return; }
  try {
    await apiFetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ username, password, name, role, branch, phone, active: true }),
    });
  } catch (e) {
    toast(e.message === 'Username already exists' ? (lang==='am'?'ይህ ስም አሁን ተጠቅሟል':'Username taken') : e.message, 'error');
    return;
  }
  const emps=getData('employees');
  emps.push({id:uid(),name,role,branch,phone,salary,start,username,active:true});
  saveData('employees',emps);
  await refreshUsersCache();
  closeModal('hrModal'); renderHR(); toast(lang==='am'?'ሠራተኛ ተመዘገበ ✓':'Employee added ✓');
}

// ── ATTENDANCE ─────────────────────────────────────────────────
function renderAttendance() {
  const atts = getData('attendance'), today = new Date().toISOString().slice(0,10);
  const myToday = atts.find(a => (a.userId===currentUser.id || a.username===currentUser.username) && a.date===today);
  const btnIn  = document.getElementById('btnSelfCheckIn');
  const btnOut = document.getElementById('btnSelfCheckOut');

  if (myToday) {
    // Already checked in
    btnIn.textContent  = `✅ ${lang==='am'?'ገብቷ':'Checked in'}: ${myToday.checkIn}`;
    btnIn.disabled = true; btnIn.style.opacity = '0.55';
    if (btnOut) {
      if (myToday.checkOut) {
        btnOut.textContent = `🚪 ${lang==='am'?'ወጥቷ':'Left'}: ${myToday.checkOut}`;
        btnOut.disabled = true; btnOut.style.opacity = '0.55'; btnOut.style.display = 'inline-flex';
      } else {
        btnOut.style.display = 'inline-flex'; btnOut.disabled = false; btnOut.style.opacity = '1';
        btnOut.textContent = lang==='am' ? '🚪 ሥራ ወጣሁ' : '🚪 Check Out';
      }
    }
  } else {
    btnIn.textContent = t('checkIn'); btnIn.disabled = false; btnIn.style.opacity = '1';
    if (btnOut) { btnOut.style.display = 'none'; }
  }

  // History
  const myAtts = atts.filter(a => a.userId===currentUser.id || a.username===currentUser.username)
    .sort((a,b) => b.date.localeCompare(a.date)).slice(0, 30);
  const h = lang==='am' ? ['ቀን','ገብቷ','ወጥቷ','ቆይታ'] : ['Date','Check In','Check Out','Duration'];
  document.getElementById('myAttThead').innerHTML = `<tr>${h.map(x=>`<th>${x}</th>`).join('')}</tr>`;
  document.getElementById('myAttTbody').innerHTML = myAtts.length
    ? myAtts.map(a => {
        const dur = calcDuration(a.checkIn, a.checkOut);
        const outCell = a.checkOut
          ? `<span style="color:#FF9090">${a.checkOut}</span>`
          : `<span style="color:rgba(197,203,216,0.35)">—</span>`;
        return `<tr>
          <td>${a.date}</td>
          <td><span style="color:#80D080">${a.checkIn||a.time||'—'}</span></td>
          <td>${outCell}</td>
          <td style="color:var(--gold)">${dur}</td>
        </tr>`;
      }).join('')
    : noDataRow(4);
}

function calcDuration(checkIn, checkOut) {
  if (!checkIn || !checkOut) return '—';
  try {
    const toMin = t => { const [h,m,s] = t.split(':').map(Number); return h*60+m+(s||0)/60; };
    const diff = toMin(checkOut) - toMin(checkIn);
    if (diff < 0) return '—';
    const h = Math.floor(diff/60), m = Math.round(diff%60);
    return lang==='am' ? `${h}ሰ ${m}ደ` : `${h}h ${m}m`;
  } catch { return '—'; }
}

function selfCheckIn() {
  const atts = getData('attendance'), today = new Date().toISOString().slice(0,10);
  if (atts.find(a => (a.userId===currentUser.id||a.username===currentUser.username) && a.date===today)) {
    toast(t('alreadyChecked'), 'error'); return;
  }
  const time = new Date().toLocaleTimeString('am-ET', {hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false});
  atts.push({ id:uid(), userId:currentUser.id, username:currentUser.username, name:currentUser.name, date:today, time, checkIn:time });
  saveData('attendance', atts);
  renderAttendance();
  toast(lang==='am' ? `✅ ስራ ገብቷ — ${time}` : `✅ Checked in — ${time}`);
}

function selfCheckOut() {
  const atts = getData('attendance'), today = new Date().toISOString().slice(0,10);
  const rec = atts.find(a => (a.userId===currentUser.id||a.username===currentUser.username) && a.date===today);
  if (!rec) { toast(lang==='am'?'ቀድሞ አልገቡም':'You haven\'t checked in','error'); return; }
  if (rec.checkOut) { toast(lang==='am'?'ቀድሞ ወጥቷ':'Already checked out','error'); return; }
  const time = new Date().toLocaleTimeString('am-ET', {hour:'2-digit',minute:'2-digit',second:'2-digit',hour12:false});
  rec.checkOut = time;
  saveData('attendance', atts);
  renderAttendance();
  const dur = calcDuration(rec.checkIn, time);
  toast(lang==='am' ? `🚪 ወጥቷ — ${time} (${dur})` : `🚪 Checked out — ${time} (${dur})`);
}

// ── REPORTS ────────────────────────────────────────────────────
let currentReportCat = 'sales';
let currentReportPeriod = 'daily';

function renderReports() {
  const catLabelEl = document.getElementById('reportCatLabel');
  if (catLabelEl) catLabelEl.textContent = lang==='am' ? 'ዓይነት ይምረጡ' : 'Choose a Category';

  const categories = [
    { id:'sales',      icon:'🛍️', name: lang==='am'?'ሽያጭ':'Sales',           sub: lang==='am'?'ዕለታዊ/ሳምንታዊ/ወርሃዊ':'Daily/Weekly/Monthly', periods:true },
    { id:'production',  icon:'📊', name: lang==='am'?'ምርት':'Production',      sub: lang==='am'?'ቆረጣ • ስፌት • ክምችት':'Cutting • Sewing • Stock', periods:true },
    { id:'finance',     icon:'💰', name: lang==='am'?'ፋይናንስ':'Finance',       sub: lang==='am'?'ገቢ • ወጪ • ትርፍ':'Revenue • Expense • Profit', periods:true },
    { id:'hr',          icon:'👥', name: lang==='am'?'HR':'HR',               sub: lang==='am'?'ሰራተኞች • ስራ ሂደት':'Staff • Attendance', periods:true },
    { id:'branch',      icon:'🏪', name: lang==='am'?'ቅርንጫፍ':'Branch',        sub: lang==='am'?'ዕለታዊ/ሳምንታዊ/ወርሃዊ ገቢ':'Daily/Weekly/Monthly revenue', periods:true },
    { id:'procurement', icon:'🛒', name: lang==='am'?'ግዥ':'Procurement',      sub: lang==='am'?'ትዕዛዞች • ወጪ • አቅርቦት':'Orders • Spend • Suppliers', periods:true },
  ];

  const gridEl = document.getElementById('reportCatGrid');
  if (gridEl) {
    gridEl.innerHTML = categories.map(c => `
      <div class="report-cat-card ${currentReportCat===c.id?'active':''}" data-cat="${c.id}" onclick="selectReportCategory('${c.id}')">
        <div class="report-cat-icon">${c.icon}</div>
        <div class="report-cat-name">${c.name}</div>
        <div class="report-cat-sub">${c.sub}</div>
      </div>`).join('');
  }

  selectReportCategory(currentReportCat, true);
}

function selectReportCategory(catId, skipReset) {
  currentReportCat = catId;
  if (!skipReset) currentReportPeriod = 'daily';

  // Update card active states
  document.querySelectorAll('.report-cat-card').forEach(card => {
    card.classList.toggle('active', card.dataset.cat === catId);
  });

  const periodRow = document.getElementById('reportPeriodRow');
  const needsPeriods = true; // every category, including branch, now supports period filtering
  if (periodRow) {
    if (needsPeriods) {
      const periods = [
        { id:'daily',   label: lang==='am'?'📅 ዕለታዊ':'📅 Daily' },
        { id:'weekly',  label: lang==='am'?'📆 ሳምንታዊ':'📆 Weekly' },
        { id:'monthly', label: lang==='am'?'🗓️ ወርሃዊ':'🗓️ Monthly' },
      ];
      periodRow.style.display = 'flex';
      periodRow.innerHTML = `<span class="report-period-label">${lang==='am'?'ጊዜ':'Period'}</span>` +
        periods.map(p => `<button class="report-period-btn ${currentReportPeriod===p.id?'active':''}" data-period="${p.id}" onclick="selectReportPeriod('${p.id}')">${p.label}</button>`).join('');
    } else {
      periodRow.style.display = 'none';
      periodRow.innerHTML = '';
    }
  }

  generateReport(catId, currentReportPeriod);
}

function selectReportPeriod(periodId) {
  currentReportPeriod = periodId;
  document.querySelectorAll('.report-period-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.period === periodId);
  });
  generateReport(currentReportCat, periodId);
}

function generateReport(category, period) {
  const container=document.getElementById('reportContent');
  const today=new Date(), todayStr=today.toISOString().slice(0,10);
  const branches=getData('branches');
  let html='';

  // Compute date range based on period (applies to every category)
  const periodLabel = period==='daily' ? (lang==='am'?'ዕለታዊ':'Daily')
    : period==='weekly' ? (lang==='am'?'ሳምንታዊ':'Weekly')
    : (lang==='am'?'ወርሃዊ':'Monthly');
  const inPeriod = (dateStr) => {
    if (period==='daily') return dateStr===todayStr;
    if (period==='weekly') { const w=new Date(today-7*86400000).toISOString().slice(0,10); return dateStr>=w; }
    return dateStr.startsWith(todayStr.slice(0,7)); // monthly
  };

  if (category==='sales') {
    const sales=getData('sales').filter(s=>!s.isWholesale);
    const refunds=getData('refunds');
    const wholesaleAll=getData('wholesale');
    let filtered = sales.filter(s=>inPeriod(s.date));
    let filteredRef = refunds.filter(r=>inPeriod(r.date));
    let filteredWs = wholesaleAll.filter(w=>w.status==='approved' && inPeriod(w.date));
    const label = lang==='am' ? `🛍️ ሽያጭ — ${periodLabel} ሪፖርት` : `🛍️ Sales — ${periodLabel} Report`;
    // Exclude production site (b1) from sales reports
    filtered = filtered.filter(s => { const br=branches.find(b=>b.id===s.branch); return !br||!br.noSales; });
    const retailTotal=filtered.reduce((a,x)=>a+(x.qty*x.price),0);
    const wsTotal=filteredWs.reduce((a,w)=>a+w.total,0);
    const total=retailTotal+wsTotal;
    const refTotal=filteredRef.reduce((a,r)=>a+(r.financialDiff||r.origTotal||0),0);
    const netTotal=total-refTotal;
    html=`<div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
        <h3 class="card-title">${label} — ${todayStr}</h3>
        <button class="btn-gold" onclick="window.print()">&#x1F5A8;&#xFE0F; Print</button>
      </div>
      <div class="dash-kpis" style="margin-bottom:14px">
        <div class="kpi-card"><div class="kpi-icon">&#x1F4B5;</div><div class="kpi-val">${fmtMoney(total)}</div><div class="kpi-label">${lang==='am'?'ጠቅላላ ሽያጭ (ኖርማል+ጅምላ)':'Gross Sales (Retail+Wholesale)'}</div></div>
        <div class="kpi-card"><div class="kpi-icon">🛍️</div><div class="kpi-val">${fmtMoney(retailTotal)}</div><div class="kpi-label">${lang==='am'?'ኖርማል ሽያጭ':'Retail Sales'}</div></div>
        <div class="kpi-card" style="border-color:rgba(79,195,247,0.35)"><div class="kpi-icon">🏪</div><div class="kpi-val" style="color:#4FC3F7">${fmtMoney(wsTotal)}</div><div class="kpi-label">${lang==='am'?`ጅምላ ሽያጭ (${filteredWs.length})`:`Wholesale (${filteredWs.length})`}</div></div>
        <div class="kpi-card"><div class="kpi-icon">&#x1F6CD;&#xFE0F;</div><div class="kpi-val">${filtered.length+filteredWs.length}</div><div class="kpi-label">${lang==='am'?'ሽያጭ ብዛት':'Transactions'}</div></div>
        ${filteredRef.length?`<div class="kpi-card" style="border-color:rgba(224,90,90,0.3)"><div class="kpi-icon">&#x1F504;</div><div class="kpi-val" style="color:#FF9090">-${fmtMoney(refTotal)}</div><div class="kpi-label">${lang==='am'?`ሪፈንድ (${filteredRef.length})`:`Refunds (${filteredRef.length})`}</div></div>`:''}
        <div class="kpi-card" style="border-color:rgba(100,220,100,0.4)"><div class="kpi-icon">✅</div><div class="kpi-val" style="color:#80e080">${fmtMoney(netTotal)}</div><div class="kpi-label">${lang==='am'?'ተጣራ ሽያጭ':'Net Sales'}</div></div>
      </div>
      <h4 style="color:var(--gold);margin-bottom:8px">🛍️ ${lang==='am'?'ኖርማል ሽያጭ':'Retail Sales'}</h4>
      <table class="data-table"><thead><tr><th>${lang==='am'?'ቀን':'Date'}</th><th>${lang==='am'?'ምርት':'Product'}</th><th>${lang==='am'?'ብዛት':'Qty'}</th><th>${lang==='am'?'ዋጋ':'Price'}</th><th>${lang==='am'?'ጠቅላላ':'Total'}</th><th>${lang==='am'?'አከፋፈል':'Payment'}</th><th>${lang==='am'?'ቅርንጫፍ':'Branch'}</th></tr></thead>
      <tbody>${filtered.length?filtered.map(r=>{const br=branches.find(b=>b.id===r.branch);const refBadge=r.fullyRefunded?`<span style="font-size:10px;color:#FF9090;margin-left:4px">(${lang==='am'?'ሪፈንድ':'refunded'})</span>`:r.refundedQty?`<span style="font-size:10px;color:#FFA726;margin-left:4px">(${lang==='am'?'ከፊል':'partial'})</span>`:'';return`<tr style="${r.fullyRefunded?'opacity:0.5;text-decoration:line-through':''}"><td>${r.date}</td><td>${r.product}${refBadge}</td><td>${r.qty}</td><td>${fmtMoney(r.price)}</td><td>${fmtMoney(r.qty*r.price)}</td><td><span class="badge badge-${r.payment}">${T[lang].payTypes[r.payment]}</span></td><td>${br?br.name:r.branch}</td></tr>`;}).join(''):noDataRow(7)}</tbody></table>
      ${filteredWs.length?`<div style="margin-top:18px"><h4 style="color:#4FC3F7;margin-bottom:8px">🏪 ${lang==='am'?'የጅምላ ሽያጭ':'Wholesale Sales'}</h4>
        <table class="data-table"><thead><tr><th>${lang==='am'?'ቀን':'Date'}</th><th>${lang==='am'?'ነጋዴ':'Trader'}</th><th>${lang==='am'?'ምርት':'Product'}</th><th>${lang==='am'?'ብዛት':'Qty'}</th><th>${lang==='am'?'ጠቅላላ':'Total'}</th><th>${lang==='am'?'አከፋፈል':'Payment'}</th><th>${lang==='am'?'ቅርንጫፍ':'Branch'}</th></tr></thead>
        <tbody>${filteredWs.map(w=>{const br=branches.find(b=>b.id===w.branch);return`<tr><td>${w.date}</td><td>${w.customer}</td><td>${w.product}</td><td>${w.qty}</td><td style="color:#4FC3F7;font-weight:700">${fmtMoney(w.total)}</td><td><span class="badge">${w.payment}</span></td><td>${br?br.name:w.branch}</td></tr>`;}).join('')}</tbody></table>
        <div style="text-align:right;margin-top:8px;font-size:12px;color:#4FC3F7;font-weight:700">${lang==='am'?'ጠቅላላ ጅምላ':'Total Wholesale'}: ${fmtMoney(wsTotal)}</div>
      </div>`:''}
      ${filteredRef.length?`<div style="margin-top:16px"><h4 style="color:#FF9090;margin-bottom:8px">&#x1F504; ${lang==='am'?'ሪፈንዶች':'Refunds'}</h4>
        <table class="data-table"><thead><tr><th>${lang==='am'?'ቀን':'Date'}</th><th>${lang==='am'?'ምርት':'Product'}</th><th>${lang==='am'?'ብዛት':'Qty'}</th><th>${lang==='am'?'አይነት':'Type'}</th><th>${lang==='am'?'ሂሳብ':'Amount'}</th><th>${lang==='am'?'ምክንያት':'Reason'}</th><th>${lang==='am'?'ደንበኛ':'Customer'}</th><th>${lang==='am'?'ቅርንጫፍ':'Branch'}</th></tr></thead>
        <tbody>${filteredRef.map(r=>{const br=branches.find(b=>b.id===r.branch);const typeLabel=r.type==='exchange'?(lang==='am'?'ልውውጥ':'Exchange'):(lang==='am'?'ሂሳብ ተመላሽ':'Refund');const amtLabel=r.type==='exchange'?(r.financialDiff>0?`-${fmtMoney(r.financialDiff)}`:r.financialDiff<0?`+${fmtMoney(Math.abs(r.financialDiff))}`:(lang==='am'?'እኩል':'even')):`-${fmtMoney(r.origTotal||0)}`;return`<tr><td>${r.date}</td><td>${r.product} ×${r.qty}</td><td>${r.qty}</td><td><span class="badge badge-damage">${typeLabel}</span></td><td style="color:#FF9090;font-weight:700">${amtLabel}</td><td>${r.reason||'—'}</td><td>${r.customer||'—'}</td><td>${br?br.name:r.branch}</td></tr>`;}).join('')}</tbody></table>
        <div style="text-align:right;margin-top:8px;font-size:13px;font-weight:700;color:#80e080">
          ${lang==='am'?'ተጣራ ሽያጭ':'Net Sales'}: ${fmtMoney(netTotal)}
        </div>
      </div>`:''}
    </div>`;

  } else if (category==='branch') {
    // Per-branch sales report (retail + wholesale combined) — exclude noSales branches
    const sales=getData('sales').filter(s=>!s.isWholesale && inPeriod(s.date));
    const refunds=getData('refunds').filter(r=>inPeriod(r.date));
    const wsAll=getData('wholesale').filter(w=>w.status==='approved' && inPeriod(w.date));
    const salesBranches = branches.filter(b => !b.noSales);
    const label = lang==='am' ? `🏪 ቅርንጫፍ — ${periodLabel} ሪፖርት` : `🏪 Branch — ${periodLabel} Report`;
    const retailGrossGrand = sales.reduce((a,x)=>a+(x.qty*x.price),0);
    const refGrand = refunds.reduce((a,r)=>a+(r.financialDiff||r.origTotal||0),0);
    const retailGrand = Math.max(0, retailGrossGrand - refGrand);
    const wsGrand = wsAll.reduce((a,w)=>a+w.total,0);
    const grandTotal = retailGrand + wsGrand;
    html=`<div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
        <h3 class="card-title">${label} — ${todayStr}</h3>
        <button class="btn-gold" onclick="window.print()">&#x1F5A8;&#xFE0F; Print</button>
      </div>
      <div class="dash-kpis" style="margin-bottom:6px">
        ${salesBranches.map(b=>{
          const bSales=sales.filter(s=>s.branch===b.id);
          const bRefForBranch=refunds.filter(r=>r.branch===b.id);
          const bWsForBranch=wsAll.filter(w=>w.branch===b.id);
          const bRefAmt=bRefForBranch.reduce((a,r)=>a+(r.financialDiff||r.origTotal||0),0);
          const bRetail=Math.max(0, bSales.reduce((a,x)=>a+(x.qty*x.price),0) - bRefAmt);
          const bWs=bWsForBranch.reduce((a,w)=>a+w.total,0);
          const bRev=bRetail+bWs;
          const share = grandTotal>0 ? Math.round((bRev/grandTotal)*100) : 0;
          // Revenue split by how it was paid (cash / transfer / credit) — retail + wholesale combined
          const payAmt = (pm) => Math.max(0, bSales.filter(s=>s.payment===pm).reduce((a,x)=>a+(x.qty*x.price),0) - bRefForBranch.filter(r=>r.payment===pm).reduce((a,r)=>a+(r.financialDiff||r.origTotal||0),0))
                                + bWsForBranch.filter(w=>w.payment===pm).reduce((a,w)=>a+w.total,0);
          const cashAmt = payAmt('cash'), transferAmt = payAmt('transfer'), creditAmt = payAmt('credit');
          const pct = (amt) => bRev>0 ? Math.round((amt/bRev)*100) : 0;
          return `<div class="kpi-card"><div class="kpi-icon">🏪</div><div class="kpi-val">${fmtMoney(bRev)}</div><div class="kpi-label">${b.name}
            <br><small style="color:var(--gold-lt);font-size:10px">${bSales.length} ${lang==='am'?'ሽያጭ':'sales'} • ${share}%</small>
            ${bWs>0?`<br><small style="color:#4FC3F7;font-size:10px">🏪 ${lang==='am'?'ጅምላ':'Wholesale'}: ${fmtMoney(bWs)}</small>`:''}
            <br><small style="color:#80e080;font-size:10px">💵 ${lang==='am'?'ካሽ':'Cash'}: ${fmtMoney(cashAmt)} (${pct(cashAmt)}%)</small>
            <br><small style="color:#4FC3F7;font-size:10px">🔁 ${lang==='am'?'ትራንስፈር':'Transfer'}: ${fmtMoney(transferAmt)} (${pct(transferAmt)}%)</small>
            <br><small style="color:#FFA726;font-size:10px">📇 ${lang==='am'?'ብድር':'Credit'}: ${fmtMoney(creditAmt)} (${pct(creditAmt)}%)</small></div></div>`;
        }).join('')}
      </div>
      <div style="text-align:right;font-size:12px;color:var(--white-dim);margin-bottom:10px">
        ${lang==='am'?'ጠቅላላ':'Grand Total'}: <span style="color:var(--gold);font-weight:700">${fmtMoney(grandTotal)}</span>
        <span style="color:rgba(197,203,216,0.4)"> (🛍️${fmtMoney(retailGrand)} + 🏪${fmtMoney(wsGrand)})</span>
      </div>
      ${salesBranches.map(b=>{
        const bSales=sales.filter(s=>s.branch===b.id).sort((a,c)=>c.date.localeCompare(a.date));
        const bWsList=wsAll.filter(w=>w.branch===b.id).sort((a,c)=>c.date.localeCompare(a.date));
        return `<div style="margin-top:16px"><h4 style="color:var(--gold);margin-bottom:8px">🏪 ${b.name}</h4>
          <table class="data-table"><thead><tr><th>${lang==='am'?'ቀን':'Date'}</th><th>${lang==='am'?'ምርት':'Product'}</th><th>${lang==='am'?'ብዛት':'Qty'}</th><th>${lang==='am'?'ጠቅላላ':'Total'}</th><th>${lang==='am'?'አከፋፈል':'Payment'}</th></tr></thead>
          <tbody>${bSales.length?bSales.map(r=>`<tr><td>${r.date}</td><td>${r.product}</td><td>${r.qty}</td><td>${fmtMoney(r.qty*r.price)}</td><td><span class="badge badge-${r.payment}">${T[lang].payTypes[r.payment]||r.payment}</span></td></tr>`).join(''):noDataRow(5)}</tbody></table>
          ${bWsList.length?`<div style="margin-top:8px;font-size:11px;font-weight:700;color:#4FC3F7">🏪 ${lang==='am'?'ጅምላ ሽያጭ':'Wholesale'}</div>
            <table class="data-table"><thead><tr><th>${lang==='am'?'ቀን':'Date'}</th><th>${lang==='am'?'ነጋዴ':'Trader'}</th><th>${lang==='am'?'ምርት':'Product'}</th><th>${lang==='am'?'ብዛት':'Qty'}</th><th>${lang==='am'?'ጠቅላላ':'Total'}</th><th>${lang==='am'?'አከፋፈል':'Payment'}</th></tr></thead>
            <tbody>${bWsList.map(w=>`<tr><td>${w.date}</td><td>${w.customer}</td><td>${w.product}</td><td>${w.qty}</td><td style="color:#4FC3F7">${fmtMoney(w.total)}</td><td><span class="badge badge-${w.payment}">${T[lang].payTypes[w.payment]||w.payment}</span></td></tr>`).join('')}</tbody></table>`:''}
        </div>`;
      }).join('')}
    </div>`;

  } else if (category==='production') {
    const cutting=getData('cutting').filter(x=>inPeriod(x.date));
    const sewing=getData('sewing').filter(x=>inPeriod(x.date));
    const cuttingDmg=getData('cuttingDamage').filter(x=>inPeriod(x.date));
    const totalCut=cutting.reduce((a,x)=>a+x.qty,0), totalSew=sewing.reduce((a,x)=>a+x.qty,0);
    const cutDmg=cuttingDmg.reduce((a,x)=>a+x.qty,0), sewDmg=sewing.reduce((a,x)=>a+(x.dmgQty||0),0);
    const storeMap=getStoreStockMap(), totalStock=Object.values(storeMap).reduce((a,b)=>a+b,0);
    const label = lang==='am' ? `📊 ምርት — ${periodLabel} ሪፖርት` : `📊 Production — ${periodLabel} Report`;
    html=`<div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
        <h3 class="card-title">${label} — ${todayStr}</h3>
        <button class="btn-gold" onclick="window.print()">&#x1F5A8;&#xFE0F; Print</button>
      </div>
      <div class="dash-kpis">
        <div class="kpi-card"><div class="kpi-icon">✂️</div><div class="kpi-val">${totalCut}</div><div class="kpi-label">${lang==='am'?'ቆረጣ':'Cut'}</div></div>
        <div class="kpi-card"><div class="kpi-icon">🪡</div><div class="kpi-val">${totalSew}</div><div class="kpi-label">${lang==='am'?'ስፌት':'Sewn'}</div></div>
        <div class="kpi-card"><div class="kpi-icon">📦</div><div class="kpi-val">${totalStock}</div><div class="kpi-label">${lang==='am'?'የአሁኑ ክምችት':'Current Stock'}</div></div>
        <div class="kpi-card" style="border-color:rgba(224,90,90,0.3)"><div class="kpi-icon">⚠️</div><div class="kpi-val" style="color:var(--danger)">${cutDmg+sewDmg}</div><div class="kpi-label">${lang==='am'?'ዳሜጅ':'Damage'}</div></div>
      </div>
      <table class="data-table" style="margin-top:14px"><thead><tr><th>${lang==='am'?'ቀን':'Date'}</th><th>${lang==='am'?'ክፍል':'Dept'}</th><th>${lang==='am'?'ምርት':'Product'}</th><th>${lang==='am'?'ብዛት':'Qty'}</th></tr></thead>
      <tbody>${[...cutting.map(x=>({...x,dept:lang==='am'?'ቆረጣ':'Cutting'})),...sewing.map(x=>({...x,dept:lang==='am'?'ስፌት':'Sewing'}))].sort((a,b)=>b.date.localeCompare(a.date)).map(r=>`<tr><td>${r.date}</td><td>${r.dept}</td><td>${r.type||r.product||'—'}</td><td>${r.qty}</td></tr>`).join('')||noDataRow(4)}</tbody></table>
    </div>`;

  } else if (category==='finance') {
    syncProcurementExpenses();
    const sales=getData('sales').filter(x=>!x.isWholesale && inPeriod(x.date));
    const refunds=getData('refunds').filter(x=>inPeriod(x.date));
    const wsAll=getData('wholesale').filter(w=>w.status==='approved' && inPeriod(w.date));
    const expenses=getData('expenses').filter(x=>inPeriod(x.date));
    const raw=getData('raw').filter(x=>inPeriod(x.date));
    const grossRev=sales.reduce((a,x)=>a+(x.qty*x.price),0);
    const refTotal=refunds.reduce((a,r)=>a+(r.financialDiff||r.origTotal||0),0);
    const wsTotal=wsAll.reduce((a,w)=>a+w.total,0);
    const rev=Math.max(0, grossRev - refTotal) + wsTotal;
    const exp=expenses.reduce((a,x)=>a + (Number(x.amount)||0), 0), rawc=raw.reduce((a,x)=>a + (Number(x.cost)||0), 0);
    const profit=rev-exp;
    const label = lang==='am' ? `💰 ፋይናንስ — ${periodLabel} ሪፖርት` : `💰 Finance — ${periodLabel} Report`;
    html=`<div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
        <h3 class="card-title">${label} — ${todayStr}</h3>
        <button class="btn-gold" onclick="window.print()">&#x1F5A8;&#xFE0F; Print</button>
      </div>
      <div class="dash-kpis">
        <div class="kpi-card"><div class="kpi-icon">💵</div><div class="kpi-val">${fmtMoney(rev)}</div><div class="kpi-label">${t('kpiRevenue')}</div></div>
        <div class="kpi-card"><div class="kpi-icon">📤</div><div class="kpi-val" style="color:var(--danger)">${fmtMoney(exp)}</div><div class="kpi-label">${t('kpiExpense')}</div></div>
        <div class="kpi-card"><div class="kpi-icon">${profit>=0?'📈':'📉'}</div><div class="kpi-val" style="color:${profit>=0?'var(--success)':'var(--danger)'}">${fmtMoney(Math.abs(profit))}</div><div class="kpi-label">${t('kpiProfit')}</div></div>
      </div>
      <div style="margin-top:14px"><h4 style="color:var(--gold);margin-bottom:8px">${lang==='am'?'ቅርንጫፍ ወጪ':'Branch Expenses'}</h4>
        <div class="dash-kpis">${branches.map(b=>{const bExp=expenses.filter(e=>e.branch===b.id).reduce((a,x)=>a + (Number(x.amount)||0), 0);return`<div class="kpi-card"><div class="kpi-icon">🏪</div><div class="kpi-val" style="color:var(--danger)">${fmtMoney(bExp)}</div><div class="kpi-label">${b.name}</div></div>`;}).join('')}</div>
      </div>
      <table class="data-table" style="margin-top:14px"><thead><tr><th>${lang==='am'?'ቀን':'Date'}</th><th>${lang==='am'?'ዓይነት':'Type'}</th><th>${lang==='am'?'ዝርዝር':'Detail'}</th><th>${lang==='am'?'ሂሳብ':'Amount'}</th></tr></thead>
      <tbody>${expenses.length?expenses.sort((a,b)=>b.date.localeCompare(a.date)).map(e=>`<tr><td>${e.date}</td><td><span class="badge badge-damage">${lang==='am'?'ወጪ':'Expense'}</span></td><td>${e.category||e.desc||'—'}</td><td style="color:var(--danger)">-${fmtMoney(e.amount)}</td></tr>`).join(''):noDataRow(4)}</tbody>
      ${expenses.length?`<tfoot style="font-weight:700;background:rgba(255,255,255,0.05)"><tr><td colspan="3">${lang==='am'?'አጠቃላይ ድምር ወጪ':'Total Expense'}</td><td style="color:var(--danger)">-${fmtMoney(exp)}</td></tr></tfoot>`:''}</table>
    </div>`;

  } else if (category==='hr') {
    const emps=getData('employees');
    const atts=getData('attendance').filter(a=>inPeriod(a.date));
    const todayAtt=atts.filter(a=>a.date===todayStr);
    const label = lang==='am' ? `👥 HR — ${periodLabel} ሪፖርት` : `👥 HR — ${periodLabel} Report`;
    // Per-employee attendance day count within the period
    const presentDaysMap = {};
    atts.forEach(a => { const key=a.username||a.userId; presentDaysMap[key]=(presentDaysMap[key]||0)+1; });
    html=`<div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
        <h3 class="card-title">${label} — ${todayStr}</h3>
        <button class="btn-gold" onclick="window.print()">&#x1F5A8;&#xFE0F; Print</button>
      </div>
      <div class="dash-kpis">
        <div class="kpi-card"><div class="kpi-icon">👥</div><div class="kpi-val">${emps.filter(e=>e.active).length}</div><div class="kpi-label">${t('kpiEmployees')}</div></div>
        <div class="kpi-card"><div class="kpi-icon">✅</div><div class="kpi-val" style="color:var(--success)">${todayAtt.length}</div><div class="kpi-label">${lang==='am'?'ዛሬ ገቡ':'Present Today'}</div></div>
        <div class="kpi-card"><div class="kpi-icon">❌</div><div class="kpi-val" style="color:var(--danger)">${emps.filter(e=>e.active).length-todayAtt.length}</div><div class="kpi-label">${lang==='am'?'ዛሬ አልገቡም':'Absent Today'}</div></div>
        <div class="kpi-card"><div class="kpi-icon">📋</div><div class="kpi-val">${atts.length}</div><div class="kpi-label">${lang==='am'?`${periodLabel} ምዝገባ`:`${periodLabel} Records`}</div></div>
      </div>
      <table class="data-table" style="margin-top:14px"><thead><tr><th>${lang==='am'?'ስም':'Name'}</th><th>${lang==='am'?'ሚና':'Role'}</th><th>${lang==='am'?'ቅርንጫፍ':'Branch'}</th><th>${lang==='am'?`${periodLabel} ቀን`:`${periodLabel} Days`}</th><th>${lang==='am'?'ዛሬ':'Today'}</th></tr></thead>
      <tbody>${emps.map(e=>{const att=todayAtt.find(a=>a.username===e.username);const br=branches.find(b=>b.id===e.branch);const pDays=presentDaysMap[e.username]||0;return`<tr><td>${e.name}</td><td>${T[lang].roles[e.role]||e.role}</td><td>${br?br.name:(e.branch||'—')}</td><td>${pDays}</td><td>${att?`<span class="badge badge-cash">✅ ${att.time||att.checkIn||''}</span>`:`<span class="badge badge-damage">❌</span>`}</td></tr>`;}).join('')}</tbody></table>
    </div>`;

  } else if (category==='procurement') {
    const orders = getData('procurementOrders').filter(o => inPeriod(o.date));
    const label = lang==='am' ? `🛒 ግዥ — ${periodLabel} ሪፖርት` : `🛒 Procurement — ${periodLabel} Report`;
    const approvedOrders = orders.filter(o => o.status==='approved'||o.status==='received');
    const pendingOrders  = orders.filter(o => o.status==='pending');
    const rejectedOrders = orders.filter(o => o.status==='rejected');
    const totalSpend  = approvedOrders.reduce((a,o) => a+o.cost, 0);
    const pendingSpend = pendingOrders.reduce((a,o) => a+o.cost, 0);
    const supplierMap = {};
    approvedOrders.forEach(o => {
      const s = o.supplier||'—';
      if (!supplierMap[s]) supplierMap[s] = { count:0, spend:0 };
      supplierMap[s].count++;
      supplierMap[s].spend += o.cost;
    });
    const statusBadge = s => s==='approved'||s==='received'
      ? `<span class="badge badge-cash">✅ ${lang==='am'?'ፀደቀ':'Approved'}</span>`
      : s==='pending'
        ? `<span class="badge badge-transfer">⏳ ${lang==='am'?'ፀደቃ ይጠብቃል':'Pending'}</span>`
        : `<span class="badge badge-damage">❌ ${lang==='am'?'ውድቅ':'Rejected'}</span>`;
    html=`<div class="card">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px">
        <h3 class="card-title">${label} — ${todayStr}</h3>
        <button class="btn-gold" onclick="window.print()">&#x1F5A8;&#xFE0F; Print</button>
      </div>
      <div class="dash-kpis" style="margin-bottom:14px">
        <div class="kpi-card"><div class="kpi-icon">📋</div><div class="kpi-val">${orders.length}</div><div class="kpi-label">${lang==='am'?'ጠቅላላ ትዕዛዞች':'Total Orders'}</div></div>
        <div class="kpi-card" style="border-color:rgba(100,220,100,0.4)"><div class="kpi-icon">✅</div><div class="kpi-val" style="color:var(--success)">${approvedOrders.length}</div><div class="kpi-label">${lang==='am'?'የፀደቁ':'Approved'}</div></div>
        <div class="kpi-card" style="border-color:rgba(255,193,7,0.4)"><div class="kpi-icon">⏳</div><div class="kpi-val" style="color:var(--gold)">${pendingOrders.length}</div><div class="kpi-label">${lang==='am'?'ፀደቃ የሚጠብቁ':'Pending'}</div></div>
        <div class="kpi-card" style="border-color:rgba(224,90,90,0.3)"><div class="kpi-icon">❌</div><div class="kpi-val" style="color:var(--danger)">${rejectedOrders.length}</div><div class="kpi-label">${lang==='am'?'የተቀነሱ':'Rejected'}</div></div>
        <div class="kpi-card" style="border-color:rgba(100,220,100,0.4)"><div class="kpi-icon">💵</div><div class="kpi-val" style="color:var(--success)">${fmtMoney(totalSpend)}</div><div class="kpi-label">${lang==='am'?'ፀደቀ ወጪ':'Approved Spend'}</div></div>
        ${pendingOrders.length ? `<div class="kpi-card" style="border-color:rgba(255,193,7,0.3)"><div class="kpi-icon">🕐</div><div class="kpi-val" style="color:var(--gold)">${fmtMoney(pendingSpend)}</div><div class="kpi-label">${lang==='am'?'ፀደቃ ይጠብቃል':'Pending Spend'}</div></div>` : ''}
      </div>
      ${Object.keys(supplierMap).length ? `
      <div style="margin-bottom:16px">
        <h4 style="color:var(--gold);margin-bottom:8px">🏭 ${lang==='am'?'አቅራቢዎች':'Suppliers'}</h4>
        <div class="dash-kpis">${Object.entries(supplierMap).map(([s,d])=>`<div class="kpi-card"><div class="kpi-icon">🏭</div><div class="kpi-val">${fmtMoney(d.spend)}</div><div class="kpi-label">${s}<br><small style="color:var(--blue-lt);font-size:10px">${d.count} ${lang==='am'?'ትዕዛዝ':'orders'}</small></div></div>`).join('')}</div>
      </div>` : ''}
      <table class="data-table"><thead><tr>
        <th>${lang==='am'?'ቀን':'Date'}</th>
        <th>${lang==='am'?'እቃ':'Item'}</th>
        <th>${lang==='am'?'ብዛት':'Qty'}</th>
        <th>${lang==='am'?'ዋጋ':'Cost'}</th>
        <th>${lang==='am'?'አቅራቢ':'Supplier'}</th>
        <th>${lang==='am'?'ቅርንጫፍ':'Branch'}</th>
        <th>${lang==='am'?'ያስገባ':'By'}</th>
        <th>${lang==='am'?'ሁኔታ':'Status'}</th>
      </tr></thead>
      <tbody>${orders.length ? orders.sort((a,b)=>b.date.localeCompare(a.date)).map(o=>{
        const br=branches.find(b=>b.id===o.branch);
        return `<tr><td>${o.date}</td><td>${o.item}</td><td>${o.qty} ${o.unit||''}</td><td>${fmtMoney(o.cost)}</td><td>${o.supplier||'—'}</td><td>${br?br.name:(o.branch||'—')}</td><td>${o.byName||o.by||'—'}</td><td>${statusBadge(o.status)}</td></tr>`;
      }).join('') : noDataRow(8)}</tbody></table>
    </div>`;
  }
  container.innerHTML=html;
}


// ── DELETE APPROVAL SYSTEM ─────────────────────────────────────
// Only owner can delete directly; others submit request
function requestDeleteBtn(dataKey, id) {
  if (currentUser.role==='owner') {
    return `<button class="btn-danger" onclick="directDelete('${dataKey}','${id}')">🗑</button>`;
  }
  return `<button class="btn-warn" onclick="requestDelete('${dataKey}','${id}')">🗑 <span style="font-size:10px">${lang==='am'?'ጠይቅ':'Request'}</span></button>`;
}

function requestDelete(dataKey, id) {
  if (currentUser.role==='owner') { directDelete(dataKey,id); return; }
  const pending=getData('pendingDeletes');
  if (pending.find(p=>p.dataKey===dataKey&&p.recordId===id)) { toast(lang==='am'?'ቀደም ሲል ጠይቀዋል':'Already requested','error'); return; }
  pending.push({id:uid(),dataKey,recordId:id,requestedBy:currentUser.name,date:new Date().toISOString().slice(0,10)});
  saveData('pendingDeletes',pending);
  toast(lang==='am'?'ስረዛ ጥያቄ ተልኳል — ኦነሩ ያፀድቀዋል':'Delete request sent — awaiting owner approval','warning');
}

function directDelete(dataKey, id) {
  if (!confirm(lang==='am'?'ሰርዝ?':'Delete this record?')) return;
  const data=getData(dataKey).filter(r=>r.id!==id);
  saveData(dataKey,data); refreshActivePanel();
  toast(lang==='am'?'ተሰርዟል':'Deleted');
}

function approveDelete(pendingId) {
  const pending=getData('pendingDeletes');
  const req=pending.find(p=>p.id===pendingId); if (!req) return;
  const data=getData(req.dataKey).filter(r=>r.id!==req.recordId);
  saveData(req.dataKey,data);
  saveData('pendingDeletes',pending.filter(p=>p.id!==pendingId));
  refreshActivePanel();
  toast(lang==='am'?'ስረዛ ፀድቋል ✓':'Delete approved ✓');
}

function rejectDelete(pendingId) {
  saveData('pendingDeletes',getData('pendingDeletes').filter(p=>p.id!==pendingId));
  refreshActivePanel(); toast(lang==='am'?'ስረዛ ውድቅ ሆኗል':'Delete rejected');
}

function approvePendingTransfer(pendingId) {
  const pending = getData('pendingTransfers');
  const req = pending.find(p => p.id === pendingId); if (!req) return;
  // The sale is only truly completed once the owner approves the transfer —
  // so stock is deducted right here, at approval time.
  const bs = getData('branchStock');
  (req.items || []).forEach(item => {
    let rem = item.qty;
    for (let i = 0; i < bs.length && rem > 0; i++) {
      if (bs[i].branch === req.branch && bs[i].type === item.product) {
        const d = Math.min(bs[i].qty, rem);
        bs[i].qty -= d; rem -= d;
      }
    }
  });
  saveData('branchStock', bs);

  req.status = 'approved';
  req.approvedAt = new Date().toISOString();
  saveData('pendingTransfers', pending);
  buildSidebar();
  renderDashboard();
  toast(lang==='am'?'✅ ትራንስፈር ፀድቋል — ክምችት ተቀንሷል':'✅ Transfer approved — stock deducted');
}

function rejectPendingTransfer(pendingId) {
  const pending = getData('pendingTransfers');
  saveData('pendingTransfers', pending.filter(p => p.id !== pendingId));
  buildSidebar();
  renderDashboard();
  toast(lang==='am'?'❌ ትራንስፈር ውድቅ ሆኗል':'❌ Transfer rejected', 'error');
}

function staffDismissApproved(pendingId) {
  const pending = getData('pendingTransfers');
  const req = pending.find(p => p.id === pendingId); if (!req) return;

  // Stock was already deducted when the sale was made — just record the confirmed sale now.
  const sales = getData('sales');
  const date = req.date;
  const branch = req.branch;

  (req.items || []).forEach(item => {
    sales.push({
      id: uid(), date, product: item.product, qty: item.qty, price: item.price,
      payment: req.transferVia ? 'transfer' : 'cash',
      transferVia: req.transferVia || '',
      creditCustomer: req.customerName || req.creditCustomer || '',
      branch, note: req.note || '', by: req.by
    });
  });

  saveData('sales', sales);

  // Remove this transfer from pending list
  saveData('pendingTransfers', pending.filter(p => p.id !== pendingId));
  buildSidebar();
  renderSalesReport();
  if (typeof renderSales === 'function') renderSales();
  toast(lang === 'am' ? '✔ ዕቃ ተቀብሎ ለደንበኛ ተሰጠ' : '✔ Received & handed to customer');
}

// ── BRANCHES ───────────────────────────────────────────────────
// ── PRODUCT PRICES ─────────────────────────────────────────────
function renderPrices() {
  const prices = getData('productPrices');
  const el = document.getElementById('priceList');
  if (!el) return;
  el.innerHTML = prices.length ? prices.map(p => `
    <div class="card" style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;padding:14px 18px;flex-wrap:wrap;gap:10px">
      <div style="flex:1;min-width:120px">
        <div style="font-size:15px;font-weight:700;color:var(--white)">${p.type}</div>
        <div style="display:flex;gap:14px;margin-top:5px;flex-wrap:wrap">
          <div>
            <div style="font-size:10px;color:rgba(197,203,216,0.45);font-weight:600;letter-spacing:0.4px">${lang==='am'?'ችርቻሮ':'RETAIL'}</div>
            <div style="font-size:16px;font-weight:700;color:var(--gold)">${fmtMoney(p.price)}</div>
          </div>
          <div>
            <div style="font-size:10px;color:rgba(197,203,216,0.45);font-weight:600;letter-spacing:0.4px">${lang==='am'?'ጅምላ':'WHOLESALE'}</div>
            <div style="font-size:16px;font-weight:700;color:${p.wholesalePrice ? '#4FC3F7' : 'rgba(197,203,216,0.25)'}">
              ${p.wholesalePrice ? fmtMoney(p.wholesalePrice) : (lang==='am'?'—  (አልተቀመጠም)':'— (not set)')}
            </div>
          </div>
        </div>
      </div>
      <div style="display:flex;align-items:center;gap:8px">
        <button onclick="openEditPriceModal('${p.type}',${p.price},${p.wholesalePrice||0})" style="padding:5px 14px;border-radius:8px;border:1px solid rgba(201,168,76,0.4);background:rgba(201,168,76,0.08);color:var(--gold);cursor:pointer;font-family:inherit;font-size:12px">${lang==='am'?'አስተካክል':'Edit'}</button>
        <button onclick="deletePrice('${p.type}')" style="padding:5px 10px;border-radius:8px;border:1px solid rgba(224,90,90,0.3);background:rgba(224,90,90,0.07);color:#FF9090;cursor:pointer;font-size:12px">🗑</button>
      </div>
    </div>`).join('')
  : `<div class="card" style="text-align:center;color:var(--white-dim);padding:30px">${lang==='am'?'ዋጋ አልተቀመጠም':'No prices set yet'}</div>`;
}

function openAddPriceModal() {
  document.getElementById('priceModalTitle').textContent = lang==='am'?'ምርት ዋጋ ጨምር':'Add Product Price';
  document.getElementById('priceEditType').value = '';
  document.getElementById('priceTypeName').value = '';
  document.getElementById('priceTypeName').readOnly = false;
  document.getElementById('priceAmount').value = '';
  const ws = document.getElementById('priceWholesaleAmount'); if (ws) ws.value = '';
  openModal('priceModal');
}

function openEditPriceModal(type, price, wholesalePrice) {
  document.getElementById('priceModalTitle').textContent = lang==='am'?'ዋጋ አስተካክል':'Edit Price';
  document.getElementById('priceEditType').value = type;
  document.getElementById('priceTypeName').value = type;
  document.getElementById('priceTypeName').readOnly = true;
  document.getElementById('priceAmount').value = price;
  const ws = document.getElementById('priceWholesaleAmount');
  if (ws) ws.value = wholesalePrice || '';
  openModal('priceModal');
}

function savePrice() {
  const editType = document.getElementById('priceEditType').value;
  const typeName = document.getElementById('priceTypeName').value.trim();
  const amount = parseFloat(document.getElementById('priceAmount').value);
  if (!typeName || !amount || amount <= 0) { toast(lang==='am'?'ስም እና ዋጋ ያስፈልጋል':'Name and price required','error'); return; }
  const wholesaleAmount = parseFloat(document.getElementById('priceWholesaleAmount')?.value) || 0;
  const prices = getData('productPrices');
  const key = editType || typeName;
  const existing = prices.findIndex(p => p.type === key);
  const entry = { type: key, price: amount };
  if (wholesaleAmount > 0) entry.wholesalePrice = wholesaleAmount;
  if (existing >= 0) prices[existing] = entry;
  else prices.push(entry);
  saveData('productPrices', prices);
  closeModal('priceModal');
  renderPrices();
  toast(lang==='am'?'ዋጋ ተቀምጧል ✓':'Price saved ✓');
}

function deletePrice(type) {
  const prices = getData('productPrices').filter(p => p.type !== type);
  saveData('productPrices', prices);
  renderPrices();
  toast(lang==='am'?'ዋጋ ተሰርዟል':'Price deleted');
}

function getProductPrice(type) {
  const prices = getData('productPrices');
  const found = prices.find(p => p.type === type);
  return found ? found.price : 0;
}

function toggleBranchActive(id) {
  const branches = getData('branches');
  const b = branches.find(x=>x.id===id);
  if (!b) return;
  b.active = b.active === false ? true : false;
  saveData('branches', branches);
  renderBranchMgmt();
  renderDashboard();
  const msg = b.active
    ? (lang==='am'?'ቅርንጫፍ ተከፍቷል':'Branch activated')
    : (lang==='am'?'ቅርንጫፍ ታግዷል':'Branch deactivated');
  toast(msg);
}

function renderBranchMgmt() {
  const branches = getData('branches');
  const employees = getData('employees');
  const sales = getData('sales');
  const el = document.getElementById('branchMgmtList');
  if (!el) return;

  el.innerHTML = branches.map(b => {
    const isActive = b.active !== false;
    const branchEmps = employees.filter(e => e.branch === b.id);
    const bRev = sales.filter(s=>s.branch===b.id).reduce((a,x)=>a+(x.qty*x.price),0);

    const empRows = branchEmps.length === 0
      ? `<div style="color:var(--white-dim);font-size:12px;padding:10px 0;text-align:center">— ${lang==='am'?'ሠራተኛ የለም':'No employees'} —</div>`
      : branchEmps.map(e => {
          return `<div style="display:flex;align-items:center;justify-content:space-between;padding:8px 10px;background:rgba(255,255,255,0.03);border-radius:8px;margin-bottom:6px;gap:8px;flex-wrap:wrap">
            <div>
              <div style="font-size:13px;font-weight:600;color:var(--white)">${e.name}</div>
              <div style="font-size:11px;color:var(--white-dim)">${T[lang].roles[e.role]||e.role} · ${e.phone||''}</div>
            </div>
            <div style="display:flex;align-items:center;gap:6px;font-size:11px;background:rgba(201,168,76,0.08);border:1px solid rgba(201,168,76,0.2);padding:4px 10px;border-radius:8px;color:var(--gold-lt);font-family:monospace">
              👤 ${e.username||'—'}
              <button class="btn-sm" onclick="resetEmployeePassword('${e.username}')">🔑 ${lang==='am'?'ቀይር':'Reset'}</button>
            </div>
          </div>`;
        }).join('');

    return `<div class="card" style="margin-bottom:14px;${!isActive?'opacity:0.6':''}">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;flex-wrap:wrap;gap:8px">
        <div>
          <div style="font-size:16px;font-weight:700;color:var(--gold-lt)">${b.name}</div>
          <div style="font-size:11px;color:var(--white-dim);margin-top:2px">📍 ${b.location} &nbsp;·&nbsp; 💰 ${fmtMoney(bRev)}</div>
        </div>
        <div style="display:flex;gap:8px;align-items:center">
          <span style="font-size:10px;padding:3px 8px;border-radius:8px;border:1px solid ${isActive?'rgba(76,175,80,0.4)':'rgba(224,90,90,0.4)'};background:${isActive?'rgba(76,175,80,0.08)':'rgba(224,90,90,0.08)'};color:${isActive?'#4CAF50':'#E05A5A'}">${isActive?(lang==='am'?'ንቁ':'Active'):(lang==='am'?'ታግዷል':'Inactive')}</span>
          <button onclick="openEditBranchFull('${b.id}')" title="${lang==='am'?'አስተካክል':'Edit'}" style="width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-size:12px;border-radius:7px;border:1px solid rgba(201,168,76,0.4);background:rgba(201,168,76,0.08);color:var(--gold);cursor:pointer;font-family:inherit">✏️</button>
          <button onclick="toggleBranchActive('${b.id}')" style="font-size:11px;padding:4px 12px;border-radius:7px;border:1px solid ${isActive?'rgba(224,90,90,0.35)':'rgba(76,175,80,0.35)'};background:transparent;color:${isActive?'#FF9090':'#4CAF50'};cursor:pointer;font-family:inherit">${isActive?(lang==='am'?'አግድ':'Deactivate'):(lang==='am'?'አንቃ':'Activate')}</button>
          <button onclick="deleteBranchDirect('${b.id}')" title="${lang==='am'?'ሙሉ በሙሉ ሰርዝ':'Delete permanently'}" style="width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-size:12px;border-radius:7px;border:1px solid rgba(224,90,90,0.4);background:rgba(224,90,90,0.1);color:#FF9090;cursor:pointer;font-family:inherit">🗑</button>
        </div>
      </div>
      <div style="font-size:12px;font-weight:600;color:var(--gold);margin-bottom:8px">👥 ${lang==='am'?'ሠራተኞች':'Employees'} (${branchEmps.length})</div>
      ${empRows}
    </div>`;
  }).join('') || `<div class="card" style="text-align:center;color:var(--white-dim)">${lang==='am'?'ቅርንጫፍ የለም':'No branches found'}</div>`;
}

function openAddBranchFull() {
  document.getElementById('abfEditId').value = '';
  document.getElementById('addBranchFullTitle').textContent = lang==='am'?'ቅርንጫፍ ጨምር':'Add Branch';
  document.getElementById('abfEmpSection').style.display = '';
  document.getElementById('abfName').value = '';
  document.getElementById('abfLocation').value = '';
  document.getElementById('abfAddEmp').checked = false;
  document.getElementById('abfEmpFields').style.display = 'none';
  ['abfEmpName','abfEmpPhone','abfEmpUser','abfEmpPwd','abfEmpSalary','abfEmpStart'].forEach(id=>{
    const el=document.getElementById(id); if(el) el.value='';
  });
  document.getElementById('abfEmpStart').value = new Date().toISOString().slice(0,10);
  openModal('addBranchFullOverlay');
}

function openEditBranchFull(id) {
  const b = getData('branches').find(x => x.id === id);
  if (!b) return;
  document.getElementById('abfEditId').value = id;
  document.getElementById('addBranchFullTitle').textContent = lang==='am'?'✏️ ቅርንጫፍ አስተካክል':'✏️ Edit Branch';
  document.getElementById('abfEmpSection').style.display = 'none'; // adding an employee doesn't make sense while editing
  document.getElementById('abfName').value = b.name;
  document.getElementById('abfLocation').value = b.location || '';
  openModal('addBranchFullOverlay');
}

function toggleBranchEmpFields() {
  const checked = document.getElementById('abfAddEmp').checked;
  document.getElementById('abfEmpFields').style.display = checked ? 'block' : 'none';
}

async function saveAddBranchFull() {
  const editId = document.getElementById('abfEditId').value;
  const name = document.getElementById('abfName').value.trim();
  const location = document.getElementById('abfLocation').value.trim();
  if (!name) { toast(lang==='am'?'የቅርንጫፍ ስም ያስፈልጋል':'Branch name required','error'); return; }

  if (editId) {
    const branches = getData('branches');
    const b = branches.find(x => x.id === editId);
    if (!b) return;
    b.name = name;
    b.location = location || name;
    saveData('branches', branches);
    closeModal('addBranchFullOverlay');
    renderBranchMgmt();
    toast(lang==='am'?'✅ ቅርንጫፍ ተስተካክሏል':'Branch updated ✓');
    return;
  }

  const branches = getData('branches');
  const newBranch = { id:'b'+Date.now(), name, location: location||name, active:true };
  branches.push(newBranch);
  saveData('branches', branches);

  const addEmp = document.getElementById('abfAddEmp').checked;
  if (addEmp) {
    const empName = document.getElementById('abfEmpName').value.trim();
    const phone = document.getElementById('abfEmpPhone').value.trim();
    const username = document.getElementById('abfEmpUser').value.trim();
    const password = document.getElementById('abfEmpPwd').value.trim();
    const salary = parseFloat(document.getElementById('abfEmpSalary').value)||0;
    const start = document.getElementById('abfEmpStart').value || new Date().toISOString().slice(0,10);

    if (!empName || !username || !password) {
      toast(lang==='am'?'የሠራተኛ ስም፣ username እና ፓስዋርድ ያስፈልጋል':'Employee name, username & password required','error');
      return;
    }
    const users = getData('users');
    if (users.find(u=>u.username===username)) {
      toast(lang==='am'?'ይህ username ቀድሞ አለ':'Username already exists','error'); return;
    }
    try {
      await apiFetch('/api/users', {
        method: 'POST',
        body: JSON.stringify({ username, password, name: empName, role: 'sales', branch: newBranch.id, phone, active: true }),
      });
    } catch (e) {
      toast(e.message === 'Username already exists' ? (lang==='am'?'ይህ username ቀድሞ አለ':'Username already exists') : e.message, 'error');
      return;
    }
    const emps = getData('employees');
    emps.push({id:uid(), name:empName, role:'sales', branch:newBranch.id, phone, salary, start, username, active:true});
    saveData('employees', emps);
    await refreshUsersCache();
  }

  closeModal('addBranchFullOverlay');
  renderBranchMgmt();
  toast(lang==='am'?'ቅርንጫፍ ተጨምሯል ✓':'Branch added ✓');
}

function deleteBranchDirect(id) {
  const employees = getData('employees'), sales = getData('sales');
  if (employees.some(e=>e.branch===id) || sales.some(s=>s.branch===id)) {
    toast(lang==='am'?'ይህ ቅርንጫፍ ሠራተኞች/ሽያጭ ስላለው ማጥፋት አይቻልም — ይልቅ "አግድ" ይጠቀሙ':'This branch has employees/sales — deactivate it instead of deleting','error');
    return;
  }
  if (!confirm(lang==='am'?'ይህን ቅርንጫፍ ሙሉ በሙሉ ማጥፋት ይፈልጋሉ?':'Permanently delete this branch?')) return;
  saveData('branches', getData('branches').filter(b => b.id !== id));
  renderBranchMgmt();
  toast(lang==='am'?'🗑 ቅርንጫፍ ተሰርዟል':'Branch deleted');
}

function getBranchName(bid) {
  if (bid==='all') return lang==='am'?'ሁሉም ቅርንጫፎች':'All Branches';
  const b=getData('branches').find(x=>x.id===bid);
  return b?b.name:bid;
}

function populateBranchSelect(selId) {
  const branches = getData('branches');
  // If called with a specific element ID (e.g. expense/HR dropdowns)
  if (selId) {
    const el = document.getElementById(selId);
    if (el) el.innerHTML = branches.map(b=>`<option value="${b.id}">${b.name}</option>`).join('');
    return;
  }
  // Login branch selector — active branches only
  const sel = document.getElementById('loginBranch');
  if (!sel) return;
  const label = lang === 'am' ? 'ብራንች ይምረጡ' : 'Select Branch';
  const lbl = document.getElementById('lblBranchSelect');
  if (lbl) lbl.textContent = label;
  sel.innerHTML = `<option value="">-- ${label} --</option>`;
  branches.filter(b => b.active !== false && !b.noSales).forEach(b => {
    const opt = document.createElement('option');
    opt.value = b.id;
    opt.textContent = b.name;
    sel.appendChild(opt);
  });
}

// ── CHANGE PASSWORD ────────────────────────────────────────────
function openChangePassword() { openModal('changePwdOverlay'); }

function openEditMyInfo() {
  document.getElementById('editInfoName').value = currentUser.name || '';
  document.getElementById('editInfoUsername').value = currentUser.username || '';
  document.getElementById('editInfoPhone').value = currentUser.phone || '';
  document.getElementById('editInfoConfirmPwd').value = '';
  const errEl = document.getElementById('editInfoError'); if (errEl) errEl.classList.add('hidden');
  openModal('editMyInfoOverlay');
}

async function saveEditMyInfo() {
  const newName = v('editInfoName').trim();
  const newUsername = v('editInfoUsername').trim();
  const newPhone = v('editInfoPhone').trim();
  const confirmPwd = v('editInfoConfirmPwd');
  const errEl = document.getElementById('editInfoError'); errEl.classList.add('hidden');

  if (!newName || !newUsername) {
    errEl.textContent = lang==='am'?'ስም እና የተጠቃሚ ስም ያስፈልጋሉ':'Name and username are required';
    errEl.classList.remove('hidden'); return;
  }
  if (!confirmPwd) {
    errEl.textContent = lang==='am'?'ለውጡን ለማረጋገጥ የአሁኑን ፓስዋርድ ያስገቡ':'Enter your current password to confirm this change';
    errEl.classList.remove('hidden'); return;
  }

  // Re-verify the current password against the server (currentUser no longer carries it).
  try {
    await apiFetch('/api/auth/login', {
      method: 'POST',
      body: JSON.stringify({ username: currentUser.username, password: confirmPwd }),
    });
  } catch (e) {
    errEl.textContent = lang==='am'?'ፓስዋርዱ ትክክል አይደለም':'Incorrect password';
    errEl.classList.remove('hidden'); return;
  }

  const oldUsername = currentUser.username;
  try {
    await apiFetch('/api/users/' + encodeURIComponent(oldUsername), {
      method: 'PUT',
      body: JSON.stringify({ username: newUsername, name: newName, phone: newPhone }),
    });
  } catch (e) {
    errEl.textContent = e.message === 'Username already exists'
      ? (lang==='am'?'ይህ የተጠቃሚ ስም ቀድሞ ተይዟል':'This username is already taken')
      : e.message;
    errEl.classList.remove('hidden'); return;
  }
  await refreshUsersCache();

  // Keep the linked employee record (if any) in sync so HR/attendance/reports still match up
  const employees = getData('employees');
  const emp = employees.find(e => e.username === oldUsername);
  if (emp) {
    emp.username = newUsername;
    emp.name = newName;
    if (newPhone) emp.phone = newPhone;
    saveData('employees', employees);
  }

  currentUser.username = newUsername;
  currentUser.name = newName;
  currentUser.phone = newPhone;

  closeModal('editMyInfoOverlay');
  document.getElementById('editInfoConfirmPwd').value = '';
  buildSidebar();
  toast(lang==='am'?'✅ መረጃዎ ተቀይሯል':'✅ Your info was updated');
}

async function saveChangePassword() {
  const old=v('oldPwd'),n=v('newPwd'),c=v('confPwd');
  const errEl=document.getElementById('chgPwdError'); errEl.classList.add('hidden');
  if (n.length<4) { errEl.textContent=lang==='am'?'ፓስዋርድ ቢያንስ 4 ቁምፊ':'Min 4 chars'; errEl.classList.remove('hidden'); return; }
  if (n!==c) { errEl.textContent=lang==='am'?'ፓስዋርዶቹ አይዛመዱም':'Passwords do not match'; errEl.classList.remove('hidden'); return; }
  try {
    await apiFetch('/api/users/' + encodeURIComponent(currentUser.username) + '/password', {
      method: 'PUT',
      body: JSON.stringify({ oldPassword: old, newPassword: n }),
    });
  } catch (e) {
    errEl.textContent = e.message === 'Incorrect current password'
      ? (lang==='am'?'የቀድሞ ፓስዋርድ ትክክል አይደለም':'Old password incorrect')
      : e.message;
    errEl.classList.remove('hidden'); return;
  }
  closeModal('changePwdOverlay');
  ['oldPwd','newPwd','confPwd'].forEach(id=>document.getElementById(id).value='');
  toast(lang==='am'?'ፓስዋርድ ተቀይሯል ✓':'Password changed ✓');
}

// ── HELPERS ────────────────────────────────────────────────────
function uid() { return '_'+Math.random().toString(36).slice(2,10); }
function v(id) { const el=document.getElementById(id); return el?el.value:''; }
function fmtMoney(n, short) {
  const v = Number(n||0);
  if (short) {
    if (v >= 1000) return (v/1000).toFixed(1).replace(/\.0$/,'') + 'K';
    return v.toFixed(0);
  }
  return v.toLocaleString() + ' ETB';
}
function noDataRow(cols) { return `<tr><td colspan="${cols}" style="text-align:center;opacity:.5;padding:20px">${t('noData')}</td></tr>`; }

function openModal(id) {
  document.getElementById(id).classList.remove('hidden');
  document.querySelectorAll(`#${id} input[type=date]`).forEach(inp=>{ if (!inp.value) inp.value=new Date().toISOString().slice(0,10); });
  // Populate branch selects inside modal
  const branchSels=['umBranch','empBranch','custBranch','expBranch','dispatchBranch','procBranch'];
  branchSels.forEach(sid => { if (document.querySelector(`#${id} #${sid}`)) populateBranchSelect(sid); });
  // For staff confined to a single branch (e.g. sales), force their own branch on
  // the customer form so it always matches the branch filter used when displaying
  // the customer list — leaving this as a free dropdown could silently default to
  // a different branch, making a newly-added customer invisible to that staff
  // member. HR (and owner) can see every branch's customers, so they're free to
  // pick any branch.
  const isBranchLockedRole = currentUser && currentUser.role !== 'owner' && currentUser.role !== 'hr';
  if (id === 'customerModal' && isBranchLockedRole && currentUser.branch) {
    const cb = document.getElementById('custBranch');
    if (cb) { cb.value = currentUser.branch; cb.disabled = true; }
  } else {
    const cb = document.getElementById('custBranch');
    if (cb) cb.disabled = false;
  }
}
function closeModal(id) { document.getElementById(id).classList.add('hidden'); }

function exportTablePDF() { window.print(); }

function toast(msg, type='success') {
  const el=document.getElementById('toast');
  el.textContent=msg; el.className=`toast ${type}`; el.classList.remove('hidden');
  clearTimeout(toast._t); toast._t=setTimeout(()=>el.classList.add('hidden'),3500);
}

document.addEventListener('click', e=>{
  if (e.target.classList.contains('modal-overlay')) closeModal(e.target.id);
});


function togglePwdVis() {
  const inp = document.getElementById('loginPassword');
  const open = document.getElementById('eyeOpen');
  const closed = document.getElementById('eyeClosed');
  if (inp.type === 'password') {
    inp.type = 'text';
    if(open) open.style.display = 'none';
    if(closed) closed.style.display = 'block';
  } else {
    inp.type = 'password';
    if(open) open.style.display = 'block';
    if(closed) closed.style.display = 'none';
  }
}

// ── INIT ───────────────────────────────────────────────────────
initData();
setLang('am');

// ── NAVIGATE TO SPECIFIC REPORT CATEGORY ──────────────────────
function navigateToReport(cat, period) {
  currentReportCat = cat;
  currentReportPeriod = period;
  navigateTo('reports');
}


// ═══════════════════════════════════════════════════════════════
// WHOLESALE (የጅምላ ሽያጭ) — Sales staff submits, Owner approves
// ═══════════════════════════════════════════════════════════════

function openWholesaleModal() {
  const prices = getData('productPrices');
  const branch = currentUser.role === 'owner' ? null : currentUser.branch;
  const stockMap = branch ? getBranchStockMap(branch) : getStoreStockMap();
  const sel = document.getElementById('wsProduct');
  if (!sel) return;
  sel.innerHTML = prices.map(p =>
    `<option value="${p.type}">${p.type} (${lang==='am'?'ክምችት':'stock'}: ${stockMap[p.type]||0})</option>`
  ).join('') || `<option value="">${lang==='am'?'ምርት የለም':'No products'}</option>`;
  const d = document.getElementById('wsDate');
  if (d) d.value = new Date().toISOString().slice(0,10);
  const q = document.getElementById('wsQty'); if (q) q.value = '';
  const pr = document.getElementById('wsPrice'); if (pr) pr.value = '';
  const cu = document.getElementById('wsCustomer'); if (cu) cu.value = '';
  const ph = document.getElementById('wsPhone'); if (ph) ph.value = '';
  const no = document.getElementById('wsNote'); if (no) no.value = '';
  const pm = document.getElementById('wsPayment'); if (pm) pm.value = 'cash';
  wsTogglePayment();
  wsUpdatePrice();
  document.getElementById('wsTotal').textContent = '—';
  openModal('wholesaleModal');
}

function wsUpdatePrice() {
  const product = document.getElementById('wsProduct')?.value;
  const prices = getData('productPrices');
  const p = prices.find(x => x.type === product);
  const retailPrice = p ? p.price : 0;
  const wholesalePrice = p ? (p.wholesalePrice || 0) : 0;
  const ref = document.getElementById('wsRetailRef');
  if (ref) ref.textContent = retailPrice ? `${lang==='am'?'ችርቻሮ':'Retail'}: ${fmtMoney(retailPrice)}` : '';
  const priceEl = document.getElementById('wsPrice');
  if (priceEl) {
    priceEl.value = wholesalePrice || '';
    priceEl.readOnly = wholesalePrice > 0;
    priceEl.style.color = wholesalePrice > 0 ? '#4FC3F7' : '';
    priceEl.placeholder = wholesalePrice > 0 ? fmtMoney(wholesalePrice) : (lang==='am'?'ዋጋ አልተቀመጠም':'Price not set');
  }
  wsUpdateTotal();
}

function wsUpdateTotal() {
  const qty   = parseFloat(document.getElementById('wsQty')?.value)   || 0;
  const price = parseFloat(document.getElementById('wsPrice')?.value) || 0;
  const totalEl = document.getElementById('wsTotal');
  if (totalEl) totalEl.textContent = qty && price ? fmtMoney(qty * price) : '—';
}

function wsTogglePayment() {
  const pm  = document.getElementById('wsPayment')?.value;
  const row = document.getElementById('wsTransferRow');
  if (row) row.style.display = pm === 'transfer' ? 'flex' : 'none';
}

function saveWholesale() {
  const date     = document.getElementById('wsDate')?.value;
  const customer = document.getElementById('wsCustomer')?.value.trim();
  const phone    = document.getElementById('wsPhone')?.value.trim();
  const product  = document.getElementById('wsProduct')?.value;
  const qty      = parseInt(document.getElementById('wsQty')?.value);
  const price    = parseFloat(document.getElementById('wsPrice')?.value);
  const payment  = document.getElementById('wsPayment')?.value || 'cash';
  const transferVia = document.getElementById('wsTransferVia')?.value.trim();
  const note     = document.getElementById('wsNote')?.value.trim();

  if (!date || !customer || !product || !qty || !price) {
    toast(lang==='am'?'ሁሉንም ሙሉ ያስፈልጋሉ':'Fill all required fields', 'error'); return;
  }
  if (payment === 'transfer' && !transferVia) {
    toast(lang==='am'?'ባንክ/ቻናል ያስፈልጋል':'Bank/channel required', 'error'); return;
  }

  // Check stock
  const branch   = currentUser.role === 'owner' ? null : currentUser.branch;
  const stockMap = branch ? getBranchStockMap(branch) : getStoreStockMap();
  if ((stockMap[product] || 0) < qty) {
    toast(`${product}: ${lang==='am'?'ክምችት አልቋል':'Insufficient stock'}`, 'error'); return;
  }

  const wholesale = getData('wholesale');
  wholesale.push({
    id: uid(), date, customer, phone, product, qty, price,
    total: qty * price,
    payment, transferVia: transferVia || '',
    note: note || '',
    branch: branch || 'store',
    by: currentUser.username,
    byName: currentUser.name || currentUser.username,
    status: 'pending',   // pending → approved / rejected
    createdAt: new Date().toISOString()
  });
  saveData('wholesale', wholesale);
  closeModal('wholesaleModal');
  buildSidebar();
  renderWholesale();
  renderDashboard();
  toast(lang==='am'?`⏳ ጅምላ ሽያጭ ለኦነር ተልኳል — ፈቃድ ይጠበቃል`:`⏳ Wholesale sent for owner approval`);
}

function approveWholesale(id) {
  const wholesale = getData('wholesale');
  const w = wholesale.find(x => x.id === id);
  if (!w) return;
  // Deduct stock
  if (w.branch && w.branch !== 'store') {
    const bs = getData('branchStock');
    let rem = w.qty;
    for (let i = 0; i < bs.length && rem > 0; i++) {
      if (bs[i].branch === w.branch && bs[i].type === w.product) {
        const d = Math.min(bs[i].qty, rem); bs[i].qty -= d; rem -= d;
      }
    }
    saveData('branchStock', bs);
  } else {
    // Deduct from store
    const store = getData('store');
    let rem = w.qty;
    for (let i = 0; i < store.length && rem > 0; i++) {
      if (store[i].type === w.product) {
        const d = Math.min(store[i].qty, rem); store[i].qty -= d; rem -= d;
      }
    }
    saveData('store', store);
  }
  // Record as sale
  const sales = getData('sales');
  sales.push({
    id: uid(), date: w.date, product: w.product, qty: w.qty, price: w.price,
    payment: w.payment, transferVia: w.transferVia,
    creditCustomer: w.customer, customerName: w.customer,
    branch: w.branch, note: w.note || '', by: w.by,
    isWholesale: true
  });
  saveData('sales', sales);

  w.status = 'approved';
  w.approvedBy = currentUser.username;
  w.approvedAt = new Date().toISOString();
  saveData('wholesale', wholesale);
  renderWholesale();
  renderDashboard();
  buildSidebar();
  toast(lang==='am'?`✅ የጅምላ ሽያጭ ፀድቋል — ${w.product} ×${w.qty} (${w.customer})`:`✅ Wholesale approved — ${w.product} ×${w.qty} (${w.customer})`);
}

function rejectWholesale(id) {
  const wholesale = getData('wholesale');
  const w = wholesale.find(x => x.id === id);
  if (!w) return;
  w.status = 'rejected';
  w.rejectedBy = currentUser.username;
  w.rejectedAt = new Date().toISOString();
  saveData('wholesale', wholesale);
  renderWholesale();
  renderDashboard();
  buildSidebar();
  toast(lang==='am'?'❌ ጅምላ ሽያጭ ውድቅ ተደርጓል':'❌ Wholesale rejected');
}

function renderWholesale() {
  const wholesaleData = getData('wholesale');
  const isOwner = currentUser.role === 'owner';
  const myBranch = currentUser.branch;

  // Wholesale add button only exists in POS, not in this panel

  // --- Owner approval queue ---
  const queueEl = document.getElementById('wholesaleApprovalQueue');
  if (queueEl) {
    const pending = wholesaleData.filter(w => w.status === 'pending');
    if (isOwner && pending.length) {
      if (!document.getElementById('pulseStyle')) {
        const st = document.createElement('style');
        st.id = 'pulseStyle';
        st.textContent = '@keyframes pulse-border{0%,100%{box-shadow:0 0 0 0 rgba(255,167,38,0.4)}50%{box-shadow:0 0 0 8px rgba(255,167,38,0)}}';
        document.head.appendChild(st);
      }
      queueEl.innerHTML = `
        <div style="margin-bottom:14px;padding:12px 14px;background:rgba(255,167,38,0.08);border:2px solid rgba(255,167,38,0.5);border-radius:11px;animation:pulse-border 1.8s infinite">
          <div style="display:flex;align-items:center;gap:7px;margin-bottom:10px">
            <span style="font-size:16px">🚨</span>
            <span style="font-size:13px;font-weight:700;color:#FFA726">${lang==='am'?`ፈቃድ የሚጠብቁ ጅምላ ሽያጮች (${pending.length})`:`Wholesale sales awaiting approval (${pending.length})`}</span>
          </div>
          ${pending.map(w => `
            <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;padding:7px 10px;margin-bottom:6px;background:rgba(0,0,0,0.2);border-radius:8px;flex-wrap:wrap">
              <div style="flex:1;min-width:0">
                <div style="font-size:13px;font-weight:700;color:var(--white)">${w.customer} <span style="color:var(--white-dim);font-weight:400">· ${w.product} ×${w.qty}</span></div>
                <div style="font-size:11px;color:var(--gold)">${fmtMoney(w.total)} &nbsp;·&nbsp; ${w.payment} &nbsp;·&nbsp; ${w.date} &nbsp;·&nbsp; <span style="color:var(--white-dim)">${w.byName||w.by}</span></div>
                ${w.note ? `<div style="font-size:11px;color:rgba(197,203,216,0.45);margin-top:1px">💬 ${w.note}</div>` : ''}
              </div>
              <div style="display:flex;gap:5px;flex-shrink:0">
                <button onclick="approveWholesale('${w.id}')" style="padding:5px 12px;border-radius:7px;border:1px solid rgba(76,175,80,0.5);background:rgba(76,175,80,0.12);color:#80e080;cursor:pointer;font-family:inherit;font-size:12px;font-weight:700">✅ ${lang==='am'?'አፅድቅ':'Approve'}</button>
                <button onclick="rejectWholesale('${w.id}')" style="padding:5px 10px;border-radius:7px;border:1px solid rgba(224,90,90,0.4);background:rgba(224,90,90,0.1);color:#FF9090;cursor:pointer;font-family:inherit;font-size:12px;font-weight:700">❌</button>
              </div>
            </div>`).join('')}
        </div>`;
    } else {
      queueEl.innerHTML = '';
    }
  }

  // --- Pending banner for sales staff ---
  const bannerEl = document.getElementById('wholesalePendingBanner');
  if (bannerEl) {
    const myPending = !isOwner ? wholesaleData.filter(w => w.status === 'pending' && w.branch === myBranch) : [];
    bannerEl.innerHTML = myPending.length
      ? `<div style="margin-bottom:12px;padding:9px 13px;background:rgba(79,195,247,0.07);border:1px solid rgba(79,195,247,0.35);border-radius:9px;font-size:12px;color:#4FC3F7">
          ⏳ ${lang==='am'?`${myPending.length} ጅምላ ሽያጭ ፈቃድ ይጠበቃል…`:`${myPending.length} wholesale sale(s) awaiting owner approval…`}
        </div>` : '';
  }

  // --- History table ---
  const thead = document.getElementById('wholesaleThead');
  const tbody = document.getElementById('wholesaleTbody');
  if (!thead || !tbody) return;

  const SC = { pending:'#FFA726', approved:'#4CAF50', rejected:'#E05A5A' };
  const SL = {
    pending:  lang==='am'?'ፈቃድ ይጠበቃል':'Pending',
    approved: lang==='am'?'ፀድቋል':'Approved',
    rejected: lang==='am'?'ውድቅ':'Rejected'
  };

  const hdrs = lang==='am'
    ? ['ቀን','ነጋዴ','ምርት','ብዛት','ዋጋ/ቁ.','አጠቃላይ','አከፋፈል','ቅርንጫፍ','የሸጠ','ሁኔታ']
    : ['Date','Trader','Product','Qty','Unit Price','Total','Payment','Branch','By','Status'];
  thead.innerHTML = `<tr>${hdrs.map(h => `<th style="white-space:nowrap;font-size:11px">${h}</th>`).join('')}</tr>`;

  const visible = isOwner
    ? [...wholesaleData].sort((a,b) => b.createdAt.localeCompare(a.createdAt))
    : wholesaleData.filter(w => w.branch === myBranch).sort((a,b) => b.createdAt.localeCompare(a.createdAt));

  if (!visible.length) { tbody.innerHTML = noDataRow(hdrs.length); return; }

  const branches = getData('branches');
  tbody.innerHTML = visible.map(w => {
    const sc = SC[w.status] || '#aaa';
    const sl = SL[w.status] || w.status;
    const br = branches.find(b => b.id === w.branch);
    const badge = `<span style="font-size:10px;font-weight:700;color:${sc};background:${sc}18;padding:2px 8px;border-radius:5px;border:1px solid ${sc}44">${sl}</span>`;
    return `<tr>
      <td style="white-space:nowrap">${w.date}</td>
      <td><div style="font-weight:600;color:var(--white)">${w.customer}</div>${w.phone?`<div style="font-size:10px;color:var(--white-dim)">${w.phone}</div>`:''}</td>
      <td style="font-weight:600">${w.product}</td>
      <td style="text-align:center;font-weight:700;color:var(--gold)">${w.qty}</td>
      <td>${fmtMoney(w.price)}</td>
      <td style="font-weight:700;color:var(--gold)">${fmtMoney(w.total)}</td>
      <td>${w.payment}${w.transferVia?' · '+w.transferVia:''}</td>
      <td>${br?br.name:w.branch}</td>
      <td style="color:var(--white-dim)">${w.byName||w.by||'—'}</td>
      <td>${badge}</td>
    </tr>`;
  }).join('');
}

// ── POS WHOLESALE ─────────────────────────────────────────────
function posWholesaleInit() {
  const branch = currentUser.branch;
  const stockMap = getBranchStockMap(branch);
  const prices = getData('productPrices');
  const sel = document.getElementById('posWsProduct');
  if (sel) {
    sel.innerHTML = prices.filter(p => (stockMap[p.type]||0) > 0)
      .map(p => `<option value="${p.type}">${p.type} (${stockMap[p.type]||0} ቁ.)</option>`)
      .join('') || `<option value="">${lang==='am'?'ክምችት የለም':'No stock'}</option>`;
  }
  // clear fields
  ['posWsCustomer','posWsPhone','posWsQty','posWsNote','posWsTransferVia'].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
  const pm = document.getElementById('posWsPayment'); if (pm) pm.value = 'cash';
  posWsTogglePayment();
  posWsUpdatePrice();
  const tot = document.getElementById('posWsTotal'); if (tot) tot.textContent = '—';
  posWsRenderPending();
}

function posWsUpdatePrice() {
  const product = document.getElementById('posWsProduct')?.value;
  const prices = getData('productPrices');
  const p = prices.find(x => x.type === product);
  const retail = p ? p.price : 0;
  const wholesale = p ? (p.wholesalePrice || 0) : 0;

  // Show retail reference
  const ref = document.getElementById('posWsRetailRef');
  if (ref) ref.textContent = retail ? `${lang==='am'?'ችርቻሮ':'Retail'}: ${fmtMoney(retail)}` : '';

  // Show fixed wholesale price (read-only)
  const display = document.getElementById('posWsPriceDisplay');
  const hidden  = document.getElementById('posWsPrice');
  if (display) {
    if (wholesale) {
      display.textContent = fmtMoney(wholesale);
      display.style.color = '#4FC3F7';
    } else {
      display.textContent = lang==='am' ? '⚠️ ዋጋ አልተቀመጠም' : '⚠️ Price not set by owner';
      display.style.color = '#FFA726';
    }
  }
  if (hidden) hidden.value = wholesale || '';
  posWsUpdateTotal();
}

function posWsUpdateTotal() {
  const qty   = parseFloat(document.getElementById('posWsQty')?.value)   || 0;
  const price = parseFloat(document.getElementById('posWsPrice')?.value) || 0;
  const el = document.getElementById('posWsTotal');
  if (el) el.textContent = qty && price ? fmtMoney(qty * price) : '—';
}

function posWsTogglePayment() {
  const pm  = document.getElementById('posWsPayment')?.value;
  const row = document.getElementById('posWsTransferRow');
  if (row) row.style.display = pm === 'transfer' ? 'block' : 'none';
}

function posSubmitWholesale() {
  const customer   = document.getElementById('posWsCustomer')?.value.trim();
  const phone      = document.getElementById('posWsPhone')?.value.trim();
  const product    = document.getElementById('posWsProduct')?.value;
  const qty        = parseInt(document.getElementById('posWsQty')?.value);
  const price      = parseFloat(document.getElementById('posWsPrice')?.value);
  const payment    = document.getElementById('posWsPayment')?.value || 'cash';
  const transferVia= document.getElementById('posWsTransferVia')?.value.trim();
  const note       = document.getElementById('posWsNote')?.value.trim();
  const date       = new Date().toISOString().slice(0,10);
  const branch     = currentUser.branch;

  if (!customer || !product || !qty) {
    toast(lang==='am'?'ሁሉንም ሙሉ':'Fill required fields','error'); return;
  }
  if (!price || price <= 0) {
    toast(lang==='am'?'ኦነሩ የጅምላ ዋጋ ገና አላስቀመጠም':'Owner has not set a wholesale price for this product','error'); return;
  }
  if (payment === 'transfer' && !transferVia) {
    toast(lang==='am'?'ባንክ/ቻናል ያስፈልጋል':'Bank/channel required','error'); return;
  }
  const stockMap = getBranchStockMap(branch);
  if ((stockMap[product]||0) < qty) {
    toast(`${product}: ${lang==='am'?'ክምችት አልቋል':'Insufficient stock'}`, 'error'); return;
  }

  const wholesale = getData('wholesale');
  wholesale.push({
    id: uid(), date, customer, phone: phone||'', product, qty, price,
    total: qty * price, payment, transferVia: transferVia||'',
    note: note||'', branch,
    by: currentUser.username, byName: currentUser.name||currentUser.username,
    status: 'pending', createdAt: new Date().toISOString()
  });
  saveData('wholesale', wholesale);
  buildSidebar();
  renderDashboard();
  // reset form
  ['posWsCustomer','posWsPhone','posWsQty','posWsNote','posWsTransferVia'].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
  const tot = document.getElementById('posWsTotal'); if (tot) tot.textContent = '—';
  posWsRenderPending();
  toast(lang==='am'?'⏳ ጅምላ ሽያጭ ለኦነር ተልኳል':'⏳ Wholesale sent for owner approval');
}

function posWsRenderPending() {
  const el = document.getElementById('posWsPendingList');
  if (!el) return;
  const mine = getData('wholesale')
    .filter(w => w.branch === currentUser.branch)
    .sort((a,b) => b.createdAt.localeCompare(a.createdAt))
    .slice(0, 10);
  if (!mine.length) { el.innerHTML = ''; return; }
  const SC = { pending:'#FFA726', approved:'#4CAF50', rejected:'#E05A5A' };
  const SL = { pending:lang==='am'?'ፈቃድ ይጠበቃል':'Pending', approved:lang==='am'?'ፀድቋል':'Approved', rejected:lang==='am'?'ውድቅ':'Rejected' };
  el.innerHTML = `
    <div style="font-size:11px;font-weight:700;color:var(--white-dim);margin-bottom:8px;letter-spacing:0.5px">📋 ${lang==='am'?'የቅርብ ጊዜ ጅምላ ሽያጮች':'Recent Wholesale Sales'}</div>
    ${mine.map(w => {
      const sc = SC[w.status]||'#aaa';
      return `<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 10px;margin-bottom:5px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:8px;gap:8px;flex-wrap:wrap">
        <div style="flex:1;min-width:0">
          <div style="font-size:12px;font-weight:700;color:var(--white)">${w.customer} <span style="font-weight:400;color:var(--white-dim)">· ${w.product} ×${w.qty}</span></div>
          <div style="font-size:11px;color:var(--gold)">${fmtMoney(w.total)} · ${w.date}</div>
        </div>
        <span style="font-size:10px;font-weight:700;color:${sc};background:${sc}18;padding:2px 8px;border-radius:5px;border:1px solid ${sc}44;white-space:nowrap">${SL[w.status]||w.status}</span>
      </div>`;
    }).join('')}`;
}

// ── WHOLESALE REPORT SECTIONS ────────────────────────────────

function renderWholesaleReportForStaff() {
  const el = document.getElementById('salesReportWholesaleSection');
  if (!el) return;
  if (currentUser.role !== 'sales') { el.innerHTML = ''; return; }
  const myBranch = currentUser.branch;
  const today = new Date().toISOString().slice(0,10);
  const weekAgo = new Date(Date.now() - 6*86400000).toISOString().slice(0,10);
  const ws = getData('wholesale').filter(w => w.branch === myBranch);
  const todayWS = ws.filter(w => w.date === today);
  const weekWS  = ws.filter(w => w.date >= weekAgo);
  const todayApproved = todayWS.filter(w => w.status === 'approved');
  const weekApproved  = weekWS.filter(w => w.status === 'approved');
  const todayRev = todayApproved.reduce((a,w) => a + w.total, 0);
  const weekRev  = weekApproved.reduce((a,w) => a + w.total, 0);
  const todayPending = todayWS.filter(w => w.status === 'pending').length;
  const SC = { pending:'#FFA726', approved:'#4CAF50', rejected:'#E05A5A' };
  const SL = { pending:lang==='am'?'ፈቃድ ይጠበቃል':'Pending', approved:lang==='am'?'ፀድቋል':'Approved', rejected:lang==='am'?'ውድቅ':'Rejected' };

  el.innerHTML = `
    <div class="card" style="padding:14px;margin-top:12px">
      <div style="font-size:12px;font-weight:700;color:#4FC3F7;letter-spacing:1px;margin-bottom:12px">🏪 ${lang==='am'?'የጅምላ ሽያጭ ሪፖርት':'WHOLESALE REPORT'}</div>

      <!-- KPIs -->
      <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px">
        <div class="kpi-card" style="flex:1;min-width:90px;padding:10px 12px;border-color:rgba(79,195,247,0.3)">
          <div class="kpi-icon" style="font-size:14px">🏪</div>
          <div class="kpi-val" style="font-size:13px;color:#4FC3F7">${fmtMoney(todayRev)}</div>
          <div class="kpi-label" style="font-size:10px">${lang==='am'?'ዛሬ ጅምላ':'Today Wholesale'}</div>
        </div>
        <div class="kpi-card" style="flex:1;min-width:90px;padding:10px 12px;border-color:rgba(79,195,247,0.2)">
          <div class="kpi-icon" style="font-size:14px">📆</div>
          <div class="kpi-val" style="font-size:13px;color:#4FC3F7">${fmtMoney(weekRev)}</div>
          <div class="kpi-label" style="font-size:10px">${lang==='am'?'ሳምንት ጅምላ':'Week Wholesale'}</div>
        </div>
        <div class="kpi-card" style="flex:1;min-width:90px;padding:10px 12px;border-color:rgba(255,167,38,0.3)">
          <div class="kpi-icon" style="font-size:14px">⏳</div>
          <div class="kpi-val" style="font-size:13px;color:#FFA726">${ws.filter(w=>w.status==='pending').length}</div>
          <div class="kpi-label" style="font-size:10px">${lang==='am'?'ፈቃድ ይጠበቃል':'Pending'}</div>
        </div>
      </div>

      <!-- Pending wholesale waiting for approval -->
      ${ws.filter(w=>w.status==='pending').length ? `
        <div style="margin-bottom:12px;padding:10px 12px;background:rgba(255,167,38,0.07);border:1px solid rgba(255,167,38,0.3);border-radius:9px">
          <div style="font-size:11px;font-weight:700;color:#FFA726;margin-bottom:8px">⏳ ${lang==='am'?`ፈቃድ የሚጠብቁ (${ws.filter(w=>w.status==='pending').length})`:`Awaiting approval (${ws.filter(w=>w.status==='pending').length})`}</div>
          ${ws.filter(w=>w.status==='pending').sort((a,b)=>b.createdAt.localeCompare(a.createdAt)).map(w=>`
            <div style="display:flex;justify-content:space-between;align-items:center;padding:6px 8px;margin-bottom:4px;background:rgba(0,0,0,0.15);border-radius:7px;gap:8px;flex-wrap:wrap">
              <div style="flex:1;min-width:0">
                <div style="font-size:12px;font-weight:700;color:var(--white)">${w.customer} <span style="color:var(--white-dim);font-weight:400">· ${w.product} ×${w.qty}</span></div>
                <div style="font-size:11px;color:var(--gold)">${fmtMoney(w.total)} · ${w.date}</div>
              </div>
              <span style="font-size:10px;color:#FFA726;background:rgba(255,167,38,0.12);padding:2px 8px;border-radius:5px;border:1px solid rgba(255,167,38,0.3)">${lang==='am'?'ፈቃድ ይጠበቃል':'Pending'}</span>
            </div>`).join('')}
        </div>` : ''}

      <!-- Recent wholesale history table -->
      ${ws.length ? `
        <div style="font-size:11px;font-weight:700;color:rgba(197,203,216,0.4);letter-spacing:1px;margin-bottom:8px">${lang==='am'?'የቅርብ ጊዜ ጅምላ ሽያጮች':'RECENT WHOLESALE SALES'}</div>
        <div style="overflow-x:auto">
          <table class="data-table" style="min-width:500px">
            <thead><tr>
              <th style="font-size:11px">${lang==='am'?'ቀን':'Date'}</th>
              <th style="font-size:11px">${lang==='am'?'ነጋዴ':'Trader'}</th>
              <th style="font-size:11px">${lang==='am'?'ምርት':'Product'}</th>
              <th style="font-size:11px">${lang==='am'?'ብዛት':'Qty'}</th>
              <th style="font-size:11px">${lang==='am'?'አጠቃላይ':'Total'}</th>
              <th style="font-size:11px">${lang==='am'?'ሁኔታ':'Status'}</th>
            </tr></thead>
            <tbody>
              ${ws.sort((a,b)=>b.createdAt.localeCompare(a.createdAt)).slice(0,20).map(w=>{
                const sc = SC[w.status]||'#aaa';
                const sl = SL[w.status]||w.status;
                return `<tr>
                  <td style="white-space:nowrap">${w.date}</td>
                  <td style="font-weight:600;color:var(--white)">${w.customer}${w.phone?`<div style="font-size:10px;color:var(--white-dim)">${w.phone}</div>`:''}</td>
                  <td>${w.product} ×${w.qty}</td>
                  <td style="text-align:center;font-weight:700;color:var(--gold)">${w.qty}</td>
                  <td style="font-weight:700;color:var(--gold)">${fmtMoney(w.total)}</td>
                  <td><span style="font-size:10px;color:${sc};background:${sc}18;padding:2px 7px;border-radius:4px;border:1px solid ${sc}44">${sl}</span></td>
                </tr>`;
              }).join('')}
            </tbody>
          </table>
        </div>` : `<div style="text-align:center;color:var(--white-dim);padding:20px;font-size:12px">${lang==='am'?'ጅምላ ሽያጭ የለም':'No wholesale sales yet'}</div>`}
    </div>`;
}

function renderWholesaleReportForOwner() {
  const el = document.getElementById('ownerWholesaleSection');
  if (!el) return;
  if (currentUser.role !== 'owner') { el.innerHTML = ''; return; }

  const ws       = getData('wholesale');
  const branches = getData('branches');
  const today    = new Date().toISOString().slice(0,10);
  const weekAgo  = new Date(Date.now() -  6*86400000).toISOString().slice(0,10);
  const monthAgo = new Date(Date.now() - 29*86400000).toISOString().slice(0,10);
  const approved = ws.filter(w => w.status === 'approved');
  const pending  = ws.filter(w => w.status === 'pending');

  const todayRev = approved.filter(w=>w.date===today).reduce((a,w)=>a+w.total,0);
  const weekRev  = approved.filter(w=>w.date>=weekAgo).reduce((a,w)=>a+w.total,0);
  const monthRev = approved.filter(w=>w.date>=monthAgo).reduce((a,w)=>a+w.total,0);
  const totalRev = approved.reduce((a,w)=>a+w.total,0);

  const todayCnt = approved.filter(w=>w.date===today).length;
  const weekCnt  = approved.filter(w=>w.date>=weekAgo).length;
  const monthCnt = approved.filter(w=>w.date>=monthAgo).length;
  const totalCnt = approved.length;

  const SC = { pending:'#FFA726', approved:'#4CAF50', rejected:'#E05A5A' };
  const SL = {
    pending:  lang==='am'?'ፈቃድ ይጠበቃል':'Pending',
    approved: lang==='am'?'ፀድቋል':'Approved',
    rejected: lang==='am'?'ውድቅ':'Rejected'
  };

  // KPI cards — ዛሬ / ሳምንት / ወር / ጠቅላላ + pending
  const kpis = [
    { icon:'📅', rev:todayRev,  cnt:todayCnt,  label:lang==='am'?'ዛሬ':'Today',   color:'var(--white)' },
    { icon:'📆', rev:weekRev,   cnt:weekCnt,   label:lang==='am'?'ሳምንት':'Week',  color:'#4FC3F7' },
    { icon:'🗓️', rev:monthRev,  cnt:monthCnt,  label:lang==='am'?'ወር':'Month',   color:'var(--gold)' },
    { icon:'💰', rev:totalRev,  cnt:totalCnt,  label:lang==='am'?'ጠቅላላ':'Total', color:'#80e080' },
  ];
  const kpiHtml = kpis.map(k=>
    '<div class="kpi-card" style="flex:1;min-width:100px;padding:12px 10px;border-color:'+k.color+'44">'+
      '<div class="kpi-icon" style="font-size:18px">'+k.icon+'</div>'+
      '<div class="kpi-val" style="font-size:17px;color:'+k.color+'">'+fmtMoney(k.rev)+'</div>'+
      '<div style="font-size:11px;color:rgba(197,203,216,0.5);margin-top:2px">'+k.cnt+' '+(lang==='am'?'ሽያጭ':'sales')+'</div>'+
      '<div class="kpi-label">'+k.label+'</div>'+
    '</div>'
  ).join('') +
  (pending.length ?
    '<div class="kpi-card" style="flex:1;min-width:100px;padding:12px 10px;border-color:#FFA72644">'+
      '<div class="kpi-icon" style="font-size:18px">⏳</div>'+
      '<div class="kpi-val" style="font-size:17px;color:#FFA726">'+pending.length+'</div>'+
      '<div class="kpi-label">'+(lang==='am'?'ፈቃድ ይጠበቃል':'Pending')+'</div>'+
    '</div>' : '');

  // Branch breakdown
  const branchBreakdown = branches.filter(b=>!b.noSales).map(function(br){
    const brAll  = approved.filter(w=>w.branch===br.id);
    const brPend = pending.filter(w=>w.branch===br.id).length;
    return {
      br, pend:brPend,
      today: brAll.filter(w=>w.date===today).reduce((a,w)=>a+w.total,0),
      week:  brAll.filter(w=>w.date>=weekAgo).reduce((a,w)=>a+w.total,0),
      month: brAll.filter(w=>w.date>=monthAgo).reduce((a,w)=>a+w.total,0),
      total: brAll.reduce((a,w)=>a+w.total,0),
      cnt:   brAll.length
    };
  }).filter(x=>x.total>0||x.pend>0);

  const brHtml = branchBreakdown.length
    ? '<div style="font-size:10px;font-weight:700;color:rgba(197,203,216,0.4);letter-spacing:0.8px;margin-bottom:8px">'+(lang==='am'?'በቅርንጫፍ':'BY BRANCH')+'</div>'+
      '<div style="overflow-x:auto;margin-bottom:14px"><table class="data-table" style="min-width:450px">'+
        '<thead><tr>'+
          ['','ዛሬ','ሳምንት','ወር','ጠቅላላ'].map(h=>'<th style="font-size:11px">'+h+'</th>').join('')+
        '</tr></thead><tbody>'+
        branchBreakdown.map(function(x){
          return '<tr>'+
            '<td style="font-weight:700;color:var(--white)">🏪 '+x.br.name+(x.pend?' <span style="font-size:10px;color:#FFA726">⏳'+x.pend+'</span>':'')+'</td>'+
            '<td style="text-align:right;color:var(--white)">'+(x.today?fmtMoney(x.today):'—')+'</td>'+
            '<td style="text-align:right;color:#4FC3F7">'+(x.week?fmtMoney(x.week):'—')+'</td>'+
            '<td style="text-align:right;color:var(--gold)">'+(x.month?fmtMoney(x.month):'—')+'</td>'+
            '<td style="text-align:right;color:#80e080;font-weight:700">'+fmtMoney(x.total)+'</td>'+
          '</tr>';
        }).join('')+
      '</tbody></table></div>'
    : '';

  // Full record table
  const hdrs = lang==='am'
    ? ['ቀን','ነጋዴ','ምርት','ብዛት','አጠቃላይ','አከፋፈል','ቅርንጫፍ','ሸጠ','ሁኔታ']
    : ['Date','Trader','Product','Qty','Total','Payment','Branch','By','Status'];

  const rowsHtml = ws.length
    ? [...ws].sort((a,b)=>b.createdAt.localeCompare(a.createdAt)).map(function(w){
        const sc = SC[w.status]||'#aaa';
        const sl = SL[w.status]||w.status;
        const br = branches.find(b=>b.id===w.branch);
        return '<tr>'+
          '<td style="white-space:nowrap;color:var(--white-dim)">'+w.date+'</td>'+
          '<td style="font-weight:600;color:var(--white)">'+w.customer+'</td>'+
          '<td>'+w.product+'</td>'+
          '<td style="text-align:center;font-weight:700;color:var(--gold)">'+w.qty+'</td>'+
          '<td style="font-weight:700;color:var(--gold)">'+fmtMoney(w.total)+'</td>'+
          '<td>'+w.payment+(w.transferVia?' · '+w.transferVia:'')+'</td>'+
          '<td>'+(br?br.name:w.branch)+'</td>'+
          '<td style="color:var(--white-dim)">'+((w.byName||w.by)||'—')+'</td>'+
          '<td><span style="font-size:10px;color:'+sc+';background:'+sc+'18;padding:2px 7px;border-radius:4px;border:1px solid '+sc+'44">'+sl+'</span></td>'+
        '</tr>';
      }).join('')
    : '<tr><td colspan="9" style="text-align:center;color:var(--white-dim);padding:20px">'+(lang==='am'?'ጅምላ ሽያጭ የለም':'No wholesale yet')+'</td></tr>';

  el.innerHTML =
    '<div class="card" style="padding:16px;margin-top:14px">'+
      '<div style="font-size:13px;font-weight:700;color:#4FC3F7;margin-bottom:14px">🏪 '+(lang==='am'?'የጅምላ ሽያጭ ሪፖርት':'WHOLESALE REPORT')+'</div>'+
      '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px">'+kpiHtml+'</div>'+
      brHtml+
      '<div style="font-size:10px;font-weight:700;color:rgba(197,203,216,0.4);letter-spacing:0.8px;margin-bottom:8px">'+(lang==='am'?'ሙሉ ዝርዝር':'FULL RECORD')+'</div>'+
      '<div style="overflow-x:auto"><table class="data-table" style="min-width:600px">'+
        '<thead><tr>'+hdrs.map(h=>'<th style="font-size:10px;white-space:nowrap">'+h+'</th>').join('')+'</tr></thead>'+
        '<tbody>'+rowsHtml+'</tbody>'+
      '</table></div>'+
    '</div>';
}


function cutOpenModal() {
  // populate fabric dropdown from cuttingRaw
  const sel = document.getElementById('cutFabric');
  if (!sel) return;
  const cuttingRaw = getData('cuttingRaw');
  sel.innerHTML = '<option value="">— ጨርቅ ምረጥ —</option>' +
    cuttingRaw.map(r => `<option value="${r.name}" data-qty="${r.qty}" data-unit="${r.unit||''}">${r.name} (${r.qty} ${r.unit||''})</option>`).join('');
  // populate clothing type dropdown from the owner's price catalog — no free typing, so types stay consistent
  const typeSel = document.getElementById('cutType');
  if (typeSel) typeSel.innerHTML = clothingTypeOptionsHTML();
  if (!getData('productPrices').length) {
    toast(lang==='am'?'⚠️ መጀመሪያ ኦነሩ የልብስ አይነቶችን በ"የልብስ ዋጋ ቁጥጥር" ገጽ ላይ ማስገባት አለበት':'⚠️ The owner must first add clothing types on the "Price Control" page','error');
  }
  // set default date
  const d = document.getElementById('cutDate');
  if (d && !d.value) d.value = new Date().toISOString().slice(0,10);
  // clear other fields
  ['cutQty','cutFabricQty','cutOperator','cutNote'].forEach(id => {
    const el = document.getElementById(id); if (el) el.value = '';
  });
  document.getElementById('cutFabricStock').textContent = '';
  document.getElementById('cutFabricUnit').textContent = '';
  openModal('cuttingModal');
}

function cutUpdateFabricStock() {
  const sel = document.getElementById('cutFabric');
  const opt = sel?.selectedOptions[0];
  const stockEl = document.getElementById('cutFabricStock');
  const unitEl  = document.getElementById('cutFabricUnit');
  if (!opt || !opt.value) {
    if (stockEl) stockEl.textContent = '';
    if (unitEl)  unitEl.textContent  = '';
    return;
  }
  const available = parseFloat(opt.dataset.qty) || 0;
  const unit      = opt.dataset.unit || '';
  const using     = parseFloat(document.getElementById('cutFabricQty')?.value) || 0;
  const remaining = available - using;
  if (stockEl) {
    stockEl.textContent = `${lang==='am'?'ያለ ክምችት':'Available'}: ${available} ${unit}`;
    stockEl.style.color = remaining < 0 ? '#FF9090' : remaining < 2 ? '#FFA726' : '#80e080';
    if (using > 0) {
      stockEl.textContent += ` → ${lang==='am'?'ቀሪ':'After'}: ${remaining.toFixed(1)} ${unit}`;
    }
  }
  if (unitEl) unitEl.textContent = unit ? `${lang==='am'?'መለኪያ':'Unit'}: ${unit}` : '';
}

function saveCutting() {
  const date     = v('cutDate');
  const type     = v('cutType');
  const qty      = parseInt(v('cutQty'));
  const fabric   = v('cutFabric');
  const fabricQty = parseFloat(document.getElementById('cutFabricQty')?.value) || 0;
  const operator = v('cutOperator');
  const note     = v('cutNote');

  if (!date || !type || !qty || !fabric) {
    toast(lang==='am'?'ሁሉንም ቦታ ሙሉ':'Fill all fields','error'); return;
  }
  if (!getData('productPrices').some(p => p.type === type)) {
    toast(lang==='am'?'ልብስ አይነት ከዋጋ ዝርዝር ውስጥ መመረጥ አለበት':'Clothing type must be chosen from the price list','error'); return;
  }

  // Check fabric stock
  const cuttingRaw = getData('cuttingRaw');
  const fabricStock = cuttingRaw.find(r => r.name === fabric);

  if (fabricQty > 0) {
    if (!fabricStock || fabricStock.qty < fabricQty) {
      toast(`${fabric}: ${lang==='am'?`ክምችት አልቋል (${fabricStock?.qty||0} ብቻ አለ)`:`Insufficient stock (only ${fabricStock?.qty||0} available)`}`, 'error');
      return;
    }
    // Deduct fabric from cuttingRaw
    fabricStock.qty -= fabricQty;
    if (fabricStock.qty < 0) fabricStock.qty = 0;
    saveData('cuttingRaw', cuttingRaw);
  }

  // Save cutting record
  const data = getData('cutting');
  data.push({ id:uid(), date, type, qty, fabric, fabricQtyUsed: fabricQty || 0, operator, note });
  saveData('cutting', data);
  closeModal('cuttingModal');
  renderCutting();
  toast(lang==='am'?`✂️ ${qty} ${type} ተቆርጠዋል${fabricQty?` — ${fabricQty} ${fabricStock?.unit||''} ${fabric} ጥቅም ላይ ዋለ`:''}` : `✂️ ${qty} ${type} cut${fabricQty?` — used ${fabricQty} ${fabricStock?.unit||''} ${fabric}`:''}`);
}

// ── CUTTING → SEWING (cut pieces, tracked by type) ──
function openCutToSewing(cutId) {
  if (!canActCutting()) { toast(lang==='am'?'⛔ ይህን ማድረግ የሚችለው ቆረጣ ክፍል ብቻ ነው':'⛔ Only Cutting staff can do this','error'); return; }
  const r = getData('cutting').find(x => x.id === cutId);
  if (!r) return;
  const remaining = r.qty - (r.sentQty||0);
  if (remaining <= 0) { toast(lang==='am'?'ቀሪ የለም':'Nothing left to send','error'); return; }

  const modal = document.createElement('div');
  modal.id = 'cutToSewModal';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.75);z-index:9999;display:flex;align-items:center;justify-content:center;padding:16px';
  modal.innerHTML = `
    <div style="background:#1a1f2e;border-radius:14px;padding:20px;width:100%;max-width:380px;border:1px solid rgba(255,255,255,0.1)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <h3 style="color:var(--gold);font-size:15px;margin:0">🪡 ${r.type} → ${lang==='am'?'ስፌት ክፍል':'Sewing'}</h3>
        <button onclick="document.getElementById('cutToSewModal').remove()" style="background:rgba(255,255,255,0.06);border:none;color:var(--white-dim);width:28px;height:28px;border-radius:8px;cursor:pointer">✕</button>
      </div>
      <div style="background:rgba(201,168,76,0.08);border:1px solid rgba(201,168,76,0.2);border-radius:9px;padding:10px 14px;margin-bottom:14px;font-size:13px;color:var(--white)">
        ✂️ ${lang==='am'?'ያልተላከ ቀሪ':'Not yet sent'}: <strong style="color:var(--gold)">${remaining}</strong>
      </div>
      <div style="margin-bottom:16px">
        <div style="font-size:11px;color:rgba(197,203,216,0.5);font-weight:600;margin-bottom:5px">${lang==='am'?'ብዛት':'Quantity'} (max: ${remaining})</div>
        <input id="ctsQty" type="number" min="1" max="${remaining}" value="${remaining}"
          style="width:100%;padding:9px 12px;background:rgba(255,255,255,0.05);border:1px solid rgba(201,168,76,0.3);border-radius:9px;color:var(--white);font-family:inherit;font-size:14px;font-weight:700;outline:none;box-sizing:border-box" />
      </div>
      <div style="display:flex;gap:10px">
        <button onclick="saveCutToSewing('${cutId}')" style="flex:1;padding:11px;background:linear-gradient(135deg,var(--gold),#A87820);color:var(--navy);border:none;border-radius:9px;font-size:13px;font-weight:700;font-family:inherit;cursor:pointer">📤 ${lang==='am'?'ላክ':'Send'}</button>
        <button onclick="document.getElementById('cutToSewModal').remove()" style="padding:11px 18px;background:transparent;border:1px solid rgba(255,255,255,0.15);color:var(--white-dim);border-radius:9px;font-family:inherit;cursor:pointer">${lang==='am'?'ሰርዝ':'Cancel'}</button>
      </div>
    </div>`;
  document.body.appendChild(modal);
}

function saveCutToSewing(cutId) {
  const qty = parseInt(document.getElementById('ctsQty').value);
  const data = getData('cutting');
  const r = data.find(x => x.id === cutId);
  if (!r) return;
  const remaining = r.qty - (r.sentQty||0);
  if (!qty || qty <= 0 || qty > remaining) { toast(lang==='am'?'ልክ ያልሆነ ብዛት':'Invalid quantity','error'); return; }

  r.sentQty = (r.sentQty||0) + qty;
  saveData('cutting', data);

  const today = new Date().toISOString().slice(0,10);
  pushProdFlow({ id:uid(), stage:'cutting_sewing', date:today, type:r.type, qty, status:'pending', sentBy:currentUser.username, sentByName:currentUser.name, cutId:r.id });

  document.getElementById('cutToSewModal').remove();
  renderCutting();
  toast(`📤 ${qty} ${r.type} → ${lang==='am'?'ስፌት ክፍል ተልኳል':'sent to Sewing'} ✓`);
}

// Sewing confirms cut pieces physically arrived — credits the "ready to sew" pool
function confirmCutToSewing(id) {
  if (!isSewDeptManager()) { toast(lang==='am'?'⛔ ይህን ማድረግ የሚችለው ስፌት ክፍል ብቻ ነው':'⛔ Only Sewing staff can confirm this','error'); return; }
  const x = updateProdFlow(id, { status:'confirmed', confirmedBy:currentUser.username, confirmedByName:currentUser.name, confirmedAt:new Date().toISOString() });
  if (!x) return;
  const pool = getData('sewingCutStock');
  const ex = pool.find(p => p.type === x.type);
  if (ex) ex.qty += x.qty; else pool.push({ id:uid(), type:x.type, qty:x.qty });
  saveData('sewingCutStock', pool);
  renderSewing(); renderCutting();
  toast(lang==='am'?`✅ ${x.qty} ${x.type} ተረጋግጦ ገባ`:`✅ Confirmed — ${x.qty} ${x.type} received`);
}

// ── SEWING → STORE (finished goods, tracked by type) ──
// "Ready to send" = everything logged under whichever department is LAST in the configured
// sequence (the final stage), minus what's already been sent.
function computeSewingReadyToSend() {
  const lastDept = getLastSewDeptKey();
  const finished = getData('sewing').filter(r => r.dept === lastDept);
  const alreadySent = getProdFlow('sewing_store').filter(x => x.status !== 'rejected');
  const ready = {};
  finished.forEach(r => { ready[r.type] = (ready[r.type]||0) + (r.qty||0); });
  alreadySent.forEach(s => { if (ready[s.type] !== undefined) ready[s.type] -= (s.qty||0); });
  return Object.entries(ready)
    .map(([type, qty]) => ({ type, qty }))
    .filter(x => x.qty > 0);
}

function openSewToStore() {
  if (!isSewDeptManager()) { toast(lang==='am'?'⛔ ይህን ማድረግ የሚችለው ስፌት ክፍል ብቻ ነው':'⛔ Only Sewing staff can do this','error'); return; }
  const ready = computeSewingReadyToSend();
  if (!ready.length) {
    const lastLabel = getAllSewDepts()[getLastSewDeptKey()]?.label || getLastSewDeptKey();
    toast(lang==='am'?`ገና ወደ እቃ ቤት የሚላክ ዝግጁ እቃ የለም (በ${lastLabel} ዘርፍ ላይ መመዝገብ አለበት)`:`Nothing ready to send yet (must be logged under ${lastLabel})`,'error');
    return;
  }

  const modal = document.createElement('div');
  modal.id = 'sewToStoreModal';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.75);z-index:9999;display:flex;align-items:center;justify-content:center;padding:16px';
  modal.innerHTML = `
    <div style="background:#1a1f2e;border-radius:14px;padding:20px;width:100%;max-width:400px;border:1px solid rgba(255,255,255,0.1)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <h3 style="color:var(--gold);font-size:15px;margin:0">📦 ${lang==='am'?'ወደ እቃ ቤት ላክ':'Send to Store'}</h3>
        <button onclick="document.getElementById('sewToStoreModal').remove()" style="background:rgba(255,255,255,0.06);border:none;color:var(--white-dim);width:28px;height:28px;border-radius:8px;cursor:pointer">✕</button>
      </div>
      <div style="margin-bottom:12px">
        <div style="font-size:11px;color:rgba(197,203,216,0.5);font-weight:600;margin-bottom:5px">${lang==='am'?'እቃ':'Item'}</div>
        <select id="stsItem" onchange="stsUpdateAvail()" style="width:100%;padding:9px 12px;background:#0f1420;border:1px solid rgba(255,255,255,0.12);border-radius:9px;color:var(--white);font-family:inherit;font-size:13px;outline:none">
          ${ready.map(r=>`<option value="${r.type}" data-qty="${r.qty}">${r.type} — ${lang==='am'?'ዝግጁ':'ready'}: ${r.qty}</option>`).join('')}
        </select>
      </div>
      <div style="background:rgba(201,168,76,0.08);border:1px solid rgba(201,168,76,0.2);border-radius:9px;padding:10px 14px;margin-bottom:14px;font-size:13px;color:var(--white)">
        ${lang==='am'?'ዝግጁ ብዛት':'Ready qty'}: <strong id="stsAvail" style="color:var(--gold)">${ready[0].qty}</strong>
      </div>
      <div style="margin-bottom:16px">
        <div style="font-size:11px;color:rgba(197,203,216,0.5);font-weight:600;margin-bottom:5px">${lang==='am'?'ብዛት':'Quantity'}</div>
        <input id="stsQty" type="number" min="1" max="${ready[0].qty}" placeholder="0"
          style="width:100%;padding:9px 12px;background:rgba(255,255,255,0.05);border:1px solid rgba(201,168,76,0.3);border-radius:9px;color:var(--white);font-family:inherit;font-size:14px;font-weight:700;outline:none;box-sizing:border-box" />
      </div>
      <div style="display:flex;gap:10px">
        <button onclick="saveSewToStore()" style="flex:1;padding:11px;background:linear-gradient(135deg,var(--gold),#A87820);color:var(--navy);border:none;border-radius:9px;font-size:13px;font-weight:700;font-family:inherit;cursor:pointer">📤 ${lang==='am'?'ላክ':'Send'}</button>
        <button onclick="document.getElementById('sewToStoreModal').remove()" style="padding:11px 18px;background:transparent;border:1px solid rgba(255,255,255,0.15);color:var(--white-dim);border-radius:9px;font-family:inherit;cursor:pointer">${lang==='am'?'ሰርዝ':'Cancel'}</button>
      </div>
    </div>`;
  document.body.appendChild(modal);
}

function stsUpdateAvail() {
  const sel = document.getElementById('stsItem');
  const opt = sel?.selectedOptions[0];
  const avail = opt ? parseInt(opt.dataset.qty)||0 : 0;
  const availEl = document.getElementById('stsAvail');
  const qtyEl = document.getElementById('stsQty');
  if (availEl) availEl.textContent = avail;
  if (qtyEl) qtyEl.max = avail;
}

function saveSewToStore() {
  const sel = document.getElementById('stsItem');
  const type = sel?.value||'';
  const opt = sel?.selectedOptions[0];
  const avail = opt ? parseInt(opt.dataset.qty)||0 : 0;
  const qty = parseInt(document.getElementById('stsQty').value);
  if (!type || !qty || qty <= 0) { toast(lang==='am'?'ብዛት ያስፈልጋል':'Quantity required','error'); return; }
  if (qty > avail) { toast(lang==='am'?'ዝግጁ ካለው በላይ ነው':'Exceeds ready quantity','error'); return; }

  const today = new Date().toISOString().slice(0,10);
  pushProdFlow({ id:uid(), stage:'sewing_store', date:today, type, qty, status:'pending', sentBy:currentUser.username, sentByName:currentUser.name });

  document.getElementById('sewToStoreModal').remove();
  renderSewing();
  toast(`📤 ${qty} ${type} → ${lang==='am'?'እቃ ቤት ተልኳል':'sent to Store'} ✓`);
}

// Store clicks "✅ Confirm" on an incoming finished-goods shipment from Sewing —
// opens a popup so they can pick/enter which shelf it will be placed on before it's confirmed.
function openReceiveShelfModal(id) {
  if (!canActStore()) { toast(lang==='am'?'⛔ ይህን ማድረግ የሚችለው እቃ ቤት ብቻ ነው':'⛔ Only Store staff can confirm this','error'); return; }
  const x = getData('prodFlow').find(p => p.id === id);
  if (!x) return;
  const label = x.type;
  // Existing shelf names used so far (from previously confirmed store items), for quick pick
  const shelves = [...new Set(getData('store').map(r => r.location).filter(l => l && l !== 'ከስፌት' && l !== 'From Sewing'))];

  const modal = document.createElement('div');
  modal.id = 'receiveShelfModal';
  modal.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.75);z-index:9999;display:flex;align-items:center;justify-content:center;padding:16px';
  modal.innerHTML = `
    <div style="background:#1a1f2e;border-radius:14px;padding:20px;width:100%;max-width:400px;border:1px solid rgba(255,255,255,0.1)">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px">
        <h3 style="color:var(--gold);font-size:15px;margin:0">📥 ${label} — ${lang==='am'?'ተቀበል':'Receive'}</h3>
        <button onclick="document.getElementById('receiveShelfModal').remove()" style="background:rgba(255,255,255,0.06);border:none;color:var(--white-dim);width:28px;height:28px;border-radius:8px;cursor:pointer">✕</button>
      </div>
      <div style="background:rgba(79,195,247,0.08);border:1px solid rgba(79,195,247,0.25);border-radius:9px;padding:10px 14px;margin-bottom:14px;font-size:13px;color:var(--white)">
        🪡 <strong style="color:#4FC3F7">${x.qty}</strong> ${label} — ${lang==='am'?'ከስፌት ክፍል':'from Sewing'}
      </div>
      ${shelves.length ? `
      <div style="margin-bottom:10px">
        <div style="font-size:11px;color:rgba(197,203,216,0.5);font-weight:600;margin-bottom:5px">${lang==='am'?'ካሉት መደርደሪያዎች ምረጥ':'Pick an existing shelf'}</div>
        <select id="rsExisting" onchange="document.getElementById('rsShelf').value=this.value" style="width:100%;padding:9px 12px;background:#0f1420;border:1px solid rgba(255,255,255,0.12);border-radius:9px;color:var(--white);font-family:inherit;font-size:13px;outline:none">
          <option value="">— ${lang==='am'?'ምረጥ':'Select'} —</option>
          ${shelves.map(s=>`<option value="${s}">🗄️ ${s}</option>`).join('')}
        </select>
      </div>` : ''}
      <div style="margin-bottom:16px">
        <div style="font-size:11px;color:rgba(197,203,216,0.5);font-weight:600;margin-bottom:5px">${lang==='am'?'መደርደሪያ *':'Shelf *'}</div>
        <input id="rsShelf" type="text" placeholder="${lang==='am'?'ለምሳሌ: መደርደሪያ A1':'e.g. Shelf A1'}"
          style="width:100%;padding:9px 12px;background:rgba(255,255,255,0.05);border:1px solid rgba(201,168,76,0.3);border-radius:9px;color:var(--white);font-family:inherit;font-size:14px;font-weight:700;outline:none;box-sizing:border-box" />
      </div>
      <div style="display:flex;gap:10px">
        <button onclick="confirmSewToStore('${id}')" style="flex:1;padding:11px;background:linear-gradient(135deg,var(--gold),#A87820);color:var(--navy);border:none;border-radius:9px;font-size:13px;font-weight:700;font-family:inherit;cursor:pointer">✅ ${lang==='am'?'ተቀበልኩ':'Confirm'}</button>
        <button onclick="document.getElementById('receiveShelfModal').remove()" style="padding:11px 18px;background:transparent;border:1px solid rgba(255,255,255,0.15);color:var(--white-dim);border-radius:9px;font-family:inherit;cursor:pointer">${lang==='am'?'ሰርዝ':'Cancel'}</button>
      </div>
    </div>`;
  document.body.appendChild(modal);
}

// Store confirms finished goods physically arrived, placed on the chosen shelf — credits sellable store stock
function confirmSewToStore(id) {
  if (!canActStore()) { toast(lang==='am'?'⛔ ይህን ማድረግ የሚችለው እቃ ቤት ብቻ ነው':'⛔ Only Store staff can confirm this','error'); return; }
  const shelf = document.getElementById('rsShelf')?.value.trim();
  if (!shelf) { toast(lang==='am'?'መደርደሪያ ይምረጡ ወይም ያስገቡ':'Please pick or enter a shelf','error'); return; }
  const x = updateProdFlow(id, { status:'confirmed', confirmedBy:currentUser.username, confirmedByName:currentUser.name, confirmedAt:new Date().toISOString() });
  if (!x) return;
  const label = x.type;
  const store = getData('store');
  store.push({ id:uid(), date:x.date, type:label, qty:x.qty, location:shelf });
  saveData('store', store);
  document.getElementById('receiveShelfModal')?.remove();
  renderStore(); renderSewing();
  toast(lang==='am'?`✅ ${x.qty} ${label} → 🗄️ ${shelf} ውስጥ ተቀመጠ`:`✅ Confirmed — ${x.qty} ${label} placed on shelf "${shelf}"`);
}

function renderCuttingFabricReport() {
  const el = document.getElementById('cuttingFabricReport');
  if (!el) return;

  const cuttingRaw  = getData('cuttingRaw');
  const cutting     = getData('cutting');
  const damage      = getData('cuttingDamage');

  if (!cuttingRaw.length) { el.innerHTML = ''; return; }

  // Per-fabric summary
  const rows = cuttingRaw.map(r => {
    const usedInCutting = cutting.filter(c => c.fabric === r.name).reduce((a,c) => a + (c.fabricQtyUsed||0), 0);
    const damagedQty    = damage.filter(d => d.fabric === r.name).reduce((a,d) => a + (d.qty||0), 0);
    const totalReceived = usedInCutting + damagedQty + (r.qty || 0);
    const pctUsed = totalReceived > 0 ? Math.round((usedInCutting / totalReceived) * 100) : 0;
    return { ...r, usedInCutting, damagedQty, totalReceived, pctUsed };
  });

  el.innerHTML = `
    <div class="card mt-0 mb-16" style="padding:16px">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:14px;flex-wrap:wrap;gap:8px">
        <h3 class="card-title" style="margin:0">🧵 ${lang==='am'?'የጨርቅ ክምችት ሪፖርት':'Fabric Stock Report'}</h3>
      </div>

      <div style="overflow-x:auto">
        <table class="data-table" style="min-width:550px">
          <thead><tr>
            <th>${lang==='am'?'የጨርቅ አይነት':'Fabric'}</th>
            <th style="text-align:center">${lang==='am'?'ጠቅ የደረሰ':'Received'}</th>
            <th style="text-align:center">${lang==='am'?'ጥቅም ላይ':'Used'}</th>
            <th style="text-align:center">${lang==='am'?'ዳሜጅ':'Damaged'}</th>
            <th style="text-align:center">${lang==='am'?'ቀሪ ክምችት':'Remaining'}</th>
            <th style="text-align:center">${lang==='am'?'% ጥቅም':'% Used'}</th>
          </tr></thead>
          <tbody>
            ${rows.map(r => {
              const pctBar = `<div style="display:flex;align-items:center;gap:6px">
                <div style="flex:1;height:6px;background:rgba(255,255,255,0.08);border-radius:3px">
                  <div style="width:${r.pctUsed}%;height:100%;background:${r.pctUsed>90?'#E05A5A':r.pctUsed>60?'#FFA726':'#4CAF50'};border-radius:3px"></div>
                </div>
                <span style="font-size:11px;font-weight:700;color:${r.pctUsed>90?'#FF9090':r.pctUsed>60?'#FFA726':'#80e080'}">${r.pctUsed}%</span>
              </div>`;
              const remainColor = r.qty <= 0 ? '#FF9090' : r.qty <= 2 ? '#FFA726' : '#80e080';
              return `<tr>
                <td style="font-weight:600;color:var(--white)">${r.name} <span style="font-size:10px;color:var(--white-dim)">${r.unit||''}</span></td>
                <td style="text-align:center">${r.totalReceived.toFixed(1)}</td>
                <td style="text-align:center;color:#4FC3F7;font-weight:600">${r.usedInCutting.toFixed(1)}</td>
                <td style="text-align:center;color:${r.damagedQty>0?'#FF9090':'var(--white-dim)'}">${r.damagedQty.toFixed(1)}</td>
                <td style="text-align:center;font-weight:700;color:${remainColor}">
                  ${r.qty.toFixed(1)} ${r.qty<=0?`<span style="font-size:10px">❌</span>`:r.qty<=2?`<span style="font-size:10px">⚠️</span>`:''}
                </td>
                <td style="min-width:100px">${pctBar}</td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>`;
}

// ═══════════════════════════════════════════════════════════════
// BRANCH-TO-BRANCH LOAN (ቅርንጫፍ ብድር) — Owner approval + receiver confirmation
// ═══════════════════════════════════════════════════════════════
// Flow: sales staff requests → owner approves → lending branch stock deducted
//       → receiving branch staff confirms receipt → stock added to receiving branch

function loanInit() {
  const myBranch = currentUser.branch;
  const branches = getData('branches').filter(b => !b.noSales && b.id !== myBranch && b.active !== false);

  const toSel = document.getElementById('loanToBranch');
  if (toSel) {
    toSel.innerHTML = branches.map(b => `<option value="${b.id}">${b.name}</option>`).join('')
      || `<option value="">${lang==='am'?'ሌላ ቅርንጫፍ የለም':'No other branches'}</option>`;
  }

  const prodSel = document.getElementById('loanProduct');
  if (prodSel) {
    const stockMap = getBranchStockMap(myBranch);
    const prices = getData('productPrices');
    prodSel.innerHTML = prices.map(p => `<option value="${p.type}">${p.type} (${lang==='am'?'ያለኝ':'have'}: ${stockMap[p.type]||0})</option>`).join('')
      || `<option value="">${lang==='am'?'ምርት የለም':'No products'}</option>`;
    prodSel.onchange = loanCheckAvail;
  }

  ['loanQty','loanNote'].forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
  document.getElementById('loanAvailHint').textContent = '';

  loanCheckAvail();
  loanRenderIncomingBanner();
  loanRenderHistory();
}

function loanCheckAvail() {
  const myBranch = currentUser.branch;
  const product   = document.getElementById('loanProduct')?.value;
  const qty       = parseInt(document.getElementById('loanQty')?.value) || 0;
  const hint = document.getElementById('loanAvailHint');
  if (!hint) return;
  if (!product) { hint.textContent = ''; return; }
  const stockMap = getBranchStockMap(myBranch);
  const avail = stockMap[product] || 0;
  hint.textContent = `${lang==='am'?'ያለኝ ክምችት':'My stock'}: ${avail}`;
  hint.style.color = qty > avail ? '#FF9090' : avail <= 0 ? '#FF9090' : '#80e080';
}

function submitBranchLoan() {
  const toBranch  = document.getElementById('loanToBranch')?.value;
  const product   = document.getElementById('loanProduct')?.value;
  const qty       = parseInt(document.getElementById('loanQty')?.value);
  const note      = document.getElementById('loanNote')?.value.trim();
  const fromBranch = currentUser.branch;
  const date       = new Date().toISOString().slice(0,10);

  if (!toBranch || !product || !qty) {
    toast(lang==='am'?'ሁሉንም ሙሉ':'Fill all required fields','error'); return;
  }
  if (fromBranch === toBranch) {
    toast(lang==='am'?'ለራስ ቅርንጫፍ መላክ አይቻልም':'Cannot send to your own branch','error'); return;
  }
  const stockMap = getBranchStockMap(fromBranch);
  if ((stockMap[product]||0) < qty) {
    toast(`${product}: ${lang==='am'?'በቂ ክምችት የለዎትም':'Insufficient stock at your branch'}`,'error'); return;
  }

  const loans = getData('branchLoans');
  loans.push({
    id: uid(), date, product, qty,
    fromBranch, toBranch, note: note||'',
    requestedBy: currentUser.username, requestedByName: currentUser.name||currentUser.username,
    status: 'pending_owner',   // pending_owner → pending_receiver → confirmed / rejected
    createdAt: new Date().toISOString()
  });
  saveData('branchLoans', loans);
  buildSidebar();
  renderDashboard();
  ['loanQty','loanNote'].forEach(id => { const el = document.getElementById(id); if (el) el.value=''; });
  loanInit();
  toast(lang==='am'?'⏳ የብድር ጥያቄ ለኦነር ተልኳል':'⏳ Loan request sent for owner approval');
}

// ── Owner: approve → deduct from lending branch, move to pending_receiver ──
function approveBranchLoan(id) {
  const loans = getData('branchLoans');
  const ln = loans.find(x => x.id === id);
  if (!ln) return;

  const bs = getData('branchStock');
  let rem = ln.qty;
  for (let i = 0; i < bs.length && rem > 0; i++) {
    if (bs[i].branch === ln.fromBranch && bs[i].type === ln.product) {
      const d = Math.min(bs[i].qty, rem); bs[i].qty -= d; rem -= d;
    }
  }
  if (rem > 0) {
    toast(lang==='am'?'⚠️ በቂ ክምችት ስለሌለ ሙሉ ለሙሉ መቀነስ አልተቻለም':'⚠️ Could not fully deduct — insufficient stock','error');
  }
  saveData('branchStock', bs);

  ln.status = 'pending_receiver';
  ln.approvedBy = currentUser.username;
  ln.approvedAt = new Date().toISOString();
  saveData('branchLoans', loans);

  buildSidebar();
  renderDashboard();
  loanRenderHistory();
  toast(lang==='am'?`✅ ብድር ፀድቋል — ${ln.product} ×${ln.qty} ከ ${ln.fromBranch} ተቀንሷል`:`✅ Loan approved — deducted from lending branch`);
}

function rejectBranchLoan(id) {
  const loans = getData('branchLoans');
  const ln = loans.find(x => x.id === id);
  if (!ln) return;
  ln.status = 'rejected';
  ln.rejectedBy = currentUser.username;
  ln.rejectedAt = new Date().toISOString();
  saveData('branchLoans', loans);
  buildSidebar();
  renderDashboard();
  loanRenderHistory();
  toast(lang==='am'?'❌ የብድር ጥያቄ ውድቅ ተደርጓል':'❌ Loan request rejected');
}

// ── Receiving branch staff: confirm physical receipt → add to their branch stock ──
function confirmBranchLoanReceipt(id) {
  const loans = getData('branchLoans');
  const ln = loans.find(x => x.id === id);
  if (!ln) return;

  if (currentUser.role !== 'sales' || currentUser.branch !== ln.toBranch) {
    toast(lang==='am'?'⛔ ይህን ለማረጋገጥ ፈቃድ የለዎትም':'⛔ Only the receiving branch can confirm this','error');
    return;
  }

  const bs = getData('branchStock');
  const existing = bs.find(x => x.branch === ln.toBranch && x.type === ln.product);
  if (existing) existing.qty += ln.qty;
  else bs.push({ id: uid(), branch: ln.toBranch, type: ln.product, qty: ln.qty });
  saveData('branchStock', bs);

  ln.status = 'confirmed';
  ln.confirmedBy = currentUser.username;
  ln.confirmedByName = currentUser.name || currentUser.username;
  ln.confirmedAt = new Date().toISOString();
  saveData('branchLoans', loans);

  buildSidebar();
  renderDashboard();
  if (typeof renderPOS === 'function') renderPOS();
  loanRenderIncomingBanner();
  loanRenderHistory();
  toast(lang==='am'?`✅ ${ln.qty} ${ln.product} ተቀብለዋል — ወደ ቅርንጫፍ ክምችት ገብቷል`:`✅ ${ln.qty} ${ln.product} received — added to branch stock`);
}

// ── Sales staff: incoming loan banner (loans approved & waiting receipt at MY branch) ──
function loanRenderIncomingBanner() {
  const el = document.getElementById('loanIncomingBanner');
  if (!el) return;
  const myBranch = currentUser.branch;
  const incoming = getData('branchLoans').filter(l => l.status==='pending_receiver' && l.toBranch===myBranch);
  const branches = getData('branches');

  if (!incoming.length) { el.innerHTML = ''; return; }

  if (!document.getElementById('pulseStyle')) {
    const st = document.createElement('style'); st.id='pulseStyle';
    st.textContent = '@keyframes pulse-border{0%,100%{box-shadow:0 0 0 0 rgba(156,106,222,0.35)}50%{box-shadow:0 0 0 6px rgba(156,106,222,0)}}';
    document.head.appendChild(st);
  }

  el.innerHTML = `
    <div style="margin-bottom:14px;padding:14px 16px;background:rgba(156,106,222,0.1);border:1.5px solid rgba(156,106,222,0.45);border-radius:13px;animation:pulse-border 1.8s infinite">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px">
        <span style="font-size:20px">🤝</span>
        <span style="font-size:14px;font-weight:700;color:#C9A8F0">${lang==='am'?`ብድር ደርሷል — ተቀበይ (${incoming.length})`:`Loan arrived — Confirm receipt (${incoming.length})`}</span>
      </div>
      ${incoming.map(ln => {
        const fromBr = branches.find(b=>b.id===ln.fromBranch);
        return `<div style="background:rgba(0,0,0,0.22);border-radius:10px;padding:10px 12px;margin-bottom:8px;display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px">
          <div>
            <div style="font-size:13px;color:#C9A8F0;margin-bottom:3px">📦 <b style="color:var(--white)">${ln.product}</b> ×${ln.qty}</div>
            <div style="font-size:11px;color:var(--white-dim)">🏪 ${lang==='am'?'ከ':'From'}: <b style="color:var(--white)">${fromBr?fromBr.name:ln.fromBranch}</b> &nbsp;|&nbsp; 📅 ${ln.date}</div>
          </div>
          <button onclick="confirmBranchLoanReceipt('${ln.id}')"
            style="padding:8px 16px;border-radius:9px;border:1.5px solid #C9A8F0;background:rgba(156,106,222,0.15);color:#C9A8F0;cursor:pointer;font-family:inherit;font-size:12px;font-weight:700;white-space:nowrap">
            ✅ ${lang==='am'?'ተቀብያለሁ':'Confirm Receipt'}
          </button>
        </div>`;
      }).join('')}
    </div>`;
}

// ── My branch's loan history (requests + items lent out) ──
function loanRenderHistory() {
  const el = document.getElementById('loanHistoryList');
  if (!el) return;
  const myBranch = currentUser.branch;
  const branches = getData('branches');
  const all = getData('branchLoans').filter(l => l.toBranch===myBranch || l.fromBranch===myBranch)
    .sort((a,b)=>b.createdAt.localeCompare(a.createdAt));

  if (!all.length) { el.innerHTML = ''; return; }

  const SC = { pending_owner:'#FFA726', pending_receiver:'#4FC3F7', confirmed:'#4CAF50', rejected:'#E05A5A' };
  const SL = {
    pending_owner: lang==='am'?'ፈቃድ ይጠበቃል':'Pending Approval',
    pending_receiver: lang==='am'?'መድረስ ይጠበቃል':'Awaiting Receipt',
    confirmed: lang==='am'?'ተረጋግጧል':'Confirmed',
    rejected: lang==='am'?'ውድቅ':'Rejected'
  };

  el.innerHTML = `
    <div style="font-size:11px;font-weight:700;color:var(--white-dim);margin-bottom:8px;letter-spacing:0.5px">📋 ${lang==='am'?'የብድር ታሪክ':'Loan History'}</div>
    ${all.map(ln => {
      const isLender = ln.fromBranch === myBranch;
      const otherBr = branches.find(b => b.id === (isLender ? ln.toBranch : ln.fromBranch));
      const sc = SC[ln.status]||'#aaa';
      const dirIcon = isLender ? '📤' : '📥';
      const dirLabel = isLender ? (lang==='am'?'ለ':'To') : (lang==='am'?'ከ':'From');
      return `<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 10px;margin-bottom:5px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:8px;gap:8px;flex-wrap:wrap">
        <div style="flex:1;min-width:0">
          <div style="font-size:12px;font-weight:700;color:var(--white)">${dirIcon} ${ln.product} ×${ln.qty} <span style="font-weight:400;color:var(--white-dim)">${dirLabel} ${otherBr?otherBr.name:'—'}</span></div>
          <div style="font-size:11px;color:var(--white-dim)">${ln.date}</div>
        </div>
        <span style="font-size:10px;font-weight:700;color:${sc};background:${sc}18;padding:2px 8px;border-radius:5px;border:1px solid ${sc}44;white-space:nowrap">${SL[ln.status]||ln.status}</span>
      </div>`;
    }).join('')}`;
}

// ── Owner: full approval queue + history across all branches ──
function renderBranchLoanForOwner() {
  const el = document.getElementById('ownerLoanSection');
  if (!el) return;
  if (currentUser.role !== 'owner') { el.innerHTML = ''; return; }

  const loans = getData('branchLoans');
  const branches = getData('branches');
  const pending = loans.filter(l => l.status === 'pending_owner');
  const SC = { pending_owner:'#FFA726', pending_receiver:'#4FC3F7', confirmed:'#4CAF50', rejected:'#E05A5A' };
  const SL = {
    pending_owner: lang==='am'?'ፈቃድ ይጠበቃል':'Pending Approval',
    pending_receiver: lang==='am'?'መድረስ ይጠበቃል':'Awaiting Receipt',
    confirmed: lang==='am'?'ተረጋግጧል':'Confirmed',
    rejected: lang==='am'?'ውድቅ':'Rejected'
  };

  el.innerHTML = `
    <div class="card" style="padding:16px;margin-top:14px">
      <div style="font-size:13px;font-weight:700;color:#C9A8F0;letter-spacing:1px;margin-bottom:14px">🤝 ${lang==='am'?'ቅርንጫፍ ብድር (ሁሉም)':'BRANCH LOANS (ALL)'}</div>

      ${pending.length ? `
        <div style="margin-bottom:16px;padding:12px 14px;background:rgba(255,167,38,0.08);border:2px solid rgba(255,167,38,0.5);border-radius:11px">
          <div style="font-size:12px;font-weight:700;color:#FFA726;margin-bottom:10px">⏳ ${lang==='am'?`ፈቃድ የሚጠብቁ (${pending.length})`:`Awaiting approval (${pending.length})`}</div>
          ${pending.map(ln => {
            const fromBr = branches.find(b=>b.id===ln.fromBranch);
            const toBr   = branches.find(b=>b.id===ln.toBranch);
            return `<div style="display:flex;align-items:center;justify-content:space-between;gap:8px;padding:7px 10px;margin-bottom:6px;background:rgba(0,0,0,0.2);border-radius:8px;flex-wrap:wrap">
              <div style="flex:1;min-width:0">
                <div style="font-size:13px;font-weight:700;color:var(--white)">${ln.product} ×${ln.qty}</div>
                <div style="font-size:11px;color:var(--white-dim)">🏪 ${fromBr?fromBr.name:ln.fromBranch} → ${toBr?toBr.name:ln.toBranch} &nbsp;·&nbsp; ${ln.date} &nbsp;·&nbsp; ${ln.requestedByName||ln.requestedBy}</div>
                ${ln.note?`<div style="font-size:11px;color:rgba(197,203,216,0.45)">💬 ${ln.note}</div>`:''}
              </div>
              <div style="display:flex;gap:5px;flex-shrink:0">
                <button onclick="approveBranchLoan('${ln.id}')" style="padding:5px 12px;border-radius:7px;border:1px solid rgba(76,175,80,0.5);background:rgba(76,175,80,0.12);color:#80e080;cursor:pointer;font-family:inherit;font-size:12px;font-weight:700">✅ ${lang==='am'?'አፅድቅ':'Approve'}</button>
                <button onclick="rejectBranchLoan('${ln.id}')" style="padding:5px 10px;border-radius:7px;border:1px solid rgba(224,90,90,0.4);background:rgba(224,90,90,0.1);color:#FF9090;cursor:pointer;font-family:inherit;font-size:12px;font-weight:700">❌</button>
              </div>
            </div>`;
          }).join('')}
        </div>` : ''}

      ${loans.length ? `
        <div style="font-size:11px;font-weight:700;color:rgba(197,203,216,0.4);letter-spacing:1px;margin-bottom:8px">${lang==='am'?'ሙሉ ታሪክ':'FULL HISTORY'}</div>
        <div style="overflow-x:auto">
          <table class="data-table" style="min-width:650px">
            <thead><tr>
              ${[lang==='am'?'ቀን':'Date', lang==='am'?'ምርት':'Product', lang==='am'?'ብዛት':'Qty',
                 lang==='am'?'ከቅርንጫፍ':'From', lang==='am'?'ወደ ቅርንጫፍ':'To',
                 lang==='am'?'ጠያቂ':'Requested By', lang==='am'?'ሁኔታ':'Status']
                .map(h=>`<th style="font-size:11px;white-space:nowrap">${h}</th>`).join('')}
            </tr></thead>
            <tbody>
              ${[...loans].sort((a,b)=>b.createdAt.localeCompare(a.createdAt)).map(ln => {
                const fromBr = branches.find(b=>b.id===ln.fromBranch);
                const toBr   = branches.find(b=>b.id===ln.toBranch);
                const sc = SC[ln.status]||'#aaa';
                return `<tr>
                  <td style="white-space:nowrap">${ln.date}</td>
                  <td style="font-weight:600">${ln.product}</td>
                  <td style="text-align:center;font-weight:700;color:var(--gold)">${ln.qty}</td>
                  <td>${fromBr?fromBr.name:ln.fromBranch}</td>
                  <td>${toBr?toBr.name:ln.toBranch}</td>
                  <td style="color:var(--white-dim)">${ln.requestedByName||ln.requestedBy||'—'}</td>
                  <td><span style="font-size:10px;color:${sc};background:${sc}18;padding:2px 7px;border-radius:4px;border:1px solid ${sc}44">${SL[ln.status]||ln.status}</span></td>
                </tr>`;
              }).join('')}
            </tbody>
          </table>
        </div>` : `<div style="text-align:center;color:var(--white-dim);padding:20px;font-size:12px">${lang==='am'?'ብድር የለም':'No loans yet'}</div>`}
    </div>`;
}

// ═══════════════════════════════════════════════════════════════
// SEWING DEPARTMENT — Worker Management + Daily Work Log
// ═══════════════════════════════════════════════════════════════

const SEW_DEPTS = {
  overlock:   { label: 'ኦቨርሎክ',       icon: '🔵' },
  interlock:  { label: 'ኢንተርሎክ (ስፌት)', icon: '🟢' },
  button:     { label: 'መተኮስ',         icon: '🟡' },
  packaging:  { label: 'ማሽግ',          icon: '📦' },
  other:      { label: 'ሌላ',           icon: '➕' }, // legacy bucket kept for old records only — no longer selectable
};
const SEW_DEPT_BASE_COLORS = { overlock:'#4FC3F7', interlock:'#80e080', button:'#FFA726', packaging:'#C9A8F0', other:'#FF9090' };
const SEW_DEPT_COLOR_PALETTE = ['#64B5F6','#AED581','#FFD54F','#F06292','#4DD0E1','#BA68C8','#FF8A65','#90A4AE','#DCE775','#4FC3F7'];

// ── Unified, fully manageable department list (built-in + custom) ──
// Each entry: { key, label, icon, color, active, builtin }
// Built-ins are seeded once so they can be renamed / re-iconed / hidden just like custom ones.
function ensureSewDeptMeta() {
  let meta = getData('sewingDeptMeta');
  if (meta.length) return meta;
  meta = Object.entries(SEW_DEPTS).filter(([k]) => k !== 'other').map(([k,v]) => ({
    key: k, label: v.label, icon: v.icon, color: SEW_DEPT_BASE_COLORS[k] || '#aaa', active: true, builtin: true,
  }));
  // migrate any departments added under the earlier version of this feature
  getData('sewingDepts').forEach(d => {
    meta.push({ key: d.key, label: d.label, icon: d.icon || '➕', color: d.color || '#aaa', active: true, builtin: false });
  });
  saveData('sewingDeptMeta', meta);
  return meta;
}
function getSewDeptMeta() { return ensureSewDeptMeta(); }
function saveSewDeptMeta(meta) { saveData('sewingDeptMeta', meta); }

// The sequence (order) of active departments determines the production flow:
// the FIRST one draws down what arrived from Cutting; the LAST one is what
// becomes ready to send to Store. Reordering in "ዘርፎችን አስተዳድር" changes both.
function getFirstSewDeptKey() {
  const active = getSewDeptMeta().filter(d => d.active !== false);
  return active.length ? active[0].key : 'overlock';
}
function getLastSewDeptKey() {
  const active = getSewDeptMeta().filter(d => d.active !== false);
  return active.length ? active[active.length-1].key : 'packaging';
}

// Full lookup map { key: {label, icon, color, active, builtin} } — includes hidden/inactive depts
// so historical records still display correctly. Also includes the legacy "other" bucket.
function getAllSewDepts() {
  const all = {};
  getSewDeptMeta().forEach(d => { all[d.key] = { label: d.label, icon: d.icon, color: d.color, active: d.active !== false, builtin: !!d.builtin }; });
  all.other = { label: SEW_DEPTS.other.label, icon: SEW_DEPTS.other.icon, color: SEW_DEPT_BASE_COLORS.other, active: false, builtin: true, legacy: true };
  return all;
}
function getSewDeptColor(key) { return (getAllSewDepts()[key] || {}).color || '#aaa'; }
function nextSewDeptColor() {
  const used = new Set(getSewDeptMeta().map(d => d.color));
  return SEW_DEPT_COLOR_PALETTE.find(c => !used.has(c)) || SEW_DEPT_COLOR_PALETTE[Math.floor(Math.random()*SEW_DEPT_COLOR_PALETTE.length)];
}

// Only the sewing-department head or the owner may create/edit/hide/delete departments
function isSewDeptManager() {
  return !!currentUser && (currentUser.role === 'owner' || currentUser.role === 'sewing');
}

// Build <option> HTML for a sewing-department select: active depts + "➕ ዘርፍ ጨምር" trigger.
// If the currently-selected value has since been hidden/deleted, keep it visible (marked) so the
// value doesn't silently change under the user. The legacy "other" bucket works the same way.
function sewDeptOptionsHTML(selectedKey) {
  const meta = getSewDeptMeta().filter(d => d.active !== false);
  let html = meta.map(d => `<option value="${d.key}" ${selectedKey===d.key?'selected':''}>${d.icon} ${d.label}</option>`).join('');
  if (selectedKey && selectedKey !== '__addnew__' && !meta.find(d => d.key === selectedKey)) {
    const hidden = getAllSewDepts()[selectedKey];
    if (hidden) html += `<option value="${selectedKey}" selected>${hidden.icon} ${hidden.label} (${lang==='am'?'ቦዝቷል':'inactive'})</option>`;
  }
  html += `<option value="__addnew__">➕ ዘርፍ ጨምር</option>`;
  return html;
}

let _sewDeptAddTargetId = null;
let _sewDeptEditKey = null;

function handleSewDeptSelectChange(selectEl) {
  if (selectEl.value !== '__addnew__') {
    selectEl.dataset.prev = selectEl.value;
    if (selectEl.id === 'sewDept') updateSewTypeSelectForDept();
    return;
  }
  if (!isSewDeptManager()) {
    toast(lang==='am' ? 'አዲስ ዘርፍ መጨመር የሚችሉት የስፌት ሃላፊ ወይም ባለቤት ብቻ ናቸው' : 'Only the sewing head or the owner can add a new department', 'error');
    selectEl.value = selectEl.dataset.prev || getFirstSewDeptKey();
    return;
  }
  _sewDeptAddTargetId = selectEl.id;
  _sewDeptEditKey = null;
  document.querySelector('#sewDeptAddModal .modal-title').textContent = '➕ አዲስ ዘርፍ ጨምር';
  const nameEl = document.getElementById('sewNewDeptName'); if (nameEl) nameEl.value = '';
  const iconEl = document.getElementById('sewNewDeptIcon'); if (iconEl) iconEl.value = '🔴';
  openModal('sewDeptAddModal');
}

function openSewDeptAddDirect() {
  if (!isSewDeptManager()) {
    toast(lang==='am' ? 'አዲስ ዘርፍ መጨመር የሚችሉት የስፌት ሃላፊ ወይም ባለቤት ብቻ ናቸው' : 'Only the sewing head or the owner can add a new department', 'error');
    return;
  }
  _sewDeptAddTargetId = null; // no select to sync back — just add & refresh
  _sewDeptEditKey = null;
  document.querySelector('#sewDeptAddModal .modal-title').textContent = '➕ አዲስ ዘርፍ ጨምር';
  const nameEl = document.getElementById('sewNewDeptName'); if (nameEl) nameEl.value = '';
  const iconEl = document.getElementById('sewNewDeptIcon'); if (iconEl) iconEl.value = '🔴';
  openModal('sewDeptAddModal');
}

function cancelSewDeptAdd() {
  closeModal('sewDeptAddModal');
  if (_sewDeptAddTargetId) {
    const sel = document.getElementById(_sewDeptAddTargetId);
    if (sel) sel.value = sel.dataset.prev || getFirstSewDeptKey();
  }
  _sewDeptAddTargetId = null;
  _sewDeptEditKey = null;
}

function saveSewDeptAdd() {
  if (!isSewDeptManager()) {
    toast(lang==='am' ? 'ይህን ማድረግ የሚችሉት የስፌት ሃላፊ ወይም ባለቤት ብቻ ናቸው' : 'Only the sewing head or the owner can do this', 'error');
    cancelSewDeptAdd();
    return;
  }
  const name = document.getElementById('sewNewDeptName')?.value.trim();
  const icon = document.getElementById('sewNewDeptIcon')?.value || '🔴';
  if (!name) { toast(lang==='am'?'የዘርፍ ስም ያስፈልጋል':'Department name required','error'); return; }

  const meta = getSewDeptMeta();
  const dup = meta.some(d => d.key !== _sewDeptEditKey && d.label.trim().toLowerCase() === name.toLowerCase());
  if (dup) { toast(lang==='am'?'ይህ ዘርፍ ቀድሞ አለ':'This department already exists','error'); return; }

  if (_sewDeptEditKey) {
    const d = meta.find(x => x.key === _sewDeptEditKey);
    if (d) { d.label = name; d.icon = icon; }
    saveSewDeptMeta(meta);
    closeModal('sewDeptAddModal');
    toast(lang==='am'?'✅ ዘርፍ ተስተካክሏል':'Department updated ✓');
  } else {
    const key = 'dept_' + uid();
    meta.push({ key, label: name, icon, color: nextSewDeptColor(), active: true, builtin: false });
    saveSewDeptMeta(meta);
    closeModal('sewDeptAddModal');
    toast(lang==='am'?'✅ ዘርፍ ተጨምሯል':'Department added ✓');
    if (_sewDeptAddTargetId) {
      const sel = document.getElementById(_sewDeptAddTargetId);
      if (sel) {
        sel.innerHTML = sewDeptOptionsHTML(key);
        sel.dataset.prev = key;
        if (_sewDeptAddTargetId === 'sewDept') updateSewTypeSelectForDept();
      }
    }
  }
  _sewDeptAddTargetId = null;
  _sewDeptEditKey = null;
  renderSewing();
  if (!document.getElementById('sewDeptManageModal')?.classList.contains('hidden')) renderSewDeptManageList();
}

// ── Manage departments: edit / hide-show / permanently delete (owner + sewing head) ──
function openSewDeptManage() {
  if (!isSewDeptManager()) {
    toast(lang==='am' ? 'ዘርፎችን ማስተዳደር የሚችሉት የስፌት ሃላፊ ወይም ባለቤት ብቻ ናቸው' : 'Only the sewing head or the owner can manage departments', 'error');
    return;
  }
  renderSewDeptManageList();
  openModal('sewDeptManageModal');
}

function renderSewDeptManageList() {
  const el = document.getElementById('sewDeptManageList');
  if (!el) return;
  const meta = getSewDeptMeta();
  const data = getData('sewing');
  const noteEl = document.getElementById('sewDeptManageNote');
  if (noteEl) noteEl.innerHTML = meta.length
    ? (lang==='am'
        ? `⬆️⬇️ ተጠቅመው ቅደም ተከተል ያስተካክሉ — <b style="color:#80e080">የመጀመሪያው</b> ዘርፍ ከቆረጣ የደረሰውን ይቀንሳል፣ <b style="color:#4FC3F7">የመጨረሻው</b> ዘርፍ ወደ እቃ ቤት መላክ ያስችላል`
        : `Use ⬆️⬇️ to set the order — the <b style="color:#80e080">first</b> department draws down what arrived from Cutting, the <b style="color:#4FC3F7">last</b> department is what becomes ready to send to Store`)
    : '';
  el.innerHTML = meta.length ? meta.map((d,i) => {
    const used = data.some(r => r.dept === d.key);
    const canDelete = !d.builtin && !used;
    const isActive = d.active !== false;
    const isFirst = i === 0, isLast = i === meta.length - 1;
    return `<div style="display:flex;align-items:center;justify-content:space-between;gap:8px;padding:8px 10px;border:1px solid rgba(255,255,255,0.08);border-radius:8px;margin-bottom:6px;opacity:${isActive?1:0.55}">
      <div style="display:flex;align-items:center;gap:8px;min-width:0">
        <div style="display:flex;flex-direction:column;gap:1px">
          <button onclick="moveSewDeptUp('${d.key}')" ${isFirst?'disabled':''} title="${lang==='am'?'ወደ ላይ':'Move up'}" style="width:18px;height:14px;display:flex;align-items:center;justify-content:center;font-size:9px;border:none;border-radius:3px;background:${isFirst?'transparent':'rgba(255,255,255,0.08)'};color:${isFirst?'rgba(255,255,255,0.15)':'var(--white-dim)'};cursor:${isFirst?'default':'pointer'}">▲</button>
          <button onclick="moveSewDeptDown('${d.key}')" ${isLast?'disabled':''} title="${lang==='am'?'ወደ ታች':'Move down'}" style="width:18px;height:14px;display:flex;align-items:center;justify-content:center;font-size:9px;border:none;border-radius:3px;background:${isLast?'transparent':'rgba(255,255,255,0.08)'};color:${isLast?'rgba(255,255,255,0.15)':'var(--white-dim)'};cursor:${isLast?'default':'pointer'}">▼</button>
        </div>
        <span style="font-size:10px;color:rgba(197,203,216,0.4);font-weight:700;min-width:14px">${i+1}</span>
        <span style="font-size:16px">${d.icon}</span>
        <span style="font-size:13px;font-weight:600;color:var(--white);white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${d.label}</span>
        ${isFirst?`<span style="font-size:9px;color:#80e080;white-space:nowrap;font-weight:700">● ${lang==='am'?'መጀመሪያ':'First'}</span>`:''}
        ${isLast?`<span style="font-size:9px;color:#4FC3F7;white-space:nowrap;font-weight:700">● ${lang==='am'?'መጨረሻ':'Last'}</span>`:''}
        ${d.builtin?`<span style="font-size:9px;color:rgba(197,203,216,0.4);white-space:nowrap">(${lang==='am'?'መደበኛ':'built-in'})</span>`:''}
        ${!isActive?`<span style="font-size:9px;color:#FF9090;white-space:nowrap">(${lang==='am'?'ቦዝቷል':'hidden'})</span>`:''}
      </div>
      <div style="display:flex;gap:4px;flex-shrink:0">
        <button onclick="openSewDeptEdit('${d.key}')" title="${lang==='am'?'አስተካክል':'Edit'}" style="padding:4px 8px;border-radius:6px;border:1px solid rgba(201,168,76,0.35);background:rgba(201,168,76,0.08);color:var(--gold);cursor:pointer;font-size:11px">✏️</button>
        <button onclick="toggleSewDeptActive('${d.key}')" title="${isActive?(lang==='am'?'አግድ':'Hide'):(lang==='am'?'አንቃ':'Show')}" style="padding:4px 8px;border-radius:6px;border:1px solid ${isActive?'rgba(224,90,90,0.35)':'rgba(76,175,80,0.35)'};background:${isActive?'rgba(224,90,90,0.08)':'rgba(76,175,80,0.08)'};color:${isActive?'#FF9090':'#80e080'};cursor:pointer;font-size:11px">${isActive?(lang==='am'?'አግድ':'Hide'):(lang==='am'?'አንቃ':'Show')}</button>
        ${canDelete?`<button onclick="deleteSewDeptPermanent('${d.key}')" title="${lang==='am'?'ሙሉ በሙሉ ሰርዝ':'Delete permanently'}" style="padding:4px 8px;border-radius:6px;border:1px solid rgba(224,90,90,0.4);background:rgba(224,90,90,0.12);color:#FF9090;cursor:pointer;font-size:11px">🗑</button>`:''}
      </div>
    </div>`;
  }).join('') : `<div style="text-align:center;color:var(--white-dim);padding:16px;font-size:12px">${lang==='am'?'ምንም ዘርፍ የለም':'No departments yet'}</div>`;
}

function moveSewDeptUp(key) {
  if (!isSewDeptManager()) return;
  const meta = getSewDeptMeta();
  const idx = meta.findIndex(d => d.key === key);
  if (idx <= 0) return;
  [meta[idx-1], meta[idx]] = [meta[idx], meta[idx-1]];
  saveSewDeptMeta(meta);
  renderSewDeptManageList();
  renderSewing();
}

function moveSewDeptDown(key) {
  if (!isSewDeptManager()) return;
  const meta = getSewDeptMeta();
  const idx = meta.findIndex(d => d.key === key);
  if (idx === -1 || idx >= meta.length - 1) return;
  [meta[idx], meta[idx+1]] = [meta[idx+1], meta[idx]];
  saveSewDeptMeta(meta);
  renderSewDeptManageList();
  renderSewing();
}

function openSewDeptEdit(key) {
  const d = getSewDeptMeta().find(x => x.key === key);
  if (!d) return;
  _sewDeptAddTargetId = null;
  _sewDeptEditKey = key;
  document.querySelector('#sewDeptAddModal .modal-title').textContent = lang==='am' ? '✏️ ዘርፍ አስተካክል' : '✏️ Edit Department';
  document.getElementById('sewNewDeptName').value = d.label;
  document.getElementById('sewNewDeptIcon').value = d.icon;
  openModal('sewDeptAddModal');
}

function toggleSewDeptActive(key) {
  if (!isSewDeptManager()) return;
  const meta = getSewDeptMeta();
  const d = meta.find(x => x.key === key);
  if (!d) return;
  d.active = d.active === false ? true : false;
  saveSewDeptMeta(meta);
  renderSewDeptManageList();
  renderSewing();
  toast(lang==='am'?'✓ ተስተካክሏል':'Updated ✓');
}

function deleteSewDeptPermanent(key) {
  if (!isSewDeptManager()) return;
  const meta = getSewDeptMeta();
  const d = meta.find(x => x.key === key);
  if (!d || d.builtin) return;
  const used = getData('sewing').some(r => r.dept === key);
  if (used) { toast(lang==='am'?'ይህ ዘርፍ ስራ ስለተመዘገበበት ማጥፋት አይቻልም — ይልቅ "አግድ" ይጠቀሙ':'This department has records — hide it instead of deleting','error'); return; }
  if (!confirm(lang==='am'?'እርግጠኛ ነዎት ይህን ዘርፍ ሙሉ በሙሉ ማጥፋት ይፈልጋሉ?':'Are you sure you want to permanently delete this department?')) return;
  saveSewDeptMeta(meta.filter(x => x.key !== key));
  renderSewDeptManageList();
  renderSewing();
  toast(lang==='am'?'🗑 ዘርፍ ጠፍቷል':'Department deleted');
}

// ── Department drill-down: how much + which worker(s) ──
function openSewDeptDetail(deptKey) {
  const dept = getAllSewDepts()[deptKey] || { label: deptKey, icon: '👤', color:'#aaa' };
  const data    = getData('sewing');
  const workers = getData('sewingWorkers');
  const today   = new Date().toISOString().slice(0,10);
  const weekAgo = new Date(Date.now() -  6*86400000).toISOString().slice(0,10);
  const monthAgo= new Date(Date.now() - 29*86400000).toISOString().slice(0,10);
  const sum = arr => arr.reduce((a,r)=>a+(r.qty||0),0);
  const dmgSum = arr => arr.reduce((a,r)=>a+(r.dmgQty||0),0);

  const deptRecs = data.filter(r => r.dept === deptKey);
  const kpi = {
    today: sum(deptRecs.filter(r=>r.date===today)),
    week:  sum(deptRecs.filter(r=>r.date>=weekAgo)),
    month: sum(deptRecs.filter(r=>r.date>=monthAgo)),
    dmgWeek: dmgSum(deptRecs.filter(r=>r.date>=weekAgo)),
  };

  const names = new Set();
  deptRecs.forEach(r => names.add(r.worker));
  workers.filter(w => w.dept === deptKey).forEach(w => names.add(w.name));

  const rows = [...names].map(name => {
    const wRecs = deptRecs.filter(r => r.worker === name);
    const w = workers.find(x => x.name === name);
    return {
      name,
      active: w ? w.active !== false : true,
      today: sum(wRecs.filter(r=>r.date===today)),
      week:  sum(wRecs.filter(r=>r.date>=weekAgo)),
      month: sum(wRecs.filter(r=>r.date>=monthAgo)),
      dmgWeek: dmgSum(wRecs.filter(r=>r.date>=weekAgo)),
    };
  }).sort((a,b) => b.week - a.week || b.month - a.month || a.name.localeCompare(b.name));

  document.getElementById('sewDeptDetailTitle').innerHTML = `${dept.icon} ${dept.label}`;
  document.getElementById('sewDeptDetailBody').innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:16px">
      ${[
        {icon:'📅', val:kpi.today,   label: lang==='am'?'ዛሬ':'Today'},
        {icon:'📆', val:kpi.week,    label: lang==='am'?'ሳምንት':'Week',  color:'#4FC3F7'},
        {icon:'🗓️', val:kpi.month,   label: lang==='am'?'ወር':'Month',   color:'var(--gold)'},
        {icon:'⚠️', val:kpi.dmgWeek, label: lang==='am'?'ዳሜጅ (ሳምን)':'Dmg (wk)', color:'#FF9090'},
      ].map(k=>`<div style="text-align:center;padding:8px 4px;background:rgba(255,255,255,0.03);border-radius:8px">
        <div style="font-size:12px">${k.icon}</div>
        <div style="font-size:18px;font-weight:700;color:${k.color||'var(--white)'}">${k.val}</div>
        <div style="font-size:10px;color:rgba(197,203,216,0.45)">${k.label}</div>
      </div>`).join('')}
    </div>
    <div style="font-size:11px;font-weight:700;color:rgba(197,203,216,0.4);letter-spacing:0.8px;margin-bottom:8px">
      ${lang==='am'?'በሰራተኛ ዝርዝር':'BY WORKER'}
    </div>
    ${rows.length ? `
    <div style="overflow-x:auto">
      <table class="data-table" style="min-width:420px">
        <thead><tr>
          ${[lang==='am'?'ሰራተኛ':'Worker', lang==='am'?'ዛሬ':'Today', lang==='am'?'ሳምንት':'Week', lang==='am'?'ወር':'Month', lang==='am'?'ዳሜጅ':'Dmg']
            .map(h=>`<th>${h}</th>`).join('')}
        </tr></thead>
        <tbody>
          ${rows.map(r=>`<tr ${r.active?'':'style="opacity:0.5"'}>
            <td style="font-weight:600;color:var(--white)">${r.name}${r.active?'':` <span style="font-size:9px;color:rgba(197,203,216,0.4)">(${lang==='am'?'ቦዝቷል':'inactive'})</span>`}</td>
            <td style="text-align:center;font-weight:700;color:${dept.color||'var(--gold)'}">${r.today||'—'}</td>
            <td style="text-align:center;font-weight:700;color:#4FC3F7">${r.week||'—'}</td>
            <td style="text-align:center;color:var(--white-dim)">${r.month||'—'}</td>
            <td style="text-align:center">${r.dmgWeek>0?`<span class="badge badge-damage">${r.dmgWeek}</span>`:'—'}</td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>` : `<div style="text-align:center;color:var(--white-dim);padding:20px;font-size:12px">${lang==='am'?'በዚህ ዘርፍ ገና ስራ የለም':'No work logged in this department yet'}</div>`}

    <div style="font-size:11px;font-weight:700;color:rgba(197,203,216,0.4);letter-spacing:0.8px;margin:18px 0 8px">
      ${lang==='am'?'ሙሉ ዝርዝር ታሪክ':'FULL DETAILED HISTORY'}
    </div>
    ${deptRecs.length ? `
    <div style="overflow-x:auto">
      <table class="data-table" style="min-width:480px">
        <thead><tr>
          ${(lang==='am'
            ? ['ቀን','ሰራተኛ','አይነት','ብዛት','ዳሜጅ','ማስታወሻ']
            : ['Date','Worker','Type','Qty','Dmg','Note']).map(h=>`<th>${h}</th>`).join('')}
        </tr></thead>
        <tbody>
          ${[...deptRecs].sort((a,b)=>b.date.localeCompare(a.date)).map(r=>`<tr>
            <td style="white-space:nowrap;color:var(--white-dim)">${r.date}</td>
            <td style="font-weight:600;color:var(--white)">${r.worker||'—'}</td>
            <td>${r.type||'—'}</td>
            <td style="text-align:center;font-weight:700;color:${dept.color||'var(--gold)'}">${r.qty}</td>
            <td style="text-align:center">${r.dmgQty>0?`<span class="badge badge-damage">${r.dmgQty}</span>`:'—'}</td>
            <td style="color:var(--white-dim)">${r.note||'—'}</td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>` : `<div style="text-align:center;color:var(--white-dim);padding:20px;font-size:12px">${lang==='am'?'ገና ምንም መዝገብ የለም':'No records yet'}</div>`}
  `;
  openModal('sewDeptDetailModal');
}

// ── Worker CRUD ──

function openSewWorkerModal(id) {
  document.getElementById('sewWkEditId').value = id || '';
  const deptSel = document.getElementById('sewWkDept');
  if (id) {
    const w = getData('sewingWorkers').find(x => x.id === id);
    if (!w) return;
    document.getElementById('sewWkName').value  = w.name;
    if (deptSel) { deptSel.innerHTML = sewDeptOptionsHTML(w.dept); deptSel.dataset.prev = w.dept; }
    document.getElementById('sewWkPhone').value = w.phone || '';
    document.querySelector('#sewWorkerModal .modal-title').textContent = '👤 ሰራተኛ አስተካክል';
  } else {
    ['sewWkName','sewWkPhone'].forEach(id => { const el=document.getElementById(id); if(el) el.value=''; });
    if (deptSel) { deptSel.innerHTML = sewDeptOptionsHTML(getFirstSewDeptKey()); deptSel.dataset.prev = getFirstSewDeptKey(); }
    document.querySelector('#sewWorkerModal .modal-title').textContent = '👤 ሰራተኛ ጨምር';
  }
  openModal('sewWorkerModal');
}

function saveSewWorker() {
  const name  = document.getElementById('sewWkName')?.value.trim();
  const dept  = document.getElementById('sewWkDept')?.value;
  const phone = document.getElementById('sewWkPhone')?.value.trim();
  const editId= document.getElementById('sewWkEditId')?.value;

  if (!name) { toast(lang==='am'?'ስም ያስፈልጋል':'Name required','error'); return; }
  if (!dept || dept === '__addnew__') { toast(lang==='am'?'ሙያ ይምረጡ':'Please select a department','error'); return; }

  const workers = getData('sewingWorkers');
  if (editId) {
    const w = workers.find(x => x.id === editId);
    if (w) { w.name = name; w.dept = dept; w.phone = phone; }
  } else {
    workers.push({ id: uid(), name, dept, phone: phone||'', active: true, createdAt: new Date().toISOString() });
  }
  saveData('sewingWorkers', workers);
  closeModal('sewWorkerModal');
  renderSewing();
  toast(lang==='am'?'ሰራተኛ ተቀምጧል ✓':'Worker saved ✓');
}

function toggleSewWorker(id) {
  const workers = getData('sewingWorkers');
  const w = workers.find(x => x.id === id);
  if (w) w.active = !w.active;
  saveData('sewingWorkers', workers);
  renderSewing();
}

// ── Modal open (populate worker dropdown) ──
function sewOpenModal() {
  const workers = getData('sewingWorkers').filter(w => w.active !== false);
  const sel = document.getElementById('sewWorker');
  if (sel) {
    if (!workers.length) {
      toast(lang==='am'?'ሰራተኛ ቀድሞ ጨምሩ':'Please add workers first','error');
      return;
    }
    const allDepts = getAllSewDepts();
    sel.innerHTML = workers.map(w => `<option value="${w.name}">${allDepts[w.dept]?.icon||'👤'} ${w.name} (${allDepts[w.dept]?.label||w.dept})</option>`).join('');
  }
  const deptSel = document.getElementById('sewDept');
  const firstDept = getFirstSewDeptKey();
  if (deptSel) { deptSel.innerHTML = sewDeptOptionsHTML(firstDept); deptSel.dataset.prev = firstDept; }
  const typeSel = document.getElementById('sewType');
  if (typeSel) typeSel.innerHTML = sewTypeOptionsForDept(firstDept);
  if (!getData('productPrices').length) {
    toast(lang==='am'?'⚠️ መጀመሪያ ኦነሩ የልብስ አይነቶችን በ"የልብስ ዋጋ ቁጥጥር" ገጽ ላይ ማስገባት አለበት':'⚠️ The owner must first add clothing types on the "Price Control" page','error');
  }
  const d = document.getElementById('sewDate');
  if (d && !d.value) d.value = new Date().toISOString().slice(0,10);
  ['sewNote'].forEach(id => { const el=document.getElementById(id); if(el) el.value=''; });
  const q = document.getElementById('sewQty'); if(q) q.value='';
  const dq = document.getElementById('sewDmgQty'); if(dq) dq.value='0';
  openModal('sewingModal');
}

// ── Updated renderSewing ──
function renderSewing() {
  // ── 0. Toolbar: only sewing head / owner may add new departments ──
  const btnAddSewDept = document.getElementById('btnAddSewDept');
  if (btnAddSewDept) btnAddSewDept.style.display = isSewDeptManager() ? '' : 'none';

  // ── 1. Cut pieces from Cutting: incoming (confirm) + ready-to-sew pool ──
  const sRawEl = document.getElementById('sewingRawCards');
  if (sRawEl) {
    const cutStock = getData('sewingCutStock').filter(p => p.qty > 0);
    const incomingHTML = prodFlowPendingHTML('cutting_sewing', isSewDeptManager(), 'confirmCutToSewing',
      x => `✂️ ${x.qty} ${x.type}`);
    const poolHTML = cutStock.length ? `
      <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:12px;padding:10px 12px;
                  background:rgba(201,168,76,0.05);border:1px solid rgba(201,168,76,0.18);border-radius:9px">
        <div style="width:100%;font-size:10px;color:var(--gold);font-weight:700;margin-bottom:6px">✂️ ${lang==='am'?'ለስፌት ዝግጁ (ከቆረጣ)':'Ready to Sew (from Cutting)'}</div>
        ${cutStock.map(r=>`<div style="padding:5px 10px;background:rgba(0,0,0,0.18);border:1px solid rgba(201,168,76,0.25);border-radius:7px;text-align:center">
          <div style="font-size:14px;font-weight:700;color:var(--gold)">${r.qty}</div>
          <div style="font-size:11px;color:var(--white)">${r.type}${r.size?` (${r.size})`:''}</div>
        </div>`).join('')}
      </div>` : '';
    sRawEl.innerHTML = incomingHTML + poolHTML;
  }

  // ── 1b. Send finished goods (packaging output) to Store ──
  const sewToStoreBtn = document.getElementById('btnSewToStore');
  if (sewToStoreBtn) sewToStoreBtn.style.display = isSewDeptManager() ? '' : 'none';

  // ── 1c. Finished products ready to send — visible at a glance ──
  const readyEl = document.getElementById('sewReadyToSendCards');
  if (readyEl) {
    const ready = computeSewingReadyToSend();
    readyEl.innerHTML = ready.length ? `
      <div style="display:flex;flex-wrap:wrap;gap:8px">
        ${ready.map(r => `<div style="padding:10px 16px;background:rgba(76,175,80,0.08);border:1px solid rgba(76,175,80,0.25);border-radius:10px;text-align:center;min-width:90px">
          <div style="font-size:20px;font-weight:800;color:#80e080">${r.qty}</div>
          <div style="font-size:11.5px;font-weight:600;color:var(--white);margin-top:2px">${r.type}</div>
        </div>`).join('')}
      </div>` : `<div style="text-align:center;color:var(--white-dim);padding:16px;font-size:12px">${lang==='am'?`ገና ምንም የተጠናቀቀ ምርት የለም — ${getAllSewDepts()[getLastSewDeptKey()]?.label||getLastSewDeptKey()} ዘርፍ ላይ ይመዝገብ`:`No finished products yet — register them under ${getAllSewDepts()[getLastSewDeptKey()]?.label||getLastSewDeptKey()}`}</div>`;
  }

  const data    = getData('sewing');
  const workers = getData('sewingWorkers');
  const today   = new Date().toISOString().slice(0,10);
  const weekAgo = new Date(Date.now() -  6*86400000).toISOString().slice(0,10);
  const monthAgo= new Date(Date.now() - 29*86400000).toISOString().slice(0,10);
  const sum = arr => arr.reduce((a,r)=>a+(r.qty||0),0);
  const dmgSum = arr => arr.reduce((a,r)=>a+(r.dmgQty||0),0);

  // ── 2. KPI + dept breakdown + bar chart ──
  const statsEl = document.getElementById('sewingStats');
  if (statsEl) {
    const days7 = [...Array(7)].map((_,i)=>{
      const d=new Date(Date.now()-(6-i)*86400000);
      return { date:d.toISOString().slice(0,10), label:['እሁድ','ሰኞ','ማክሰ','ረቡዕ','ሐሙስ','አርብ','ቅዳሜ'][d.getDay()] };
    });
    const maxDay=Math.max(...days7.map(({date})=>sum(data.filter(r=>r.date===date))),1);

    // Dept stats: today + week for each dept (built-in + any custom ones added by the sewing head / owner)
    const allDepts = getAllSewDepts();
    const deptStats = Object.entries(allDepts).map(([key,{label,icon,active}])=>({
      key, label, icon,
      today: sum(data.filter(r=>r.dept===key && r.date===today)),
      week:  sum(data.filter(r=>r.dept===key && r.date>=weekAgo)),
      active,
    })).filter(d => d.active || d.week > 0 || d.today > 0); // hide hidden/legacy depts with no data
    const activeDepts = deptStats.filter(d=>d.week>0||d.today>0);

    // Dept colors for stacked bars
    const deptColors = {}; Object.keys(allDepts).forEach(k => deptColors[k] = getSewDeptColor(k));

    statsEl.innerHTML = `
      <div style="padding:14px 16px;background:rgba(255,255,255,0.02);border:1px solid rgba(255,255,255,0.07);border-radius:12px;margin-bottom:12px">

        <!-- Top KPI totals -->
        <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-bottom:16px">
          ${[
            {icon:'📅',val:sum(data.filter(r=>r.date===today)),     label:lang==='am'?'ዛሬ ጠቅ':'Today Total'},
            {icon:'📆',val:sum(data.filter(r=>r.date>=weekAgo)),    label:lang==='am'?'ሳምን ጠቅ':'Week Total',  color:'#4FC3F7'},
            {icon:'🗓️',val:sum(data.filter(r=>r.date>=monthAgo)),   label:lang==='am'?'ወር ጠቅ':'Month Total',  color:'var(--gold)'},
            {icon:'⚠️',val:dmgSum(data.filter(r=>r.date>=weekAgo)), label:lang==='am'?'ዳሜጅ (ሳምን)':'Dmg (wk)', color:'#FF9090'},
          ].map(k=>`<div style="text-align:center;padding:8px 4px;background:rgba(255,255,255,0.03);border-radius:8px">
            <div style="font-size:12px">${k.icon}</div>
            <div style="font-size:20px;font-weight:700;color:${k.color||'var(--white)'}">${k.val}</div>
            <div style="font-size:10px;color:rgba(197,203,216,0.45)">${k.label}</div>
          </div>`).join('')}
        </div>

        <!-- Per-dept breakdown table: ዛሬ + ሳምንት -->
        <div style="font-size:10px;font-weight:700;color:rgba(197,203,216,0.4);letter-spacing:0.8px;margin-bottom:8px">
          ${lang==='am'?'በዘርፍ ምርት':'BY DEPARTMENT'}
        </div>
        <div style="overflow-x:auto;margin-bottom:14px">
          <table style="width:100%;border-collapse:collapse">
            <thead>
              <tr>
                <th style="text-align:left;font-size:10px;color:rgba(197,203,216,0.4);font-weight:600;padding:4px 8px;border-bottom:1px solid rgba(255,255,255,0.06)">${lang==='am'?'ዘርፍ':'Dept'}</th>
                <th style="text-align:center;font-size:10px;color:rgba(197,203,216,0.4);font-weight:600;padding:4px 8px;border-bottom:1px solid rgba(255,255,255,0.06)">${lang==='am'?'ዛሬ':'Today'}</th>
                <th style="text-align:center;font-size:10px;color:rgba(197,203,216,0.4);font-weight:600;padding:4px 8px;border-bottom:1px solid rgba(255,255,255,0.06)">${lang==='am'?'ሳምንት (7 ቀን)':'Week (7d)'}</th>
                <th style="text-align:left;font-size:10px;color:rgba(197,203,216,0.4);font-weight:600;padding:4px 8px;border-bottom:1px solid rgba(255,255,255,0.06)">${lang==='am'?'የሳምንት ግራፍ':'Week chart'}</th>
              </tr>
            </thead>
            <tbody>
              ${deptStats.map(d=>{
                const color = deptColors[d.key]||'#aaa';
                const weekTotal = sum(data.filter(r=>r.date>=weekAgo));
                const pct = weekTotal>0 ? Math.round((d.week/weekTotal)*100) : 0;
                return `<tr onclick="openSewDeptDetail('${d.key}')" style="border-bottom:1px solid rgba(255,255,255,0.04);cursor:pointer" title="${lang==='am'?'ዝርዝር ለማየት ይንኩ':'Tap to see details'}">
                  <td style="padding:8px 8px;white-space:nowrap">
                    <span style="font-size:14px">${d.icon}</span>
                    <span style="font-size:12px;font-weight:600;color:var(--white);margin-left:6px">${d.label}</span>
                  </td>
                  <td style="text-align:center;padding:8px">
                    <span style="font-size:16px;font-weight:700;color:${d.today>0?color:'rgba(197,203,216,0.25)'}">${d.today||'—'}</span>
                  </td>
                  <td style="text-align:center;padding:8px">
                    <span style="font-size:16px;font-weight:700;color:${d.week>0?color:'rgba(197,203,216,0.25)'}">${d.week||'—'}</span>
                    ${d.week>0?`<span style="font-size:10px;color:rgba(197,203,216,0.35);margin-left:4px">${pct}%</span>`:''}
                  </td>
                  <td style="padding:8px;min-width:100px">
                    <div style="height:8px;background:rgba(255,255,255,0.06);border-radius:4px;overflow:hidden">
                      <div style="height:100%;width:${pct}%;background:${color};border-radius:4px;transition:width 0.4s"></div>
                    </div>
                  </td>
                </tr>`;
              }).join('')}
            </tbody>
          </table>
        </div>

        <!-- 7-day bar chart (total all depts) -->
        <div style="font-size:10px;font-weight:700;color:rgba(197,203,216,0.4);letter-spacing:0.8px;margin-bottom:8px">
          ${lang==='am'?'7 ቀን ምርት':'7-DAY OUTPUT'}
        </div>
        <div style="display:flex;gap:4px;align-items:flex-end;height:60px">
          ${days7.map(({date,label})=>{
            const byDept = Object.entries(allDepts).map(([key])=>({
              key, qty: sum(data.filter(r=>r.date===date && r.dept===key))
            })).filter(x=>x.qty>0);
            const dayTotal = sum(data.filter(r=>r.date===date));
            const pct = Math.max(Math.round((dayTotal/maxDay)*100),dayTotal>0?8:2);
            const isT = date===today;
            return `<div style="flex:1;display:flex;flex-direction:column;align-items:center;gap:1px">
              <div style="font-size:9px;color:${isT?'var(--gold)':'var(--white-dim)'};font-weight:${isT?'700':'400'}">${dayTotal||''}</div>
              <div style="width:100%;flex:1;display:flex;flex-direction:column;justify-content:flex-end;border-radius:2px 2px 0 0;overflow:hidden">
                ${byDept.length ? byDept.map(bd=>{
                  const bpct = dayTotal>0?Math.round((bd.qty/dayTotal)*100):0;
                  return `<div style="width:100%;height:${bpct}%;background:${deptColors[bd.key]||'#aaa'};min-height:${bd.qty>0?'3px':'0'}" title="${allDepts[bd.key]?.label}: ${bd.qty}"></div>`;
                }).join('') : `<div style="width:100%;height:4%;background:rgba(255,255,255,0.05)"></div>`}
              </div>
              <div style="font-size:9px;color:${isT?'var(--gold)':'rgba(197,203,216,0.3)'}">${label}</div>
            </div>`;
          }).join('')}
        </div>

        <!-- Color legend -->
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:8px">
          ${deptStats.map(({key,label,icon})=>`
            <div style="display:flex;align-items:center;gap:4px">
              <div style="width:10px;height:10px;border-radius:2px;background:${deptColors[key]||'#aaa'}"></div>
              <span style="font-size:10px;color:rgba(197,203,216,0.5)">${icon} ${label}</span>
            </div>`).join('')}
        </div>
      </div>`;
  }

  // ── 3. Worker cards ──
  const wcEl = document.getElementById('sewWorkerCards');
  if (wcEl) {
    if (!workers.length) {
      wcEl.innerHTML = `<div style="color:var(--white-dim);font-size:12px;padding:10px 0">${lang==='am'?'ሰራተኛ ገና አልተጨመረም — ከላይ ጨምሩ':'No workers yet — add one above'}</div>`;
    } else {
      wcEl.innerHTML = `<div style="display:flex;flex-wrap:wrap;gap:8px">
        ${workers.map(w => {
          const d = getAllSewDepts()[w.dept] || {label:w.dept,icon:'👤'};
          const wkTotal  = sum(data.filter(r=>r.worker===w.name && r.date>=weekAgo));
          const dayTotal = sum(data.filter(r=>r.worker===w.name && r.date===today));
          const isActive = w.active !== false;
          return `<div style="flex:1;min-width:140px;max-width:200px;padding:10px 12px;background:rgba(255,255,255,0.03);border:1px solid ${isActive?'rgba(255,255,255,0.1)':'rgba(255,255,255,0.04)'};border-radius:10px;opacity:${isActive?1:0.5}">
            <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:4px">
              <div>
                <div style="font-size:16px">${d.icon}</div>
                <div style="font-size:12px;font-weight:700;color:var(--white);margin-top:2px">${w.name}</div>
                <div style="font-size:10px;color:rgba(197,203,216,0.45)">${d.label}</div>
              </div>
              <div style="text-align:right">
                <div style="font-size:16px;font-weight:700;color:var(--gold)">${dayTotal}</div>
                <div style="font-size:9px;color:rgba(197,203,216,0.35)">${lang==='am'?'ዛሬ':'today'}</div>
                <div style="font-size:11px;color:#4FC3F7;margin-top:2px">${wkTotal} <span style="font-size:9px;color:rgba(197,203,216,0.35)">${lang==='am'?'ሳምን':'wk'}</span></div>
              </div>
            </div>
            <div style="display:flex;gap:4px;margin-top:8px">
              <button onclick="openSewWorkerModal('${w.id}')" style="flex:1;padding:4px;border-radius:6px;border:1px solid rgba(201,168,76,0.35);background:rgba(201,168,76,0.08);color:var(--gold);cursor:pointer;font-size:10px;font-family:inherit">✏️</button>
              <button onclick="toggleSewWorker('${w.id}')" style="flex:1;padding:4px;border-radius:6px;border:1px solid ${isActive?'rgba(224,90,90,0.35)':'rgba(76,175,80,0.35)'};background:${isActive?'rgba(224,90,90,0.08)':'rgba(76,175,80,0.08)'};color:${isActive?'#FF9090':'#80e080'};cursor:pointer;font-size:10px;font-family:inherit">${isActive?(lang==='am'?'አግድ':'Off'):(lang==='am'?'አንቃ':'On')}</button>
            </div>
          </div>`;
        }).join('')}
      </div>`;
    }
  }

  // ── 4. Sent-to-Store history (every shipment, pending or confirmed) ──
  const s2sHeadEl = document.getElementById('sewToStoreThead');
  const s2sBodyEl = document.getElementById('sewToStoreTbody');
  if (s2sHeadEl && s2sBodyEl) {
    const h = lang==='am' ? ['ቀን','አይነት','ብዛት','ላከው','ሁኔታ','ያረጋገጠው'] : ['Date','Type','Qty','Sent By','Status','Confirmed By'];
    s2sHeadEl.innerHTML = `<tr>${h.map(x=>`<th>${x}</th>`).join('')}</tr>`;
    const ship = getProdFlow('sewing_store');
    s2sBodyEl.innerHTML = ship.length
      ? [...ship].sort((a,b)=>b.date.localeCompare(a.date)).map(x=>`<tr>
          <td style="white-space:nowrap;color:var(--white-dim)">${x.date}</td>
          <td style="font-weight:600;color:var(--white)">${x.type}</td>
          <td style="text-align:center;font-weight:700;color:var(--gold)">${x.qty}</td>
          <td style="color:var(--white-dim)">${x.sentByName||x.sentBy||'—'}</td>
          <td>${x.status==='pending'
              ? `<span style="font-size:10px;font-weight:700;padding:3px 8px;border-radius:8px;color:#FFA726;background:rgba(255,167,38,0.12);border:1px solid rgba(255,167,38,0.3)">⏳ ${lang==='am'?'እቃ ቤት ሊያረጋግጥ':'Awaiting Store'}</span>`
              : `<span style="font-size:10px;font-weight:700;padding:3px 8px;border-radius:8px;color:#80e080;background:rgba(76,175,80,0.12);border:1px solid rgba(76,175,80,0.3)">✅ ${lang==='am'?'ተረጋግጧል':'Confirmed'}</span>`}</td>
          <td style="color:var(--white-dim)">${x.confirmedByName||x.confirmedBy||'—'}</td>
        </tr>`).join('')
      : noDataRow(h.length);
  }

  // ── 5. Full sewing record details (collapsible tab) ──
  const detHeadEl = document.getElementById('sewDetailThead');
  const detBodyEl = document.getElementById('sewDetailTbody');
  if (detHeadEl && detBodyEl) {
    const dh = lang==='am' ? ['ቀን','ሰራተኛ','ዘርፍ','አይነት','ብዛት','ዳሜጅ','ማስ.','ስረዝ'] : ['Date','Worker','Dept','Type','Qty','Dmg','Note','Del'];
    detHeadEl.innerHTML = `<tr>${dh.map(x=>`<th>${x}</th>`).join('')}</tr>`;
    detBodyEl.innerHTML = data.length
      ? [...data].sort((a,b)=>b.date.localeCompare(a.date)).map(r=>{
          const d = getAllSewDepts()[r.dept] || {label:r.dept||'—',icon:'👤'};
          return `<tr>
            <td style="white-space:nowrap;color:var(--white-dim)">${r.date}</td>
            <td style="font-weight:600;color:var(--white)">${r.worker||'—'}</td>
            <td style="white-space:nowrap">${d.icon} ${d.label}</td>
            <td>${r.type||'—'}</td>
            <td style="text-align:center;font-weight:700;color:var(--gold)">${r.qty}</td>
            <td style="text-align:center">${r.dmgQty>0?`<span class="badge badge-damage">${r.dmgQty}</span>`:'—'}</td>
            <td style="color:var(--white-dim)">${r.note||'—'}</td>
            <td>${requestDeleteBtn('sewing',r.id)}</td>
          </tr>`;
        }).join('')
      : noDataRow(8);
  }
}

function toggleSewDetailTab() {
  const body = document.getElementById('sewDetailTabBody');
  const arrow = document.getElementById('sewDetailTabArrow');
  if (!body) return;
  const isOpen = body.style.display !== 'none';
  body.style.display = isOpen ? 'none' : '';
  if (arrow) arrow.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
}
