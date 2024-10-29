"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[5654],{60110:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>g});var n=t(86106),i=t(66205),r=t(76358),p=t(36899);const s='import React, { useRef } from "react";\nimport { Button } from "antd";\nimport { XphDialog, IXphDialogProps, IXphDialogActionType } from "xph-crud";\n\nconst ReactApp: React.FC = () => {\n  const dialogRef = useRef<IXphDialogActionType>(null);\n  const dialogProps: IXphDialogProps = {\n    title: "\u5f39\u7a97\u6807\u9898",\n    height: 400,\n    getPopperContainer: () =>\n      document.getElementById("docs-comp-dialog-properties-height"),\n  };\n\n  const onClickOpenDialogBtn = () => {\n    dialogRef.current?.open();\n  };\n\n  return (\n    <div\n      id="docs-comp-dialog-properties-height"\n      style={{\n        width: "100%",\n        height: "500px",\n        overflow: "auto",\n        position: "relative",\n      }}\n    >\n      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>\n        <Button onClick={onClickOpenDialogBtn}>\u6253\u5f00\u5f39\u7a97</Button>\n      </div>\n      <XphDialog {...dialogProps} ref={dialogRef}>\n        \u6211\u662f\u5f39\u7a97\u5185\u5bb9\n      </XphDialog>\n    </div>\n  );\n};\n\nexport default ReactApp;\n',a={},l=void 0,c={id:"comp/dialog/properties/height",title:"height",description:"\u9ad8\u5ea6",source:"@site/docs/comp/dialog/properties/height.mdx",sourceDirName:"comp/dialog/properties",slug:"/comp/dialog/properties/height",permalink:"/xph-crud/docs/comp/dialog/properties/height",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{}},d={},g=[{value:"\u9ad8\u5ea6",id:"\u9ad8\u5ea6",level:3}];function h(e){const o={h3:"h3",...(0,i.R)(),...e.components};return r.JT||m("DialogDemos",!1),r.JT.Properties||m("DialogDemos.Properties",!1),r.JT.Properties.Height||m("DialogDemos.Properties.Height",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h3,{id:"\u9ad8\u5ea6",children:"\u9ad8\u5ea6"}),"\n",(0,n.jsx)(p.A,{rawStr:s,children:(0,n.jsx)(r.JT.Properties.Height,{})})]})}function u(e={}){const{wrapper:o}={...(0,i.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}function m(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);