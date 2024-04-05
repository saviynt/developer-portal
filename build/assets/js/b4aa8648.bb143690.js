"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[86949],{25952:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>k,contentTitle:()=>N,default:()=>A,frontMatter:()=>v,metadata:()=>w,toc:()=>I});var t=a(74848),i=a(28453),r=a(91366),l=a.n(r),n=(a(6050),a(57742)),o=a.n(n),c=(a(67792),a(27362)),d=a.n(c),m=a(36683),h=a.n(m),p=a(81124),u=a.n(p),x=a(60674),j=a.n(x),y=a(23397),b=a.n(y),f=(a(26651),a(51107)),g=(a(77675),a(19365));const v={id:"check-job-status",title:"Check Job Status",description:"This API is used to fetch the status of any job other that Data Import Job.",sidebar_label:"Check Job Status",hide_title:!0,hide_table_of_contents:!0,api:"eJzdVm1v2zgM/isCP22AHadB27Ue9iHLsiI99AVJDhiQBYgsM7FaW/IkOjdf4P9+kOysr1vz+QwEliWKfEg+JLMD4hsL8QIudcKuuOIbLFARLANI0QojS5JaQQzzTFo2vJ0waVllMWWk2RpJZIwyZJY4VZbpNeOqZnc6YZoyNIwyTuwLJ84mRakNsUud9L6b78r95hmy1bCiTBv5L3d2VqyoLLGMb5GtPiM3aFZsrfNc/4MpS2q2mut7VKse2+u44irlpE3NSm54YWN/srrTycboqlwF+0/FC1xBALpE421NUohBZCjuL3Uy8/ghAIM/KrT0Wac1xDsQWpELR7yDospJltxQtNamCFNO3G1bkWHhV1SXCDHo5A4FQQClcbZIonWne0SPJC0ZqTYQAP7kRZm7raHieU1SWGgC6FAfeONSJ9D4x3lhS61sa3nQ77vX03SOnOMuG+yX6xnyFI2/8oUTvurcKwDmWRWw/oANqw0b9I/O2GAQ94/jk3N2cTUHh2aGZovmUH3DkosMw5GuNWF01DvqdFA40vpeHoxrNJpNv4bzm7/G159Oz5J+cixOwxPx4TQ8Tj4ch+enx+uwz8+SowE/H4hB/yO75ZR9iry5ueHKrtGEYyV06lQfaFVklbrH1Cv5Fn41vMDwxgfdHqpiNrwa30wnF5Nr8Ml8xEFelrkUnr7RnXWJPJyAaIw2I52+wae+Y15hN3+WmlyHt9Obi+l4NmtBdkfe0gtuxTvY8rzCZzCgD52p5/paFvuKRvKcXOygrQUoOWUQgFQPa1e00mAKMZkKg99GuWmWARRImXa1X2rro+R0xBC9aAXW07a1XZkcYsiIShtH0Y5QcUVNz/KtrBWJXFdpT+giGo+uIl7KaHsCAWy5kTzpgtJeeVmI3b5rt2te5QTxrzA3Hq9FURlJ9cw51epKuJXCNc5HLjps0Lnuvr2My2Xi2+hb0l7Is1aqtfaSklo6tj6ysSI0pZEW2SRFRZJqNnKO+6kwxTUaVALh1cEx0nmOwu2w0uitTNH6uZEicZn7weHHSFW6KYEpa7Nk2Vobf/I2infjyei9izoa21o+6fV7ns4u0wX31dKR6JX29wT1o87/v5l8XeoJf1JU5lwqFxpP7F1XBIvn83AZQOaqJF7Abpdwi3+bvGnc9o8KTQ3xYvlAc18oqbRunUK85rnFP4T13bSr2vfsd+C6Ta5qX02+gwAEcI/1vvibZbOfXN5+ezRqrYRzp+Dh6msjvAn2l4ZCYEmPxF902yft4/ZmNocAku6fQtG2NKfY6w0elvFi2TTNf094OZI=",sidebar_class_name:"post api-method",info_path:"eic/2.0/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},N=void 0,w={id:"eic/2.0/check-job-status",title:"Check Job Status",description:"This API is used to fetch the status of any job other that Data Import Job.",source:"@site/docs/eic/2.0/check-job-status.api.mdx",sourceDirName:"eic/2.0",slug:"/eic/2.0/check-job-status",permalink:"/developer-portal/eic/2.0/check-job-status",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"check-job-status",title:"Check Job Status",description:"This API is used to fetch the status of any job other that Data Import Job.",sidebar_label:"Check Job Status",hide_title:!0,hide_table_of_contents:!0,api:"eJzdVm1v2zgM/isCP22AHadB27Ue9iHLsiI99AVJDhiQBYgsM7FaW/IkOjdf4P9+kOysr1vz+QwEliWKfEg+JLMD4hsL8QIudcKuuOIbLFARLANI0QojS5JaQQzzTFo2vJ0waVllMWWk2RpJZIwyZJY4VZbpNeOqZnc6YZoyNIwyTuwLJ84mRakNsUud9L6b78r95hmy1bCiTBv5L3d2VqyoLLGMb5GtPiM3aFZsrfNc/4MpS2q2mut7VKse2+u44irlpE3NSm54YWN/srrTycboqlwF+0/FC1xBALpE421NUohBZCjuL3Uy8/ghAIM/KrT0Wac1xDsQWpELR7yDospJltxQtNamCFNO3G1bkWHhV1SXCDHo5A4FQQClcbZIonWne0SPJC0ZqTYQAP7kRZm7raHieU1SWGgC6FAfeONSJ9D4x3lhS61sa3nQ77vX03SOnOMuG+yX6xnyFI2/8oUTvurcKwDmWRWw/oANqw0b9I/O2GAQ94/jk3N2cTUHh2aGZovmUH3DkosMw5GuNWF01DvqdFA40vpeHoxrNJpNv4bzm7/G159Oz5J+cixOwxPx4TQ8Tj4ch+enx+uwz8+SowE/H4hB/yO75ZR9iry5ueHKrtGEYyV06lQfaFVklbrH1Cv5Fn41vMDwxgfdHqpiNrwa30wnF5Nr8Ml8xEFelrkUnr7RnXWJPJyAaIw2I52+wae+Y15hN3+WmlyHt9Obi+l4NmtBdkfe0gtuxTvY8rzCZzCgD52p5/paFvuKRvKcXOygrQUoOWUQgFQPa1e00mAKMZkKg99GuWmWARRImXa1X2rro+R0xBC9aAXW07a1XZkcYsiIShtH0Y5QcUVNz/KtrBWJXFdpT+giGo+uIl7KaHsCAWy5kTzpgtJeeVmI3b5rt2te5QTxrzA3Hq9FURlJ9cw51epKuJXCNc5HLjps0Lnuvr2My2Xi2+hb0l7Is1aqtfaSklo6tj6ysSI0pZEW2SRFRZJqNnKO+6kwxTUaVALh1cEx0nmOwu2w0uitTNH6uZEicZn7weHHSFW6KYEpa7Nk2Vobf/I2infjyei9izoa21o+6fV7ns4u0wX31dKR6JX29wT1o87/v5l8XeoJf1JU5lwqFxpP7F1XBIvn83AZQOaqJF7Abpdwi3+bvGnc9o8KTQ3xYvlAc18oqbRunUK85rnFP4T13bSr2vfsd+C6Ta5qX02+gwAEcI/1vvibZbOfXN5+ezRqrYRzp+Dh6msjvAn2l4ZCYEmPxF902yft4/ZmNocAku6fQtG2NKfY6w0elvFi2TTNf094OZI=",sidebar_class_name:"post api-method",info_path:"eic/2.0/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},sidebar:"eic-2.0",previous:{title:"Create and Update Trigger",permalink:"/developer-portal/eic/2.0/create-and-update-trigger"},next:{title:"Delete Trigger",permalink:"/developer-portal/eic/2.0/delete-trigger"}},k={},I=[];function J(e){const s={code:"code",p:"p",...(0,i.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(f.default,{as:"h1",className:"openapi__heading",children:"Check Job Status"}),"\n",(0,t.jsx)(o(),{method:"post",path:"/checkJobStatus"}),"\n",(0,t.jsx)(s.p,{children:"This API is used to fetch the status of any job other that Data Import Job."}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.code,{children:"Authorization"})," must have ",(0,t.jsx)(s.code,{children:"Bearer"})," followed by ",(0,t.jsx)(s.code,{children:"Token"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Mandatory params:\r\n",(0,t.jsx)(s.code,{children:"jobgroup"}),",\r\n",(0,t.jsx)(s.code,{children:"jobname"})]}),"\n",(0,t.jsx)(f.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,t.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,t.jsx)(s.p,{children:"Path Parameters"})})}),(0,t.jsx)("div",{children:(0,t.jsx)("ul",{children:(0,t.jsx)(h(),{className:"paramsItem",param:{name:"path",in:"path",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,t.jsx)(d(),{className:"openapi-tabs__mime",children:(0,t.jsx)(g.default,{label:"multipart/form-data",value:"multipart/form-data-schema",children:(0,t.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:(0,t.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,t.jsx)(s.p,{children:"Body"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsx)(j(),{collapsible:!1,name:"jobgroup",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Analytics"}}),(0,t.jsx)(j(),{collapsible:!1,name:"jobname",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"AnalyticsJob"}})]})]})})}),"\n",(0,t.jsx)("div",{children:(0,t.jsx)("div",{children:(0,t.jsx)(l(),{label:void 0,id:void 0,children:(0,t.jsxs)(g.default,{label:"200",value:"200",children:[(0,t.jsx)("div",{children:(0,t.jsx)(s.p,{children:"Check Job Status"})}),(0,t.jsxs)(a,{style:{textAlign:"left",marginBottom:"1rem"},className:"openapi-markdown__details","data-collaposed":!0,open:!1,children:[(0,t.jsx)("summary",{style:{},children:(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Response Headers"})})}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Date"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(s.p,{children:"string"})})]}),(0,t.jsx)("div",{})]}),(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Server"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(s.p,{children:"string"})})]}),(0,t.jsx)("div",{})]}),(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Set-Cookie"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(s.p,{children:"string"})})]}),(0,t.jsx)("div",{})]}),(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Transfer-Encoding"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(s.p,{children:"string"})})]}),(0,t.jsx)("div",{})]}),(0,t.jsxs)("li",{className:"schemaItem",children:[(0,t.jsxs)("summary",{style:{},children:[(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"X-Frame-Options"})}),(0,t.jsx)("span",{style:{opacity:"0.6"},children:(0,t.jsx)(s.p,{children:"string"})})]}),(0,t.jsx)("div",{})]})]})]}),(0,t.jsx)("div",{children:(0,t.jsx)(d(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,t.jsx)(g.default,{label:"application/json",value:"application/json",children:(0,t.jsxs)(b(),{className:"openapi-tabs__schema",children:[(0,t.jsx)(g.default,{label:"Schema",value:"Schema",children:(0,t.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,t.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,t.jsx)("strong",{children:(0,t.jsx)(s.p,{children:"Schema"})})}),(0,t.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,t.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,t.jsx)(j(),{collapsible:!1,name:"errorCode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"0"}}),(0,t.jsx)(j(),{collapsible:!1,name:"msg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"IN-PROGRESS"}})]})]})}),(0,t.jsx)(g.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,t.jsx)(u(),{responseExample:'{\n  "errorCode": "0",\n  "msg": "IN-PROGRESS"\n}',language:"json"})}),(0,t.jsx)(g.default,{label:"Check Job Status",value:"Check Job Status",children:(0,t.jsx)(u(),{responseExample:'{\n  "errorCode": "0",\n  "msg": "IN-PROGRESS"\n}',language:"json"})})]})})})})]})})})})]})}function A(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(J,{...e})}):J(e)}}}]);