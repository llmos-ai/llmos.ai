"use strict";(self.webpackChunkllmos_ai=self.webpackChunkllmos_ai||[]).push([[817],{4178:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>a,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var i=s(4848),t=s(8453);const r={sidebar_position:3,title:"API \u5bc6\u94a5"},l=void 0,c={id:"user_and_auth/api-keys",title:"API \u5bc6\u94a5",description:"LLMOS \u652f\u6301\u4f7f\u7528 API \u5bc6\u94a5\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\uff0c\u6bcf\u4e2a\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u53f3\u4e0a\u89d2\u83dc\u5355\u4e2d\u7684\u8d26\u6237\u4e0e API \u5bc6\u94a5\u9875\u9762\u521b\u5efa\u548c\u7ba1\u7406\u81ea\u5df1\u7684 API \u5bc6\u94a5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/user_and_auth/api-keys.md",sourceDirName:"user_and_auth",slug:"/user_and_auth/api-keys",permalink:"/zh/docs/user_and_auth/api-keys",draft:!1,unlisted:!1,editUrl:"https://github.com/llmos-ai/llmos.ai/tree/main/docs/docs/user_and_auth/api-keys.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"API \u5bc6\u94a5"},sidebar:"tutorialSidebar",previous:{title:"\u89d2\u8272\u6a21\u677f",permalink:"/zh/docs/user_and_auth/role-template"},next:{title:"\u5168\u5c40\u8bbe\u7f6e",permalink:"/zh/docs/settings"}},d={},o=[{value:"\u521b\u5efa API \u5bc6\u94a5",id:"\u521b\u5efa-api-\u5bc6\u94a5",level:3},{value:"\u5220\u9664 API \u5bc6\u94a5",id:"\u5220\u9664-api-\u5bc6\u94a5",level:2}];function h(n){const e={admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(e.p,{children:["LLMOS \u652f\u6301\u4f7f\u7528 API \u5bc6\u94a5\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\uff0c\u6bcf\u4e2a\u7528\u6237\u53ef\u4ee5\u901a\u8fc7\u53f3\u4e0a\u89d2\u83dc\u5355\u4e2d\u7684",(0,i.jsx)(e.strong,{children:"\u8d26\u6237\u4e0e API \u5bc6\u94a5"}),"\u9875\u9762\u521b\u5efa\u548c\u7ba1\u7406\u81ea\u5df1\u7684 API \u5bc6\u94a5\u3002"]}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{alt:"\u8d26\u6237\u4e0e API \u5bc6\u94a5",src:s(3592).A+"",width:"3676",height:"1248"})}),"\n",(0,i.jsx)(e.p,{children:"\u4f7f\u7528 API \u5bc6\u94a5\u8fdb\u884c\u8eab\u4efd\u9a8c\u8bc1\u7531\u4ee5\u4e0b\u51e0\u4e2a\u7ec4\u4ef6\u7ec4\u6210\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"API \u7aef\u53e3"})," \u8fd9\u662f\u5176\u4ed6\u5e94\u7528\u7a0b\u5e8f\u7528\u4e8e\u5411 LLMOS API \u53d1\u9001\u8bf7\u6c42\u7684 IP \u5730\u5740\u548c\u8def\u5f84\u3002","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u901a\u5e38\uff0c\u8fd9\u5c06\u662f ",(0,i.jsx)(e.code,{children:"https://$server-url:8443/v1"}),"\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"API Token\uff1a"})," \u8fd9\u662f\u7528\u4e8e\u8eab\u4efd\u9a8c\u8bc1\u8bf7\u6c42\u7684 API \u5bc6\u94a5\u7684\u552f\u4e00\u6807\u8bc6\u7b26\u3002","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u5bf9\u4e8e\u63d0\u793a\u60a8\u8f93\u5165\u4e24\u4e2a\u4e0d\u540c\u5b57\u7b26\u4e32\u8fdb\u884c API \u8eab\u4efd\u9a8c\u8bc1\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u4f8b\u5982 HTTP \u57fa\u672c\u8eab\u4efd\u9a8c\u8bc1\uff0c\u8bf7\u4f7f\u7528\uff1a","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Access Key\uff1a"})," \u4ee4\u724c\u7684\u7528\u6237\u540d\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Secret Key\uff1a"})," \u4ee4\u724c\u7684\u5bc6\u7801\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\u5bf9\u4e8e\u63d0\u793a\u60a8\u8f93\u5165\u4e00\u4e2a\u8eab\u4efd\u9a8c\u8bc1\u5b57\u7b26\u4e32\u7684\u5e94\u7528\u7a0b\u5e8f\uff0c\u8bf7\u4f7f\u7528\uff1a","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.strong,{children:"Bearer Token\uff1a"})," \u4ee4\u724c\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\u7528\u5192\u53f7 ",(0,i.jsx)(e.code,{children:"(:)"})," \u8fde\u63a5\u5728\u4e00\u8d77\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"\u521b\u5efa-api-\u5bc6\u94a5",children:"\u521b\u5efa API \u5bc6\u94a5"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\u5728",(0,i.jsx)(e.strong,{children:"\u8d26\u6237\u4e0e API \u5bc6\u94a5"}),"\u9875\u9762\u4e0a\u70b9\u51fb",(0,i.jsx)(e.strong,{children:"\u521b\u5efa API \u5bc6\u94a5"}),"\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:[(0,i.jsx)(e.em,{children:"(\u53ef\u9009)"})," \u8f93\u5165 API \u5bc6\u94a5",(0,i.jsx)(e.strong,{children:"\u63cf\u8ff0"}),"\u4ee5\u8bc6\u522b\u8be5\u5bc6\u94a5\u7684\u7528\u9014\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u914d\u7f6e\u8fc7\u671f\u65f6\u95f4\uff0c\u8f83\u77ed\u7684\u8fc7\u671f\u65f6\u95f4\u901a\u5e38\u66f4\u5b89\u5168\u3002","\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["API \u5bc6\u94a5\u7684\u6700\u5927\u6709\u6548\u671f\u53d7\u7cfb\u7edf\u8bbe\u7f6e ",(0,i.jsx)(e.code,{children:"auth-token-max-ttl-minutes"})," \u7684\u9650\u5236\uff0c\u9ed8\u8ba4\u4e3a ",(0,i.jsx)(e.strong,{children:"90 \u5929"}),"\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["API \u5bc6\u94a5\u5728\u8fc7\u671f\u540e\u5c06\u5931\u6548\uff0c\u7cfb\u7edf\u5c06\u5b9a\u671f\u81ea\u52a8\u5220\u9664\uff0c\u60a8\u4e5f\u53ef\u4ee5\u624b\u52a8\u5220\u9664\u3002\n",(0,i.jsx)(e.img,{alt:"API \u5bc6\u94a5",src:s(1230).A+"",width:"3556",height:"878"})]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\u70b9\u51fb ",(0,i.jsx)(e.strong,{children:"\u521b\u5efa"})," \u4ee5\u751f\u6210 API \u5bc6\u94a5\uff0c\u60a8\u5c06\u770b\u5230\u751f\u6210\u7684 API \u5bc6\u94a5\u3002\n",(0,i.jsx)(e.img,{alt:"API \u5bc6\u94a5",src:s(8087).A+"",width:"3468",height:"1210"})]}),"\n"]}),"\n",(0,i.jsx)(e.admonition,{title:"\u6ce8\u610f",type:"info",children:(0,i.jsx)(e.p,{children:"\u60a8\u53ea\u80fd\u5728\u521b\u5efa\u65f6\u770b\u5230\u751f\u6210\u7684 API \u5bc6\u94a5\uff0c\u8bf7\u5c06\u5176\u4fdd\u5b58\u5728\u5b89\u5168\u7684\u5730\u65b9\u3002\u5982\u679c\u4e22\u5931\uff0c\u60a8\u9700\u8981\u521b\u5efa\u65b0\u7684 API \u5bc6\u94a5\u3002"})}),"\n",(0,i.jsx)(e.h2,{id:"\u5220\u9664-api-\u5bc6\u94a5",children:"\u5220\u9664 API \u5bc6\u94a5"}),"\n",(0,i.jsxs)(e.ol,{children:["\n",(0,i.jsxs)(e.li,{children:["\u5728",(0,i.jsx)(e.strong,{children:"\u8d26\u6237\u4e0e API \u5bc6\u94a5"}),"\u9875\u9762\u4e0a\u627e\u5230\u60a8\u8981\u5220\u9664\u7684 API \u5bc6\u94a5\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u70b9\u51fb\u8be5 API \u5bc6\u94a5\u884c\u4e0a\u7684",(0,i.jsx)(e.strong,{children:"\u5220\u9664"}),"\u3002"]}),"\n",(0,i.jsx)(e.li,{children:"\u5728\u786e\u8ba4\u540e\uff0c\u60a8\u7684 API \u5bc6\u94a5\u5c06\u88ab\u79fb\u9664\uff0c\u4ee4\u724c\u5c06\u4e0d\u518d\u6709\u6548\u3002"}),"\n"]})]})}function a(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},1230:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/auth-apikey-create-8f0046b409b461b397513221c5d42328.png"},3592:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/auth-apikeys-top-nav-menu-f3f2c8662ca01535476b80088c2c19dc.png"},8087:(n,e,s)=>{s.d(e,{A:()=>i});const i=s.p+"assets/images/auth-generated-apikey-d209be3d95c12e9367c183c8db4753e0.png"},8453:(n,e,s)=>{s.d(e,{R:()=>l,x:()=>c});var i=s(6540);const t={},r=i.createContext(t);function l(n){const e=i.useContext(r);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),i.createElement(r.Provider,{value:e},n.children)}}}]);