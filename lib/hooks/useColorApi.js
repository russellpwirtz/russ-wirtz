import { useState, useEffect } from 'react';

export default function useColorApi(inputText, responseText) {
  const [color, setColor] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!inputText && !responseText) return;

    const fetchData = async () => {
      const response = await fetch('/api/chatgpt_color', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputText: inputText, responseText: responseText }),
      });

      const responseJson = await response.json();
      if (response.ok) {
        console.log("Successful color response");
      } else {
        setError(responseJson.error);
      }

      console.log("color response: " + JSON.stringify(responseJson));

      // let color = data.hexColor;
      let color = responseJson.messageContent.substring(0, 7);

      setColor(color);
      document.documentElement.style.setProperty('--background-color', color);
    };

    fetchData();
  }, [responseText]);

  return { color, error };
};

