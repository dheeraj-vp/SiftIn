import pool from './db.js';

export async function addKeyword(keyword) {
    const query = 'INSERT INTO keywords (keyword) VALUES ($1)';
    await pool.query(query, [keyword]);
}

export async function getKeywords() {
    const result = await pool.query('SELECT * FROM keywords');
    return result.rows;
}
