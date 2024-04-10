// src/components/GithubContent.tsx

import React, { useState, useEffect } from 'react';

interface GithubContentProps {
  repoPath: string;
}

const GithubContent: React.FC<GithubContentProps> = ({ repoPath }) => {
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
        setContent(readmeContent);
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
      <h2>Repository README</h2>
      <pre>{content}</pre> {/* Displaying raw README content */}
    </div>
  );
};

export default GithubContent;
