const express = require('express');
const Groq = require('groq-sdk');
const groq = new Groq();
const OpenAI = require("openai");
const openai = new OpenAI();


const app = express();
const port = 3002;

app.get('/groq', async (req, res) => {
  try {
    const chatCompletion = await openai.chat.completions.create({
      messages: [
        {
          role: 'assistant',
          content: '*💡* Idée géniale** 💻 : Trouver des idées originales et innovantes pour le développement de projet (📅 Gestion des ressources et de la capacité de l équipe 🕒).',
        },
      ],
      model: 'gpt-4o',
    });

    res.status(200).json(chatCompletion.choices[0].message.content);
  } catch (error) {
    res.status(500).json({ error: 'Une erreur est survenue' });
  }
});

app.listen(port, () => console.log(`Server running on port ${port}`));
