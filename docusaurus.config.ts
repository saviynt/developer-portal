import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";
import { DOCUSAURUS_VERSION } from "@docusaurus/utils";


const config: Config = {
  title: "Saviynt for Developers",
  tagline: "Helping developers build a rich ecosystem of tools and apps around Saviynt",
  url: "https://developers.saviynt.com",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/saviynt_favicon.ico",
  organizationName: "Saviynt",
  projectName: "developer-portal",

  presets: [
    [
      "classic",
      {
        docs: {
          routeBasePath: "/",
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/saviynt/developer-portal/tree/main",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        blog: {
          showReadingTime: true, // Shows the estimated time to read a blog post.
          // Please change this to your site's blog directory.
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          blogTagsListComponent: '@theme/BlogTagsListPage',
          
          // Other blog configurations...
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          changefreq: 'daily',
          priority: 0.5,
          ignorePatterns: ['/tags/**'],
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    navbar: {
      title: "FOR DEVELOPERS",
      logo: {
        alt: "Keytar",
        src: "img/Saviynt_logo_Navy.svg",
      },
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
              label: "REST API 5.0",
              to: "/reference/rest/5.0",
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
  },
    footer: {
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
    },
    prism: {
      additionalLanguages: [
        "ruby",
        "csharp",
        "php",
        "java",
        "powershell",
        "json",
        "bash",
      ],
    },
    languageTabs: [
      {
        highlight: "bash",
        language: "curl",
        logoClass: "bash",
      },
      {
        highlight: "python",
        language: "python",
        logoClass: "python",
        variant: "requests",
      },
      {
        highlight: "go",
        language: "go",
        logoClass: "go",
      },
      {
        highlight: "javascript",
        language: "nodejs",
        logoClass: "nodejs",
        variant: "axios",
      },
      {
        highlight: "ruby",
        language: "ruby",
        logoClass: "ruby",
      },
      {
        highlight: "csharp",
        language: "csharp",
        logoClass: "csharp",
        variant: "httpclient",
      },
      {
        highlight: "php",
        language: "php",
        logoClass: "php",
      },
      {
        highlight: "java",
        language: "java",
        logoClass: "java",
        variant: "unirest",
      },
      {
        highlight: "powershell",
        language: "powershell",
        logoClass: "powershell",
      },
    ],
    algolia: {
      apiKey: "6591669591a0940e49253bf77dbc76c4",
      appId: "FNGBPDRR4F",
      indexName: "saviynt_dev",
    },
    announcementBar: {
      id: "announcementBar_1",
      content: "Saviynt Developer Portal (Preview)",
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      "docusaurus-plugin-openapi-docs", 
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          saviynt:{
            specPath: "static/api-specs/saviynt-rest-api-5.0-bundle.yaml",
            proxy: "https://cors-anywhere.herokuapp.com",
            outputDir: "docs/reference/rest/5.0", // No trailing slash
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            hideSendButton: false,
            showSchemas: true,
            downloadUrl:
              "https://github.com/saviynt/developer-portal/blob/main/static/api-specs/saviynt-rest-api-5.0-bundle.yaml",
            baseUrl: "/reference/rest/5.0", // Leading slash is important
          } satisfies OpenApiPlugin.Options,
        } satisfies Plugin.PluginOptions,
      },
    ],[
      "posthog-docusaurus",
      {
        apiKey: "phc_hY9SucCm9FBhUQfWiNEQPhW8lQH0tjog12DWUQm3EAu",
        appUrl: "https://app.posthog.com", // optional
        enableInDevelopment: false, // optional
        // other options are passed to posthog-js init as is
        // NOTE: options are passed through JSON.stringify(), so functions (such as `sanitize_properties`) are not supported.
      },
    ],
  ],
  markdown: {
    mermaid: true,
  },
  themes: ["docusaurus-theme-openapi-docs", '@docusaurus/theme-mermaid'],
  stylesheets: [
    {
      href: "https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap",
      type: "text/css",
    },
    {
      href: "https://fonts.googleapis.com/icon?family=Material+Icons",
      type: "text/css",
    },
  ],
};

export default async function createConfig() {
  return config;
}
