import express from 'express';
import OpenAI from 'openai';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,  // <-- Now runs after dotenv.config()
    });

    const userInput = JSON.stringify(req.body);

    const response = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `Suggest improvements for this resume: ${userInput}`,
        },
      ],
    });

    res.json({ suggestions: response.choices[0].message.content.trim() });
  } catch (err) {
    console.error('OpenAI Error:', err);
    res.status(500).json({ error: 'OpenAI request failed.' });
  }
});

export default router;
