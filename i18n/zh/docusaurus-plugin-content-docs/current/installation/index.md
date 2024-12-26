---
sidebar_position: 2
title: 安装指南
---

## 安装脚本

安装脚本提供了一种使用 shell 脚本创建 LLMOS 的便捷方法。它会自动从 [Github](https://github.com/llmos-ai/llmos/releases) 下载最新的 LLMOS 版本，并通过 systemd 服务初始化 LLMOS 集群和系统组件。

:::info
在继续之前，请确保您的节点符合[配置需求](./requirements)。
:::

### 集群初始化

集群的创建从一个初始化节点开始，该节点通过分配 `cluster-init` 角色来初始化集群，其他节点可以随后加入集群。安装时，LLMOS 会为新集群生成一个唯一的 token，或者您可以手动分配一个。要获取现有集群的 token，请运行 `llmos get-token` 或查看 `/var/lib/llmos/token` 文件。

要在物理服务器或虚拟机上创建一个新集群，运行以下命令：

```shell
curl -sfL https://get-llmos.1block.ai | sh -s - --cluster-init --token mytoken
```

有关更高级的配置参数，请查看 [LLMOS 配置](/docs/installation/configurations) 页面。

### 加入集群

要向集群添加更多节点，您可以为它们分配 **server** 角色以增加管理节点，或者分配 **agent** 角色以添加更多的工作节点。
要加入一个节点，您需要 `server-url` 和集群的 `token`。

```shell
curl -sfL https://get-llmos.1block.ai | sh -s - --server https://server-url:6443 --token mytoken
```

:::info
如果您已经使用 [LLMOS 配置文件](/docs/installation/configurations) 配置了这些选项，只需运行安装脚本：
`curl -sfL https://get-llmos.1block.ai | sh -`。

或者如果您已经手动下载了 [LLMOS 二进制文件](https://github.com/llmos-ai/llmos/releases)，可以运行：

`llmos bootstrap --debug`
:::

### 节点角色

LLMOS 将使用以下角色之一引导节点：

- **cluster-init:** 每个集群的第一个节点必须具有此角色。
- **server:** 以管理角色加入集群，充当控制平面、etcd 和工作节点。
- **worker:** 以仅工作节点的角色加入集群。

### 配置代理
如果您的环境需要通过代理访问互联网，您可以设置 `HTTP_PROXY` 和 `HTTPS_PROXY` 环境变量以配置安装脚本使用代理。

```shell
export HTTP_PROXY=http://proxy.example.com:8080
export HTTPS_PROXY=http://proxy.example.com:8080
export NO_PROXY=127.0.0.0/8,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16
```

### 引导环境变量
以 `LLMOS_` 为前缀的环境变量会为 systemd 服务保留。

| 标志              | 环境变量              | 默认值                    | 描述                                                       |
|-------------------|-----------------------|--------------------------|----------------------------------------------------------|
| --cluster-init     | LLMOS_CLUSTER_INIT    | `false`                  | 将作为集群初始化节点运行。                                            |
| --server           | LLMOS_SERVER          |                          | 要加入的服务器的 URL，例如 `https://server-url:6443`                |
| --token            | LLMOS_TOKEN           |                          | 用于加入集群的 token。                                           |
| --role             | LLMOS_ROLE            |                          | 用于加入集群的节点角色。当提供服务器 URL 和 token 时，如果角色为空，默认为 `worker` 角色。 |
| --force            | LLMOS_BOOTSTRAP_FORCE | `false`                  | 即使已经引导，仍强制运行引导过程。                                        |
| --config           | LLMOS_CONFIG_FILE     | `/etc/llmos/config.yaml` | LLMOS 配置文件的路径。                                           |
| --data-dir         | LLMOS_DATA_DIR        | `/var/lib/llmos`         | LLMOS 数据目录的路径。                                           |
| --debug            | LLMOS_DEBUG           | `false`                  | 启用调试日志记录。                                                |
| --debug-level      | LLMOS_DEBUG_LEVEL     | `7`                      | 调试日志级别 (有效范围 0-9)。                                       |

要将环境变量传递给安装脚本，添加以 `LLMOS_` 为前缀的环境变量，如下所示：

```shell
curl -sfL https://get-llmos.1block.ai | LLMOS_DEBUG=true LLMOS_DEBUG_LEVEL=9 sh -s -
```

有关 LLMOS 配置选项的更多详细信息，您可以查看 [LLMOS 配置](/docs/installation/configurations) 页面。

### 安装脚本环境变量

以下环境变量仅用于 LLMOS 安装脚本：

| 变量                        | 默认值                 | 描述                                                                                                           |
|-----------------------------|-----------------------|---------------------------------------------------------------------------------------------------------------|
| INSTALL_LLMOS_SKIP_DOWNLOAD | `false`               | 如果设置为 true，将不会下载 LLMOS 哈希或二进制文件。                                                           |
| INSTALL_LLMOS_FORCE_RESTART | `false`               | 如果设置为 true，将始终重启 LLMOS 服务。                                                                       |
| INSTALL_LLMOS_SKIP_ENABLE   | `false`               | 如果设置为 true，将不会启用或启动 LLMOS 服务。                                                                 |
| INSTALL_LLMOS_SKIP_START    | `false`               | 如果设置为 true，将不会启动 LLMOS 服务。                                                                       |
| INSTALL_LLMOS_VERSION       | `latest`              | 从 Github 下载的 LLMOS 版本。如果未指定，将尝试从最新版本下载。                                                |
| INSTALL_LLMOS_BIN_DIR       | `/usr/local/bin`      | 安装 LLMOS 二进制文件、链接和卸载脚本的目录。                                                                  |
| INSTALL_LLMOS_SYSTEMD_DIR   | `/etc/systemd/system` | 安装 systemd 服务和环境文件的目录。                                                                            |

例如，如果您已经在 `/usr/local/bin/llmos` 安装了 LLMOS 二进制文件，并且想跳过下载步骤，可以设置以下环境变量：

```shell
curl -sfL https://get-llmos.1block.ai | INSTALL_LLMOS_SKIP_DOWNLOAD=true sh -s -
```