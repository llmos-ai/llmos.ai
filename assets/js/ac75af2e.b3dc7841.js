"use strict";(self.webpackChunkllmos_ai=self.webpackChunkllmos_ai||[]).push([[173],{3656:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>a,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=r(4848),t=r(8453);const i={sidebar_position:1,title:"Requirements"},d=void 0,l={id:"installation/requirements",title:"Requirements",description:"Whether you're setting up LLMOS on a virtual machine or bare-metal server, each node running LLMOS needs to meet these minimum requirements. These requirements cover LLMOS and its components but don\u2019t include resources needed by the workloads you run.",source:"@site/docs/installation/requirements.md",sourceDirName:"installation",slug:"/installation/requirements",permalink:"/docs/installation/requirements",draft:!1,unlisted:!1,editUrl:"https://github.com/llmos-ai/llmos.ai/tree/main/docs/docs/installation/requirements.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Requirements"},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/docs/category/installation"},next:{title:"Bootstrap Options",permalink:"/docs/installation/"}},o={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Supported Architectures",id:"supported-architectures",level:2},{value:"Supported Operating Systems",id:"supported-operating-systems",level:2},{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Disk Usage",id:"disk-usage",level:3},{value:"Networking",id:"networking",level:2},{value:"Inbound Rules for LLMOS Nodes",id:"inbound-rules-for-llmos-nodes",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Whether you're setting up LLMOS on a virtual machine or bare-metal server, each node running LLMOS needs to meet these minimum requirements. These requirements cover LLMOS and its components but don\u2019t include resources needed by the workloads you run."}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If the node has NVIDIA GPUs, install the ",(0,s.jsx)(n.a,{href:"https://docs.nvidia.com/datacenter/tesla/driver-installation-guide/index.html",children:"NVIDIA driver"})," first.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Ensure the CUDA ",(0,s.jsx)(n.a,{href:"https://developer.nvidia.com/cuda-gpus",children:"Compute Capability"})," is 6.0 or higher."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"No two nodes should have the same hostname."}),"\n",(0,s.jsx)(n.li,{children:"The node must not have any existing Kubernetes clusters running on it."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"supported-architectures",children:"Supported Architectures"}),"\n",(0,s.jsx)(n.p,{children:"LLMOS works on the following system architectures:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"x86_64"}),"\n",(0,s.jsx)(n.li,{children:"arm64/aarch64"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"supported-operating-systems",children:"Supported Operating Systems"}),"\n",(0,s.jsx)(n.p,{children:"While LLMOS is expected to work on most modern Linux distributions, the team has officially tested and verified the following:"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["It\u2019s recommended to turn off ",(0,s.jsx)(n.code,{children:"firewalld"}),". If you keep it enabled, you may need to open additional ports. Check the ",(0,s.jsx)(n.a,{href:"#inbound-rules-for-llmos-nodes",children:"Inbound Rules"})," section for more info."]})}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Distribution"}),(0,s.jsx)(n.th,{children:"Version"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Ubuntu"}),(0,s.jsx)(n.td,{children:"20.04 LTS or newer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"RHEL"}),(0,s.jsx)(n.td,{children:"8.5 or newer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"SLES/OpenSUSE"}),(0,s.jsx)(n.td,{children:"15.3 (Leap) or newer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Rocky Linux"}),(0,s.jsx)(n.td,{children:"8.5 or newer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Debian"}),(0,s.jsx)(n.td,{children:"11.0 or newer"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Fedora"}),(0,s.jsx)(n.td,{children:"37 or newer"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"hardware-requirements",children:"Hardware Requirements"}),"\n",(0,s.jsx)(n.p,{children:"The hardware needs will vary depending on your deployment size. Below are the minimum recommendations:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Spec"}),(0,s.jsx)(n.th,{children:"Minimum Requirement"}),(0,s.jsx)(n.th,{children:"Recommended Spec"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"CPU"}),(0,s.jsx)(n.td,{children:"4 cores"}),(0,s.jsx)(n.td,{children:"8 cores"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Memory"}),(0,s.jsx)(n.td,{children:"16 GB"}),(0,s.jsx)(n.td,{children:"32 GB"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Root Disk Space"}),(0,s.jsx)(n.td,{children:"100  GB"}),(0,s.jsx)(n.td,{children:"200 GB"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Disk Performance"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.a,{href:"https://prog.world/is-storage-speed-suitable-for-etcd-ask-fio/",children:"5,000+ random IOPS"})," for root disk (SSD/NVMe)"]}),(0,s.jsx)(n.td,{children:"Same as minimum requirements"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"disk-usage",children:"Disk Usage"}),"\n",(0,s.jsx)(n.p,{children:"For better performance, always use SSDs for your LLMOS cluster. If you\u2019re using a cloud provider, pick the suitable disk size that gives you the maximum IOPS."}),"\n",(0,s.jsx)(n.h2,{id:"networking",children:"Networking"}),"\n",(0,s.jsx)(n.p,{children:"LLMOS nodes need to access ports 6443 and 8443 on all nodes. The node should not be using other ports."}),"\n",(0,s.jsx)(n.p,{children:"LLMOS uses reverse tunneling, meaning the nodes establish outbound connections to the server, and all Kubelet traffic runs through this tunnel."}),"\n",(0,s.jsx)(n.p,{children:"To use the metrics server, ensure all nodes can communicate with each other on port 10250."}),"\n",(0,s.jsx)(n.h3,{id:"inbound-rules-for-llmos-nodes",children:"Inbound Rules for LLMOS Nodes"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Protocol"}),(0,s.jsx)(n.th,{children:"Port"}),(0,s.jsx)(n.th,{children:"Source"}),(0,s.jsx)(n.th,{children:"Destination"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TCP"}),(0,s.jsx)(n.td,{children:"2379-2380"}),(0,s.jsx)(n.td,{children:"Servers"}),(0,s.jsx)(n.td,{children:"Servers"}),(0,s.jsx)(n.td,{children:"Required for HA setups with embedded etcd"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TCP"}),(0,s.jsx)(n.td,{children:"6443"}),(0,s.jsx)(n.td,{children:"Workers"}),(0,s.jsx)(n.td,{children:"Servers"}),(0,s.jsx)(n.td,{children:"Kubernetes API Server"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TCP"}),(0,s.jsx)(n.td,{children:"8443"}),(0,s.jsx)(n.td,{children:"All nodes"}),(0,s.jsx)(n.td,{children:"All nodes"}),(0,s.jsx)(n.td,{children:"LLMOS dashboard and API"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"UDP"}),(0,s.jsx)(n.td,{children:"8472"}),(0,s.jsx)(n.td,{children:"All nodes"}),(0,s.jsx)(n.td,{children:"All nodes"}),(0,s.jsx)(n.td,{children:"For system VXLAN network"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TCP"}),(0,s.jsx)(n.td,{children:"10250"}),(0,s.jsx)(n.td,{children:"All nodes"}),(0,s.jsx)(n.td,{children:"All nodes"}),(0,s.jsx)(n.td,{children:"Metrics server"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TCP"}),(0,s.jsx)(n.td,{children:"5001, 6443"}),(0,s.jsx)(n.td,{children:"All nodes"}),(0,s.jsx)(n.td,{children:"All nodes"}),(0,s.jsx)(n.td,{children:"Embedded distributed registry (Spegel)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"TCP"}),(0,s.jsx)(n.td,{children:"30000-32767"}),(0,s.jsx)(n.td,{children:"All nodes"}),(0,s.jsx)(n.td,{children:"All nodes"}),(0,s.jsx)(n.td,{children:"NodePort port range"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Usually, all outbound traffic is allowed. Depending on your OS, you may need to adjust the firewall settings."})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},8453:(e,n,r)=>{r.d(n,{R:()=>d,x:()=>l});var s=r(6540);const t={},i=s.createContext(t);function d(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);