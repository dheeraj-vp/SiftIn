import express from 'express';
import { fetchEmailsHandler } from '../controllers/emailController.js';  // Fetch emails from the controller
import { verifyAuth } from '../middlewares/authMiddleware.js';  // Authentication middleware

const router = express.Router();

// Protected route for fetching emails, only accessible if authenticated
router.get('/fetch', verifyAuth, fetchEmailsHandler);

export default router;
