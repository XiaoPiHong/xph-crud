"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3152],{95965:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>m,metadata:()=>c,toc:()=>l});var n=o(86106),t=o(66205),s=o(82978),p=o(36899);const i='import React from "react";\nimport { XphForm, IXphFormProps } from "xph-crud";\nimport { InputNumber } from "antd";\n\nconst ReactApp: React.FC = () => {\n  const props: IXphFormProps = {\n    items: [\n      {\n        name: "render",\n        label: "render",\n        render: ({ model, disabled, name, methods, componentProps }) => (\n          <div>\n            <InputNumber\n              disabled={disabled}\n              value={model[name]}\n              onChange={(e) => methods.setFieldsValue({ [name]: e })}\n              {...componentProps}\n            />\n            <span style={{ marginLeft: 8, fontWeight: "bold", color: "red" }}>\n              {model[name]}\n            </span>\n          </div>\n        ),\n        componentProps: {\n          placeholder: "render",\n        },\n        initialValue: 2,\n        rules: [\n          {\n            required: true,\n            message: "render\u5fc5\u586b",\n          },\n        ],\n      },\n    ],\n  };\n\n  return <XphForm {...props}></XphForm>;\n};\n\nexport default ReactApp;\n',m={},d=void 0,c={id:"comp/form/properties/items/properties/render",title:"render",description:"\u81ea\u5b9a\u4e49\u8868\u5355\u9879\u7ec4\u4ef6",source:"@site/docs/comp/form/properties/items/properties/render.mdx",sourceDirName:"comp/form/properties/items/properties",slug:"/comp/form/properties/items/properties/render",permalink:"/xph-crud/docs/comp/form/properties/items/properties/render",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},a={},l=[{value:"\u81ea\u5b9a\u4e49\u8868\u5355\u9879\u7ec4\u4ef6",id:"\u81ea\u5b9a\u4e49\u8868\u5355\u9879\u7ec4\u4ef6",level:3}];function u(e){const r={h3:"h3",...(0,t.R)(),...e.components};return s.z9||f("FormDemos",!1),s.z9.Properties||f("FormDemos.Properties",!1),s.z9.Properties.items||f("FormDemos.Properties.items",!1),s.z9.Properties.items.Properties||f("FormDemos.Properties.items.Properties",!1),s.z9.Properties.items.Properties.Render||f("FormDemos.Properties.items.Properties.Render",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h3,{id:"\u81ea\u5b9a\u4e49\u8868\u5355\u9879\u7ec4\u4ef6",children:"\u81ea\u5b9a\u4e49\u8868\u5355\u9879\u7ec4\u4ef6"}),"\n",(0,n.jsx)(p.A,{rawStr:i,children:(0,n.jsx)(s.z9.Properties.items.Properties.Render,{})})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}function f(e,r){throw new Error("Expected "+(r?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);