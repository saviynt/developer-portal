// ShowcaseCards.tsx

import React from 'react';
import ShowcaseCard from './ShowcaseCard';
import { showcaseItems } from './ShowcaseItems';

const ShowcaseCards: React.FC = () => {
  return (
    <div className="container">
      <div className="row">
        {showcaseItems.map((item, index) => (
          <div key={index} className="col col--4">
            <ShowcaseCard item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShowcaseCards;
