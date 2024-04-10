import React, { useEffect, useState } from 'react';

const FolderList = () => {
  const [folders, setFolders] = useState([]);

  useEffect(() => {
    fetch('/folderList.json')
      .then(response => response.json())
      .then(data => setFolders(data));
  }, []);

  return (
    <div>
      {folders.map(folder => (
        <div key={folder.name}>
          <h3>{folder.name}</h3>
          <p><a href={folder.readmeLink}>README</a></p>
          {/* Additional links can be added here */}
        </div>
      ))}
    </div>
  );
};

export default FolderList;
