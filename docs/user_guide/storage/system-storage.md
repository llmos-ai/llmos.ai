---
sidebar_position: 2
title: System Storage
---

LLMOS provides two built-in storage service:
- [Local Path Storage](https://github.com/rancher/local-path-provisioner): This is a simple storage service that stores data on the host machine and is suitable for testing or single node purposes(No HA and data fault-tolerance).
- [Ceph Cluster Storage](https://rook.io/docs/rook/latest-release/Getting-Started/intro): This is a distributed storage service that provides high availability and data fault-tolerance. It provides block and object storage and is designed for medium to large scale production clusters.

:::info
Ceph storage is not enabled by default. Please enable it before using it. Also make sure that your cluster has enough resources and meets the [prerequisites](#ceph-prerequisites) below.
:::

## Ceph Prerequisites

To configure the Ceph storage cluster, at least one of these local storage types is required:
- Raw devices (no partitions or formatted filesystems)
- Raw partitions (no formatted filesystem)
- LVM Logical Volumes (no formatted filesystem)
- Persistent Volumes available from a storage class in block mode

To confirm whether the partitions or devices are formatted with filesystems with the following command:
```shell
$ lsblk -f
NAME                  FSTYPE      LABEL UUID                                   MOUNTPOINT
vda
└─vda1                LVM2_member       >eSO50t-GkUV-YKTH-WsGq-hNJY-eKNf-3i07IB
  ├─ubuntu--vg-root   ext4              c2366f76-6e21-4f10-a8f3-6776212e2fe4   /
  └─ubuntu--vg-swap_1 swap              9492a3dc-ad75-47cd-9596-678e8cf17ff9   [SWAP]
vdb
```

If the `FSTYPE` field is not empty, there is a filesystem on top of the corresponding device. In this example, `vdb` is available to use, while `vda` and its partitions have a filesystem and are not available.

For more information, please refer to the [Rook Ceph Prerequisites](https://rook.github.io/docs/rook/latest-release/Getting-Started/Prerequisites/prerequisites#ceph-prerequisites).

## Enabling Ceph Storage

If the Ceph storage is not enabled, you should be able to view the enabling notice in the home page. Click the `Enable` link to go to the configuration page.

Configure the Ceph cluster, block pools, filesystem and other parameters if you want. Then click `Save` to enable the Ceph storage.

:::note
Default value should be enough for most cases. Refer to the [Ceph Cluster Configuration](https://rook.github.io/docs/rook/latest-release/Helm-Charts/ceph-cluster-chart/#configuration) for more details.
:::

![Enable Ceph Configs](/img/docs/ceph-enable-configs.png)

Wait for the Ceph cluster `Phase` to be **Ready**. You can also check the Ceph Block Pool and Filesystem status in the related pages under the `Storage` menu.

![Ceph Status](/img/docs/ceph-cluster-ready.png)

Now you can use the default `llmos-ceph-block` or `llmos-ceph-filesystem` StorageClass to create volumes associated with the workloads.

## Disable Ceph Storage

:::warning

**DATA WILL BE PERMANENTLY DELETED AFTER DELETING THE Ceph Cluster.** 

Please make sure that you have a backup of your data before disabling the Ceph storage.
:::

Before disabling the Ceph storage, please make sure that all workloads using the Ceph storage are deleted and the volumes are detached first.
- Delete all workloads using the Ceph storage.
- Go to the **Volumes** page and make sure that all volumes that use the Ceph storage class are removed correctly.
- Now go to the **Managed Addons** page and click the `Disable` button of the **llmos-ceph-cluster** addon.
- Click `Save` to disable the Ceph storage.

![Disable Ceph](/img/docs/ceph-addon-disable.png)

### Delete the data on hosts

:::info
The final cleanup step requires deleting files on each host in the cluster. All files under the dataDirHostPath `/var/lib/llmos/rook-ceph` property specified in the cluster will need to be deleted. Otherwise, inconsistent state will remain when re-enabling the Ceph storage.
:::

Connect to each machine and delete the namespace directory under dataDirHostPath, by default `/var/lib/llmos/rook-ceph`.

#### Zapping Devices

Disks on nodes used by Ceph for OSDs can be reset to a usable state. Note that these scripts are not one-size-fits-all. Please use them with discretion to ensure you are not removing data unrelated to Ceph.

A single disk can usually be cleared with some or all of the steps below.

```shell
DISK="/dev/sdX"

# Zap the disk to a fresh, usable state (zap-all is important, b/c MBR has to be clean)
sgdisk --zap-all $DISK

# Wipe a large portion of the beginning of the disk to remove more LVM metadata that may be present
dd if=/dev/zero of="$DISK" bs=1M count=100 oflag=direct,dsync

# SSDs may be better cleaned with blkdiscard instead of dd
blkdiscard $DISK

# Inform the OS of partition table changes
partprobe $DISK
```

Ceph can leave LVM and device mapper data on storage drives, preventing them from being redeployed. These steps can clean former Ceph drives for reuse. Note that this only needs to be run once on each node. If you have only one Ceph cluster and all Ceph disks are being wiped, run the following command.

```shell
# This command hangs on some systems: with caution, 'dmsetup remove_all --force' can be used
ls /dev/mapper/ceph-* | xargs -I% -- dmsetup remove %

# ceph-volume setup can leave ceph-<UUID> directories in /dev and /dev/mapper (unnecessary clutter)
rm -rf /dev/ceph-*
rm -rf /dev/mapper/ceph--*
```

If disks are still reported locked, rebooting the node often helps clear LVM-related holds on disks.

If there are multiple Ceph clusters and some disks are not wiped yet, it is necessary to manually determine which disks map to which device mapper devices.

For more detailed information, please refer to the [Rook Ceph Storage Cleanup](https://rook.github.io/docs/rook/latest-release/Getting-Started/ceph-teardown/?h=cleanup#troubleshooting) guide.