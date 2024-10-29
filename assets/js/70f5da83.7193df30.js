"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3791],{33303:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>b,frontMatter:()=>l,metadata:()=>m,toc:()=>c});var t=o(86106),r=o(66205),s=o(76358),p=o(36899);const i='import React, { useState } from "react";\nimport { XphForm, IXphFormProps } from "xph-crud";\nimport { Radio, Divider } from "antd";\n\nconst ReactApp: React.FC = () => {\n  const [disabled, setDisabled] = useState<boolean>(false);\n\n  const props: IXphFormProps = {\n    colProps: { span: 11, offset: 1 },\n    labelCol: { style: { width: "100px" } },\n    items: [\n      {\n        name: "Input",\n        label: "Input",\n        component: "Input",\n        componentProps: {\n          placeholder: "Input\u6709\u503c\u65f6\u7981\u7528Select",\n        },\n      },\n      {\n        name: "Select",\n        label: "Select",\n        component: "Select",\n        componentProps: {\n          allowClear: true,\n          placeholder: "Select",\n          options: [\n            { label: "\u6d4b\u8bd5", value: "1" },\n            { label: "\u6d4b\u8bd52", value: "2" },\n          ],\n        },\n        disabled: ({ model }) => {\n          return disabled || model.Input;\n        },\n      },\n      {\n        name: "InputNumber",\n        label: "InputNumber",\n        component: "InputNumber",\n        componentProps: {\n          placeholder: "\u7981\u7528",\n        },\n        disabled: true,\n      },\n    ],\n  };\n\n  const onChange = (e) => {\n    setDisabled(e.target.value);\n  };\n\n  return (\n    <div>\n      <Radio.Group\n        options={[\n          {\n            label: "\u7981\u7528Select",\n            value: true,\n          },\n          {\n            label: "\u4e0d\u7981\u7528Select",\n            value: false,\n          },\n        ]}\n        onChange={onChange}\n        value={disabled}\n        optionType="button"\n      />\n      <Divider />\n      <XphForm {...props}></XphForm>\n    </div>\n  );\n};\n\nexport default ReactApp;\n',l={},a=void 0,m={id:"comp/form/properties/items/properties/disabled",title:"disabled",description:"\u8868\u5355\u9879\u7981\u7528",source:"@site/docs/comp/form/properties/items/properties/disabled.mdx",sourceDirName:"comp/form/properties/items/properties",slug:"/comp/form/properties/items/properties/disabled",permalink:"/xph-crud/docs/comp/form/properties/items/properties/disabled",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},d={},c=[{value:"\u8868\u5355\u9879\u7981\u7528",id:"\u8868\u5355\u9879\u7981\u7528",level:3}];function u(e){const n={h3:"h3",...(0,r.R)(),...e.components};return s.z9||h("FormDemos",!1),s.z9.Properties||h("FormDemos.Properties",!1),s.z9.Properties.items||h("FormDemos.Properties.items",!1),s.z9.Properties.items.Properties||h("FormDemos.Properties.items.Properties",!1),s.z9.Properties.items.Properties.Disabled||h("FormDemos.Properties.items.Properties.Disabled",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"\u8868\u5355\u9879\u7981\u7528",children:"\u8868\u5355\u9879\u7981\u7528"}),"\n",(0,t.jsx)(p.A,{rawStr:i,children:(0,t.jsx)(s.z9.Properties.items.Properties.Disabled,{})})]})}function b(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}function h(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);