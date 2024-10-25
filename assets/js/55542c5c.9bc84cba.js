"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7339],{71762:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>l,default:()=>f,frontMatter:()=>c,metadata:()=>m,toc:()=>d});var n=t(86106),o=t(66205),p=t(82978),i=t(36899);const s='import React from "react";\nimport { XphForm, IXphFormProps } from "xph-crud";\n\nconst ReactApp: React.FC = () => {\n  const props: IXphFormProps = {\n    items: [\n      {\n        name: "ApiTreeSelect",\n        label: "ApiTreeSelect",\n        component: "ApiTreeSelect",\n        componentProps: ({ model }) => {\n          return {\n            placeholder: "\u8bf7\u9009\u62e9ApiTreeSelect",\n            params: { a: model.Select },\n            immediate: true,\n            api: async (params) => {\n              console.log(\n                params,\n                "GET ApiTreeSelect==========================="\n              );\n              return [\n                {\n                  value: "parent 1",\n                  title: "parent 1",\n                  children: [\n                    {\n                      value: "parent 1-0",\n                      title: "parent 1-0",\n                      children: [\n                        {\n                          value: "leaf1",\n                          title: "leaf1",\n                        },\n                        {\n                          value: "leaf2",\n                          title: "leaf2",\n                        },\n                      ],\n                    },\n                    {\n                      value: "parent 1-1",\n                      title: "parent 1-1",\n                      children: [\n                        {\n                          value: "leaf3",\n                          title: <b style={{ color: "#08c" }}>leaf3</b>,\n                        },\n                      ],\n                    },\n                  ],\n                },\n              ];\n            },\n          };\n        },\n        initialValue: "leaf3",\n        rules: [\n          {\n            required: true,\n            message: "ApiTreeSelect\u5fc5\u586b",\n          },\n        ],\n      },\n    ],\n  };\n\n  return <XphForm {...props}></XphForm>;\n};\n\nexport default ReactApp;\n',c={},l=void 0,m={id:"comp/form/properties/items/properties/component/api-tree-select",title:"api-tree-select",description:"ApiTreeSelect",source:"@site/docs/comp/form/properties/items/properties/component/api-tree-select.mdx",sourceDirName:"comp/form/properties/items/properties/component",slug:"/comp/form/properties/items/properties/component/api-tree-select",permalink:"/xph-crud/docs/comp/form/properties/items/properties/component/api-tree-select",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},a={},d=[{value:"ApiTreeSelect",id:"apitreeselect",level:3}];function u(e){const r={a:"a",h3:"h3",p:"p",...(0,o.R)(),...e.components};return p.z9||h("FormDemos",!1),p.z9.Properties||h("FormDemos.Properties",!1),p.z9.Properties.items||h("FormDemos.Properties.items",!1),p.z9.Properties.items.Properties||h("FormDemos.Properties.items.Properties",!1),p.z9.Properties.items.Properties.component||h("FormDemos.Properties.items.Properties.component",!1),p.z9.Properties.items.Properties.component.ApiTreeSelect||h("FormDemos.Properties.items.Properties.component.ApiTreeSelect",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h3,{id:"apitreeselect",children:"ApiTreeSelect"}),"\n",(0,n.jsx)(i.A,{rawStr:s,children:(0,n.jsx)(p.z9.Properties.items.Properties.component.ApiTreeSelect,{})}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/api/interfaces/IApiTreeSelectProps",children:"ApiTreeSelect API"})})]})}function f(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}function h(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);