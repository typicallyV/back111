const express = require('express');
const cors = require('cors');
const {loginUser } =require('../controllers/login');
const router = express.Router(); // Initialize the router

router.use(cors()); // Enable CORS for this route
// URL of the login endpoint
router.post('/login',  loginUser); // POST /login
 
module.exports = router; // Export the router