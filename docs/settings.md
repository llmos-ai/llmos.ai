---
sidebar_position: 100
title: Settings
description: Global Settings
---

Settings is a place where you can configure global settings for LLMOS.

:::note
Only admin users can manage these settings.
:::

## General Settings

### `auth-token-max-ttl-minutes`
| Type    | Default          | Description                                                                                   |
|---------|------------------|-----------------------------------------------------------------------------------------------|
| Integer | 129600 (30 days) | Max TTL (in minutes) for all authentication tokens. When set to 0, the token never expires.   |

### `auth-user-session-max-ttl-minutes`
| Type    | Default        | Description                                      |
|---------|----------------|--------------------------------------------------|
| Integer | 720 (12 hours) | Custom TTL (in minutes) on a user auth session.  |


### `server-url`
| Type   | Default | Description                                                                                          |
|--------|---------|------------------------------------------------------------------------------------------------------|
| String | ""      | Default Dashboard install url. Must be HTTPS. All nodes in your cluster must be able to reach this.  |

### `default-notebook-images`
| Type        | Default | Description                                                                                                |
|-------------|---------|------------------------------------------------------------------------------------------------------------|
| JSON String | ""      | Default list of images to use for notebooks. JSON keys are image tags, values are list of notebook images. |

## UI Settings

### `ui-index`
| Type   | Default                                                  | Description                                        |
|--------|----------------------------------------------------------|----------------------------------------------------|
| String | `https://releases.1block.ai/dashboard/latest/index.html` | HTML index location for the LLMOS Dashboard UI.    |

### `ui-pl`
| Type   | Default | Description                         |
|--------|---------|-------------------------------------|
| String | "llmos" | Specify private-label company name. |

### `ui-source`
| Type | Default   | Description                                                                                                                |
|------|-----------|----------------------------------------------------------------------------------------------------------------------------|
| Enum | "Dynamic" | Controls whether UI assets are served locally by the API server or from the remote URL defined in the `ui-index` settings. |

