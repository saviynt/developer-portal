"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[7659],{6656:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>t,toc:()=>c});var s=i(74848),r=i(28453);const o={id:"versioning",hide_title:!0,sidebar_label:"Versioning",title:"Versioning"},l=void 0,t={id:"versioning",title:"Versioning",description:"Overview",source:"@site/docs/versioning.mdx",sourceDirName:".",slug:"/versioning",permalink:"/developer-portal/versioning",draft:!1,unlisted:!1,editUrl:"https://github.com/PaloAltoNetworks/docusaurus-openapi-docs/tree/main/demo/docs/versioning.mdx",tags:[],version:"current",frontMatter:{id:"versioning",hide_title:!0,sidebar_label:"Versioning",title:"Versioning"}},d={},c=[{value:"Overview",id:"overview",level:2},{value:"Versioning CLI",id:"versioning-cli",level:2},{value:"Generating and Cleaning",id:"generating-and-cleaning",level:3},{value:"<code>versions.json</code>",id:"versionsjson",level:3},{value:"UI Helpers",id:"ui-helpers",level:2},{value:"Version selector",id:"version-selector",level:3},{value:"Version Crumb",id:"version-crumb",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:'Although Docusaurus offers its own versioning system the OpenAPI Docs plugin comes equipped with one specifically aimed at versioning API docs. Aside from being relatively "lighter" than the Docusaurus system, it offers a way to automatically generate some useful UI components including:'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"A dropdown version selector for quickly switching API versions."}),"\n",(0,s.jsx)(n.li,{children:"A version badge/breadcrumb for quickly knowing which version you are looking at."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Finally, the OpenAPI Docs versioning implementation allows API docs to be versioned separately from non-API docs which provides greater flexibility."}),"\n",(0,s.jsx)(n.h2,{id:"versioning-cli",children:"Versioning CLI"}),"\n",(0,s.jsx)(n.p,{children:"The OpenAPI Docs plugin versioning system is driven by the CLI and is not unlike the experience of generating and cleaning non-versioned API docs."}),"\n",(0,s.jsx)(n.admonition,{title:"TIP",type:"info",children:(0,s.jsxs)(n.p,{children:["For details around how to configure versioning see the ",(0,s.jsx)(n.a,{href:"/developer-portal/#plugin-configuration-options",children:"Plugin Configuration Options"})," and ",(0,s.jsx)(n.a,{href:"/developer-portal/#versioning-openapi-docs",children:"Versioning"})," guides."]})}),"\n",(0,s.jsx)(n.h3,{id:"generating-and-cleaning",children:"Generating and Cleaning"}),"\n",(0,s.jsx)(n.p,{children:"Generating versioned API docs example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn docusaurus gen-api-docs:version petstore:1.0.0\n"})}),"\n",(0,s.jsx)(n.p,{children:"Cleaning versioned API docs example:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn docusaurus clean-api-docs:version petstore:1.0.0\n"})}),"\n",(0,s.jsx)(n.p,{children:"Generating all Petstore versioned API docs:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"yarn docusaurus gen-api-docs:version petstore:all\n"})}),"\n",(0,s.jsx)(n.h3,{id:"versionsjson",children:(0,s.jsx)(n.code,{children:"versions.json"})}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"versions.json"})," file contains metadata that could be useful for building UI navigation and breadcrumb components. It is generated and written each time ",(0,s.jsx)(n.code,{children:"gen-api-docs:version"})," is executed, whether for a specific version ",(0,s.jsx)(n.code,{children:"id"})," or ",(0,s.jsx)(n.code,{children:"all"})," versions. It is only automatically deleted when ",(0,s.jsx)(n.code,{children:"yarn docusaurus clean-api-docs:version <your-api-config-key>:all"})," is executed. When attempting to remove or cleanup versions there are some details to keep in mind:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Removing/deleting a version will require multiple steps.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Step 1"}),": Run the appropriate ",(0,s.jsx)(n.code,{children:"clean-api-docs:version"})," command."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Step 2"}),": Manually delete the version folder from the docs ",(0,s.jsx)(n.code,{children:"path"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Step 3"}),": Remove the version from the OpenAPI plugin config."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Step 4"}),": Run the ",(0,s.jsx)(n.code,{children:"gen-api-docs:version"})," command to update the ",(0,s.jsx)(n.code,{children:"versions.json"})," file."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{title:"TIP",type:"info",children:(0,s.jsxs)(n.p,{children:["The OpenAPI Docs plugin will ",(0,s.jsx)(n.strong,{children:"not"})," delete a versioned ",(0,s.jsx)(n.code,{children:"outputDir"})," after executing the ",(0,s.jsx)(n.code,{children:"clean-api-docs:version"})," command. This is by design, as the plugin tries to avoid removing non-API docs/files."]})}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["In the future, we may decide to introduce a separate command for generating/updating the ",(0,s.jsx)(n.code,{children:"versioning.json"})," file. For now, you can run the ",(0,s.jsx)(n.code,{children:"gen-api-docs:version"})," command for any version, including ",(0,s.jsx)(n.code,{children:"all"}),", to trigger the update."]})}),"\n",(0,s.jsx)(n.h2,{id:"ui-helpers",children:"UI Helpers"}),"\n",(0,s.jsx)(n.p,{children:"As mentioned earlier, the OpenAPI plugin comes equipped with utilities for generating navigational UI components to help users switch API versions and quickly determine which version they are looking at."}),"\n",(0,s.jsxs)(n.p,{children:["Both the version selector and version crumb components leverage the Docusaurus ",(0,s.jsx)(n.code,{children:"html"})," sidebar item type to inject pure HTML sidebar items."]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Although convenient, ",(0,s.jsx)(n.code,{children:"html"})," sidebar items are somewhat limited in terms of rendering content dynamically or accessing state, since javascript is ignored."]})}),"\n",(0,s.jsx)(n.h3,{id:"version-selector",children:"Version selector"}),"\n",(0,s.jsxs)(n.p,{children:["As the name implies, this utility will generate a pure HTML version selector base on the ",(0,s.jsx)(n.code,{children:"versions.json"})," file."]}),"\n",(0,s.jsx)(n.p,{children:"Import:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'const {\n  versionSelector\n} = require("docusaurus-plugin-openapi-docs/lib/sidebars/utils"); // imports utility\nconst petstoreVersions = require("./docs/petstore/versions.json"); // imports Petstore versions.json\n'})}),"\n",(0,s.jsx)(n.p,{children:"Add to existing sidebar:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'{\n  type: "html",\n  defaultStyle: true,\n  value: versionSelector(petstoreVersions),\n  className: "version-button",\n}\n'})}),"\n",(0,s.jsx)(n.h3,{id:"version-crumb",children:"Version Crumb"}),"\n",(0,s.jsx)(n.p,{children:"As the name implies, this utility will generate a pure HTML crumb to help users identify which version they are currently on."}),"\n",(0,s.jsx)(n.p,{children:"Import:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'const {\n  versionCrumb\n} = require("docusaurus-plugin-openapi-docs/lib/sidebars/utils");\n'})}),"\n",(0,s.jsx)(n.p,{children:"Add to existing sidebar:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-javascript",children:'{\n  type: "html",\n  defaultStyle: true,\n  value: versionCrumb(`v1.0.0`), // The version label you wish to display\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}}}]);