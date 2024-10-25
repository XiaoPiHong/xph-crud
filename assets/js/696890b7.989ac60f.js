"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1680],{59975:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>d,default:()=>u,frontMatter:()=>l,metadata:()=>c,toc:()=>g});var a=t(86106),r=t(66205),o=t(90310),i=t(36899),s=t(72315);const p='import React from "react";\nimport { XphTable, TXphTableProps } from "xph-crud";\n\ninterface DataType {\n  key: React.Key;\n  name: string;\n  age: number;\n  address: string;\n  gender: "male" | "female";\n}\n\n/** \u6a21\u62df\u5206\u9875\u63a5\u53e3 */\nconst getTablePage = async (params) => {\n  console.log(params);\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve({\n        data: Array.from({ length: 3 }).map((_, index) => ({\n          key: index,\n          name: `\u59d3\u540d${index}`,\n          age: index,\n          address: `\u5730\u5740${index}`,\n          gender: index % 2 === 0 ? "male" : "female",\n        })),\n        current: 1,\n        pageSize: 100,\n        total: 3,\n        totalPage: 1,\n      });\n    }, 1000);\n  });\n};\n\nconst ReactApp: React.FC = () => {\n  const props: TXphTableProps<DataType> = {\n    table: {\n      columns: [\n        {\n          title: "\u59d3\u540d",\n          dataIndex: "name",\n          key: "name",\n        },\n        {\n          title: "\u6027\u522b",\n          dataIndex: "gender",\n          key: "gender",\n        },\n        {\n          title: "\u5730\u5740",\n          dataIndex: "address",\n          key: "address",\n          width: 300,\n          ellipsis: true,\n        },\n        {\n          title: "\u5e74\u9f84",\n          dataIndex: "age",\n          key: "age",\n        },\n      ],\n      pagination: {\n        /** \u9ed8\u8ba4100\u6761 */\n        pageSize: 100,\n        /** \u81ea\u5b9a\u4e49\u603b\u6761\u6570\u8282\u70b9 */\n        showTotal: (total) => (\n          <span style={{ color: "red" }}>\u5171 {total} \u6761</span>\n        ),\n        /** \u81ea\u5b9a\u4e49\u9875\u7801 */\n        pageSizeOptions: [100, 200, 500, 1000],\n      },\n      api: getTablePage,\n    },\n  };\n\n  return <XphTable<DataType> {...props} />;\n};\n\nexport default ReactApp;\n',l={},d=void 0,c={id:"comp/table/properties/table/properties/pagination",title:"pagination",description:"\u5206\u9875\u914d\u7f6e",source:"@site/docs/comp/table/properties/table/properties/pagination.mdx",sourceDirName:"comp/table/properties/table/properties",slug:"/comp/table/properties/table/properties/pagination",permalink:"/xph-crud/docs/comp/table/properties/table/properties/pagination",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},m={},g=[{value:"\u5206\u9875\u914d\u7f6e",id:"\u5206\u9875\u914d\u7f6e",level:3}];function b(e){const n={h3:"h3",p:"p",...(0,r.R)(),...e.components};return o.fF||h("TableDemos",!1),o.fF.Properties||h("TableDemos.Properties",!1),o.fF.Properties.table||h("TableDemos.Properties.table",!1),o.fF.Properties.table.Properties||h("TableDemos.Properties.table.Properties",!1),o.fF.Properties.table.Properties.Pagination||h("TableDemos.Properties.table.Properties.Pagination",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h3,{id:"\u5206\u9875\u914d\u7f6e",children:"\u5206\u9875\u914d\u7f6e"}),"\n",(0,a.jsxs)(i.A,{rawStr:p,children:[(0,a.jsx)(o.fF.Properties.table.Properties.Pagination,{}),(0,a.jsxs)(s.A,{children:[(0,a.jsx)(n.p,{children:"api\u54cd\u5e94\u65f6\uff0c\u6570\u636e\u6e90\u8bfb\u53d6\u7684\u503c\u53ef\u6839\u636e responseFields \u5c5e\u6027\u914d\u7f6e\uff1b"}),(0,a.jsx)(n.p,{children:"pagination \u4e3afalse\u65f6\u4f1a\u5173\u95ed\u5206\u9875\uff0c\u9ed8\u8ba4\u8bfb\u53d6api\u54cd\u5e94\u5bf9\u8c61\u4e2d\u7684data\u5c5e\u6027\uff1b"}),(0,a.jsx)(n.p,{children:"pagination \u4e3a\u5bf9\u8c61\u65f6\uff0c\u7ee7\u627fantd Pagination\u7ec4\u4ef6\u7684API\u3002"})]})]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(b,{...e})}):b(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},72315:(e,n,t)=>{t.d(n,{A:()=>o});t(7378);var a=t(51235),r=t(86106);const o=e=>{let{children:n,title:t}=e;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.A,{orientation:"left",children:t||"tips"}),n]})}}}]);