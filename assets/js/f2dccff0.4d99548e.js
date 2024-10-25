"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2293],{49230:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>h,toc:()=>u});var o=t(86106),s=t(66205),i=t(82978);const d='import React from "react";\nimport { useState } from "react";\nimport { XphAuth } from "xph-crud";\nimport { Button } from "antd";\n\nconst ReactApp: React.FC = () => {\n  /** \u5f53\u524d\u62e5\u6709\u7684\u6743\u9650 */\n  const [myPermissions, setMyPermissions] = useState<string[]>([]);\n\n  /** \u9274\u6743\u7684\u51fd\u6570\uff08\u53ef\u4ee5\u901a\u8fc7\u5728XphExtendCompPropsProvider\u4e2d\u914d\u7f6e\u516c\u5171\u7684\u9274\u6743\u51fd\u6570\uff09 */\n  const auth = (key) => {\n    return myPermissions.includes(key);\n  };\n\n  /** \u70b9\u51fb\u83b7\u53d6\u6240\u6709\u6743\u9650 */\n  const onClickGetAllPermissionsBtn = () => {\n    setMyPermissions(["add", "edit", "delete"]);\n  };\n\n  /** \u70b9\u51fb\u83b7\u53d6["add"] \u6743\u9650 */\n  const onClickGetAddPermissionBtn = () => {\n    setMyPermissions(["add"]);\n  };\n\n  return (\n    <div>\n      <Button onClick={onClickGetAllPermissionsBtn}>\u70b9\u51fb\u83b7\u53d6\u6240\u6709\u6743\u9650</Button>\n      &nbsp;\n      <Button onClick={onClickGetAddPermissionBtn}>\u70b9\u51fb\u83b7\u53d6["add"] \u6743\u9650</Button>\n      {/** \u663e\u793a\u5185\u5bb9\u9700\u8981\u7684\u6743\u9650\u662f["add", "edit", "delete"] */}\n      <XphAuth auth={auth} authCode={["add", "edit", "delete"]}>\n        <p>\u6211\u662f\u9700\u8981\u9274\u6743\u7684\u5185\u5bb9</p>\n      </XphAuth>\n    </div>\n  );\n};\n\nexport default ReactApp;\n';var r=t(36899);const a={},c="XphAuth \u9274\u6743\u7ec4\u4ef6",h={id:"comp/auth/base",title:"XphAuth \u9274\u6743\u7ec4\u4ef6",description:"\u57fa\u672c\u4f7f\u7528",source:"@site/docs/comp/auth/base.mdx",sourceDirName:"comp/auth",slug:"/comp/auth/base",permalink:"/xph-crud/docs/comp/auth/base",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{},sidebar:"comp",previous:{title:"XphDialog \u5c42\u53e0\u5f39\u7a97",permalink:"/xph-crud/docs/comp/dialog/base"},next:{title:"XphCurdFormDialog \u53ef\u914d\u7f6e\u8868\u5355\u5c42\u53e0\u5f39\u7a97",permalink:"/xph-crud/docs/comp/crudFormDialog/base"}},p={},u=[{value:"\u57fa\u672c\u4f7f\u7528",id:"\u57fa\u672c\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"\u5728 CodeSandbox \u5c1d\u8bd5",id:"\u5728-codesandbox-\u5c1d\u8bd5",level:2}];function l(e){const n={a:"a",h1:"h1",h2:"h2",header:"header",img:"img",p:"p",...(0,s.R)(),...e.components};return i.Ne||x("AuthDemos",!1),i.Ne.Base||x("AuthDemos.Base",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.header,{children:(0,o.jsx)(n.h1,{id:"xphauth-\u9274\u6743\u7ec4\u4ef6",children:"XphAuth \u9274\u6743\u7ec4\u4ef6"})}),"\n",(0,o.jsx)(n.h2,{id:"\u57fa\u672c\u4f7f\u7528",children:"\u57fa\u672c\u4f7f\u7528"}),"\n",(0,o.jsx)(r.A,{rawStr:d,children:(0,o.jsx)(i.Ne.Base,{})}),"\n",(0,o.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/api/interfaces/IXphAuthProps",children:"Auth API"})}),"\n",(0,o.jsx)(n.h2,{id:"\u5728-codesandbox-\u5c1d\u8bd5",children:"\u5728 CodeSandbox \u5c1d\u8bd5"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"https://codesandbox.io/p/github/XiaoPiHong/xph-crud/codesandbox?embed=1&file=%2Fexamples%2Froutes%2Findex.tsx",children:(0,o.jsx)(n.img,{src:"https://codesandbox.io/static/img/play-codesandbox.svg",alt:"Edit XiaoPiHong/xph-crud/codesandbox"})})})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}function x(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);