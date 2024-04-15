import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

const FolderList = () => {
  const [folders, setFolders] = useState([]);
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/saviynt/developer-portal/main/static/community/connector/connectorList.json', { cache: "no-cache" })
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

  const handleCardClick = (folder) => {
    // Navigate and pass the URL to be fetched in the new component
    history.push('/developer-portal/community/connectors/readmepage', 
    { 
      readmeUrl: folder.readmeLink, 
      githubUrl: folder.githubLink, 
      distLink: folder.distLink, 
      name: folder.name 
    });
  };

  if (error) {
    return <div>Error loading folder list: {error}</div>;
  }

  return (
    <div className="card-list">
      {folders.map(folder => (
        <div key={folder.name} className="card" onClick={() => handleCardClick(folder)}>
          <div className="card-body">
            <h5 className="card-title">{folder.name}</h5>
            <p className="card-text">{folder.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FolderList;
