// src/components/GithubComments.tsx

import React, { useState, useEffect } from 'react';

interface Comment {
  id: string;
  author: {
    login: string;
  };
  createdAt: string;
  body: string;
}

const GithubComments: React.FC = () => {
  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    const fetchComments = async () => {
      const query = `query {
        repository(owner: "OWNER", name: "REPO") {
          discussion(number: DISCUSSION_NUMBER) {
            comments(first: 100) {
              nodes {
                id
                author {
                  login
                }
                createdAt
                body
              }
            }
          }
        }
      }`;

      const response = await fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          'Authorization': `bearer ${process.env.GITHUB_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        console.error('Failed to fetch comments');
        return;
      }

      const data = await response.json();
      setComments(data.data.repository.discussion.comments.nodes);
    };

    fetchComments();
  }, []);

  return (
    <div>
      {comments.map(comment => (
        <div key={comment.id}>
          <h4>{comment.author.login} - {new Date(comment.createdAt).toLocaleDateString()}</h4>
          <p>{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default GithubComments;
