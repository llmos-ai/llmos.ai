---
sidebar_position: 1
title: Overview
---

# LLMOS Overview

LLMOS is an open-source, cloud-native infrastructure software tailored for managing AI applications and large language models(LLMs) on your AI workstation or GPU machines.

## LLMOS Architecture
The following diagram describes the high-level LLMOS architecture:

![LLMOS Architecture](/img/docs/llmos-arch.svg)

- **Server Node**: The Server Node is a cloud-based or on-premises machine that hosts the LLMOS platform along with LLMOS-optimized Kubernetes components(such as the API Server, Controller Manager, Scheduler, and ETCD).
- **Worker Node**: The Worker Node is primarily responsible for executing the LLMOS workloads.
- **LLMOS Operator**: The LLMOS Operator manages the lifecycle and system components of the LLMOS platform, including LLMOS API-server, controllers, and system addons.
- **LLMOS Controller**: The LLMOS Controller is responsible for managing the lifecycle of LLMOS workloads like LLM models, notebooks, machine learning cluster, jobs and so on.
- **Redis**: A key-value store used for storing fault-tolerant configurations of LLMOS-managed system components and chats.
- **Workloads**: LLMOS workloads are computational tasks that run on the LLMOS infrastructure, utilizing requested resources (e.g., CPU, GPU, memory, and storage volumes).

:::note 
Server nodes also function as worker nodes, but prioritize resources to system components.
:::

## Key Features
- **Easy to install:** Install directly on the x86_64 or ARM64 architecture, offering an out-of-the-box user experience.
- **Complete Infrastructure & LLM Lifecycle Management:** Provides a unified interface for both developers and non-developers to manage the LLM infrastructure, ML Cluster, models and workloads.
- **Easy to use:** Build models and AI applications in your own way, without needing to managing Kubernetes & infrastructure directly.
- **Perfect for edge & branch:** better resource optimization, simplify the deployment of models and workloads to edge and branch networks, but can also scale up horizontally to handle large workloads.

## Next Step

To get started with LLMOS, please refer to the [Quick Start](./quickstart) guide.
