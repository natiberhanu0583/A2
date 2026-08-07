// auth.js — password hashing + JWT session tokens (real server-side login,
// replacing the old client-side plaintext-password check).

const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '12h';

if (!JWT_SECRET) {
  console.warn('⚠️  JWT_SECRET is missing from .env — set it to a long random string before going live.');
}

function hashPassword(plain) {
  return bcrypt.hash(plain, 10);
}

function comparePassword(plain, hash) {
  return bcrypt.compare(plain, hash);
}

function signToken(user) {
  return jwt.sign(
    { id: user.id, username: user.username, role: user.role, branch: user.branch, name: user.name },
    JWT_SECRET || 'insecure-dev-secret-change-me',
    { expiresIn: JWT_EXPIRES_IN }
  );
}

// Express middleware: requires a valid `Authorization: Bearer <token>` header.
function requireAuth(req, res, next) {
  const header = req.headers['authorization'] || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  if (!token) return res.status(401).json({ error: 'Missing or invalid Authorization header' });
  try {
    const payload = jwt.verify(token, JWT_SECRET || 'insecure-dev-secret-change-me');
    req.user = payload;
    next();
  } catch (e) {
    return res.status(401).json({ error: 'Invalid or expired session, please log in again' });
  }
}

// Express middleware factory: requires req.user.role to be one of `roles`.
// Must run after requireAuth.
function requireRole(...roles) {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Not allowed for this account role' });
    }
    next();
  };
}

module.exports = { hashPassword, comparePassword, signToken, requireAuth, requireRole };
