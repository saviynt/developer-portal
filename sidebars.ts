/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
 import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import api_reference_sidebar from "./docs/api-reference/sidebar";

 const sidebars: SidebarsConfig = {
  "api-reference": [
    {
      type: "category",
      label: "API-Reference",
      link: {
        type: "generated-index",
        title: "v5.0 (latest)",
        description:
          "This is a Saviynt EIC API Spec for V2.0.  For this sample, you can use the api key special-key to test the authorization filters.",
        slug: "/api-reference/rest/5.0",
      },
      items: api_reference_sidebar,
    },
  ],
  "connectors": [
    {type: 'doc', id: 'connectors'}
  ],
  "Extensions": [
    {type: 'doc', id: 'extensions'}
  ]
 };
 
 export default sidebars;
 