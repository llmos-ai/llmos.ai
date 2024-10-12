---
sidebar_position: 1
title: Volumes
---

Volumes provide a persistent storage mechanism that enables workloads to share and retain data even after workloads are restarted or deleted.
Typically, volumes are mounted to host paths and provisioned by underlying storage providers using a StorageClass.

When creating a workload (e.g., Notebook, ModelService) that requires persistent storage, you can specify the StorageClass and volume size in the workload specification.
You can use built-in StorageClasses, such as **[local-path](https://github.com/rancher/local-path-provisioner)** or **[llmos-ceph-block](https://rook.io/docs/rook/latest-release/Storage-Configuration/Block-Storage-RBD/block-storage/)**, to dynamically provision volumes.

:::info
When you delete a workload, the associated volumes will **NOT** be deleted automatically to prevent data loss. You will need to delete the volumes manually on the volumes page, or you can reuse them by selecting **Use Existing Volume** in the workload volumes tab.
:::

![Volume List](/img/docs/volume-list.png)

:::note
1. The `local-path` storage class does not support volume expansion or specific node scheduling.
2. To use the `llmos-ceph-block` or `llmos-ceph-filesystem` storageClass, you need to enable the [Ceph storage](./system-storage) first in your cluster.
:::
