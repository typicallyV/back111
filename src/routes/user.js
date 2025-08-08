const express = require('express');
const { getUsers } = require('../controllers/user'); // or wherever your service file is
const { authToken } = require('../utils/authMiddleware');

const router = express.Router();

// Protected route to get all users
router.get('/users', authToken, getUsers);

module.exports = router;
