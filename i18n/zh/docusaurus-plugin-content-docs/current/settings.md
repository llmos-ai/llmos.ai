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
      "containerImage": "oneblockai/codeserver-python:latest",
      "description": "Visual Studio Code + Conda Python",
      "default": true
    }
  ],
  "jupyter": [
    {
      "containerImage": "oneblockai/jupyter-scipy:latest",
      "description": "JupyterLab + PyTorch",
      "default": true
    },
    {
      "containerImage": "oneblockai/jupyter-pytorch:latest",
      "description": "JupyterLab + PyTorch"
    },
    {
      "containerImage": "oneblockai/jupyter-pytorch-full:latest",
      "description": "JupyterLab + PyTorch + 常用包"
    },
    {
      "containerImage": "oneblockai/jupyter-pytorch-cuda:latest",
      "description": "JupyterLab + PyTorch + CUDA"
    },
    {
      "containerImage": "oneblockai/jupyter-pytorch-cuda-full:latest",
      "description": "JupyterLab + PyTorch + CUDA + 常用包"
    },
    {
      "containerImage": "oneblockai/jupyter-tensorflow:latest",
      "description": "JupyterLab + PyTorch"
    },
    {
      "containerImage": "oneblockai/jupyter-tensorflow-full:latest",
      "description": "JupyterLab + PyTorch + 常用包"
    },
    {
      "containerImage": "oneblockai/jupyter-tensorflow-cuda:latest",
      "description": "JupyterLab + PyTorch + CUDA"
    },
    {
      "containerImage": "oneblockai/jupyter-tensorflow-cuda-full:latest",
      "description": "JupyterLab + PyTorch + CUDA + 常用包"
    }
  ],
  "rstudio": [
    {
      "containerImage": "oneblockai/rstudio-tidyverse:latest",
      "description": "RStudio + Tidyverse",
      "default": true
    }
  ]
}
```

### `log-level`
| 类型    | 默认值 | 描述                                                    |
|---------|---------|---------------------------------------------------------|
| String  | info    | 定义 LLMOS API 服务器的日志级别。                        |

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
