// src/pages/ReadmePage.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { marked } from 'marked';
import DOMPurify from 'dompurify';

const ReadmePage = () => {
  const location = useLocation();
  const [readmeContent, setReadmeContent] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const readmeUrl = location.state?.readmeUrl;
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
  }, [location.state]);

  return (
    <div>
      {error ? (
        <div>Error loading README: {error}</div>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: readmeContent }} />
      )}
    </div>
  );
};

export default ReadmePage;
