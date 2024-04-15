import React, { useEffect, useState } from 'react';

const GitDiscussions = ({ repo }) => {
    const [discussions, setDiscussions] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDiscussions = async () => {
            try {
                const response = await fetch(`https://api.github.com/repos/${repo}/discussions`, {
                    headers: { Authorization: `token YOUR_GITHUB_TOKEN` }
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setDiscussions(data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchDiscussions();
    }, [repo]);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Discussions</h1>
            <ul>
                {discussions.map(discussion => (
                    <li key={discussion.id}>
                        {discussion.title} - {discussion.user.login}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GitDiscussions;
