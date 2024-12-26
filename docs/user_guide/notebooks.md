---
sidebar_position: 3
title: Notebooks
---

Notebooks offer a way to run lightweight web-based development environments of **JupyterLab**, **RStudio**, and **VS Code** within your LLMOS cluster, where you can run interactive code, data analysis, and machine learning tasks.

With notebooks, you can easily create and manage lightweight notebook environments, providing a seamless and efficient development experience. Here's what you can do with notebooks:

- **Native Application Support**: Seamlessly run native JupyterLab, RStudio, and Visual Studio Code (code-server) with an independent environment.
- **Cluster-based Notebooks**: Create and manage lightweight notebook containers directly in the cluster, eliminating the need to run them locally on your latop.
- **Standardized Notebook Images**: Administrators can provide pre-configured notebook images with required packages pre-installed, ensuring consistency across the organization and teams.
- **Access Control**: Notebook access is managed through RBAC, allowing for streamlined and secure sharing of notebooks across the organization or team.

![Notebooks](/img/docs/notebooks.png)

### Create a Notebook
Getting started with notebooks is easy.

1. Open the LLMOS Dashboard in your browser and go to the **LLMOS Management > Notebooks** page.
1. Click **Create** in the top right corner.
1. Select notebook **type** and the image you want to use for your notebook server.
   ![notebook-create](/img/docs/notebook-create-general.png)
1. Specify the name, namespace, resources and persistent storage(volume) setting of your notebook server.
   ![notebook-create](/img/docs/notebook-edit-resources.png)
1. Click **Visit** to visiting your notebook server once it has been provisioned.
   ![notebook-visit](/img/docs/notebook-visit.png)

  ![notebook-juypter](/img/docs/notebook-jupyter.png)

:::note 
The workspace of the default notebook images is `/home/jovyan`
:::

### Notebook Images
LLMOS currently provides three types of notebook images for you to choose from, but you can easily add your own images via the `default-notebook-images` [setting](../settings):
- [JupyterLab](https://github.com/jupyterlab/jupyterlab)
- [Visual Studio Code \(code-server\)](https://github.com/coder/code-server)
- [RStudio](https://github.com/rstudio/rstudio)

:::note
Packages installed by users after spawning the notebook server will only last the lifetime of the Pod restart, to ensure packages are preserved throughout Pod restarts you will need to either:

- Build custom images that include them, or
- Ensure they are installed in a persistent volume backed directory
:::


## Notebook Monitoring

The **Notebook** includes built-in metrics with [LLMOS Monitoring](./monitoring/enable-monitoring) to track its resource usage and consumption.To view the monitoring metrics:

- Click on the notebook name in the list to open its details page.
- Click on the **Metrics** tab to see resource usage like CPU, memory, and Disk I/O.

![notebook-monitoring-metrics](/img/docs/notebook-monitoring-metrics.png)

---

### Create a Notebook

Starting with notebooks is simple:

1. Open the LLMOS Dashboard in your browser and go to **LLMOS Management > Notebooks**.
2. Click **Create** in the top right corner.
3. Choose the **type** of notebook and the image you want for your notebook server.
   ![notebook-create](/img/docs/notebook-create-general.png)
4. Set the name, namespace, resources, and storage options for your notebook server.
   ![notebook-create](/img/docs/notebook-edit-resources.png)
5. Once the notebook is ready, click **Visit** to access your notebook server.
   ![notebook-visit](/img/docs/notebook-visit.png)

![notebook-juypter](/img/docs/notebook-jupyter.png)

:::note
The default notebook workspace is `/home/jovyan`.
:::

### Notebook Images

LLMOS offers three notebook images by default. You can also add your own images using the `default-notebook-images` [setting](../settings):
- [JupyterLab](https://github.com/jupyterlab/jupyterlab)
- [Visual Studio Code (code-server)](https://github.com/coder/code-server)
- [RStudio](https://github.com/rstudio/rstudio)

:::note
Packages installed after starting the notebook server will be lost if the pod restarts. To keep packages after a restart, you can:

- Create custom images that include the packages, or
- Install them in a persistent volume.
  :::

## Notebook Monitoring

You can monitor your notebook's resource usage with [LLMOS Monitoring](./monitoring/enable-monitoring). To check the metrics:

1. Click the notebook name in the list to open its details page.
2. Go to the **Metrics** tab to view usage data like CPU, memory, network traffic, and disk I/O.

![notebook-monitoring-metrics](/img/docs/notebook-monitoring-metrics.png)