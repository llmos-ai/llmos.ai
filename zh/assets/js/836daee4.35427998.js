"use strict";(self.webpackChunkllmos_ai=self.webpackChunkllmos_ai||[]).push([[875],{1285:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var n=t(4848),s=t(8453);const i={sidebar_position:3,title:"Notebooks"},r=void 0,l={id:"user_guide/llm_management/notebooks",title:"Notebooks",description:"Notebooks \u63d0\u4f9b\u4e86\u4e00\u79cd\u5728 LLMOS \u96c6\u7fa4\u5185\u8fd0\u884c JupyterLab\u3001RStudio \u548c VS Code \u7684\u8f7b\u91cf\u7ea7\u57fa\u4e8e Web \u7684\u5f00\u53d1\u73af\u5883\u7684\u65b9\u5f0f\uff0c\u60a8\u53ef\u4ee5\u5728\u5176\u4e2d\u8fd0\u884c\u4ea4\u4e92\u5f0f\u4ee3\u7801\u3001\u6570\u636e\u5206\u6790\u548c\u673a\u5668\u5b66\u4e60\u4efb\u52a1\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/user_guide/llm_management/notebooks.md",sourceDirName:"user_guide/llm_management",slug:"/user_guide/llm_management/notebooks",permalink:"/zh/docs/user_guide/llm_management/notebooks",draft:!1,unlisted:!1,editUrl:"https://github.com/llmos-ai/llmos.ai/tree/main/docs/docs/user_guide/llm_management/notebooks.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"Notebooks"},sidebar:"tutorialSidebar",previous:{title:"LLM Management",permalink:"/zh/docs/category/llm-management"},next:{title:"\u6a21\u578b\u670d\u52a1",permalink:"/zh/docs/user_guide/llm_management/serve"}},d={},c=[{value:"\u521b\u5efa Notebook",id:"\u521b\u5efa-notebook",level:3},{value:"Notebook \u955c\u50cf",id:"notebook-\u955c\u50cf",level:3}];function a(e){const o={a:"a",admonition:"admonition",code:"code",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.p,{children:"Notebooks \u63d0\u4f9b\u4e86\u4e00\u79cd\u5728 LLMOS \u96c6\u7fa4\u5185\u8fd0\u884c JupyterLab\u3001RStudio \u548c VS Code \u7684\u8f7b\u91cf\u7ea7\u57fa\u4e8e Web \u7684\u5f00\u53d1\u73af\u5883\u7684\u65b9\u5f0f\uff0c\u60a8\u53ef\u4ee5\u5728\u5176\u4e2d\u8fd0\u884c\u4ea4\u4e92\u5f0f\u4ee3\u7801\u3001\u6570\u636e\u5206\u6790\u548c\u673a\u5668\u5b66\u4e60\u4efb\u52a1\u3002"}),"\n",(0,n.jsx)(o.p,{children:"\u501f\u52a9 Notebooks\uff0c\u60a8\u53ef\u4ee5\u8f7b\u677e\u521b\u5efa\u548c\u7ba1\u7406\u8f7b\u91cf\u7ea7\u7684 Notebook \u73af\u5883\uff0c\u63d0\u4f9b\u65e0\u7f1d\u9ad8\u6548\u7684\u5f00\u53d1\u4f53\u9a8c\u3002\u60a8\u53ef\u4ee5\u4f7f\u7528 Notebooks \u5b8c\u6210\u4ee5\u4e0b\u4efb\u52a1\uff1a"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"\u539f\u751f\u5e94\u7528\u652f\u6301"}),"\uff1a\u65e0\u7f1d\u8fd0\u884c\u72ec\u7acb\u73af\u5883\u4e2d\u7684 JupyterLab\u3001RStudio \u548c Visual Studio Code (code-server)\u3002"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"\u57fa\u4e8e\u96c6\u7fa4\u7684 Notebooks"}),"\uff1a\u76f4\u63a5\u5728\u96c6\u7fa4\u4e2d\u521b\u5efa\u548c\u7ba1\u7406\u8f7b\u91cf\u7ea7 Notebook \u5bb9\u5668\uff0c\u6d88\u9664\u5728\u672c\u5730\u7b14\u8bb0\u672c\u7535\u8111\u4e0a\u8fd0\u884c\u5b83\u4eec\u7684\u9700\u8981\uff0c\u5e76\u4e14\u80fd\u4ee5\u975e\u5e38\u5bb9\u6613\u7684\u4e0e\u5176\u4ed6\u670d\u52a1\u5982 ModelService, ML \u96c6\u7fa4\u8fdb\u884c\u4ea4\u4e92\u3002"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"\u6807\u51c6\u5316 Notebook \u955c\u50cf"}),"\uff1a\u7ba1\u7406\u5458\u53ef\u4ee5\u63d0\u4f9b\u9884\u5148\u914d\u7f6e\u7684 Notebook \u955c\u50cf\uff0c\u9884\u5b89\u88c5\u6240\u9700\u7684\u8f6f\u4ef6\u5305\uff0c\u786e\u4fdd\u7ec4\u7ec7\u548c\u56e2\u961f\u4e4b\u95f4\u7684\u4e00\u81f4\u6027\u3002"]}),"\n",(0,n.jsxs)(o.li,{children:[(0,n.jsx)(o.strong,{children:"\u8bbf\u95ee\u63a7\u5236"}),"\uff1a\u901a\u8fc7 RBAC \u7ba1\u7406 Notebook \u8bbf\u95ee\uff0c\u5141\u8bb8\u5728\u7ec4\u7ec7\u6216\u56e2\u961f\u4e2d\u7b80\u5316\u548c\u5b89\u5168\u5730\u5171\u4eab Notebooks\u3002"]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Notebooks",src:t(743).A+"",width:"3176",height:"740"})}),"\n",(0,n.jsx)(o.h3,{id:"\u521b\u5efa-notebook",children:"\u521b\u5efa Notebook"}),"\n",(0,n.jsx)(o.p,{children:"\u5f00\u59cb\u4f7f\u7528 Notebooks \u975e\u5e38\u7b80\u5355\u3002"}),"\n",(0,n.jsxs)(o.ol,{children:["\n",(0,n.jsxs)(o.li,{children:["\u5728\u6d4f\u89c8\u5668\u4e2d\u6253\u5f00 LLMOS Dashboard\uff0c\u5e76\u8f6c\u5230 ",(0,n.jsx)(o.strong,{children:"LLMOS Management > Notebooks"})," \u9875\u9762\u3002"]}),"\n",(0,n.jsxs)(o.li,{children:["\u70b9\u51fb\u53f3\u4e0a\u89d2\u7684 ",(0,n.jsx)(o.strong,{children:"Create"}),"\u3002"]}),"\n",(0,n.jsxs)(o.li,{children:["\u9009\u62e9 Notebook ",(0,n.jsx)(o.strong,{children:"\u7c7b\u578b"})," \u548c\u60a8\u60f3\u7528\u4e8e Notebook \u670d\u52a1\u5668\u7684\u955c\u50cf\u3002"]}),"\n",(0,n.jsxs)(o.li,{children:["\u6307\u5b9a Notebook \u670d\u52a1\u5668\u7684\u540d\u79f0\u3001\u547d\u540d\u7a7a\u95f4\u3001\u8d44\u6e90\u548c\u6301\u4e45\u5b58\u50a8\uff08\u5377\uff09\u8bbe\u7f6e\u3002\n",(0,n.jsx)(o.img,{alt:"Notebook-create",src:t(9802).A+"",width:"3116",height:"928"})]}),"\n",(0,n.jsxs)(o.li,{children:["\u4e00\u65e6 Notebook \u670d\u52a1\u5668\u914d\u7f6e\u5b8c\u6210\u5e76\u542f\u52a8\uff0c\u70b9\u51fb ",(0,n.jsx)(o.strong,{children:"Visit"})," \u8bbf\u95ee\u60a8\u7684 Notebook \u670d\u52a1\u5668\u3002\n",(0,n.jsx)(o.img,{alt:"Notebook-visit",src:t(6484).A+"",width:"3096",height:"858"})]}),"\n"]}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.img,{alt:"Notebook-juypter",src:t(3994).A+"",width:"3834",height:"2030"})}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["\u9ed8\u8ba4\u5de5\u4f5c\u533a\u4e3a ",(0,n.jsx)(o.code,{children:"/home/jovyan"})]}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"notebook-\u955c\u50cf",children:"Notebook \u955c\u50cf"}),"\n",(0,n.jsxs)(o.p,{children:["LLMOS \u76ee\u524d\u63d0\u4f9b\u4e09\u79cd\u7c7b\u578b\u7684 Notebook \u955c\u50cf\u4f9b\u60a8\u9009\u62e9\uff0c\u4f46\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,n.jsx)(o.code,{children:"default-Notebook-images"})," \u8bbe\u7f6e\u8f7b\u677e\u6dfb\u52a0\u81ea\u5df1\u7684\u955c\u50cf\uff1a"]}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"https://github.com/jupyterlab/jupyterlab",children:"JupyterLab"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"https://github.com/coder/code-server",children:"Visual Studio Code (code-server)"})}),"\n",(0,n.jsx)(o.li,{children:(0,n.jsx)(o.a,{href:"https://github.com/rstudio/rstudio",children:"RStudio"})}),"\n"]}),"\n",(0,n.jsxs)(o.admonition,{type:"note",children:[(0,n.jsx)(o.p,{children:"\u7528\u6237\u5728\u751f\u6210 Notebook \u670d\u52a1\u5668\u540e\u5b89\u88c5\u7684\u8f6f\u4ef6\u5305\u4ec5\u5728 Pod \u91cd\u542f\u671f\u95f4\u6709\u6548\uff0c\u8981\u786e\u4fdd\u8f6f\u4ef6\u5305\u5728 Pod \u91cd\u542f\u671f\u95f4\u5f97\u4ee5\u4fdd\u7559\uff0c\u60a8\u9700\u8981\uff1a"}),(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsx)(o.li,{children:"\u6784\u5efa\u5305\u542b\u8fd9\u4e9b\u8f6f\u4ef6\u5305\u7684\u81ea\u5b9a\u4e49\u955c\u50cf\uff0c\u6216"}),"\n",(0,n.jsx)(o.li,{children:"\u786e\u4fdd\u5b83\u4eec\u5b89\u88c5\u5728\u6301\u4e45\u5377\u652f\u6301\u7684\u76ee\u5f55\u4e2d\u3002"}),"\n"]})]})]})}function h(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},9802:(e,o,t)=>{t.d(o,{A:()=>n});const n=t.p+"assets/images/notebook-create-general-99db6aa40c446949ff82d261366aefb8.png"},3994:(e,o,t)=>{t.d(o,{A:()=>n});const n=t.p+"assets/images/notebook-jupyter-dfc2e8cc3e2e56968caf5861f68a3a58.png"},6484:(e,o,t)=>{t.d(o,{A:()=>n});const n=t.p+"assets/images/notebook-visit-f1ad7c017bcb377d5cfcb9f0b8af0361.png"},743:(e,o,t)=>{t.d(o,{A:()=>n});const n=t.p+"assets/images/notebooks-84a248b8f6d0306e39416acf30378a11.png"},8453:(e,o,t)=>{t.d(o,{R:()=>r,x:()=>l});var n=t(6540);const s={},i=n.createContext(s);function r(e){const o=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function l(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);