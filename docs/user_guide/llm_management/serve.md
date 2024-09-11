---
sidebar_position: 4
title: Model Serving
---

The LLMOS platform provides a streamlined way to serve machine learning models using the `ModelService` resource. 
This resource offers an intuitive interface to configure and manage model serving, leveraging the power of the [vLLM](https://docs.vllm.ai/en/latest/) serving engine. 
By specifying details such as the model name, Hugging Face configurations, resource requirements, and more, users can easily set up and deploy models in a scalable and efficient manner.

![model-service-list](/img/docs/model-service-list.png)

## Create a Model Service
You can create one or more model services from the `LLM Management > Model Services` page.

### General Configuration
1. Specify the name and namespace of your model service.
2. Specify the model name, which can be a [Hugging Face](https://huggingface.co/models) model name(e.g., `facebook/opt-125m`) or a local model path(e.g., `/root/.cache/huggingface/hub/models--facebook--opt-125m`).
3. (Optional) Specify the [additional parameters](https://docs.vllm.ai/en/latest/models/engine_args.html) like `--dtype, --max-model-len` in the **Arguments** field.
4. (Optional) Configure the Hugging Face configurations:
    - Select the `Hugging Face Hub token` secret credential if the model is only authorized to be downloaded. 
    - Specify a custom Hugging Face Mirror URL if you need to use a mirror endpoint.
5. (Optional) Add additional [environment variables](https://docs.vllm.ai/en/latest/serving/env_vars.html) for the model service if needed.
![model-service-create](/img/docs/modelservice-create-general.png)


### Resource Configuration
1. Specify the CPU and memory resources for the model service.
2. Specify the GPU resources for the model service :
   - Minimum `1` GPU is required if using the default `vllm-openai` serving image
   - Select the correct **Runtime Class** if needed, default to **nvidia**

![model-service-resources](/img/docs/modelservice-create-resources.png)

### Volumes
1. Add a persistent volume to the `/root/.cache/huggingface/hub` path to store the downloaded model files.
   -  You can select a volume with **Access Mode** of `ReadOnlyMany` if you want to use a shared volume across multiple model services.
2. Mount an emptyDir volume to `/dev/shm` and set its medium to **Memory**. This effectively creates a temporary filesystem in memory, allowing you to allocate more shared memory than the default limit(64MB).
   - **Note:** This is useful for PyTorch tensor parallel inference, which uses shared memory to share data between processes under the hood.

![modelservice-create-volumes](/img/docs/modelservice-create-volumes.png)]

### Node Scheduling
Node Scheduling allows you to constrain which nodes your model service can be scheduled on based on node labels, or simply leave it default to allow run on any available node.

:::note
Refer to the [Kubernetes Node Affinity Documentation](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#node-affinity) for more details.
:::

## Access Model Service APIs

Model Service will expose a list of RESTful APIs and implements [OpenAI Compatible APIs](https://platform.openai.com/docs/api-reference/introduction) with the `/v1` path.
Your can get the model API URL by clicking the `Copy` button in the **Model Services** page.

![model-service-api](/img/docs/modelservice-copy-api.png)

### API Endpoints
| Route Path             | Methods   | Description                                                                             |
|------------------------|-----------|-----------------------------------------------------------------------------------------|
| `/v1/chat/completions` | POST      | Perform chat completions using the model service.                                       |
| `/v1/completions`      | POST      | Perform completions using the model service.                                            |
| `/v1/embeddings`       | POST      | Perform embeddings using the model service.                                             |
| `/v1/models`           | GET       | List all available models.                                                              |
| `/health`              | GET       | Check the health of the model service HTTP server.                                      |
| `/tokenize`            | POST      | [Tokenize](https://platform.openai.com/tokenizer) text using the running model service. |
| `/detokenize`          | POST      | Detokenize tokens using the running model service.                                      |
| `/openapi.json`        | GET, HEAD | Get the OpenAPI json specification of the model service.                                |


### API Examples
#### Chat Completions: curl
```bash
export LLMOS_API_KEY=myapikey
curl -k -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $LLMOS_API_KEY" \
  -d '{
    "model": "facebook/opt-125m",
    "messages": [
      {
        "role": "system",
        "content": "You are a helpful assistant."
      },
      {
        "role": "user",
        "content": "Hello!"
      }
    ],
    "temperature": 0.9
  }' \
  https://modelservice-api-url/v1/chat/completions
```

#### Completions Example: Python
Since the server API is compatible with OpenAI API, you can use it as a drop-in replacement for any applications using OpenAI API. For example, another way to query the server is via the openai python package:

```python
from openai import OpenAI
# Modify OpenAI's API key and API base to use modelService's API server.
openai_api_key = "EMPTY"
openai_api_base = "https://modelservice-api-url/v1" # Replace with your model service's API URL.
client = OpenAI(
    api_key=openai_api_key,
    base_url=openai_api_base,
)
completion = client.completions.create(model="facebook/opt-125m",
                                      prompt="San Francisco is a")
print("Completion result:", completion)
```

#### Notebook Interaction
You can also interact with model services using the Jupyter [Notebook](notebooks.md), which is a great way to explore the model's capabilities with a rich interactive output like HTML, graphs, and more.

:::note
Within the LLMOS cluster, you can connect to the model service using the internal DNS name. For example, `http://modelservice-name.default.svc.cluster.local:8000`.
:::

![model-service-notebook](/img/docs/modelservice-notebook-example.png)
