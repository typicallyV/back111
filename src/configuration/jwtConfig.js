 const crypto = require('crypto');

// Generate a 32-byte random secret key
const secretKey = crypto.randomBytes(32).toString('hex');

// Export the secret key
module.exports = {
  secretKey: secretKey
};
