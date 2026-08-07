// db.js — Dual MySQL + SQLite data layer.
// Automatically uses MySQL when DB_USER is defined (e.g. cPanel / production),
// or falls back to SQLite when SQLITE_PATH is defined.

const mysql = require('mysql2/promise');

const useMySQL = !!(process.env.DB_USER && process.env.DB_NAME);

let pool;
let sqlite;

if (useMySQL) {
  pool = mysql.createPool({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    charset: 'utf8mb4',
  });
} else {
  const Database = require('better-sqlite3');
  const path = require('path');
  const fs = require('fs');
  const DB_PATH = process.env.SQLITE_PATH
    ? path.resolve(process.env.SQLITE_PATH)
    : path.join(__dirname, 'data', 'a2erp.db');
  fs.mkdirSync(path.dirname(DB_PATH), { recursive: true });
  sqlite = new Database(DB_PATH);
  sqlite.pragma('journal_mode = WAL');
  sqlite.pragma('foreign_keys = ON');
}

async function initTables() {
  if (useMySQL) {
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS kv_data (
        data_key VARCHAR(191) PRIMARY KEY,
        value LONGTEXT,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    `);
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(100) NOT NULL UNIQUE,
        password_hash VARCHAR(255) NOT NULL,
        name VARCHAR(150) NOT NULL,
        role VARCHAR(50) NOT NULL,
        branch VARCHAR(50) DEFAULT NULL,
        phone VARCHAR(50) DEFAULT NULL,
        active TINYINT(1) NOT NULL DEFAULT 1,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    `);
    await pool.execute(`
      CREATE TABLE IF NOT EXISTS push_subscriptions (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(100) NOT NULL,
        endpoint VARCHAR(500) NOT NULL UNIQUE,
        subscription_json LONGTEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4
    `);
  } else {
    sqlite.exec(`
      CREATE TABLE IF NOT EXISTS kv_data (
        data_key TEXT PRIMARY KEY,
        value TEXT,
        updated_at DATETIME DEFAULT (datetime('now'))
      );
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL UNIQUE,
        password_hash TEXT NOT NULL,
        name TEXT NOT NULL,
        role TEXT NOT NULL,
        branch TEXT DEFAULT NULL,
        phone TEXT DEFAULT NULL,
        active INTEGER NOT NULL DEFAULT 1,
        created_at DATETIME DEFAULT (datetime('now'))
      );
      CREATE TABLE IF NOT EXISTS push_subscriptions (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        endpoint TEXT NOT NULL UNIQUE,
        subscription_json TEXT NOT NULL,
        created_at DATETIME DEFAULT (datetime('now'))
      );
    `);
  }
}

function toSafeUser(row) {
  if (!row) return null;
  const { password_hash, ...safe } = row;
  return safe;
}

async function getKey(key) {
  if (useMySQL) {
    const [rows] = await pool.execute('SELECT value FROM kv_data WHERE data_key = ?', [key]);
    if (!rows.length) return undefined;
    try { return JSON.parse(rows[0].value); } catch { return undefined; }
  } else {
    const row = sqlite.prepare('SELECT value FROM kv_data WHERE data_key = ?').get(key);
    if (!row) return undefined;
    try { return JSON.parse(row.value); } catch { return undefined; }
  }
}

async function getAllData() {
  if (useMySQL) {
    const [rows] = await pool.execute('SELECT data_key, value FROM kv_data');
    const out = {};
    rows.forEach(r => { try { out[r.data_key] = JSON.parse(r.value); } catch {} });
    return out;
  } else {
    const rows = sqlite.prepare('SELECT data_key, value FROM kv_data').all();
    const out = {};
    rows.forEach(r => { try { out[r.data_key] = JSON.parse(r.value); } catch {} });
    return out;
  }
}

async function setKey(key, value) {
  const json = JSON.stringify(value);
  if (useMySQL) {
    await pool.execute(
      'INSERT INTO kv_data (data_key, value) VALUES (?, ?) ON DUPLICATE KEY UPDATE value = VALUES(value)',
      [key, json]
    );
  } else {
    sqlite.prepare(
      'INSERT INTO kv_data (data_key, value) VALUES (?, ?) ON CONFLICT(data_key) DO UPDATE SET value = excluded.value'
    ).run(key, json);
  }
}

async function findUserByUsername(username) {
  if (useMySQL) {
    const [rows] = await pool.execute('SELECT * FROM users WHERE username = ?', [username]);
    return rows[0] || null;
  } else {
    return sqlite.prepare('SELECT * FROM users WHERE username = ?').get(username) || null;
  }
}

