---
sidebar_position: 100
title: 全局设置
---

**设置**允许您配置 LLMOS 的全局选项。

:::note
只有管理员用户可以管理这些设置。
:::

## 常规设置

### `auth-token-max-ttl-minutes`
| 类型  | 默认值          | 描述                                                                                     |
|-----|------------------|------------------------------------------------------------------------------------------|
| Integer | 129600 (30 天)   | 所有认证 token 的最大生存时间 (以分钟为单位)。设置为 0 时，token 永不过期。               |

### `auth-user-session-max-ttl-minutes`
| 类型    | 默认值        | 描述                                                     |
|---------|----------------|-----------------------------------------------------------|
| Integer    | 720 (12 小时) | 用户认证会话的自定义生存时间 (以分钟为单位)。              |

### `default-notebook-images`
| 类型        | 默认值               | 描述                                                                                                    |
|-------------|-----------------------|--------------------------------------------------------------------------------------------------------|
| JSON 字符串 | 见下方 JSON 字符串    | 用于 Notebook 的默认镜像列表。JSON 键表示镜像标签，值为 Notebook 镜像的列表。                             |

```json
{
  "code-server": [
    {
      "containerImage": "ghcr.io/oneblock-ai/codeserver-python:v0.1.0",
      "description": "Visual Studio Code + Conda Python",
      "default": true
    }
  ],
  "jupyter": [
    {
      "containerImage": "ghcr.io/oneblock-ai/jupyter-scipy:v0.1.0",
      "description": "JupyterLab + PyTorch",
      "default": true
    },
    {
      "containerImage": "ghcr.io/oneblock-ai/jupyter-pytorch:v0.1.0",
      "description": "JupyterLab + PyTorch"
    },
    {
      "containerImage": "ghcr.io/oneblock-ai/jupyter-pytorch-full:v0.1.0",
      "description": "JupyterLab + PyTorch + Common Packages"
    },
    {
      "containerImage": "ghcr.io/oneblock-ai/jupyter-pytorch-cuda:v0.1.0",
      "description": "JupyterLab + PyTorch + CUDA"
    },
    {
      "containerImage": "ghcr.io/oneblock-ai/jupyter-pytorch-cuda-full:v0.1.0",
      "description": "JupyterLab + PyTorch + CUDA + Common Packages"
    },
    {
      "containerImage": "ghcr.io/oneblock-ai/jupyter-tensorflow:v0.1.0",
      "description": "JupyterLab + PyTorch"
    },
    {
      "containerImage": "ghcr.io/oneblock-ai/jupyter-tensorflow-full:v0.1.0",
      "description": "JupyterLab + PyTorch + Common Packages"
    },
    {
      "containerImage": "ghcr.io/oneblock-ai/jupyter-tensorflow-cuda:v0.1.0",
      "description": "JupyterLab + PyTorch + CUDA"
    },
    {
      "containerImage": "ghcr.io/oneblock-ai/jupyter-tensorflow-cuda-full:v0.1.0",
      "description": "JupyterLab + PyTorch + CUDA + Common Packages"
    },
    {
      "containerImage": "ghcr.io/oneblock-ai/jupyter-pipeline:v0.1.0",
      "description": "JupyterLab + Elyra Pipeline"
    }
  ],
  "rstudio": [
    {
      "containerImage": "ghcr.io/oneblock-ai/rstudio-tidyverse:v0.1.0",
      "description": "RStudio + Tidyverse",
      "default": true
    }
  ]
}
```

### `global-system-image-registry`
| 类型    | 默认值   | 描述                                                   |
|---------|---------|------------------------------------------------------|
| 字符串  | ""      | LLMOS Operator 和系统镜像的默认仓库地址（例如：myregistry.com:5000）。 |

### `log-level`
| 类型    | 默认值 | 描述                             |
|---------|---------|--------------------------------|
| String  | info    | 定义 LLMOS API 服务器的日志级别。         |

### `model-service-default-image`
| 类型    | 默认值   | 描述                                             |
|--------|---------|---------------------------------------------------|
| 字符串  | ""      | LLMOS ModelService 的默认服务镜像。               |

### `server-url`
| 类型   | 默认值 | 描述                                                                                         |
|--------|---------|----------------------------------------------------------------------------------------------|
| String |       | Dashboard 的默认安装 URL。必须使用 HTTPS。集群中的所有节点都必须能够访问此 URL。                 |

### `upgrade-check-enabled`
| 类型   | 默认值 | 描述                                 |
|--------|---------|--------------------------------------|
| Bool | true    | 启用或禁用自动升级检查。              |

### `upgrade-check-url`
| 类型   | 默认值                                       | 描述                                                                             |
|--------|-----------------------------------------------|----------------------------------------------------------------------------------|
| String | `https://llmos-upgrade.1block.ai/v1/versions` | 默认的 LLMOS 升级检查 URL，仅在 `upgrade-check-enabled` 设置为 true 时使用。         |

## UI 设置

### `ui-index`
| 类型   | 默认值                                                  | 描述                                      |
|--------|----------------------------------------------------------|-------------------------------------------|
| String | `https://releases.1block.ai/dashboard/latest/index.html` | LLMOS Dashboard UI 的 HTML 索引位置。      |

### `ui-pl`
| 类型   | 默认值   | 描述                                           |
|--------|----------|------------------------------------------------|
| String | llmos  | 指定私有标签公司的名称。                        |

### `ui-source`
| 类型   | 默认值    | 描述                                                                                                               |
|--------|------------|--------------------------------------------------------------------------------------------------------------------|
| Enum   | Dynamic  | 控制是否由 API 服务器本地提供 UI 资源，或从 `ui-index` 中指定的远程 URL 获取。                                         |
