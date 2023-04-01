import { useState, useEffect } from 'react';

export default function usePetAction(userAction) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userAction) return;

    console.log("user clicked: " + userAction);

    const fetchData = async () => {
      setData("ok");
    };

    fetchData();
  }, [userAction]);

  return { data, error };
}
