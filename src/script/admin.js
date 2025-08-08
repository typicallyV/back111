const User= require('../models/user');
const bycrypt = require('bcryptjs');
async function createAdminAccount(){
try{
   const exist= await User.findOne({email:"admin@test.com"});
   if(!exist){
    const newAdmin=new User({
   email:"admin@test.com",
   name:"Admin",
     password: await bycrypt.hash("admin", 10), // Hashing the password
role:"admin"
})
await newAdmin.save();
console.log("Admin account created successfully.");
    }else{
        console.log("Admin account already exists.");
    }
}catch(e){
    console.error("Error creating admin account:", e);
  }
}
module.exports = createAdminAccount;


