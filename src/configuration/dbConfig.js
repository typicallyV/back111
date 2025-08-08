const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://varunvi:alphaandbeta@cluster0.ctwh3cs.mongodb.net/")
    mongoose.connection.on("connected",() => {
        console.log("Database connected successfully");
    })
    mongoose.connection.on("error", (err) => {
        console.error("Database connection error:", err);
    });
module.exports = mongoose;