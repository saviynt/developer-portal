"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[53505],{64212:(e,o,r)=>{r.r(o),r.d(o,{default:()=>h});var s=r(96540),l=r(56347),t=r(60023),c=r(42838),a=r.n(c),n=r(37747),i=r(74848),u=r(96763);const d={blockquote(e){const o=e.replace(/^\[!\w+\]\s*/gm,"");return e.includes("[!NOTE]")?`<blockquote class="note">${o}</blockquote>`:e.includes("[!TIP]")?`<blockquote class="tip">${o}</blockquote>`:e.includes("[!WARNING]")?`<blockquote class="warning">${o}</blockquote>`:e.includes("[!IMPORTANT]")?`<blockquote class="important">${o}</blockquote>`:e.includes("[!CAUTION]")?`<blockquote class="caution">${o}</blockquote>`:`<blockquote>${o}</blockquote>`}};t.xI.use({pedantic:!1,gfm:!0},{renderer:d});const h=()=>{const e=(0,l.zy)(),o=(0,l.W6)(),[r,c]=(0,s.useState)(""),[d,h]=(0,s.useState)(null),{readmeUrl:m,githubUrl:b,distLink:k,name:f}=e.state||{},g=b?`https://github.com/saviynt/community-connectors/issues/new?labels=${f}`:null;return(0,s.useEffect)((()=>{m&&fetch(m,{cache:"no-cache"}).then((e=>{if(!e.ok)throw new Error("Failed to fetch README");return e.text()})).then((e=>{const o=(0,t.xI)(e),r=a().sanitize(o);c(r)})).catch((e=>{u.error("Error fetching README:",e),h(e.toString())}))}),[e]),(0,i.jsx)(n.A,{title:f,description:`View detailed README content for ${f}`,children:(0,i.jsx)("div",{className:"container margin-vert--lg",children:(0,i.jsx)("div",{className:"row",children:(0,i.jsx)("div",{className:"col col--8 col--offset-2",children:d?(0,i.jsxs)("div",{className:"alert alert--danger",children:["Error loading README: ",d]}):(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{className:"button-group",children:[(0,i.jsx)("i",{className:"material-icons",style:{cursor:"pointer"},onClick:()=>o.goBack(),"aria-label":"Go back",children:"arrow_back"}),(0,i.jsx)("a",{href:b,className:"material-icons","aria-label":"View source on GitHub",style:{marginRight:"10px",cursor:"pointer"},children:"code"}),(0,i.jsx)("a",{href:k,download:`${f}.zip`,className:"material-icons","aria-label":"Download",style:{cursor:"pointer"},children:"file_download"}),(0,i.jsx)("a",{href:g,className:"material-icons",target:"_blank",rel:"noopener noreferrer","aria-label":"Issue",style:{cursor:"pointer"},children:"bug_report"})]}),(0,i.jsxs)("h1",{children:[f," Community Connector"]}),(0,i.jsx)("div",{className:"markdown",dangerouslySetInnerHTML:{__html:r}})]})})})})})}}}]);