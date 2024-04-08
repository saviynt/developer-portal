/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
 import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import api_rest_5_0_sidebar from "./docs/apis/rest/5.0/sidebar";
import {
  versionCrumb,
  versionSelector,
} from "docusaurus-plugin-openapi-docs/lib/sidebars/utils";

 const sidebars: SidebarsConfig = {
  "api_5_0": [
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`5.0`),
    },
    {
      type: 'category',
      label: 'Documentation',
      collapsible: false,
      items: [
        {
          type: 'doc',
          id: 'apis/rest/getting-started',
        },
        {
          type: "category",
          label: "REST API",
          link: {
            type: "generated-index",
            title: "REST API",
            description:
              "This is a Saviynt REST API Specification for 5.0.",
            slug: "/apis/rest/5.0",
          },
          items: api_rest_5_0_sidebar,
        },
        {
          type: 'category', 
          label: "Client SDKs",
          link: {
            type: 'doc',
            id: 'apis/client-sdks',
          },
          items: [
            {
              type: 'autogenerated',
              dirName: 'apis/client-sdks',
            },
          ],
        },
        {
          type: 'doc',
          id: 'apis/rest/changelog',
        },
      ]
    },
  ],
  "connectors": [
    {
      type: 'category', 
      label: "Connectors",
      link: {
        type: 'doc',
        id: 'connectors',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'connectors',
        },
      ],
    },
  ],
  "Extensions": [
    {
      type: 'category', 
      label: "Extensions",
      link: {
        type: 'doc',
        id: 'extensions',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'extensions',
        },
      ],
    },
  ],
  "Security": [
    {
      type: 'category', 
      label: "Security",
      link: {
        type: 'doc',
        id: 'security',
      },
      items: [
        {
          type: 'autogenerated',
          dirName: 'security',
        },
      ],
    },
  ]
 };
 
 export default sidebars;
 