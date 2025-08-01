const express = require('express');
const { registerUser, loginUser, verifyEmail, forgotPassword } = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/verify-email/:token', verifyEmail);
router.post('/forgot-password', forgotPassword);

module.exports = router;