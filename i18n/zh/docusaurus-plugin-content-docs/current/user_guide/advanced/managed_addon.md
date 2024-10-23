---
sidebar_position: 2
title: 系统组件
---

系统组件帮助管理 LLMOS 集群所需的额外组件。默认情况下，LLMOS 配备了一组开箱即用的系统附加组件。这些系统附加组件包括：

- **Nvidia GPU Operator**：使用 [Nvidia GPU Operator](https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/latest/index.html) 启用 LLMOS 集群对 Nvidia GPU 的支持。
- **KubeRay Operator**：通过 [KubeRay Operator](https://www.ray.io/) 促进 LLMOS 集群中 Ray 集群和其他机器学习资源的管理。
- **LLMOS Redis**：为您的集群提供 LLMOS 管理的 [Redis](https://redis.io/) 服务。
- **Rook Ceph Operator**：使用 [Rook Ceph](https://rook.io/) Operator 为您的集群添加存储支持。
- **系统更新控制器**：通过可定制的升级计划使用 [系统升级控制器](https://github.com/rancher/system-upgrade-controller) 管理 LLMOS 节点升级。

![Managed Addons](/img/docs/managed-addons.png)

:::note
系统附加组件对 LLMOS 的正常运行至关重要，用户在默认情况下无需修改。然而，您可以根据需要安装超出默认集的其他附加组件。
:::

## 创建一个自定义组件

自定义组件使用 [Helm](https://helm.sh/) 进行安装和管理。您可以从外部源（例如 [Artifact Hub](https://artifacthub.io/)）添加其他附加组件。

1. 转到 **系统组件** 页面并点击 **创建**。
2. 选择所需的 **命名空间** 并输入附加组件的名称。
3. 提供 **Chart Repository URL**（例如 `https://grafana.github.io/helm-charts`）、**Chart 名称** 和 **版本**。
4. *(可选)* 如果您计划稍后启用附加组件，将 **启用** 设置为 `false`。
5. *(可选)* 通过添加 `Values` 内容来自定义附加组件，以覆盖默认设置（如有必要）。
6. 单击 **创建** 开始安装过程。
7. 附加组件将在后台安装。您可以在 **系统组件** 页面上监控其状态。
   - 一旦附加组件成功安装，状态将显示为 `已就绪`。

![Add Managed Addons](/img/docs/managed-addon-create.png)