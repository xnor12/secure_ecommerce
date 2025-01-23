// server/utils/validation.js
const validator = require('validator');

const validateSignup = (data) => {
  const errors = [];
  if (!validator.isEmail(data.email)) errors.push('Invalid email');
  if (!validator.isLength(data.password, { min: 6 })) errors.push('Password too short');
  if (!validator.isNumeric(data.noKTP)) errors.push('Invalid KTP number');
  // Add more validations as required
  return errors;
};

module.exports = { validateSignup };
