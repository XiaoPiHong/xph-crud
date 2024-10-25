"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8966],{38310:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>m,contentTitle:()=>c,default:()=>f,frontMatter:()=>p,metadata:()=>i,toc:()=>d});var o=t(86106),r=t(66205),a=t(90310),s=t(36899);const l='import React, { useRef } from "react";\nimport { XphTable, TXphTableProps, TXphTableActionType } from "xph-crud";\n\ninterface DataType {\n  key: React.Key;\n  name: string;\n  age: number;\n  address: string;\n  gender: "male" | "female";\n}\n\nconst ReactApp: React.FC = () => {\n  const props: TXphTableProps<DataType> = {\n    table: {\n      fullHeight: true,\n      columns: [\n        {\n          title: "\u59d3\u540d",\n          dataIndex: "name",\n          key: "name",\n        },\n        {\n          title: "\u6027\u522b",\n          dataIndex: "gender",\n          key: "gender",\n          cellFunc: [\n            {\n              component: "tag",\n              componentProps: {\n                enums: [\n                  {\n                    label: "\u7537",\n                    value: "male",\n                    config: {\n                      color: "info",\n                    },\n                  },\n                  {\n                    label: "\u5973",\n                    value: "female",\n                    config: {\n                      color: "primary",\n                    },\n                  },\n                ],\n              },\n            },\n          ],\n        },\n        {\n          title: "\u5730\u5740",\n          dataIndex: "address",\n          key: "address",\n          width: 300,\n          ellipsis: true,\n        },\n        {\n          title: "\u5e74\u9f84",\n          dataIndex: "age",\n          key: "age",\n        },\n        {\n          title: "\u64cd\u4f5c",\n          dataIndex: "actions",\n          fixed: "right",\n          width: 300,\n          cellFunc: ({ record }) => [\n            {\n              component: "actions",\n              componentProps: {\n                type: "dashed",\n                max: 2,\n                items: [\n                  {\n                    key: "edit",\n                    component: "Button",\n                    componentProps: {\n                      children: "\u7f16\u8f91",\n                      onClick: (e) => {\n                        xphTableRef.current?.open({\n                          data: record,\n                          ok: async ({ values }) => {\n                            return new Promise((resolve) => {\n                              setTimeout(() => {\n                                resolve(values);\n                              }, 3000);\n                            });\n                          },\n                          cancel: async ({ values }) => {\n                            console.log(values);\n                          },\n                        });\n                      },\n                    },\n                  },\n                ],\n              },\n            },\n          ],\n        },\n      ],\n      autoPagination: true,\n      api: async (params) => {\n        return new Promise((resolve) => {\n          setTimeout(() => {\n            resolve([\n              {\n                key: "1",\n                name: "\u80e1\u5f66\u658c",\n                age: 32,\n                address:\n                  "new york street 1 new york street 1 new york street 1 new york street 1 new york street 1 new york street 1 new york street 1 new york street 1",\n                gender: "male",\n              },\n              {\n                key: "2",\n                name: "\u674e\u96f7",\n                age: 28,\n                address: "\u4e1c\u57ce\u533a\u4e1c\u534e\u95e8\u5927\u88572\u53f7",\n                gender: "male",\n              },\n              {\n                key: "3",\n                name: "\u97e9\u6885\u6885",\n                age: 30,\n                address: "\u5357\u5c71\u533a\u5357\u5c71\u8def3\u53f7",\n                gender: "female",\n              },\n            ]);\n          }, 2000);\n        });\n      },\n      toolbar: {\n        type: "primary",\n        max: 2,\n        items: [\n          {\n            key: "add",\n            component: "Button",\n            componentProps: {\n              children: "\u65b0\u589e",\n              onClick: (e) => {\n                xphTableRef.current?.open({\n                  data: null,\n                  ok: async ({ values }) => {\n                    return new Promise((resolve) => {\n                      setTimeout(() => {\n                        resolve(values);\n                      }, 3000);\n                    });\n                  },\n                  cancel: async ({ values }) => {\n                    console.log(values);\n                  },\n                });\n              },\n            },\n          },\n        ],\n      },\n    },\n    searchForm: {\n      colProps: { span: 6 },\n      showSearch: true,\n      items: [\n        {\n          name: "name",\n          label: "\u59d3\u540d",\n          component: "Input",\n          componentProps: {},\n        },\n      ],\n    },\n    crudFormDialog: {\n      title: "\u7528\u6237",\n      getPopperContainer: () =>\n        document.getElementById("docs-comp-table-properties-ref"),\n      formProps: {\n        items: [\n          {\n            name: "name",\n            label: "\u59d3\u540d",\n            component: "Input",\n            required: true,\n            initialValue: "",\n            componentProps: {},\n            colProps: { span: 12 },\n          },\n          {\n            name: "gender",\n            label: "\u6027\u522b",\n            component: "Select",\n            required: true,\n            componentProps: {\n              options: [\n                {\n                  label: "\u7537",\n                  value: "male",\n                },\n                {\n                  label: "\u5973",\n                  value: "female",\n                },\n              ],\n            },\n            colProps: { span: 12 },\n          },\n          {\n            name: "address",\n            label: "\u5730\u5740",\n            component: "InputTextArea",\n            required: true,\n            componentProps: {\n              autoSize: {\n                minRows: 5,\n                maxRows: 5,\n              },\n            },\n          },\n        ],\n      },\n    },\n  };\n\n  const xphTableRef = useRef<TXphTableActionType>(null);\n\n  return (\n    <div\n      id="docs-comp-table-properties-ref"\n      style={{ width: "100%", height: "600px", position: "relative" }}\n    >\n      <XphTable<DataType> ref={xphTableRef} {...props} />\n    </div>\n  );\n};\n\nexport default ReactApp;\n',p={},c=void 0,i={id:"comp/table/properties/ref",title:"ref",description:"instance",source:"@site/docs/comp/table/properties/ref.mdx",sourceDirName:"comp/table/properties",slug:"/comp/table/properties/ref",permalink:"/xph-crud/docs/comp/table/properties/ref",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},m={},d=[{value:"instance",id:"instance",level:3}];function u(n){const e={h3:"h3",...(0,r.R)(),...n.components};return a.fF||y("TableDemos",!1),a.fF.Properties||y("TableDemos.Properties",!1),a.fF.Properties.Ref||y("TableDemos.Properties.Ref",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(e.h3,{id:"instance",children:"instance"}),"\n",(0,o.jsx)(s.A,{rawStr:l,children:(0,o.jsx)(a.fF.Properties.Ref,{})})]})}function f(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,o.jsx)(e,{...n,children:(0,o.jsx)(u,{...n})}):u(n)}function y(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);