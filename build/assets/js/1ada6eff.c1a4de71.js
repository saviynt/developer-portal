"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[5791],{5847:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var i=n(74848),c=n(28453),r=n(3514),s=n(84142);const o={id:"connections",title:"Connections",description:"Connections",custom_edit_url:null},a=void 0,l={id:"eic/connections",title:"Connections",description:"Connections",source:"@site/docs/eic/connections.tag.mdx",sourceDirName:"eic",slug:"/eic/connections",permalink:"/developer-portal/eic/connections",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"connections",title:"Connections",description:"Connections",custom_edit_url:null},sidebar:"eicSidebar",previous:{title:"Delete Security System",permalink:"/developer-portal/eic/delete-security-system"},next:{title:"Get List of Connections",permalink:"/developer-portal/eic/get-list-of-connections"}},d={},u=[];function m(e){return(0,i.jsx)(r.A,{items:(0,s.$S)().items})}function p(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m()}},3514:(e,t,n)=>{n.d(t,{A:()=>g});n(96540);var i=n(18215),c=n(84142),r=n(28774),s=n(16654),o=n(21312),a=n(51107);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(74848);function u(e){let{href:t,children:n}=e;return(0,d.jsx)(r.default,{href:t,className:(0,i.A)("card padding--lg",l.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:c,description:r}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(a.default,{as:"h2",className:(0,i.A)("text--truncate",l.cardTitle),title:c,children:[n," ",c]}),r&&(0,d.jsx)("p",{className:(0,i.A)("text--truncate",l.cardDescription),title:r,children:r})]})}function p(e){let{item:t}=e;const n=(0,c.Nr)(t);return n?(0,d.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const n=(0,s.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,c.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,c.$S)();return(0,d.jsx)(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const r=(0,c.d1)(t);return(0,d.jsx)("section",{className:(0,i.A)("row",n),children:r.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:e})},t)))})}}}]);