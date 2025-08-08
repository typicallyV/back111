 // controller/user.js
const userService = require('../services/user');

async function getUsers(req, res) {
  try {
    const users = await userService.getUser();
    res.json(users);
  } catch (e) {
    res.status(500).json({ message: 'Error fetching users', error: e.message });
  }
}

module.exports = { getUsers };
