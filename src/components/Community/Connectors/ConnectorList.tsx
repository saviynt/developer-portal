import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

const ConnectorList = () => {
  const [connector, setconnector] = useState([]);
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    fetch('/community/connector/connectorList.json', { cache: "no-cache" })
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
    history.push('/community/connectors/readmepage', 
    { 
      readmeUrl: connector.readmeLink, 
      githubUrl: connector.githubLink, 
      distLink: connector.distLink, 
      name: connector.name,
    });
  };

  if (error) {
    return <div>Error loading folder list: {error}</div>;
  }

  return (
    <div className="container">
    <div className="row">
      {connector.map(connector => (
        <div className="col col--4"> 
        <div key={connector.name} className="demo-showcase-card" onClick={() => handleCardClick(connector)}>
        <div className="demo-showcase-card__image">
          <img src={connector.logoUrl} alt={connector.name} />
        </div>
          <div className="demo-showcase-card__content">
            <h5 className="demo-showcase-card__title">{connector.name}</h5>
            <p className="demo-showcase-card__description">{connector.description}</p>
          </div>
          <div className="demo-showcase-card__tags">
            {/* {connector.tags.map((tag, index) => (
              <span key={index} className={`tag tag--${tag}`}>{tag}</span>
            ))} */}
          </div>
        </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ConnectorList;
