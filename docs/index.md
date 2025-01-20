---
sidebar_position: 1
title: Overview
---

# LLMOS Overview

LLMOS is an open-source AI infrastructure management software designed to accelerate AI application development and simplify the management of large language models (LLMs).

It supports running on public clouds and private GPU servers, helping you easily deploy private AI models and scale machine learning workflows while reducing the complexity of development and operations.


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
- **[Easy Installation](./quickstart):** Works out of the box on both x86_64 and ARM64 architectures for a smooth installation experience.
- **[GPU Stack Management](./user_guide/gpu_management/enable-gpu-stack):** Offers virtual GPU (vGPU) and multi-accelerator support to enhance GPU resource utilization and operational flexibility.
- **[Machine Learning Cluster](./user_guide/ml_clusters):** Supports distributed computing with parallel processing capabilities and access to leading AI libraries, improving the performance of machine learning workflows—especially for large-scale models and datasets.
- **[Seamless Notebook Integration](./user_guide/notebooks.md):** Integrates with popular notebook environments such as [Jupyter Notebook](https://github.com/jupyterlab/jupyterlab), [VSCode](https://github.com/coder/code-server), and [RStudio](https://github.com/rstudio/rstudio), allowing data scientists and developers to work efficiently in familiar tools without complex setup.
- **[ModelService](./user_guide/modelservice.md) for LLM Serving:** Easily serve LLMs from [HuggingFace](https://huggingface.co/models), [ModelScope](https://modelscope.cn/models) or local path with **OpenAI-compatible APIs**.
- **[Monitoring & Alerts](./user_guide/monitoring/enable-monitoring):** Easy to track cluster and GPU metrics in real-time with ready-to-use Grafana dashboards, Prometheus rules and alerts.
- **[Storage Management](./user_guide/storage/system-storage):** Provides built-in distributed storage with high-performance, fault-tolerant features. Offers robust, scalable block and filesystem storage tailored to the demands of AI and LLM applications.
- **[User](./user_and_auth/user) & [RBAC Management](./user_and_auth/role-template):** Simplifies user management with role-based access control (RBAC) and role templates, ensuring secure and efficient resource allocation.
- **Optimized for Edge & Branch Deployments:** Supports private deployments with optimized resource usage for running models and workloads in edge and branch networks. It also allows for horizontal scaling to accommodate future business needs.

## Use Cases
- **AI Research & Development:** Simplifies LLM and AI infrastructure management, enabling researchers to focus on innovation rather than operational complexities.
- **Enterprise AI Solutions:** Streamline the deployment of AI applications with scalable infrastructure, making it easier to manage models, storage, and resources across multiple teams.
- **Data Science Workflows:** With notebook integration and powerful cluster computing, LLMOS is ideal for data scientists looking to run complex experiments at scale.
- **AI-Driven Products:** From chatbots to automated content generation, LLMOS simplifies the process of deploying LLM-based products that can serve millions of users and scale up horizontally.

## Next Step

For supported architecture and installation requirements, please refer to the doc [here](./installation/requirements).

To get started with LLMOS, please refer to the [Quick Start](./quickstart) guide.
