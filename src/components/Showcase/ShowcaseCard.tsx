// ShowcaseCard.tsx

import React from 'react';

interface ShowcaseCardProps {
  item: ShowcaseItem;
}

export interface ShowcaseItem {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  tags: string[];
  readmeLink: string;
  githubLink: string;
  resourceLink: string;
}

const ShowcaseCard: React.FC<ShowcaseCardProps> = ({ item }) => {
  return (
    <a href={item.link} className="demo-showcase-card" aria-label={`Learn more about ${item.title}`} target="_blank" rel="noopener noreferrer">
    {/* <div className="demo-showcase-card"> */}
      <div className="demo-showcase-card__image">
        <img src={item.imageUrl} alt={item.title} />
      </div>
      <div className="demo-showcase-card__content">
        <div className="demo-showcase-card__title">{item.title}</div>
        <div className="demo-showcase-card__description">{item.description}</div>
        {/* <div className="demo-showcase-card__link">
            <a href={item.link} aria-label={item.linkAriaLabel} target="_blank" rel="noopener noreferrer">
              <i className="material-icons">open_in_browser</i>
            </a>
         </div> */}
      </div>
      <div className="demo-showcase-card__tags">
        {item.tags.map((tag, index) => (
          <span key={index} className={`tag tag--${tag}`}>{tag}</span>
        ))}
      </div>
    {/* </div> */}
    </a>
  );
};

export default ShowcaseCard;
