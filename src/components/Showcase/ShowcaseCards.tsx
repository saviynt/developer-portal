import React, { useState, useEffect } from 'react';
import ShowcaseCard,{ ShowcaseItem } from './ShowcaseCard';


const ShowcaseCards: React.FC = () => {
    const [items, setItems] = useState<ShowcaseItem[]>([]);
    const [isLoading, setLoading] = useState(true);

    // Fetch the JSON data when the component mounts
    useEffect(() => {
        fetch('/community/showcase/showcaseList.json') // Adjust the path as necessary
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setItems(data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error loading the showcase items:', error);
                setLoading(false);
            });
    }, []);

    // Optionally handle loading state
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container">
            <div className="row">
                {items.map((item, index) => (
                    <div key={index} className="col col--4">
                        <ShowcaseCard item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ShowcaseCards;
