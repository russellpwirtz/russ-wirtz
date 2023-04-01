import { useState, useEffect } from 'react';

export default function useColorApi(inputText, responseText) {
  const [reason, setReason] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!inputText && !responseText) return;

    const fetchData = async () => {
      const response = await fetch('/api/chatgpt_mood', {
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

      let reason = responseJson.reason;
      console.log("background color reason: " + reason);

      let calmness = responseJson.calmness;
      console.log("calmness: " + calmness);

      setReason(reason);

      document.documentElement.style.setProperty('--background-color', responseJson.background.substring(0, 7));
      document.documentElement.style.setProperty('--color-shape-1', responseJson.quadrant1.substring(0, 7));
      document.documentElement.style.setProperty('--color-shape-2', responseJson.quadrant2.substring(0, 7));
      document.documentElement.style.setProperty('--color-shape-3', responseJson.quadrant3.substring(0, 7));
      document.documentElement.style.setProperty('--color-shape-4', responseJson.quadrant4.substring(0, 7));
      document.documentElement.style.setProperty('--animation-speed', responseJson.calmness + "s");
    };

    fetchData();
  }, [responseText]);

  return { reason, error };
};

