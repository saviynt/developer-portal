import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";

import { DOCUSAURUS_VERSION } from "@docusaurus/utils";

const config: Config = {
  title: "Saviynt Developer Portal",
  tagline: "OpenAPI plugin for generating API reference docs in Docusaurus v2",
  url: "https://saviynt.github.io",
  baseUrl: "/developer-portal/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
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
            "https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/tree/main/demo",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
        gtag: {
          trackingID: "GTM-THVM29S",
          anonymizeIP: false,
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
      title: "Developer Portal",
      logo: {
        alt: "Keytar",
        src: "img/Saviynt_logo_Navy.svg",
      },
      items: [
        {
          label: "Reference",
          to: "/api/eic/",
        },
        {
          href: "https://docs.saviyntcloud.com/",
          position: "right",
          className: "header-medium-link",
          "aria-label": "Saviynt Docs",
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
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Saviynt Developer Portal",
              to: "/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/saviynt",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Forum",
              href: "https://forums.saviynt.com/",
            },
            {
              label: "GitHub",
              href: "https://github.com/saviynt",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Saviynt Inc. All Rights Reserved.`,

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
      apiKey: "441074cace987cbf4640c039ebed303c",
      appId: "J0EABTYI1A",
      indexName: "docusaurus-openapi",
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
            specPath: "static/api-specs/saviynt-eic-api-5.0.yaml",
            outputDir: "docs/eic",
            sidebarOptions: {
              groupPathsBy: "tagGroup",
              categoryLinkSource: "tag",
            },
          },
        } satisfies Plugin.PluginOptions,
      },
    ],
  ],
  themes: ["docusaurus-theme-openapi-docs"],
  stylesheets: [
    {
      href: "https://use.fontawesome.com/releases/v5.11.0/css/all.css",
      type: "text/css",
    },
  ],
};

export default async function createConfig() {
  return config;
}
