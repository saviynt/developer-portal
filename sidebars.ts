/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
 import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

 import {
   versionCrumb,
   versionSelector,
 } from "docusaurus-plugin-openapi-docs/lib/sidebars/utils";
 
import eicSidebar from "./docs/eic/sidebar";
 
 const sidebars: SidebarsConfig = {
   eicSidebar: [
    {
      type: "category",
      label: "eic",
      link: {
        type: "generated-index",
        title: "Saviynt API",
        description:
          "This is a sample server Saviynt server. ",
        slug: "/api/eic/",
      },
      items: eicSidebar,
    },
  ],
 };
 
 export default sidebars;
 