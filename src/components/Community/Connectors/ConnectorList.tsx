import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaUsers } from 'react-icons/fa';

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
        <div className="demo-showcase-card__header">
          <img src={connector.logoUrl} alt={connector.name} />
        </div>
          <div className="demo-showcase-card__content">
            <h5 className="demo-showcase-card__title">{connector.name}</h5>
            <p className="demo-showcase-card__description">{connector.description}</p>
          </div>
          <div className="demo-showcase-card__footer">
            <a href={connector.githubLink} className="material-icons" aria-label="View source on GitHub" style={{ marginRight: '10px', cursor: 'pointer' }}>
                  code
                </a>
                <a href={connector.distLink} download={`${connector.name}.zip`} className="material-icons" aria-label="Download" style={{ marginRight: '10px', cursor: 'pointer' }}>
                  file_download
                </a>
                <a href={`${connector.githubLink}/issues`} className="material-icons" target="_blank" rel="noopener noreferrer" aria-label="Report Issues" style={{ cursor: 'pointer' }}>
                  bug_report
                </a>
                <a href={`${connector.authors}`} target="_blank" rel="noopener noreferrer" title="View Contributors">
                  <FaUsers style={{ marginRight: '5px' }} />
                  Contributors
                </a>
          </div>
        </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default ConnectorList;