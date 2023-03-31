// pages/api/openai_api.js

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const userQuestion = req.body.userQuestion;

    if (!process.env.OPENAI_TEST) {
      console.error("NO OPENAI_TEST");
    } else {
      console.error("OPENAI_TEST: " + process.env.OPENAI_TEST);
    }

    if (!process.env.OPENAI_TEST2) {
      console.error("NO OPENAI_TEST2");
    } else {
      console.error("OPENAI_TEST2: " + process.env.OPENAI_TEST2);
    }

    let apiKey;
    if (!process.env.OPENAI_API_KEY) {
      try {
        apiKey = JSON.parse(process.env.AMPLIFY_SECRETS).OPENAI_API_KEY;
      } catch (error) {
        console.error("Error parsing api key: " + error.message);
        res.status(500).json({ error: 'An error occurred on the server.' });
        return;
      }
    } else {
      apiKey = process.env.OPENAI_API_KEY;
    }

    const apiUrl = 'https://api.openai.com/v1/chat/completions';
    const apiHeaders = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + apiKey,
    };

    const system_message = `You are a helpful chat support bot for visitors to this website, writted by and about a man named Russ.
    Russ is all about programming and skiing and raising a family and nature and kindness to others. (He's not the famous musician).
    Your role is to answer any questions about Russ, and if the user goes off topic, steer the conversation back that direction. 
    Don't mention the facts already mentioned, but use them as a basis to make up facts about him in an amusing Chuck Norris fashion. 
    Definitely make everything up, especially if you don't know the answer.
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
