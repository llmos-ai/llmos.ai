---
sidebar_position: 4
title: 模型服务
---

LLMOS 平台通过 `ModelService` 简化了大语言模型(LLM)的部署, 为用户提供了简单，友好的配置和管理界面。推理服务利用强大的 [vLLM](https://docs.vllm.ai/en/latest/) 服务引擎。通过指定模型名称、Hugging Face 配置、资源要求等参数，用户可以轻松高效地设置和部署模型，并支持大规模运行。

![model-service-list](/img/docs/modelservice-list.png)

## 创建模型服务
您可以从 **LLMOS Management > Model Services** 页面创建一个或多个模型服务。

### 通用配置
1. 为您的模型服务指定名称和命名空间。
2. 输入模型名称，可以是来自 [Hugging Face](https://huggingface.co/models) 的模型（例如，`Qwen/Qwen2.5-0.5B-Instruct`）或本地持久卷的模型路径（例如，`/root/.cache/huggingface/hub/models--Qwen--Qwen2.5-0.5B-Instruct`）。
3. （可选）在 **Arguments** 字段中添加任何附加 [引擎参数](https://docs.vllm.ai/en/latest/usage/engine_args.html)，如 `--dtype` 或 `--max-model-len`。
4. （可选）添加 Hugging Face 配置：
   - 如果模型仅被授权下载，请选择包含 Hugging Face 访问令牌的 [Secret Credential](#添加-huggingface-令牌)。
   - 如有必要，指定自定义的 Hugging Face 镜像 URL（例如，`https://hf-mirror.com/`）。
5. （可选）在 **Environment Variables** 字段中为模型服务添加其他 [环境变量](https://docs.vllm.ai/en/latest/usage/env_vars.html)。

![model-service-create-general](/img/docs/modelservice-create-general.png)

### 资源配置
1. **CPU 和内存**：为模型服务设置 CPU 和内存资源。
   - 您可以参考 [LLM numbers](https://github.com/ray-project/llm-numbers) 更好地了解模型消耗的资源。
2. **GPU 资源**：
   - 配置所需的 **GPU** 和 **Runtime Class**（默认为 **nvidia**）。
   - 模型服务的默认 `vllm-openai` 镜像需要至少 **1 个 GPU**。

![model-service-resources](/img/docs/modelservice-create-resources.png)

### 卷
1. **持久卷**：默认的持久卷挂载到 `/root/.cache/huggingface/hub` 以存储下载的模型文件。
   - （可选）您可以通过 **Add Volume** 按钮添加包含模型文件的现有卷，以跳过下载过程。
   - （可选）您可以添加支持 **ReadWriteMany** 模式的共享卷，以在多个模型服务之间共享模型文件。
2. **共享内存分配**：将一个 `emptyDir` 卷挂载到 `/dev/shm`，并将 **Medium** 设置为 **Memory**。这会创建一个临时的内存文件系统，非常适合使用共享内存进行 PyTorch 张量并行推理。
   - 如果未启用，模型服务将使用默认的共享内存（shm）大小为 64 MiB。

![modelservice-create-volumes](/img/docs/modelservice-create-volumes.png)

### 节点调度
您可以使用节点标签为调度模型服务指定节点约束，或保持默认设置以在任何可用的GPU节点上运行。

![model-service-node-scheduling](/img/docs/modelservice-node-scheduling.png)

:::note
有关更多详细信息，请参阅 [Kubernetes 节点亲和性文档](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/#node-affinity)。
:::

## 访问模型服务 API
模型服务在 `/v1` 路径下暴露了一系列与 [OpenAI API](https://platform.openai.com/docs/api-reference/introduction) 兼容的 RESTful API。您可以通过点击所选模型的 **Copy** 按钮获取模型 API URL。

![modelservice-api-url](/img/docs/modelservice-api-url.png)

### API 端点
| 路由路径               | 方法   | 描述                                                                |
|------------------------|--------|-------------------------------------------------------------------|
| `/v1/chat/completions` | POST   | 使用模型服务执行多轮包含上下文的聊天对话。                                             |
| `/v1/completions`      | POST   | 使用模型服务执行单次的标准输出。                                                  |
| `/v1/embeddings`       | POST   | 使用模型服务生成嵌入结果。                                                     |
| `/v1/models`           | GET    | 列出所有可用模型。                                                         |
| `/health`              | GET    | 检查模型服务 HTTP 服务器的健康状态。                                             |
| `/tokenize`            | POST   | 使用正在运行的模型服务 [Tokenize](https://platform.openai.com/tokenizer) 文本。 |
| `/detokenize`          | POST   | 使用正在运行的模型服务将标记反向转换。                                               |
| `/openapi.json`        | GET, HEAD | 获取模型服务的 OpenAPI JSON 规范。                                          |

### API 使用示例

:::note
LLMOS API 令牌可以通过 [API Keys](../user_and_auth/api-keys) 页面获得。
:::

#### cURL 示例
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

响应示例：
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

#### Python 示例
由于模型服务的 API 与 `OpenAI` 兼容，您可以将其作为 `OpenAI` 基于的应用程序的直接替代品使用。

```python
from openai import OpenAI
import httpx

# 设置 API 密钥和基本 URL
openai_api_key = "llmos-5frck:xxxxxxxxxg79c9p5"
openai_api_base = "https://192.168.31.100:8443/api/v1/namespaces/default/services/modelservice-qwen2:http/proxy/v1"
client = OpenAI(
   api_key=openai_api_key,
   base_url=openai_api_base,
   http_client=httpx.Client(verify=False), # 禁用 SSL 验证或使用自定义 CA 包。
)

completion = client.chat.completions.create(
   model="Qwen/Qwen2.5-0.5B-Instruct",
   messages=[{"role": "user", "content": "How do I output all files in a directory using Python?"}]
)
print(completion.choices[0].message.content)
```

#### Notebooks 交互
您还可以使用 [Notebooks](notebooks.md) 与模型服务交互，允许您使用 HTML、图形等更互动地探索模型的能力（例如，使用下面的 Jupyter Notebook）。

![model-service-notebook](/img/docs/modelservice-notebook-example.png)

:::note
在您的 LLMOS 集群内，您可以使用模型服务的内部 DNS 名称连接到模型服务。

要获取内部 DNS 名称，请点击模型服务的 **Copy Internal URL** 按钮。
:::

## 添加 HuggingFace 令牌
如果模型被授权下载，您需要在创建模型服务时添加 [HuggingFace 令牌](https://huggingface.co/docs/hub/en/security-tokens)。要添加新的 HuggingFace 令牌：
1. 转到 **Advanced > Secrets** 页面，点击 **Create** 按钮
2. 选择 **Opaque** 类型。
   ![secret-create-opaque](/img/docs/secret-types-opaque.png)
3. 选择 **Namespace** 并指定一个有意义的 **Name**。
4. 指定 **key**（例如，`token`）和 **value**（作为您的 HuggingFace 令牌）。
   ![secret-create-hf-token](/img/docs/secret-create-hf-token.png)
5. 点击 **Create** 保存该 secret。在同一命名空间内创建模型服务时，您应看到所的 secret。
