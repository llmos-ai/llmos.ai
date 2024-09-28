"use strict";(self.webpackChunkllmos_ai=self.webpackChunkllmos_ai||[]).push([[588],{561:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var a=s(4848),d=s(8453);const t={sidebar_position:2,title:"Managed Addons"},r=void 0,o={id:"user_guide/advanced/managed_addon",title:"Managed Addons",description:"Managed Addons help manage additional components required for your LLMOS cluster. By default, LLMOS comes with a set of system addons that are enabled out of the box. These system addons include:",source:"@site/docs/user_guide/advanced/managed_addon.md",sourceDirName:"user_guide/advanced",slug:"/user_guide/advanced/managed_addon",permalink:"/docs/user_guide/advanced/managed_addon",draft:!1,unlisted:!1,editUrl:"https://github.com/llmos-ai/llmos.ai/tree/main/docs/docs/user_guide/advanced/managed_addon.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Managed Addons"},sidebar:"tutorialSidebar",previous:{title:"Namespace",permalink:"/docs/user_guide/advanced/namespace"},next:{title:"Users & RBAC",permalink:"/docs/category/users--rbac"}},i={},l=[{value:"Creating a Managed Addon",id:"creating-a-managed-addon",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,d.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Managed Addons help manage additional components required for your LLMOS cluster. By default, LLMOS comes with a set of system addons that are enabled out of the box. These system addons include:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Nvidia GPU Operator:"})," Enables support for Nvidia GPUs in your LLMOS cluster using the ",(0,a.jsx)(n.a,{href:"https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/latest/index.html",children:"Nvidia GPU Operator"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"KubeRay Operator:"})," Facilitates the management of Ray clusters and other machine learning resources in your LLMOS cluster through the ",(0,a.jsx)(n.a,{href:"https://www.ray.io/",children:"KubeRay Operator"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"LLMOS Redis:"})," Provides a LLMOS-managed ",(0,a.jsx)(n.a,{href:"https://redis.io/",children:"Redis"})," service for your cluster."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"Rook Ceph Operator:"})," Adds storage support to your cluster using the ",(0,a.jsx)(n.a,{href:"https://rook.io/",children:"Rook Ceph"})," operator."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"System Update Controller:"})," Manages LLMOS node upgrades with the ",(0,a.jsx)(n.a,{href:"https://github.com/rancher/system-upgrade-controller",children:"System Upgrade Controller"})," through customizable upgrade plans."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Managed Addons",src:s(6460).A+"",width:"3114",height:"1006"})}),"\n",(0,a.jsx)(n.admonition,{type:"note",children:(0,a.jsx)(n.p,{children:"System addons are essential for LLMOS to function correctly. However, you can install additional addons beyond the default set as needed."})}),"\n",(0,a.jsx)(n.h2,{id:"creating-a-managed-addon",children:"Creating a Managed Addon"}),"\n",(0,a.jsxs)(n.p,{children:["Managed Addons use ",(0,a.jsx)(n.a,{href:"https://helm.sh/",children:"Helm"})," for installation and management. You can also add additional addons from external sources like the ",(0,a.jsx)(n.a,{href:"https://artifacthub.io/",children:"Artifact Hub"}),"."]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["Navigate to the ",(0,a.jsx)(n.strong,{children:"Managed Addons"})," page and click ",(0,a.jsx)(n.strong,{children:"Create"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Select the desired ",(0,a.jsx)(n.strong,{children:"Namespace"})," and enter a name for the addon."]}),"\n",(0,a.jsxs)(n.li,{children:["Provide the ",(0,a.jsx)(n.strong,{children:"Chart Repository URL"})," (e.g., ",(0,a.jsx)(n.code,{children:"https://grafana.github.io/helm-charts"}),"), ",(0,a.jsx)(n.strong,{children:"Chart Name"}),", and ",(0,a.jsx)(n.strong,{children:"Version"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.em,{children:"(Optional)"})," Set ",(0,a.jsx)(n.strong,{children:"Enabled"})," to ",(0,a.jsx)(n.code,{children:"false"})," if you plan to enable the addon later."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.em,{children:"(Optional)"})," Customize the addon by adding ",(0,a.jsx)(n.code,{children:"Values"})," content to override default settings, if necessary."]}),"\n",(0,a.jsxs)(n.li,{children:["Click ",(0,a.jsx)(n.strong,{children:"Create"})," to start the installation process."]}),"\n",(0,a.jsxs)(n.li,{children:["The addon will install in the background. You can monitor its status on the ",(0,a.jsx)(n.strong,{children:"Managed Addons"})," page.","\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["The status will display as ",(0,a.jsx)(n.code,{children:"Ready"})," once the addon is successfully installed."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"Add Managed Addons",src:s(8026).A+"",width:"3188",height:"1746"})})]})}function h(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8026:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/managed-addon-create-6126c635c1e000e1dde78c60b76ff1a9.png"},6460:(e,n,s)=>{s.d(n,{A:()=>a});const a=s.p+"assets/images/managed-addons-4e9a402f706d787cf995ded507d362f9.png"},8453:(e,n,s)=>{s.d(n,{R:()=>r,x:()=>o});var a=s(6540);const d={},t=a.createContext(d);function r(e){const n=a.useContext(t);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);