---
sidebar_position: 4
title: Model Service
---

The **LLMOS** platform makes it easy to serve machine learning models using the `ModelService` resource. This tool provides a simple way to set up and manage model serving, powered by the [vLLM](https://docs.vllm.ai/en/latest/) engine. You can configure details like model name, Hugging Face settings, resource needs, and more to deploy models efficiently and at scale.

![model-service-list](/img/docs/modelservice-list.png)

## Creating a Model Service

You can create one or more model services from the **LLMOS Management > Model Services** page. There are two steps to create a model service:

### Choose Model
Choose a model from huggingface, modelscope or local. If you choose model from local, it will show the [local models](model_management/models.md#local-models).

![model-service-choose-model](/img/docs/modelservice-choose-model.png)

### Set Config
#### General Configuration

1. **Name and Namespace**: Enter the model service name and namespace.
2. **Engine Arguments (Optional)**: Add arguments like `--dtype=half --max-model-len=4096` in the **Arguments** field if needed. [More details](https://docs.vllm.ai/en/latest/usage/engine_args.html).
4. **Hugging Face Configurations (Optional)**:
    - Use a [secret credential](#adding-a-hugging-face-token) for models that need authentication.
    - Add a custom **Hugging Face Mirror URL** if using a proxy (e.g., `https://hf-mirror.com/`).
5. **Environment Variables (Optional)**: Add any extra environment variables as needed. [More details](https://docs.vllm.ai/en/latest/usage/env_vars.html).

![model-service-create-general](/img/docs/modelservice-create-general.png)

#### Resource Configuration

:::note
For GPU resource requirements of large language models, see [LLM numbers](https://github.com/ray-project/llm-numbers).
:::

1. **CPU and Memory**: Assign CPU and memory resources for the model.
2. **GPU Resources**:
    - Choose **GPU** and **Runtime Class** (default: **nvidia**).
        - Minimum: **1 GPU** for the `vllm-openai` image.
        - For large models, use **tensor parallelism** to distribute across multiple GPUs on the same node. For example, with 4 GPUs, it will set the tensor parallel size to 4.
    - To share a GPU device, enable **vGPU** and specify the `vGPU` memory size (in MiB) and `vGPU Cores` (default: 100%).

![model-service-resources](/img/docs/modelservice-create-resources.png)

#### Volumes

1. **Persistent Volume**:
    - Default: A persistent volume mounted at `/root/.cache` stores downloaded models.
    - For shared models across services, replace the default volume with a custom **ReadWriteMany** persistent volume.
    - For **local path** models:
        - Add an existing volume with model files to skip downloading.
        - Remove the default `model-dir` volume if unnecessary.
2. **Shared Memory(dshm)**:
    - Mount an `emptyDir` volume to `/dev/shm` with **Medium** set to **Memory** for temporary in-memory storage.
    - Useful for PyTorch tensor parallel inference, which needs shared memory between processes.
    - If not enabled, the default shared memory size is 64 MiB.

![modelservice-create-volumes](/img/docs/modelservice-create-volumes.png)

#### Node Scheduling
You can specify node constraints for scheduling your model service using node labels, or leave it as default to run on any available node.

![model-service-node-scheduling](/img/docs/modelservice-node-scheduling.png)

:::note
For more details of the node scheduling, please refer to the [Kubernetes Node Affinity Documentation](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#node-affinity).
:::

## Accessing Model Service APIs
The Model Service exposes a list of RESTful APIs compatible with [OpenAI's API](https://platform.openai.com/docs/api-reference/introduction) at the `/v1` path. You can get the model API URL by clicking the **Copy** button of the selected model.

![modelservice-api-url](/img/docs/modelservice-api-url.png)

### API Endpoints
| Route Path               | Methods   | Description                                                                             |
|--------------------------|-----------|-----------------------------------------------------------------------------------------|
| `/v1/chat/completions`   | POST      | Perform chat completions using the model service.                                       |
| `/v1/completions`        | POST      | Perform standard completions using the model service.                                   |
| `/v1/embeddings`         | POST      | Generate embeddings using the model service.                                            |
| `/v1/models`             | GET       | List all available models.                                                              |
| `/health`                | GET       | Check the health of the model service HTTP server.                                      |
| `/tokenize`              | POST      | [Tokenize](https://platform.openai.com/tokenizer) text using the running model service. |
| `/detokenize`            | POST      | Detokenize tokens using the running model service.                                      |
| `/openapi.json`          | GET, HEAD | Get the OpenAPI JSON specification for the model service.                               |

### API Usage Examples

:::note
The LLMOS API token can be obtained from the [API Keys](../user_and_auth/api-keys) page.
:::

#### cURL Example
```bash
export LLMOS_API_KEY=myapikey
export API_BASE=192.168.31.100:8443/api/v1/namespaces/default/services/modelservice-qwen2:http/proxy/v1
curl -k -X POST \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $LLMOS_API_KEY" \
  -d '{
    "model": "Qwen/Qwen2.5-0.5B-Instruct",
    "messages": [
      {
        "role": "system",
        "content": "You are a helpful assistant."
      },
      {
        "role": "user",
        "content": "Say this is a test"
      }
    ],
    "temperature": 0.9
  }' \
  $API_BASE/chat/completions
```

Response Example:
```json
{
  "id":"chat-efffa70236bd4edda7e5420349339d45",
  "object":"chat.completion",
  "created":1727267645,
  "model":"Qwen/Qwen2.5-0.5B-Instruct",
  "choices":[
    {
      "index":0,
      "message":{
        "role":"assistant",
        "content":"Yes, it is a test."
      },
      "logprobs":null,
      "finish_reason":"stop"
    }
  ],
  "usage":{
    "prompt_tokens":24,
    "total_tokens":32,
    "completion_tokens":8
  }
}
```

#### Python Example
Since the API is compatible with OpenAI, you can use it as a drop-in replacement for OpenAI-based applications.

```python
from openai import OpenAI
import httpx

# Set up API key and base URL
openai_api_key = "llmos-5frck:xxxxxxxxxg79c9p5"
openai_api_base = "https://192.168.31.100:8443/api/v1/namespaces/default/services/modelservice-qwen2:http/proxy/v1"
client = OpenAI(
   api_key=openai_api_key,
   base_url=openai_api_base,
   http_client=httpx.Client(verify=False), # Disable SSL verification or use a custom CA bundle.
)

completion = client.chat.completions.create(
   model="Qwen/Qwen2.5-0.5B-Instruct",
   messages=[{"role": "user", "content": "How do I output all files in a directory using Python?"}]
)
print(completion.choices[0].message.content)
```

#### Notebooks Interaction
You can also interact with model services using the [Notebooks](notebooks.md), which allows you to explore the model’s capabilities more interactively using HTML, graphs, and more (e.g., using a Jupyter Notebook as below).

![model-service-notebook](/img/docs/modelservice-notebook-example.png)

:::note
Within your LLMOS cluster, you can connect to the model service using its internal DNS name.

To get the internal DNS name, click the **Copy Internal URL** button of the model service.
:::

## Model Service Monitoring

The **Model Service** includes built-in metrics with [LLMOS Monitoring](./monitoring/enable-monitoring) to track performance and usage.

- Click on the model service name in the list to open its details page.
- Use the **Token Metrics** tab to view token-level metrics.
- Use the **Metrics** tab to see resource usage like CPU, memory, and Disk I/O.

![model-service-metrics](/img/docs/modelservice-metrics.png)


## Adding a Hugging Face Token

Some models require authentication to download. If your model needs a token, follow these steps to add a [Hugging Face token](https://huggingface.co/docs/hub/en/security-tokens):

1. Go to **Advanced > Secrets** and click **Create**.
2. Select the **Opaque** secret type.  
   ![secret-create-opaque](/img/docs/secret-types-opaque.png)
3. Choose the **Namespace** matching your model service and provide a clear **Name** (e.g., `my-hf-token`).
4. Set the **Key** to `token` and paste your Hugging Face token as the **Value**.  
   ![secret-create-hf-token](/img/docs/secret-create-hf-token.png)
5. Click **Create** to save the secret.

Once created, the secret will appear as an option when setting up the model service in the same namespace.