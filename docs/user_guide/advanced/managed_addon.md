---
sidebar_position: 2
title: Managed Addons
---

Managed Addons helps to manage additional addons that are needed for your LLMOS cluster.
By default, LLMOS comes with a set of system addons that are enabled by default. These addons include:

- **Nvidia GPU Operator:** Enables [Nvidia GPU Operator](https://docs.nvidia.com/datacenter/cloud-native/gpu-operator/latest/index.html) support for your LLMOS cluster.
- **KubeRay Operator:** Enables [Ray](https://www.ray.io/) cluster and other resources management for your LLMOS cluster.
- **LLMOS Operator Redis:** Provides a LLMOS-managed [Redis](https://redis.io/) service for your LLMOS cluster.
- **Rook Ceph Operator:** Enables [Rook Ceph](https://rook.io/) storage support in your LLMOS cluster.

![Managed Addonss](/img/docs/managed-addons.png)

:::note
System addons are required for LLMOS to function properly. However, you can also install additional addons that are not included in the default set.
:::

## Create a Managed Addons:

Managed Addons utilize [Helm](https://helm.sh/) for installation and management. You can also add additional addons from sources like the [Artifact Hub](https://artifacthub.io/).


1. Navigate to the **Managed Addons** page and click **Create**.
1. Select the desired **Namespace** and enter a name for the addon.
1. Provide the **Chart Repository URL** (e.g., `https://grafana.github.io/helm-charts`), **Chart Name**, and **Version**.
1. *(Optional)* Set **Enabled** to `false` if you want to enable the addon later.
1. *(Optional)* If needed, you can customize the addon by adding `Values` content to override the default settings.
1. Click **Create** to initiate the installation process.
1. The addon will be installed in the background. You can monitor its status on the **Managed Addonss** page.
   - The state will show as `Ready` once the addon is successfully installed.

![Add Managed Addons](/img/docs/managed-addon-create.png)