"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[8624],{3043:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var r=i(74848),s=i(28453),n=i(3514),a=i(84142);const c={id:"update-task",title:"Update Task",description:"Update Task",custom_edit_url:null},o=void 0,l={id:"eic/update-task",title:"Update Task",description:"Update Task",source:"@site/docs/eic/update-task.tag.mdx",sourceDirName:"eic",slug:"/eic/update-task",permalink:"/developer-portal/eic/update-task",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"update-task",title:"Update Task",description:"Update Task",custom_edit_url:null},sidebar:"eicSidebar",previous:{title:"Create Task - Remove Entitlement",permalink:"/developer-portal/eic/create-task-remove-entitlement"},next:{title:"Complete Single Task",permalink:"/developer-portal/eic/complete-single-task"}},d={},u=[];function p(e){return(0,r.jsx)(n.A,{items:(0,a.$S)().items})}function m(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p()}},3514:(e,t,i)=>{i.d(t,{A:()=>x});i(96540);var r=i(18215),s=i(84142),n=i(28774),a=i(16654),c=i(21312),o=i(51107);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=i(74848);function u(e){let{href:t,children:i}=e;return(0,d.jsx)(n.default,{href:t,className:(0,r.A)("card padding--lg",l.cardContainer),children:i})}function p(e){let{href:t,icon:i,title:s,description:n}=e;return(0,d.jsxs)(u,{href:t,children:[(0,d.jsxs)(o.default,{as:"h2",className:(0,r.A)("text--truncate",l.cardTitle),title:s,children:[i," ",s]}),n&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",l.cardDescription),title:n,children:n})]})}function m(e){let{item:t}=e;const i=(0,s.Nr)(t);return i?(0,d.jsx)(p,{href:i,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,c.translate)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const i=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.cC)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:i,title:t.label,description:t.description??r?.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function k(e){let{className:t}=e;const i=(0,s.$S)();return(0,d.jsx)(x,{items:i.items,className:t})}function x(e){const{items:t,className:i}=e;if(!t)return(0,d.jsx)(k,{...e});const n=(0,s.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",i),children:n.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(h,{item:e})},t)))})}}}]);