import express from 'express';
import { signup, login, getMe } from '../Controller/authController.js';
import { protect } from '../Middleware/auth.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/me', protect, getMe);

export default router;