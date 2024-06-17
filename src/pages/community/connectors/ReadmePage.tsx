import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import Layout from '@theme/Layout'; // Assuming you are using the default Docusaurus theme
import GitHubComments from '../../../components/Github/Comments';
import useFetchConnector from '../../../components/Community/Connectors/useFetchConnector';

// Create a custom renderer
const customRenderer = {
  blockquote(quote) {
    const quoteContent = quote.replace(/^\[!\w+\]\s*/gm, ''); // Remove the markers
    if (quote.includes('[!NOTE]')) {
      return `<blockquote class="note">${quoteContent}</blockquote>`;
    } else if (quote.includes('[!TIP]')) {
      return `<blockquote class="tip">${quoteContent}</blockquote>`;
    } else if (quote.includes('[!WARNING]')) {
      return `<blockquote class="warning">${quoteContent}</blockquote>`;
    } else if (quote.includes('[!IMPORTANT]')) {
      return `<blockquote class="important">${quoteContent}</blockquote>`;
    } else if (quote.includes('[!CAUTION]')) {
      return `<blockquote class="caution">${quoteContent}</blockquote>`;
    }
    return `<blockquote>${quoteContent}</blockquote>`;
  },
};

customRenderer.heading = (text, level) => {
  const escapedText = text.toLowerCase().replace(/[^\w]+/g, '-');
  return `<h${level} id="${escapedText}">${text}</h${level}>`;
};

// Set options
marked.use({
  pedantic: false,
  gfm: true,
}, { renderer: customRenderer });

const ReadmePage = () => {
  const location = useLocation();
  const history = useHistory();
  const [readmeContent, setReadmeContent] = useState('');
  const [error, setError] = useState(null);

  // Parse query parameters
  const queryParams = new URLSearchParams(location.search);
  const connectorName = queryParams.get('q'); // Get connectorName from query parameter 'q'

  const { data, loading, fetchConnectorByName } = useFetchConnector('/community/connector/connectorList.json');

  useEffect(() => {
    if (!loading && connectorName) {
      const connector = fetchConnectorByName(connectorName);
      if (connector) {
        console.info("Connector Found: ", connector);
        if (connector.readmeLink) {
          fetch(connector.readmeLink, { cache: "no-cache" })
            .then(response => {
              if (!response.ok) {
                throw new Error('Failed to fetch README');
              }
              return response.text();
            })
            .then(markdown => {
              const html = marked(markdown);
              const sanitizedHtml = DOMPurify.sanitize(html);
              setReadmeContent(sanitizedHtml);
            })
            .catch(error => {
              console.error("Error fetching README:", error);
              setError(error.toString());
            });
        }
      } else {
        console.error("No connector name found in location state or params");
      }
    }
  }, [data, loading, connectorName, fetchConnectorByName]);

  const connector = fetchConnectorByName(connectorName);

  return (
    <Layout title={connectorName} description={`View detailed README content for ${connectorName}`}>
      <div className="container margin-vert--lg">
        <div className="row">
          <div className="col col--8 col--offset-2">
            {error ? (
              <div className="alert alert--danger">
                Error loading README: {error}
              </div>
            ) : (
              <div>
                <div className="button-group">
                  <i className="material-icons" style={{ cursor: 'pointer' }} onClick={() => history.goBack()} aria-label="Go back">
                    arrow_back
                  </i>
                  {connector && connector.repoLink && (
                    <a href={connector.repoLink} className="material-icons" aria-label="View source on GitHub" style={{ marginRight: '10px', cursor: 'pointer' }}>
                      code
                    </a>
                  )}
                  {connector && connector.distLink && (
                    <a href={connector.distLink} download={`${connectorName}.zip`} className="material-icons" aria-label="Download" style={{ cursor: 'pointer' }}>
                      file_download
                    </a>
                  )}
                  {connector && connector.issuesUrl && (
                    <a href={connector.issuesUrl} className="material-icons" target="_blank" rel="noopener noreferrer" aria-label="Issue" style={{ cursor: 'pointer' }}>
                      bug_report
                    </a>
                  )}
                </div>
                <h1>{connectorName} Community Connector</h1>
                <div className="markdown" dangerouslySetInnerHTML={{ __html: readmeContent }} />
                <div className="comments">
                  <GitHubComments repo="saviynt/saviynt-connectors" issueTerm={connectorName} label="connector" theme="github-light" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ReadmePage;
