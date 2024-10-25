"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3575],{80667:(o,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>m,toc:()=>l});var e=n(86106),r=n(66205),p=n(90310),s=n(36899);const c='import React, { useState } from "react";\nimport { XphForm, IXphFormProps } from "xph-crud";\n\nconst ReactApp: React.FC = () => {\n  const [layout, seLayout] = useState<"vertical" | "horizontal">("vertical");\n\n  const props: IXphFormProps = {\n    layout,\n    colProps: { span: 4, offset: 1 },\n    items: [\n      {\n        name: "Input1",\n        label: "Input1",\n        component: "Input",\n        componentProps: {},\n      },\n      {\n        name: "Input2",\n        label: "Input2",\n        component: "Input",\n        componentProps: {},\n      },\n      {\n        name: "Button",\n        label: "\u5207\u6362\u5e03\u5c40",\n        component: "Button",\n        componentProps: {\n          onClick: () => {\n            seLayout(layout === "vertical" ? "horizontal" : "vertical");\n          },\n          children: "\u5207\u6362\u5e03\u5c40",\n        },\n      },\n    ],\n  };\n\n  return <XphForm {...props}></XphForm>;\n};\n\nexport default ReactApp;\n',a={},i=void 0,m={id:"comp/form/properties/layout",title:"layout",description:"\u5e03\u5c40",source:"@site/docs/comp/form/properties/layout.mdx",sourceDirName:"comp/form/properties",slug:"/comp/form/properties/layout",permalink:"/xph-crud/docs/comp/form/properties/layout",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},u={},l=[{value:"\u5e03\u5c40",id:"\u5e03\u5c40",level:3}];function d(o){const t={h3:"h3",...(0,r.R)(),...o.components};return p.z9||h("FormDemos",!1),p.z9.Properties||h("FormDemos.Properties",!1),p.z9.Properties.Layout||h("FormDemos.Properties.Layout",!0),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)(t.h3,{id:"\u5e03\u5c40",children:"\u5e03\u5c40"}),"\n",(0,e.jsx)(s.A,{rawStr:c,children:(0,e.jsx)(p.z9.Properties.Layout,{})})]})}function f(o={}){const{wrapper:t}={...(0,r.R)(),...o.components};return t?(0,e.jsx)(t,{...o,children:(0,e.jsx)(d,{...o})}):d(o)}function h(o,t){throw new Error("Expected "+(t?"component":"object")+" `"+o+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);