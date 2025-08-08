const userService = require('../services/signup');
async function createUser(req, res) {
    try {
        const userData = req.body;
        const user = await userService.createUser(userData);
        res.status(201).json({ message: 'User created successfully', user: user });
    } catch (error) {
        res.status(400).json({ message: 'Error creating user', error: error.message });
    }
}
module.exports = { createUser };