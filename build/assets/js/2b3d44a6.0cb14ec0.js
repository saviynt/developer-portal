"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[33495],{60350:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>m,contentTitle:()=>v,default:()=>x,frontMatter:()=>p,metadata:()=>g,toc:()=>f});var o=n(74848),r=n(28453),a=n(96540),s=n(60023),i=n(42838),u=n.n(i),c=n(96763);const l=t=>{let{repoPath:e}=t;const[n,r]=(0,a.useState)(""),[i,l]=(0,a.useState)(!0);return(0,a.useEffect)((()=>{(async()=>{const t=`https://api.github.com/repos/${e}/readme`;try{const e=await fetch(t,{headers:{Accept:"application/vnd.github+json"}});if(!e.ok)throw new Error(`GitHub API returned ${e.status}`);const n=await e.json(),o=atob(n.content),a=(0,s.xI)(o),i=u().sanitize(a);r(i)}catch(n){c.error("Failed to fetch GitHub content:",n),r(`Error: ${n.message}`)}finally{l(!1)}})()}),[e]),i?(0,o.jsx)("p",{children:"Loading..."}):(0,o.jsx)("div",{children:(0,o.jsx)("div",{dangerouslySetInnerHTML:{__html:n}})})},d=()=>(0,o.jsx)("div",{children:(0,o.jsx)(l,{repoPath:"saviynt/sampleVaultConnector"})}),p={id:"VaultConnectorPage",title:"Vault Connector"},v=void 0,g={id:"guide/vaults/VaultConnectorPage",title:"Vault Connector",description:"",source:"@site/docs/guide/vaults/vault-Integration.mdx",sourceDirName:"guide/vaults",slug:"/guide/vaults/VaultConnectorPage",permalink:"/developer-portal/guide/vaults/VaultConnectorPage",draft:!1,unlisted:!1,editUrl:"https://github.com/saviynt/developer-portal/tree/main/docs/guide/vaults/vault-Integration.mdx",tags:[],version:"current",frontMatter:{id:"VaultConnectorPage",title:"Vault Connector"},sidebar:"Guide",previous:{title:"Vaults",permalink:"/developer-portal/guide/vaults/"}},m={},f=[];function h(t){return(0,o.jsx)(d,{})}function x(t={}){const{wrapper:e}={...(0,r.R)(),...t.components};return e?(0,o.jsx)(e,{...t,children:(0,o.jsx)(h,{...t})}):h()}},28453:(t,e,n)=>{n.d(e,{R:()=>s,x:()=>i});var o=n(96540);const r={},a=o.createContext(r);function s(t){const e=o.useContext(a);return o.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function i(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:s(t.components),o.createElement(a.Provider,{value:e},t.children)}}}]);