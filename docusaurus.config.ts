import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";
import { DOCUSAURUS_VERSION } from "@docusaurus/utils";


const config: Config = {
  title: "Saviynt Developer Portal",
  tagline: "Portal for helping developers build a rich ecosystem of tools and apps to support Saviynt",
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
            "https://github.com/saviynt/developer-portal/tree/main",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        blog: {
          showReadingTime: true, // Shows the estimated time to read a blog post.
          // Please change this to your site's blog directory.
          blogSidebarTitle: 'All posts',
          blogSidebarCount: 'ALL',
          // Other blog configurations...
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        sitemap: {
          changefreq: 'weekly',
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
      title: "DEVELOPER |",
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
          label: "APIs",
          position: "left",
          items: [
            {
              label: "5.0",
              to: "/apis/rest/5.0",
            },
          ],
        },
        {
          label: "CONNECTORS",
          to: "/connectors/",
        },
        {
          label: "EXTENSIONS",
          to: "/extensions/",
        },
        {
          label: "SECURITY",
          to: "/security/",
        },
        {
          label: "COMMUNITY",
          to: "/community/",
        },
        {
          position: "right",
          to: "/blog/",
          className: "header-blog-link",
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
              label: "Forums",
              href: "https://forums.saviynt.com/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Twitter",
              href: "https://twitter.com/saviynt",
            },
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
            specPath: "static/api-specs/saviynt-eic-api-5.0.yaml",
            outputDir: "docs/apis/rest/5.0",
            sidebarOptions: {
              groupPathsBy: "tagGroup",
              categoryLinkSource: "auto",
            },
            // template: "api.mustache", // Customize API MDX with mustache template
            downloadUrl:
              "https://github.com/saviynt/developer-portal/blob/main/static/api-specs/saviynt-eic-api-5.0.yaml",
            hideSendButton: false,
            showSchemas: true,
            version: "5.0", // Current version
            label: "5.0", // Current version label
            baseUrl: "/developer-portal/api-reference/rest/5.0", // Leading slash is important
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
