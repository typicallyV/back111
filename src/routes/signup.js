const express = require('express');
const signupController = require('../controllers/signup');
const router = express.Router(); //INITIALISE ROUTER
//URL OF ENDPOINT
router.post('/register', signupController.createUser); //CREATE USER ENDPOINT

router.get('/test', (req, res) => {
    res.send("Signup route is working");
});

//TEN EXPORT THE ROUTER
module.exports = router;