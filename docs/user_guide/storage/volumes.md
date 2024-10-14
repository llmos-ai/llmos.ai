---
sidebar_position: 1
title: Volumes
---

Volumes provide a way to keep data even after a workload (like a Notebook or ModelService) is restarted or deleted. They also allow different workloads to share data. Volumes are usually connected to host paths and managed by storage providers through a StorageClass.

When setting up a workload that needs persistent storage, you can choose the StorageClass and specify the volume size in the configuration. LLMOS includes built-in StorageClasses like **[local-path](https://github.com/rancher/local-path-provisioner)** or **[llmos-ceph-block](https://rook.io/docs/rook/latest-release/Storage-Configuration/Block-Storage-RBD/block-storage/)**, which let you create volumes on demand.

:::note
1. The `local-path` StorageClass doesn't support resizing volumes or assigning them to specific nodes.
2. To use the `llmos-ceph-block` or `llmos-ceph-filesystem` StorageClasses, you must first enable [Ceph storage](./system-storage) in your cluster.
:::

![Volume List](/img/docs/volume-list.png)

:::info
When you delete a workload, its volumes **won't be deleted automatically** to prevent data loss. You'll need to delete them manually on the volumes page, or you can reuse them by choosing **Use Existing Volume** in the workload's volume settings.
:::
