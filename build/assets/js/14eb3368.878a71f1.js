"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[46969],{71243:(e,t,s)=>{s.r(t),s.d(t,{default:()=>v});s(96540);var n=s(18215),a=s(17559),i=s(84142),r=s(99169),l=s(28774),c=s(21312),o=s(86025),d=s(74848);function u(e){return(0,d.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,d.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const m={breadcrumbHomeIcon:"breadcrumbHomeIcon_YNFT"};function h(){const e=(0,o.default)("/");return(0,d.jsx)("li",{className:"breadcrumbs__item",children:(0,d.jsx)(l.default,{"aria-label":(0,c.translate)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,d.jsx)(u,{className:m.breadcrumbHomeIcon})})})}const b={breadcrumbsContainer:"breadcrumbsContainer_Z_bl"};function x(e){let{children:t,href:s,isLast:n}=e;const a="breadcrumbs__link";return n?(0,d.jsx)("span",{className:a,itemProp:"name",children:t}):s?(0,d.jsx)(l.default,{className:a,href:s,itemProp:"item",children:(0,d.jsx)("span",{itemProp:"name",children:t})}):(0,d.jsx)("span",{className:a,children:t})}function f(e){let{children:t,active:s,index:a,addMicrodata:i}=e;return(0,d.jsxs)("li",{...i&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,n.A)("breadcrumbs__item",{"breadcrumbs__item--active":s}),children:[t,(0,d.jsx)("meta",{itemProp:"position",content:String(a+1)})]})}function v(){const e=(0,i.OF)(),t=(0,r.Dt)();return e?(0,d.jsx)("nav",{className:(0,n.A)(a.G.docs.docBreadcrumbs,b.breadcrumbsContainer),"aria-label":(0,c.translate)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,d.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[t&&(0,d.jsx)(h,{}),e.map(((t,s)=>{const n=s===e.length-1,a="category"===t.type&&t.linkUnlisted?void 0:t.href;return(0,d.jsx)(f,{active:n,index:s,addMicrodata:!!a,children:(0,d.jsx)(x,{href:a,isLast:n,children:t.label})},s)}))]})}):null}},34136:(e,t,s)=>{s.r(t),s.d(t,{default:()=>y});s(96540);var n=s(69024),a=s(84142),i=s(86025),r=s(18215),l=s(28774),c=s(16654),o=s(21312),d=s(51107);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var m=s(74848);function h(e){let{href:t,children:s}=e;return(0,m.jsx)(l.default,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:s})}function b(e){let{href:t,icon:s,title:n,description:a}=e;return(0,m.jsxs)(h,{href:t,children:[(0,m.jsxs)(d.default,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:n,children:[s," ",n]}),a&&(0,m.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:a,children:a})]})}function x(e){let{item:t}=e;const s=(0,a.Nr)(t);return s?(0,m.jsx)(b,{href:s,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const s=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,a.cC)(t.docId??void 0);return(0,m.jsx)(b,{href:t.href,icon:s,title:t.label,description:t.description??n?.description})}function v(e){let{item:t}=e;switch(t.type){case"link":return(0,m.jsx)(f,{item:t});case"category":return(0,m.jsx)(x,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function p(e){let{className:t}=e;const s=(0,a.$S)();return(0,m.jsx)(g,{items:s.items,className:t})}function g(e){const{items:t,className:s}=e;if(!t)return(0,m.jsx)(p,{...e});const n=(0,a.d1)(t);return(0,m.jsx)("section",{className:(0,r.A)("row",s),children:n.map(((e,t)=>(0,m.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,m.jsx)(v,{item:e})},t)))})}var j=s(27719),N=s(51878),_=s(4267),L=s(71243);const T={generatedIndexPage:"generatedIndexPage_vN6x",list:"list_eTzJ",title:"title_kItE"};function k(e){let{categoryGeneratedIndex:t}=e;return(0,m.jsx)(n.be,{title:t.title,description:t.description,keywords:t.keywords,image:(0,i.default)(t.image)})}function A(e){let{categoryGeneratedIndex:t}=e;const s=(0,a.$S)();return(0,m.jsxs)("div",{className:T.generatedIndexPage,children:[(0,m.jsx)(N.default,{}),(0,m.jsx)(L.default,{}),(0,m.jsx)(_.default,{}),(0,m.jsxs)("header",{children:[(0,m.jsx)(d.default,{as:"h1",className:T.title,children:t.title}),t.description&&(0,m.jsx)("p",{children:t.description})]}),(0,m.jsx)("article",{className:"margin-top--lg",children:(0,m.jsx)(g,{items:s.items,className:T.list})}),(0,m.jsx)("footer",{className:"margin-top--lg",children:(0,m.jsx)(j.A,{previous:t.navigation.previous,next:t.navigation.next})})]})}function y(e){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(k,{...e}),(0,m.jsx)(A,{...e})]})}},27719:(e,t,s)=>{s.d(t,{A:()=>r});s(96540);var n=s(21312),a=s(39022),i=s(74848);function r(e){const{previous:t,next:s}=e;return(0,i.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,n.translate)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[t&&(0,i.jsx)(a.A,{...t,subLabel:(0,i.jsx)(n.default,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),s&&(0,i.jsx)(a.A,{...s,subLabel:(0,i.jsx)(n.default,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}},4267:(e,t,s)=>{s.r(t),s.d(t,{default:()=>c});s(96540);var n=s(18215),a=s(21312),i=s(17559),r=s(32252),l=s(74848);function c(e){let{className:t}=e;const s=(0,r.r)();return s.badge?(0,l.jsx)("span",{className:(0,n.A)(t,i.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(a.default,{id:"theme.docs.versionBadge.label",values:{versionLabel:s.label},children:"Version: {versionLabel}"})}):null}},51878:(e,t,s)=>{s.r(t),s.d(t,{default:()=>f});s(96540);var n=s(18215),a=s(44586),i=s(28774),r=s(21312),l=s(44070),c=s(17559),o=s(55597),d=s(32252),u=s(74848);const m={unreleased:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,u.jsx)(r.default,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:s.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:t,versionMetadata:s}=e;return(0,u.jsx)(r.default,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:(0,u.jsx)("b",{children:s.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function h(e){const t=m[e.versionMetadata.banner];return(0,u.jsx)(t,{...e})}function b(e){let{versionLabel:t,to:s,onClick:n}=e;return(0,u.jsx)(r.default,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:(0,u.jsx)("b",{children:(0,u.jsx)(i.default,{to:s,onClick:n,children:(0,u.jsx)(r.default,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function x(e){let{className:t,versionMetadata:s}=e;const{siteConfig:{title:i}}=(0,a.default)(),{pluginId:r}=(0,l.vT)({failfast:!0}),{savePreferredVersionName:d}=(0,o.g1)(r),{latestDocSuggestion:m,latestVersionSuggestion:x}=(0,l.HW)(r),f=m??(v=x).docs.find((e=>e.id===v.mainDocId));var v;return(0,u.jsxs)("div",{className:(0,n.A)(t,c.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,u.jsx)("div",{children:(0,u.jsx)(h,{siteTitle:i,versionMetadata:s})}),(0,u.jsx)("div",{className:"margin-top--md",children:(0,u.jsx)(b,{versionLabel:x.label,to:f.path,onClick:()=>d(x.name)})})]})}function f(e){let{className:t}=e;const s=(0,d.r)();return s.banner?(0,u.jsx)(x,{className:t,versionMetadata:s}):null}},39022:(e,t,s)=>{s.d(t,{A:()=>r});s(96540);var n=s(18215),a=s(28774),i=s(74848);function r(e){const{permalink:t,title:s,subLabel:r,isNext:l}=e;return(0,i.jsxs)(a.default,{className:(0,n.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[r&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,i.jsx)("div",{className:"pagination-nav__label",children:s})]})}}}]);