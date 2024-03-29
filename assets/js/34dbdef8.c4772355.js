"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[2599],{75605:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>S,contentTitle:()=>g,default:()=>N,frontMatter:()=>b,metadata:()=>T,toc:()=>v});var t=a(74848),n=a(28453),i=a(91366),l=a.n(i),r=(a(6050),a(57742)),c=a.n(r),d=(a(67792),a(27362)),o=a.n(d),h=(a(36683),a(81124)),m=a.n(h),p=a(60674),u=a.n(p),x=a(23397),j=a.n(x),y=(a(26651),a(51107)),f=(a(77675),a(19365));const b={id:"authenticate-user",title:"Authenticate User",description:"This API call can be used to authenticate the user in SSM",sidebar_label:"Authenticate User",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVd9v2zgM/lcEPt0AO07SH8t82EOWS4fg0LVoMtyAtkAYmanV2pInydmywP/7gXLS5dZ07evlJbJEkR/1fSQ34PHOQXoNnx1ZB7cRZOSkVZVXRkMKs1w5MbycCIlFISRqsSBRO8qENwJrn5P2SqIn4fNwYIXSYjo9v9E3epaTmA9rnxurfiB7nIuydl7kuCIx/0Boyc7F0hSF+UaZWKzFfGYeSM8FXz9HnaE3di0u0WLp0hs95wgaS5pHN3peoXPfjM3mEIGpyIYQkwxS2EfGmUEElr7W5PwHk60h3YA02pP2vCzrwqsKrU+WxpZxhh5528mcyrDy64ogBbO4J+khgspyNK/I8ekOxZ6l81bpO4iAvmNZFby1s+oNoYlgl8bv79ybXGeGoAk/TsFVRrs2bL/b5b//0jXcZ4QTF2eoitqSSMTTs2ktJTkHEeSEGfOfbuAv9HQw/QMA/6EsEt2BGNZ3ot/tDUS3l/bfpUc98fF8Bgx5SnZF9rX+hhXKnOKRWRtPSa/T2/rw8ciYB/VqXKPR9Oosnl38Pf70vi+7hG97pzEenb6Nj+XxSTzon/Ti04U8ljh41x0c0Z/iEn3+PgnhZha1W5KNx1qajF2/MqrMa/1AWXDyJT6zWFJ8EZhxr3UxHZ6PL64mHyefIDC+p1KsqoK5U0Yn947Zfr1EyVpjRyZ7QW89lmZJzuHdC5Z7WlJGB5GFxJtHoxD3WTny4QqLmn5BBz3YQ/BsmOiA552Yn/Pc/Z3n7eVlXWyLLTyEzw03k8q48KToc0ghOdBbXFA599EN1LaAFHLvK5cmycaTRu2bjsOVWmsvC1NnHWnKZDw6T7BSyeoEIlihVbjYvlp75Wlxb/e5RS+xLjykj4w0TXPLMGRtlV9PWRatrwU6JTnZPT4ZG4MOVpC2Nkz9IjTkl6yDUSBB6aUJlsq36m1zFGPtyVZWORKTjJ/Kr8WIEw+T5IqWZElLgoPDZmSKgmRgpbJmpTJyYbZk5FEVTphl+HR1VRnrKRMtT04sjQ0nL6P4YzwZveFXJ+vayCedbqfLT8BclxiKq+3PT5X2K+y9WfL/GZdbcj1990lVoNJhKrF0N1uhXz8dorcR5FwL6TVsNgt09NkWTcPbX2uya0ivb39Kmb+a3WQJlfFAa+7N7WPFM0YQ7Wr14BBuot2loZRU+T3zJ92Q9f9YsZcX0xlEsNjO+rLtAOw4+I1+Lhlk0/wLRCIf7A==",sidebar_class_name:"post api-method",info_path:"eic/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},g=void 0,T={id:"eic/authenticate-user",title:"Authenticate User",description:"This API call can be used to authenticate the user in SSM",source:"@site/docs/eic/authenticate-user.api.mdx",sourceDirName:"eic",slug:"/eic/authenticate-user",permalink:"/developer/eic/authenticate-user",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"authenticate-user",title:"Authenticate User",description:"This API call can be used to authenticate the user in SSM",sidebar_label:"Authenticate User",hide_title:!0,hide_table_of_contents:!0,api:"eJzVVd9v2zgM/lcEPt0AO07SH8t82EOWS4fg0LVoMtyAtkAYmanV2pInydmywP/7gXLS5dZ07evlJbJEkR/1fSQ34PHOQXoNnx1ZB7cRZOSkVZVXRkMKs1w5MbycCIlFISRqsSBRO8qENwJrn5P2SqIn4fNwYIXSYjo9v9E3epaTmA9rnxurfiB7nIuydl7kuCIx/0Boyc7F0hSF+UaZWKzFfGYeSM8FXz9HnaE3di0u0WLp0hs95wgaS5pHN3peoXPfjM3mEIGpyIYQkwxS2EfGmUEElr7W5PwHk60h3YA02pP2vCzrwqsKrU+WxpZxhh5528mcyrDy64ogBbO4J+khgspyNK/I8ekOxZ6l81bpO4iAvmNZFby1s+oNoYlgl8bv79ybXGeGoAk/TsFVRrs2bL/b5b//0jXcZ4QTF2eoitqSSMTTs2ktJTkHEeSEGfOfbuAv9HQw/QMA/6EsEt2BGNZ3ot/tDUS3l/bfpUc98fF8Bgx5SnZF9rX+hhXKnOKRWRtPSa/T2/rw8ciYB/VqXKPR9Oosnl38Pf70vi+7hG97pzEenb6Nj+XxSTzon/Ti04U8ljh41x0c0Z/iEn3+PgnhZha1W5KNx1qajF2/MqrMa/1AWXDyJT6zWFJ8EZhxr3UxHZ6PL64mHyefIDC+p1KsqoK5U0Yn947Zfr1EyVpjRyZ7QW89lmZJzuHdC5Z7WlJGB5GFxJtHoxD3WTny4QqLmn5BBz3YQ/BsmOiA552Yn/Pc/Z3n7eVlXWyLLTyEzw03k8q48KToc0ghOdBbXFA599EN1LaAFHLvK5cmycaTRu2bjsOVWmsvC1NnHWnKZDw6T7BSyeoEIlihVbjYvlp75Wlxb/e5RS+xLjykj4w0TXPLMGRtlV9PWRatrwU6JTnZPT4ZG4MOVpC2Nkz9IjTkl6yDUSBB6aUJlsq36m1zFGPtyVZWORKTjJ/Kr8WIEw+T5IqWZElLgoPDZmSKgmRgpbJmpTJyYbZk5FEVTphl+HR1VRnrKRMtT04sjQ0nL6P4YzwZveFXJ+vayCedbqfLT8BclxiKq+3PT5X2K+y9WfL/GZdbcj1990lVoNJhKrF0N1uhXz8dorcR5FwL6TVsNgt09NkWTcPbX2uya0ivb39Kmb+a3WQJlfFAa+7N7WPFM0YQ7Wr14BBuot2loZRU+T3zJ92Q9f9YsZcX0xlEsNjO+rLtAOw4+I1+Lhlk0/wLRCIf7A==",sidebar_class_name:"post api-method",info_path:"eic/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},sidebar:"eicSidebar",previous:{title:"Get Flat Response Role Details For User",permalink:"/developer/eic/get-flat-response-role-details-for-user"},next:{title:"Validate User Data",permalink:"/developer/eic/validate-user-data"}},S={},v=[];function Z(e){const s={code:"code",p:"p",...(0,n.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"Authenticate User"}),"\n",(0,t.jsx)(c(),{method:"post",path:"/authenticateUser"}),"\n",(0,t.jsx)(s.p,{children:"This API call can be used to authenticate the user in SSM"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"Authorization"})," must have ",(0,t.jsx)(s.code,{children:"Bearer"})," followed by ",(0,t.jsx)(s.code,{children:"Token"})]}),"\n",(0,t.jsxs)(s.p,{children:["Mandatory Params:\n",(0,t.jsx)(s.code,{children:"username"}),",\n",(0,t.jsx)(s.code,{children:"password"})]}),"\n",(0,t.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,t.jsx)(o(),{className:"openapi-tabs__mime",children:(0,t.jsx)(f.default,{label:"multipart/form-data",value:"multipart/form-data-schema",children:(0,t.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,t.jsx)(s.p,{children:"Body"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsx)(u(),{collapsible:!1,name:"password",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"password1A"}}),(0,t.jsx)(u(),{collapsible:!1,name:"username",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"johndoe"}})]})]})})}),"\n",(0,t.jsx)("div",{children:(0,t.jsx)("div",{children:(0,t.jsx)(l(),{label:void 0,id:void 0,children:(0,t.jsxs)(f.default,{label:"200",value:"200",children:[(0,t.jsx)("div",{children:(0,t.jsx)(s.p,{children:"Authenticate User Failure / Authenticate User Success"})}),(0,t.jsxs)(a,{style:{textAlign:"left",marginBottom:"1rem"},className:"openapi-markdown__details","data-collaposed":!0,open:!1,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Response Headers"})})}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Date"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(s.p,{children:"string"})})]}),(0,t.jsx)("div",{})]}),(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Server"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(s.p,{children:"string"})})]}),(0,t.jsx)("div",{})]}),(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Set-Cookie"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(s.p,{children:"string"})})]}),(0,t.jsx)("div",{})]}),(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Transfer-Encoding"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(s.p,{children:"string"})})]}),(0,t.jsx)("div",{})]}),(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"X-Frame-Options"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(s.p,{children:"string"})})]}),(0,t.jsx)("div",{})]})]})]}),(0,t.jsx)("div",{children:(0,t.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,t.jsxs)(j(),{className:"openapi-tabs__schema",children:[(0,t.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsx)(u(),{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"1"}}),(0,t.jsx)(u(),{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Authentication Failed"}})]})]})}),(0,t.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(m(),{responseExample:'{\n  "errorCode": "1",\n  "message": "Authentication Failed"\n}',language:"json"})}),(0,t.jsx)(f.default,{label:"Authenticate User Failure",value:"Authenticate User Failure",children:(0,t.jsx)(m(),{responseExample:'{\n  "errorCode": "1",\n  "message": "Authentication Failed"\n}',language:"json"})}),(0,t.jsx)(f.default,{label:"Authenticate User Success",value:"Authenticate User Success",children:(0,t.jsx)(m(),{responseExample:'{\n  "errorCode": "0",\n  "message": "Authentication Successful"\n}',language:"json"})})]})})})})]})})})})]})}function N(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(Z,{...e})}):Z(e)}}}]);