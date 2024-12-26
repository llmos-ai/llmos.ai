---
sidebar_position: 3
title: Notebooks
---

Notebooks 提供了一种在 LLMOS 集群内运行 JupyterLab、RStudio 和 VS Code 的轻量级基于 Web 的开发环境的方式，您可以在其中运行交互式代码、数据分析和机器学习任务。

借助 Notebooks，您可以轻松创建和管理轻量级的 Notebook 环境，提供无缝高效的开发体验。您可以使用 Notebooks 完成以下任务：

- **原生应用支持**：无缝运行独立环境中的 JupyterLab、RStudio 和 Visual Studio Code (code-server)。
- **基于集群的 Notebooks**：直接在集群中创建和管理轻量级 Notebook 容器，消除在本地笔记本电脑上运行它们的需要，并且能以非常容易的与其他服务如 ModelService, ML 集群进行交互。
- **标准化 Notebook 镜像**：管理员可以提供预先配置的 Notebook 镜像，预安装所需的软件包，确保组织和团队之间的一致性。
- **访问控制**：通过 RBAC 管理 Notebook 访问，允许在组织或团队中简化和安全地共享 Notebooks。

![Notebooks](/img/docs/notebooks.png)

### 创建 Notebook
开始使用 Notebooks 非常简单。

1. 在浏览器中打开 LLMOS Dashboard，并转到 **LLMOS Management > Notebooks** 页面。
2. 点击右上角的 **Create**。
3. 选择 Notebook **类型** 和您想用于 Notebook 服务器的镜像。
   ![Notebook-create](/img/docs/notebook-create-general.png)
4. 指定 Notebook 服务器的名称、命名空间、资源和持久存储（卷）设置。
   - 如需使用 **GPU** 资源 , 选择 **GPU** 和 **Runtime Class**（默认：**nvidia**）。
       - 最小值：最少使用 **1 个 vGPU**。
   - 如无需占用完整的 **GPU** 资源，可开启 vGPU 设备共享并指定 `vGPU` 内存大小（以 MiB 为单位）和 `vGPU Cores`（默认：100%）。
  ![Notebook-create-resources](/img/docs/notebook-create-resources.png)

**结果:** 当 Notebook 服务器配置完成并成功启动， 可点击 **Visit** 访问您的 Notebook 服务器。
   ![Notebook-visit](/img/docs/notebook-visit.png)

![Notebook-juypter](/img/docs/notebook-jupyter.png)
- 默认工作区为 `/home/jovyan`

### Notebook 镜像
LLMOS 目前提供三种类型的 Notebook 镜像供您选择，但您可以通过 `default-Notebook-images` 设置轻松添加自己的镜像：
- [JupyterLab](https://github.com/jupyterlab/jupyterlab)
- [Visual Studio Code (code-server)](https://github.com/coder/code-server)
- [RStudio](https://github.com/rstudio/rstudio)

:::note
用户在生成 Notebook 服务器后安装的软件包仅在 Pod 重启期间有效，要确保软件包在 Pod 重启期间得以保留，您需要：
- 构建包含这些软件包的自定义镜像，或
- 确保它们安装在持久卷支持的目录中。
:::

## Notebook 监控

您可以通过 [LLMOS 监控](./monitoring/enable-monitoring) 来查看您的 Notebook 资源使用情况。查看的步骤如下：

1. 点击列表中的 Notebook 名称，打开其详细信息页面。
2. 转到 **监控指标** 标签，查看 CPU、内存、网络流量和磁盘 I/O 等使用数据。

![notebook-monitoring-metrics](/img/docs/notebook-monitoring-metrics.png)
