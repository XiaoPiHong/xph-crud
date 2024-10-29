"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5671],{49277:(n,o,e)=>{e.r(o),e.d(o,{assets:()=>P,contentTitle:()=>x,default:()=>g,frontMatter:()=>u,metadata:()=>C,toc:()=>y});var r=e(86106),p=e(66205),t=e(36899),s=e(9829),l=e(76358);const c='import React from "react";\nimport { XphForm, XphExtendCompPropsProvider } from "xph-crud";\n\nconst MyButton = ({ children }) => {\n  return <button>{children}</button>;\n};\n\nconst MyInput = ({ placeholder }) => {\n  return <input placeholder={placeholder}></input>;\n};\n\n/**\n * \u8868\u5355\u9879\u7684\u6620\u5c04\u5bf9\u8c61\n */\nconst myComponentMap = {\n  MyButton,\n  MyInput,\n};\n\nconst ReactApp: React.FC = () => {\n  const props = {\n    labelCol: { span: 6 },\n    wrapperCol: { span: 18 },\n    items: [\n      {\n        name: "MyButton",\n        label: "MyButton",\n        component: "MyButton",\n        colProps: { span: 8 },\n        componentProps: {\n          children: "\u6211\u662f\u81ea\u5b9a\u4e49\u7684\u6309\u94ae",\n        },\n      },\n      {\n        name: "MyInput",\n        label: "MyInput",\n        component: "MyInput",\n        colProps: { span: 8 },\n        componentProps: {\n          placeholder: "\u6211\u662f\u81ea\u5b9a\u4e49\u7684\u8f93\u5165\u6846",\n        },\n      },\n    ],\n  };\n\n  return (\n    <div style={{ minWidth: "1400px" }}>\n      <XphExtendCompPropsProvider\n        value={{ extendComp: { form: myComponentMap } }}\n      >\n        <XphForm {...props}></XphForm>\n      </XphExtendCompPropsProvider>\n    </div>\n  );\n};\n\nexport default ReactApp;\n',i='import React from "react";\nimport {\n  XphForm,\n  IXphFormActionType,\n  XphExtendCompPropsProvider,\n} from "xph-crud";\n\n/** \u81ea\u5b9a\u4e49\u8868\u5355\u9879\u7684\u5c5e\u6027 */\ninterface IMyInputProps {\n  /** input\u8fb9\u6846\u7684\u989c\u8272 */\n  borderColor?: string;\n  /** \u63d0\u793a\u8bed */\n  placeholder?: string;\n  /** onChange\u662f\u9ed8\u8ba4\u900f\u4f20\u8fdb\u6765\u7684\uff0c\u5982\u679c\u8868\u5355model\u9700\u8981\u6355\u83b7\u5f53\u524d\u81ea\u5b9a\u4e49\u9879\u7684\u503c\uff0c\u9700\u8981\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5185\u90e8\u624b\u52a8\u89e6\u53d1onChange\u4e8b\u4ef6\uff0c\u5e76\u4e14\u5c06\u503c\u4f20\u9012\u7ed9\u5176\u9996\u4e2a\u53c2\u6570 */\n  onChange?: (...args) => void;\n}\n\n/**\n * \u81ea\u5b9a\u4e49\u8868\u5355\u9879\n * \uff08myInputProps\u5c31\u662f\u521d\u59cb\u5316\u65f6\u5019\u5f53\u524d\u5bf9\u5e94\u9879\u7684componentProps\uff09\n */\nconst MyInput = (myInputProps: IMyInputProps) => {\n  const { borderColor, onChange, placeholder } = myInputProps;\n  const onInputChange = (e) => {\n    const {\n      target: { value },\n    } = e;\n    /** \u624b\u52a8\u89e6\u53d1onChange\u6539\u53d8\u8868\u5355\u9879\u5bf9\u5e94\u7684\u503c,\u5c06\u8868\u5355\u9700\u8981\u6355\u83b7\u5230\u7684\u503c\u4f20\u9012\u5230\u5176\u9996\u4e2a\u53c2\u6570 */\n    onChange && onChange(value);\n  };\n  return (\n    <input\n      onInput={onInputChange}\n      placeholder={placeholder}\n      style={{ borderColor: borderColor ? borderColor : "black" }}\n    />\n  );\n};\n\n/**\n * \u8868\u5355\u9879\u7684\u6620\u5c04\u5bf9\u8c61\n */\nconst myComponentMap = {\n  MyInput,\n};\n\nconst ReactApp: React.FC = () => {\n  const props = {\n    labelCol: { span: 6 },\n    wrapperCol: { span: 18 },\n    items: [\n      {\n        name: "MyInput",\n        label: "MyInput",\n        component: "MyInput",\n        colProps: { span: 8 },\n        componentProps: {\n          /** \u6b64\u5904\u7684\u5c5e\u6027\u90fd\u4f1a\u4f20\u9012\u7ed9myInputProps */\n          borderColor: "red",\n          placeholder: "\u6211\u662f\u81ea\u5b9a\u4e49\u7684\u8f93\u5165\u6846",\n        },\n      },\n      {\n        name: "Button",\n        label: "\u83b7\u53d6\u8868\u5355\u503c",\n        component: "Button",\n        colProps: { span: 8 },\n        componentProps: {\n          children: "\u70b9\u51fb\u6211\u83b7\u53d6\u8868\u5355\u7684\u503c",\n          onClick: async () => {\n            console.log(reactFormRef.current?.getFieldsValue(true));\n          },\n        },\n      },\n    ],\n  };\n\n  const reactFormRef = React.useRef<IXphFormActionType>(null);\n\n  return (\n    <div style={{ minWidth: "1400px" }}>\n      <XphExtendCompPropsProvider\n        value={{ extendComp: { form: myComponentMap } }}\n      >\n        <XphForm ref={reactFormRef} {...props}></XphForm>\n      </XphExtendCompPropsProvider>\n    </div>\n  );\n};\n\nexport default ReactApp;\n',d='import React from "react";\nimport { XphTable, IXphMainProps, XphExtendCompPropsProvider } from "xph-crud";\n\n/** \u81ea\u5b9a\u4e49\u5355\u5143\u683c\u5185\u5bb9\u7684\u5c5e\u6027 */\ninterface IMyTagProps {\n  children?: string;\n  borderColor?: string;\n}\n\n/** \u81ea\u5b9a\u4e49\u5355\u5143\u683c\u5185\u5bb9\u7ec4\u4ef6 */\nconst MyTag = (\n  Comp: React.JSXElementConstructor<any>,\n  curCellFuncProps: { curComponentProps: IMyTagProps },\n  mainProps: IXphMainProps\n) => {\n  const { curComponentProps } = curCellFuncProps;\n\n  const { borderColor = "blue", children = "" } = curComponentProps!;\n  return (\n    <div\n      style={{\n        display: "flex",\n        alignItems: "center",\n        flexWrap: "wrap",\n        border: `1px solid ${borderColor}`,\n      }}\n    >\n      <Comp {...mainProps} />\n      {children}\n    </div>\n  );\n};\n\n/**\n * \u5355\u5143\u683c\u5185\u5bb9\u6620\u5c04\u5bf9\u8c61\n */\nconst myCellFuncComponentMap = {\n  myTag: MyTag,\n};\n\nconst ReactApp: React.FC = () => {\n  const props: any = {\n    table: {\n      rowSelection: {\n        type: "checkbox",\n      },\n      fullHeight: true,\n      columns: [\n        {\n          title: "\u59d3\u540d",\n          dataIndex: "name",\n          key: "name",\n          cellFunc: [\n            {\n              component: "link",\n              componentProps: {\n                url: "https://www.taobao.com",\n              },\n            },\n            {\n              component: "myTag",\n              componentProps: {\n                // \u6b64\u5904\u7684\u5c5e\u6027\u90fd\u4f1a\u4f20\u9012\u7ed9curComponentProps\n                children: "\u968f\u4fbf\u52a0\u7684\u5185\u5bb9",\n                borderColor: "orange",\n              },\n            },\n          ],\n        },\n      ],\n      autoPagination: true,\n      api: async (params) => {\n        return new Promise((resolve) => {\n          setTimeout(() => {\n            resolve([\n              {\n                key: "1",\n                name: "\u80e1\u5f66\u658c",\n                age: 32,\n                address: "\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7",\n              },\n            ]);\n          }, 2000);\n        });\n      },\n    },\n  };\n\n  return (\n    <div style={{ minWidth: "800px", height: "300px" }}>\n      <XphExtendCompPropsProvider\n        value={{ extendComp: { tableCellFunc: myCellFuncComponentMap } }}\n      >\n        <XphTable {...props} />\n      </XphExtendCompPropsProvider>\n    </div>\n  );\n};\n\nexport default ReactApp;\n',a='import React from "react";\nimport { XphActions, XphExtendCompPropsProvider } from "xph-crud";\n\n/**\n * \u81ea\u5b9a\u4e49\u64cd\u4f5c\u7ec4\u5185\u5bb9\u7684\u5c5e\u6027\n * */\ninterface IMyButtonProps {\n  children: string;\n  onClick?: (e: any) => void;\n}\n\n/**\n * \u81ea\u5b9a\u4e49\u64cd\u4f5c\u7ec4\u5185\u5bb9\u7ec4\u4ef6\n */\nconst MyButton = ({\n  componentProps,\n  component,\n}: {\n  componentProps: IMyButtonProps;\n  component: "MyButton";\n}) => {\n  console.log(component);\n  const { children, onClick } = componentProps;\n  return <button onClick={onClick}>{children}</button>;\n};\n\n/**\n * \u64cd\u4f5c\u7ec4\u6620\u5c04\u5bf9\u8c61\n */\nconst myActionsComponentMap = {\n  MyButton,\n};\n\nconst ReactApp: React.FC = () => {\n  const props: any = {\n    type: "dashed",\n    max: 1,\n    items: [\n      {\n        component: "MyButton",\n        componentProps: {\n          // \u6b64\u5904\u7684\u5c5e\u6027\u90fd\u4f1a\u4f20\u9012\u7ed9myButtonProps\n          children: "\u6211\u662f\u81ea\u5b9a\u4e49\u7684\u6309\u94ae",\n          onClick: (e) => {\n            console.log(e);\n          },\n        },\n      },\n    ],\n  };\n\n  return (\n    <div style={{ display: "flex", gap: "8px" }}>\n      <XphExtendCompPropsProvider\n        value={{ extendComp: { actions: myActionsComponentMap } }}\n      >\n        <XphActions {...props} />\n      </XphExtendCompPropsProvider>\n    </div>\n  );\n};\n\nexport default ReactApp;\n',m='import React from "react";\nimport { XphForm, XphExtendCompPropsProvider } from "xph-crud";\n\ninterface IMyInputProps {\n  borderColor?: string;\n  placeholder?: string;\n  onChange?: (...args) => void;\n}\n\nconst MyInput = (myInputProps: IMyInputProps) => {\n  const { borderColor, onChange, placeholder } = myInputProps;\n  const onInputChange = (e) => {\n    const {\n      target: { value },\n    } = e;\n    onChange && onChange(value);\n  };\n  return (\n    <input\n      onInput={onInputChange}\n      placeholder={placeholder}\n      style={{ borderColor: borderColor ? borderColor : "black" }}\n    />\n  );\n};\n\nconst myComponentMap = {\n  MyInput,\n};\n\nconst ReactApp: React.FC = () => {\n  const props: INewXphFormProps = {\n    labelCol: { span: 6 },\n    wrapperCol: { span: 18 },\n    items: [\n      {\n        name: "MyInput",\n        label: "MyInput",\n        component: "MyInput",\n        colProps: { span: 8 },\n        componentProps: {\n          borderColor: "red",\n          placeholder: "\u6211\u662f\u81ea\u5b9a\u4e49\u7684\u8f93\u5165\u6846",\n        },\n      },\n    ],\n  };\n\n  return (\n    <div style={{ minWidth: "1400px" }}>\n      <XphExtendCompPropsProvider\n        value={{ extendComp: { form: myComponentMap } }}\n      >\n        <XphForm {...props}></XphForm>\n      </XphExtendCompPropsProvider>\n    </div>\n  );\n};\n\nexport default ReactApp;\n',h='/**\n * xph-crud.d.ts\n */\nimport { IXphFormProps, IXphActionsProps, TXphTableProps } from "xph-crud";\n\n/** \u8fd9\u662f\u81ea\u5b9a\u4e49\u8868\u5355\u9879\u7684\u5c5e\u6027\u6620\u5c04\uff0c\u6839\u636e\u81ea\u5df1\u800c\u5b9a */\ninterface MyFormComponentPropsMap {\n  MyInput: {\n    borderColor?: string;\n    onChange?: (...args) => void;\n  };\n}\n\n/** \u82e5\u9700\u81ea\u5df1\u6269\u5c55\u7ec4\u4ef6\uff0c\u53ef\u4ee5\u5728\u8fd9\u91cc\u58f0\u660e\u7c7b\u578b(\u58f0\u660e\u540e\u4f7f\u7528\u8be5\u7c7b\u578b\u5b9a\u4e49\u53d8\u91cf\u624d\u80fd\u83b7\u5f97\u6269\u5c55\u7684\u7ec4\u4ef6\u7c7b\u578b) */\ndeclare global {\n  /** \u8868\u5355\u7684\u6620\u5c04 */\n  interface INewXphFormProps extends IXphFormProps<MyFormComponentPropsMap> {}\n  /** \u64cd\u4f5c\u7ec4\u7684\u6620\u5c04 */\n  interface INewXphActionsProps\n    extends IXphActionsProps<{ MyComponentName: {} }> {}\n  /** \u8868\u683c\u7684\u6620\u5c04 */\n  type TNewXphTableProps<T = unknown> = TXphTableProps<\n    T,\n    {\n      MyCellFuncComponentName: {};\n    },\n    {\n      MyActionsComponentName: {};\n    },\n    {\n      MyToolbarComponentName: {};\n    },\n    MyFormComponentPropsMap\n  >;\n}\n',u={},x="\u6269\u5c55\u81ea\u5b9a\u4e49\u7ec4\u4ef6",C={id:"comp/extends/base",title:"\u6269\u5c55\u81ea\u5b9a\u4e49\u7ec4\u4ef6",description:"\u6269\u5c55 XphForm \u8868\u5355\u9879",source:"@site/docs/comp/extends/base.mdx",sourceDirName:"comp/extends",slug:"/comp/extends/base",permalink:"/xph-crud/docs/comp/extends/base",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"extends"},P={},y=[{value:"\u6269\u5c55 XphForm \u8868\u5355\u9879",id:"\u6269\u5c55-xphform-\u8868\u5355\u9879",level:2},{value:"\u6269\u5c55\u8868\u5355\u9879",id:"\u6269\u5c55\u8868\u5355\u9879",level:3},{value:"\u6269\u5c55\u8868\u5355\u9879\u7684\u89c4\u8303",id:"\u6269\u5c55\u8868\u5355\u9879\u7684\u89c4\u8303",level:3},{value:"\u6269\u5c55 XphTable \u5355\u5143\u683c\u6620\u5c04\u5185\u5bb9",id:"\u6269\u5c55-xphtable-\u5355\u5143\u683c\u6620\u5c04\u5185\u5bb9",level:2},{value:"\u6269\u5c55\u5355\u5143\u683c\u6620\u5c04\u5185\u5bb9",id:"\u6269\u5c55\u5355\u5143\u683c\u6620\u5c04\u5185\u5bb9",level:3},{value:"\u6269\u5c55\u5355\u5143\u683c\u6620\u5c04\u5185\u5bb9\u7684\u89c4\u8303",id:"\u6269\u5c55\u5355\u5143\u683c\u6620\u5c04\u5185\u5bb9\u7684\u89c4\u8303",level:3},{value:"\u7ec4\u4ef6\u5904\u7406\u673a\u5236",id:"\u7ec4\u4ef6\u5904\u7406\u673a\u5236",level:4},{value:"\u7ec4\u4ef6\u6e32\u67d3\u673a\u5236",id:"\u7ec4\u4ef6\u6e32\u67d3\u673a\u5236",level:4},{value:"\u6269\u5c55\u89c4\u8303",id:"\u6269\u5c55\u89c4\u8303",level:4},{value:"\u6269\u5c55 XphActions \u64cd\u4f5c\u7ec4\u6620\u5c04\u5185\u5bb9",id:"\u6269\u5c55-xphactions-\u64cd\u4f5c\u7ec4\u6620\u5c04\u5185\u5bb9",level:2},{value:"\u6269\u5c55\u64cd\u4f5c\u7ec4\u6620\u5c04\u5185\u5bb9",id:"\u6269\u5c55\u64cd\u4f5c\u7ec4\u6620\u5c04\u5185\u5bb9",level:3},{value:"ts \u7c7b\u578b\u8c03\u6574",id:"ts-\u7c7b\u578b\u8c03\u6574",level:2},{value:"\u521b\u5efa\u5168\u5c40\u7c7b\u578b INewXphFormProps",id:"\u521b\u5efa\u5168\u5c40\u7c7b\u578b-inewxphformprops",level:3},{value:"\u4f8b\u5b50",id:"\u4f8b\u5b50",level:3}];function v(n){const o={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",mermaid:"mermaid",ol:"ol",p:"p",pre:"pre",...(0,p.R)(),...n.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.header,{children:(0,r.jsx)(o.h1,{id:"\u6269\u5c55\u81ea\u5b9a\u4e49\u7ec4\u4ef6",children:"\u6269\u5c55\u81ea\u5b9a\u4e49\u7ec4\u4ef6"})}),"\n",(0,r.jsx)(o.h2,{id:"\u6269\u5c55-xphform-\u8868\u5355\u9879",children:"\u6269\u5c55 XphForm \u8868\u5355\u9879"}),"\n",(0,r.jsx)(o.h3,{id:"\u6269\u5c55\u8868\u5355\u9879",children:"\u6269\u5c55\u8868\u5355\u9879"}),"\n",(0,r.jsxs)(o.p,{children:["\u5982\u679c\u5f53\u524d ",(0,r.jsx)(o.code,{children:"XphForm"})," \u7ec4\u4ef6\u7684\u6240\u6709\u8868\u5355\u9879\u90fd\u6ee1\u8db3\u4e0d\u4e86\u4f60\uff0c",(0,r.jsx)(o.code,{children:"xph-crud"})," \u8fd8\u63d0\u4f9b",(0,r.jsx)(o.code,{children:"XphExtendCompPropsProvider"}),"\u6765\u6269\u5c55\u8868\u5355\u9879\uff0c\u4f60\u53ea\u9700\u8981\u4f7f\u7528",(0,r.jsx)(o.code,{children:"XphExtendCompPropsProvider"}),"\u6765\u5305\u88f9\u4f60\u7684\u5e94\u7528\uff0c\u5e76\u4e14\u4e3a\u5176\u63d0\u4f9b\u4e00\u4e2a\u8868\u5355\u9879\u7684\u6620\u5c04\u5bf9\u8c61\u5373\u53ef\uff0c\u8be6\u7ec6\u8bf7\u770b\u4e0b\u65b9\u4ee3\u7801\u5757\uff1a"]}),"\n",(0,r.jsx)(t.A,{rawStr:c,children:(0,r.jsx)(l.N4,{})}),"\n",(0,r.jsx)(o.h3,{id:"\u6269\u5c55\u8868\u5355\u9879\u7684\u89c4\u8303",children:"\u6269\u5c55\u8868\u5355\u9879\u7684\u89c4\u8303"}),"\n",(0,r.jsx)(t.A,{rawStr:i,children:(0,r.jsx)(l.tJ,{})}),"\n",(0,r.jsx)(o.admonition,{type:"tip",children:(0,r.jsxs)(o.p,{children:["\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f TypeSctipt\uff0c\u6269\u5c55\u8868\u5355\u9879\u540e\uff0c\u56e0\u4e3a",(0,r.jsx)(o.code,{children:"IXphFormProps"}),"\u7c7b\u578b\u4e2d\u4e0d\u5305\u542b\u4f60\u6269\u5c55\u8868\u5355\u9879\u7684\u7c7b\u578b\uff0c\u6240\u4ee5\u9700\u8981\u91cd\u65b0\u5b9a\u4e49\u4e00\u4e0b\u7c7b\u578b\u6765\u4f7f\u7528\uff0c\u8be6\u7ec6\u53ef\u770b\u4e0b\u65b9 ts \u7c7b\u578b\u8c03\u6574\u3002"]})}),"\n",(0,r.jsx)(o.h2,{id:"\u6269\u5c55-xphtable-\u5355\u5143\u683c\u6620\u5c04\u5185\u5bb9",children:"\u6269\u5c55 XphTable \u5355\u5143\u683c\u6620\u5c04\u5185\u5bb9"}),"\n",(0,r.jsx)(o.h3,{id:"\u6269\u5c55\u5355\u5143\u683c\u6620\u5c04\u5185\u5bb9",children:"\u6269\u5c55\u5355\u5143\u683c\u6620\u5c04\u5185\u5bb9"}),"\n",(0,r.jsxs)(o.p,{children:["\u540c\u7406\uff0c",(0,r.jsx)(o.code,{children:"XphTable"}),"\u4e2d\u7684\u6620\u5c04\u5185\u5bb9\u4e5f\u662f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u7684\uff0c\u4e5f\u662f\u901a\u8fc7\u7ed9",(0,r.jsx)(o.code,{children:"XphExtendCompPropsProvider"}),"\u6dfb\u52a0\u5355\u5143\u683c\u6620\u5c04\u5bf9\u8c61\u5373\u53ef\u7684\u65b9\u5f0f\u3002"]}),"\n",(0,r.jsx)(t.A,{rawStr:d,children:(0,r.jsx)(l.p1,{})}),"\n",(0,r.jsx)(o.h3,{id:"\u6269\u5c55\u5355\u5143\u683c\u6620\u5c04\u5185\u5bb9\u7684\u89c4\u8303",children:"\u6269\u5c55\u5355\u5143\u683c\u6620\u5c04\u5185\u5bb9\u7684\u89c4\u8303"}),"\n",(0,r.jsx)(o.h4,{id:"\u7ec4\u4ef6\u5904\u7406\u673a\u5236",children:"\u7ec4\u4ef6\u5904\u7406\u673a\u5236"}),"\n",(0,r.jsx)(o.p,{children:"\u5185\u90e8\u7684 CellFunc \u7ec4\u4ef6\u4f1a\u904d\u5386 cellFunc \u8fd9\u4e2a\u6570\u7ec4\uff0c\u9010\u6b65\u5c06\u6700\u5e95\u5c42\u7684 BottomCellFunc \u7ec4\u4ef6\u5904\u7406\u6210\u6700\u7ec8\u6e32\u67d3\u5728\u9875\u9762\u7684\u7ec4\u4ef6\uff0c\u5904\u7406\u987a\u5e8f\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)("div",{style:{textAlign:"center"},children:(0,r.jsx)(o.mermaid,{value:"graph TD;\nBottomCellFunc--\x3elink--\x3emyTag;"})}),"\n",(0,r.jsx)(o.h4,{id:"\u7ec4\u4ef6\u6e32\u67d3\u673a\u5236",children:"\u7ec4\u4ef6\u6e32\u67d3\u673a\u5236"}),"\n",(0,r.jsx)(o.p,{children:"\u7531\u4e8e\u662f\u6309\u987a\u5e8f\u5904\u7406\u5b8c\u518d\u6e32\u67d3\uff0c\u6240\u4ee5 cellFunc \u6570\u7ec4\u6620\u5c04\u7684\u7ec4\u4ef6\u6e32\u67d3\u662f\u6709\u987a\u5e8f\u4e4b\u5206\u7684\uff0c\u6e32\u67d3\u987a\u5e8f\u5982\u4e0b\uff1a"}),"\n",(0,r.jsx)("div",{style:{textAlign:"center"},children:(0,r.jsx)(o.mermaid,{value:"graph TD;\nmyTag--\x3elink--\x3eBottomCellFunc;"})}),"\n",(0,r.jsx)(o.h4,{id:"\u6269\u5c55\u89c4\u8303",children:"\u6269\u5c55\u89c4\u8303"}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-tsx",children:'import React from "react";\nimport { IXphMainProps } from "xph-crud";\n\ninterface IMyTagProps {\n  children?: string;\n  borderColor?: string;\n}\n\n/**\n * @params Comp - \u4e0a\u4e00\u6b21\u5904\u7406\u540e\u7684\u7ec4\u4ef6\n * @params curCellFuncProps - \u5f53\u524d\u9879\u76f8\u5173\u5c5e\u6027\n * @params mainProps - \u900f\u4f20\u7ed9\u6700\u5e95\u5c42\u7ec4\u4ef6\u7684\u5c5e\u6027\n */\nconst MyTag = (\n  Comp: React.JSXElementConstructor<any>,\n  curCellFuncProps: { curComponentProps: IMyTagProps },\n  mainProps: IXphMainProps\n) => {\n  /**\n   * curCellFuncProps\u662f\u5305\u542b\u5f53\u524d\u81ea\u5b9a\u4e49\u9879componentProps\u7684\u53c2\u6570\uff0c\u53ef\u4ee5\u4ece\u4e2d\u53d6\u5230\u5916\u90e8\u900f\u4f20\u8fdb\u6765\u7684\u5c5e\u6027\u8fdb\u884c\u4e1a\u52a1\u4ee3\u7801\u7f16\u5199\n   */\n  const { curComponentProps } = curCellFuncProps;\n\n  const { borderColor = "blue", children = "" } = curComponentProps!;\n  return (\n    <div\n      style={{\n        display: "flex",\n        alignItems: "center",\n        flexWrap: "wrap",\n        border: `1px solid ${borderColor}`,\n      }}\n    >\n      {/** \n      1\u3001Comp\u662f\u4fdd\u6301\u6e32\u67d3\u94fe\u7684\u6865\u6881\uff0c\u53ea\u6709\u5f53Comp\u7ec4\u4ef6\u88ab\u6e32\u67d3\u65f6\uff0c\u624d\u80fd\u4fdd\u6301\u6e32\u67d3\u94fe\u4e0d\u88ab\u4e2d\u65ad\uff0c\u6240\u4ee5\u5728\u5199\u4f60\u7684\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u65f6\uff0c\u8fd9\u4e2aComp\u5c5e\u6027\u662f\u5fc5\u987b\u4f7f\u7528\u5728\u7ec4\u4ef6\u4e0a\u7684(\u5f53\u7136\u7279\u6b8a\u60c5\u51b5\u9664\u5916\uff0c\u9664\u975e\u4f60\u53ea\u60f3\u6e32\u67d3\u8fd9\u4e2a\u81ea\u5b9a\u4e49\u7684\u7ec4\u4ef6) \n\n      2\u3001mainProps\u662f\u6e32\u67d3\u94fe\u4e2d\u6e32\u67d3\u540e\u65b9\u4f20\u9012\u7ed9\u6700\u5e95\u5c42BottomCellFunc\u7ec4\u4ef6\u7684\u5c5e\u6027\uff0c\u76ee\u7684\u662f\u4e3a\u4e86\u4f7f\u5f53\u524d\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u80fd\u591f\u5f71\u54cd\u5230BottomCellFunc\u7ec4\u4ef6\u7684\u4e8b\u4ef6\u548c\u6837\u5f0f\uff0c\u6240\u4ee5mainProps\u662f\u4fdd\u6301\u6e32\u67d3\u94fe\u4e2d\u4e8b\u4ef6\u548c\u6837\u5f0f\u80fd\u591f\u6b63\u786e\u6267\u884c\u5c5e\u6027\uff0c\u5b83\u5fc5\u987b\u5728\u6269\u5c55\u7ec4\u4ef6\u5185\u90e8\u89e3\u6784\u4f20\u9012\u7ed9Comp\u7ec4\u4ef6\uff08\u6ce8\u610f\uff1a\u5982\u679c\u5f53\u524d\u6269\u5c55\u7684\u7ec4\u4ef6\u5185\u90e8\u9700\u8981\u5f71\u54cd\u5230\u5e95\u5c42BottomCellFunc\uff0c\u5fc5\u987b\u8981\u4fdd\u8bc1\u5176\u4ed6\u6620\u5c04\u7ec4\u4ef6\u7684\u6b63\u5e38\u8c03\u7528\uff0cXphTable\u5185\u90e8\u7684link\u7ec4\u4ef6\u5c31\u662f\u4e00\u4e2a\u5f88\u597d\u7684\u4f8b\u5b50\uff09\n      */}\n      <Comp {...mainProps} />\n      {children}\n    </div>\n  );\n};\n'})}),"\n",(0,r.jsxs)(o.admonition,{type:"warning",children:[(0,r.jsx)(o.p,{children:"\u603b\u7684\u6765\u8bf4\u89c4\u8303\u6709\u4e09\u70b9\uff1a"}),(0,r.jsxs)(o.ol,{children:["\n",(0,r.jsx)(o.li,{children:"\u5fc5\u987b\u4fdd\u8bc1\u6269\u5c55\u7ec4\u4ef6\u4e2d\u7684\u9996\u4e2a\u53c2\u6570 Comp \u88ab\u6e32\u67d3\u6765\u4fdd\u6301\u6e32\u67d3\u94fe"}),"\n",(0,r.jsx)(o.li,{children:"\u5fc5\u987b\u4fdd\u8bc1\u6269\u5c55\u7ec4\u4ef6\u4e2d\u7684\u7b2c\u4e09\u4e2a\u53c2\u6570 mainProps \u89e3\u6784\u4f20\u9012\u7ed9 Comp \u7ec4\u4ef6"}),"\n",(0,r.jsx)(o.li,{children:"\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u5728\u9700\u8981\u4f20\u9012\u81ea\u5df1\u7684 mainProps \u7ed9\u5e95\u5c42\u7684 BottomCellFunc \u7ec4\u4ef6\u65f6\uff0c\u5fc5\u987b\u4fdd\u8bc1\u5176\u4ed6\u6620\u5c04\u7ec4\u4ef6\u7684\u6b63\u5e38\u8c03\u7528"}),"\n"]})]}),"\n",(0,r.jsx)(o.admonition,{type:"tip",children:(0,r.jsxs)(o.p,{children:["\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f TypeSctipt\uff0c\u6269\u5c55\u5355\u5143\u683c\u6620\u5c04\u5185\u5bb9\u540e\uff0c\u56e0\u4e3a",(0,r.jsx)(o.code,{children:"TXphTableProps"}),"\u7c7b\u578b\u4e2d\u4e0d\u5305\u542b\u4f60\u6269\u5c55\u7684\u7c7b\u578b\uff0c\u6240\u4ee5\u9700\u8981\u91cd\u65b0\u5b9a\u4e49\u4e00\u4e0b\u7c7b\u578b\u6765\u4f7f\u7528\uff0c\u8be6\u7ec6\u53ef\u770b\u4e0b\u65b9 ts \u7c7b\u578b\u8c03\u6574\u3002"]})}),"\n",(0,r.jsx)(o.h2,{id:"\u6269\u5c55-xphactions-\u64cd\u4f5c\u7ec4\u6620\u5c04\u5185\u5bb9",children:"\u6269\u5c55 XphActions \u64cd\u4f5c\u7ec4\u6620\u5c04\u5185\u5bb9"}),"\n",(0,r.jsx)(o.h3,{id:"\u6269\u5c55\u64cd\u4f5c\u7ec4\u6620\u5c04\u5185\u5bb9",children:"\u6269\u5c55\u64cd\u4f5c\u7ec4\u6620\u5c04\u5185\u5bb9"}),"\n",(0,r.jsxs)(o.p,{children:["\u540c\u7406\uff0c",(0,r.jsx)(o.code,{children:"XphActions"}),"\u4e2d\u7684\u6620\u5c04\u5185\u5bb9\u4e5f\u662f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u7684\uff0c\u4e5f\u662f\u901a\u8fc7\u7ed9",(0,r.jsx)(o.code,{children:"XphExtendCompPropsProvider"}),"\u6dfb\u52a0\u64cd\u4f5c\u7ec4\u6620\u5c04\u5bf9\u8c61\u5373\u53ef\u7684\u65b9\u5f0f\u3002"]}),"\n",(0,r.jsx)(t.A,{rawStr:a,children:(0,r.jsx)(l.YX,{})}),"\n",(0,r.jsx)(o.admonition,{type:"tip",children:(0,r.jsxs)(o.p,{children:["\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f TypeSctipt\uff0c\u6269\u5c55\u64cd\u4f5c\u7ec4\u6620\u5c04\u5185\u5bb9\u540e\uff0c\u56e0\u4e3a",(0,r.jsx)(o.code,{children:"IXphActionsProps"}),"\u7c7b\u578b\u4e2d\u4e0d\u5305\u542b\u4f60\u6269\u5c55\u7684\u7c7b\u578b\uff0c\u6240\u4ee5\u9700\u8981\u91cd\u65b0\u5b9a\u4e49\u4e00\u4e0b\u7c7b\u578b\u6765\u4f7f\u7528\uff0c\u8be6\u7ec6\u53ef\u770b\u4e0b\u65b9 ts \u7c7b\u578b\u8c03\u6574\u3002"]})}),"\n",(0,r.jsx)(o.h2,{id:"ts-\u7c7b\u578b\u8c03\u6574",children:"ts \u7c7b\u578b\u8c03\u6574"}),"\n",(0,r.jsxs)(o.p,{children:["\u5982\u679c\u4f60\u6269\u5c55\u4e86",(0,r.jsx)(o.code,{children:"xph-crud"}),"\u4e2d\u7684\u6620\u5c04\u7ec4\u4ef6\uff0c\u7ec4\u4ef6\u7684\u5c5e\u6027\u7c7b\u578b\u9700\u8981\u4f60\u4f20\u5165\u6620\u5c04\u5bf9\u8c61\u5c5e\u6027\u7684\u6cdb\u578b\uff0c\u5426\u8005\u7ec4\u4ef6\u7684\u7c7b\u578b\u4f1a\u5bf9\u5e94\u4e0d\u4e0a\u3002\u4f46\u662f\u5728\u8fd9\u91cc\u6211\u4eec\u5efa\u8bae\u4f60\u901a\u8fc7\u58f0\u660e\u5168\u5c40\u7684\u7c7b\u578b\uff0c\u518d\u4f7f\u7528\u5168\u5c40\u7684\u7c7b\u578b\u6765\u8fdb\u884c\u7ea6\u675f\uff0c\u8fd9\u6837\u65b9\u4fbf\u5f88\u591a\u3002"]}),"\n",(0,r.jsx)(o.h3,{id:"\u521b\u5efa\u5168\u5c40\u7c7b\u578b-inewxphformprops",children:"\u521b\u5efa\u5168\u5c40\u7c7b\u578b INewXphFormProps"}),"\n",(0,r.jsx)(o.p,{children:"\u65b0\u5efa xph-crud.d.ts \u4e8e\u9879\u76ee\u4e2d"}),"\n",(0,r.jsx)(s.A,{language:"tsx",children:h}),"\n",(0,r.jsx)(o.h3,{id:"\u4f8b\u5b50",children:"\u4f8b\u5b50"}),"\n",(0,r.jsx)(t.A,{rawStr:m,children:(0,r.jsx)(l.Fk,{})})]})}function g(n={}){const{wrapper:o}={...(0,p.R)(),...n.components};return o?(0,r.jsx)(o,{...n,children:(0,r.jsx)(v,{...n})}):v(n)}}}]);