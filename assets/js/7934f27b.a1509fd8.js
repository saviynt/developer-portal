"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9301],{58933:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var i=r(74848),n=r(28453),s=r(3514),a=r(84142);const c={id:"user-manager",title:"User Manager",description:"User Manager",custom_edit_url:null},o=void 0,l={id:"eic/user-manager",title:"User Manager",description:"User Manager",source:"@site/docs/eic/user-manager.tag.mdx",sourceDirName:"eic",slug:"/eic/user-manager",permalink:"/developer-portal/eic/user-manager",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"user-manager",title:"User Manager",description:"User Manager",custom_edit_url:null},sidebar:"eicSidebar",previous:{title:"Reassign Certification",permalink:"/developer-portal/eic/reassign-certification"},next:{title:"Fetch Campaign List",permalink:"/developer-portal/eic/fetch-campaign-list"}},d={},u=[];function m(e){return(0,i.jsx)(s.A,{items:(0,a.$S)().items})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m()}},3514:(e,t,r)=>{r.d(t,{A:()=>x});r(96540);var i=r(18215),n=r(84142),s=r(28774),a=r(16654),c=r(21312),o=r(51107);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=r(74848);function u(e){let{href:t,children:r}=e;return(0,d.jsx)(s.default,{href:t,className:(0,i.A)("card padding--lg",l.cardContainer),children:r})}function m(e){let{href:t,icon:r,title:n,description:s}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(o.default,{as:"h2",className:(0,i.A)("text--truncate",l.cardTitle),title:n,children:[r," ",n]}),s&&(0,d.jsx)("p",{className:(0,i.A)("text--truncate",l.cardDescription),title:s,children:s})]})}function p(e){let{item:t}=e;const r=(0,n.Nr)(t);return r?(0,d.jsx)(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const r=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,n.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,n.$S)();return(0,d.jsx)(x,{items:r.items,className:t})}function x(e){const{items:t,className:r}=e;if(!t)return(0,d.jsx)(h,{...e});const s=(0,n.d1)(t);return(0,d.jsx)("section",{className:(0,i.A)("row",r),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}}}]);