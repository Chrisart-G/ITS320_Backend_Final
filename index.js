import express, { json } from 'express';
import connectDB from './config/db.js';
import cors from 'cors';
import dotenv from 'dotenv';

// Import routes
import authRoutes from './Routes/authRoutes.js';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(json());

// Connect to database
connectDB();

// Basic test route
app.get('/api/hello', (req, res) => {
  res.send('Hello World');
});

app.use('/api/auth', authRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is active on port ${port}`);
});