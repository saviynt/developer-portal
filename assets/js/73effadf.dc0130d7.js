"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[769],{55259:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>m});var i=r(74848),a=r(28453),n=r(3514),s=r(84142);const c={id:"user-manager-campaigns",title:"User Manager Campaigns",description:"User Manager Campaigns",custom_edit_url:null},o=void 0,l={id:"eic/user-manager-campaigns",title:"User Manager Campaigns",description:"User Manager Campaigns",source:"@site/docs/eic/user-manager-campaigns.tag.mdx",sourceDirName:"eic",slug:"/eic/user-manager-campaigns",permalink:"/developer-portal/eic/user-manager-campaigns",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"user-manager-campaigns",title:"User Manager Campaigns",description:"User Manager Campaigns",custom_edit_url:null},sidebar:"eicSidebar",previous:{title:"Reassign Certification",permalink:"/developer-portal/eic/reassign-certification"},next:{title:"Certify User Manager for Campaign",permalink:"/developer-portal/eic/certify-user-manager-for-campaign"}},d={},m=[];function u(e){return(0,i.jsx)(n.A,{items:(0,s.$S)().items})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(u,{...e})}):u()}},3514:(e,t,r)=>{r.d(t,{A:()=>x});r(96540);var i=r(18215),a=r(84142),n=r(28774),s=r(16654),c=r(21312),o=r(51107);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=r(74848);function m(e){let{href:t,children:r}=e;return(0,d.jsx)(n.default,{href:t,className:(0,i.A)("card padding--lg",l.cardContainer),children:r})}function u(e){let{href:t,icon:r,title:a,description:n}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(o.default,{as:"h2",className:(0,i.A)("text--truncate",l.cardTitle),title:a,children:[r," ",a]}),n&&(0,d.jsx)("p",{className:(0,i.A)("text--truncate",l.cardDescription),title:n,children:n})]})}function p(e){let{item:t}=e;const r=(0,a.Nr)(t);return r?(0,d.jsx)(u,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const r=(0,s.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,a.cC)(t.docId??void 0);return(0,d.jsx)(u,{href:t.href,icon:r,title:t.label,description:t.description??i?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(g,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,a.$S)();return(0,d.jsx)(x,{items:r.items,className:t})}function x(e){const{items:t,className:r}=e;if(!t)return(0,d.jsx)(h,{...e});const n=(0,a.d1)(t);return(0,d.jsx)("section",{className:(0,i.A)("row",r),children:n.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},t)))})}}}]);