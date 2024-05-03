import type { Footer } from '@docusaurus/theme-common';

const footer: Footer = {
    style: 'light', // You can choose 'dark', 'light', or 'primary' depending on your theme
    links: [
      {
        title: 'PRODUCTS',
        items: [
          { label: 'Enterprise Identity Cloud', href: 'https://saviynt.com/enterprise-identity-cloud/' },
          { label: 'Identity Governance & Administration', href: 'https://saviynt.com/solutions/identity-governance-and-administration/' },
          { label: 'Cloud Privileged Access Management', href: 'https://saviynt.com/solutions/cloud-privileged-access-management/' },
          { label: 'Third-Party Access Governance', href: 'https://saviynt.com/solutions/third-party-access-governance/' },
          { label: 'Application Access Governance', href: 'https://saviynt.com/solutions/application-access-governance/' },
          { label: 'Data Access Governance', href: 'https://saviynt.com/solutions/data-access-governance/' },
          { label: 'Key Integrations', href: 'https://saviynt.com/integrations/' },
        ],
      },
      {
        title: 'CUSTOMERS',
        items: [
          { label: 'Saviynt + Gordon Food Services', href: 'https://saviynt.com/customers/gordon-food-service-modernizing-identity-enhancing-security/' },
          { label: 'Saviynt + Origin Energy', href: 'https://saviynt.com/customers/origin-energy-continuous-compliance/' },
          { label: 'Saviynt + Wienerberger', href: 'https://saviynt.com/customers/wienerberger-legacy-iga-modernization/' },
          { label: 'Saviynt + First Solar', href: 'https://saviynt.com/customers/first-solar-digital-transformation/' },
          { label: 'Explore Customer Successes', href: 'https://saviynt.com/customers/' },
        ],
      },
      {
        title: 'RESOURCES',
        items: [
          { label: 'Content Hub', href: 'https://saviynt.com/content-hub/' },
          { label: 'Events & Live Webinars', href: 'https://saviynt.com/events/' },
          { label: 'Identity Security Glossary', href: 'https://saviynt.com/glossary/' },
          { label: 'Analyst Reports', href: 'https://saviynt.com/content-hub-term/content-type/analyst-reports/' },
          { label: 'Customer Support', href: 'https://saviynt.com/customer-support/' },
          { label: 'Forrester TEI Estimator', href: 'https://saviynt.com/2020-forrester-total-economic-impact-report/' },
          { label: 'Saviynt Blog', href: 'https://saviynt.com/blog/' },
        ],
      },
      {
        title: 'COMPANY',
        items: [
          { label: 'About Saviynt', href: 'https://saviynt.com/about-saviynt/' },
          { label: 'Leadership', href: 'https://saviynt.com/leadership-team/' },
          { label: 'Partners', href: 'https://saviynt.com/global-partnership-program/' },
          { label: 'Newsroom', href: 'https://saviynt.com/newsroom/' },
          { label: 'Careers', href: 'https://saviynt.com/careers/' },
          { label: 'Community', href: 'https://saviynt.com/saviynt-community/' },
          { label: 'Contact Us', href: 'https://saviynt.com/contact-us/' },
        ],
      },
    ],
    copyright: 'Copyright © 2024. Saviynt Inc. All Rights Reserved.',
  }

  export default footer;