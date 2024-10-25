"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6554],{52426:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>a,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>m,toc:()=>u});var r=t(86106),o=t(66205),p=t(90310),c=t(36899);const s='import React from "react";\nimport { XphForm, IXphFormProps, IXphFormActionType } from "xph-crud";\nimport { Divider, Flex, Button } from "antd";\n\nconst ReactApp: React.FC = () => {\n  const props: IXphFormProps = {\n    colProps: { span: 11, offset: 1 },\n    labelCol: { style: { width: "100px" } },\n    labelAlign: "right",\n    items: [\n      {\n        name: "Input",\n        label: "Input",\n        component: "Input",\n        required: true,\n        componentProps: {},\n      },\n      {\n        name: "Select",\n        label: "Select",\n        component: "Select",\n        componentProps: {\n          options: [\n            { label: "\u6d4b\u8bd5", value: "1" },\n            { label: "\u6d4b\u8bd52", value: "2" },\n          ],\n        },\n      },\n      {\n        name: "InputNumber",\n        label: "InputNumber",\n        component: "InputNumber",\n        componentProps: {},\n      },\n    ],\n  };\n\n  const reactFormRef = React.useRef<IXphFormActionType>(null);\n\n  return (\n    <div>\n      <Flex gap={"small"}>\n        <Button\n          onClick={() =>\n            reactFormRef.current?.setFieldsValue({\n              Input: "Input",\n              Select: "1",\n              InputNumber: 0,\n            })\n          }\n        >\n          \u8bbe\u7f6e\u503c\n        </Button>\n        <Button\n          onClick={() => console.log(reactFormRef.current?.getFieldsValue())}\n        >\n          \u83b7\u53d6\u503c\n        </Button>\n        <Button onClick={() => reactFormRef.current?.validator()}>\u6821\u9a8c</Button>\n        <Button onClick={() => reactFormRef.current?.resetFields()}>\n          \u91cd\u7f6e\n        </Button>\n      </Flex>\n      <Divider />\n      <XphForm ref={reactFormRef} {...props}></XphForm>\n    </div>\n  );\n};\n\nexport default ReactApp;\n',i={},l=void 0,m={id:"comp/form/properties/ref",title:"ref",description:"instance",source:"@site/docs/comp/form/properties/ref.mdx",sourceDirName:"comp/form/properties",slug:"/comp/form/properties/ref",permalink:"/xph-crud/docs/comp/form/properties/ref",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},a={},u=[{value:"instance",id:"instance",level:3}];function f(n){const e={h3:"h3",...(0,o.R)(),...n.components};return p.z9||F("FormDemos",!1),p.z9.Properties||F("FormDemos.Properties",!1),p.z9.Properties.Ref||F("FormDemos.Properties.Ref",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h3,{id:"instance",children:"instance"}),"\n",(0,r.jsx)(c.A,{rawStr:s,children:(0,r.jsx)(p.z9.Properties.Ref,{})})]})}function d(n={}){const{wrapper:e}={...(0,o.R)(),...n.components};return e?(0,r.jsx)(e,{...n,children:(0,r.jsx)(f,{...n})}):f(n)}function F(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);