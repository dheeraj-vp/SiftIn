import { google } from 'googleapis';

const oauth2Client = new google.auth.OAuth2(
    process.env.CLIENT_ID,
    process.env.CLIENT_SECRET,
    process.env.REDIRECT_URI
);

const gmail = google.gmail({ version: 'v1', auth: oauth2Client });

export async function fetchEmailsFromGmail() {
    try {
        const res = await gmail.users.messages.list({
            userId: 'me',
            labelIds: ['INBOX'],  // You can customize label if needed
            q: 'is:unread',  // Optional: to fetch unread emails only
        });

        const messages = res.data.messages || [];

        const emails = [];
        for (const message of messages) {
            const email = await gmail.users.messages.get({
                userId: 'me',
                id: message.id,
            });

            const headers = email.data.payload.headers;
            const sender = headers.find(header => header.name === 'From').value;
            const subject = headers.find(header => header.name === 'Subject').value;
            const body = email.data.payload.parts ? email.data.payload.parts[0].body.data : '';

            emails.push({ sender, subject, body });
        }

        return emails;
    } catch (error) {
        throw new Error('Error fetching emails from Gmail');
    }
}
