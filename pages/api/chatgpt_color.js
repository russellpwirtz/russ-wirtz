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

    const system_message = `You are a mood translation API.
    Your goal is to take input dialog and translate it to hex color based on the mood, and respond in json format.
    You will find five colors that work well together in a color scheme - one for the background, and four for quadrants 
    of a square.
    Try to base the color you choose on how the text emotionally feels.
    Always provide a hex color with the leading #.
    `

    let apiBody = "[User]: " + inputText + "|[Chatbot]: " + responseText;

    console.log("api body: " + apiBody);

    const requestBody = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system', content: system_message
        },
        { role: 'user', content: "[User]: I am feeling so happy today!|[Chatbot]: That makes me feel happy!" },
        { role: 'assistant', content: '{"background":"#FFF59D", "quadrant1":"#FFF176", "quadrant2":"#FFD54F", "quadrant3":"#FFB900", "quadrant4":"#FFC107", "reason": "Yellow and its variations indicate happiness and positivity."}' },
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
        const responseContent = responseJson.choices[0].message.content;
        const messageObj = JSON.parse(responseContent);
        const background = messageObj.background;
        const quadrant1 = messageObj.quadrant1;
        const quadrant2 = messageObj.quadrant2;
        const quadrant3 = messageObj.quadrant3;
        const quadrant4 = messageObj.quadrant4;
        const reason = messageObj.reason;

        console.log("color reason: " + reason);

        res.status(200).json({ background, quadrant1, quadrant2, quadrant3, quadrant4, reason });
      }

    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
