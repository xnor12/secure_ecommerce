// server/utils/encryption.js
const bcrypt = require('bcrypt');
const crypto = require('crypto');
const secret = process.env.SECRET_KEY;

const hashPassword = async (password) => await bcrypt.hash(password, 10);

const encrypt = (text) => {
  const cipher = crypto.createCipher('aes-256-cbc', secret);
  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');
  return encrypted;
};

const decrypt = (encrypted) => {
  const decipher = crypto.createDecipher('aes-256-cbc', secret);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');
  return decrypted;
};

module.exports = { hashPassword, encrypt, decrypt };
