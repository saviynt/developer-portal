// src/pages/ReadmePage.jsx
import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import Layout from '@theme/Layout'; // Assuming you are using the default Docusaurus theme
import GitHubComments from '../../../components/Github/Comments';


// Create a custom renderer
const customRenderer = {
  /* custom rendering of 
    > [!NOTE]  
    > Highlights information that users should take into account, even when skimming.

    > [!TIP]
    > Optional information to help a user be more successful.

    > [!IMPORTANT]  
    > Crucial information necessary for users to succeed.

    > [!WARNING]  
    > Critical content demanding immediate user attention due to potential risks.

    > [!CAUTION]
    > Negative potential consequences of an action.
  */

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

// Set options
marked.use({
  pedantic: false,
  gfm: true,
},{ renderer: customRenderer }
);


const ReadmePage = () => {
  const location = useLocation();
  const history = useHistory();
  const [readmeContent, setReadmeContent] = useState('');
  const [error, setError] = useState(null);
  const { readmeUrl, githubUrl, distLink, name } = location.state || {};
  const issuesUrl = githubUrl ? `https://github.com/saviynt/saviynt-connectors/issues/new?labels=${name}` : null;  // Ensuring no trailing slash


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
                  <div className="button-group">
                    <i className="material-icons" style={{ cursor: 'pointer' }} onClick={() => history.goBack()} aria-label="Go back">
                      arrow_back
                    </i>
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
                  
                <h1>{name} Community Connector</h1>
                  <div className="markdown" dangerouslySetInnerHTML={{ __html: readmeContent }} />
                  <div className="comments">
                    <GitHubComments repo="saviynt/saviynt-connectors" issueTerm={name} label="connector" theme="github-light" />
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
