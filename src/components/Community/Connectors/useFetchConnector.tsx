import { useState, useEffect } from 'react';

const useFetchConnector = (baseUrl) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    const fetchConnector = async () => {
      try {
        setLoading(true); // Start loading
        const response = await fetch(`${baseUrl}`, { cache: "no-cache" });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const text = await response.text();
        try {
          const json = JSON.parse(text);
          setData(json);
          setLoading(false); // End loading
        } catch (e) {
          throw new Error('Failed to parse JSON, possibly received HTML: ' + text.slice(0, 100));
          setLoading(false); // End loading
        }
      } catch (error) {
        console.error("Error fetching connector:", error);
        setError(error.toString());
      }
    };

    fetchConnector();
  }, [baseUrl]);

  const fetchConnectorByName = (name: string) => {
    return data.find(connector => connector.name === name);
  };

  return { data, error,loading, fetchConnectorByName };
};

export default useFetchConnector;
