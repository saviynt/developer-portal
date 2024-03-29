"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[1106],{63460:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>D,contentTitle:()=>N,default:()=>O,frontMatter:()=>T,metadata:()=>f,toc:()=>k});var l=a(74848),t=a(28453),i=a(91366),n=a.n(i),r=(a(6050),a(57742)),d=a.n(r),c=(a(67792),a(27362)),o=a.n(c),h=a(36683),m=a.n(h),p=a(81124),x=a.n(p),j=a(60674),u=a.n(j),y=a(23397),g=a.n(y),v=(a(26651),a(51107)),b=(a(77675),a(19365));const T={id:"getdatasetvalues",title:"getDatasetValues",description:"This API is used to get the DatasetValues.",sidebar_label:"getDatasetValues",hide_title:!0,hide_table_of_contents:!0,api:"eJzNVt9T2zgQ/lc0+9TO2MQEOMAMDzSkXK5HYUiu1xnMXBRrE6uxJVdaB3IZ/+83kp1rMsCRvl1eIkurb39o99tdAfGZhfgeLjlxiwQPAQi0qZElSa0ghlEmLbu4HTBpWWVRMNJshsQoQ9Ze+sLzCu1eokYZsvFFRZk28m/uAMasqCyxjC+QcTb+gNygGbOpznP9iIJNlm57pOeoxnuJStQ1V4KTNktWcsMLJDQ2TtRYNKoUL3AMAegSjVcwEBDDDKk9X3hTIACD3yu09EGLJcQrSLUiVOSWhE/UKXMulfvCJ16UOVq3niFteeT2PCDEsEpMohLYMCOBmCXwOye09FePmwQCJ1ND7X7OAltqZRuYbhS5v+3QPtMXQIZcoPFXejzNMOxpRUbnbsOmGRbcu7AsnU2WjFQzCNZOQAylkQtOCM6AnlYK00bXbrfniGXIc7loAC4d0o5X/0QRsOiE/VYp1o26XRYdx/uncXTKrq5HHm2IFPa0nsudMXu94d3HcHTzqf/5/PTg9Kh7eizC9GBfhIf7x93wJD1Ow8MUT0+i/Yk4OPrljN1yys47jToyMqVwZLiypTYUDjGtjKTlrtoL/hTyGZ7vHx13D0+i6IxJleaVwGE1udQFl8p6RV7DFE3YV6kWDmVHBWlWqTkKD/KFm50Nu0hTtHadGeFdk+nhr23qOLiv/hQVhaNlieGNzzi7qwKlrZLTaYv00ZXhz0IML677N3eDq8HnFuXrcBjeGk0/l5D7Z6zQAs8nuU7n4Mtqo5J5WeYy9TTQ+WZfQdWTb5gSBFAaRxokm4JEY7TpaYEboqoqJmg2DYjqAAo7e8PXyj9IY96OfLJlQNQq2URqOOQHB0J8vwJHO67IOWUQgCOw9drRnTQoICZTYfBqcOv6IYACKdMtb7rAOIgYOi/QkUWzWCuvTA4xZESljTudFaHiiuo9yxdyqSjNdSX2Ul10+r3rDi9lZ3EEASy4kXzSxqO58pwH233Xeaa8ygnif6Nbe4NtW7pD51WDNeFWpq7VbPjobIPWd/ftZaAOYOLbzlvSXsinq1RT7SUlNS/c+Mj6itCURlpkA4GKJC1ZzznuG+QdTtGgShFe7KE9nedN9rPS6IUUaH0TFUhc5pbpqf+0VenoCgVrnsmyqTb+5G0r3vUHvfcu6mhso/loL9qLXAhKbangvkTaLHrhubes3mia/9MhoH3IjYZeB02artqkvn/u5UMAmbbkzlarCbf4h8nr2m1/r9CR8P3Dj7T1iS+kdWsB8ZTnFv8jTO/u2jJ8z14zr93kaumroxkuIIA5LtfVXD/U60HA62+ONgl94+oW+lrWdYiSNqSeMeUWDVz1RxDApB2VCs9JYPij4xX+CDEksEoSkyQqSbZHoMQPQcnWGJS4QchL1wm4Av4HCOKS+Q==",sidebar_class_name:"get api-method",info_path:"eic/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},N=void 0,f={id:"eic/getdatasetvalues",title:"getDatasetValues",description:"This API is used to get the DatasetValues.",source:"@site/docs/eic/getdatasetvalues.api.mdx",sourceDirName:"eic",slug:"/eic/getdatasetvalues",permalink:"/developer.saviynt.com/eic/getdatasetvalues",draft:!1,unlisted:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"getdatasetvalues",title:"getDatasetValues",description:"This API is used to get the DatasetValues.",sidebar_label:"getDatasetValues",hide_title:!0,hide_table_of_contents:!0,api:"eJzNVt9T2zgQ/lc0+9TO2MQEOMAMDzSkXK5HYUiu1xnMXBRrE6uxJVdaB3IZ/+83kp1rMsCRvl1eIkurb39o99tdAfGZhfgeLjlxiwQPAQi0qZElSa0ghlEmLbu4HTBpWWVRMNJshsQoQ9Ze+sLzCu1eokYZsvFFRZk28m/uAMasqCyxjC+QcTb+gNygGbOpznP9iIJNlm57pOeoxnuJStQ1V4KTNktWcsMLJDQ2TtRYNKoUL3AMAegSjVcwEBDDDKk9X3hTIACD3yu09EGLJcQrSLUiVOSWhE/UKXMulfvCJ16UOVq3niFteeT2PCDEsEpMohLYMCOBmCXwOye09FePmwQCJ1ND7X7OAltqZRuYbhS5v+3QPtMXQIZcoPFXejzNMOxpRUbnbsOmGRbcu7AsnU2WjFQzCNZOQAylkQtOCM6AnlYK00bXbrfniGXIc7loAC4d0o5X/0QRsOiE/VYp1o26XRYdx/uncXTKrq5HHm2IFPa0nsudMXu94d3HcHTzqf/5/PTg9Kh7eizC9GBfhIf7x93wJD1Ow8MUT0+i/Yk4OPrljN1yys47jToyMqVwZLiypTYUDjGtjKTlrtoL/hTyGZ7vHx13D0+i6IxJleaVwGE1udQFl8p6RV7DFE3YV6kWDmVHBWlWqTkKD/KFm50Nu0hTtHadGeFdk+nhr23qOLiv/hQVhaNlieGNzzi7qwKlrZLTaYv00ZXhz0IML677N3eDq8HnFuXrcBjeGk0/l5D7Z6zQAs8nuU7n4Mtqo5J5WeYy9TTQ+WZfQdWTb5gSBFAaRxokm4JEY7TpaYEboqoqJmg2DYjqAAo7e8PXyj9IY96OfLJlQNQq2URqOOQHB0J8vwJHO67IOWUQgCOw9drRnTQoICZTYfBqcOv6IYACKdMtb7rAOIgYOi/QkUWzWCuvTA4xZESljTudFaHiiuo9yxdyqSjNdSX2Ul10+r3rDi9lZ3EEASy4kXzSxqO58pwH233Xeaa8ygnif6Nbe4NtW7pD51WDNeFWpq7VbPjobIPWd/ftZaAOYOLbzlvSXsinq1RT7SUlNS/c+Mj6itCURlpkA4GKJC1ZzznuG+QdTtGgShFe7KE9nedN9rPS6IUUaH0TFUhc5pbpqf+0VenoCgVrnsmyqTb+5G0r3vUHvfcu6mhso/loL9qLXAhKbangvkTaLHrhubes3mia/9MhoH3IjYZeB02artqkvn/u5UMAmbbkzlarCbf4h8nr2m1/r9CR8P3Dj7T1iS+kdWsB8ZTnFv8jTO/u2jJ8z14zr93kaumroxkuIIA5LtfVXD/U60HA62+ONgl94+oW+lrWdYiSNqSeMeUWDVz1RxDApB2VCs9JYPij4xX+CDEksEoSkyQqSbZHoMQPQcnWGJS4QchL1wm4Av4HCOKS+Q==",sidebar_class_name:"get api-method",info_path:"eic/saviynt-enterprise-identity-cloud-api-reference",custom_edit_url:null},sidebar:"eicSidebar",previous:{title:"createDataset",permalink:"/developer.saviynt.com/eic/createdataset"},next:{title:"updateDatasetValues",permalink:"/developer.saviynt.com/eic/updatedatasetvalues"}},D={},k=[];function Q(e){const s={code:"code",p:"p",...(0,t.R)(),...e.components},{Details:a}=s;return a||function(e,s){throw new Error("Expected "+(s?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(v.default,{as:"h1",className:"openapi__heading",children:"getDatasetValues"}),"\n",(0,l.jsx)(d(),{method:"get",path:"/getDatasetValues"}),"\n",(0,l.jsxs)(s.p,{children:["This API is used to get the DatasetValues.\nThe ",(0,l.jsx)(s.code,{children:"Authorization"})," must have a ",(0,l.jsx)(s.code,{children:"Bearer"})," followed by a ",(0,l.jsx)(s.code,{children:"Token"}),"."]}),"\n",(0,l.jsxs)(s.p,{children:["Mandatory parameters:\n",(0,l.jsx)(s.code,{children:"datasetname"})]}),"\n",(0,l.jsx)(v.default,{id:"request",as:"h2",className:"openapi-tabs__heading",children:"Request"}),"\n",(0,l.jsxs)(a,{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-params",children:(0,l.jsx)(s.p,{children:"Path Parameters"})})}),(0,l.jsx)("div",{children:(0,l.jsx)("ul",{children:(0,l.jsx)(m(),{className:"paramsItem",param:{name:"path",in:"path",required:!0,schema:{type:"string"}}})})})]}),"\n",(0,l.jsx)(o(),{className:"openapi-tabs__mime",children:(0,l.jsx)(b.default,{label:"text/plain",value:"text/plain-schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-mime",children:(0,l.jsx)("h3",{className:"openapi-markdown__details-summary-header-body",children:(0,l.jsx)(s.p,{children:"Body"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsx)("ul",{style:{marginLeft:"1rem"},children:(0,l.jsx)(s.p,{children:"any"})})]})})}),"\n",(0,l.jsx)("div",{children:(0,l.jsx)("div",{children:(0,l.jsx)(n(),{label:void 0,id:void 0,children:(0,l.jsxs)(b.default,{label:"200",value:"200",children:[(0,l.jsx)("div",{children:(0,l.jsx)(s.p,{children:"getDatasetValues"})}),(0,l.jsxs)(a,{style:{textAlign:"left",marginBottom:"1rem"},className:"openapi-markdown__details","data-collaposed":!0,open:!1,children:[(0,l.jsx)("summary",{style:{},children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Response Headers"})})}),(0,l.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,l.jsxs)("li",{className:"schemaItem",children:[(0,l.jsxs)("summary",{style:{},children:[(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Cache-Control"})}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:(0,l.jsx)(s.p,{children:"string"})})]}),(0,l.jsx)("div",{})]}),(0,l.jsxs)("li",{className:"schemaItem",children:[(0,l.jsxs)("summary",{style:{},children:[(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Connection"})}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:(0,l.jsx)(s.p,{children:"string"})})]}),(0,l.jsx)("div",{})]}),(0,l.jsxs)("li",{className:"schemaItem",children:[(0,l.jsxs)("summary",{style:{},children:[(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Date"})}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:(0,l.jsx)(s.p,{children:"string"})})]}),(0,l.jsx)("div",{})]}),(0,l.jsxs)("li",{className:"schemaItem",children:[(0,l.jsxs)("summary",{style:{},children:[(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Set-Cookie"})}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:(0,l.jsx)(s.p,{children:"string"})})]}),(0,l.jsx)("div",{})]}),(0,l.jsxs)("li",{className:"schemaItem",children:[(0,l.jsxs)("summary",{style:{},children:[(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Strict-Transport-Security"})}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:(0,l.jsx)(s.p,{children:"string"})})]}),(0,l.jsx)("div",{})]}),(0,l.jsxs)("li",{className:"schemaItem",children:[(0,l.jsxs)("summary",{style:{},children:[(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Transfer-Encoding"})}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:(0,l.jsx)(s.p,{children:"string"})})]}),(0,l.jsx)("div",{})]}),(0,l.jsxs)("li",{className:"schemaItem",children:[(0,l.jsxs)("summary",{style:{},children:[(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Vary"})}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:(0,l.jsx)(s.p,{children:"string"})})]}),(0,l.jsx)("div",{})]}),(0,l.jsxs)("li",{className:"schemaItem",children:[(0,l.jsxs)("summary",{style:{},children:[(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"X-Content-Type-Options"})}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:(0,l.jsx)(s.p,{children:"string"})})]}),(0,l.jsx)("div",{})]}),(0,l.jsxs)("li",{className:"schemaItem",children:[(0,l.jsxs)("summary",{style:{},children:[(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"X-Frame-Options"})}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:(0,l.jsx)(s.p,{children:"string"})})]}),(0,l.jsx)("div",{})]}),(0,l.jsxs)("li",{className:"schemaItem",children:[(0,l.jsxs)("summary",{style:{},children:[(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"X-XSS-Protection"})}),(0,l.jsx)("span",{style:{opacity:"0.6"},children:(0,l.jsx)(s.p,{children:"string"})})]}),(0,l.jsx)("div",{})]})]})]}),(0,l.jsx)("div",{children:(0,l.jsx)(o(),{className:"openapi-tabs__mime",schemaType:"response",children:(0,l.jsx)(b.default,{label:"application/json",value:"application/json",children:(0,l.jsxs)(g(),{className:"openapi-tabs__schema",children:[(0,l.jsx)(b.default,{label:"Schema",value:"Schema",children:(0,l.jsxs)(a,{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0,children:[(0,l.jsx)("summary",{style:{},className:"openapi-markdown__details-summary-response",children:(0,l.jsx)("strong",{children:(0,l.jsx)(s.p,{children:"Schema"})})}),(0,l.jsx)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.jsxs)("ul",{style:{marginLeft:"1rem"},children:[(0,l.jsx)(u(),{collapsible:!1,name:"errorCode",required:!1,schemaName:"number",qualifierMessage:void 0,schema:{type:"number",example:0}}),(0,l.jsx)(u(),{collapsible:!1,name:"msg",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Success"}})]})]})}),(0,l.jsx)(b.default,{label:"Example (from schema)",value:"Example (from schema)",children:(0,l.jsx)(x(),{responseExample:'{\n  "errorCode": 0,\n  "msg": "Success"\n}',language:"json"})}),(0,l.jsx)(b.default,{label:"getDatasetValues",value:"getDatasetValues",children:(0,l.jsx)(x(),{responseExample:'{\n  "errorCode": 0,\n  "msg": "Success"\n}',language:"json"})})]})})})})]})})})})]})}function O(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,l.jsx)(s,{...e,children:(0,l.jsx)(Q,{...e})}):Q(e)}}}]);