import getApiKey from '../../lib/util/openAIApiKey';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const inputText = req.body.inputText;
    const responseText = req.body.responseText;

    const apiUrl = 'https://api.openai.com/v1/chat/completions';
    const apiHeaders = {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + getApiKey(),
    };

    const system_message = `You are a mood translation API.
    Your goal is to take input dialog and translate [Chatbot] to a mood.
    You will find five colors that work well together in a color scheme - one for the background, 
    and four for quadrants that are part of the same square. Always provide a hex code with the leading #.
    Return, from 1-10, the calmness level of the mood, with 10 being the most calm.
    Also provide the reason for these settings, including the calmness level.
    Response schema:
    {
      "background": {"type": "string"},
      "quadrant1": {"type": "string"},
      "quadrant2": {"type": "string"},
      "quadrant3": {"type": "string"},
      "quadrant4": {"type": "string"},
      "reason": {"type": "string"},
      "calmness": {"type": "int"}
    }
    `

    let apiBody = "[User]: " + inputText + "|[Chatbot]: " + responseText;

    console.log("api body: " + apiBody);
    console.error("test env: " + process.env.TEST_ENV);


    const requestBody = {
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system', content: system_message
        },
        { role: 'user', content: "[User]: Chatting about Russ makes me feel so relaxed.|[Chatbot]: That makes me feel calm." },
        { role: 'assistant', content: '{"calmness": "6", "background":"#FFF59D", "quadrant1":"#FFF176", "quadrant2":"#FFD54F", "quadrant3":"#FFB900", "quadrant4":"#FFC107", "reason": "Yellow and its variations indicate happiness and positivity."}' },
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

        console.log("calmness: " + messageObj.calmness);
        console.log("color reason: " + messageObj.reason);

        res.status(200).json({
          calmness: messageObj.calmness,
          background: messageObj.background,
          quadrant1: messageObj.quadrant1,
          quadrant2: messageObj.quadrant2,
          quadrant3: messageObj.quadrant3,
          quadrant4: messageObj.quadrant4,
          reason: messageObj.reason
        });
      }

    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching data.' });
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
