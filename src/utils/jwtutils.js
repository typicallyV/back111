const jwt=require('jsonwebtoken');
const { secretKey } = require('../configuration/jwtConfig');
//secret key
function generateToken(user) {
const payload = {
    id: user._id,
    email: user.email,
    username: user.username,
    role: user.role
  } ;//payload
  return jwt.sign(payload, secretKey, {expiresIn:"1h"}); // Generate JWT token


}
module.exports = {
  generateToken
}