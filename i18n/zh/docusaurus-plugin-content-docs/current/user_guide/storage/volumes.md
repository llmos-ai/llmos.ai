---
sidebar_position: 1
title: 卷
---

卷（Volumes）提供了一种即使在工作负载（例如 Notebook 或 ModelService）重新启动或删除后，仍然能够保留数据的方式。它们还允许不同的工作负载共享数据（对于支持 **ReadWriteMany** 访问模式的存储提供商）。卷通常与主机路径连接，并通过 `StorageClass` 由存储提供商管理。

在设置需要持久化存储的工作负载时，可以在配置中选择 `StorageClass` 并指定卷大小。LLMOS 提供了内置的 StorageClass，例如 **[local-path](https://github.com/rancher/local-path-provisioner)**、**[llmos-ceph-block](https://rook.io/docs/rook/latest-release/Storage-Configuration/Block-Storage-RBD/block-storage/)** 和 **[llmos-ceph-filesystem](https://rook.io/docs/rook/latest-release/Storage-Configuration/Shared-Filesystem-CephFS/filesystem-storage/)**，可以按需创建卷。

:::note
1. `local-path` StorageClass 不支持卷的扩容或将卷分配到特定节点。
2. 使用 `llmos-ceph-block` 或 `llmos-ceph-filesystem` StorageClass 前，需先在集群中启用 [Ceph 集群](./system-storage#启用-ceph-存储)。
   :::

![卷列表](/img/docs/volume-list.png)

## 创建卷

创建 Notebook 或 ModelService 等工作负载时，可以选择使用 **添加新卷** 自动随工作负载一起创建新卷。

如果需要手动创建卷，可按照以下步骤操作：

1. 打开 **LLMOS 管理 > 存储 > 卷** 页面。
2. 点击 **创建** 按钮。
3. 指定卷名称、存储类和大小。
4. 在 **自定义** 标签页中，可指定卷的访问模式：
   - **单节点读写**：卷只能被一个工作负载挂载。
   - **多节点只读**：卷可以被多个工作负载挂载，但仅支持读取。
   - **多节点读写**：卷可以同时被多个工作负载挂载并读写。
5. 点击 **创建** 按钮完成操作。

![创建卷](/img/docs/volume-create.png)

## 支持的存储类与访问模式

| 存储类              | 单节点读写支持 | 多节点只读支持 | 多节点读写支持 |
|---------------------|---------------|---------------|---------------|
| local-path          | ✅            | ❌            | ❌            |
| llmos-ceph-block    | ✅            | ❌            | ❌            |
| llmos-ceph-filesystem | ✅          | ❌            | ✅            |

## 扩容卷

按照以下步骤扩容卷：
1. 打开 **LLMOS 管理 > 存储 > 卷** 页面。
2. 点击需要扩容卷的 **⋮ > 扩展** 按钮。
3. 指定新大小并点击 **保存**。
4. 卷将自动在后台完成扩容。

:::note
扩容操作可能需要一些时间，请耐心等待。

某些存储提供商可能不支持卷扩容（例如 `local-storage`）。如遇到问题，请检查存储提供商的支持情况。
:::

![扩容卷](/img/docs/volume-resize.png)

## 删除卷

默认情况下，工作负载被删除时卷也会被删除。但如果希望保留卷，可在删除工作负载时选择保留。

在 **卷** 页面中可以查看这些保留的卷，并通过点击 **⋮ > 删除** 按钮删除卷。

![删除卷提示](/img/docs/volume-delete-prompt.png)