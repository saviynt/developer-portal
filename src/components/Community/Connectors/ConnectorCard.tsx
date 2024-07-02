import React from 'react';

// Add the correct import for useHistory
import { useHistory } from 'react-router';

const ConnectorCard = ({ connector }) => {
  const history = useHistory();

  const handleCardClick = () => {
    history.push(`/community/connectors/readme?q=${connector.name}`);
  };

  return (
    <div className="col col--4">
      <div key={connector.name} className="demo-showcase-card" onClick={handleCardClick}>
        <div className="demo-showcase-card__header">
          <img 
            src={connector.logoUrl || '/community/connector/image.png'} 
            alt="Connector" 
            onError={(e) => { e.target = null; }} 
          />
          <h5 className="demo-showcase-card__title">{connector.name}</h5>
        </div>
        <div className="demo-showcase-card__content">
          <p className="demo-showcase-card__description">{connector.description}</p>
        </div>
        <div className="demo-showcase-card__footer">
          <a href={connector.githubLink} className="material-icons" aria-label="View source on GitHub" style={{ marginRight: '10px', cursor: 'pointer' }}>code</a>
          <a href={connector.distLink} download={`${connector.name}.zip`} className="material-icons" aria-label="Download" style={{ marginRight: '10px', cursor: 'pointer' }}>file_download</a>
          <a href={`${connector.githubLink}/discuss`} className="material-icons" target="_blank" rel="noopener noreferrer" aria-label="Report Issues" style={{ cursor: 'pointer' }}>forum</a>
        </div>
      </div>
    </div>
  );
};

export default ConnectorCard;
