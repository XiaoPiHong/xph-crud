"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4770],{47185:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>c,contentTitle:()=>l,default:()=>f,frontMatter:()=>s,metadata:()=>a,toc:()=>g});var t=o(86106),r=o(66205),i=o(76358),p=o(36899);const d='import React, { useRef } from "react";\nimport { Button, Tooltip } from "antd";\nimport { XphDialog, IXphDialogProps, IXphDialogActionType } from "xph-crud";\n\nconst ReactApp: React.FC = () => {\n  const dialogRef = useRef<IXphDialogActionType>(null);\n  const dialogProps: IXphDialogProps = {\n    title: "\u5f39\u7a97\u6807\u9898",\n    height: 400,\n    getPopperContainer: () =>\n      document.getElementById("docs-comp-dialog-properties-renderFooter"),\n    renderFooter: ({ loading }) => {\n      return (\n        <div\n          style={{\n            display: "flex",\n            gap: "8px",\n            justifyContent: "flex-end",\n            alignItems: "center",\n            padding: "4px",\n          }}\n        >\n          <Tooltip\n            overlay={\n              <>\n                \u5408\u540c\u5185\u5bb9\uff1a\n                <br />\n                1. \u5408\u540c\u5185\u5bb91\n                <br />\n                2. \u5408\u540c\u5185\u5bb92\n                <br />\n                3. \u5408\u540c\u5185\u5bb93\n              </>\n            }\n          >\n            <span style={{ color: "red" }}>\u6ce8\u610f\uff01\uff01\uff01</span>\n          </Tooltip>\n          <Button type="primary" disabled={loading} onClick={onClickAuditBtn}>\n            \u5ba1\u6838\n          </Button>\n        </div>\n      );\n    },\n  };\n\n  const onClickOpenDialogBtn = () => {\n    dialogRef.current?.open();\n  };\n\n  const onClickAuditBtn = () => {\n    dialogRef.current?.setLoading(true);\n    setTimeout(() => {\n      dialogRef.current?.setLoading(false);\n      dialogRef.current?.close();\n    }, 3000);\n  };\n\n  return (\n    <div\n      id="docs-comp-dialog-properties-renderFooter"\n      style={{\n        width: "100%",\n        height: "500px",\n        overflow: "auto",\n        position: "relative",\n      }}\n    >\n      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>\n        <Button onClick={onClickOpenDialogBtn}>\u6253\u5f00\u5f39\u7a97</Button>\n      </div>\n      <XphDialog {...dialogProps} ref={dialogRef}>\n        \u6211\u662f\u5f39\u7a97\u5185\u5bb9\n      </XphDialog>\n    </div>\n  );\n};\n\nexport default ReactApp;\n',s={},l=void 0,a={id:"comp/dialog/properties/renderFooter",title:"renderFooter",description:"\u81ea\u5b9a\u4e49\u5e95\u90e8\u5185\u5bb9",source:"@site/docs/comp/dialog/properties/renderFooter.mdx",sourceDirName:"comp/dialog/properties",slug:"/comp/dialog/properties/renderFooter",permalink:"/xph-crud/docs/comp/dialog/properties/renderFooter",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},c={},g=[{value:"\u81ea\u5b9a\u4e49\u5e95\u90e8\u5185\u5bb9",id:"\u81ea\u5b9a\u4e49\u5e95\u90e8\u5185\u5bb9",level:3}];function u(n){const e={h3:"h3",...(0,r.R)(),...n.components};return i.JT||m("DialogDemos",!1),i.JT.Properties||m("DialogDemos.Properties",!1),i.JT.Properties.RenderFooter||m("DialogDemos.Properties.RenderFooter",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h3,{id:"\u81ea\u5b9a\u4e49\u5e95\u90e8\u5185\u5bb9",children:"\u81ea\u5b9a\u4e49\u5e95\u90e8\u5185\u5bb9"}),"\n",(0,t.jsx)(p.A,{rawStr:d,children:(0,t.jsx)(i.JT.Properties.RenderFooter,{})})]})}function f(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}function m(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);