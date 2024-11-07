import { saveEmail } from '../models/email.model.js';
import { fetchEmailsFromGmail } from '../utils/emailUtils.js';

export async function fetchEmailsHandler(req, res) {
    try {
        const emails = await fetchEmailsFromGmail();
        for (const email of emails) {
            await saveEmail(email.sender, email.subject, email.body);
        }
        res.status(200).json({ success: true, message: 'Emails fetched and saved successfully' });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching emails', error });
    }
}
