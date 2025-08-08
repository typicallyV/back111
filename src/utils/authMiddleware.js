const jwt=require('jsonwebtoken');
const { secretKey } = require('../configuration/jwtConfig');

//secret key
function authToken(req,res,next) {
  const payload = req.header('Authorization');
  console.log("👉 Authorization Header:", payload); 
  if (!payload) {
    return res.status(401).json({ message: 'No token provided' });
  }
  const [tokenType, token] = payload.split(' ');
    if (tokenType !== 'Bearer' || !token) {
        return res.status(401).json({ message: 'Invalid token' });}
jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
        return res.status(403).json({ message: 'Token is not valid' });
    }
   req.user = decoded; // ✅ decoded contains user info from token
// Attach the decoded user info to the request object
    next(); // Call the next middleware or route handler
   }   );
}
module.exports = {
  authToken
}