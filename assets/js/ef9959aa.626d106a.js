"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7248],{44087:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>c,metadata:()=>m,toc:()=>P});var t=r(86106),o=r(66205),s=r(82468),p=r(36899),l=r(72315);const i='import React from "react";\nimport { XphTable, TXphTableProps } from "xph-crud";\n\ninterface DataType {\n  key: React.Key;\n  name: string;\n  age: number;\n  address: string;\n  gender: "male" | "female";\n}\n\n/** \u6a21\u62df\u5206\u9875\u63a5\u53e3 */\nconst getTablePage = async (params) => {\n  console.log(params);\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve({\n        data: [\n          {\n            key: "1",\n            name: "\u80e1\u5f66\u658c",\n            age: 32,\n            address:\n              "new york street 1 new york street 1 new york street 1 new york street 1 new york street 1 new york street 1 new york street 1 new york street 1",\n            gender: "male",\n          },\n          {\n            key: "2",\n            name: "\u674e\u96f7",\n            age: 28,\n            address: "\u4e1c\u57ce\u533a\u4e1c\u534e\u95e8\u5927\u88572\u53f7",\n            gender: "male",\n          },\n          {\n            key: "3",\n            name: "\u97e9\u6885\u6885",\n            age: 30,\n            address: "\u5357\u5c71\u533a\u5357\u5c71\u8def3\u53f7",\n            gender: "female",\n          },\n        ],\n        current: 1,\n        pageSize: 20,\n        total: 3,\n        totalPage: 1,\n      });\n    }, 1000);\n  });\n};\n\nconst ReactApp: React.FC = () => {\n  const props: TXphTableProps<DataType> = {\n    table: {\n      columns: [\n        {\n          title: "\u6027\u522b",\n          dataIndex: "gender",\n          key: "gender",\n          cellFunc: [\n            {\n              component: "link",\n              componentProps: {\n                url: "https://www.taobao.com",\n              },\n            },\n            {\n              component: "tag",\n              componentProps: {\n                enums: [\n                  {\n                    label: "\u7537",\n                    value: "male",\n                    config: {\n                      color: "info",\n                    },\n                  },\n                  {\n                    label: "\u5973",\n                    value: "female",\n                    config: {\n                      color: "primary",\n                    },\n                  },\n                ],\n              },\n            },\n          ],\n        },\n      ],\n      api: getTablePage,\n    },\n  };\n\n  return <XphTable<DataType> {...props} />;\n};\n\nexport default ReactApp;\n',c={},a=void 0,m={id:"comp/table/properties/table/properties/columns/properties/cellFunc/properties/component/multiComponent",title:"multiComponent",description:"\u591a\u7ec4\u4ef6\u6620\u5c04",source:"@site/docs/comp/table/properties/table/properties/columns/properties/cellFunc/properties/component/multiComponent.mdx",sourceDirName:"comp/table/properties/table/properties/columns/properties/cellFunc/properties/component",slug:"/comp/table/properties/table/properties/columns/properties/cellFunc/properties/component/multiComponent",permalink:"/xph-crud/docs/comp/table/properties/table/properties/columns/properties/cellFunc/properties/component/multiComponent",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},u={},P=[{value:"\u591a\u7ec4\u4ef6\u6620\u5c04",id:"\u591a\u7ec4\u4ef6\u6620\u5c04",level:2}];function b(e){const n={a:"a",h2:"h2",p:"p",...(0,o.R)(),...e.components};return s.fF||f("TableDemos",!1),s.fF.Properties||f("TableDemos.Properties",!1),s.fF.Properties.table||f("TableDemos.Properties.table",!1),s.fF.Properties.table.Properties||f("TableDemos.Properties.table.Properties",!1),s.fF.Properties.table.Properties.columns||f("TableDemos.Properties.table.Properties.columns",!1),s.fF.Properties.table.Properties.columns.Properties||f("TableDemos.Properties.table.Properties.columns.Properties",!1),s.fF.Properties.table.Properties.columns.Properties.cellFunc||f("TableDemos.Properties.table.Properties.columns.Properties.cellFunc",!1),s.fF.Properties.table.Properties.columns.Properties.cellFunc.Properties||f("TableDemos.Properties.table.Properties.columns.Properties.cellFunc.Properties",!1),s.fF.Properties.table.Properties.columns.Properties.cellFunc.Properties.component||f("TableDemos.Properties.table.Properties.columns.Properties.cellFunc.Properties.component",!1),s.fF.Properties.table.Properties.columns.Properties.cellFunc.Properties.component.MultiComponent||f("TableDemos.Properties.table.Properties.columns.Properties.cellFunc.Properties.component.MultiComponent",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"\u591a\u7ec4\u4ef6\u6620\u5c04",children:"\u591a\u7ec4\u4ef6\u6620\u5c04"}),"\n",(0,t.jsxs)(p.A,{rawStr:i,children:[(0,t.jsx)(s.fF.Properties.table.Properties.columns.Properties.cellFunc.Properties.component.MultiComponent,{}),(0,t.jsx)(l.A,{children:(0,t.jsxs)(n.p,{children:["cellFunc \u662f\u4e2a\u96c6\u5408\uff0c\u5217\u5185\u5bb9\u53ef\u7531\u591a\u4e2a\u7ec4\u4ef6\u7ec4\u5408\u800c\u6210\uff0c\u4f7f\u7528\u524d\u8bf7\u719f\u6089 ",(0,t.jsx)(n.a,{href:"/docs/comp/extends/base#%E6%89%A9%E5%B1%95%E5%8D%95%E5%85%83%E6%A0%BC%E6%98%A0%E5%B0%84%E5%86%85%E5%AE%B9%E7%9A%84%E8%A7%84%E8%8C%83",children:"cellFunc \u7684\u6e32\u67d3\u673a\u5236"}),"\u548c\u6e32\u67d3\u7ec4\u4ef6\u7684\u7279\u6027\u3002"]})})]})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}function f(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},72315:(e,n,r)=>{r.d(n,{A:()=>s});r(7378);var t=r(51235),o=r(86106);const s=e=>{let{children:n,title:r}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.A,{orientation:"left",children:r||"tips"}),n]})}}}]);