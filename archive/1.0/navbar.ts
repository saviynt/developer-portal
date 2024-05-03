import type { Navbar } from '@docusaurus/theme-common';

const navbar: Navbar ={
    title: "FOR DEVELOPERS",
    logo: {
      alt: "Keytar",
      src: "img/Saviynt_logo_Navy.svg",
    },
    hideOnScroll: false,  // Set to true or false based on your preference
    items: [
      {
        label: "GUIDE",
        to: "/guide/",
      },
      {
        type: "dropdown",
        label: "REFERENCE",
        position: "left",
        items: [
          {
            label: "REST API",
            to: "/reference/rest/5.0",
          },
          {
            label: "ECF API",
            to: "/reference/ecf",
          },
        ],
      },
      {
        label: "COMMUNITY",
        to: "/community/",
      },
      {
        label: "BLOGS",
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
