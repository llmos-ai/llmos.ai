---
sidebar_position: 1
title: Uninstalling LLMOS
---
:::warning

Uninstalling script will delete the local cluster data, configuration, and all of the scripts and CLI tools. Please make sure to back up any important data before uninstalling.

Also, it will not remove any data from the external datastore.

:::

If you installed LLMOS using the installation script, an uninstallation script was generated automatically during installation.

If you are planning on rejoining a node to an existing cluster after uninstalling and reinstalling, be sure to delete the node from the cluster to ensure that the node password is removed correctly. See the following steps for more details.


## Uninstalling Steps

Uninstalling LLMOS is a two-step process:
1. Uninstall LLMOS from the node

```shell
sudo llmos-uninstall.sh
```

2. Delete the node from the cluster either via the `LLMOS dashboard > Nodes` page or using the `kubectl` command:

```shell
kubectl delete node $NODE_NAME
```

## Manual Uninstall

If you installed LLMOS manually, you can uninstall it by running the following script on the target node:

```shell
curl -sfL https://raw.githubusercontent.com/llmos-ai/llmos/main/uninstall.sh | sh -
```

And then delete the node from the cluster as described in the above section. If you are in an air-gap environment, you can copy and paste the [script](https://raw.githubusercontent.com/llmos-ai/llmos/main/uninstall.sh) to your local path and run it manually with `sh ./uninstall.sh`. 