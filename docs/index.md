---
sidebar_position: 1
title: Overview
---

# LLMOS Overview

LLMOS is an open-source, cloud-native infrastructure software tailored for managing AI applications and large language models(LLMs) on your AI workstation or GPU machines.

## LLMOS Architecture
The following diagram describes the high-level LLMOS architecture:

![LLMOS Architecture](/img/docs/llmos-arch.svg)

- **Server Node**: The Server Node is a cloud-based or on-premises machine that hosts the LLMOS platform along with LLMOS-optimized Kubernetes.
- **Worker Node**: The Worker Node is primarily responsible for executing the user workloads.
- **LLMOS-Operator**: The LLMOS-Operator manages the lifecycle and system components of the LLMOS platform, including LLMOS API-server, LLMOS controllers, and additional system addons.
- **LLMOS-Controller**: The LLMOS-Controller is responsible for managing the lifecycle and resources like LLM models, notebooks, machine learning cluster, jobs and so on.
- **Redis**: A key-value store used for storing LLMOS's fault-tolerant configurations and API chats.
- **Workloads**: Workloads are computational tasks that run on the LLMOS infrastructure, utilizing requested resources (e.g., CPU, GPU, memory, and storage volumes).

:::note 
Server nodes also function as worker nodes, but prioritize resources to the system components first.
:::

## Key Features
- **Easy Installation:** Seamlessly install on x86_64 or ARM64 architectures for an out-of-the-box user experience.
- **Comprehensive LLM Lifecycle Management:** A unified interface for both developers and non-developers to manage LLM infrastructure, ML Clusters, models and workloads.
- **Easy to Use:** Build models and AI applications in your own way, without the need to managing Kubernetes & infrastructure directly.
- **Optimized for Edge & Branch Deployment:** Enhance resource efficiency and simplify model deployment in edge and branch networks, while maintaining the capability to scale horizontally for larger workloads.

## Next Step

To get started with LLMOS, please refer to the [Quick Start](./quickstart) guide.
