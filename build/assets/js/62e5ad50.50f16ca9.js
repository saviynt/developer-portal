"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8937],{54648:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=i(74848),r=i(28453),c=i(3514),a=i(84142);const o={id:"application-owner",title:"Application Owner",description:"Application Owner",custom_edit_url:null},s=void 0,l={id:"eic/application-owner",title:"Application Owner",description:"Application Owner",source:"@site/docs/eic/application-owner.tag.mdx",sourceDirName:"eic",slug:"/eic/application-owner",permalink:"/developer-portal/eic/application-owner",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"application-owner",title:"Application Owner",description:"Application Owner",custom_edit_url:null},sidebar:"eicSidebar",previous:{title:"Reassign Certification at Account Level",permalink:"/developer-portal/eic/reassign-certification-at-account-level"},next:{title:"Fetch Account Entitlement Details",permalink:"/developer-portal/eic/fetch-account-entitlement-details-2"}},d={},p=[];function u(e){return(0,n.jsx)(c.A,{items:(0,a.$S)().items})}function m(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u()}},3514:(e,t,i)=>{i.d(t,{A:()=>x});i(96540);var n=i(18215),r=i(84142),c=i(28774),a=i(16654),o=i(21312),s=i(51107);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=i(74848);function p(e){let{href:t,children:i}=e;return(0,d.jsx)(c.default,{href:t,className:(0,n.A)("card padding--lg",l.cardContainer),children:i})}function u(e){let{href:t,icon:i,title:r,description:c}=e;return(0,d.jsxs)(p,{href:t,children:[(0,d.jsxs)(s.default,{as:"h2",className:(0,n.A)("text--truncate",l.cardTitle),title:r,children:[i," ",r]}),c&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",l.cardDescription),title:c,children:c})]})}function m(e){let{item:t}=e;const i=(0,r.Nr)(t);return i?(0,d.jsx)(u,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const i=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,r.cC)(t.docId??void 0);return(0,d.jsx)(u,{href:t.href,icon:i,title:t.label,description:t.description??n?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function w(e){let{className:t}=e;const i=(0,r.$S)();return(0,d.jsx)(x,{items:i.items,className:t})}function x(e){const{items:t,className:i}=e;if(!t)return(0,d.jsx)(w,{...e});const c=(0,r.d1)(t);return(0,d.jsx)("section",{className:(0,n.A)("row",i),children:c.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:e})},t)))})}}}]);