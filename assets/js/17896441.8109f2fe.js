"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[401],{771:(e,n,t)=>{t.d(n,{A:()=>a});t(8318);var s=t(9214);function a(e){return(0,s.jsx)(s.Fragment,{children:e.children})}},310:(e,n,t)=>{t.d(n,{A:()=>a});var s=t(8318);const a={React:s,...s}},136:(e,n,t)=>{t.r(n),t.d(n,{default:()=>ae});var s=t(8318),a=t(9428),i=t(603),l=t(9214);const o=s.createContext(null);function r(e){let{children:n,content:t}=e;const a=function(e){return(0,s.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,contentTitle:e.contentTitle,toc:e.toc})),[e])}(t);return(0,l.jsx)(o.Provider,{value:a,children:n})}function c(){const e=(0,s.useContext)(o);if(null===e)throw new i.dV("DocProvider");return e}function d(){const{metadata:e,frontMatter:n,assets:t}=c();return(0,l.jsx)(a.be,{title:e.title,description:e.description,keywords:n.keywords,image:t.image??n.image})}var u=t(6120),m=t(3452),h=t(5598),v=t(3324);function x(e){const{previous:n,next:t}=e;return(0,l.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,h.T)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages",description:"The ARIA label for the docs pagination"}),children:[n&&(0,l.jsx)(v.A,{...n,subLabel:(0,l.jsx)(h.A,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc",children:"Previous"})}),t&&(0,l.jsx)(v.A,{...t,subLabel:(0,l.jsx)(h.A,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc",children:"Next"}),isNext:!0})]})}function b(){const{metadata:e}=c();return(0,l.jsx)(x,{previous:e.previous,next:e.next})}var g=t(4011),p=t(403),f=t(1745),j=t(8226),A=t(8320),C=t(2527);const L={unreleased:function(e){let{siteTitle:n,versionMetadata:t}=e;return(0,l.jsx)(h.A,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:n,versionLabel:(0,l.jsx)("b",{children:t.label})},children:"This is unreleased documentation for {siteTitle} {versionLabel} version."})},unmaintained:function(e){let{siteTitle:n,versionMetadata:t}=e;return(0,l.jsx)(h.A,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:n,versionLabel:(0,l.jsx)("b",{children:t.label})},children:"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained."})}};function N(e){const n=L[e.versionMetadata.banner];return(0,l.jsx)(n,{...e})}function _(e){let{versionLabel:n,to:t,onClick:s}=e;return(0,l.jsx)(h.A,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:n,latestVersionLink:(0,l.jsx)("b",{children:(0,l.jsx)(p.A,{to:t,onClick:s,children:(0,l.jsx)(h.A,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label",children:"latest version"})})})},children:"For up-to-date documentation, see the {latestVersionLink} ({versionLabel})."})}function k(e){let{className:n,versionMetadata:t}=e;const{siteConfig:{title:s}}=(0,g.A)(),{pluginId:a}=(0,f.vT)({failfast:!0}),{savePreferredVersionName:i}=(0,A.g1)(a),{latestDocSuggestion:o,latestVersionSuggestion:r}=(0,f.HW)(a),c=o??(d=r).docs.find((e=>e.id===d.mainDocId));var d;return(0,l.jsxs)("div",{className:(0,u.A)(n,j.G.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert",children:[(0,l.jsx)("div",{children:(0,l.jsx)(N,{siteTitle:s,versionMetadata:t})}),(0,l.jsx)("div",{className:"margin-top--md",children:(0,l.jsx)(_,{versionLabel:r.label,to:c.path,onClick:()=>i(r.name)})})]})}function T(e){let{className:n}=e;const t=(0,C.r)();return t.banner?(0,l.jsx)(k,{className:n,versionMetadata:t}):null}function H(e){let{className:n}=e;const t=(0,C.r)();return t.badge?(0,l.jsx)("span",{className:(0,u.A)(n,j.G.docs.docVersionBadge,"badge badge--secondary"),children:(0,l.jsx)(h.A,{id:"theme.docs.versionBadge.label",values:{versionLabel:t.label},children:"Version: {versionLabel}"})}):null}var M=t(6717),y=t(2385);function I(){const{metadata:e}=c(),{editUrl:n,lastUpdatedAt:t,lastUpdatedBy:s,tags:a}=e,i=a.length>0,o=!!(n||t||s);return i||o?(0,l.jsxs)("footer",{className:(0,u.A)(j.G.docs.docFooter,"docusaurus-mt-lg"),children:[i&&(0,l.jsx)("div",{className:(0,u.A)("row margin-top--sm",j.G.docs.docFooterTagsRow),children:(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(M.A,{tags:a})})}),o&&(0,l.jsx)(y.A,{className:(0,u.A)("margin-top--sm",j.G.docs.docFooterEditMetaRow),editUrl:n,lastUpdatedAt:t,lastUpdatedBy:s})]}):null}var w=t(7281),B=t(2479);const E={tocCollapsibleButton:"tocCollapsibleButton_j1tj",tocCollapsibleButtonExpanded:"tocCollapsibleButtonExpanded_RDT1"};function R(e){let{collapsed:n,...t}=e;return(0,l.jsx)("button",{type:"button",...t,className:(0,u.A)("clean-btn",E.tocCollapsibleButton,!n&&E.tocCollapsibleButtonExpanded,t.className),children:(0,l.jsx)(h.A,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component",children:"On this page"})})}const O={tocCollapsible:"tocCollapsible_DvF6",tocCollapsibleContent:"tocCollapsibleContent_GV26",tocCollapsibleExpanded:"tocCollapsibleExpanded_zy8r"};function V(e){let{toc:n,className:t,minHeadingLevel:s,maxHeadingLevel:a}=e;const{collapsed:i,toggleCollapsed:o}=(0,w.u)({initialState:!0});return(0,l.jsxs)("div",{className:(0,u.A)(O.tocCollapsible,!i&&O.tocCollapsibleExpanded,t),children:[(0,l.jsx)(R,{collapsed:i,onClick:o}),(0,l.jsx)(w.N,{lazy:!0,className:O.tocCollapsibleContent,collapsed:i,children:(0,l.jsx)(B.A,{toc:n,minHeadingLevel:s,maxHeadingLevel:a})})]})}const P={tocMobile:"tocMobile_I9zy"};function S(){const{toc:e,frontMatter:n}=c();return(0,l.jsx)(V,{toc:e,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:(0,u.A)(j.G.docs.docTocMobile,P.tocMobile)})}var G=t(2759);function F(){const{toc:e,frontMatter:n}=c();return(0,l.jsx)(G.A,{toc:e,minHeadingLevel:n.toc_min_heading_level,maxHeadingLevel:n.toc_max_heading_level,className:j.G.docs.docTocDesktop})}var U=t(599),z=t(3355);function D(e){let{children:n}=e;const t=function(){const{metadata:e,frontMatter:n,contentTitle:t}=c();return n.hide_title||void 0!==t?null:e.title}();return(0,l.jsxs)("div",{className:(0,u.A)(j.G.docs.docMarkdown,"markdown"),children:[t&&(0,l.jsx)("header",{children:(0,l.jsx)(U.A,{as:"h1",children:t})}),(0,l.jsx)(z.A,{children:n})]})}var q=t(8003),W=t(4136),$=t(7792);function J(e){return(0,l.jsx)("svg",{viewBox:"0 0 24 24",...e,children:(0,l.jsx)("path",{d:"M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z",fill:"currentColor"})})}const Q={breadcrumbHomeIcon:"breadcrumbHomeIcon_M2Tz"};function K(){const e=(0,$.Ay)("/");return(0,l.jsx)("li",{className:"breadcrumbs__item",children:(0,l.jsx)(p.A,{"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.home",message:"Home page",description:"The ARIA label for the home page in the breadcrumbs"}),className:"breadcrumbs__link",href:e,children:(0,l.jsx)(J,{className:Q.breadcrumbHomeIcon})})})}const X={breadcrumbsContainer:"breadcrumbsContainer_Aqvg"};function Y(e){let{children:n,href:t,isLast:s}=e;const a="breadcrumbs__link";return s?(0,l.jsx)("span",{className:a,itemProp:"name",children:n}):t?(0,l.jsx)(p.A,{className:a,href:t,itemProp:"item",children:(0,l.jsx)("span",{itemProp:"name",children:n})}):(0,l.jsx)("span",{className:a,children:n})}function Z(e){let{children:n,active:t,index:s,addMicrodata:a}=e;return(0,l.jsxs)("li",{...a&&{itemScope:!0,itemProp:"itemListElement",itemType:"https://schema.org/ListItem"},className:(0,u.A)("breadcrumbs__item",{"breadcrumbs__item--active":t}),children:[n,(0,l.jsx)("meta",{itemProp:"position",content:String(s+1)})]})}function ee(){const e=(0,q.OF)(),n=(0,W.Dt)();return e?(0,l.jsx)("nav",{className:(0,u.A)(j.G.docs.docBreadcrumbs,X.breadcrumbsContainer),"aria-label":(0,h.T)({id:"theme.docs.breadcrumbs.navAriaLabel",message:"Breadcrumbs",description:"The ARIA label for the breadcrumbs"}),children:(0,l.jsxs)("ul",{className:"breadcrumbs",itemScope:!0,itemType:"https://schema.org/BreadcrumbList",children:[n&&(0,l.jsx)(K,{}),e.map(((n,t)=>{const s=t===e.length-1,a="category"===n.type&&n.linkUnlisted?void 0:n.href;return(0,l.jsx)(Z,{active:s,index:t,addMicrodata:!!a,children:(0,l.jsx)(Y,{href:a,isLast:s,children:n.label})},t)}))]})}):null}var ne=t(8316);const te={docItemContainer:"docItemContainer_PMbe",docItemCol:"docItemCol_crcn"};function se(e){let{children:n}=e;const t=function(){const{frontMatter:e,toc:n}=c(),t=(0,m.l)(),s=e.hide_table_of_contents,a=!s&&n.length>0;return{hidden:s,mobile:a?(0,l.jsx)(S,{}):void 0,desktop:!a||"desktop"!==t&&"ssr"!==t?void 0:(0,l.jsx)(F,{})}}(),{metadata:{unlisted:s}}=c();return(0,l.jsxs)("div",{className:"row",children:[(0,l.jsxs)("div",{className:(0,u.A)("col",!t.hidden&&te.docItemCol),children:[s&&(0,l.jsx)(ne.A,{}),(0,l.jsx)(T,{}),(0,l.jsxs)("div",{className:te.docItemContainer,children:[(0,l.jsxs)("article",{children:[(0,l.jsx)(ee,{}),(0,l.jsx)(H,{}),t.mobile,(0,l.jsx)(D,{children:n}),(0,l.jsx)(I,{})]}),(0,l.jsx)(b,{})]})]}),t.desktop&&(0,l.jsx)("div",{className:"col col--3",children:t.desktop})]})}function ae(e){const n=`docs-doc-id-${e.content.metadata.id}`,t=e.content;return(0,l.jsx)(r,{content:e.content,children:(0,l.jsxs)(a.e3,{className:n,children:[(0,l.jsx)(d,{}),(0,l.jsx)(se,{children:(0,l.jsx)(t,{})})]})})}},3324:(e,n,t)=>{t.d(n,{A:()=>l});t(8318);var s=t(6120),a=t(403),i=t(9214);function l(e){const{permalink:n,title:t,subLabel:l,isNext:o}=e;return(0,i.jsxs)(a.A,{className:(0,s.A)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:n,children:[l&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:l}),(0,i.jsx)("div",{className:"pagination-nav__label",children:t})]})}},2759:(e,n,t)=>{t.d(n,{A:()=>c});t(8318);var s=t(6120),a=t(2479);const i={tableOfContents:"tableOfContents_vHvP",docItemContainer:"docItemContainer_Vyqe"};var l=t(9214);const o="table-of-contents__link toc-highlight",r="table-of-contents__link--active";function c(e){let{className:n,...t}=e;return(0,l.jsx)("div",{className:(0,s.A)(i.tableOfContents,"thin-scrollbar",n),children:(0,l.jsx)(a.A,{...t,linkClassName:o,linkActiveClassName:r})})}},2479:(e,n,t)=>{t.d(n,{A:()=>x});var s=t(8318),a=t(7041);function i(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),t=Array(7).fill(-1);n.forEach(((e,n)=>{const s=t.slice(2,e.level);e.parentIndex=Math.max(...s),t[e.level]=n}));const s=[];return n.forEach((e=>{const{parentIndex:t,...a}=e;t>=0?n[t].children.push(a):s.push(a)})),s}function l(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:s}=e;return n.flatMap((e=>{const n=l({toc:e.children,minHeadingLevel:t,maxHeadingLevel:s});return function(e){return e.level>=t&&e.level<=s}(e)?[{...e,children:n}]:n}))}function o(e){const n=e.getBoundingClientRect();return n.top===n.bottom?o(e.parentNode):n}function r(e,n){let{anchorTopOffset:t}=n;const s=e.find((e=>o(e).top>=t));if(s){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(s))?s:e[e.indexOf(s)-1]??null}return e[e.length-1]??null}function c(){const e=(0,s.useRef)(0),{navbar:{hideOnScroll:n}}=(0,a.p)();return(0,s.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,s.useRef)(void 0),t=c();(0,s.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:s,linkActiveClassName:a,minHeadingLevel:i,maxHeadingLevel:l}=e;function o(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(s),o=function(e){let{minHeadingLevel:n,maxHeadingLevel:t}=e;const s=[];for(let a=n;a<=t;a+=1)s.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(s.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),c=r(o,{anchorTopOffset:t.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,t){t?(n.current&&n.current!==e&&n.current.classList.remove(a),e.classList.add(a),n.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",o),document.addEventListener("resize",o),o(),()=>{document.removeEventListener("scroll",o),document.removeEventListener("resize",o)}}),[e,t])}var u=t(403),m=t(9214);function h(e){let{toc:n,className:t,linkClassName:s,isChild:a}=e;return n.length?(0,m.jsx)("ul",{className:a?void 0:t,children:n.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:s??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:t,linkClassName:s})]},e.id)))}):null}const v=s.memo(h);function x(e){let{toc:n,className:t="table-of-contents table-of-contents__left-border",linkClassName:o="table-of-contents__link",linkActiveClassName:r,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const x=(0,a.p)(),b=c??x.tableOfContents.minHeadingLevel,g=u??x.tableOfContents.maxHeadingLevel,p=function(e){let{toc:n,minHeadingLevel:t,maxHeadingLevel:a}=e;return(0,s.useMemo)((()=>l({toc:i(n),minHeadingLevel:t,maxHeadingLevel:a})),[n,t,a])}({toc:n,minHeadingLevel:b,maxHeadingLevel:g});return d((0,s.useMemo)((()=>{if(o&&r)return{linkClassName:o,linkActiveClassName:r,minHeadingLevel:b,maxHeadingLevel:g}}),[o,r,b,g])),(0,m.jsx)(v,{toc:p,className:t,linkClassName:o,...h})}},9289:(e,n,t)=>{t.d(n,{A:()=>o});t(8318);var s=t(6120),a=t(403);const i={tag:"tag_qh2_",tagRegular:"tagRegular_mRQt",tagWithCount:"tagWithCount_Lo6P"};var l=t(9214);function o(e){let{permalink:n,label:t,count:o,description:r}=e;return(0,l.jsxs)(a.A,{href:n,title:r,className:(0,s.A)(i.tag,o?i.tagWithCount:i.tagRegular),children:[t,o&&(0,l.jsx)("span",{children:o})]})}},6717:(e,n,t)=>{t.d(n,{A:()=>r});t(8318);var s=t(6120),a=t(5598),i=t(9289);const l={tags:"tags_w8JE",tag:"tag_zICi"};var o=t(9214);function r(e){let{tags:n}=e;return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("b",{children:(0,o.jsx)(a.A,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,o.jsx)("ul",{className:(0,s.A)(l.tags,"padding--none","margin-left--sm"),children:n.map((e=>(0,o.jsx)("li",{className:l.tag,children:(0,o.jsx)(i.A,{...e})},e.permalink)))})]})}},8316:(e,n,t)=>{t.d(n,{A:()=>h});t(8318);var s=t(6120),a=t(5598),i=t(8985),l=t(9214);function o(){return(0,l.jsx)(a.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function r(){return(0,l.jsx)(a.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,l.jsx)(i.A,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=t(8226),u=t(244);function m(e){let{className:n}=e;return(0,l.jsx)(u.A,{type:"caution",title:(0,l.jsx)(o,{}),className:(0,s.A)(n,d.G.common.unlistedBanner),children:(0,l.jsx)(r,{})})}function h(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{}),(0,l.jsx)(m,{...e})]})}}}]);