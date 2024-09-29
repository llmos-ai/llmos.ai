---
sidebar_position: 1
title: Volumes
---

Volumes provide a persistent storage mechanism that enables workloads to share and retain data even after pods are restarted or deleted.
Typically, volumes are mounted to host paths and provisioned by underlying storage providers using a StorageClass.

When creating a workload (e.g., Notebook, ModelService) that requires persistent storage, you can specify the StorageClass and volume size in the workload specification.
You can use built-in StorageClasses, such as **[local-path](https://github.com/rancher/local-path-provisioner)** or **[ceph-rbd](https://rook.io/docs/rook/latest-release/Storage-Configuration/Block-Storage-RBD/block-storage/)**, to dynamically provision volumes.

:::info
When you remove a workload, the associated volumes will **NOT** be deleted automatically to prevent data loss. You will need to delete the volumes manually, or you can remount them to other workloads by selecting **Use Existing Volume** in the workload configuration pages.
:::

![Volume List](/img/docs/volume-list.png)

:::note
The `local-path` storage class does not support volume expansion or specific node scheduling.
:::
