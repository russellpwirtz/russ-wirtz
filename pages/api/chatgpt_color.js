// pages/api/openai_api.js

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const inputText = req.body.inputText;
    const responseText = req.body.responseText;

    const apiUrl = 'https://api.openai.com/v1/chat/completions';
    const apiHeaders = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + process.env.OPENAI_API_KEY,
    };

    const system_message = `You are a mood translation bot. 
    Your goal is to take input dialog and translate it to a hex color based on the mood.
    You are free to use whatever means to find a color, but you will always find a color. 
    Try to base the color you choose on how the text emotionally feels.
    Always provide a hex color with the leading #, and nothing else.
    `

    let apiBody = "[User]: " + inputText + "|[Chatbot]: " + responseText;

    console.log("api body: " + apiBody);

    const requestBody = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system', content: system_message
        },
        { role: 'user', content: "[User]: I am feeling so lucky today.|[Chatbot]: Pass on some of that luck to me!" },
        { role: 'assistant', content: '#8BC34A' },
        { role: 'user', content: apiBody },
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
