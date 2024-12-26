---
sidebar_position: 1
title: 启用 GPU Stack
---

**[LLMOS GPU Stack](https://github.com/llmos-ai/llmos-gpu-stack/tree/main)** 是一个 GPU 管理工具集，它为 LLMOS 平台带来了虚拟 GPU (vGPU) 和多加速器支持，提升了 GPU 资源的使用效率和灵活性。

本指南提供了 GPU Stack 架构、组件及基本配置的快速概览。

:::note
LLMOS GPU Stack 将始终启用，因为它是平台的核心组件。
:::

![cluster-tools](/img/docs/cluster-tools-gpu-stack.png)

:::info

当前支持的 GPU：
- :white_check_mark: Nvidia CUDA

未来计划支持：
- [ ] AMD ROCm
- [ ] 昇腾 CANN
- [ ] 寒武纪 MLU
- [ ] 海光 DCU

:::

## 前提条件

为确保 GPU Stack 正常工作，确保你的节点满足以下要求：

- **Nvidia 驱动程序**：在具有 GPU 设备的节点上安装 Nvidia 驱动程序。请参阅 [Nvidia GPU 驱动安装指南](https://docs.nvidia.com/datacenter/tesla/tesla-installation-notes/index.html)。
  - GPU 必须具有 [CUDA 计算能力](https://developer.nvidia.com/cuda-gpus) 7.5 或更高版本。

## GPU Stack 组件

当 GPU Stack 启用时，以下组件会安装在 `llmos-gpu-stack-system` 命名空间中：

- **Nvidia GPU Operator**：管理 Nvidia GPU 资源。[了解更多](https://github.com/NVIDIA/gpu-operator)。
- **GPU Device Plugin**：一个 DaemonSet，暴露并管理 GPU 设备。[了解更多](https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/device-plugins/)。
- **GPU Device Manager**：一个 Deployment，管理 LLMOS GPU 自定义资源定义 (CRD)。
- **Volcano 调度器**：用于批量和群组调度带有 GPU 资源的工作负载的插件。[了解更多](https://volcano.sh/)。

## 配置

### GPU Operator

- **启用 NVIDIA GPU Operator**：默认启用 Nvidia GPU Operator 以管理 Nvidia GPU 设备。
- **vGPU 数量**：设置每个 GPU 可以创建的最大 vGPU 实例数。默认值：`10`。

![gpu-stack-edit-gpu-operator](/img/docs/gpu-stack-edit-gpu-operator.png)

### 设备管理器

- **资源设置**：配置 GPU 设备管理器 Pod 的资源请求和限制。

![gpu-stack-edit-device-manager](/img/docs/gpu-stack-edit-device-manager.png)

## 状态与监控

当 **LLMOS GPU Stack** 被标记为 `Deployed` 后：

1. 检查 `llmos-gpu-stack-system` 命名空间中 GPU Stack 组件的状态。
2. 确保 **GPU 管理** 中的 `Nvidia Cluster Policies` 标记为 `Ready`。

在仪表板中，您可以通过以下方式监控 GPU 使用情况和状态：

- **节点页面**：对于具有 GPU 设备的节点，GPU 设备数量和指标将显示在节点页面上。
  ![nodes](/img/docs/nodes.png)
- **概览页面**：启用 [LLMOS 监控](../monitoring/enable-monitoring) 后，GPU 指标将显示在概览页面上。
  ![overview-gpu-metrics](/img/docs/overview-gpu-metrics.png)
- **GPU 设备**：在 [GPU 设备](gpu-devices.md#gpu-device-details) 页面中将显示所有 GPU 设备的状态和详细信息。