async function findUserById(id) {
  if (useMySQL) {
    const [rows] = await pool.execute('SELECT * FROM users WHERE id = ?', [id]);
    return rows[0] || null;
  } else {
    return sqlite.prepare('SELECT * FROM users WHERE id = ?').get(id) || null;
  }
}

async function listUsersSafe() {
  if (useMySQL) {
    const [rows] = await pool.execute('SELECT id, username, name, role, branch, phone, active, created_at FROM users');
    return rows;
  } else {
    return sqlite.prepare('SELECT id, username, name, role, branch, phone, active, created_at FROM users').all();
  }
}

async function createUser({ username, passwordHash, name, role, branch, phone, active }) {
  if (useMySQL) {
    const [result] = await pool.execute(
      'INSERT INTO users (username, password_hash, name, role, branch, phone, active) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [username, passwordHash, name, role, branch || null, phone || null, active === false ? 0 : 1]
    );
    return findUserById(result.insertId);
  } else {
    const info = sqlite.prepare(
      'INSERT INTO users (username, password_hash, name, role, branch, phone, active) VALUES (?, ?, ?, ?, ?, ?, ?)'
    ).run(username, passwordHash, name, role, branch || null, phone || null, active === false ? 0 : 1);
    return findUserById(info.lastInsertRowid);
  }
}

async function updateUser(id, fields) {
  const colMap = { username: 'username', name: 'name', role: 'role', branch: 'branch', phone: 'phone', active: 'active', passwordHash: 'password_hash' };
  const sets = [];
  const values = [];
  Object.keys(fields).forEach(k => {
    if (colMap[k] === undefined) return;
    sets.push(`${colMap[k]} = ?`);
    values.push(fields[k]);
  });
  if (!sets.length) return findUserById(id);
  values.push(id);
  if (useMySQL) {
    await pool.execute(`UPDATE users SET ${sets.join(', ')} WHERE id = ?`, values);
  } else {
    sqlite.prepare(`UPDATE users SET ${sets.join(', ')} WHERE id = ?`).run(...values);
  }
  return findUserById(id);
}

async function getSubscriptionsFor(username) {
  if (useMySQL) {
    const [rows] = await pool.execute('SELECT subscription_json FROM push_subscriptions WHERE username = ?', [username]);
    return rows.map(r => { try { return JSON.parse(r.subscription_json); } catch { return null; } }).filter(Boolean);
  } else {
    const rows = sqlite.prepare('SELECT subscription_json FROM push_subscriptions WHERE username = ?').all(username);
    return rows.map(r => { try { return JSON.parse(r.subscription_json); } catch { return null; } }).filter(Boolean);
  }
}

async function getAllSubscriptionUsernames() {
  if (useMySQL) {
    const [rows] = await pool.execute('SELECT DISTINCT username FROM push_subscriptions');
    return rows.map(r => r.username);
  } else {
    const rows = sqlite.prepare('SELECT DISTINCT username FROM push_subscriptions').all();
    return rows.map(r => r.username);
  }
}

async function addSubscription(username, subscription) {
  if (useMySQL) {
    await pool.execute(
      'INSERT INTO push_subscriptions (username, endpoint, subscription_json) VALUES (?, ?, ?) ' +
      'ON DUPLICATE KEY UPDATE username = VALUES(username), subscription_json = VALUES(subscription_json)',
      [username, subscription.endpoint, JSON.stringify(subscription)]
    );
  } else {
    sqlite.prepare(
      'INSERT INTO push_subscriptions (username, endpoint, subscription_json) VALUES (?, ?, ?) ' +
      'ON CONFLICT(endpoint) DO UPDATE SET username = excluded.username, subscription_json = excluded.subscription_json'
    ).run(username, subscription.endpoint, JSON.stringify(subscription));
  }
}

async function removeSubscription(username, endpoint) {
  if (useMySQL) {
    await pool.execute('DELETE FROM push_subscriptions WHERE username = ? AND endpoint = ?', [username, endpoint]);
  } else {
    sqlite.prepare('DELETE FROM push_subscriptions WHERE username = ? AND endpoint = ?').run(username, endpoint);
  }
}

async function removeSubscriptionEverywhere(endpoint) {
  if (useMySQL) {
    await pool.execute('DELETE FROM push_subscriptions WHERE endpoint = ?', [endpoint]);
  } else {
    sqlite.prepare('DELETE FROM push_subscriptions WHERE endpoint = ?').run(endpoint);
  }
}

module.exports = {
  initTables,
  getKey,
  getAllData,
  setKey,
  toSafeUser,
  findUserByUsername,
  findUserById,
  listUsersSafe,
  createUser,
  updateUser,
  getSubscriptionsFor,
  getAllSubscriptionUsernames,
  addSubscription,
  removeSubscription,
  removeSubscriptionEverywhere,
};
