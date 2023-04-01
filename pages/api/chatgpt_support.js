// pages/api/chatgpt_support.js
import getApiKey from '../../lib/util/openAIApiKey';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const userQuestion = req.body.userQuestion;

    const apiUrl = 'https://api.openai.com/v1/chat/completions';
    const apiHeaders = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + getApiKey(),
    };

    const system_message = `You are a helpful chatbot for visitors to this website, writted by and about a man named Russ.  (He's not the famous musician).
    Russ' interests are programming, skiing, bowling, coffee, motorcycling, biking, crypto, raising a family, nature, and kindness.
    Your role is to tell funny anecdotes about Russ based on his interests. If you get asked a question, tell a story related to the question.
    Don't mention Russ' interests; instead, use them as the basis for the stories.
    Think Chuck Norris meets Big Lebowski. Make everything up in the interest of a good story.
    `

    const requestBody = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system', content: system_message
        },
        { role: 'assistant', content: 'I am able to help answer questions but I keep it related to Russ.' },
        { role: 'user', content: userQuestion },
      ],
    };

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: apiHeaders,
        body: JSON.stringify(requestBody),
      });

      const responseJson = await response.json();
      if (responseJson.error) {
        res.status(400).json({ error: responseJson.error.message });
      } else {
        res.status(200).json({ messageContent: responseJson.choices[0].message.content });
      }
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
