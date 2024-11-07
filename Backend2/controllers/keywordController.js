import { addKeyword, getKeywords } from '../models/keyword.model.js';

export async function addKeywordHandler(req, res) {
    try {
        const { keyword } = req.body;
        await addKeyword(keyword);
        res.status(201).json({ success: true, message: 'Keyword added successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error adding keyword', error });
    }
}

export async function getKeywordsHandler(req, res) {
    try {
        const keywords = await getKeywords();
        res.status(200).json(keywords);
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching keywords', error });
    }
}
