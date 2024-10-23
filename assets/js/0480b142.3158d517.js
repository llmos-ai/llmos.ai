"use strict";(self.webpackChunkllmos_ai=self.webpackChunkllmos_ai||[]).push([[70],{2453:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=n(4848),i=n(8453);const r={sidebar_position:200,title:"FAQ"},o=void 0,a={id:"faq",title:"FAQ",description:"This FAQ is regularly updated to help answer common questions about using LLMOS.",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",draft:!1,unlisted:!1,editUrl:"https://github.com/llmos-ai/llmos.ai/tree/main/docs/docs/faq.md",tags:[],version:"current",sidebarPosition:200,frontMatter:{sidebar_position:200,title:"FAQ"},sidebar:"tutorialSidebar",previous:{title:"Settings",permalink:"/docs/settings"}},l={},d=[{value:"What&#39;s the default path for LLMOS data?",id:"whats-the-default-path-for-llmos-data",level:3},{value:"Where can I find the LLMOS configuration file?",id:"where-can-i-find-the-llmos-configuration-file",level:3},{value:"Where can I find the cluster token?",id:"where-can-i-find-the-cluster-token",level:3},{value:"My cluster can&#39;t find the GPU driver",id:"my-cluster-cant-find-the-gpu-driver",level:3},{value:"Where can I find the Kubeconfig file?",id:"where-can-i-find-the-kubeconfig-file",level:3},{value:"How do I reset the admin password?",id:"how-do-i-reset-the-admin-password",level:3}];function c(e){const t={a:"a",code:"code",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"This FAQ is regularly updated to help answer common questions about using LLMOS."}),"\n",(0,s.jsx)(t.h3,{id:"whats-the-default-path-for-llmos-data",children:"What's the default path for LLMOS data?"}),"\n",(0,s.jsxs)(t.p,{children:["The default path for LLMOS data is ",(0,s.jsx)(t.code,{children:"/var/lib/llmos"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"where-can-i-find-the-llmos-configuration-file",children:"Where can I find the LLMOS configuration file?"}),"\n",(0,s.jsxs)(t.p,{children:["You can find the configuration file at ",(0,s.jsx)(t.code,{children:"/etc/llmos/config.yaml"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"where-can-i-find-the-cluster-token",children:"Where can I find the cluster token?"}),"\n",(0,s.jsxs)(t.p,{children:["The cluster token is located at ",(0,s.jsx)(t.code,{children:"/var/lib/llmos/token"}),", or you can run the command ",(0,s.jsx)(t.code,{children:"llmos get-token"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"my-cluster-cant-find-the-gpu-driver",children:"My cluster can't find the GPU driver"}),"\n",(0,s.jsx)(t.p,{children:"LLMOS automatically detects and sets up the NVIDIA container runtime if the NVIDIA driver is present when LLMOS starts."}),"\n",(0,s.jsxs)(t.p,{children:["If you installed the ",(0,s.jsx)(t.a,{href:"https://docs.nvidia.com/datacenter/tesla/driver-installation-guide/index.html",children:"NVIDIA driver"})," after starting LLMOS, restart your machine for it to be detected."]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"# Reboot the machine\nsudo reboot now\n# Check if the NVIDIA driver and GPUs are working after reboot\nnvidia-smi\n"})}),"\n",(0,s.jsx)(t.h3,{id:"where-can-i-find-the-kubeconfig-file",children:"Where can I find the Kubeconfig file?"}),"\n",(0,s.jsxs)(t.p,{children:["The Kubeconfig file is at ",(0,s.jsx)(t.code,{children:"/etc/llmos/kubeconfig.yaml"}),"."]}),"\n",(0,s.jsx)(t.h3,{id:"how-do-i-reset-the-admin-password",children:"How do I reset the admin password?"}),"\n",(0,s.jsx)(t.p,{children:"If you forgot the admin password, here\u2019s how to reset it:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Option 1: Ask another admin to set a new password for you in the LLMOS Dashboard under ",(0,s.jsx)(t.strong,{children:"Users & Authentication > Users"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Option 2: If you're the only admin, follow these steps:"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"# Delete the default admin user\nkubectl get users.management.llmos.ai -ojson | jq -r '.items[] | select(.spec.username == \"admin\") | .metadata.name' | xargs -I {} kubectl delete users {}\n\n# Restart the LLMOS API Server to create a new default admin\nkubectl rollout restart deployment llmos-operator -n llmos-system\n\n# Get the new password:\nkubectl get secret --namespace llmos-system llmos-bootstrap-passwd -o go-template='{{.data.password|base64decode}}{{\"\\n\"}}'\n"})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var s=n(6540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);