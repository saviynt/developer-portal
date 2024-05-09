import React, { useState, useEffect } from 'react';
import { Link } from '@docusaurus/router';

const BookmarksList = () => {
  const [bookmarks, setBookmarks] = useState({});

  useEffect(() => {
    setBookmarks(JSON.parse(localStorage.getItem('bookmarks') || '{}'));
  }, []);

  return (
    <div>
      <h4>Bookmarked Pages</h4>
      <ul>
        {Object.entries(bookmarks)
          .filter(([key, value]) => value)
          .map(([key, value]) => (
            <li key={key}>
              <Link to={key}>{key}</Link>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default BookmarksList;
