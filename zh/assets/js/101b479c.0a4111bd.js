"use strict";(self.webpackChunkllmos_ai=self.webpackChunkllmos_ai||[]).push([[4666],{6111:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>a,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var i=s(4848),r=s(8453);const d={sidebar_position:4,title:"\u6a21\u578b\u670d\u52a1"},c=void 0,l={id:"user_guide/modelservice",title:"\u6a21\u578b\u670d\u52a1",description:"LLMOS \u5e73\u53f0\u901a\u8fc7 ModelService \u7b80\u5316\u4e86\u5927\u8bed\u8a00\u6a21\u578b(LLM)\u7684\u90e8\u7f72, \u4e3a\u7528\u6237\u63d0\u4f9b\u4e86\u7b80\u5355\uff0c\u53cb\u597d\u7684\u914d\u7f6e\u548c\u7ba1\u7406\u754c\u9762\u3002\u63a8\u7406\u670d\u52a1\u5229\u7528\u5f3a\u5927\u7684 vLLM \u670d\u52a1\u5f15\u64ce\u3002\u901a\u8fc7\u6307\u5b9a\u6a21\u578b\u540d\u79f0\u3001Hugging Face \u914d\u7f6e\u3001\u8d44\u6e90\u8981\u6c42\u7b49\u53c2\u6570\uff0c\u7528\u6237\u53ef\u4ee5\u8f7b\u677e\u9ad8\u6548\u5730\u8bbe\u7f6e\u548c\u90e8\u7f72\u6a21\u578b\uff0c\u5e76\u652f\u6301\u5927\u89c4\u6a21\u8fd0\u884c\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/user_guide/modelservice.md",sourceDirName:"user_guide",slug:"/user_guide/modelservice",permalink:"/zh/docs/user_guide/modelservice",draft:!1,unlisted:!1,editUrl:"https://github.com/llmos-ai/llmos.ai/tree/main/docs/docs/user_guide/modelservice.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,title:"\u6a21\u578b\u670d\u52a1"},sidebar:"tutorialSidebar",previous:{title:"Notebooks",permalink:"/zh/docs/user_guide/notebooks"},next:{title:"GPU Management",permalink:"/zh/docs/category/gpu-management"}},t={},o=[{value:"\u521b\u5efa\u6a21\u578b\u670d\u52a1",id:"\u521b\u5efa\u6a21\u578b\u670d\u52a1",level:2},{value:"\u901a\u7528\u914d\u7f6e",id:"\u901a\u7528\u914d\u7f6e",level:3},{value:"\u8d44\u6e90\u914d\u7f6e",id:"\u8d44\u6e90\u914d\u7f6e",level:3},{value:"\u5377",id:"\u5377",level:3},{value:"\u8282\u70b9\u8c03\u5ea6",id:"\u8282\u70b9\u8c03\u5ea6",level:3},{value:"\u8bbf\u95ee\u6a21\u578b\u670d\u52a1 API",id:"\u8bbf\u95ee\u6a21\u578b\u670d\u52a1-api",level:2},{value:"API \u7aef\u70b9",id:"api-\u7aef\u70b9",level:3},{value:"API \u4f7f\u7528\u793a\u4f8b",id:"api-\u4f7f\u7528\u793a\u4f8b",level:3},{value:"cURL \u793a\u4f8b",id:"curl-\u793a\u4f8b",level:4},{value:"Python \u793a\u4f8b",id:"python-\u793a\u4f8b",level:4},{value:"Notebooks \u4ea4\u4e92",id:"notebooks-\u4ea4\u4e92",level:4},{value:"\u6a21\u578b\u670d\u52a1\u76d1\u63a7",id:"\u6a21\u578b\u670d\u52a1\u76d1\u63a7",level:2},{value:"\u6dfb\u52a0 Hugging Face Token",id:"\u6dfb\u52a0-hugging-face-token",level:2}];function h(e){const n={a:"a",admonition:"admonition",br:"br",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["LLMOS \u5e73\u53f0\u901a\u8fc7 ",(0,i.jsx)(n.code,{children:"ModelService"})," \u7b80\u5316\u4e86\u5927\u8bed\u8a00\u6a21\u578b(LLM)\u7684\u90e8\u7f72, \u4e3a\u7528\u6237\u63d0\u4f9b\u4e86\u7b80\u5355\uff0c\u53cb\u597d\u7684\u914d\u7f6e\u548c\u7ba1\u7406\u754c\u9762\u3002\u63a8\u7406\u670d\u52a1\u5229\u7528\u5f3a\u5927\u7684 ",(0,i.jsx)(n.a,{href:"https://docs.vllm.ai/en/latest/",children:"vLLM"})," \u670d\u52a1\u5f15\u64ce\u3002\u901a\u8fc7\u6307\u5b9a\u6a21\u578b\u540d\u79f0\u3001Hugging Face \u914d\u7f6e\u3001\u8d44\u6e90\u8981\u6c42\u7b49\u53c2\u6570\uff0c\u7528\u6237\u53ef\u4ee5\u8f7b\u677e\u9ad8\u6548\u5730\u8bbe\u7f6e\u548c\u90e8\u7f72\u6a21\u578b\uff0c\u5e76\u652f\u6301\u5927\u89c4\u6a21\u8fd0\u884c\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"model-service-list",src:s(7151).A+"",width:"3110",height:"720"})}),"\n",(0,i.jsx)(n.h2,{id:"\u521b\u5efa\u6a21\u578b\u670d\u52a1",children:"\u521b\u5efa\u6a21\u578b\u670d\u52a1"}),"\n",(0,i.jsxs)(n.p,{children:["\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(n.strong,{children:"LLMOS \u7ba1\u7406 > \u6a21\u578b\u670d\u52a1"})," \u9875\u9762\u521b\u5efa\u4e00\u4e2a\u6216\u591a\u4e2a\u6a21\u578b\u670d\u52a1\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u901a\u7528\u914d\u7f6e",children:"\u901a\u7528\u914d\u7f6e"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u540d\u79f0\u548c\u547d\u540d\u7a7a\u95f4"}),"\uff1a\u8f93\u5165\u6a21\u578b\u670d\u52a1\u7684\u540d\u79f0\u548c\u547d\u540d\u7a7a\u95f4\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u6a21\u578b\u6e90\u548c\u540d\u79f0"}),"\uff1a","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u9009\u62e9\u6a21\u578b\u6e90\uff1a",(0,i.jsx)(n.a,{href:"https://huggingface.co/models",children:"Hugging Face"}),"\u3001",(0,i.jsx)(n.a,{href:"https://modelscope.cn/models",children:"ModelScope"})," \u6216 ",(0,i.jsx)(n.strong,{children:"\u672c\u5730\u8def\u5f84"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5bf9\u4e8e Hugging Face \u6216 ModelScope \u6a21\u578b\uff0c\u8bf7\u7c98\u8d34\u6ce8\u518c\u8868\u4e2d\u7684\u6a21\u578b\u540d\u79f0\uff08\u4f8b\u5982\uff0c",(0,i.jsx)(n.code,{children:"Qwen/Qwen2.5-0.5B-Instruct"}),"\uff09\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5bf9\u4e8e\u672c\u5730\u8def\u5f84\u6a21\u578b\uff0c\u8bf7\u6307\u5b9a\u5377\u8def\u5f84\uff08\u4f8b\u5982\uff0c",(0,i.jsx)(n.code,{children:"/root/.cache/huggingface/hub/models--Qwen--Qwen2.5-0.5B-Instruct"}),"\uff09\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u5f15\u64ce\u53c2\u6570\uff08\u53ef\u9009\uff09"}),"\uff1a\u5982\u6709\u9700\u8981\uff0c\u8bf7\u5728 ",(0,i.jsx)(n.strong,{children:"\u53c2\u6570"})," \u5b57\u6bb5\u4e2d\u6dfb\u52a0\u53c2\u6570\uff0c\u4f8b\u5982 ",(0,i.jsx)(n.code,{children:"--dtype=half --max-model-len=4096"}),", ",(0,i.jsx)(n.a,{href:"https://docs.vllm.ai/en/latest/usage/engine_args.html",children:"\u66f4\u591a\u8be6\u60c5"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Hugging Face \u914d\u7f6e\uff08\u53ef\u9009\uff09"}),"\uff1a","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5bf9\u4e8e\u9700\u8981\u8eab\u4efd\u9a8c\u8bc1\u7684\u6a21\u578b\uff0c\u53ef\u4ee5\u4f7f\u7528",(0,i.jsx)(n.a,{href:"#%E6%B7%BB%E5%8A%A0-hugging-face-token",children:"\u5bc6\u94a5\u51ed\u8bc1"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5982\u9700\u4f7f\u7528\u4ee3\u7406\uff0c\u53ef\u4ee5\u6dfb\u52a0\u81ea\u5b9a\u4e49\u7684 ",(0,i.jsx)(n.strong,{children:"Hugging Face \u955c\u50cf URL"}),"\uff08\u4f8b\u5982\uff0c",(0,i.jsx)(n.code,{children:"https://hf-mirror.com/"}),"\uff09\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u73af\u5883\u53d8\u91cf\uff08\u53ef\u9009\uff09"}),"\uff1a\u6839\u636e\u9700\u8981\u6dfb\u52a0\u989d\u5916\u7684\u73af\u5883\u53d8\u91cf, ",(0,i.jsx)(n.a,{href:"https://docs.vllm.ai/en/latest/usage/env_vars.html",children:"\u66f4\u591a\u8be6\u60c5"}),"\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"model-service-create-general",src:s(1607).A+"",width:"3112",height:"1734"})}),"\n",(0,i.jsx)(n.h3,{id:"\u8d44\u6e90\u914d\u7f6e",children:"\u8d44\u6e90\u914d\u7f6e"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["\u6709\u5173\u5927\u8bed\u8a00\u6a21\u578b\u7684 GPU \u8d44\u6e90\u9700\u6c42\uff0c\u8bf7\u53c2\u9605 ",(0,i.jsx)(n.a,{href:"https://github.com/ray-project/llm-numbers",children:"LLM numbers"}),"\u3002"]})}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"CPU \u548c\u5185\u5b58"}),"\uff1a\u4e3a\u6a21\u578b\u5206\u914d CPU \u548c\u5185\u5b58\u8d44\u6e90\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"GPU \u8d44\u6e90"}),"\uff1a","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u9009\u62e9 ",(0,i.jsx)(n.strong,{children:"GPU"})," \u548c ",(0,i.jsx)(n.strong,{children:"Runtime Class"}),"\uff08\u9ed8\u8ba4\uff1a",(0,i.jsx)(n.strong,{children:"nvidia"}),"\uff09\u3002","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u6700\u5c0f\u503c\uff1a\u6700\u5c11\u4f7f\u7528 ",(0,i.jsx)(n.strong,{children:"1 \u4e2a vGPU"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5bf9\u4e8e\u8f83\u5927\u7684\u5927\u6a21\u578b(\u4f8b\u5982 Llama3-70B)\uff0c\u53ef\u4f7f\u7528",(0,i.jsx)(n.strong,{children:"\u5f20\u91cf\u5e76\u884c"}),"\u6765\u8de8\u591a\u4e2a GPU \u8d44\u6e90\u8fdb\u884c\u5206\u914d\u3002\u4f8b\u5982\uff0c\u4f7f\u75284\u4e2a GPU \u65f6\uff0c\u5f20\u91cf\u5e76\u884c\u5c06\u88ab\u7f6e\u5927\u5c0f\u4e3a4\u3002"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["(\u5bf9\u4e8e\u5c0f\u6a21\u578b\u6216\u6d4b\u8bd5\u573a\u666f)\u53ef\u4f7f\u7528\u5171\u4eab GPU \u8bbe\u5907\uff0c\u8bf7\u542f\u7528 ",(0,i.jsx)(n.strong,{children:"vGPU"})," \u5e76\u6307\u5b9a ",(0,i.jsx)(n.code,{children:"vGPU"})," \u5185\u5b58\u5927\u5c0f\uff08\u4ee5 MiB \u4e3a\u5355\u4f4d\uff09\u548c ",(0,i.jsx)(n.code,{children:"vGPU Cores"}),"\uff08\u9ed8\u8ba4\uff1a100%\uff09\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"model-service-resources",src:s(1072).A+"",width:"3114",height:"1726"})}),"\n",(0,i.jsx)(n.h3,{id:"\u5377",children:"\u5377"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u6301\u4e45\u5377"}),"\uff1a","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u9ed8\u8ba4\uff1a\u4e00\u4e2a\u6302\u8f7d\u5230 ",(0,i.jsx)(n.code,{children:"/root/.cache"})," \u7684\u6301\u4e45\u5377\u7528\u4e8e\u5b58\u50a8\u4e0b\u8f7d\u7684\u6a21\u578b\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5bf9\u4e8e\u8de8\u670d\u52a1\u5171\u4eab\u6a21\u578b\uff0c\u53ef\u4ee5\u5c06\u9ed8\u8ba4\u5377\u66ff\u6362\u4e3a\u81ea\u5b9a\u4e49\u7684 ",(0,i.jsx)(n.strong,{children:"Many-Node Read/Write"})," \u6301\u4e45\u5377\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5bf9\u4e8e ",(0,i.jsx)(n.strong,{children:"\u672c\u5730\u8def\u5f84"})," \u6a21\u578b\uff1a","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u6dfb\u52a0\u4e00\u4e2a\u5305\u542b\u6a21\u578b\u6587\u4ef6\u7684\u73b0\u6709\u5377\uff0c\u4ee5\u8df3\u8fc7\u4e0b\u8f7d\u8fc7\u7a0b\u3002"}),"\n",(0,i.jsxs)(n.li,{children:["\u5982\u679c\u4e0d\u9700\u8981\uff0c\u53ef\u4ee5\u79fb\u9664\u9ed8\u8ba4\u7684 ",(0,i.jsx)(n.code,{children:"model-dir"})," \u5377\u3002"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u5171\u4eab\u5185\u5b58\uff08dshm\uff09"}),"\uff1a","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u5c06 ",(0,i.jsx)(n.code,{children:"emptyDir"})," \u5377\u6302\u8f7d\u5230 ",(0,i.jsx)(n.code,{children:"/dev/shm"}),"\uff0c\u5e76\u5c06 ",(0,i.jsx)(n.strong,{children:"Medium"})," \u8bbe\u7f6e\u4e3a ",(0,i.jsx)(n.strong,{children:"Memory"}),"\uff0c\u7528\u4e8e\u4e34\u65f6\u5185\u5b58\u5b58\u50a8\u3002"]}),"\n",(0,i.jsx)(n.li,{children:"\u5bf9\u4e8e PyTorch \u5f20\u91cf\u5e76\u884c\u63a8\u7406\uff0c\u8fd9\u662f\u5fc5\u8981\u7684\uff0c\u56e0\u5176\u9700\u8981\u5728\u8fdb\u7a0b\u4e4b\u95f4\u5171\u4eab\u5185\u5b58\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u5982\u679c\u672a\u542f\u7528\uff0c\u5171\u4eab\u5185\u5b58\u7684\u9ed8\u8ba4\u5927\u5c0f\u4e3a 64 MiB\u3002"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"modelservice-create-volumes",src:s(5782).A+"",width:"3172",height:"1622"})}),"\n",(0,i.jsx)(n.h3,{id:"\u8282\u70b9\u8c03\u5ea6",children:"\u8282\u70b9\u8c03\u5ea6"}),"\n",(0,i.jsx)(n.p,{children:"\u60a8\u53ef\u4ee5\u4e3a\u6a21\u578b\u670d\u52a1\u6307\u5b9a\u8282\u70b9\u7ea6\u675f\uff0c\u4f7f\u7528\u8282\u70b9\u6807\u7b7e\uff0c\u6216\u8005\u5c06\u5176\u7559\u7a7a\u4ee5\u5728\u4efb\u4f55\u53ef\u7528\u8282\u70b9\u4e0a\u8fd0\u884c\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"model-service-node-scheduling",src:s(861).A+"",width:"3110",height:"1098"})}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["\u6709\u5173\u8282\u70b9\u8c03\u5ea6\u7684\u66f4\u591a\u8be6\u60c5\uff0c\u8bf7\u53c2\u8003 ",(0,i.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#node-affinity",children:"Kubernetes \u8282\u70b9\u4eb2\u548c\u529b\u6587\u6863"}),"\u3002"]})}),"\n",(0,i.jsx)(n.h2,{id:"\u8bbf\u95ee\u6a21\u578b\u670d\u52a1-api",children:"\u8bbf\u95ee\u6a21\u578b\u670d\u52a1 API"}),"\n",(0,i.jsxs)(n.p,{children:["\u6a21\u578b\u670d\u52a1\u5728 ",(0,i.jsx)(n.code,{children:"/v1"})," \u8def\u5f84\u4e0b\u66b4\u9732\u4e86\u4e00\u7cfb\u5217\u4e0e ",(0,i.jsx)(n.a,{href:"https://platform.openai.com/docs/api-reference/introduction",children:"OpenAI API"})," \u517c\u5bb9\u7684 RESTful API\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u70b9\u51fb\u6240\u9009\u6a21\u578b\u7684 ",(0,i.jsx)(n.strong,{children:"Copy"})," \u6309\u94ae\u83b7\u53d6\u6a21\u578b API URL\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"modelservice-api-url",src:s(6930).A+"",width:"3110",height:"746"})}),"\n",(0,i.jsx)(n.h3,{id:"api-\u7aef\u70b9",children:"API \u7aef\u70b9"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"\u8def\u7531\u8def\u5f84"}),(0,i.jsx)(n.th,{children:"\u65b9\u6cd5"}),(0,i.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/v1/chat/completions"})}),(0,i.jsx)(n.td,{children:"POST"}),(0,i.jsx)(n.td,{children:"\u4f7f\u7528\u6a21\u578b\u670d\u52a1\u6267\u884c\u591a\u8f6e\u5305\u542b\u4e0a\u4e0b\u6587\u7684\u804a\u5929\u5bf9\u8bdd\u3002"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/v1/completions"})}),(0,i.jsx)(n.td,{children:"POST"}),(0,i.jsx)(n.td,{children:"\u4f7f\u7528\u6a21\u578b\u670d\u52a1\u6267\u884c\u5355\u6b21\u7684\u6807\u51c6\u8f93\u51fa\u3002"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/v1/embeddings"})}),(0,i.jsx)(n.td,{children:"POST"}),(0,i.jsx)(n.td,{children:"\u4f7f\u7528\u6a21\u578b\u670d\u52a1\u751f\u6210\u5d4c\u5165\u7ed3\u679c\u3002"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/v1/models"})}),(0,i.jsx)(n.td,{children:"GET"}),(0,i.jsx)(n.td,{children:"\u5217\u51fa\u6240\u6709\u53ef\u7528\u6a21\u578b\u3002"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/health"})}),(0,i.jsx)(n.td,{children:"GET"}),(0,i.jsx)(n.td,{children:"\u68c0\u67e5\u6a21\u578b\u670d\u52a1 HTTP \u670d\u52a1\u5668\u7684\u5065\u5eb7\u72b6\u6001\u3002"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/tokenize"})}),(0,i.jsx)(n.td,{children:"POST"}),(0,i.jsxs)(n.td,{children:["\u4f7f\u7528\u6b63\u5728\u8fd0\u884c\u7684\u6a21\u578b\u670d\u52a1 ",(0,i.jsx)(n.a,{href:"https://platform.openai.com/tokenizer",children:"Tokenize"})," \u6587\u672c\u3002"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/detokenize"})}),(0,i.jsx)(n.td,{children:"POST"}),(0,i.jsx)(n.td,{children:"\u4f7f\u7528\u6b63\u5728\u8fd0\u884c\u7684\u6a21\u578b\u670d\u52a1\u5c06\u6807\u8bb0\u53cd\u5411\u8f6c\u6362\u3002"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"/openapi.json"})}),(0,i.jsx)(n.td,{children:"GET, HEAD"}),(0,i.jsx)(n.td,{children:"\u83b7\u53d6\u6a21\u578b\u670d\u52a1\u7684 OpenAPI JSON \u89c4\u8303\u3002"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"api-\u4f7f\u7528\u793a\u4f8b",children:"API \u4f7f\u7528\u793a\u4f8b"}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["LLMOS API \u4ee4\u724c\u53ef\u4ee5\u901a\u8fc7 ",(0,i.jsx)(n.a,{href:"../user_and_auth/api-keys",children:"API Keys"})," \u9875\u9762\u83b7\u5f97\u3002"]})}),"\n",(0,i.jsx)(n.h4,{id:"curl-\u793a\u4f8b",children:"cURL \u793a\u4f8b"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'export LLMOS_API_KEY=myapikey\nexport API_BASE=192.168.31.100:8443/api/v1/namespaces/default/services/modelservice-qwen2:http/proxy/v1\ncurl -k -X POST \\\n  -H "Content-Type: application/json" \\\n  -H "Authorization: Bearer $LLMOS_API_KEY" \\\n  -d \'{\n    "model": "Qwen/Qwen2.5-0.5B-Instruct",\n    "messages": [\n      {\n        "role": "system",\n        "content": "You are a helpful assistant."\n      },\n      {\n        "role": "user",\n        "content": "Say this is a test"\n      }\n    ],\n    "temperature": 0.9\n  }\' \\\n  $API_BASE/chat/completions\n'})}),"\n",(0,i.jsx)(n.p,{children:"\u54cd\u5e94\u793a\u4f8b\uff1a"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "id":"chat-efffa70236bd4edda7e5420349339d45",\n  "object":"chat.completion",\n  "created":1727267645,\n  "model":"Qwen/Qwen2.5-0.5B-Instruct",\n  "choices":[\n    {\n      "index":0,\n      "message":{\n        "role":"assistant",\n        "content":"Yes, it is a test."\n      },\n      "logprobs":null,\n      "finish_reason":"stop"\n    }\n  ],\n  "usage":{\n    "prompt_tokens":24,\n    "total_tokens":32,\n    "completion_tokens":8\n  }\n}\n'})}),"\n",(0,i.jsx)(n.h4,{id:"python-\u793a\u4f8b",children:"Python \u793a\u4f8b"}),"\n",(0,i.jsxs)(n.p,{children:["\u7531\u4e8e\u6a21\u578b\u670d\u52a1\u7684 API \u4e0e ",(0,i.jsx)(n.code,{children:"OpenAI"})," \u517c\u5bb9\uff0c\u60a8\u53ef\u4ee5\u5c06\u5176\u4f5c\u4e3a\u57fa\u4e8e ",(0,i.jsx)(n.code,{children:"OpenAI"})," \u5e94\u7528\u7a0b\u5e8f\u7684\u76f4\u63a5\u66ff\u4ee3\u54c1\u4f7f\u7528\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-python",children:'from openai import OpenAI\nimport httpx\n\n# \u8bbe\u7f6e API \u5bc6\u94a5\u548c\u57fa\u672c URL\nopenai_api_key = "llmos-5frck:xxxxxxxxxg79c9p5"\nopenai_api_base = "https://192.168.31.100:8443/api/v1/namespaces/default/services/modelservice-qwen2:http/proxy/v1"\nclient = OpenAI(\n   api_key=openai_api_key,\n   base_url=openai_api_base,\n   http_client=httpx.Client(verify=False), # \u7981\u7528 SSL \u9a8c\u8bc1\u6216\u4f7f\u7528\u81ea\u5b9a\u4e49 CA \u5305\u3002\n)\n\ncompletion = client.chat.completions.create(\n   model="Qwen/Qwen2.5-0.5B-Instruct",\n   messages=[{"role": "user", "content": "How do I output all files in a directory using Python?"}]\n)\nprint(completion.choices[0].message.content)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"notebooks-\u4ea4\u4e92",children:"Notebooks \u4ea4\u4e92"}),"\n",(0,i.jsxs)(n.p,{children:["\u60a8\u8fd8\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(n.a,{href:"/zh/docs/user_guide/notebooks",children:"Notebooks"})," \u4e0e\u6a21\u578b\u670d\u52a1\u4ea4\u4e92\uff0cNotebooks \u53ef\u63d0\u4f9b\u66f4\u4e30\u5bcc\u7684 HTML\u3001\u56fe\u5f62\u7b49\u66f4\u4e92\u52a8\u5730\u63a2\u7d22\u6a21\u578b\u7684\u80fd\u529b\uff08\u4f8b\u5982\uff0c\u4e0b\u9762\u7684 Jupyter Notebook\uff09\u3002"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"model-service-notebook",src:s(1378).A+"",width:"2870",height:"1752"})}),"\n",(0,i.jsxs)(n.admonition,{type:"note",children:[(0,i.jsx)(n.p,{children:"\u5728\u60a8\u7684 LLMOS \u96c6\u7fa4\u5185\uff0c\u60a8\u53ef\u4ee5\u4f7f\u7528\u6a21\u578b\u670d\u52a1\u7684\u5185\u90e8 DNS \u540d\u79f0\u6765\u8fde\u63a5\u6a21\u578b\u670d\u52a1\u4ece\u800c\u964d\u4f4e\u5ef6\u8fdf\u548c\u51cf\u5c11\u8bc1\u4e66\u7684\u914d\u7f6e\u3002"}),(0,i.jsxs)(n.p,{children:["\u8981\u83b7\u53d6\u5185\u90e8 DNS \u540d\u79f0\uff0c\u8bf7\u70b9\u51fb\u6a21\u578b\u670d\u52a1\u7684 ",(0,i.jsx)(n.strong,{children:"Copy Internal URL"})," \u6309\u94ae\u3002"]})]}),"\n",(0,i.jsx)(n.h2,{id:"\u6a21\u578b\u670d\u52a1\u76d1\u63a7",children:"\u6a21\u578b\u670d\u52a1\u76d1\u63a7"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"\u6a21\u578b\u670d\u52a1"}),"\u9ed8\u8ba4\u4e0e ",(0,i.jsx)(n.a,{href:"./monitoring/enable-monitoring",children:"LLMOS \u76d1\u63a7"})," \u8fdb\u884c\u4e86\u96c6\u6210\u5e76\u5185\u7f6e\u76f8\u5e94\u7684\u76d1\u63a7\u6307\u6807\uff0c\u7528\u4e8e\u8ddf\u8e2a\u6a21\u578b\u6027\u80fd\u548c\u4f7f\u7528\u60c5\u51b5\u7b49\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u70b9\u51fb\u6a21\u578b\u670d\u52a1\u540d\u79f0\u4ee5\u6253\u5f00\u5176\u8be6\u7ec6\u4fe1\u606f\u9875\u9762\u3002"}),"\n",(0,i.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,i.jsx)(n.strong,{children:"Token \u6307\u6807"})," \u67e5\u770b token \u76f8\u5173\u7684\u76d1\u63a7\u6307\u6807\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u4f7f\u7528 ",(0,i.jsx)(n.strong,{children:"\u76d1\u63a7\u6307\u6807"})," \u6807\u7b7e\u67e5\u770b\u670d\u52a1 CPU\u3001\u5185\u5b58\u3001\u78c1\u76d8 I/O \u7b49\u8d44\u6e90\u4f7f\u7528\u60c5\u51b5\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"model-service-metrics",src:s(3597).A+"",width:"3238",height:"1746"})}),"\n",(0,i.jsx)(n.h2,{id:"\u6dfb\u52a0-hugging-face-token",children:"\u6dfb\u52a0 Hugging Face Token"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 Hugging Face \u4e2d\u67d0\u4e9b\u6a21\u578b\u9700\u8981\u8eab\u4efd\u9a8c\u8bc1\u624d\u80fd\u4e0b\u8f7d\u3002\u5982\u679c\u60a8\u7684\u6a21\u578b\u9700\u8981\u4ee4\u724c\uff0c\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u6dfb\u52a0 ",(0,i.jsx)(n.a,{href:"https://huggingface.co/docs/hub/en/security-tokens",children:"Hugging Face \u4ee4\u724c"}),"\uff1a"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\u8f6c\u5230 ",(0,i.jsx)(n.strong,{children:"\u9ad8\u7ea7 > \u5bc6\u94a5"})," \u5e76\u70b9\u51fb ",(0,i.jsx)(n.strong,{children:"\u521b\u5efa"}),"\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u9009\u62e9 ",(0,i.jsx)(n.strong,{children:"Opaque"})," \u5bc6\u94a5\u7c7b\u578b\u3002",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{alt:"secret-create-opaque",src:s(5093).A+"",width:"3174",height:"916"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u9009\u62e9\u4e0e\u6a21\u578b\u670d\u52a1\u5339\u914d\u7684 ",(0,i.jsx)(n.strong,{children:"\u547d\u540d\u7a7a\u95f4"}),"\uff0c\u5e76\u63d0\u4f9b\u6e05\u6670\u7684 ",(0,i.jsx)(n.strong,{children:"\u540d\u79f0"}),"\uff08\u4f8b\u5982\uff0c",(0,i.jsx)(n.code,{children:"my-hf-token"}),"\uff09\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:["\u5c06 ",(0,i.jsx)(n.strong,{children:"Key"})," \u8bbe\u7f6e\u4e3a ",(0,i.jsx)(n.code,{children:"token"}),"\uff0c\u5e76\u5c06 Hugging Face \u4ee4\u724c\u7c98\u8d34\u4e3a ",(0,i.jsx)(n.strong,{children:"Value"}),"\u3002",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.img,{alt:"secret-create-hf-token",src:s(265).A+"",width:"3118",height:"1066"})]}),"\n",(0,i.jsxs)(n.li,{children:["\u70b9\u51fb ",(0,i.jsx)(n.strong,{children:"\u521b\u5efa"})," \u4fdd\u5b58\u5bc6\u94a5\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u521b\u5efa\u540e\uff0c\u5bc6\u94a5\u5c06\u4f5c\u4e3a\u9009\u9879\u663e\u793a\uff0c\u5728\u540c\u4e00\u547d\u540d\u7a7a\u95f4\u4e2d\u8bbe\u7f6e\u6a21\u578b\u670d\u52a1\u65f6\u53ef\u4ee5\u9009\u62e9\u8be5\u5bc6\u94a5\u3002"})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},6930:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/modelservice-api-url-df7afe6f7b2651d80b3b97d6e8045d6f.png"},1607:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/modelservice-create-general-da51f8ca85d1c17c3dc543d946a3570d.png"},1072:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/modelservice-create-resources-a05fc23cc4c1d3756a11d9fdcc0187f4.png"},5782:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/modelservice-create-volumes-4cebb0451994aa20d53c8927aed643e3.png"},7151:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/modelservice-list-4dfa2a5067cc0c177fa5df7c7d669bdf.png"},3597:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/modelservice-metrics-b3ec54381cfbdff7a1827c7f6d7e664a.png"},861:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/modelservice-node-scheduling-7d730f1a68e0add35b1a80b4466810e8.png"},1378:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/modelservice-notebook-example-e42be55aac23840dfcf65231ddeddc17.png"},265:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/secret-create-hf-token-086bffab7e79dee78f7105417d22e4ce.png"},5093:(e,n,s)=>{s.d(n,{A:()=>i});const i=s.p+"assets/images/secret-types-opaque-bb0c117ee345442ad345e26636970762.png"},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>l});var i=s(6540);const r={},d=i.createContext(r);function c(e){const n=i.useContext(d);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(d.Provider,{value:n},e.children)}}}]);