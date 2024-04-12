import React, { useEffect, useState } from 'react';

const FolderList = () => {
  const [folders, setFolders] = useState([]);
  const [error, setError] = useState(null); // Added state for error handling

  useEffect(() => {
    fetch('https://github.com/saviynt/developer-portal/blob/main/static/community/connector/folderList.json', { cache: "no-cache" })
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
            <p><a href={folder.readmeLink}>README</a></p>
            {/* Additional links can be added here */}
          </div>
        ))
      ) : (
        <div>Loading folders...</div> // Display a loading message if folders array is empty
      )}
    </div>
  );
};

export default FolderList;
