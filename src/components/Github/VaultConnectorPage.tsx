// Example usage in a Docusaurus TSX page or document

import React from 'react';
import GithubContent from '@site/src/components/Github/GithubContent';

const VaultConnectorPage: React.FC = () => (
  <div>
    <GithubContent repoPath="saviynt/sampleVaultConnector" />
  </div>
);

export default VaultConnectorPage;
