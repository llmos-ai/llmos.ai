---
sidebar_position: 1
title: Nodes
---

LLMOS node can either be a virtual or physical machines, depending on your cluster. The first node in the cluster is designated as the **cluster-init** node by default. Additional nodes can be configured as either **server** nodes or **worker** nodes.

Server nodes host system components such as the API server, controller-manager, and etcd, along with user workloads. In contrast, worker nodes are primarily dedicated to running user workloads, while still handling essential system services like DaemonSet services and tunnel proxy.

You can view and manage nodes in the cluster through the **LLMOS Management > Nodes** page.

![nodes](/img/docs/nodes.png)

## Fault Tolerance

:::info
LLMOS cluster uses etcd as its database, which means that in a cluster with 3 management nodes, the system can tolerate up to 1 node failure.

It’s recommended to have an odd number of server nodes in a cluster, as odd-sized clusters provide the same failure tolerance as even-sized clusters but with fewer nodes. The table below illustrates this:

:::

| Server Nodes | Majority | Failure Tolerance |
|--------------|----------|-------------------|
| 1            | 1        | 0                 |
| 2            | 2        | 0                 |
| 3            | 2        | 1                 |

## Adding a Node

LLMOS allows you to add either a server or worker node to the cluster. You can refer to the [installation configurations](../installation/configurations#full-configuration-example) for the detailed options.

To add a node to the cluster from the dashboard:
1. Go to the **LLMOS Management > Nodes** page.
2. Click **Import** button to register a new node to the cluster.
3. Select the node role (server or worker).
4. Optionally, you can specify the advanced options like the node name, IP address, labels, and taints through the **Show Advanced** option.
5. Check the generated command and run it on each of the existing Linux machines you want to register.
    ![node-import](/img/docs/node-import.png)
6. (Optional): To monitor installation logs, run `journalctl -u llmos -f` on the node.
7. Wait for the node to be ready, and it should be listed as **Active** on the node page when the installation is complete.

## Deleting a Node

To delete a node from the cluster:

1. Go to the **LLMOS Management > Nodes** page.
2. Select the node you want to delete and click **Delete**.
3. Confirm the deletion by typing the node name in the confirmation dialog.
4. The node will be removed from the cluster.
5. To prevent the node from rejoining the cluster, you will need to either reinstall the operating system or remove the node completely using the [uninstall script](../installation/uninstall#manual-uninstall).

![delete](/img/docs/delete-node.png)
