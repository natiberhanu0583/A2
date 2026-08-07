// Run this once with: node generate-vapid-keys.js
// Copy the printed keys into your .env file (VAPID_PUBLIC_KEY / VAPID_PRIVATE_KEY).
const webpush = require('web-push');
const keys = webpush.generateVAPIDKeys();
console.log('\nAdd these to your .env file:\n');
console.log('VAPID_PUBLIC_KEY=' + keys.publicKey);
console.log('VAPID_PRIVATE_KEY=' + keys.privateKey);
console.log('');
