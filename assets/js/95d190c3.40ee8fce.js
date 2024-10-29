"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6081,9370,9861,1991,3645,7248],{17384:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>a,default:()=>b,frontMatter:()=>c,metadata:()=>m,toc:()=>P});var t=n(86106),o=n(66205),s=n(16476),p=n(30870),l=n(68550);const i='import React from "react";\nimport { XphTable, TXphTableProps } from "xph-crud";\n\ninterface DataType {\n  key: React.Key;\n  name: string;\n  age: number;\n  address: string;\n  gender: "male" | "female";\n}\n\n/** \u6a21\u62df\u5206\u9875\u63a5\u53e3 */\nconst getTablePage = async (params) => {\n  console.log(params);\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve({\n        data: [\n          {\n            key: "1",\n            name: "\u80e1\u5f66\u658c",\n            age: 32,\n            address:\n              "new york street 1 new york street 1 new york street 1 new york street 1 new york street 1 new york street 1 new york street 1 new york street 1",\n            gender: "male",\n          },\n          {\n            key: "2",\n            name: "\u674e\u96f7",\n            age: 28,\n            address: "\u4e1c\u57ce\u533a\u4e1c\u534e\u95e8\u5927\u88572\u53f7",\n            gender: "male",\n          },\n          {\n            key: "3",\n            name: "\u97e9\u6885\u6885",\n            age: 30,\n            address: "\u5357\u5c71\u533a\u5357\u5c71\u8def3\u53f7",\n            gender: "female",\n          },\n        ],\n        current: 1,\n        pageSize: 20,\n        total: 3,\n        totalPage: 1,\n      });\n    }, 1000);\n  });\n};\n\nconst ReactApp: React.FC = () => {\n  const props: TXphTableProps<DataType> = {\n    table: {\n      columns: [\n        {\n          title: "\u64cd\u4f5c",\n          dataIndex: "actions",\n          fixed: "right",\n          width: 300,\n          cellFunc: ({ record }) => [\n            {\n              component: "actions",\n              componentProps: {\n                type: "dashed",\n                max: 2,\n                items: [\n                  {\n                    key: "edit",\n                    component: "Button",\n                    componentProps: {\n                      children: "\u7f16\u8f91",\n                      onClick: (e) => {},\n                    },\n                  },\n                  {\n                    key: "more",\n                    component: "Dropdown",\n                    componentProps: {\n                      children: "\u6211\u662f\u4e0b\u62c9",\n                      dropDownItems: [\n                        {\n                          key: "1",\n                          label: "\u6211\u662f\u4e0b\u62c91",\n                        },\n                        {\n                          key: "2",\n                          label: "\u6211\u662f\u4e0b\u62c92",\n                        },\n                      ],\n                      onClick: (e) => {\n                        console.log(e);\n                      },\n                    },\n                  },\n                  {\n                    key: "render",\n                    render: <div>\u6211\u662f\u81ea\u5b9a\u4e49render</div>,\n                  },\n                ],\n              },\n            },\n          ],\n        },\n      ],\n      api: getTablePage,\n    },\n  };\n\n  return <XphTable<DataType> {...props} />;\n};\n\nexport default ReactApp;\n',c={},a=void 0,m={id:"comp/table/properties/table/properties/columns/properties/cellFunc/properties/component/actions",title:"actions",description:"actions",source:"@site/docs/comp/table/properties/table/properties/columns/properties/cellFunc/properties/component/actions.mdx",sourceDirName:"comp/table/properties/table/properties/columns/properties/cellFunc/properties/component",slug:"/comp/table/properties/table/properties/columns/properties/cellFunc/properties/component/actions",permalink:"/xph-crud/docs/comp/table/properties/table/properties/columns/properties/cellFunc/properties/component/actions",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},u={},P=[{value:"actions",id:"actions",level:3}];function d(e){const r={h3:"h3",p:"p",...(0,o.R)(),...e.components};return s.fF||f("TableDemos",!1),s.fF.Properties||f("TableDemos.Properties",!1),s.fF.Properties.table||f("TableDemos.Properties.table",!1),s.fF.Properties.table.Properties||f("TableDemos.Properties.table.Properties",!1),s.fF.Properties.table.Properties.columns||f("TableDemos.Properties.table.Properties.columns",!1),s.fF.Properties.table.Properties.columns.Properties||f("TableDemos.Properties.table.Properties.columns.Properties",!1),s.fF.Properties.table.Properties.columns.Properties.cellFunc||f("TableDemos.Properties.table.Properties.columns.Properties.cellFunc",!1),s.fF.Properties.table.Properties.columns.Properties.cellFunc.Properties||f("TableDemos.Properties.table.Properties.columns.Properties.cellFunc.Properties",!1),s.fF.Properties.table.Properties.columns.Properties.cellFunc.Properties.component||f("TableDemos.Properties.table.Properties.columns.Properties.cellFunc.Properties.component",!1),s.fF.Properties.table.Properties.columns.Properties.cellFunc.Properties.component.Actions||f("TableDemos.Properties.table.Properties.columns.Properties.cellFunc.Properties.component.Actions",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h3,{id:"actions",children:"actions"}),"\n",(0,t.jsxs)(p.A,{rawStr:i,children:[(0,t.jsx)(s.fF.Properties.table.Properties.columns.Properties.cellFunc.Properties.component.Actions,{}),(0,t.jsx)(l.A,{children:(0,t.jsx)(r.p,{children:"actions \u5c5e\u6027\u7ee7\u627fXphActions\u7ec4\u4ef6\u7684API\u3002"})})]})]})}function b(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}function f(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},66514:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>m,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var t=n(86106),o=n(66205),s=n(16476),p=n(30870);const l='import React from "react";\nimport { XphTable, TXphTableProps } from "xph-crud";\n\ninterface DataType {\n  key: React.Key;\n  name: string;\n  age: number;\n  address: string;\n  gender: "male" | "female";\n}\n\n/** \u6a21\u62df\u5206\u9875\u63a5\u53e3 */\nconst getTablePage = async (params) => {\n  console.log(params);\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve({\n        data: [\n          {\n            key: "1",\n            name: "\u80e1\u5f66\u658c",\n            age: 32,\n            address:\n              "new york street 1 new york street 1 new york street 1 new york street 1 new york street 1 new york street 1 new york street 1 new york street 1",\n            gender: "male",\n          },\n          {\n            key: "2",\n            name: "\u674e\u96f7",\n            age: 28,\n            address: "\u4e1c\u57ce\u533a\u4e1c\u534e\u95e8\u5927\u88572\u53f7",\n            gender: "male",\n          },\n          {\n            key: "3",\n            name: "\u97e9\u6885\u6885",\n            age: 30,\n            address: "\u5357\u5c71\u533a\u5357\u5c71\u8def3\u53f7",\n            gender: "female",\n          },\n        ],\n        current: 1,\n        pageSize: 20,\n        total: 3,\n        totalPage: 1,\n      });\n    }, 1000);\n  });\n};\n\nconst ReactApp: React.FC = () => {\n  const props: TXphTableProps<DataType> = {\n    table: {\n      columns: [\n        {\n          title: "\u5730\u5740",\n          dataIndex: "address",\n          key: "address",\n          width: 300,\n          ellipsis: true,\n          cellFunc: [\n            {\n              component: "copy",\n              componentProps: {\n                size: "large",\n              },\n            },\n          ],\n        },\n      ],\n      api: getTablePage,\n    },\n  };\n\n  return <XphTable<DataType> {...props} />;\n};\n\nexport default ReactApp;\n',i={},c=void 0,a={id:"comp/table/properties/table/properties/columns/properties/cellFunc/properties/component/copy",title:"copy",description:"copy",source:"@site/docs/comp/table/properties/table/properties/columns/properties/cellFunc/properties/component/copy.mdx",sourceDirName:"comp/table/properties/table/properties/columns/properties/cellFunc/properties/component",slug:"/comp/table/properties/table/properties/columns/properties/cellFunc/properties/component/copy",permalink:"/xph-crud/docs/comp/table/properties/table/properties/columns/properties/cellFunc/properties/component/copy",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},m={},u=[{value:"copy",id:"copy",level:3}];function P(e){const r={h3:"h3",...(0,o.R)(),...e.components};return s.fF||b("TableDemos",!1),s.fF.Properties||b("TableDemos.Properties",!1),s.fF.Properties.table||b("TableDemos.Properties.table",!1),s.fF.Properties.table.Properties||b("TableDemos.Properties.table.Properties",!1),s.fF.Properties.table.Properties.columns||b("TableDemos.Properties.table.Properties.columns",!1),s.fF.Properties.table.Properties.columns.Properties||b("TableDemos.Properties.table.Properties.columns.Properties",!1),s.fF.Properties.table.Properties.columns.Properties.cellFunc||b("TableDemos.Properties.table.Properties.columns.Properties.cellFunc",!1),s.fF.Properties.table.Properties.columns.Properties.cellFunc.Properties||b("TableDemos.Properties.table.Properties.columns.Properties.cellFunc.Properties",!1),s.fF.Properties.table.Properties.columns.Properties.cellFunc.Properties.component||b("TableDemos.Properties.table.Properties.columns.Properties.cellFunc.Properties.component",!1),s.fF.Properties.table.Properties.columns.Properties.cellFunc.Properties.component.Copy||b("TableDemos.Properties.table.Properties.columns.Properties.cellFunc.Properties.component.Copy",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h3,{id:"copy",children:"copy"}),"\n",(0,t.jsx)(p.A,{rawStr:l,children:(0,t.jsx)(s.fF.Properties.table.Properties.columns.Properties.cellFunc.Properties.component.Copy,{})})]})}function d(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(P,{...e})}):P(e)}function b(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},90457:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>P,contentTitle:()=>m,default:()=>f,frontMatter:()=>a,metadata:()=>u,toc:()=>d});var t=n(86106),o=n(66205),s=n(78670),p=n(79863),l=n(17384),i=n(66514),c=n(55118);const a={},m="\u5217\u5185\u5bb9\u7ec4\u4ef6\u6620\u5c04",u={id:"comp/table/properties/table/properties/columns/properties/cellFunc/properties/component/index",title:"\u5217\u5185\u5bb9\u7ec4\u4ef6\u6620\u5c04",description:"\u7ec4\u4ef6\u7c7b\u578b",source:"@site/docs/comp/table/properties/table/properties/columns/properties/cellFunc/properties/component/index.mdx",sourceDirName:"comp/table/properties/table/properties/columns/properties/cellFunc/properties/component",slug:"/comp/table/properties/table/properties/columns/properties/cellFunc/properties/component/",permalink:"/xph-crud/docs/comp/table/properties/table/properties/columns/properties/cellFunc/properties/component/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"comp",previous:{title:"XphTable \u53ef\u914d\u7f6e\u5217\u8868",permalink:"/xph-crud/docs/comp/table/base"},next:{title:"XphActions \u53ef\u914d\u7f6e\u64cd\u4f5c\u7ec4",permalink:"/xph-crud/docs/comp/actions/base"}},P={},d=[{value:"\u7ec4\u4ef6\u7c7b\u578b",id:"\u7ec4\u4ef6\u7c7b\u578b",level:2},...s.toc,...p.toc,...l.toc,...i.toc,...c.toc];function b(e){const r={h1:"h1",h2:"h2",header:"header",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"\u5217\u5185\u5bb9\u7ec4\u4ef6\u6620\u5c04",children:"\u5217\u5185\u5bb9\u7ec4\u4ef6\u6620\u5c04"})}),"\n",(0,t.jsx)(r.h2,{id:"\u7ec4\u4ef6\u7c7b\u578b",children:"\u7ec4\u4ef6\u7c7b\u578b"}),"\n",(0,t.jsx)(s.default,{}),"\n",(0,t.jsx)(p.default,{}),"\n",(0,t.jsx)(l.default,{}),"\n",(0,t.jsx)(i.default,{}),"\n",(0,t.jsx)(c.default,{})]})}function f(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(b,{...e})}):b(e)}},78670:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>m,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var t=n(86106),o=n(66205),s=n(16476),p=n(30870);const l='import React from "react";\nimport { XphTable, TXphTableProps } from "xph-crud";\n\ninterface DataType {\n  key: React.Key;\n  name: string;\n  age: number;\n  address: string;\n  gender: "male" | "female";\n}\n\n/** \u6a21\u62df\u5206\u9875\u63a5\u53e3 */\nconst getTablePage = async (params) => {\n  console.log(params);\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve({\n        data: [\n          {\n            key: "1",\n            name: "\u80e1\u5f66\u658c",\n            age: 32,\n            address:\n              "new york street 1 new york street 1 new york street 1 new york street 1 new york street 1 new york street 1 new york street 1 new york street 1",\n            gender: "male",\n          },\n          {\n            key: "2",\n            name: "\u674e\u96f7",\n            age: 28,\n            address: "\u4e1c\u57ce\u533a\u4e1c\u534e\u95e8\u5927\u88572\u53f7",\n            gender: "male",\n          },\n          {\n            key: "3",\n            name: "\u97e9\u6885\u6885",\n            age: 30,\n            address: "\u5357\u5c71\u533a\u5357\u5c71\u8def3\u53f7",\n            gender: "female",\n          },\n        ],\n        current: 1,\n        pageSize: 20,\n        total: 3,\n        totalPage: 1,\n      });\n    }, 1000);\n  });\n};\n\nconst ReactApp: React.FC = () => {\n  const props: TXphTableProps<DataType> = {\n    table: {\n      columns: [\n        {\n          title: "\u5730\u5740",\n          dataIndex: "address",\n          key: "address",\n          width: 300,\n          ellipsis: true,\n          cellFunc: [\n            {\n              component: "link",\n              componentProps: {\n                url: "https://www.taobao.com",\n              },\n            },\n          ],\n        },\n      ],\n      api: getTablePage,\n    },\n  };\n\n  return <XphTable<DataType> {...props} />;\n};\n\nexport default ReactApp;\n',i={},c=void 0,a={id:"comp/table/properties/table/properties/columns/properties/cellFunc/properties/component/link",title:"link",description:"link",source:"@site/docs/comp/table/properties/table/properties/columns/properties/cellFunc/properties/component/link.mdx",sourceDirName:"comp/table/properties/table/properties/columns/properties/cellFunc/properties/component",slug:"/comp/table/properties/table/properties/columns/properties/cellFunc/properties/component/link",permalink:"/xph-crud/docs/comp/table/properties/table/properties/columns/properties/cellFunc/properties/component/link",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},m={},u=[{value:"link",id:"link",level:3}];function P(e){const r={h3:"h3",...(0,o.R)(),...e.components};return s.fF||b("TableDemos",!1),s.fF.Properties||b("TableDemos.Properties",!1),s.fF.Properties.table||b("TableDemos.Properties.table",!1),s.fF.Properties.table.Properties||b("TableDemos.Properties.table.Properties",!1),s.fF.Properties.table.Properties.columns||b("TableDemos.Properties.table.Properties.columns",!1),s.fF.Properties.table.Properties.columns.Properties||b("TableDemos.Properties.table.Properties.columns.Properties",!1),s.fF.Properties.table.Properties.columns.Properties.cellFunc||b("TableDemos.Properties.table.Properties.columns.Properties.cellFunc",!1),s.fF.Properties.table.Properties.columns.Properties.cellFunc.Properties||b("TableDemos.Properties.table.Properties.columns.Properties.cellFunc.Properties",!1),s.fF.Properties.table.Properties.columns.Properties.cellFunc.Properties.component||b("TableDemos.Properties.table.Properties.columns.Properties.cellFunc.Properties.component",!1),s.fF.Properties.table.Properties.columns.Properties.cellFunc.Properties.component.Link||b("TableDemos.Properties.table.Properties.columns.Properties.cellFunc.Properties.component.Link",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h3,{id:"link",children:"link"}),"\n",(0,t.jsx)(p.A,{rawStr:l,children:(0,t.jsx)(s.fF.Properties.table.Properties.columns.Properties.cellFunc.Properties.component.Link,{})})]})}function d(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(P,{...e})}):P(e)}function b(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},55118:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>a,default:()=>b,frontMatter:()=>c,metadata:()=>m,toc:()=>P});var t=n(86106),o=n(66205),s=n(16476),p=n(30870),l=n(68550);const i='import React from "react";\nimport { XphTable, TXphTableProps } from "xph-crud";\n\ninterface DataType {\n  key: React.Key;\n  name: string;\n  age: number;\n  address: string;\n  gender: "male" | "female";\n}\n\n/** \u6a21\u62df\u5206\u9875\u63a5\u53e3 */\nconst getTablePage = async (params) => {\n  console.log(params);\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve({\n        data: [\n          {\n            key: "1",\n            name: "\u80e1\u5f66\u658c",\n            age: 32,\n            address:\n              "new york street 1 new york street 1 new york street 1 new york street 1 new york street 1 new york street 1 new york street 1 new york street 1",\n            gender: "male",\n          },\n          {\n            key: "2",\n            name: "\u674e\u96f7",\n            age: 28,\n            address: "\u4e1c\u57ce\u533a\u4e1c\u534e\u95e8\u5927\u88572\u53f7",\n            gender: "male",\n          },\n          {\n            key: "3",\n            name: "\u97e9\u6885\u6885",\n            age: 30,\n            address: "\u5357\u5c71\u533a\u5357\u5c71\u8def3\u53f7",\n            gender: "female",\n          },\n        ],\n        current: 1,\n        pageSize: 20,\n        total: 3,\n        totalPage: 1,\n      });\n    }, 1000);\n  });\n};\n\nconst ReactApp: React.FC = () => {\n  const props: TXphTableProps<DataType> = {\n    table: {\n      columns: [\n        {\n          title: "\u6027\u522b",\n          dataIndex: "gender",\n          key: "gender",\n          cellFunc: [\n            {\n              component: "link",\n              componentProps: {\n                url: "https://www.taobao.com",\n              },\n            },\n            {\n              component: "tag",\n              componentProps: {\n                enums: [\n                  {\n                    label: "\u7537",\n                    value: "male",\n                    config: {\n                      color: "info",\n                    },\n                  },\n                  {\n                    label: "\u5973",\n                    value: "female",\n                    config: {\n                      color: "primary",\n                    },\n                  },\n                ],\n              },\n            },\n            {\n              component: "copy",\n              componentProps: {},\n            },\n          ],\n        },\n      ],\n      api: getTablePage,\n    },\n  };\n\n  return <XphTable<DataType> {...props} />;\n};\n\nexport default ReactApp;\n',c={},a=void 0,m={id:"comp/table/properties/table/properties/columns/properties/cellFunc/properties/component/multiComponent",title:"multiComponent",description:"\u591a\u7ec4\u4ef6\u6620\u5c04",source:"@site/docs/comp/table/properties/table/properties/columns/properties/cellFunc/properties/component/multiComponent.mdx",sourceDirName:"comp/table/properties/table/properties/columns/properties/cellFunc/properties/component",slug:"/comp/table/properties/table/properties/columns/properties/cellFunc/properties/component/multiComponent",permalink:"/xph-crud/docs/comp/table/properties/table/properties/columns/properties/cellFunc/properties/component/multiComponent",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},u={},P=[{value:"\u591a\u7ec4\u4ef6\u6620\u5c04",id:"\u591a\u7ec4\u4ef6\u6620\u5c04",level:2}];function d(e){const r={a:"a",h2:"h2",p:"p",...(0,o.R)(),...e.components};return s.fF||f("TableDemos",!1),s.fF.Properties||f("TableDemos.Properties",!1),s.fF.Properties.table||f("TableDemos.Properties.table",!1),s.fF.Properties.table.Properties||f("TableDemos.Properties.table.Properties",!1),s.fF.Properties.table.Properties.columns||f("TableDemos.Properties.table.Properties.columns",!1),s.fF.Properties.table.Properties.columns.Properties||f("TableDemos.Properties.table.Properties.columns.Properties",!1),s.fF.Properties.table.Properties.columns.Properties.cellFunc||f("TableDemos.Properties.table.Properties.columns.Properties.cellFunc",!1),s.fF.Properties.table.Properties.columns.Properties.cellFunc.Properties||f("TableDemos.Properties.table.Properties.columns.Properties.cellFunc.Properties",!1),s.fF.Properties.table.Properties.columns.Properties.cellFunc.Properties.component||f("TableDemos.Properties.table.Properties.columns.Properties.cellFunc.Properties.component",!1),s.fF.Properties.table.Properties.columns.Properties.cellFunc.Properties.component.MultiComponent||f("TableDemos.Properties.table.Properties.columns.Properties.cellFunc.Properties.component.MultiComponent",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"\u591a\u7ec4\u4ef6\u6620\u5c04",children:"\u591a\u7ec4\u4ef6\u6620\u5c04"}),"\n",(0,t.jsxs)(p.A,{rawStr:i,children:[(0,t.jsx)(s.fF.Properties.table.Properties.columns.Properties.cellFunc.Properties.component.MultiComponent,{}),(0,t.jsx)(l.A,{children:(0,t.jsxs)(r.p,{children:["cellFunc \u662f\u4e2a\u96c6\u5408\uff0c\u5217\u5185\u5bb9\u53ef\u7531\u591a\u4e2a\u7ec4\u4ef6\u7ec4\u5408\u800c\u6210\uff0c\u4f7f\u7528\u524d\u8bf7\u719f\u6089 ",(0,t.jsx)(r.a,{href:"/docs/comp/extends/base#%E6%89%A9%E5%B1%95%E5%8D%95%E5%85%83%E6%A0%BC%E6%98%A0%E5%B0%84%E5%86%85%E5%AE%B9%E7%9A%84%E8%A7%84%E8%8C%83",children:"cellFunc \u7684\u6e32\u67d3\u673a\u5236"}),"\u548c\u6e32\u67d3\u7ec4\u4ef6\u7684\u7279\u6027\u3002"]})})]})]})}function b(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}function f(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},79863:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>m,contentTitle:()=>c,default:()=>d,frontMatter:()=>i,metadata:()=>a,toc:()=>u});var t=n(86106),o=n(66205),s=n(16476),p=n(30870);const l='import React from "react";\nimport { XphTable, TXphTableProps } from "xph-crud";\n\ninterface DataType {\n  key: React.Key;\n  name: string;\n  age: number;\n  address: string;\n  gender: "male" | "female";\n}\n\n/** \u6a21\u62df\u5206\u9875\u63a5\u53e3 */\nconst getTablePage = async (params) => {\n  console.log(params);\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve({\n        data: [\n          {\n            key: "1",\n            name: "\u80e1\u5f66\u658c",\n            age: 32,\n            address:\n              "new york street 1 new york street 1 new york street 1 new york street 1 new york street 1 new york street 1 new york street 1 new york street 1",\n            gender: "male",\n          },\n          {\n            key: "2",\n            name: "\u674e\u96f7",\n            age: 28,\n            address: "\u4e1c\u57ce\u533a\u4e1c\u534e\u95e8\u5927\u88572\u53f7",\n            gender: "male",\n          },\n          {\n            key: "3",\n            name: "\u97e9\u6885\u6885",\n            age: 30,\n            address: "\u5357\u5c71\u533a\u5357\u5c71\u8def3\u53f7",\n            gender: "female",\n          },\n        ],\n        current: 1,\n        pageSize: 20,\n        total: 3,\n        totalPage: 1,\n      });\n    }, 1000);\n  });\n};\n\nconst ReactApp: React.FC = () => {\n  const props: TXphTableProps<DataType> = {\n    table: {\n      columns: [\n        {\n          title: "\u6027\u522b",\n          dataIndex: "gender",\n          key: "gender",\n          cellFunc: [\n            {\n              component: "tag",\n              componentProps: {\n                enums: [\n                  {\n                    label: "\u7537",\n                    value: "male",\n                    config: {\n                      color: "orange",\n                    },\n                  },\n                  {\n                    label: "\u5973",\n                    value: "female",\n                    config: {\n                      color: "purple",\n                    },\n                  },\n                ],\n              },\n            },\n          ],\n        },\n      ],\n      api: getTablePage,\n    },\n  };\n\n  return <XphTable<DataType> {...props} />;\n};\n\nexport default ReactApp;\n',i={},c=void 0,a={id:"comp/table/properties/table/properties/columns/properties/cellFunc/properties/component/tag",title:"tag",description:"tag",source:"@site/docs/comp/table/properties/table/properties/columns/properties/cellFunc/properties/component/tag.mdx",sourceDirName:"comp/table/properties/table/properties/columns/properties/cellFunc/properties/component",slug:"/comp/table/properties/table/properties/columns/properties/cellFunc/properties/component/tag",permalink:"/xph-crud/docs/comp/table/properties/table/properties/columns/properties/cellFunc/properties/component/tag",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},m={},u=[{value:"tag",id:"tag",level:3}];function P(e){const r={h3:"h3",...(0,o.R)(),...e.components};return s.fF||b("TableDemos",!1),s.fF.Properties||b("TableDemos.Properties",!1),s.fF.Properties.table||b("TableDemos.Properties.table",!1),s.fF.Properties.table.Properties||b("TableDemos.Properties.table.Properties",!1),s.fF.Properties.table.Properties.columns||b("TableDemos.Properties.table.Properties.columns",!1),s.fF.Properties.table.Properties.columns.Properties||b("TableDemos.Properties.table.Properties.columns.Properties",!1),s.fF.Properties.table.Properties.columns.Properties.cellFunc||b("TableDemos.Properties.table.Properties.columns.Properties.cellFunc",!1),s.fF.Properties.table.Properties.columns.Properties.cellFunc.Properties||b("TableDemos.Properties.table.Properties.columns.Properties.cellFunc.Properties",!1),s.fF.Properties.table.Properties.columns.Properties.cellFunc.Properties.component||b("TableDemos.Properties.table.Properties.columns.Properties.cellFunc.Properties.component",!1),s.fF.Properties.table.Properties.columns.Properties.cellFunc.Properties.component.Tag||b("TableDemos.Properties.table.Properties.columns.Properties.cellFunc.Properties.component.Tag",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h3,{id:"tag",children:"tag"}),"\n",(0,t.jsx)(p.A,{rawStr:l,children:(0,t.jsx)(s.fF.Properties.table.Properties.columns.Properties.cellFunc.Properties.component.Tag,{})})]})}function d(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(P,{...e})}):P(e)}function b(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},68550:(e,r,n)=>{n.d(r,{A:()=>s});n(7378);var t=n(51235),o=n(86106);const s=e=>{let{children:r,title:n}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.A,{orientation:"left",children:n||"tips"}),r]})}}}]);