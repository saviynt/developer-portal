import React, { useState, useEffect } from 'react';

const Contributors = ({ docId }) => {
    const [contributors, setContributors] = useState([]);

    useEffect(() => {
        fetch(`/contributors/${docId}.json`)
            .then(response => response.json())
            .then(data => setContributors(data))
            .catch(error => console.error('Failed to load contributors data', error));
    }, [docId]);

    return (
        <div>
            <h3>Contributors</h3>
            <ul>
                {contributors.map(({ username, avatarUrl }) => (
                    <li key={username}>
                        <img src={avatarUrl} alt={username} style={{ width: '30px', height: '30px', borderRadius: '50%' }} />
                        {username}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Contributors;
