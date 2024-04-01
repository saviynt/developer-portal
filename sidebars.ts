/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
 import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
 import eicVersions from "./docs/eic/versions.json";

 import {
   versionCrumb,
   versionSelector,
 } from "docusaurus-plugin-openapi-docs/lib/sidebars/utils";
 
import eic_5_0_Sidebar from "./docs/eic/sidebar";
import eic_2_0_Sidebar from "./docs/eic/2.0/sidebar";

 const sidebars: SidebarsConfig = {
  "eic-5.0.0": [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(eicVersions),
      className: "version-button",
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`v5.0.0`),
    },
    {
      type: "category",
      label: "EIC",
      link: {
        type: "generated-index",
        title: "v5.0.0 (latest)",
        description:
          "This is a sample server Petstore server. You can find out more about Swagger at http://swagger.io or on irc.freenode.net, #swagger. For this sample, you can use the api key special-key to test the authorization filters.",
        slug: "/eic/rest/5.0",
      },
      items: eic_5_0_Sidebar,
    },
  ],

  "eic-1.0.0": [
    {
      type: "html",
      defaultStyle: true,
      value: versionSelector(eicVersions),
      className: "version-button",
    },
    {
      type: "html",
      defaultStyle: true,
      value: versionCrumb(`v2.0.0`),
    },
    {
      type: "category",
      label: "EIC",
      link: {
        type: "generated-index",
        title: "v2.0.0",
        description:
          "This is a Saviynt EIC API Spec for V2.0.  For this sample, you can use the api key special-key to test the authorization filters.",
        slug: "/eic/rest/2.0",
      },
      items: eic_2_0_Sidebar,
    },
  ],
 };
 
 export default sidebars;
 