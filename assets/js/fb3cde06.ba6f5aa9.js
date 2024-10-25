"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8338],{35591:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>m,default:()=>f,frontMatter:()=>c,metadata:()=>l,toc:()=>d});var n=r(86106),o=r(66205),s=r(82978),p=r(36899);const i='import React from "react";\nimport { XphForm, IXphFormProps } from "xph-crud";\n\nconst ReactApp: React.FC = () => {\n  const props: IXphFormProps = {\n    items: [\n      {\n        name: "TreeSelect",\n        label: "TreeSelect",\n        component: "TreeSelect",\n        componentProps: {\n          placeholder: "\u8bf7\u9009\u62e9TreeSelect",\n          treeData: [\n            {\n              value: "parent 1",\n              title: "parent 1",\n              children: [\n                {\n                  value: "parent 1-0",\n                  title: "parent 1-0",\n                  children: [\n                    {\n                      value: "leaf1",\n                      title: "leaf1",\n                    },\n                    {\n                      value: "leaf2",\n                      title: "leaf2",\n                    },\n                  ],\n                },\n                {\n                  value: "parent 1-1",\n                  title: "parent 1-1",\n                  children: [\n                    {\n                      value: "leaf3",\n                      title: <b style={{ color: "#08c" }}>leaf3</b>,\n                    },\n                  ],\n                },\n              ],\n            },\n          ],\n        },\n        initialValue: "leaf3",\n        rules: [\n          {\n            required: true,\n            message: "TreeSelect\u5fc5\u586b",\n          },\n        ],\n      },\n    ],\n  };\n\n  return <XphForm {...props}></XphForm>;\n};\n\nexport default ReactApp;\n',c={},m=void 0,l={id:"comp/form/properties/items/properties/component/tree-select",title:"tree-select",description:"TreeSelect",source:"@site/docs/comp/form/properties/items/properties/component/tree-select.mdx",sourceDirName:"comp/form/properties/items/properties/component",slug:"/comp/form/properties/items/properties/component/tree-select",permalink:"/xph-crud/docs/comp/form/properties/items/properties/component/tree-select",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},a={},d=[{value:"TreeSelect",id:"treeselect",level:3}];function u(e){const t={h3:"h3",...(0,o.R)(),...e.components};return s.z9||h("FormDemos",!1),s.z9.Properties||h("FormDemos.Properties",!1),s.z9.Properties.items||h("FormDemos.Properties.items",!1),s.z9.Properties.items.Properties||h("FormDemos.Properties.items.Properties",!1),s.z9.Properties.items.Properties.component||h("FormDemos.Properties.items.Properties.component",!1),s.z9.Properties.items.Properties.component.TreeSelect||h("FormDemos.Properties.items.Properties.component.TreeSelect",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h3,{id:"treeselect",children:"TreeSelect"}),"\n",(0,n.jsx)(p.A,{rawStr:i,children:(0,n.jsx)(s.z9.Properties.items.Properties.component.TreeSelect,{})})]})}function f(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}function h(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);