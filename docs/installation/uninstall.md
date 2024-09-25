---
sidebar_position: 1
title: Uninstalling LLMOS
---
If you installed LLMOS using the installation script, an uninstallation script is automatically generated during installation.

If you plan to rejoin a node to an existing cluster after uninstalling and reinstalling, make sure to delete the node from the cluster first. This ensures the node password is properly removed. Follow the steps below for more details.

:::warning
Running the uninstallation script will delete local cluster data, configuration files, scripts, and CLI tools. Please ensure you back up any important data before proceeding.

Note that this will not remove any data from external datastores.
:::

## Uninstalling Steps

Uninstalling LLMOS involves two steps:

1. Run the uninstallation script on the node to clean up the system:
    ```shell
    sudo llmos-uninstall.sh
    ```
1. Delete the node from the cluster, either from the `LLMOS Dashboard > Nodes` page or by running the following kubectl command:
    ```shell 
    kubectl delete node $NODE_NAME
    ```
   ![delete node](/img/docs/node-delete.png)

## Manual Uninstall

If you manually installed LLMOS, you can uninstall it by running the following script on the target node:

```shell
curl -sfL https://raw.githubusercontent.com/llmos-ai/llmos/main/uninstall.sh | sh -
```

Afterward, delete the node from the cluster as described in the previous section. 

If you are working in an air-gapped environment, save the [uninstall script](https://raw.githubusercontent.com/llmos-ai/llmos/main/uninstall.sh) to your local path, and run it manually with: 
```
sudo sh ./uninstall.sh
````