"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1848],{74841:(n,o,e)=>{e.r(o),e.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>h});var t=e(86106),i=e(66205),a=e(82468);const s='import React, { useRef, useState } from "react";\nimport { Input, Button } from "antd";\nimport { XphDialog, IXphDialogProps, IXphDialogActionType } from "xph-crud";\n\nconst ReactApp: React.FC = () => {\n  const firstDialogRef = useRef<IXphDialogActionType>(null);\n  const secondDialogRef = useRef<IXphDialogActionType>(null);\n  const thirdDialogRef = useRef<IXphDialogActionType>(null);\n  const firstDialogProps: IXphDialogProps = {\n    title: "\u5f39\u7a971\u6807\u9898",\n    width: 1000,\n    height: 1200,\n    getPopperContainer: () => document.getElementById("docs-comp-dialog-base"),\n  };\n\n  const secondDialogProps: IXphDialogProps = {\n    // mask: true,\n    title: "\u5f39\u7a972\u6807\u9898",\n    width: 500,\n    height: 500,\n    // height: 1200,\n    getPopperContainer: () => document.getElementById("docs-comp-dialog-base"),\n  };\n\n  const [thirdWidth, setThirdWidth] = useState(300);\n  const thirdDialogProps: IXphDialogProps = {\n    mask: false,\n    title: "\u5f39\u7a973\u6807\u9898",\n    width: thirdWidth,\n    height: 300,\n    getPopperContainer: () => document.getElementById("docs-comp-dialog-base"),\n  };\n\n  const inputRef = useRef<any>(null);\n\n  const onOpenFirstDialog = () => {\n    firstDialogRef.current?.open();\n  };\n\n  const onOpenSecondDialog = () => {\n    secondDialogRef.current?.open();\n  };\n\n  const onOpenThirdDialog = () => {\n    thirdDialogRef.current?.open();\n  };\n\n  const onConsoleChildrenDom = () => {\n    console.log(inputRef);\n  };\n\n  const onChangeThirdWidth = () => {\n    setThirdWidth(400);\n  };\n\n  /** \u5f39\u7a971\u7684\u5185\u5bb9\u7ec4\u4ef6 */\n  const Content = () => {\n    console.log("\u6e32\u67d3Content");\n    return (\n      <div style={{ width: "1200px", height: "1200px" }}>\n        <>\u6211\u662f\u5f39\u7a971</>\n        <div>\n          <Input />\n        </div>\n      </div>\n    );\n  };\n\n  return (\n    <div\n      id="docs-comp-dialog-base"\n      style={{\n        width: "100%",\n        height: "100%",\n        overflow: "auto",\n        position: "relative",\n      }}\n    >\n      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>\n        <Button onClick={onOpenFirstDialog}>\u70b9\u51fb\u6253\u5f00XphDialog\u5f39\u7a971</Button>\n        <Button onClick={onOpenSecondDialog}>\u70b9\u51fb\u6253\u5f00XphDialog\u5f39\u7a972</Button>\n        <Button onClick={onOpenThirdDialog}>\u70b9\u51fb\u6253\u5f00XphDialog\u5f39\u7a973</Button>\n        <Button onClick={onConsoleChildrenDom}>\u70b9\u51fb\u6253\u5370\u5f39\u7a972\u5b50\u5143\u7d20</Button>\n        <Button onClick={onChangeThirdWidth}>\u70b9\u51fb\u52a8\u6001\u6539\u53d8\u5f39\u7a973\u5bbd\u5ea6</Button>\n      </div>\n      {/** \u7528\u6765\u6d4b\u8bd5\u7236\u5143\u7d20\u6709\u6eda\u52a8\u6761\u7684\u60c5\u51b5 */}\n      {/* <div style={{ width: "1200px", height: "1200px" }}></div> */}\n\n      <XphDialog {...firstDialogProps} ref={firstDialogRef}>\n        <Content />\n      </XphDialog>\n      <XphDialog {...secondDialogProps} ref={secondDialogRef}>\n        <Input ref={inputRef} />\n      </XphDialog>\n      <XphDialog {...thirdDialogProps} ref={thirdDialogRef}>\n        \u6211\u662f\u5f39\u7a973\n      </XphDialog>\n    </div>\n  );\n};\n\nexport default ReactApp;\n';var d=e(36899);const l={},r="XphDialog \u5c42\u53e0\u5f39\u7a97",p={id:"comp/dialog/base",title:"XphDialog \u5c42\u53e0\u5f39\u7a97",description:"\u57fa\u672c\u4f7f\u7528",source:"@site/docs/comp/dialog/base.mdx",sourceDirName:"comp/dialog",slug:"/comp/dialog/base",permalink:"/xph-crud/docs/comp/dialog/base",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"comp",previous:{title:"XphActions \u53ef\u914d\u7f6e\u64cd\u4f5c\u7ec4",permalink:"/xph-crud/docs/comp/actions/base"},next:{title:"XphAuth \u9274\u6743\u7ec4\u4ef6",permalink:"/xph-crud/docs/comp/auth/base"}},c={},h=[{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u5728 CodeSandbox \u5c1d\u8bd5",id:"\u5728-codesandbox-\u5c1d\u8bd5",level:2}];function g(n){const o={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",...(0,i.R)(),...n.components};return a.JT||D("DialogDemos",!1),a.JT.Base||D("DialogDemos.Base",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.header,{children:(0,t.jsx)(o.h1,{id:"xphdialog-\u5c42\u53e0\u5f39\u7a97",children:"XphDialog \u5c42\u53e0\u5f39\u7a97"})}),"\n",(0,t.jsx)(o.h2,{id:"\u57fa\u672c\u4f7f\u7528",children:"\u57fa\u672c\u4f7f\u7528"}),"\n",(0,t.jsx)(d.A,{rawStr:s,height:"400px",children:(0,t.jsx)(a.JT.Base,{})}),"\n",(0,t.jsx)(o.h2,{id:"api",children:"API"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.a,{href:"/docs/api/interfaces/IXphDialogProps",children:"Dialog API"})}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.a,{href:"/docs/api/interfaces/IXphDialogActionType",children:"DialogInstance API"})}),"\n",(0,t.jsx)(o.h2,{id:"\u5728-codesandbox-\u5c1d\u8bd5",children:"\u5728 CodeSandbox \u5c1d\u8bd5"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.a,{href:"https://codesandbox.io/p/github/XiaoPiHong/xph-crud/codesandbox?embed=1&file=%2Fexamples%2Froutes%2Findex.tsx",children:(0,t.jsx)(o.img,{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit XiaoPiHong/xph-crud/codesandbox"})})})]})}function u(n={}){const{wrapper:o}={...(0,i.R)(),...n.components};return o?(0,t.jsx)(o,{...n,children:(0,t.jsx)(g,{...n})}):g(n)}function D(n,o){throw new Error("Expected "+(o?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);