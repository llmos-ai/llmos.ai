"use strict";(self.webpackChunkllmos_ai=self.webpackChunkllmos_ai||[]).push([[2607],{2964:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var s=r(4848),i=r(8453);const l={sidebar_position:3,title:"\u76d1\u63a7\u7ba1\u7406"},t=void 0,o={id:"user_guide/monitoring/monitoring-management",title:"\u76d1\u63a7\u7ba1\u7406",description:"\u542f\u7528\u76d1\u63a7\u540e\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 LLMOS Management > Monitoring \u7ba1\u7406\u989d\u5916\u7684 Prometheus \u89c4\u5219\u3001\u544a\u8b66\u4ee5\u53ca\u8bbf\u95ee\u4eea\u8868\u76d8\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/user_guide/monitoring/monitoring-management.md",sourceDirName:"user_guide/monitoring",slug:"/user_guide/monitoring/monitoring-management",permalink:"/zh/docs/user_guide/monitoring/monitoring-management",draft:!1,unlisted:!1,editUrl:"https://github.com/llmos-ai/llmos.ai/tree/main/docs/docs/user_guide/monitoring/monitoring-management.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\u76d1\u63a7\u7ba1\u7406"},sidebar:"tutorialSidebar",previous:{title:"\u5378\u8f7d\u76d1\u63a7",permalink:"/zh/docs/user_guide/monitoring/uninstall-monitoring"},next:{title:"Storage",permalink:"/zh/docs/category/storage"}},d={},c=[{value:"\u76d1\u63a7\u7ba1\u7406",id:"\u76d1\u63a7\u7ba1\u7406",level:3},{value:"ServiceMonitor \u548c PodMonitor",id:"servicemonitor-\u548c-podmonitor",level:2},{value:"PrometheusRules",id:"prometheusrules",level:2},{value:"Alertmanager \u914d\u7f6e",id:"alertmanager-\u914d\u7f6e",level:2},{value:"\u521b\u5efa AlertmanagerConfig \u8d44\u6e90",id:"\u521b\u5efa-alertmanagerconfig-\u8d44\u6e90",level:3},{value:"AlertmanagerConfig YAML \u793a\u4f8b",id:"alertmanagerconfig-yaml-\u793a\u4f8b",level:3},{value:"\u63a5\u6536\u5668\u914d\u7f6e",id:"\u63a5\u6536\u5668\u914d\u7f6e",level:2},{value:"UI \u652f\u6301\u7684\u63a5\u6536\u5668",id:"ui-\u652f\u6301\u7684\u63a5\u6536\u5668",level:3},{value:"\u793a\u4f8b\uff1aSlack \u63a5\u6536\u5668",id:"\u793a\u4f8bslack-\u63a5\u6536\u5668",level:4},{value:"\u8def\u7531\u914d\u7f6e",id:"\u8def\u7531\u914d\u7f6e",level:2},{value:"\u63a5\u6536\u5668",id:"\u63a5\u6536\u5668",level:3},{value:"\u5206\u7ec4",id:"\u5206\u7ec4",level:3},{value:"\u5339\u914d\u89c4\u5219",id:"\u5339\u914d\u89c4\u5219",level:3},{value:"\u6807\u7b7e\u5339\u914d\uff08Match\uff09",id:"\u6807\u7b7e\u5339\u914dmatch",level:4},{value:"\u6b63\u5219\u8868\u8fbe\u5f0f\uff08Match Regex\uff09",id:"\u6b63\u5219\u8868\u8fbe\u5f0fmatch-regex",level:4},{value:"\u544a\u8b66\u6d4b\u8bd5\u9a8c\u8bc1",id:"\u544a\u8b66\u6d4b\u8bd5\u9a8c\u8bc1",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["\u542f\u7528\u76d1\u63a7\u540e\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,s.jsx)(n.strong,{children:"LLMOS Management > Monitoring"})," \u7ba1\u7406\u989d\u5916\u7684 Prometheus \u89c4\u5219\u3001\u544a\u8b66\u4ee5\u53ca\u8bbf\u95ee\u4eea\u8868\u76d8\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u76d1\u63a7\u7ba1\u7406",children:"\u76d1\u63a7\u7ba1\u7406"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u914d\u7f6e (Config)"}),"\uff1a\u67e5\u770b\u5e76\u66f4\u65b0 LLMOS \u76d1\u63a7\u8bbe\u7f6e\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Prometheus \u56fe\u8868"}),"\uff1a\u8bbf\u95ee Prometheus \u6307\u6807\u548c\u56fe\u8868\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Grafana"}),"\uff1a\u63a2\u7d22 Grafana \u4eea\u8868\u76d8\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Alertmanager"}),"\uff1a\u67e5\u770b\u5e76\u7ba1\u7406\u544a\u8b66\u914d\u7f6e\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"monitoring-management",src:r(5379).A+"",width:"3702",height:"1380"})}),"\n",(0,s.jsx)(n.h2,{id:"servicemonitor-\u548c-podmonitor",children:"ServiceMonitor \u548c PodMonitor"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"ServiceMonitors"})," \u548c ",(0,s.jsx)(n.code,{children:"PodMonitors"})," \u662f ",(0,s.jsx)(n.a,{href:"https://github.com/prometheus-operator/prometheus-operator",children:"Prometheus Operator"})," \u521b\u5efa\u7684\u81ea\u5b9a\u4e49\u8d44\u6e90\uff0c\u7528\u4e8e\u5b9a\u4e49 Prometheus \u5982\u4f55\u4ece\u7aef\u70b9\u6536\u96c6\u6307\u6807\u3002\u8fd9\u4e9b\u914d\u7f6e\u786e\u4fdd Prometheus \u77e5\u9053\u4ece\u54ea\u91cc\u6293\u53d6\u6570\u636e\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"ServiceMonitors"}),"\uff1a\u9002\u7528\u4e8e\u5927\u591a\u6570\u4f7f\u7528\u573a\u666f\uff0c\u5e38\u7528\u4e8e\u6293\u53d6\u670d\u52a1\u7aef\u70b9\u7684\u6307\u6807\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"PodMonitors"}),"\uff1a\u7528\u4e8e\u7279\u5b9a\u7684 Pod \u7ea7\u522b\u6293\u53d6\u9700\u6c42\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u66f4\u591a\u8be6\u60c5\uff1a"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://prometheus-operator.dev/docs/developer/getting-started/#using-servicemonitors",children:"\u4f7f\u7528 ServiceMonitors"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://prometheus-operator.dev/docs/developer/getting-started/#using-podmonitors",children:"\u4f7f\u7528 PodMonitors"})}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"monitoring-monitors",src:r(175).A+"",width:"3170",height:"1752"})}),"\n",(0,s.jsx)(n.h2,{id:"prometheusrules",children:"PrometheusRules"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"PrometheusRules"})," \u5141\u8bb8\u60a8\u5b9a\u4e49\u89c4\u5219\u4ee5\u751f\u6210\u544a\u8b66\u6216\u9884\u8ba1\u7b97\u6307\u6807\u3002\u8fd9\u4e9b\u89c4\u5219\u4f1a\u88ab\u5b9a\u671f\u8bc4\u4f30\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u8bb0\u5f55\u89c4\u5219 (Recording Rules)"}),"\uff1a\u901a\u8fc7\u7ec4\u5408\u6216\u8f6c\u6362\u73b0\u6709\u6307\u6807\u521b\u5efa\u65b0\u6307\u6807\u3002\u9002\u7528\u4e8e\u9884\u8ba1\u7b97\u590d\u6742\u67e5\u8be2\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u544a\u8b66\u89c4\u5219 (Alerting Rules)"}),"\uff1a\u8fd0\u884c\u67e5\u8be2\u4ee5\u68c0\u67e5\u7279\u5b9a\u6761\u4ef6\u3002\u5982\u679c\u67e5\u8be2\u8fd4\u56de\u975e\u96f6\u503c\uff0c\u5219\u89e6\u53d1\u544a\u8b66\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u66f4\u591a\u793a\u4f8b\u8bf7\u53c2\u8003 ",(0,s.jsx)(n.a,{href:"https://prometheus-operator.dev/kube-prometheus/kube/developing-prometheus-rules-and-grafana-dashboards/#prometheus-rules",children:"Prometheus Rules \u6587\u6863"}),"\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"monitoring-prometheus-rules",src:r(7088).A+"",width:"3182",height:"1236"})}),"\n",(0,s.jsx)(n.h2,{id:"alertmanager-\u914d\u7f6e",children:"Alertmanager \u914d\u7f6e"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Alertmanager"})," \u5904\u7406\u7531 Prometheus \u53d1\u9001\u7684\u544a\u8b66\uff0c\u6267\u884c\u4ee5\u4e0b\u4efb\u52a1\uff1a"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u53bb\u91cd"}),"\uff1a\u79fb\u9664\u91cd\u590d\u544a\u8b66\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u5206\u7ec4"}),"\uff1a\u6309\u76f8\u4f3c\u7279\u5f81\u7ec4\u7ec7\u544a\u8b66\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u8def\u7531"}),"\uff1a\u5c06\u544a\u8b66\u53d1\u9001\u5230\u5408\u9002\u7684\u6e20\u9053\uff0c\u4f8b\u5982\u90ae\u4ef6\u3001Slack \u6216 Webhook\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u9759\u9ed8"}),"\uff1a\u4e34\u65f6\u7981\u7528\u544a\u8b66\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"\u8ddf\u8e2a"}),"\uff1a\u76d1\u63a7\u544a\u8b66\u7684\u72b6\u6001\uff08\u89e6\u53d1\u6216\u5df2\u89e3\u51b3\uff09\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u521b\u5efa-alertmanagerconfig-\u8d44\u6e90",children:"\u521b\u5efa AlertmanagerConfig \u8d44\u6e90"}),"\n",(0,s.jsx)(n.p,{children:"\u8981\u5728 Alertmanager \u4e2d\u8bbe\u7f6e\u544a\u8b66\u63a5\u6536\u5668\u548c\u8def\u7531\uff1a"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u524d\u5f80 ",(0,s.jsx)(n.strong,{children:"LLMOS Management > Monitoring > AlertmanagerConfigs"}),"\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:["\u70b9\u51fb ",(0,s.jsx)(n.strong,{children:"Create"}),"\uff0c\u586b\u5199\u540d\u79f0\u548c\u547d\u540d\u7a7a\u95f4\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u4fdd\u5b58\u914d\u7f6e\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u6253\u5f00\u521b\u5efa\u7684\u914d\u7f6e\uff0c\u70b9\u51fb ",(0,s.jsx)(n.strong,{children:(0,s.jsx)(n.a,{href:"#%E6%8E%A5%E6%94%B6%E5%99%A8%E9%85%8D%E7%BD%AE",children:"Add Receiver"})}),"\uff1a","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7ed9\u63a5\u6536\u5668\u547d\u540d\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u9009\u62e9\u901a\u77e5\u7c7b\u578b\uff08\u5982 Slack\u3001\u90ae\u4ef6\uff09\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u586b\u5199\u5fc5\u9700\u5b57\u6bb5\uff08\u5982 Slack \u7684 ",(0,s.jsx)(n.code,{children:"api_url"})," \u548c ",(0,s.jsx)(n.code,{children:"channel"}),"\uff09\u3002\n",(0,s.jsx)(n.img,{alt:"monitoring-alertconfig-slack",src:r(487).A+"",width:"3110",height:"1716"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\u70b9\u51fb ",(0,s.jsx)(n.strong,{children:"Route"})," \u6807\u7b7e\uff0c\u6dfb\u52a0\u63a5\u6536\u5668\u5e76\u8bbe\u7f6e",(0,s.jsx)(n.a,{href:"#%E8%B7%AF%E7%94%B1%E9%85%8D%E7%BD%AE",children:"\u8def\u7531\u914d\u7f6e"}),"\u5230 AlertmanagerConfig\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u4fdd\u5b58 AlertmanagerConfig\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"\u7ed3\u679c\uff1a"})," \u5f53\u89e6\u53d1\u544a\u8b66\u65f6\uff0c\u544a\u8b66\u4f1a\u53d1\u9001\u5230\u6307\u5b9a\u7684\u63a5\u6536\u5668\u3002"]}),"\n",(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsxs)(n.p,{children:["\u5bf9\u4e8e\u4e00\u7ea7\u8def\u7531\uff0cPrometheus Operator \u4f1a\u81ea\u52a8\u6dfb\u52a0\u4e00\u4e2a\u9ed8\u8ba4\u5339\u914d\u5668\uff1a",(0,s.jsx)(n.code,{children:"namespace: <AlertmanagerConfig namespace>"}),"\u3002\u8be5\u5339\u914d\u5668\u786e\u4fdd\u544a\u8b66\u6839\u636e ",(0,s.jsx)(n.code,{children:"AlertmanagerConfig"})," \u7684\u547d\u540d\u7a7a\u95f4\u8fdb\u884c\u8def\u7531\u3002"]}),(0,s.jsx)(n.p,{children:"\u5bf9\u4e8e\u4e0d\u540c\u547d\u540d\u7a7a\u95f4\u7684\u544a\u8b66\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u4e24\u79cd\u65b9\u5f0f\u5904\u7406\u544a\u8b66\uff1a"}),(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u4e3a\u6bcf\u4e2a\u547d\u540d\u7a7a\u95f4\u521b\u5efa\u4e00\u4e2a AlertmanagerConfig"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u8fd9\u79cd\u65b9\u5f0f\u5141\u8bb8\u6bcf\u4e2a\u547d\u540d\u7a7a\u95f4\u72ec\u7acb\u7ba1\u7406\u5176\u544a\u8b66\u3002\u544a\u8b66\u4f1a\u8def\u7531\u5230\u76f8\u5e94\u547d\u540d\u7a7a\u95f4\u7684\u914d\u7f6e\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"\u4f7f\u7528\u5b50\u8def\u7531\u96c6\u4e2d\u5904\u7406\u6240\u6709\u544a\u8b66"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5982\u679c\u60a8\u66f4\u503e\u5411\u4e8e\u96c6\u4e2d\u7ba1\u7406\u544a\u8b66\uff0c\u53ef\u4ee5\u5728\u5355\u4e2a ",(0,s.jsx)(n.code,{children:"AlertmanagerConfig"})," \u7684 YAML \u6587\u4ef6\u4e2d\u914d\u7f6e\u5b50\u8def\u7531\u3002\u5b50\u8def\u7531\u53ef\u4ee5\u57fa\u4e8e\u7279\u5b9a\u5339\u914d\u5668\u6216\u6807\u7b7e\u6761\u4ef6\u5904\u7406\u6765\u81ea\u591a\u4e2a\u547d\u540d\u7a7a\u95f4\u7684\u544a\u8b66\u3002"]}),"\n"]}),"\n"]}),"\n"]}),(0,s.jsx)(n.p,{children:"\u9009\u62e9\u4e0e\u60a8\u7684\u64cd\u4f5c\u548c\u7ec4\u7ec7\u9700\u6c42\u6700\u5339\u914d\u7684\u65b9\u6cd5\u3002"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"monitoring-alertconfigs",src:r(8281).A+"",width:"3112",height:"566"})}),"\n",(0,s.jsx)(n.h3,{id:"alertmanagerconfig-yaml-\u793a\u4f8b",children:"AlertmanagerConfig YAML \u793a\u4f8b"}),"\n",(0,s.jsxs)(n.p,{children:["\u4ee5\u4e0b\u662f\u4e00\u4e2a\u4f7f\u7528 Slack \u7684 ",(0,s.jsx)(n.code,{children:"AlertmanagerConfig"})," \u8d44\u6e90\u793a\u4f8b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:'apiVersion: monitoring.coreos.com/v1alpha1\nkind: AlertmanagerConfig\nmetadata:\n   labels:\n      llmos.ai/alertmanagerconfig: "true"\n   name: config-example\n   namespace: llmos-monitoring-system\nspec:\n   receivers:\n      - name: llmos-slack\n        slackConfigs:\n        - apiURL:\n             key: api_url # custom key name\n             name: $slack-secret # your secret name that contains the slack api_url\n          channel: \'#alarm-test\'\n          httpConfig: {}\n          sendResolved: true\n          text: |-\n             {{ define "cluster" }}{{ .ExternalURL | reReplaceAll ".*alertmanager\\\\.(.*)" "$1" }}{{ end }}\n             {{ define "slack.myorg.text" }}\n             {{- $root := . -}}\n             {{ range .Alerts }}\n               *Alert:* {{ .Annotations.summary }} - `{{ .Labels.severity }}`\n               *Cluster:* {{ template "cluster" $root }}\n               *Description:* {{ .Annotations.description }}\n               *Graph:* <{{ .GeneratorURL }}|:chart_with_upwards_trend:>\n               *Runbook:* <{{ .Annotations.runbook_url }}|:spiral_note_pad:>\n               *Details:*\n                 {{ range .Labels.SortedPairs }} - *{{ .Name }}:* `{{ .Value }}`\n                 {{ end }}\n             {{ end }}\n             {{ end }}\n   route:\n      groupInterval: 5m\n      groupWait: 30s\n      receiver: llmos-slack\n      repeatInterval: 4h\n'})}),"\n",(0,s.jsx)(n.h2,{id:"\u63a5\u6536\u5668\u914d\u7f6e",children:"\u63a5\u6536\u5668\u914d\u7f6e"}),"\n",(0,s.jsx)(n.p,{children:"\u63a5\u6536\u5668\u51b3\u5b9a\u901a\u77e5\u7684\u53d1\u9001\u4f4d\u7f6e\u3002\u5b83\u4eec\u53ef\u4ee5\u662f\u539f\u751f\uff08\u5982 Slack\u3001\u90ae\u4ef6\uff09\u6216\u81ea\u5b9a\u4e49\uff08\u5982\u4f7f\u7528 Webhook\uff09\u7684\u65b9\u5f0f\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"ui-\u652f\u6301\u7684\u63a5\u6536\u5668",children:"UI \u652f\u6301\u7684\u63a5\u6536\u5668"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Slack"}),"\uff1a\u9700\u8981 Webhook URL \u548c\u9891\u9053\u540d\u79f0\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Email"}),"\uff1a\u9700\u8981 SMTP \u670d\u52a1\u5668\u8be6\u60c5\u548c\u6536\u4ef6\u4eba\u5730\u5740\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"PagerDuty"}),"\uff1a\u9700\u8981\u96c6\u6210\u5bc6\u94a5\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Opsgenie"}),"\uff1a\u9700\u8981 API \u5bc6\u94a5\u548c\u54cd\u5e94\u8005\u8be6\u7ec6\u4fe1\u606f\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Webhook"}),"\uff1a\u652f\u6301\u901a\u7528 Webhook URL\u3002"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Custom"}),"\uff1a\u5bf9\u4e8e\u4e0d\u53d7\u652f\u6301\u7684\u7cfb\u7edf\uff0c\u53ef\u4ee5\u4f7f\u7528 YAML \u624b\u52a8\u914d\u7f6e\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["\u66f4\u591a\u5173\u4e8e\u6bcf\u79cd\u63a5\u6536\u5668\u914d\u7f6e\u7684\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 Prometheus \u7684",(0,s.jsx)(n.a,{href:"https://prometheus.io/docs/alerting/latest/configuration/#receiver-integration-settings",children:"\u63a5\u6536\u5668\u96c6\u6210\u8bbe\u7f6e"}),"\u3002"]}),"\n",(0,s.jsx)(n.h4,{id:"\u793a\u4f8bslack-\u63a5\u6536\u5668",children:"\u793a\u4f8b\uff1aSlack \u63a5\u6536\u5668"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5b57\u6bb5"}),(0,s.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Webhook URL"})}),(0,s.jsxs)(n.td,{children:["\u5305\u542b Slack Webhook URL \u7684\u5bc6\u94a5 (",(0,s.jsx)(n.a,{href:"https://api.slack.com/messaging/webhooks",children:"\u64cd\u4f5c\u6307\u5357"}),")"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Default Channel"})}),(0,s.jsxs)(n.td,{children:["\u9891\u9053\u540d\u79f0\uff08\u4f8b\u5982 ",(0,s.jsx)(n.code,{children:"#alerts"}),"\uff09\u3002"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Proxy URL"})}),(0,s.jsx)(n.td,{children:"\u7528\u4e8e Webhook \u901a\u77e5\u7684\u4ee3\u7406 URL\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Send Resolved Alerts"})}),(0,s.jsx)(n.td,{children:"\u542f\u7528\u540e\u4f1a\u5728\u544a\u8b66\u89e3\u51b3\u65f6\u53d1\u9001\u901a\u77e5\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Text Template"})}),(0,s.jsx)(n.td,{children:"\u5728\u4f7f\u7528\u524d\u4f1a\u6a21\u677f\u6269\u5c55\u7684\u5b57\u7b26\u4e32\u3002"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"\u8def\u7531\u914d\u7f6e",children:"\u8def\u7531\u914d\u7f6e"}),"\n",(0,s.jsx)(n.p,{children:"\u8def\u7531\u5b9a\u4e49\u544a\u8b66\u5982\u4f55\u88ab\u5904\u7406\u5e76\u8f6c\u53d1\u5230\u5404\u81ea\u7684\u63a5\u6536\u5668\u3002\u5b83\u4eec\u6307\u5b9a\u5206\u7ec4\u3001\u7b49\u5f85\u95f4\u9694\u4ee5\u53ca\u57fa\u4e8e\u6807\u7b7e\u7684\u5339\u914d\u89c4\u5219\u6765\u8fdb\u884c\u544a\u8b66\u8def\u7531\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"\u63a5\u6536\u5668",children:"\u63a5\u6536\u5668"}),"\n",(0,s.jsxs)(n.p,{children:["\u6bcf\u4e2a\u8def\u7531\u5fc5\u987b\u5f15\u7528\u4e00\u4e2a\u9884\u5148\u914d\u7f6e\u7684 ",(0,s.jsx)(n.a,{href:"#%E6%8E%A5%E6%94%B6%E5%99%A8%E9%85%8D%E7%BD%AE",children:"\u63a5\u6536\u5668"}),"\u3002\u5728\u5b9a\u4e49\u8def\u7531\u4e4b\u524d\uff0c\u786e\u4fdd\u63a5\u6536\u5668\u5df2\u8bbe\u7f6e\u5b8c\u6210\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"monitoring-route-receiver",src:r(574).A+"",width:"3156",height:"422"})}),"\n",(0,s.jsx)(n.h3,{id:"\u5206\u7ec4",children:"\u5206\u7ec4"}),"\n",(0,s.jsx)(n.p,{children:"\u5206\u7ec4\u51b3\u5b9a\u5728\u5c06\u544a\u8b66\u53d1\u9001\u7ed9\u63a5\u6536\u5668\u4e4b\u524d\u5982\u4f55\u5c06\u544a\u8b66\u8fdb\u884c\u6279\u5904\u7406\u3002"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"\u5b57\u6bb5"}),(0,s.jsx)(n.th,{children:"\u9ed8\u8ba4\u503c"}),(0,s.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Group By"})}),(0,s.jsx)(n.td,{children:"N/A"}),(0,s.jsxs)(n.td,{children:["\u7528\u4e8e\u5206\u7ec4\u544a\u8b66\u7684\u6807\u7b7e\u5217\u8868\u3002\u6807\u7b7e\u5fc5\u987b\u552f\u4e00\u3002\u7279\u6b8a\u6807\u7b7e ",(0,s.jsx)(n.code,{children:'"..."'})," \u4f1a\u6309\u6240\u6709\u53ef\u80fd\u7684\u6807\u7b7e\u8fdb\u884c\u5206\u7ec4\uff0c\u4f46\u5b83\u5fc5\u987b\u662f\u5217\u8868\u4e2d\u7684\u552f\u4e00\u5143\u7d20\u3002"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Group Wait"})}),(0,s.jsx)(n.td,{children:"30s"}),(0,s.jsx)(n.td,{children:"\u5728\u53d1\u9001\u7b2c\u4e00\u6761\u901a\u77e5\u524d\u7f13\u51b2\u540c\u4e00\u5206\u7ec4\u544a\u8b66\u7684\u65f6\u95f4\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Group Interval"})}),(0,s.jsx)(n.td,{children:"5m"}),(0,s.jsx)(n.td,{children:"\u5728\u53d1\u9001\u521d\u59cb\u901a\u77e5\u540e\uff0c\u65b0\u589e\u544a\u8b66\u52a0\u5165\u73b0\u6709\u5206\u7ec4\u524d\u7684\u7b49\u5f85\u65f6\u95f4\u3002"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.strong,{children:"Repeat Interval"})}),(0,s.jsx)(n.td,{children:"4h"}),(0,s.jsx)(n.td,{children:"\u5728\u5df2\u53d1\u9001\u7684\u544a\u8b66\u91cd\u65b0\u53d1\u9001\u524d\u7684\u7b49\u5f85\u65f6\u95f4\u3002"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"monitoring-route-grouping",src:r(6425).A+"",width:"3096",height:"772"})}),"\n",(0,s.jsxs)(n.p,{children:["\u66f4\u591a\u8be6\u60c5\uff0c\u8bf7\u53c2\u9605 Prometheus Operator \u6587\u6863\u4e2d\u7684",(0,s.jsx)(n.a,{href:"https://prometheus-operator.dev/docs/developer/alerting/",children:"\u544a\u8b66\u8def\u7531"}),"\u3002"]}),"\n",(0,s.jsx)(n.h3,{id:"\u5339\u914d\u89c4\u5219",children:"\u5339\u914d\u89c4\u5219"}),"\n",(0,s.jsx)(n.p,{children:"\u8def\u7531\u53ef\u4ee5\u4f7f\u7528\u6807\u7b7e\u5339\u914d\u5668\u6216\u6b63\u5219\u8868\u8fbe\u5f0f\u5339\u914d\u5668\u8fc7\u6ee4\u544a\u8b66\u3002"}),"\n",(0,s.jsx)(n.h4,{id:"\u6807\u7b7e\u5339\u914dmatch",children:"\u6807\u7b7e\u5339\u914d\uff08Match\uff09"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.strong,{children:"Match"})," \u5b57\u6bb5\u5b9a\u4e49\u952e\u503c\u5bf9\uff0c\u6839\u636e\u7cbe\u786e\u6807\u7b7e\u5339\u914d\u8fc7\u6ee4\u544a\u8b66\u3002YAML \u793a\u4f8b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"match:\n        [ <labelname>: <labelvalue>, ... ]\n"})}),"\n",(0,s.jsx)(n.h4,{id:"\u6b63\u5219\u8868\u8fbe\u5f0fmatch-regex",children:"\u6b63\u5219\u8868\u8fbe\u5f0f\uff08Match Regex\uff09"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528 ",(0,s.jsx)(n.strong,{children:"Match Regex"})," \u5b57\u6bb5\u8fdb\u884c\u57fa\u4e8e\u6b63\u5219\u8868\u8fbe\u5f0f\u7684\u8fc7\u6ee4\u3002YAML \u793a\u4f8b\uff1a"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"match_re:\n  [ <labelname>: <regex>, ... ]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u5728\u8def\u7531\u7684 UI \u4e2d\uff0c\u4e3a ",(0,s.jsx)(n.strong,{children:"Match"})," \u6216 ",(0,s.jsx)(n.strong,{children:"Match Regex"})," \u5b57\u6bb5\u6dfb\u52a0\u952e\u503c\u5bf9\u4f1a\u81ea\u52a8\u751f\u6210\u5bf9\u5e94\u7684 YAML\u3002"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"monitoring-route-matchers",src:r(3467).A+"",width:"3094",height:"748"})}),"\n",(0,s.jsx)(n.h2,{id:"\u544a\u8b66\u6d4b\u8bd5\u9a8c\u8bc1",children:"\u544a\u8b66\u6d4b\u8bd5\u9a8c\u8bc1"}),"\n",(0,s.jsxs)(n.p,{children:["\u542f\u7528\u4e0a\u8ff0 ",(0,s.jsx)(n.a,{href:"#%E5%91%8A%E8%AD%A6%E6%B5%8B%E8%AF%95%E9%AA%8C%E8%AF%81",children:"Alertmanager \u914d\u7f6e"}),"\u540e\uff0c\u60a8\u53ef\u4ee5\u521b\u5efa\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"PrometheusRule"})," \u5bf9\u8c61\u6765\u9a8c\u8bc1\u914d\u7f6e\u662f\u5426\u6b63\u786e\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u786e\u4fdd\u5bf9\u8c61\u7684\u6807\u7b7e\u4e0e Prometheus \u5bf9\u8c61\u7684 ",(0,s.jsx)(n.code,{children:"spec.ruleSelector"})," \u5339\u914d\uff08",(0,s.jsx)(n.strong,{children:"LLMOS Monitoring"})," \u4f7f\u7528\u6807\u7b7e ",(0,s.jsx)(n.code,{children:"release: llmos-monitoring"}),"\uff09\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-shell",children:"kubectl apply -f - <<EOF\napiVersion: monitoring.coreos.com/v1\nkind: PrometheusRule\nmetadata:\n  name: prometheus-example-rules\n  namespace: llmos-monitoring-system\n  labels:\n    release: llmos-monitoring\n    role: alert-rules-testing\nspec:\n  groups:\n  - name: ./example.rules\n    rules:\n    - alert: ExampleAlert\n      expr: vector(1)\n      labels:\n        namespace: llmos-monitoring-system # namespace should matches the namespace of the AlertmanagerConfig object\nEOF\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u4e3a\u6f14\u793a\u76ee\u7684\uff0c\u4e0a\u8ff0 ",(0,s.jsx)(n.code,{children:"PrometheusRule"})," \u5bf9\u8c61\u59cb\u7ec8\u89e6\u53d1 ",(0,s.jsx)(n.code,{children:"ExampleAlert"})," \u544a\u8b66\u3002\u63a5\u4e0b\u6765\uff0c\u9a8c\u8bc1\u6240\u6709\u914d\u7f6e\u662f\u5426\u6b63\u5e38\u5de5\u4f5c\uff1a"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\u524d\u5f80 ",(0,s.jsx)(n.strong,{children:"LLMOS Management > Monitoring"}),"\uff0c\u6253\u5f00 Prometheus Web \u754c\u9762\u5e76\u5bfc\u822a\u5230 ",(0,s.jsx)(n.strong,{children:"Alerts"})," \u9875\u9762\uff0c\u786e\u8ba4 ",(0,s.jsx)(n.code,{children:"ExampleAlert"})," \u544a\u8b66\u5df2\u89e6\u53d1\u3002"]}),"\n",(0,s.jsx)(n.li,{children:"\u6253\u5f00 Alertmanager Web \u754c\u9762\uff0c\u786e\u8ba4\u663e\u793a\u4e00\u4e2a\u6d3b\u52a8\u544a\u8b66\u3002"}),"\n",(0,s.jsxs)(n.li,{children:["\u9a8c\u8bc1\u60a8\u914d\u7f6e\u7684 ",(0,s.jsx)(n.a,{href:"#%E8%B7%AF%E7%94%B1%E9%85%8D%E7%BD%AE",children:"\u63a5\u6536\u5668"})," \u662f\u5426\u63a5\u6536\u5230\u544a\u8b66\u3002"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0b\u662f Slack \u544a\u8b66\u901a\u77e5\u7684\u793a\u4f8b\uff1a"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"monitoring-slack-alerts",src:r(9434).A+"",width:"2192",height:"1220"})}),"\n",(0,s.jsx)(n.h2,{id:"\u53c2\u8003",children:"\u53c2\u8003"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://prometheus-operator.dev/docs/api-reference/api/",children:"Prometheus Operator API \u53c2\u8003"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://prometheus-operator.dev/docs/developer/alerting/",children:"\u544a\u8b66\u8def\u7531"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},487:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/monitoring-alertconfig-slack-3c777938c947c4f5b4768b7013ae1549.png"},8281:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/monitoring-alertconfigs-a053d5381d7538621b536879fb2951ad.png"},5379:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/monitoring-default-149714f3fa4192fea71a198f14827c98.png"},175:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/monitoring-monitors-ce62a655ef4af03ce8a17128c425b915.png"},7088:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/monitoring-prometheus-rules-9a37f2e9a9233f6dd2fb4710d75dbb39.png"},6425:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/monitoring-route-grouping-1aa8dcbba8321d3257c45f99ad7a21dd.png"},3467:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/monitoring-route-matchers-ceb6a902925734a9410f621e7df2cd44.png"},574:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/monitoring-route-receiver-a219fd8d06e9e4f96e81df7753e0611a.png"},9434:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/monitoring-slack-alerts-6409e9a825bd220663c89b9ee24895c4.png"},8453:(e,n,r)=>{r.d(n,{R:()=>t,x:()=>o});var s=r(6540);const i={},l=s.createContext(i);function t(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);