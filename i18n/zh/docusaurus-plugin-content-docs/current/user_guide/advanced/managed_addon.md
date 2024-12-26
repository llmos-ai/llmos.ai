---
sidebar_position: 2
title: 系统组件
---

系统组件帮助管理 LLMOS 集群所需的额外组件。默认情况下，LLMOS 配备了一组开箱即用的系统附加组件。这些系统附加组件包括：

- **LLMOS GPU Stack：** GPU 管理工具集，将虚拟 GPU (vGPU) 和多加速器支持引入到 LLMOS 平台，查看[更多详情](../gpu_management/enable-gpu-stack)。
- **LLMOS 监控：** 使用 [Prometheus Operator](https://github.com/prometheus-operator/prometheus-operator) 提供 LLMOS 集群的监控和警报功能，查看[更多详情](../monitoring/enable-monitoring)。
- **LLMOS Redis：** 提供一个 LLMOS 管理的 [Redis](https://redis.io/) 服务，用于系统服务和聊天存储。
- **Rook Ceph Operator：** 使用 [Rook Ceph Operator](https://rook.io/) 为集群添加高可用、可冗余的分布式存储系统。
- **KubeRay Operator：** 通过 [KubeRay Operator](https://www.ray.io/) 促进[机器学习集群](../ml_clusters)和其他机器学习资源在 LLMOS 集群中的管理。
- **系统更新控制器：** 通过可定制的升级计划，使用 [System Upgrade Controller](https://github.com/rancher/system-upgrade-controller) 管理 LLMOS 节点的升级。

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