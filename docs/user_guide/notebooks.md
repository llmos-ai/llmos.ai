---
sidebar_position: 3
title: Notebooks
---

Notebooks offer a way to run lightweight web-based development environments within your LLMOS cluster, where you can run interactive code, data analysis, and machine learning tasks.

Some key features of notebooks include:

- **Native Application Support**: Seamlessly run native JupyterLab, RStudio, and Visual Studio Code (code-server) with a container runtime.
- **Cluster-based Notebooks**: Users can create and manage lightweight notebook containers directly in the cluster, eliminating the need to run them locally on their workstations.
- **Standardized Notebook Images**: Administrators can provide pre-configured notebook images with required packages pre-installed, ensuring consistency across the organization.
- **Access Control**: Notebook access is managed through RBAC, allowing for streamlined and secure sharing of notebooks across the organization or team.

![Notebooks](/img/docs/notebooks.png)

### Create a Notebook
Getting started with notebooks is easy.

1. Open the LLMOS Dashboard in your browser and go to the **ML Management > Notebooks** page.
1. Click **Create** in the top right corner.
1. Select notebook **type** and the image you want to use for your notebook server.
1. Specify the name, resources and persistent storage setting of your notebook server.
   ![notebook-create](/img/docs/notebook-create.png)
1. Click **Visit** to visiting your notebook server once the notebook has been provisioned
   ![notebook-visit](/img/docs/notebook-visit.png)
   ![notebook-juypter](/img/docs/notebook-jupyter.png)
