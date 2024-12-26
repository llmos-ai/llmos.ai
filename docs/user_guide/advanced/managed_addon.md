---
sidebar_position: 2
title: Managed Addons
---

Managed Addons help manage additional components required for your LLMOS cluster. By default, LLMOS comes with a set of system addons that are enabled out of the box. These system addons include:

- **LLMOS GPU Stack:** A toolset that brings virtual GPUs (vGPU) and multi-accelerator support to your LLMOS platform, view more details [here](../gpu_management/enable-gpu-stack).
- **LLMOS Monitoring:** Provides monitoring and alerting for your LLMOS cluster using the [Prometheus Operator](https://github.com/prometheus-operator/prometheus-operator), view more details [here](../monitoring/enable-monitoring).
- **LLMOS Redis:** Provides a LLMOS-managed [Redis](https://redis.io/) service for system services and chat storage.
- **Rook Ceph Operator:** Add built-in high-availability and fault-tolerant system storage to your cluster using the [Rook Ceph](https://rook.io/) operator.
- **KubeRay Operator:** Facilitates the management of Ray clusters and other machine learning resources in your LLMOS cluster through the [KubeRay Operator](https://www.ray.io/).
- **System Update Controller:** Manages LLMOS node upgrades with the [System Upgrade Controller](https://github.com/rancher/system-upgrade-controller) through customizable upgrade plans.

![Managed Addons](/img/docs/managed-addons.png)

:::note
System addons are essential for LLMOS to function correctly and can't be disabled. You can install additional addons beyond the default set as needed.
:::

## Creating a Custom Addon

Managed Addons use [Helm](https://helm.sh/) for installation and management. You can also add additional addons from external sources like the [Artifact Hub](https://artifacthub.io/).

1. Navigate to the **Managed Addons** page and click **Create**.
2. Select the desired **Namespace** and enter a name for the addon.
3. Provide the **Chart Repository URL** (e.g., `https://grafana.github.io/helm-charts`), **Chart Name**, and **Version**.
4. *(Optional)* Set **Enabled** to `false` if you plan to enable the addon later.
5. *(Optional)* Customize the addon by adding `Values` content to override default settings, if necessary.
6. Click **Create** to start the installation process.
7. The addon will install in the background. You can monitor its status on the **Managed Addons** page.
   - The status will display as `Ready` once the addon is successfully installed.

![Add Managed Addons](/img/docs/managed-addon-create.png)