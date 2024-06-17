import React from 'react';
import useFetchConnector from './useFetchConnector';
import ConnectorCard from './ConnectorCard';

const ConnectorList = () => {
  const { data: connectors, error } = useFetchConnector('/community/connector/connectorList.json');

  if (error) {
    return <div>Error loading folder list: {error}</div>;
  }

  return (
    <div className="container">
      <div className="row">
        {connectors.map(connector => (
          <ConnectorCard key={connector.name} connector={connector} />
        ))}
      </div>
    </div>
  );
};

export default ConnectorList;
