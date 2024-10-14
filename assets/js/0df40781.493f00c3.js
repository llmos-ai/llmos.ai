"use strict";(self.webpackChunkllmos_ai=self.webpackChunkllmos_ai||[]).push([[559],{4823:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var s=n(4848),r=n(8453);const i={sidebar_position:3,title:"LLMOS Configurations"},o=void 0,l={id:"installation/configurations",title:"LLMOS Configurations",description:"LLMOS provides a set of configuration options that can be set in the /etc/llmos/config.yaml file. If the file doesn't exist, you can create it manually.",source:"@site/docs/installation/configurations.md",sourceDirName:"installation",slug:"/installation/configurations",permalink:"/docs/installation/configurations",draft:!1,unlisted:!1,editUrl:"https://github.com/llmos-ai/llmos.ai/tree/main/docs/docs/installation/configurations.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"LLMOS Configurations"},sidebar:"tutorialSidebar",previous:{title:"Bootstrap Options",permalink:"/docs/installation/"},next:{title:"Uninstalling LLMOS",permalink:"/docs/installation/uninstall"}},d={},a=[{value:"Minimum Configuration",id:"minimum-configuration",level:3},{value:"Full Configuration Example",id:"full-configuration-example",level:3},{value:"Configuration Parameters",id:"configuration-parameters",level:2},{value:"Cluster-init Role Parameters",id:"cluster-init-role-parameters",level:3},{value:"All Roles Parameters",id:"all-roles-parameters",level:3},{value:"Instructions",id:"instructions",level:4}];function c(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["LLMOS provides a set of configuration options that can be set in the ",(0,s.jsx)(t.code,{children:"/etc/llmos/config.yaml"})," file. If the file doesn't exist, you can create it manually."]}),"\n",(0,s.jsx)(t.h3,{id:"minimum-configuration",children:"Minimum Configuration"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-shell",children:"mkdir -p /etc/llmos\ncat > /etc/llmos/config.yaml << EOF\nrole: cluster-init\ntoken: mytoken\nEOF\n"})}),"\n",(0,s.jsx)(t.h3,{id:"full-configuration-example",children:"Full Configuration Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-yaml",children:'################################################################\n# The following parameters apply to the cluster-init role only #\n################################################################\n\n# LLMOS Operator version to be installed\nllmosOperatorVersion: v0.1.0\n\n# LLMOS chart repository, set to "latest", "rc" or "dev". Defaults to latest.\nchartRepo: latest\n\n# Kubernetes version to be installed. Defaults to a stable k3s version if not specified.\nkubernetesVersion: v1.30.5+k3s1\n\n# Custom values for the LLMOS Operator Helm chart.\n# See https://github.com/llmos-ai/llmos-operator/blob/main/deploy/charts/llmos-operator/values.yaml\noperatorValues:\n  # Default values\n  operator:\n    apiserver:\n      replicaCount: 1\n\n# Additional SANs (hostnames) for the TLS certificate generated for port 6443.\ntlsSans:\n- additionalhostname.example.com\n\n# Commands to run before bootstrapping the node.\npreInstructions:\n  - name: custom-pre-task\n    # Image to extract and set as the current working directory (optional)\n    image: custom/image:1.1.1\n    # Environment variables to set\n    env:\n    - FOO=BAR\n    # Program arguments\n    args:\n    - arg1\n    - arg2\n    # Command to execute\n    command: /bin/dosomething\n    # Save output to /var/lib/llmos/plan/plan-output.json (optional)\n    saveOutput: false\n\n# Commands to run after bootstrapping the node.\npostInstructions:\n  - name: custom-post-task\n    env:\n    - FOO=BAR\n    args:\n    - arg1\n    - arg2\n    command: /bin/dosomething\n    saveOutput: false\n\n# Custom Kubernetes resources to create after the LLMOS operator is bootstrapped.\nresources:\n  - kind: ConfigMap\n    apiVersion: v1\n    metadata:\n      name: random\n    data:\n      key: value\n\n# Content for the `registries.yaml` file used by k3s.\n# Refer to https://rancher.com/docs/k3s/latest/en/installation/private-registry/ for details.\nregistries: {}\n\n# Default registry for LLMOS operator container images.\n# More details: https://github.com/llmos-ai/llmos-operator/blob/main/deploy/charts/llmos-operator/values.yaml\nglobalImageRegistry: someprefix.example.com:5000\n\n# Advanced: Override the Kubernetes system agent installer image.\nruntimeInstallerImage: ...\n\n# Advanced: Override the LLMOS operator installer image.\nllmosInstallerImage: ...\n\n###############################################\n# The following parameters apply to all roles #\n###############################################\n\n# URL for joining a node to the LLMOS cluster.\nserver: https://server-url:6443\n\n# Shared secret for joining nodes to the cluster.\ntoken: mytoken\n\n# Role of this node. The cluster must start with one node as `role=cluster-init`.\n# Additional nodes can join using `server` for control-plane nodes, or `agent` for worker nodes.\n# These roles align with the server/agent terms used by k3s.\nrole: cluster-init,server,agent\n\n# Set the Kubernetes node name.\nnodeName: custom-hostname\n\n# External IP address for the node in Kubernetes.\naddress: 123.123.123.123\n\n# Internal IP address for the node.\ninternalAddress: 123.123.123.124\n\n# Taints to apply to the node upon creation.\ntaints:\n- dedicated=special-user:NoSchedule\n\n# Labels to apply to the node upon creation.\nlabels:\n- key=value\n\n# Advanced: Additional k3s configuration to be placed in `/etc/rancher/k3s/config.yaml.d/40-llmos.yaml`.\nextraConfig: {}\n'})}),"\n",(0,s.jsx)(t.h2,{id:"configuration-parameters",children:"Configuration Parameters"}),"\n",(0,s.jsx)(t.h3,{id:"cluster-init-role-parameters",children:"Cluster-init Role Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"llmosOperatorVersion"})}),(0,s.jsx)(t.td,{children:"LLMOS Operator version to be installed. Fetched from the latest repo if not specified."}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"chartRepo"})}),(0,s.jsxs)(t.td,{children:["LLMOS chart repository, set to ",(0,s.jsx)(t.code,{children:"latest"}),", ",(0,s.jsx)(t.code,{children:"rc"}),", or ",(0,s.jsx)(t.code,{children:"dev"}),". Defaults to latest. Do not use ",(0,s.jsx)(t.code,{children:"rc"})," or ",(0,s.jsx)(t.code,{children:"dev"})," in production."]}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"latest"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"kubernetesVersion"})}),(0,s.jsx)(t.td,{children:"Kubernetes version to be installed. Defaults to a stable k3s version if not specified."}),(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"v1.30.5+k3s1"})})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"operatorValues"})}),(0,s.jsxs)(t.td,{children:["Overwrite default values of the LLMOS Operator Helm chart. Refer to ",(0,s.jsx)(t.a,{href:"https://github.com/llmos-ai/llmos-operator/blob/main/deploy/charts/llmos-operator/values.yaml",children:"values.yaml"})]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"tlsSans"})}),(0,s.jsxs)(t.td,{children:["Additional SANs (hostnames) for the TLS certificate generated for port 6443. e.g., ",(0,s.jsx)(t.code,{children:"llmos.example.com"})]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"preInstructions"})}),(0,s.jsxs)(t.td,{children:["Commands to run before bootstrapping the node.  Refer to ",(0,s.jsx)(t.a,{href:"#instructions",children:"Instructions"})]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"postInstructions"})}),(0,s.jsxs)(t.td,{children:["Commands to run after bootstrapping the node. Refer to ",(0,s.jsx)(t.a,{href:"#instructions",children:"Instructions"})]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"resources"})}),(0,s.jsx)(t.td,{children:"Custom Kubernetes resources to create after the LLMOS operator is bootstrapped."}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"registries"})}),(0,s.jsxs)(t.td,{children:["Content for the ",(0,s.jsx)(t.a,{href:"https://docs.k3s.io/installation/private-registry#registries-configuration-file",children:"registries.yaml"})," file used by the k3s cluster."]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"globalImageRegistry"})}),(0,s.jsx)(t.td,{children:"Default registry for LLMOS operator container images."}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"runtimeInstallerImage"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.strong,{children:"Advanced:"})," Override the Kubernetes system agent installer image."]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"llmosInstallerImage"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.strong,{children:"Advanced:"})," Override the LLMOS operator installer image."]}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.h3,{id:"all-roles-parameters",children:"All Roles Parameters"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Default Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"role"})}),(0,s.jsxs)(t.td,{children:["Role of this node. The cluster must start with one node as ",(0,s.jsx)(t.code,{children:"role=cluster-init"}),"."]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"server"})}),(0,s.jsxs)(t.td,{children:["URL for joining a node to the LLMOS cluster. e.g., ",(0,s.jsx)(t.code,{children:"https://server-url:6443"})]}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"token"})}),(0,s.jsx)(t.td,{children:"Shared secret for joining nodes to the cluster."}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"nodeName"})}),(0,s.jsx)(t.td,{children:"Set the node name."}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"address"})}),(0,s.jsx)(t.td,{children:"External IP address for the node in Cluster."}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"internalAddress"})}),(0,s.jsx)(t.td,{children:"Internal IP address for the node."}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"taints"})}),(0,s.jsx)(t.td,{children:"Taints to apply to the node upon creation."}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"labels"})}),(0,s.jsx)(t.td,{children:"Labels to apply to the node upon creation."}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"extraConfig"})}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.strong,{children:"Advanced"}),": Additional ",(0,s.jsx)(t.a,{href:"https://docs.k3s.io/installation/configuration",children:"k3s configuration"})," to be applied in bootstrap."]}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"instructions",children:"Instructions"}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Field"}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{children:"Data Type"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"name"})}),(0,s.jsxs)(t.td,{children:["Task name (e.g., ",(0,s.jsx)(t.code,{children:"custom-pre-task"}),")"]}),(0,s.jsx)(t.td,{children:"string"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"image"})}),(0,s.jsx)(t.td,{children:"Optional image to extract and use"}),(0,s.jsx)(t.td,{children:"string"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"env"})}),(0,s.jsxs)(t.td,{children:["Environment variables (e.g., ",(0,s.jsx)(t.code,{children:"FOO=BAR"}),")"]}),(0,s.jsx)(t.td,{children:"[]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"args"})}),(0,s.jsxs)(t.td,{children:["Program arguments (e.g., ",(0,s.jsx)(t.code,{children:"arg1"}),", ",(0,s.jsx)(t.code,{children:"arg2"}),")"]}),(0,s.jsx)(t.td,{children:"[]"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"command"})}),(0,s.jsxs)(t.td,{children:["Command to execute (e.g., ",(0,s.jsx)(t.code,{children:"/bin/dosomething"}),")"]}),(0,s.jsx)(t.td,{children:"string"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.code,{children:"saveOutput"})}),(0,s.jsxs)(t.td,{children:["Save output to ",(0,s.jsx)(t.code,{children:"/var/lib/llmos/plan/plan-output.json"})," (optional)"]}),(0,s.jsx)(t.td,{children:"bool"})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(6540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);