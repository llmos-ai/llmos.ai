---
sidebar_position: 2
title: 系统存储
---

LLMOS 提供了两种内置存储选项：

- **[本地路径存储](https://github.com/rancher/local-path-provisioner)**：这是一个基本的存储服务，数据保存在主机上。它最适合测试或单节点设置，但不支持高可用性（HA）或容错。
- **[Ceph 集群存储](https://rook.io/docs/rook/latest-release/Getting-Started/intro)**：这是一个分布式存储服务，提供高可用性和数据容错。它支持块存储和文件系统存储，适用于生产环境。

:::info
**注意**：Ceph 存储默认情况下未启用。您需要手动启用并确保您的集群有足够的资源（至少 4 个 vCPU 和 8 GB RAM）。请参见下面的[设备先决条件](#ceph-先决条件)。
:::

## Ceph 先决条件

在设置 Ceph 存储之前，您需要以下本地存储类型之一：

- 原始设备（无分区或文件系统）
- 原始分区（无文件系统）
- LVM 逻辑卷（无文件系统）
- 来自块模式存储类的持久卷

要检查您的设备或分区是否具有文件系统，请运行：

```shell
$ lsblk -f
```

查找 `FSTYPE` 字段。如果为空，则该设备可用。在下面的示例中，`vdb` 可用，但 `vda` 具有文件系统，无法使用。

```shell
NAME                  FSTYPE      LABEL UUID                                   MOUNTPOINT
vda
└─vda1                LVM2_member       >eSO50t-GkUV-YKTH-WsGq-hNJY-eKNf-3i07IB
  ├─ubuntu--vg-root   ext4              c2366f76-6e21-4f10-a8f3-6776212e2fe4   /
  └─ubuntu--vg-swap_1 swap              9492a3dc-ad75-47cd-9596-678e8cf17ff9   [SWAP]
vdb
```

有关更多详细信息，请参见 [Rook Ceph 先决条件](https://rook.github.io/docs/rook/latest-release/Getting-Started/Prerequisites/prerequisites#ceph-prerequisites)。

## 启用 Ceph 存储

如果 Ceph 存储未启用，您将在 **主页** 上看到通知。单击 `启用` 链接以进入设置页面。

![Enable Ceph Notification](/img/docs/ceph-enable-notification.png)

您可以通过设置块存储资源池、文件系统和其他选项来配置 Ceph 集群。完成后，单击 `保存` 以启用 Ceph 存储。

:::note
默认设置适用于大多数用户。如需更多详细信息，请参考 [Ceph 集群配置](https://rook.github.io/docs/rook/latest-release/Helm-Charts/ceph-cluster-chart/#configuration)。
:::

![Enable Ceph Configs](/img/docs/ceph-enable-configs.png)

等待 Ceph 集群达到 **就绪** 状态。您可以在 `存储` 页面检查 Ceph 块存储和文件系统的状态。

:::note
如果您没有看到 Ceph 集群，请尝试从顶部导航栏选择 `所有命名空间`。 (仅管理员可见)

![Namespace Filter](/img/docs/ceph-ns-filter.png)
:::

![Ceph Status](/img/docs/ceph-cluster-ready.png)

一旦 Ceph 准备就绪，您就可以使用 `llmos-ceph-block` 或 `llmos-ceph-filesystem` StorageClass 创建需要持久存储的卷或工作负载。

### Ceph 工具箱

Ceph 工具箱是一个包含故障排除和测试工具的容器。要访问它：

1. 转到 **Storage > Ceph 集群**，然后单击 **llmos-ceph** 集群旁边的 `执行工具箱`。
   ![Ceph Toolbox](/img/docs/ceph-toolbox.png)
2. 这将打开一个新窗口，其中工具箱容器在后台运行。您可以使用以下命令行来查看Ceph 的集群状态：
    ```shell
    ceph status
    ceph osd status
    ceph df
    rados df
    ```

## 禁用 Ceph 存储

:::warning
**移除 Ceph 集群后，所有数据将被删除。** 在禁用 Ceph 存储之前，请确保您有备份。
:::

在关闭 Ceph 之前，确保所有使用Ceph 存储的工作负载已删除并且它们的卷已分离：

1. 删除所有使用 Ceph 存储的工作负载。
2. 转到 **卷** 页面，确认所有使用 Ceph 存储的卷已被移除。
3. 然后，转到 **托管插件**，单击 **llmos-ceph-cluster** 旁边的 `禁用`。
4. 单击 `保存` 完成操作。

![Disable Ceph](/img/docs/ceph-addon-disable.png)

### 从主机删除数据

为了完全清理，请从集群中的每个主机删除文件。删除 `/var/lib/llmos/rook-ceph` 目录下的所有内容，以避免在稍后重新启用 Ceph 时出现问题。

#### 重置设备

要重置 Ceph 使用的磁盘：

```shell
DISK="/dev/sdX"
sgdisk --zap-all $DISK
dd if=/dev/zero of="$DISK" bs=1M count=100 oflag=direct,dsync
blkdiscard $DISK
partprobe $DISK
```

如果 LVM 或设备映射器数据阻止重复使用驱动器，请尝试：

```shell
ls /dev/mapper/ceph-* | xargs -I% -- dmsetup remove %
rm -rf /dev/ceph-*
rm -rf /dev/mapper/ceph--*
```

如果驱动器仍然被锁定，重启可能会有所帮助。

有关更多信息，请查看 [Rook Ceph 清理](https://rook.github.io/docs/rook/latest-release/Getting-Started/ceph-teardown/?h=cleanup#troubleshooting) 指南。