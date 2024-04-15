// src/pages/ReadmePage.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import Layout from '@theme/Layout'; // Assuming you are using the default Docusaurus theme


const ReadmePage = () => {
  const location = useLocation();
  const history = useHistory();
  const [readmeContent, setReadmeContent] = useState('');
  const [error, setError] = useState(null);
  const { readmeUrl, githubUrl, distLink, name } = location.state || {};
  const issuesUrl = githubUrl ? `https://github.com/saviynt/community-connectors/issues/new?labels=${name}` : null;  // Ensuring no trailing slash


  useEffect(() => {

    if (readmeUrl) {
      fetch(readmeUrl, { cache: "no-cache" })
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
  }, [location]);

  return (
      <Layout title={name} description={`View detailed README content for ${name}`}>
        <div className="container margin-vert--lg">
          <div className="row">
            <div className="col col--8 col--offset-2">
              {error ? (
                <div className="alert alert--danger">
                  Error loading README: {error}
                </div>
              ) : (
                <div>
                <div className="button-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                  <i className="material-icons" style={{ cursor: 'pointer' }} onClick={() => history.goBack()} aria-label="Go back">
                    arrow_back
                  </i>
                </div>
                <h1>{name} Community Connector</h1>
                  <div className="button-group">
                    <a href={githubUrl} className="material-icons" aria-label="View source on GitHub" style={{ marginRight: '10px', cursor: 'pointer' }}>
                      code
                    </a>
                    <a href={distLink} download={`${name}.zip`} className="material-icons" aria-label="Download" style={{ cursor: 'pointer' }}>
                      file_download
                    </a>
                    <a href={issuesUrl} className="material-icons" target="_blank" rel="noopener noreferrer" aria-label="Issue" style={{ cursor: 'pointer' }}>
                      bug_report
                    </a>
                  </div>
                <div className="markdown" dangerouslySetInnerHTML={{ __html: readmeContent }} />
              </div>
              )}
            </div>
          </div>
        </div>
      </Layout>
  );
};

export default ReadmePage;
