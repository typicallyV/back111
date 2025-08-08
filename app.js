const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const createAdminAccount = require('./src/script/admin');
const signupRoute = require('./src/routes/signup');
const loginRoute = require('./src/routes/login');
const userRoute = require('./src/routes/user');
const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Enable CORS for all routes
app.use(bodyParser.json()); // Parse JSON bodies

// Create admin user on startup
createAdminAccount();

// Routes
app.use('/user', signupRoute); // POST /user/register
app.use('/auth', loginRoute); // POST /auth/login
app.use('/api', userRoute); // GET /api/users
// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
