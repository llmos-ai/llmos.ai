"use strict";(self.webpackChunkllmos_ai=self.webpackChunkllmos_ai||[]).push([[3897],{4273:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var s=t(4848),i=t(8453);const r={sidebar_position:2,title:"Bootstrap Options"},l=void 0,o={id:"installation/index",title:"Bootstrap Options",description:"Installation Script",source:"@site/docs/installation/index.md",sourceDirName:"installation",slug:"/installation/",permalink:"/docs/installation/",draft:!1,unlisted:!1,editUrl:"https://github.com/llmos-ai/llmos.ai/tree/main/docs/docs/installation/index.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Bootstrap Options"},sidebar:"tutorialSidebar",previous:{title:"Requirements",permalink:"/docs/installation/requirements"},next:{title:"LLMOS Configurations",permalink:"/docs/installation/configurations"}},d={},c=[{value:"Installation Script",id:"installation-script",level:2},{value:"Cluster Initialization",id:"cluster-initialization",level:3},{value:"Join a Cluster",id:"join-a-cluster",level:3},{value:"Node Roles",id:"node-roles",level:3},{value:"Config Proxy",id:"config-proxy",level:3},{value:"Bootstrap Environment Variables",id:"bootstrap-environment-variables",level:3},{value:"Installation Script Environment Variables",id:"installation-script-environment-variables",level:3}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"installation-script",children:"Installation Script"}),"\n",(0,s.jsxs)(n.p,{children:["The installation script provides a convenient method to bootstrap LLMOS using a shell script. It automatically downloads the latest LLMOS release from ",(0,s.jsx)(n.a,{href:"https://github.com/llmos-ai/llmos/releases",children:"Github"})," and initializes the LLMOS cluster and system components via the systemd service."]}),"\n",(0,s.jsxs)(n.p,{children:["Make sure your nodes meet the ",(0,s.jsx)(n.a,{href:"./requirements",children:"requirements"})," before proceeding."]}),"\n",(0,s.jsx)(n.h3,{id:"cluster-initialization",children:"Cluster Initialization"}),"\n",(0,s.jsxs)(n.p,{children:["Cluster creation begins with one node initializing the cluster by assigning the ",(0,s.jsx)(n.code,{children:"cluster-init"})," role. Other nodes can then join the cluster later.\nA unique token is generated for the new cluster, or you can manually assign one. To retrieve the token for an existing cluster, run ",(0,s.jsx)(n.code,{children:"llmos get-token"})," or ",(0,s.jsx)(n.code,{children:"cat /var/lib/llmos/token"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"To bootstrap a new cluster, run the following command on a bare-metal server or virtual machine:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"curl -sfL https://get-llmos.1block.ai | sh -s - --cluster-init --token mytoken\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"For CN users, you can use the following command to accelerate the installation:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"sudo curl -sfL https://get-llmos.1block.ai | sh -s - --cluster-init --token mytoken --mirror cn\n"})})]}),"\n",(0,s.jsxs)(n.p,{children:["For more advanced configurations, you can check out the ",(0,s.jsx)(n.a,{href:"/docs/installation/configurations",children:"LLMOS Configurations"})," page."]}),"\n",(0,s.jsx)(n.h3,{id:"join-a-cluster",children:"Join a Cluster"}),"\n",(0,s.jsxs)(n.p,{children:["To add more nodes to the cluster, you can assign them the ",(0,s.jsx)(n.strong,{children:"server"})," role to increase the number of management nodes or the ",(0,s.jsx)(n.strong,{children:"agent"})," role to add more worker nodes.\nTo join a node, you will need the ",(0,s.jsx)(n.code,{children:"server-url"})," and the cluster ",(0,s.jsx)(n.code,{children:"token"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"curl -sfL https://get-llmos.1block.ai | sh -s - --server https://server-url:6443 --token mytoken\n"})}),"\n",(0,s.jsxs)(n.admonition,{type:"info",children:[(0,s.jsxs)(n.p,{children:["If you have already configured those options using the ",(0,s.jsx)(n.a,{href:"/docs/installation/configurations",children:"LLMOS Configuration"})," file, you can just run the installation script with:\n",(0,s.jsx)(n.code,{children:"curl -sfL https://get-llmos.1block.ai | sh -"}),"."]}),(0,s.jsxs)(n.p,{children:["Or if you have already downloaded the ",(0,s.jsx)(n.a,{href:"https://github.com/llmos-ai/llmos/releases",children:"LLMOS binary"})," manually, you can run with:"]}),(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"llmos bootstrap --debug"})})]}),"\n",(0,s.jsx)(n.h3,{id:"node-roles",children:"Node Roles"}),"\n",(0,s.jsx)(n.p,{children:"LLMOS will bootstrap a node with one of the following roles:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"cluster-init:"})," The first node in every cluster must have this role."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"server:"})," Joins the cluster with a management role, functioning as a control-plane, etcd, and worker node."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"agent:"}),"  Joins the cluster as a worker-only node."]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"config-proxy",children:"Config Proxy"}),"\n",(0,s.jsxs)(n.p,{children:["If you environment needs to access the internet through a proxy, you can set the ",(0,s.jsx)(n.code,{children:"HTTP_PROXY"})," and ",(0,s.jsx)(n.code,{children:"HTTPS_PROXY"})," environment variables to configure the installation script to use the proxy."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"export HTTP_PROXY=http://proxy.example.com:8080\nexport HTTPS_PROXY=http://proxy.example.com:8080\nexport NO_PROXY=127.0.0.0/8,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16\n"})}),"\n",(0,s.jsx)(n.h3,{id:"bootstrap-environment-variables",children:"Bootstrap Environment Variables"}),"\n",(0,s.jsxs)(n.p,{children:["Environment variables prefixed with ",(0,s.jsx)(n.code,{children:"LLMOS_"})," are preserved for the systemd service."]}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Flag"}),(0,s.jsx)(n.th,{children:"Environment Variable"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"--cluster-init"}),(0,s.jsx)(n.td,{children:"LLMOS_CLUSTER_INIT"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsx)(n.td,{children:"Run bootstrap as cluster-init node."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"--server"}),(0,s.jsx)(n.td,{children:"LLMOS_SERVER"}),(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{children:["The URL of the server to join. e.g., ",(0,s.jsx)(n.code,{children:"https://server-url:6443"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"--token"}),(0,s.jsx)(n.td,{children:"LLMOS_TOKEN"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:"The token to use for join the cluster."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"--role"}),(0,s.jsx)(n.td,{children:"LLMOS_ROLE"}),(0,s.jsx)(n.td,{}),(0,s.jsxs)(n.td,{children:["The node role to join the cluster. Default to ",(0,s.jsx)(n.code,{children:"agent"})," role when server URL and token is provided but the role is empty."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"--force"}),(0,s.jsx)(n.td,{children:"LLMOS_BOOTSTRAP_FORCE"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsx)(n.td,{children:"Force run bootstrap even if already bootstrapped."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"--config"}),(0,s.jsx)(n.td,{children:"LLMOS_CONFIG_FILE"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/etc/llmos/config.yaml"})}),(0,s.jsx)(n.td,{children:"Path to the LLMOS configuration file."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"--data-dir"}),(0,s.jsx)(n.td,{children:"LLMOS_DATA_DIR"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/var/lib/llmos"})}),(0,s.jsx)(n.td,{children:"Path to the LLMOS data directory."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"--debug"}),(0,s.jsx)(n.td,{children:"LLMOS_DEBUG"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsx)(n.td,{children:"Enable debug logging."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"--debug-level"}),(0,s.jsx)(n.td,{children:"LLMOS_DEBUG_LEVEL"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"7"})}),(0,s.jsx)(n.td,{children:"Debug log level (valid 0-9)."})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["To pass environment variables to the installation script, add the ",(0,s.jsx)(n.code,{children:"LLMOS_"})," prefix environment variables just like below:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"curl -sfL https://get-llmos.1block.ai | LLMOS_DEBUG=true LLMOS_DEBUG_LEVEL=9 sh -s -\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For more detailed information about LLMOS configuration options, you can check out the ",(0,s.jsx)(n.a,{href:"/docs/installation/configurations",children:"LLMOS Configurations"})," page."]}),"\n",(0,s.jsx)(n.h3,{id:"installation-script-environment-variables",children:"Installation Script Environment Variables"}),"\n",(0,s.jsx)(n.p,{children:"The following environment variables are used exclusively with the LLMOS installation script:"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Variable"}),(0,s.jsx)(n.th,{children:"Default"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"INSTALL_LLMOS_SKIP_DOWNLOAD"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsx)(n.td,{children:"If set to true will not download LLMOS hash or binary."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"INSTALL_LLMOS_FORCE_RESTART"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsx)(n.td,{children:"If set to true will always restart the LLMOS service."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"INSTALL_LLMOS_SKIP_ENABLE"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsx)(n.td,{children:"If set to true will not enable or start LLMOS service."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"INSTALL_LLMOS_SKIP_START"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"false"})}),(0,s.jsx)(n.td,{children:"If set to true will not start LLMOS service."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"INSTALL_LLMOS_VERSION"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"latest"})}),(0,s.jsx)(n.td,{children:"Version of LLMOS to download from github. Will attempt to download from the latest version if not specified."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"INSTALL_LLMOS_BIN_DIR"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/usr/local/bin"})}),(0,s.jsx)(n.td,{children:"Directory to install LLMOS binary, links, and uninstall script to."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"INSTALL_LLMOS_SYSTEMD_DIR"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/etc/systemd/system"})}),(0,s.jsx)(n.td,{children:"Directory to install systemd service and environment files to."})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["For example, if you already have the LLMOS binary installed in ",(0,s.jsx)(n.code,{children:"/usr/local/bin/llmos"})," and you want to skip the download step, you can set the following environment variables:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"curl -sfL https://get-llmos.1block.ai | INSTALL_LLMOS_SKIP_DOWNLOAD=true sh -s -\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>o});var s=t(6540);const i={},r=s.createContext(i);function l(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);