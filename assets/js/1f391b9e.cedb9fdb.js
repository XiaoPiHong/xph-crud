"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6061],{22567:(e,n,t)=>{t.d(n,{A:()=>s});t(48318);var a=t(16818),i=t(49214);function s(e){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(a.A,{...e})})}},20771:(e,n,t)=>{t.d(n,{A:()=>i});t(48318);var a=t(49214);function i(e){return(0,a.jsx)(a.Fragment,{children:e.children})}},60310:(e,n,t)=>{t.d(n,{A:()=>i});var a=t(48318);const i={React:a,...a}},20609:(e,n,t)=>{t.r(n),t.d(n,{default:()=>f});t(48318);var a=t(86120),i=t(29428),s=t(18226),l=t(97220),r=t(37040),c=t(22759),o=t(48316),d=t(92385);const m={mdxPageWrapper:"mdxPageWrapper_mCMy"};var u=t(49214);function f(e){const{content:n}=e,{metadata:{title:t,editUrl:f,description:v,frontMatter:h,unlisted:g,lastUpdatedBy:x,lastUpdatedAt:p},assets:j}=n,{keywords:A,wrapperClassName:L,hide_table_of_contents:N}=h,C=j.image??h.image,H=!!(f||p||x);return(0,u.jsx)(i.e3,{className:(0,a.A)(L??s.G.wrapper.mdxPages,s.G.page.mdxPage),children:(0,u.jsxs)(l.A,{children:[(0,u.jsx)(i.be,{title:t,description:v,keywords:A,image:C}),(0,u.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,u.jsxs)("div",{className:(0,a.A)("row",m.mdxPageWrapper),children:[(0,u.jsxs)("div",{className:(0,a.A)("col",!N&&"col--8"),children:[g&&(0,u.jsx)(o.A,{}),(0,u.jsx)("article",{children:(0,u.jsx)(r.A,{children:(0,u.jsx)(n,{})})}),H&&(0,u.jsx)(d.A,{className:(0,a.A)("margin-top--sm",s.G.pages.pageFooterEditMetaRow),editUrl:f,lastUpdatedAt:p,lastUpdatedBy:x})]}),!N&&n.toc.length>0&&(0,u.jsx)("div",{className:"col col--2",children:(0,u.jsx)(c.A,{toc:n.toc,minHeadingLevel:h.toc_min_heading_level,maxHeadingLevel:h.toc_max_heading_level})})]})})]})})}},22759:(e,n,t)=>{t.d(n,{A:()=>o});t(48318);var a=t(86120),i=t(72479);const s={tableOfContents:"tableOfContents_vHvP",docItemContainer:"docItemContainer_Vyqe"};var l=t(49214);const r="table-of-contents__link toc-highlight",c="table-of-contents__link--active";function o(e){let{className:n,...t}=e;return(0,l.jsx)("div",{className:(0,a.A)(s.tableOfContents,"thin-scrollbar",n),children:(0,l.jsx)(i.A,{...t,linkClassName:r,linkActiveClassName:c})})}},72479:(e,n,t)=>{t.d(n,{A:()=>h});var a=t(48318),i=t(97041);function s(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const a=t.slice(2,e.level);e.parentIndex=Math.max(...a),t[e.level]=n}));const a=[];return n.forEach((e=>{const{parentIndex:t,...i}=e;t>=0?n[t].children.push(i):a.push(i)})),a}function l(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return n.flatMap((e=>{const n=l({toc:e.children,minHeadingLevel:t,maxHeadingLevel:a});return function(e){return e.level>=t&&e.level<=a}(e)?[{...e,children:n}]:n}))}function r(e){const n=e.getBoundingClientRect();return n.top===n.bottom?r(e.parentNode):n}function c(e,n){let{anchorTopOffset:t}=n;const a=e.find((e=>r(e).top>=t));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function o(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:n}}=(0,i.p)();return(0,a.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,a.useRef)(void 0),t=o();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:i,minHeadingLevel:s,maxHeadingLevel:l}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),r=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const a=[];for(let i=n;i<=t;i+=1)a.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:s,maxHeadingLevel:l}),o=c(r,{anchorTopOffset:t.current}),d=e.find((e=>o&&o.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,t])}var m=t(10403),u=t(49214);function f(e){let{toc:n,className:t,linkClassName:a,isChild:i}=e;return n.length?(0,u.jsx)("ul",{className:i?void 0:t,children:n.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(f,{isChild:!0,toc:e.children,className:t,linkClassName:a})]},e.id)))}):null}const v=a.memo(f);function h(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:c,minHeadingLevel:o,maxHeadingLevel:m,...f}=e;const h=(0,i.p)(),g=o??h.tableOfContents.minHeadingLevel,x=m??h.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:i}=e;return(0,a.useMemo)((()=>l({toc:s(n),minHeadingLevel:t,maxHeadingLevel:i})),[n,t,i])}({toc:n,minHeadingLevel:g,maxHeadingLevel:x});return d((0,a.useMemo)((()=>{if(r&&c)return{linkClassName:r,linkActiveClassName:c,minHeadingLevel:g,maxHeadingLevel:x}}),[r,c,g,x])),(0,u.jsx)(v,{toc:p,className:t,linkClassName:r,...f})}},48316:(e,n,t)=>{t.d(n,{A:()=>f});t(48318);var a=t(86120),i=t(35598),s=t(48985),l=t(49214);function r(){return(0,l.jsx)(i.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function c(){return(0,l.jsx)(i.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,l.jsx)(s.A,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(18226),m=t(40244);function u(e){let{className:n}=e;return(0,l.jsx)(m.A,{type:"caution",title:(0,l.jsx)(r,{}),className:(0,a.A)(n,d.G.common.unlistedBanner),children:(0,l.jsx)(c,{})})}function f(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o,{}),(0,l.jsx)(u,{...e})]})}}}]);