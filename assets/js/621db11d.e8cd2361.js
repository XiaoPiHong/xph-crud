"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4212],{9687:(t,e,s)=>{s.r(e),s.d(e,{default:()=>m});s(7378);var a=s(23372),o=s(34880),r=s(81671),l=s(85981),u=s(9635),n=s(22698),i=s(25827),c=s(37041);const h={authorListItem:"authorListItem_GSGq"};var g=s(86106);function p(t){let{author:e}=t;return(0,g.jsx)("li",{className:h.authorListItem,children:(0,g.jsx)(c.A,{as:"h2",author:e,count:e.count})})}function d(t){let{authors:e}=t;return(0,g.jsx)("section",{className:(0,a.A)("margin-vert--lg",h.authorsListSection),children:(0,g.jsx)("ul",{children:e.map((t=>(0,g.jsx)(p,{author:t},t.key)))})})}function m(t){let{authors:e,sidebar:s}=t;const c=(0,l.uz)();return(0,g.jsxs)(o.e3,{className:(0,a.A)(r.G.wrapper.blogPages,r.G.page.blogAuthorsListPage),children:[(0,g.jsx)(o.be,{title:c}),(0,g.jsx)(n.A,{tag:"blog_authors_list"}),(0,g.jsxs)(u.A,{sidebar:s,children:[(0,g.jsx)(i.A,{as:"h1",children:c}),(0,g.jsx)(d,{authors:e})]})]})}},85981:(t,e,s)=>{s.d(e,{ZD:()=>l,uz:()=>u});s(7378);var a=s(93749),o=s(98793);s(86106);function r(){const{selectMessage:t}=(0,o.W)();return e=>t(e,(0,a.T)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}function l(t){const e=r();return(0,a.T)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:e(t.count),tagName:t.label})}const u=()=>(0,a.T)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"})}}]);