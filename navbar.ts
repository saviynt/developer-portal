import type { Navbar } from '@docusaurus/theme-common';

const navbar: Navbar = {
  title: "FOR DEVELOPERS",
  logo: {
    alt: "SAVIYNT",
    src: "img/Saviynt_logo_Navy.svg",
    srcDark: 'img/Saviynt_logo_White.svg',
  },
  hideOnScroll: false,  // Set to true or false based on your preference
  items: [
    {
      label: "📖 GUIDE",
      to: "/guide",
    },
    {
      label: "👥 COMMUNITY",
      to: "/community",
    },
    {
      label: "📰 BLOG",
      to: "/blog/",
    },
    {
      href: "https://github.com/saviynt",
      position: "right",
      className: "header-github-link",
      "aria-label": "GitHub repository",
    },
  ],
}

export default navbar;
