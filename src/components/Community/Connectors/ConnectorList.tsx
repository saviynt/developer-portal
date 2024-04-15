import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const ConnectorList = () => {
  const [connector, setconnector] = useState([]);
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/saviynt/developer-portal/main/static/community/connector/connectorList.json', { cache: "no-cache" })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(text => {
        try {
          return JSON.parse(text);
        } catch (e) {
          throw new Error('Failed to parse JSON, possibly received HTML: ' + text.slice(0, 100));
        }
      })
      .then(data => setconnector(data))
      .catch(error => {
        console.error("Error fetching folder list:", error);
        setError(error.toString());
      });
  }, []);

  const handleCardClick = (connector) => {
    // Navigate and pass the URL to be fetched in the new component
    history.push('/developer-portal/community/connectors/readmepage', 
    { 
      readmeUrl: connector.readmeLink, 
      githubUrl: connector.githubLink, 
      distLink: connector.distLink, 
      name: connector.name 
    });
  };

  if (error) {
    return <div>Error loading folder list: {error}</div>;
  }

  return (
    <div className="card-list">
      {connector.map(connector => (
        <div key={connector.name} className="card" onClick={() => handleCardClick(connector)}>
          <div className="card-body">
            <h5 className="card-title">{connector.name}</h5>
            <p className="card-text">{connector.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ConnectorList;
