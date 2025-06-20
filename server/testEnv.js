import dotenv from 'dotenv';
dotenv.config();

console.log("✅ Test ENV Loaded:");
console.log("OPENAI_API_KEY:", process.env.OPENAI_API_KEY);
