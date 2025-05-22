
const express = require('express');
const { signup, login, getMe } = require('../Controller/authController');
const { protect } = require('../Middleware/auth');

const router = express.Router();


router.post('/signup', signup);
router.post('/login', login);
router.get('/me', protect, getMe);

module.exports = router;