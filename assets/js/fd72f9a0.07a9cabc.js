"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[9966],{89631:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var n=i(74848),c=i(28453),r=i(3514),s=i(84142);const a={id:"3-0-analytics",title:"3.0 Analytics",description:"3.0 Analytics",custom_edit_url:null},l=void 0,o={id:"eic/3-0-analytics",title:"3.0 Analytics",description:"3.0 Analytics",source:"@site/docs/eic/3-0-analytics.tag.mdx",sourceDirName:"eic",slug:"/eic/3-0-analytics",permalink:"/developer/eic/3-0-analytics",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"3-0-analytics",title:"3.0 Analytics",description:"3.0 Analytics",custom_edit_url:null},sidebar:"eicSidebar",previous:{title:"updateDataset",permalink:"/developer/eic/updatedataset"},next:{title:"Fetch List of Analytics",permalink:"/developer/eic/fetch-list-of-analytics"}},d={},u=[];function m(e){return(0,n.jsx)(r.A,{items:(0,s.$S)().items})}function p(e={}){const{wrapper:t}={...(0,c.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m()}},3514:(e,t,i)=>{i.d(t,{A:()=>x});i(96540);var n=i(18215),c=i(84142),r=i(28774),s=i(16654),a=i(21312),l=i(51107);const o={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=i(74848);function u(e){let{href:t,children:i}=e;return(0,d.jsx)(r.default,{href:t,className:(0,n.A)("card padding--lg",o.cardContainer),children:i})}function m(e){let{href:t,icon:i,title:c,description:r}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(l.default,{as:"h2",className:(0,n.A)("text--truncate",o.cardTitle),title:c,children:[i," ",c]}),r&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",o.cardDescription),title:r,children:r})]})}function p(e){let{item:t}=e;const i=(0,c.Nr)(t);return i?(0,d.jsx)(m,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,a.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const i=(0,s.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,c.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:i,title:t.label,description:t.description??n?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const i=(0,c.$S)();return(0,d.jsx)(x,{items:i.items,className:t})}function x(e){const{items:t,className:i}=e;if(!t)return(0,d.jsx)(y,{...e});const r=(0,c.d1)(t);return(0,d.jsx)("section",{className:(0,n.A)("row",i),children:r.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:e})},t)))})}}}]);