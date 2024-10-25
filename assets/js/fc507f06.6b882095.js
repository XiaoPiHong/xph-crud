"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8508],{35022:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>m,contentTitle:()=>d,default:()=>k,frontMatter:()=>i,metadata:()=>c,toc:()=>b});var t=r(86106),o=r(66205),a=r(90310),s=r(36899),l=r(72315);const p='import React from "react";\nimport { XphTable, TXphTableProps } from "xph-crud";\n\ninterface DataType {\n  key: React.Key;\n  name: string;\n  age: number;\n  address: string;\n  gender: "male" | "female";\n}\n\n/** \u6a21\u62df\u5206\u9875\u63a5\u53e3 */\nconst getTablePage = async (params) => {\n  console.log(params);\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve({\n        data: [\n          {\n            key: "1",\n            name: "\u80e1\u5f66\u658c",\n            age: 32,\n            address:\n              "new york street 1 new york street 1 new york street 1 new york street 1 new york street 1 new york street 1 new york street 1 new york street 1",\n            gender: "male",\n          },\n          {\n            key: "2",\n            name: "\u674e\u96f7",\n            age: 28,\n            address: "\u4e1c\u57ce\u533a\u4e1c\u534e\u95e8\u5927\u88572\u53f7",\n            gender: "male",\n          },\n          {\n            key: "3",\n            name: "\u97e9\u6885\u6885",\n            age: 30,\n            address: "\u5357\u5c71\u533a\u5357\u5c71\u8def3\u53f7",\n            gender: "female",\n          },\n        ],\n        current: 1,\n        pageSize: 20,\n        total: 3,\n        totalPage: 1,\n      });\n    }, 1000);\n  });\n};\n\nconst ReactApp: React.FC = () => {\n  const props: TXphTableProps<DataType> = {\n    table: {\n      columns: [\n        {\n          title: "\u59d3\u540d",\n          dataIndex: "name",\n          key: "name",\n        },\n        {\n          title: "\u6027\u522b",\n          dataIndex: "gender",\n          key: "gender",\n        },\n        {\n          title: "\u5730\u5740",\n          dataIndex: "address",\n          key: "address",\n          width: 300,\n          ellipsis: true,\n        },\n        {\n          title: "\u5e74\u9f84",\n          dataIndex: "age",\n          key: "age",\n        },\n      ],\n      api: getTablePage,\n      toolbar: {\n        type: "primary",\n        max: 2,\n        items: [\n          {\n            key: "add",\n            component: "Button",\n            componentProps: {\n              children: "\u6211\u662f\u6309\u94ae",\n              onClick: (e) => {\n                console.log(e);\n              },\n            },\n          },\n          {\n            key: "more",\n            component: "Dropdown",\n            componentProps: {\n              children: "\u6211\u662f\u4e0b\u62c9",\n              dropDownItems: [\n                {\n                  key: "1",\n                  label: "\u6211\u662f\u4e0b\u62c91",\n                },\n                {\n                  key: "2",\n                  label: "\u6211\u662f\u4e0b\u62c92",\n                },\n              ],\n              onClick: (e) => {\n                console.log(e);\n              },\n            },\n          },\n          {\n            key: "render",\n            render: <div>\u6211\u662f\u81ea\u5b9a\u4e49render</div>,\n          },\n        ],\n      },\n    },\n  };\n\n  return <XphTable<DataType> {...props} />;\n};\n\nexport default ReactApp;\n',i={},d=void 0,c={id:"comp/table/properties/table/properties/toolbar",title:"toolbar",description:"\u9876\u90e8\u64cd\u4f5c\u9879",source:"@site/docs/comp/table/properties/table/properties/toolbar.mdx",sourceDirName:"comp/table/properties/table/properties",slug:"/comp/table/properties/table/properties/toolbar",permalink:"/xph-crud/docs/comp/table/properties/table/properties/toolbar",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},m={},b=[{value:"\u9876\u90e8\u64cd\u4f5c\u9879",id:"\u9876\u90e8\u64cd\u4f5c\u9879",level:3}];function y(e){const n={h3:"h3",p:"p",...(0,o.R)(),...e.components};return a.fF||u("TableDemos",!1),a.fF.Properties||u("TableDemos.Properties",!1),a.fF.Properties.table||u("TableDemos.Properties.table",!1),a.fF.Properties.table.Properties||u("TableDemos.Properties.table.Properties",!1),a.fF.Properties.table.Properties.Toolbar||u("TableDemos.Properties.table.Properties.Toolbar",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"\u9876\u90e8\u64cd\u4f5c\u9879",children:"\u9876\u90e8\u64cd\u4f5c\u9879"}),"\n",(0,t.jsxs)(s.A,{rawStr:p,children:[(0,t.jsx)(a.fF.Properties.table.Properties.Toolbar,{}),(0,t.jsx)(l.A,{children:(0,t.jsx)(n.p,{children:"toolbar \u5c5e\u6027\u7ee7\u627fXphActions\u7ec4\u4ef6\u7684API\u3002"})})]})]})}function k(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(y,{...e})}):y(e)}function u(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},72315:(e,n,r)=>{r.d(n,{A:()=>a});r(7378);var t=r(51235),o=r(86106);const a=e=>{let{children:n,title:r}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.A,{orientation:"left",children:r||"tips"}),n]})}}}]);