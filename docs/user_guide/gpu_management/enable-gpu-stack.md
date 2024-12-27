---
sidebar_position: 1
title: Enable GPU Stack
---

**[LLMOS GPU Stack](https://github.com/llmos-ai/llmos-gpu-stack/tree/main)** is a toolset that brings virtual GPUs (vGPU) and multi-accelerator support to the LLMOS platform. It improves GPU resource usage and flexibility.

This guide provides a quick overview of the GPU Stack architecture, its components, and basic configurations.

:::note
The LLMOS GPU Stack is always enabled because it is a core part of the platform.
:::

![cluster-tools](/img/docs/cluster-tools-gpu-stack.png)

:::info

Currently supported GPUs:
:white_check_mark: Nvidia CUDA

Planned future support:
- [ ] AMD ROCm
- [ ] Ascend CANN
- [ ] Cambricon MLU
- [ ] HYGON DCU

:::

## Prerequisites

For GPU Stack to work correctly, ensure the following requirements are met:

- **Nvidia Driver**: Install the Nvidia driver on nodes with GPU devices. See the [Nvidia GPU Driver Installation Guide](https://docs.nvidia.com/datacenter/tesla/tesla-installation-notes/index.html).
    - The GPU must have a [CUDA Compute Capability](https://developer.nvidia.com/cuda-gpus) of 7.5 or higher.

## GPU Stack Components

When the GPU Stack is active, the following components are installed in the `llmos-gpu-stack-system` namespace:

- **Nvidia GPU Operator**: Manages Nvidia GPU resources. [Learn more](https://github.com/NVIDIA/gpu-operator).
- **GPU Device Plugin**: A DaemonSet that exposes and manages GPU devices. [Learn more](https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/device-plugins/).
- **GPU Device Manager**: A Deployment that manages LLMOS GPU custom resource definitions (CRDs).
- **Volcano Scheduler**: A plugin for batch and gang scheduling of workloads with GPU resources. [Learn more](https://volcano.sh/).

## Configurations

### GPU Operator

- **Enabled NVIDIA GPU Operator**: The Nvidia GPU Operator is enabled by default to manage Nvidia GPU devices.
- **vGPU Count**: Sets the maximum number of vGPU instances that can be created per GPU. Default: `10`.

![gpu-stack-edit-gpu-operator](/img/docs/gpu-stack-edit-gpu-operator.png)

### Device Manager

- **Resource Settings**: Configure resource requests and limits for GPU device manager pod.

![gpu-stack-edit-device-manager](/img/docs/gpu-stack-edit-device-manager.png)

## Monitoring and Status

Once the GPU Stack is `active`:

1. Check the status of GPU Stack components in the `llmos-gpu-stack-system` namespace.
2. Ensure the `Nvidia Cluster Policies` in the **GPU Management** is marked as `Ready`.

From the dashboard, you can monitor the GPU usage and status via:

- **Overview page**: GPU metrics are displayed on the overview page when the [LLMOS Monitoring](../monitoring/enable-monitoring) is enabled.
  ![overview-gpu-metrics](/img/docs/overview-gpu-metrics.png)
- **Nodes Page**: For nodes with GPU devices, the GPU device count and metrics are displayed on the Nodes page.
  ![nodes](/img/docs/nodes.png)
- **GPU Devices**: The [GPU Devices](gpu-devices.md#gpu-device-details) page will show the status and details of all GPU devices.
