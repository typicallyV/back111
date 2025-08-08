const jwt = require('jsonwebtoken');
const User= require("../models/user")
const bcrypt = require('bcrypt');
 const {generateToken} = require('../utils/jwtutils');

 async function loginUser(email, password) {
    try{
//calling ffrom db
const exist=await User.findOne({ email: email });
if (!exist) {
        throw new Error('User not found');
    }
    //exisitng user with pswrd i db
const isPasswordValid= await bcrypt.compare(password, exist.password);
if (!isPasswordValid) {
        throw new Error('Invalid password');
    }
    //generate token
const token = generateToken(exist)

    return token;
}
    catch (error) {
        console.error('Login error:', error);
        // Handle the error appropriately, e.g., log it, rethrow it, etc.
        throw new Error('Login failed',error.message);
    }
}
 
module.exports={
loginUser
}