---
sidebar_position: 100
title: Settings
description: Global Settings
---

**Settings** allow you to configure global options for LLMOS.

:::note
Only admin users can manage these settings.
:::

## General Settings

### `auth-token-max-ttl-minutes`
| Type    | Default          | Description                                                                                      |
|---------|------------------|--------------------------------------------------------------------------------------------------|
| Integer | 129600 (30 days) | Maximum TTL (in minutes) for all authentication tokens. When set to 0, tokens will never expire. |

### `auth-user-session-max-ttl-minutes`
| Type    | Default        | Description                                                |
|---------|----------------|------------------------------------------------------------|
| Integer | 720 (12 hours) | Custom TTL (in minutes) for a user authentication session. |

### `default-notebook-images`
| Type        | Default               | Description                                                                                                           |
|-------------|-----------------------|-----------------------------------------------------------------------------------------------------------------------|
| JSON String | See below JSON string | Default list of images to use for notebooks. JSON keys represent image tags, and values are lists of notebook images. |

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
| Type    | Default | Description                                                                      |
|---------|---------|----------------------------------------------------------------------------------|
| String  | ""      | Default registry for LLMOS operator & system images (e.g., myregistry.com:5000). |

### `log-level`
| Type    | Default | Description                                     |
|---------|---------|-------------------------------------------------|
| String  | info    | Defines the log level for the LLMOS API server. |

### `model-service-default-image`
| Type    | Default | Description                                       |
|---------|---------|---------------------------------------------------|
| String  | ""      | Default serving image for the LLMOS modelService. |

### `server-url`
| Type   | Default | Description                                                                                                   |
|--------|---------|---------------------------------------------------------------------------------------------------------------|
| String | ""      | Default Dashboard installation URL. Must use HTTPS. All nodes in your cluster must be able to reach this URL. |

### `upgrade-check-enabled`
| Type | Default | Description                                   |
|------|---------|-----------------------------------------------|
| Bool | true    | Enables or disables automatic upgrade checks. |

### `upgrade-check-url`
| Type   | Default                                       | Description                                                                             |
|--------|-----------------------------------------------|-----------------------------------------------------------------------------------------|
| String | `https://llmos-upgrade.1block.ai/v1/versions` | Default LLMOS upgrade check URL. Only used when `upgrade-check-enabled` is set to true. |

## UI Settings

### `ui-index`
| Type   | Default                                                  | Description                                        |
|--------|----------------------------------------------------------|----------------------------------------------------|
| String | `https://releases.1block.ai/dashboard/latest/index.html` | HTML index location for the LLMOS Dashboard UI.    |

### `ui-pl`
| Type   | Default  | Description                               |
|--------|----------|-------------------------------------------|
| String | "llmos"  | Specifies the private-label company name. |

### `ui-source`
| Type   | Default   | Description                                                                                                                 |
|--------|-----------|-----------------------------------------------------------------------------------------------------------------------------|
| Enum   | "Dynamic" | Controls whether UI assets are served locally by the API server or fetched from the remote URL specified in `ui-index`.     |