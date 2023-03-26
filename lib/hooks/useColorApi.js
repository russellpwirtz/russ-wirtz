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
        console.log("Successful color response: " + JSON.stringify(response));
      } else {
        setError(responseJson.error);
      }

      if (responseJson.background == null) {
        console.warn("no background color detected from response");
        return;
      }

      console.log("background color response: " + responseJson.background);

      let color = responseJson.background.substring(0, 7);
      let quadrant1 = responseJson.quadrant1.substring(0, 7);
      let quadrant2 = responseJson.quadrant2.substring(0, 7);
      let quadrant3 = responseJson.quadrant3.substring(0, 7);
      let quadrant4 = responseJson.quadrant4.substring(0, 7);

      setColor(color);
      document.documentElement.style.setProperty('--background-color', color);
      document.documentElement.style.setProperty('--color-shape-1', quadrant1);
      document.documentElement.style.setProperty('--color-shape-2', quadrant2);
      document.documentElement.style.setProperty('--color-shape-3', quadrant3);
      document.documentElement.style.setProperty('--color-shape-4', quadrant4);
    };

    fetchData();
  }, [responseText]);

  return { color, error };
};

