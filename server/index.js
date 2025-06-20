import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import suggestionRoutes from './routes/suggestions.js';

dotenv.config();

console.log('OPENAI_API_KEY:', process.env.OPENAI_API_KEY);  // Debug line

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/suggestions', suggestionRoutes);

app.listen(5000, () => console.log('Server running on http://localhost:5000'));
