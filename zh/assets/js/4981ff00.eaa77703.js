"use strict";(self.webpackChunkllmos_ai=self.webpackChunkllmos_ai||[]).push([[2795],{8958:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>a,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var r=i(4848),s=i(8453);const t={sidebar_position:1,title:"\u542f\u7528\u76d1\u63a7"},d=void 0,l={id:"user_guide/monitoring/enable-monitoring",title:"\u542f\u7528\u76d1\u63a7",description:"LLMOS Monitoring \u901a\u8fc7\u9884\u914d\u7f6e\u7684 Grafana \u4eea\u8868\u76d8\u3001Prometheus \u89c4\u5219\u548c\u544a\u8b66\u89c4\u5219\u7b49\u529f\u80fd\uff0c\u4f7f\u96c6\u7fa4\u548c GPU \u6307\u6807\u7684\u76d1\u63a7\u53d8\u5f97\u7b80\u5355\u3001\u6613\u7528\u3002\u8fd9\u4e00\u529f\u80fd\u4e3b\u8981\u57fa\u4e8e Prometheus Operator \u5f00\u53d1\u96c6\u6210\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/user_guide/monitoring/enable-monitoring.md",sourceDirName:"user_guide/monitoring",slug:"/user_guide/monitoring/enable-monitoring",permalink:"/zh/docs/user_guide/monitoring/enable-monitoring",draft:!1,unlisted:!1,editUrl:"https://github.com/llmos-ai/llmos.ai/tree/main/docs/docs/user_guide/monitoring/enable-monitoring.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"\u542f\u7528\u76d1\u63a7"},sidebar:"tutorialSidebar",previous:{title:"Monitoring & Alerting",permalink:"/zh/docs/category/monitoring--alerting"},next:{title:"\u5378\u8f7d\u76d1\u63a7",permalink:"/zh/docs/user_guide/monitoring/uninstall-monitoring"}},o={},c=[{value:"\u542f\u7528\u76d1\u63a7",id:"\u542f\u7528\u76d1\u63a7",level:2},{value:"\u524d\u7f6e\u8981\u6c42",id:"\u524d\u7f6e\u8981\u6c42",level:3},{value:"Prometheus \u8bbe\u7f6e",id:"prometheus-\u8bbe\u7f6e",level:3},{value:"Grafana \u8bbe\u7f6e",id:"grafana-\u8bbe\u7f6e",level:3},{value:"AlertManager \u8bbe\u7f6e",id:"alertmanager-\u8bbe\u7f6e",level:3},{value:"\u8d44\u6e90\u9650\u5236\u4e0e\u8bf7\u6c42",id:"\u8d44\u6e90\u9650\u5236\u4e0e\u8bf7\u6c42",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["LLMOS Monitoring \u901a\u8fc7\u9884\u914d\u7f6e\u7684 Grafana \u4eea\u8868\u76d8\u3001Prometheus \u89c4\u5219\u548c\u544a\u8b66\u89c4\u5219\u7b49\u529f\u80fd\uff0c\u4f7f\u96c6\u7fa4\u548c GPU \u6307\u6807\u7684\u76d1\u63a7\u53d8\u5f97\u7b80\u5355\u3001\u6613\u7528\u3002\u8fd9\u4e00\u529f\u80fd\u4e3b\u8981\u57fa\u4e8e ",(0,r.jsx)(n.a,{href:"https://github.com/prometheus-operator/prometheus-operator",children:"Prometheus Operator"})," \u5f00\u53d1\u96c6\u6210\u3002"]}),"\n",(0,r.jsx)(n.p,{children:"\u672c\u9875\u9762\u5c06\u4ecb\u7ecd\u5982\u4f55\u914d\u7f6e\u4e0e\u7ba1\u7406\u5185\u7f6e\u7684 LLMOS Monitoring\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u542f\u7528\u76d1\u63a7",children:"\u542f\u7528\u76d1\u63a7"}),"\n",(0,r.jsxs)(n.p,{children:["\u8981\u542f\u7528\u76d1\u63a7\u529f\u80fd\uff0c\u7ba1\u7406\u5458\u7528\u6237\u9700\u8bbf\u95ee ",(0,r.jsx)(n.strong,{children:"Cluster Tools"})," \u9875\u9762\u3002\u70b9\u51fb ",(0,r.jsx)(n.strong,{children:"Install"})," \u540e\uff0c\u60a8\u5c06\u88ab\u5f15\u5bfc\u81f3 ",(0,r.jsx)(n.strong,{children:"Monitoring"})," \u914d\u7f6e\u9875\u9762\u3002"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"cluster-tools",src:i(2897).A+"",width:"2370",height:"524"})}),"\n",(0,r.jsx)(n.h3,{id:"\u524d\u7f6e\u8981\u6c42",children:"\u524d\u7f6e\u8981\u6c42"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u5982\u679c\u60a8\u7684\u96c6\u7fa4\u662f\u591a\u8282\u70b9\u96c6\u7fa4\u5e76\u4e14\u9700\u8981\u4e3a\u76d1\u63a7\u529f\u80fd\u542f\u7528\u6301\u4e45\u5b58\u50a8\uff0c\u8bf7\u5148\u542f\u7528 ",(0,r.jsx)(n.a,{href:"../storage/system-storage",children:"Ceph \u7cfb\u7edf\u5b58\u50a8"}),"\uff0c\u7136\u540e\u518d\u8bbe\u7f6e\u76d1\u63a7\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:["\u786e\u4fdd\u60a8\u7684\u96c6\u7fa4\u6ee1\u8db3\u4ee5\u4e0b\u8d44\u6e90\u9700\u6c42\uff1a","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"CPU"}),"\uff1a\u81f3\u5c11 ",(0,r.jsx)(n.code,{children:"1250m"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u5185\u5b58"}),"\uff1a\u81f3\u5c11 ",(0,r.jsx)(n.code,{children:"1210Mi"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u5b58\u50a8"}),"\uff1a\u81f3\u5c11 ",(0,r.jsx)(n.code,{children:"50Gi"})]}),"\n",(0,r.jsxs)(n.li,{children:["\u8be6\u60c5\u8bf7\u53c2\u8003 ",(0,r.jsx)(n.a,{href:"#%E8%B5%84%E6%BA%90%E9%99%90%E5%88%B6%E4%B8%8E%E8%AF%B7%E6%B1%82",children:"\u8d44\u6e90\u9650\u5236\u4e0e\u8bf7\u6c42"}),"\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"prometheus-\u8bbe\u7f6e",children:"Prometheus \u8bbe\u7f6e"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"Admin API"}),"\uff1a\u542f\u7528 ",(0,r.jsx)(n.a,{href:"https://prometheus.io/docs/prometheus/latest/querying/api/#tsdb-admin-apis",children:"Prometheus Admin API"}),"\uff0c\u4ee5\u4f7f\u7528\u5feb\u7167\u548c\u5220\u9664\u65f6\u95f4\u5e8f\u5217\u7b49\u9ad8\u7ea7\u529f\u80fd\u3002\u9ed8\u8ba4\u5173\u95ed\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u6293\u53d6\u95f4\u9694"}),"\uff1aPrometheus \u6536\u96c6\u6307\u6807\u7684\u9891\u7387\u3002\u9ed8\u8ba4\u503c\uff1a",(0,r.jsx)(n.code,{children:"30s"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u8bc4\u4f30\u95f4\u9694"}),"\uff1aPrometheus \u68c0\u67e5\u544a\u8b66\u89c4\u5219\u7684\u9891\u7387\u3002\u9ed8\u8ba4\u503c\uff1a",(0,r.jsx)(n.code,{children:"30s"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u6570\u636e\u4fdd\u7559\u65f6\u95f4"}),"\uff1a\u6307\u6807\u4fdd\u7559\u7684\u65f6\u957f\u3002\u9ed8\u8ba4\u503c\uff1a",(0,r.jsx)(n.code,{children:"10d"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u4fdd\u7559\u5927\u5c0f"}),"\uff1a\u5b58\u50a8\u6307\u6807\u7684\u6700\u5927\u5927\u5c0f\u3002\u9ed8\u8ba4\u503c\uff1a",(0,r.jsx)(n.code,{children:"50GiB"}),"\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u8d44\u6e90"}),"\uff1a\u4e3a Prometheus Pod \u8bbe\u7f6e\u8d44\u6e90\u8bf7\u6c42\u548c\u9650\u5236\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u6301\u4e45\u5b58\u50a8"}),"\uff1a\u82e5\u9700\u5728\u90e8\u7f72\u548c\u5347\u7ea7\u671f\u95f4\u4fdd\u7559\u6570\u636e\uff0c\u4e3a Prometheus \u914d\u7f6e\u6301\u4e45\u5b58\u50a8\u3002","\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\u63a8\u8350\u81f3\u5c11 ",(0,r.jsx)(n.code,{children:"50Gi"}),"\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"monitoring-edit-prometheus",src:i(6097).A+"",width:"2362",height:"1298"})}),"\n",(0,r.jsx)(n.h3,{id:"grafana-\u8bbe\u7f6e",children:"Grafana \u8bbe\u7f6e"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u8d44\u6e90"}),"\uff1a\u4e3a Grafana Pod \u8bbe\u7f6e\u8d44\u6e90\u8bf7\u6c42\u548c\u9650\u5236\u3002"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u6301\u4e45\u5b58\u50a8"}),"\uff1a\u914d\u7f6e\u5b58\u50a8\u4ee5\u5728\u5347\u7ea7\u6216\u91cd\u65b0\u90e8\u7f72\u671f\u95f4\u4fdd\u7559\u81ea\u5b9a\u4e49\u4eea\u8868\u76d8\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsx)(n.p,{children:"LLMOS Monitoring \u63d0\u4f9b\u7684\u9ed8\u8ba4\u4eea\u8868\u76d8\u4e0d\u4f9d\u8d56\u6301\u4e45\u5316\u5b58\u50a8\u4e14\u65e0\u6cd5\u76f4\u63a5\u4fee\u6539\u3002"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"monitoring-edit-grafana",src:i(153).A+"",width:"2340",height:"1044"})}),"\n",(0,r.jsx)(n.h3,{id:"alertmanager-\u8bbe\u7f6e",children:"AlertManager \u8bbe\u7f6e"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"\u542f\u7528 AlertManager"}),"\uff1a\u9ed8\u8ba4\u542f\u7528\u3002"]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"monitoring-edit-alerting",src:i(387).A+"",width:"3086",height:"392"})}),"\n",(0,r.jsx)(n.h3,{id:"\u8d44\u6e90\u9650\u5236\u4e0e\u8bf7\u6c42",children:"\u8d44\u6e90\u9650\u5236\u4e0e\u8bf7\u6c42"}),"\n",(0,r.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u5728\u5b89\u88c5\u8fc7\u7a0b\u4e2d\u8c03\u6574\u8d44\u6e90\u8bf7\u6c42\u548c\u9650\u5236\u3002\u4e0b\u8868\u663e\u793a\u4e86\u9ed8\u8ba4\u7684\u6700\u4f4e\u8981\u6c42\uff1a"}),"\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"\u7ec4\u4ef6"}),(0,r.jsx)(n.th,{children:"CPU \u8bf7\u6c42"}),(0,r.jsx)(n.th,{children:"\u5185\u5b58\u8bf7\u6c42"}),(0,r.jsx)(n.th,{children:"CPU \u9650\u5236"}),(0,r.jsx)(n.th,{children:"\u5185\u5b58\u9650\u5236"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"prometheus-operator"}),(0,r.jsx)(n.td,{children:"100m"}),(0,r.jsx)(n.td,{children:"100Mi"}),(0,r.jsx)(n.td,{children:"500m"}),(0,r.jsx)(n.td,{children:"200Mi"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"prometheus"}),(0,r.jsx)(n.td,{children:"750m"}),(0,r.jsx)(n.td,{children:"750Mi"}),(0,r.jsx)(n.td,{children:"1000m"}),(0,r.jsx)(n.td,{children:"3000Mi"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"alertmanager"}),(0,r.jsx)(n.td,{children:"100m"}),(0,r.jsx)(n.td,{children:"100Mi"}),(0,r.jsx)(n.td,{children:"1000m"}),(0,r.jsx)(n.td,{children:"500Mi"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"grafana"}),(0,r.jsx)(n.td,{children:"100m"}),(0,r.jsx)(n.td,{children:"100Mi"}),(0,r.jsx)(n.td,{children:"200m"}),(0,r.jsx)(n.td,{children:"200Mi"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"kube-state-metrics"}),(0,r.jsx)(n.td,{children:"100m"}),(0,r.jsx)(n.td,{children:"130Mi"}),(0,r.jsx)(n.td,{children:"200m"}),(0,r.jsx)(n.td,{children:"200Mi"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"prometheus-node-exporter"}),(0,r.jsx)(n.td,{children:"100m"}),(0,r.jsx)(n.td,{children:"30Mi"}),(0,r.jsx)(n.td,{children:"200m"}),(0,r.jsx)(n.td,{children:"50Mi"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"\u603b\u8ba1"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"1250m"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"1210Mi"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"3100m"})}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.strong,{children:"4150Mi"})})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"\u6301\u4e45\u5b58\u50a8"}),"\uff1aPrometheus \u81f3\u5c11\u9700\u8981 ",(0,r.jsx)(n.code,{children:"50Gi"})," \u7684\u5b58\u50a8\u7a7a\u95f4\u3002"]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},2897:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/cluster-tools-690b40fb9201c1b5f7b6209bcccf9cd5.png"},387:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/monitoring-edit-alerting-ce03a18d02541ca9524a35d400bdd9b6.png"},153:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/monitoring-edit-grafana-ed416b95fef60c8c9c69f4c877d3d185.png"},6097:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/monitoring-edit-prometheus-55a7fabdfc90832790266e2977baec6c.png"},8453:(e,n,i)=>{i.d(n,{R:()=>d,x:()=>l});var r=i(6540);const s={},t=r.createContext(s);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);