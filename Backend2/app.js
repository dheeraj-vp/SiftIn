import express from 'express';
import keywordRoutes from './routes/keywordRoutes.js';
import emailRoutes from './routes/emailRoutes.js';
import dotenv from 'dotenv';
import cors from 'cors'
import { OAuth2Client } from 'google-auth-library';

dotenv.config();

const app = express();
app.use(express.json());

// Initialize OAuth2Client
const client = new OAuth2Client(
  process.env.CLIENT_ID,
  process.env.CLIENT_SECRET,
  process.env.REDIRECT_URI
);

const corsOptions = {
    origin: 'http://localhost:5173', // Allow your React app's URL
    methods: ['GET', 'POST'], // Allow only specific methods
    credentials: true, // Allow cookies or other credentials if needed
  };

// OAuth route to redirect to Google's OAuth page
app.get('/auth', (req, res) => {
  const authUrl = client.generateAuthUrl({
    access_type: 'offline',
    scope: ['https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile'],
  });
  res.redirect(authUrl); // Redirect to Google OAuth
});

// Callback route to handle the OAuth response
app.get('/auth/callback', async (req, res) => {
  try {
    const { tokens } = await client.getToken(req.query.code);
    // You can save the tokens or use them as needed
    res.redirect('http://localhost:5173/'); // Redirect to the frontend dashboard after successful authentication
  } catch (error) {
    res.status(500).send('Error during authentication');
  }
});

app.use('/api/keywords', keywordRoutes);
app.use('/api/emails', emailRoutes);
app.use(cors(corsOptions));

export default app;
