"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1939],{3534:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>f,contentTitle:()=>a,default:()=>u,frontMatter:()=>m,metadata:()=>c,toc:()=>l});var t=n(86106),o=n(66205),s=n(82978),p=n(36899);const i='import React from "react";\nimport { XphForm, IXphFormProps } from "xph-crud";\n\nconst ReactApp: React.FC = () => {\n  const props: IXphFormProps = {\n    items: [\n      {\n        name: "ApiTransfer",\n        label: "ApiTransfer",\n        component: "ApiTransfer",\n        valuePropName: "targetKeys",\n        initialValue: ["1"],\n        componentProps: ({ model }) => {\n          return {\n            params: { a: model.Select },\n            api: async (params) => {\n              // console.log(params, "GET ApiTransfer===========================");\n              return [\n                {\n                  key: "1",\n                  title: "\u6807\u98981",\n                },\n                {\n                  key: "2",\n                  title: "\u6807\u98982",\n                },\n              ];\n            },\n            render: (item) => item.title,\n          };\n        },\n        rules: [\n          {\n            required: true,\n            type: "array",\n            message: "ApiTransfer\u5fc5\u586b",\n          },\n        ],\n      },\n    ],\n  };\n\n  return <XphForm {...props}></XphForm>;\n};\n\nexport default ReactApp;\n',m={},a=void 0,c={id:"comp/form/properties/items/properties/component/api-transfer",title:"api-transfer",description:"ApiTransfer",source:"@site/docs/comp/form/properties/items/properties/component/api-transfer.mdx",sourceDirName:"comp/form/properties/items/properties/component",slug:"/comp/form/properties/items/properties/component/api-transfer",permalink:"/xph-crud/docs/comp/form/properties/items/properties/component/api-transfer",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},f={},l=[{value:"ApiTransfer",id:"apitransfer",level:3}];function d(e){const r={a:"a",h3:"h3",p:"p",...(0,o.R)(),...e.components};return s.z9||P("FormDemos",!1),s.z9.Properties||P("FormDemos.Properties",!1),s.z9.Properties.items||P("FormDemos.Properties.items",!1),s.z9.Properties.items.Properties||P("FormDemos.Properties.items.Properties",!1),s.z9.Properties.items.Properties.component||P("FormDemos.Properties.items.Properties.component",!1),s.z9.Properties.items.Properties.component.ApiTransfer||P("FormDemos.Properties.items.Properties.component.ApiTransfer",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h3,{id:"apitransfer",children:"ApiTransfer"}),"\n",(0,t.jsx)(p.A,{rawStr:i,children:(0,t.jsx)(s.z9.Properties.items.Properties.component.ApiTransfer,{})}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/api/interfaces/IApiTransferProps",children:"ApiTransfer API"})})]})}function u(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}function P(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);