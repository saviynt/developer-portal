import React, { useState, useEffect } from 'react';

const BookmarkButton = ({ pageId }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '{}');
    setIsBookmarked(bookmarks[pageId] || false);
  }, [pageId]);

  const toggleBookmark = () => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '{}');
    bookmarks[pageId] = !bookmarks[pageId];
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    setIsBookmarked(!isBookmarked);
  };

  return (
    <button onClick={toggleBookmark}>
      {isBookmarked ? 'Remove Bookmark' : 'Add Bookmark'}
    </button>
  );
};

export default BookmarkButton;
