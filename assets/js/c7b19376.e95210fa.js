"use strict";(self.webpackChunkllmos_ai=self.webpackChunkllmos_ai||[]).push([[613],{6063:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>d});var s=i(4848),o=i(8453);const t={sidebar_position:2,title:"Model Serving"},l=void 0,r={id:"user_guide/llm_management/serve",title:"Model Serving",description:"The LLMOS platform provides a streamlined way to serve machine learning models using the ModelService resource.",source:"@site/docs/user_guide/llm_management/serve.md",sourceDirName:"user_guide/llm_management",slug:"/user_guide/llm_management/serve",permalink:"/docs/user_guide/llm_management/serve",draft:!1,unlisted:!1,editUrl:"https://github.com/llmos-ai/llmos.ai/tree/main/docs/docs/user_guide/llm_management/serve.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Model Serving"},sidebar:"tutorialSidebar",previous:{title:"Notebooks",permalink:"/docs/user_guide/llm_management/notebooks"},next:{title:"Storage",permalink:"/docs/category/storage"}},c={},d=[{value:"Create a Model Service",id:"create-a-model-service",level:2},{value:"General Configuration",id:"general-configuration",level:3},{value:"Resource Configuration",id:"resource-configuration",level:3},{value:"Volumes",id:"volumes",level:3},{value:"Node Scheduling",id:"node-scheduling",level:3},{value:"Access Model Service APIs",id:"access-model-service-apis",level:2},{value:"API Endpoints",id:"api-endpoints",level:3},{value:"API Examples",id:"api-examples",level:3},{value:"Chat Completions: curl",id:"chat-completions-curl",level:4},{value:"Completions Example: Python",id:"completions-example-python",level:4},{value:"Notebook Interaction",id:"notebook-interaction",level:4}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["The LLMOS platform provides a streamlined way to serve machine learning models using the ",(0,s.jsx)(n.code,{children:"ModelService"})," resource.\nThis resource offers an intuitive interface to configure and manage model serving, leveraging the power of the ",(0,s.jsx)(n.a,{href:"https://docs.vllm.ai/en/latest/",children:"vLLM"})," serving engine.\nBy specifying details such as the model name, Hugging Face configurations, resource requirements, and more, users can easily set up and deploy models in a scalable and efficient manner."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"model-service-list",src:i(1439).A+"",width:"3104",height:"614"})}),"\n",(0,s.jsx)(n.h2,{id:"create-a-model-service",children:"Create a Model Service"}),"\n",(0,s.jsxs)(n.p,{children:["You can create one or more model services from the ",(0,s.jsx)(n.code,{children:"LLM Management > Model Services"})," page."]}),"\n",(0,s.jsx)(n.h3,{id:"general-configuration",children:"General Configuration"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Specify the name and namespace of your model service."}),"\n",(0,s.jsxs)(n.li,{children:["Specify the model name, which can be a ",(0,s.jsx)(n.a,{href:"https://huggingface.co/models",children:"Hugging Face"})," model name(e.g., ",(0,s.jsx)(n.code,{children:"facebook/opt-125m"}),") or a local model path(e.g., ",(0,s.jsx)(n.code,{children:"/root/.cache/huggingface/hub/models--facebook--opt-125m"}),")."]}),"\n",(0,s.jsxs)(n.li,{children:["(Optional) Specify the ",(0,s.jsx)(n.a,{href:"https://docs.vllm.ai/en/latest/models/engine_args.html",children:"additional parameters"})," like ",(0,s.jsx)(n.code,{children:"--dtype, --max-model-len"})," in the ",(0,s.jsx)(n.strong,{children:"Arguments"})," field."]}),"\n",(0,s.jsxs)(n.li,{children:["(Optional) Configure the Hugging Face configurations:","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Select the ",(0,s.jsx)(n.code,{children:"Hugging Face Hub token"})," secret credential if the model is only authorized to be downloaded."]}),"\n",(0,s.jsx)(n.li,{children:"Specify a custom Hugging Face Mirror URL if you need to use a mirror endpoint."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["(Optional) Add additional ",(0,s.jsx)(n.a,{href:"https://docs.vllm.ai/en/latest/serving/env_vars.html",children:"environment variables"})," for the model service if needed.\n",(0,s.jsx)(n.img,{alt:"model-service-create",src:i(1607).A+"",width:"3124",height:"1734"})]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"resource-configuration",children:"Resource Configuration"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Specify the CPU and memory resources for the model service."}),"\n",(0,s.jsxs)(n.li,{children:["Specify the GPU resources for the model service :","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Minimum ",(0,s.jsx)(n.code,{children:"1"})," GPU is required if using the default ",(0,s.jsx)(n.code,{children:"vllm-openai"})," serving image"]}),"\n",(0,s.jsxs)(n.li,{children:["Select the correct ",(0,s.jsx)(n.strong,{children:"Runtime Class"})," if needed, default to ",(0,s.jsx)(n.strong,{children:"nvidia"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"model-service-resources",src:i(1072).A+"",width:"3108",height:"1060"})}),"\n",(0,s.jsx)(n.h3,{id:"volumes",children:"Volumes"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Add a persistent volume to the ",(0,s.jsx)(n.code,{children:"/root/.cache/huggingface/hub"})," path to store the downloaded model files.","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["You can select a volume with ",(0,s.jsx)(n.strong,{children:"Access Mode"})," of ",(0,s.jsx)(n.code,{children:"ReadOnlyMany"})," if you want to use a shared volume across multiple model services."]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["Mount an emptyDir volume to ",(0,s.jsx)(n.code,{children:"/dev/shm"})," and set its medium to ",(0,s.jsx)(n.strong,{children:"Memory"}),". This effectively creates a temporary filesystem in memory, allowing you to allocate more shared memory than the default limit(64MB).","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," This is useful for PyTorch tensor parallel inference, which uses shared memory to share data between processes under the hood."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{alt:"modelservice-create-volumes",src:i(5782).A+"",width:"3164",height:"1630"}),"]"]}),"\n",(0,s.jsx)(n.h3,{id:"node-scheduling",children:"Node Scheduling"}),"\n",(0,s.jsx)(n.p,{children:"Node Scheduling allows you to constrain which nodes your model service can be scheduled on based on node labels, or simply leave it default to allow run on any available node."}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Refer to the ",(0,s.jsx)(n.a,{href:"https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#node-affinity",children:"Kubernetes Node Affinity Documentation"})," for more details."]})}),"\n",(0,s.jsx)(n.h2,{id:"access-model-service-apis",children:"Access Model Service APIs"}),"\n",(0,s.jsxs)(n.p,{children:["Model Service will expose a list of RESTful APIs and implements ",(0,s.jsx)(n.a,{href:"https://platform.openai.com/docs/api-reference/introduction",children:"OpenAI Compatible APIs"})," with the ",(0,s.jsx)(n.code,{children:"/v1"})," path.\nYour can get the model API URL by clicking the ",(0,s.jsx)(n.code,{children:"Copy"})," button in the ",(0,s.jsx)(n.strong,{children:"Model Services"})," page."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"model-service-api",src:i(3844).A+"",width:"3192",height:"530"})}),"\n",(0,s.jsx)(n.h3,{id:"api-endpoints",children:"API Endpoints"}),"\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Route Path"}),(0,s.jsx)(n.th,{children:"Methods"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/v1/chat/completions"})}),(0,s.jsx)(n.td,{children:"POST"}),(0,s.jsx)(n.td,{children:"Perform chat completions using the model service."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/v1/completions"})}),(0,s.jsx)(n.td,{children:"POST"}),(0,s.jsx)(n.td,{children:"Perform completions using the model service."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/v1/embeddings"})}),(0,s.jsx)(n.td,{children:"POST"}),(0,s.jsx)(n.td,{children:"Perform embeddings using the model service."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/v1/models"})}),(0,s.jsx)(n.td,{children:"GET"}),(0,s.jsx)(n.td,{children:"List all available models."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/health"})}),(0,s.jsx)(n.td,{children:"GET"}),(0,s.jsx)(n.td,{children:"Check the health of the model service HTTP server."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/tokenize"})}),(0,s.jsx)(n.td,{children:"POST"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.a,{href:"https://platform.openai.com/tokenizer",children:"Tokenize"})," text using the running model service."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/detokenize"})}),(0,s.jsx)(n.td,{children:"POST"}),(0,s.jsx)(n.td,{children:"Detokenize tokens using the running model service."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"/openapi.json"})}),(0,s.jsx)(n.td,{children:"GET, HEAD"}),(0,s.jsx)(n.td,{children:"Get the OpenAPI json specification of the model service."})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"api-examples",children:"API Examples"}),"\n",(0,s.jsx)(n.h4,{id:"chat-completions-curl",children:"Chat Completions: curl"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'export LLMOS_API_KEY=myapikey\ncurl -k -X POST \\\n  -H "Content-Type: application/json" \\\n  -H "Authorization: Bearer $LLMOS_API_KEY" \\\n  -d \'{\n    "model": "facebook/opt-125m",\n    "messages": [\n      {\n        "role": "system",\n        "content": "You are a helpful assistant."\n      },\n      {\n        "role": "user",\n        "content": "Hello!"\n      }\n    ],\n    "temperature": 0.9\n  }\' \\\n  https://modelservice-api-url/v1/chat/completions\n'})}),"\n",(0,s.jsx)(n.h4,{id:"completions-example-python",children:"Completions Example: Python"}),"\n",(0,s.jsx)(n.p,{children:"Since the server API is compatible with OpenAI API, you can use it as a drop-in replacement for any applications using OpenAI API. For example, another way to query the server is via the openai python package:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-python",children:'from openai import OpenAI\n# Modify OpenAI\'s API key and API base to use modelService\'s API server.\nopenai_api_key = "EMPTY"\nopenai_api_base = "https://modelservice-api-url/v1" # Replace with your model service\'s API URL.\nclient = OpenAI(\n    api_key=openai_api_key,\n    base_url=openai_api_base,\n)\ncompletion = client.completions.create(model="facebook/opt-125m",\n                                      prompt="San Francisco is a")\nprint("Completion result:", completion)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"notebook-interaction",children:"Notebook Interaction"}),"\n",(0,s.jsxs)(n.p,{children:["You can also interact with model services using the Jupyter ",(0,s.jsx)(n.a,{href:"./notebooks",children:"Notebook"}),", which is a great way to explore the model's capabilities with a rich interactive output like HTML, graphs, and more."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Within the LLMOS cluster, you can connect to the model service using the internal DNS name. For example, ",(0,s.jsx)(n.code,{children:"http://modelservice-name.default.svc.cluster.local:8000"}),"."]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{alt:"model-service-notebook",src:i(1378).A+"",width:"2876",height:"1060"})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},1439:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/model-service-list-ee8f2971701246d0be3a47c6039e8c57.png"},3844:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/modelservice-copy-api-c2ac575e950cda09440689624976848f.png"},1607:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/modelservice-create-general-df506d5a2691c0f4b39bb49c4bbad0e9.png"},1072:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/modelservice-create-resources-addba993b42e5ab61caa47c12236ad06.png"},5782:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/modelservice-create-volumes-5a9e1266bbb802eec371fb177bc05654.png"},1378:(e,n,i)=>{i.d(n,{A:()=>s});const s=i.p+"assets/images/modelservice-notebook-example-97883d096929bd36e694f4268cad8d9d.png"},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>r});var s=i(6540);const o={},t=s.createContext(o);function l(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);