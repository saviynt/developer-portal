"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[3734],{9019:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var n=i(74848),r=i(28453),s=i(3514),a=i(84142);const c={id:"5-0-delegated-administration",title:"5.0 Delegated Administration",description:"5.0 Delegated Administration",custom_edit_url:null},d=void 0,o={id:"eic/5-0-delegated-administration",title:"5.0 Delegated Administration",description:"5.0 Delegated Administration",source:"@site/docs/eic/5-0-delegated-administration.tag.mdx",sourceDirName:"eic",slug:"/eic/5-0-delegated-administration",permalink:"/developer/eic/5-0-delegated-administration",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"5-0-delegated-administration",title:"5.0 Delegated Administration",description:"5.0 Delegated Administration",custom_edit_url:null},sidebar:"eicSidebar",previous:{title:"Check Task Status",permalink:"/developer/eic/check-task-status"},next:{title:"Get Delegate User List",permalink:"/developer/eic/get-delegate-user-list"}},l={},u=[];function m(e){return(0,n.jsx)(s.A,{items:(0,a.$S)().items})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m()}},3514:(e,t,i)=>{i.d(t,{A:()=>x});i(96540);var n=i(18215),r=i(84142),s=i(28774),a=i(16654),c=i(21312),d=i(51107);const o={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var l=i(74848);function u(e){let{href:t,children:i}=e;return(0,l.jsx)(s.default,{href:t,className:(0,n.A)("card padding--lg",o.cardContainer),children:i})}function m(e){let{href:t,icon:i,title:r,description:s}=e;return(0,l.jsxs)(u,{href:t,children:[(0,l.jsxs)(d.default,{as:"h2",className:(0,n.A)("text--truncate",o.cardTitle),title:r,children:[i," ",r]}),s&&(0,l.jsx)("p",{className:(0,n.A)("text--truncate",o.cardDescription),title:s,children:s})]})}function p(e){let{item:t}=e;const i=(0,r.Nr)(t);return i?(0,l.jsx)(m,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const i=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,r.cC)(t.docId??void 0);return(0,l.jsx)(m,{href:t.href,icon:i,title:t.label,description:t.description??n?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,l.jsx)(f,{item:t});case"category":return(0,l.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const i=(0,r.$S)();return(0,l.jsx)(x,{items:i.items,className:t})}function x(e){const{items:t,className:i}=e;if(!t)return(0,l.jsx)(h,{...e});const s=(0,r.d1)(t);return(0,l.jsx)("section",{className:(0,n.A)("row",i),children:s.map(((e,t)=>(0,l.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,l.jsx)(g,{item:e})},t)))})}}}]);