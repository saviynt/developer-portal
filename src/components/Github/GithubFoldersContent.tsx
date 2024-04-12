import React, { useEffect, useState } from 'react';
import marked from 'marked'; // Import the marked library to parse Markdown
import DOMPurify from 'dompurify'; // Import DOMPurify to sanitize HTML

const FolderList = () => {
  const [folders, setFolders] = useState([]);
  const [error, setError] = useState(null);
  const [activeReadmeContent, setActiveReadmeContent] = useState(null); // Moved inside the component

  const fetchReadmeContent = (url) => {
    fetch(url, { cache: "no-cache" })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch README');
        }
        return response.text();
      })
      .then(markdown => {
        const html = marked(markdown); // Convert markdown to HTML
        const sanitizedHtml = DOMPurify.sanitize(html); // Sanitize the HTML content
        setActiveReadmeContent(sanitizedHtml);
      })
      .catch(error => {
        console.error("Error fetching README:", error);
        setError(error.toString());
      });
  };

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/saviynt/developer-portal/main/static/community/connector/folderList.json', { cache: "no-cache" })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text(); // First read text instead of JSON
      })
      .then(text => {
        try {
          return JSON.parse(text); // Try parsing text as JSON
        } catch (e) {
          throw new Error('Failed to parse JSON, possibly received HTML: ' + text.slice(0, 100)); // Provide part of the text to aid debugging
        }
      })
      .then(data => setFolders(data))
      .catch(error => {
        console.error("Error fetching folder list:", error);
        setError(error.toString());
      });
  }, []);

  // Conditional rendering based on the existence of an error
  if (error) {
    return <div>Error loading folder list: {error}</div>; // Display error message
  }

  return (
    <div>
      {folders.length > 0 ? (
        folders.map(folder => (
          <div key={folder.name}>
            <h3>{folder.name}</h3>
            <p><a href="#" onClick={(e) => {
              e.preventDefault();
              fetchReadmeContent(folder.readmeLink);
            }}>README</a></p>
          </div>
        ))
      ) : (
        <div>Loading folders...</div> // Display a loading message if folders array is empty
      )}
      {activeReadmeContent && (
        <div className="readme-content" dangerouslySetInnerHTML={{ __html: activeReadmeContent }} />
      )}
    </div>
  );
};

export default FolderList;
