"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[22776],{76085:(e,s,l)=>{l.r(s),l.d(s,{assets:()=>C,contentTitle:()=>W,default:()=>N,frontMatter:()=>b,metadata:()=>k,toc:()=>T});var t=l(74848),r=l(28453),a=l(91366),i=l.n(a),n=(l(6050),l(57742)),o=l.n(n),d=(l(67792),l(27362)),c=l.n(d),m=l(36683),p=l.n(m),h=l(81124),j=l.n(h),x=l(60674),u=l.n(x),g=l(23397),v=l.n(g),y=(l(26651),l(51107)),f=(l(77675),l(19365));const b={id:"force-complete",title:"Force Complete",description:"This API is used to terminate data import job.",sidebar_label:"Force Complete",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVdtu2zgQ/RVinlpAVzfpJloUWK/WKYxtLogdYIE0qGlqZDGRSJaknHgN/fuClNo4TtvkbZ8kUTNnLmfmcAuWrgxk15DLppGCXFlec8vRwE0ABRqmubJcCshgXnFDxhdTwg1pDRbESmJRN1xQi6SglhLeKKktuZXL6LP4LOYVksW4tZXU/F/qYBakaY0lFV0jWfyJVKNekFLWtbzHgiw3ZDGXdygWEXH+Z5IoqmljIACpUHuIaQEZlFIzzGWjarQIAWg0SgqDBrItjJLEPZ5mf+I8yI5LhbRA7R3+ohbd07AKG+re7EYhZGCs5mIFAeADdY6+C21AkhEZtysyStIjMkqyd0dZekg+ns6h6wKYoV6jfi3eWFFWYZjLjbQYp1E6YNgwl/KOvzqvPJ9dnoTz878nZx/SlCEepwchPWZJeJCmZXj8/uh9eHCYHqfvllge/rb8nVxQW32Ifbi5psKUqMOJYLJw0K+MyqpW3GHhQf4JTzRtMDz3LTevhZiNTyfnl9OP0zPoHAyTwqKwzokqVXPmWY9vjaPxB5ByeYvMQgBKuxnxs5ttAbWWOpcF/jp6Al3Q256iMXT1grmzNpba1rxQ1FWeT2azvqLh2LvsjWG2hTWtW9zLGBLYzwrgMfIufOdD+DVB6+f5eguCNs5FUVtBAFw8vmv82nKNBWRWtxj8lKGuuwmgQVtJt25KGt9hh5FBvL99xk98H7rVNWRQWatMFsdbi4IK20WGrvlGWFbLtoiYbOJJfhpTxeP1IQSwpprT5dCi3uX5Bg/nTpZK2tYWsu8N73y6Blmrud3MXE091pIazpwC7VTocoOhcvftbRyxS69HL1l7Iz/wXJTSW3Lbk97XSCbColaaGyTTAoXldkNyV7hXz0ssUaNgCD8U2FzWNTJ3QpSWa16gIbZCUqClvDZElv7TtMpJLRakJ8mQUmr/5+Us3kym+VvXddSmj3wYJZEbOSfn5rx0CsYZ7vA40OeZ80Yx9JtKmWdqGDhX36zPDIK9Ubi/v492Ycx3O2wod5bDyR87Vo6WmjMUBnfDeM0kI5/z8yjU/46kXsWDr4k/TfPJ2WwSjqIkqmxTO+CHsJYrz+BTjN0s71U4CFLcqlrSwsSjJD2Ok4N4aPQXB/LljK43kVmv/GC4dWmo2Mn42e3zhPnto+j9z7fsMPQWH2ysasqF65PvznbY/uu9u/cmgMqpQ3YN2+2SGrzSdde5468t6g1k1zeP++0VouDGvReQlbQ2+ItevLkc1Oot+VluwyEVGy8jXkqdVN7h5pvodTfdt9vex+9/jRlDZXecnl02TxTw4nzmbvf/AGiDIQY=",sidebar_class_name:"post api-method",info_path:"eic/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},W=void 0,k={id:"eic/force-complete",title:"Force Complete",description:"This API is used to terminate data import job.",source:"@site/docs/eic/force-complete.api.mdx",sourceDirName:"eic",slug:"/eic/force-complete",permalink:"/developer-portal/eic/force-complete",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"force-complete",title:"Force Complete",description:"This API is used to terminate data import job.",sidebar_label:"Force Complete",hide_title:!0,hide_table_of_contents:!0,api:"eJzFVdtu2zgQ/RVinlpAVzfpJloUWK/WKYxtLogdYIE0qGlqZDGRSJaknHgN/fuClNo4TtvkbZ8kUTNnLmfmcAuWrgxk15DLppGCXFlec8vRwE0ABRqmubJcCshgXnFDxhdTwg1pDRbESmJRN1xQi6SglhLeKKktuZXL6LP4LOYVksW4tZXU/F/qYBakaY0lFV0jWfyJVKNekFLWtbzHgiw3ZDGXdygWEXH+Z5IoqmljIACpUHuIaQEZlFIzzGWjarQIAWg0SgqDBrItjJLEPZ5mf+I8yI5LhbRA7R3+ohbd07AKG+re7EYhZGCs5mIFAeADdY6+C21AkhEZtysyStIjMkqyd0dZekg+ns6h6wKYoV6jfi3eWFFWYZjLjbQYp1E6YNgwl/KOvzqvPJ9dnoTz878nZx/SlCEepwchPWZJeJCmZXj8/uh9eHCYHqfvllge/rb8nVxQW32Ifbi5psKUqMOJYLJw0K+MyqpW3GHhQf4JTzRtMDz3LTevhZiNTyfnl9OP0zPoHAyTwqKwzokqVXPmWY9vjaPxB5ByeYvMQgBKuxnxs5ttAbWWOpcF/jp6Al3Q256iMXT1grmzNpba1rxQ1FWeT2azvqLh2LvsjWG2hTWtW9zLGBLYzwrgMfIufOdD+DVB6+f5eguCNs5FUVtBAFw8vmv82nKNBWRWtxj8lKGuuwmgQVtJt25KGt9hh5FBvL99xk98H7rVNWRQWatMFsdbi4IK20WGrvlGWFbLtoiYbOJJfhpTxeP1IQSwpprT5dCi3uX5Bg/nTpZK2tYWsu8N73y6Blmrud3MXE091pIazpwC7VTocoOhcvftbRyxS69HL1l7Iz/wXJTSW3Lbk97XSCbColaaGyTTAoXldkNyV7hXz0ssUaNgCD8U2FzWNTJ3QpSWa16gIbZCUqClvDZElv7TtMpJLRakJ8mQUmr/5+Us3kym+VvXddSmj3wYJZEbOSfn5rx0CsYZ7vA40OeZ80Yx9JtKmWdqGDhX36zPDIK9Ubi/v492Ycx3O2wod5bDyR87Vo6WmjMUBnfDeM0kI5/z8yjU/46kXsWDr4k/TfPJ2WwSjqIkqmxTO+CHsJYrz+BTjN0s71U4CFLcqlrSwsSjJD2Ok4N4aPQXB/LljK43kVmv/GC4dWmo2Mn42e3zhPnto+j9z7fsMPQWH2ysasqF65PvznbY/uu9u/cmgMqpQ3YN2+2SGrzSdde5468t6g1k1zeP++0VouDGvReQlbQ2+ItevLkc1Oot+VluwyEVGy8jXkqdVN7h5pvodTfdt9vex+9/jRlDZXecnl02TxTw4nzmbvf/AGiDIQY=",sidebar_class_name:"post api-method",info_path:"eic/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},sidebar:"eic-5.0",previous:{title:"Check Import Status",permalink:"/developer-portal/eic/check-import-status"},next:{title:"Send Email",permalink:"/developer-portal/eic/send-email"}},C={},T=[];function z(e){const s={code:"code",p:"p",...(0,r.R)(),...e.components},{Details:l}=s;return l||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(y.default,{as:"h1",className:"openapi__heading",children:"Force Complete"}),"\n",(0,t.jsx)(o(),{method:"post",path:"/forceComplete"}),"\n",(0,t.jsx)(s.p,{children:"This API is used to terminate data import job."}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"Authorization"})," must have ",(0,t.jsx)(s.code,{children:"Bearer"})," followed by ",(0,t.jsx)(s.code,{children:"Token"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"No params"}),"\n",(0,t.jsx)(y.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,t.jsxs)(l,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,t.jsx)(s.p,{children:"Path Parameters"})})}),(0,t.jsx)("div",{children:(0,t.jsx)("ul",{children:(0,t.jsx)(p(),{className:"paramsItem",param:{name:"path",in:"path",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,t.jsx)("div",{children:(0,t.jsx)("div",{children:(0,t.jsx)(i(),{label:void 0,id:void 0,children:(0,t.jsxs)(f.default,{label:"200",value:"200",children:[(0,t.jsx)("div",{children:(0,t.jsx)(s.p,{children:"Force Complete"})}),(0,t.jsxs)(l,{style:{textAlign:"left",marginBottom:"1rem"},className:"openapi-markdown__details","data-collaposed":!0,open:!1,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Response Headers"})})}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Date"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(s.p,{children:"string"})})]}),(0,t.jsx)("div",{})]}),(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Server"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(s.p,{children:"string"})})]}),(0,t.jsx)("div",{})]}),(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Set-Cookie"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(s.p,{children:"string"})})]}),(0,t.jsx)("div",{})]}),(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Transfer-Encoding"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(s.p,{children:"string"})})]}),(0,t.jsx)("div",{})]}),(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"X-Frame-Options"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(s.p,{children:"string"})})]}),(0,t.jsx)("div",{})]})]})]}),(0,t.jsx)("div",{children:(0,t.jsx)(c(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(f.default,{label:"application/json",value:"application/json",children:(0,t.jsxs)(v(),{className:"openapi-tabs__schema",children:[(0,t.jsx)(f.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(l,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsx)(u(),{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"0"}}),(0,t.jsx)(u(),{collapsible:!1,name:"errorMessage",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:""}}),(0,t.jsx)(u(),{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"SUCCESS"}})]})]})}),(0,t.jsx)(f.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(j(),{responseExample:'{\n  "errorCode": "0",\n  "errorMessage": "",\n  "status": "SUCCESS"\n}',language:"json"})}),(0,t.jsx)(f.default,{label:"Force Complete",value:"Force Complete",children:(0,t.jsx)(j(),{responseExample:'{\n  "errorCode": "0",\n  "errorMessage": "",\n  "status": "SUCCESS"\n}',language:"json"})})]})})})})]})})})})]})}function N(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(z,{...e})}):z(e)}}}]);