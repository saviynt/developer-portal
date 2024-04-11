import React, { useEffect, useState } from 'react';

const FolderList = () => {
  const [folders, setFolders] = useState([]);
  const [error, setError] = useState(null); // Added state for error handling

  useEffect(() => {
    fetch('/folderList.json')
      .then(response => {
        // Check if the response is ok (status in the range 200-299)
        if (!response.ok) {
          throw new Error('Network response was not ok'); // Throw an error if not ok
        }
        return response.json();
      })
      .then(data => setFolders(data))
      .catch(error => {
        console.error("Error fetching folder list:", error);
        setError(error.toString()); // Update error state with error message
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
