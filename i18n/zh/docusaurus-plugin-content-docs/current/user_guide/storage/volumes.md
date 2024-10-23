---
sidebar_position: 1
title: 卷
---

卷（Volumes） 提供了一种方法来持久化的保存数据，即使在工作负载（如 Notebook 或 ModelService）重新启动或删除后。不同类型的存储服务如文件系统存储还允许不同的工作负载共享数据。Volumes 通常连接到主机路径，并由存储提供商通过 StorageClass 管理。

在设置需要持久存储的工作负载时，您可以在配置中选择 StorageClass 并指定卷的大小。LLMOS 包含内置的 StorageClasses，如 **[local-path](https://github.com/rancher/local-path-provisioner)**, **[llmos-ceph-block](./system-storage) 或 [llmos-ceph-filesystem](./system-storage)**，这些 StorageClasses 允许您按需创建卷。

:::note
1. `local-path` StorageClass 不支持调整卷的大小或将它们分配给特定节点。
2. 要使用 `llmos-ceph-block` 或 `llmos-ceph-filesystem` StorageClasses，您必须先在集群中启用 [Ceph 存储](./system-storage)。
   :::

![Volume List](/img/docs/volume-list.png)

:::info
当您删除一个工作负载时，其卷**不会自动删除**，以防止数据丢失。您可以在卷页面手动删除它们。 也可以通过在工作负载的卷设置中选择 **使用现有卷** 来重新使用它们。
:::
