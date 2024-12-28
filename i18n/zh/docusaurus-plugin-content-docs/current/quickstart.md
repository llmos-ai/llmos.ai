---
sidebar_position: 2
title: 快速入门
---

# 快速入门

本指南将帮助您使用默认的引导选项快速启动 LLMOS 集群。[安装指南](./installation)包含有关引导配置选项的更多详细信息。

:::info
在继续之前，请确保您的节点符合[配置需求](./installation/requirements.md)。
:::

## 安装脚本

LLMOS 可以安装在物理服务器或虚拟机上。引导创建一个**新集群**，请按照以下步骤操作：

```shell
curl -sfL https://get-llmos.1block.ai | sh -s - --cluster-init --token mytoken --mirror cn
```

查看安装日志，运行 `journalctl -u llmos -f`。

有关更高级的配置，请查看 [LLMOS 配置](/docs/installation/configurations) 页面。

(可选）安装完成后，您也可以通过以下命令将 Worker 节点添加到集群中：

```shell
curl -sfL https://get-llmos.1block.ai | LLMOS_SERVER=https://server-url:6443 LLMOS_TOKEN=mytoken sh -s -
```

### 配置代理
如果您的环境需要通过代理访问互联网，请在运行安装脚本之前设置 `HTTP_PROXY` 和 `HTTPS_PROXY` 环境变量：

```shell
export HTTP_PROXY=http://proxy.example.com:8080
export HTTPS_PROXY=http://proxy.example.com:8080
export NO_PROXY=127.0.0.0/8,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16 # 将 CIDR 替换为您自己的
```

如果您只想为 `containerd` 配置代理而不影响节点和 LLMOS，您可以在变量前加上 `CONTAINERD_` 前缀：

```shell
export CONTAINERD_HTTP_PROXY=http://proxy.example.com:8080
export CONTAINERD_HTTPS_PROXY=http://proxy.example.com:8080
export CONTAINERD_NO_PROXY=127.0.0.0/8,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16 # 将 CIDR 替换为您自己的
```

## 入门

安装 LLMOS 后，您可以通过浏览器访问 `https://<server-ip>:8443` 进入控制台。

1. LLMOS 将为您创建一个默认的 `admin` 用户，并随机生成密码。要检索密码，请在 **cluster-init** 节点上运行以下命令：
    ```shell
    kubectl get secret --namespace llmos-system llmos-bootstrap-passwd -o go-template='{{.data.password|base64decode}}{{"\n"}}'
    ```
   ![首次登录](/img/docs/auth-first-login.png)
1. 登录后，您将被重定向到设置页面。请配置以下内容：
    - 为 admin 用户设置一个**新密码**（建议使用强密码）。
    - 配置**服务器 URL**，其他节点将使用此 URL 连接到集群。
      ![设置](/img/docs/auth-first-login-setup.png)
1. 设置完成后，您将被重定向到主页，您可以开始使用 LLMOS。
   ![主页](/img/docs/home-page.png)

## 示例

要了解更多关于 LLMOS 的使用方法，请探索以下资源：
- [与 LLMOS 模型聊天](user_guide/modelservice.md)
- [创建机器学习集群](./user_guide/ml_clusters)
- [创建 Jupyter Notebook](user_guide/notebooks.md#创建-notebook)