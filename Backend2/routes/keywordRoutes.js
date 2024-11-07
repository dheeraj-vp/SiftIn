import express from 'express';
import { addKeywordHandler, getKeywordsHandler } from '../controllers/keywordController.js';

const router = express.Router();

router.post('/add', addKeywordHandler);
router.get('/all', getKeywordsHandler);

export default router;
