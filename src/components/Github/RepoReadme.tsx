// src/components/GithubContent.tsx

import React, { useState, useEffect } from 'react';
import {marked} from 'marked'; // Import marked for markdown to HTML conversion
import DOMPurify from 'dompurify'; // Import DOMPurify for sanitizing HTML

interface GithubContentProps {
  repoPath: string;
}

const RepoReadme: React.FC<GithubContentProps> = ({ repoPath }) => {
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://api.github.com/repos/${repoPath}/readme`;

      try {
        const response = await fetch(url, {
          headers: {
            Accept: "application/vnd.github+json",
            // Authorization: 'token YOUR_PERSONAL_ACCESS_TOKEN', // Uncomment and replace if using a private repo
          },
        });

        if (!response.ok) {
          throw new Error(`GitHub API returned ${response.status}`);
        }

        const data = await response.json();
        const readmeContent = atob(data.content); // Decode base64 content
        // setContent(readmeContent);
        const htmlContent = marked(readmeContent); // Convert markdown to HTML
        const sanitizedContent = DOMPurify.sanitize(htmlContent); // Sanitize the HTML content
        setContent(sanitizedContent);
      } catch (error) {
        console.error("Failed to fetch GitHub content:", error);
        setContent(`Error: ${(error as Error).message}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [repoPath]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      {/* Displaying raw README content */}
      {/* <h2>Repository README</h2>
      <pre>{content}</pre>  */}
      {/* Safely set the inner HTML to the sanitized, converted  content */}
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default RepoReadme;
