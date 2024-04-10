// Example usage in a Docusaurus TSX page or document

import React from 'react';
import GithubContent from '@site/src/components/GithubContent/GithubContent';

const VaultConnectorPage: React.FC = () => (
  <div>
    <h1>Vault Connector</h1>
    <GithubContent repoPath="saviynt/sampleVaultConnector" />
  </div>
);

export default VaultConnectorPage;
