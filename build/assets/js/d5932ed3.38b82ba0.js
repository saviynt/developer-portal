"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[44574],{69841:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>f,contentTitle:()=>h,default:()=>U,frontMatter:()=>g,metadata:()=>y,toc:()=>j});var l=t(74848),s=t(28453),a=t(91366),n=t.n(a),r=(t(6050),t(57742)),d=t.n(r),p=(t(67792),t(27362)),o=t.n(p),c=(t(36683),t(81124),t(60674)),u=t.n(c),m=(t(23397),t(26651),t(51107)),v=(t(77675),t(19365));const g={id:"delete-privilege",title:"Delete Privilege",description:"https://yourdomain.saviyntcloud.com/ECM/v5/deletePrivilege",sidebar_label:"Delete Privilege",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVU1v3DYQ/SvEnFpAljZGfahOTbZ7WKBNjdg52UYwK82umFAkQ460Vhf734uh5LXsDZJeeqguksj5eDPz+HgAxl2E8g6ug+61oR1FeMigplgF7Vk7CyU0zD6WRTG4LtSuRW3ziL0eLFfGdXVeubZYLf8s+quiJkNMp2BK3dvbRkf19nqtOl8jU1RoFdnaO21ZaatW62V+b8WO1NuOGxf03yiZVdtFVg32pFC9IwwU1NYZ4/ZUq82gUN26L2RzyMB5CslnXUMJr0BABoG+dhT5nasHKA9QOctkWT7Re6Or5Ft8jlLuAWLVUIvyxYMnKMFtPlPFkIEPkok1Rdl9qmJmGTlou4MM6BFbb2TpZohM7Rs4ZkCWNRtqyfJo/z2/ySg5+lMt33VB5pDsI1Vd0DzElPtf4jseT8upvN9TG9X1PHePpqOXtZ8CfKO+5yJe1DABPcc5B5PwBIre2TgCulws5PWSnCBmLXHjZPS+S2NCbqCE12xMCUNPQRh/gC6YGbkPTBYtH79NbfS66K8ggx6Dxs3UodHlHNO0Ludoi52RJj31+3g8PjzXfSNMG2NtMOpK+D+blmAT0MkKytFG5rtJp+FH1sko9UeY/eH5DKyehv/fzzEDbbcuoZSQsjX2V60sU/BBR1LrOmUc1FKansTiA20pkK0IXqtR0pOlM4aqpBI+uF7XFBU3pGpi1CYqt02/sfPeBaZajQyJautC2vkxip9W6+XPMnEKccx8lS/yBWTAFNr41/aGQq8rmnFook5iTTIqIEtig1ViicU0GKnvZkQG2Ssa7vf7fB4mnuyoRS2W08pvMytps9EV2UjzNB6rhtRlwnyeBdN27sKumHxj8cd6uXp/s7q4zBd5w62RwI8Xxu3SBF/GmKPc+4tJU4vOG4d1LC4Xb34tFr8UU6M/SZBP77Ef8tjvEim9i9yinSE+U5xXs58p9//gUpqODtMjF96gttLN1MPDpFB3Z1fVQwaNiyxbh8MGI30M5niU5a8dhQHKu4dnDZK/YwYNYU0hSdoXGqCE5diki1sBkD1p9vlVJ0p0Us7rj7eQwWa6IVtXi0vAvdyeuIcS7uEe0lUrAZJkpfUDGLS7DpMejGHl+Qc9YOqU",sidebar_class_name:"put api-method",info_path:"eic/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},h=void 0,y={id:"eic/delete-privilege",title:"Delete Privilege",description:"https://yourdomain.saviyntcloud.com/ECM/v5/deletePrivilege",source:"@site/docs/eic/delete-privilege.api.mdx",sourceDirName:"eic",slug:"/eic/delete-privilege",permalink:"/developer-portal/eic/delete-privilege",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"delete-privilege",title:"Delete Privilege",description:"https://yourdomain.saviyntcloud.com/ECM/v5/deletePrivilege",sidebar_label:"Delete Privilege",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVU1v3DYQ/SvEnFpAljZGfahOTbZ7WKBNjdg52UYwK82umFAkQ460Vhf734uh5LXsDZJeeqguksj5eDPz+HgAxl2E8g6ug+61oR1FeMigplgF7Vk7CyU0zD6WRTG4LtSuRW3ziL0eLFfGdXVeubZYLf8s+quiJkNMp2BK3dvbRkf19nqtOl8jU1RoFdnaO21ZaatW62V+b8WO1NuOGxf03yiZVdtFVg32pFC9IwwU1NYZ4/ZUq82gUN26L2RzyMB5CslnXUMJr0BABoG+dhT5nasHKA9QOctkWT7Re6Or5Ft8jlLuAWLVUIvyxYMnKMFtPlPFkIEPkok1Rdl9qmJmGTlou4MM6BFbb2TpZohM7Rs4ZkCWNRtqyfJo/z2/ySg5+lMt33VB5pDsI1Vd0DzElPtf4jseT8upvN9TG9X1PHePpqOXtZ8CfKO+5yJe1DABPcc5B5PwBIre2TgCulws5PWSnCBmLXHjZPS+S2NCbqCE12xMCUNPQRh/gC6YGbkPTBYtH79NbfS66K8ggx6Dxs3UodHlHNO0Ludoi52RJj31+3g8PjzXfSNMG2NtMOpK+D+blmAT0MkKytFG5rtJp+FH1sko9UeY/eH5DKyehv/fzzEDbbcuoZSQsjX2V60sU/BBR1LrOmUc1FKansTiA20pkK0IXqtR0pOlM4aqpBI+uF7XFBU3pGpi1CYqt02/sfPeBaZajQyJautC2vkxip9W6+XPMnEKccx8lS/yBWTAFNr41/aGQq8rmnFook5iTTIqIEtig1ViicU0GKnvZkQG2Ssa7vf7fB4mnuyoRS2W08pvMytps9EV2UjzNB6rhtRlwnyeBdN27sKumHxj8cd6uXp/s7q4zBd5w62RwI8Xxu3SBF/GmKPc+4tJU4vOG4d1LC4Xb34tFr8UU6M/SZBP77Ef8tjvEim9i9yinSE+U5xXs58p9//gUpqODtMjF96gttLN1MPDpFB3Z1fVQwaNiyxbh8MGI30M5niU5a8dhQHKu4dnDZK/YwYNYU0hSdoXGqCE5diki1sBkD1p9vlVJ0p0Us7rj7eQwWa6IVtXi0vAvdyeuIcS7uEe0lUrAZJkpfUDGLS7DpMejGHl+Qc9YOqU",sidebar_class_name:"put api-method",info_path:"eic/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},sidebar:"eic-5.0",previous:{title:"Update Privilege",permalink:"/developer-portal/eic/update-privilege"},next:{title:"Get List of Privileges for Entitlement Type",permalink:"/developer-portal/eic/get-list-of-privileges-for-entitlement-type"}},f={},j=[];function x(e){const i={a:"a",br:"br",p:"p",...(0,s.R)(),...e.components},{Details:t}=i;return t||function(e,i){throw new Error("Expected "+(i?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(m.default,{as:"h1",className:"openapi__heading",children:"Delete Privilege"}),"\n",(0,l.jsx)(d(),{method:"put",path:"/deletePrivilege"}),"\n",(0,l.jsxs)(i.p,{children:[(0,l.jsx)(i.a,{href:"https://yourdomain.saviyntcloud.com/ECM/v5/deletePrivilege",children:"https://yourdomain.saviyntcloud.com/ECM/v5/deletePrivilege"}),(0,l.jsx)(i.br,{}),"\n","This API updates an endpoint in EIC."]}),"\n",(0,l.jsx)(i.p,{children:"The Authorization must have a Bearer followed by a Token."}),"\n",(0,l.jsx)(m.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,l.jsx)(o(),{className:"openapi-tabs__mime",children:(0,l.jsx)(v.default,{label:"application/json",value:"application/json-schema",children:(0,l.jsxs)(t,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,l.jsx)(i.p,{children:"Body"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(u(),{collapsible:!1,name:"endpoint",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"System1"}}),(0,l.jsx)(u(),{collapsible:!1,name:"entitlementtype",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"enttype1"}}),(0,l.jsx)(u(),{collapsible:!1,name:"privilege",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"attr1"}}),(0,l.jsx)(u(),{collapsible:!1,name:"securitysystem",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"System1"}})]})]})})}),"\n",(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:(0,l.jsx)(n(),{label:void 0,id:void 0,children:(0,l.jsxs)(v.default,{label:"200",value:"200",children:[(0,l.jsx)("div",{}),(0,l.jsx)("div",{})]})})})})]})}function U(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,l.jsx)(i,{...e,children:(0,l.jsx)(x,{...e})}):x(e)}}}]);