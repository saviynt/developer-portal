// src/components/ShowcaseItems.tsx
export interface ShowcaseItem {
    title: string;
    description: string;
    imageUrl: string;
    link: string;
    tags: string[];
  }
  
  export const showcaseItems: ShowcaseItem[] = [
    {
      title: "Saviynt JSON Wizard",
      description: "Configure Saviynt REST Connector with the power of AI",
      imageUrl: "https://seeklogo.com/images/C/chatgpt-logo-02AFA704B5-seeklogo.com.png",
      link: "https://chat.openai.com/g/g-4ynYxKenQ-saviynt-json-wizard",
      tags: ['favorite', 'chat-gpt', 'connector'],
    },
    {
      title: "Beta Solution",
      description: "An all-encompassing solution designed to tackle industry-specific challenges, offering seamless integration and unparalleled efficiency.",
      imageUrl: "https://www.shutterstock.com/image-vector/group-people-location-icon-gathering-place-1912470844",
      link: "https://example.com/project-beta",
      tags: ['integrations'],
    },
    {
      title: "Gamma Initiative",
      description: "A community-driven initiative that fosters collaboration and knowledge sharing, creating a vibrant ecosystem around our platform.",
      imageUrl: "https://www.shutterstock.com/image-vector/group-people-location-icon-gathering-place-1912470844",
      link: "https://example.com/project-gamma",
      tags: ['templates'],
    },
    // Add more items as needed.
  ];