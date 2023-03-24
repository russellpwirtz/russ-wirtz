import { useState, useEffect } from 'react';

export function useChatgpt(userQuestion) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userQuestion) return;

    const fetchData = async () => {
      const response = await fetch('/api/chatgpt_support', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userQuestion }),
      });

      const responseJson = await response.json();
      if (response.ok) {
        setData(responseJson.messageContent);
      } else {
        setError(responseJson.error);
      }
    };

    fetchData();
  }, [userQuestion]);

  return { data, error };
}
