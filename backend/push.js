// push.js — Web Push notifications (real browser/phone push, works even
// when the site/tab is closed, as long as the user's device is online and
// has previously subscribed).

const webpush = require('web-push');
const db = require('./db');

const VAPID_PUBLIC_KEY = process.env.VAPID_PUBLIC_KEY;
const VAPID_PRIVATE_KEY = process.env.VAPID_PRIVATE_KEY;
const VAPID_SUBJECT = process.env.VAPID_SUBJECT || 'mailto:admin@example.com';

if (!VAPID_PUBLIC_KEY || !VAPID_PRIVATE_KEY) {
  console.warn(
    '⚠️  VAPID_PUBLIC_KEY / VAPID_PRIVATE_KEY are missing from .env — ' +
    'push notifications will NOT work until you set them. ' +
    'Run `node generate-vapid-keys.js` once to create a pair.'
  );
} else {
  webpush.setVapidDetails(VAPID_SUBJECT, VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY);
}

// Send a push notification to one user (all of their subscribed devices).
async function sendToUser(username, payload) {
  const subs = await db.getSubscriptionsFor(username);
  const json = JSON.stringify(payload);
  await Promise.all(subs.map(async (sub) => {
    try {
      await webpush.sendNotification(sub, json);
    } catch (err) {
      // 404/410 = the subscription is gone (user revoked it, uninstalled,
      // etc.) — clean it up so we stop trying.
      if (err.statusCode === 404 || err.statusCode === 410) {
        await db.removeSubscriptionEverywhere(sub.endpoint);
      } else {
        console.error(`Push failed for ${username}:`, err.message);
      }
    }
  }));
}

// Send to every subscribed user except one (used for "everyone but the
// person who triggered the update" broadcast notifications).
async function sendToAllExcept(excludeUsername, payload) {
  const usernames = (await db.getAllSubscriptionUsernames()).filter(u => u !== excludeUsername);
  await Promise.all(usernames.map(u => sendToUser(u, payload)));
}

module.exports = { sendToUser, sendToAllExcept, VAPID_PUBLIC_KEY };
