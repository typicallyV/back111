 
const bcrypt = require("bcrypt");
 
const authservice = require("../services/login");
async function loginUser(req, res) {
    try {
         const { email, password } = req.body;
         const token = await authservice.loginUser(email, password);
res.status(200).json({ token }); //imp

    } catch (error) {
    console.error("Login error:", error.message);
    res.status(401).json({ error: "Login failed" });
}

}

 
module.exports = {
    loginUser,
     
}
