"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[772],{45472:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=i(74848),n=i(28453),c=i(3514),s=i(84142);const a={id:"13-0-paa",title:"13.0 PAA",description:"13.0 PAA",custom_edit_url:null},o=void 0,l={id:"eic/13-0-paa",title:"13.0 PAA",description:"13.0 PAA",source:"@site/docs/eic/13-0-paa.tag.mdx",sourceDirName:"eic",slug:"/eic/13-0-paa",permalink:"/developer-portal/eic/13-0-paa",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"13-0-paa",title:"13.0 PAA",description:"13.0 PAA",custom_edit_url:null},sidebar:"eicSidebar",previous:{title:"Retrieve Dashboard Data",permalink:"/developer-portal/eic/retrieve-dashboard-data"},next:{title:"Get Access Recommendations",permalink:"/developer-portal/eic/get-access-recommendations"}},d={},u=[];function m(e){return(0,r.jsx)(c.A,{items:(0,s.$S)().items})}function p(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m()}},3514:(e,t,i)=>{i.d(t,{A:()=>A});i(96540);var r=i(18215),n=i(84142),c=i(28774),s=i(16654),a=i(21312),o=i(51107);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=i(74848);function u(e){let{href:t,children:i}=e;return(0,d.jsx)(c.default,{href:t,className:(0,r.A)("card padding--lg",l.cardContainer),children:i})}function m(e){let{href:t,icon:i,title:n,description:c}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(o.default,{as:"h2",className:(0,r.A)("text--truncate",l.cardTitle),title:n,children:[i," ",n]}),c&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",l.cardDescription),title:c,children:c})]})}function p(e){let{item:t}=e;const i=(0,n.Nr)(t);return i?(0,d.jsx)(m,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,a.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const i=(0,s.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,n.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:i,title:t.label,description:t.description??r?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const i=(0,n.$S)();return(0,d.jsx)(A,{items:i.items,className:t})}function A(e){const{items:t,className:i}=e;if(!t)return(0,d.jsx)(x,{...e});const c=(0,n.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",i),children:c.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:e})},t)))})}}}]);