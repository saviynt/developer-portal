import type * as Preset from "@docusaurus/preset-classic";
import type { Config } from "@docusaurus/types";
import type * as Plugin from "@docusaurus/types/src/plugin";
import type * as OpenApiPlugin from "docusaurus-plugin-openapi-docs";
import { DOCUSAURUS_VERSION } from "@docusaurus/utils";
import navbar from './navbar';  // Adjust the import path based on where you place your navbar.ts file
import footer from './footer';  // Adjust the import path based on where you place your navbar.ts file
import announcementBar from './announcementBar';

const config: Config = {
  title: "Saviynt for Developers",
  tagline: "For Developers By Developers",
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
    navbar,
    footer,
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
      apiKey: "5e8ea811a09238e62f7676f12b71ef11",
      appId: "DAQRKAMANH",
      indexName: "developers-saviynt",
    },
    announcementBar,
    zoom: {
      selector: '.markdown > img',
      background: {
        light: 'rgb(255, 255, 255)',
        dark: 'rgb(50, 50, 50)'
      },
      config: {
        // options you can specify via https://github.com/francoischalifour/medium-zoom#usage
      }
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
            proxy: "https://cors-api-18af4d883f64.herokuapp.com",
            outputDir: "docs/apis/rest/5.0/reference", // No trailing slash
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            hideSendButton: false,
            showSchemas: true,
            downloadUrl:
              "https://github.com/saviynt/developer-portal/blob/main/static/api-specs/saviynt-rest-api-5.0-bundle.yaml",
            baseUrl: "/apis/rest/5.0/reference", // Leading slash is important
          } satisfies OpenApiPlugin.Options,
          ecf:{
            specPath: "static/api-specs/saviynt-ecf-api-bundle.yaml",
            // proxy: "https://cors-anywhere.herokuapp.com",
            outputDir: "docs/connectors/ecf/1.0/reference", // No trailing slash
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            hideSendButton: false,
            showSchemas: true,
            // downloadUrl:"https://github.com/saviynt/developer-portal/blob/main/static/api-specs/saviynt-rest-api-5.0-bundle.yaml",
            baseUrl: "/connectors/ecf/1.0/reference", // Leading slash is important
          } satisfies OpenApiPlugin.Options,
        } satisfies Plugin.PluginOptions,
      },
    ],
    [
      "posthog-docusaurus",
      {
        apiKey: "phc_hY9SucCm9FBhUQfWiNEQPhW8lQH0tjog12DWUQm3EAu",
        appUrl: "https://app.posthog.com", // optional
        enableInDevelopment: false, // optional
        // other options are passed to posthog-js init as is
        // NOTE: options are passed through JSON.stringify(), so functions (such as `sanitize_properties`) are not supported.
      },
    ],
    [
      'docusaurus-plugin-image-zoom',
      {
        // options like selector, background, zIndex, etc.
        selector: '.markdown :not(a) > img',
        background: 'rgba(0,0,0,0.8)',
        zIndex: 9999,
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
