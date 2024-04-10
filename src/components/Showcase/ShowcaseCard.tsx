// ShowcaseCard.tsx

import React from 'react';
import { ShowcaseItem } from './ShowcaseItems';

interface ShowcaseCardProps {
  item: ShowcaseItem;
}

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({ item }) => {
  return (
    <div className="demo-showcase-card">
      <div className="demo-showcase-card__image">
        <img src={item.imageUrl} alt={item.title} />
      </div>
      <div className="demo-showcase-card__content">
        <div className="demo-showcase-card__title">{item.title}</div>
        <div className="demo-showcase-card__description">{item.description}</div>
        <div className="demo-showcase-card__link">{item.link}</div>
      </div>
      <div className="demo-showcase-card__tags">
        {item.tags.map((tag, index) => (
          <span key={index} className={`tag tag--${tag}`}>{tag}</span>
        ))}
      </div>
    </div>
  );
};

export default ShowcaseCard;
