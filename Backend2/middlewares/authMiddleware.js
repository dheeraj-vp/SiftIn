import { OAuth2Client } from 'google-auth-library';
import dotenv from 'dotenv';

dotenv.config(); // Loads environment variables

const client = new OAuth2Client(process.env.CLIENT_ID);  // Ensure CLIENT_ID is defined in .env

export async function verifyAuth(req, res, next) {
    const token = req.headers.authorization?.split(" ")[1];  // Extract token from Authorization header
    if (!token) return res.status(401).json({ message: "Unauthorized" });

    try {
        // Verifying the token with the audience matching the CLIENT_ID
        await client.verifyIdToken({
            idToken: token,
            audience: process.env.CLIENT_ID,  // Use your OAuth client ID from .env
        });
        next();  // Proceed to the next middleware or route handler
    } catch (error) {
        res.status(401).json({ message: "Unauthorized", error });  // Handle invalid token
    }
}

export default verifyAuth;
