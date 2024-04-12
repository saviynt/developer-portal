import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

const FolderList = () => {
  const [folders, setFolders] = useState([]);
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/saviynt/developer-portal/main/static/community/connector/folderList.json', { cache: "no-cache" })
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
      .then(data => setFolders(data))
      .catch(error => {
        console.error("Error fetching folder list:", error);
        setError(error.toString());
      });
  }, []);

  const handleReadmeClick = (readmeLink) => {
    // Navigate and pass the URL to be fetched in the new component
    history.push('/developer-portal/community/connectors/readmepage', { readmeUrl: readmeLink });
  };

  if (error) {
    return <div>Error loading folder list: {error}</div>;
  }

  return (
    <div>
      {folders.length > 0 ? (
        folders.map(folder => (
          <div key={folder.name}>
            <h3>{folder.name}</h3>
            <button onClick={(e) => {
              e.preventDefault();
              handleReadmeClick(folder.readmeLink);
            }}>README</button>
          </div>
        ))
      ) : (
        <div>Loading folders...</div>
      )}
      {/* {activeReadmeContent && (
        <div className="readme-content" dangerouslySetInnerHTML={{ __html: activeReadmeContent }} />
      )} */}
    </div>
  );
};

export default FolderList;
