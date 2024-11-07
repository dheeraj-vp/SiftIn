import db from './db.js';  // Assuming db.js handles your PostgreSQL connection

export async function saveEmail(sender, subject, body) {
    const query = 'INSERT INTO emails (sender, subject, body) VALUES ($1, $2, $3)';
    const values = [sender, subject, body];

    try {
        await db.query(query, values);
    } catch (error) {
        throw new Error('Error saving email to database');
    }
}
