---
sidebar_position: 1
title: Nodes
---

LLMOS manages your workloads by deploying containers on your Nodes, which can be virtual or physical machines, depending on your cluster. The first node in the cluster is designated as the **management** node by default. Additional nodes can be configured as either **management** nodes or **worker** nodes.

Management nodes host system components such as the API server, controller-manager, and etcd, along with user workloads. In contrast, worker nodes are primarily dedicated to running user workloads, while still handling essential system services like **DaemonSet services** and **tunnel proxy**.

You can view and manage nodes in the cluster through the **LLM Management > Nodes** page.

![nodes](/img/docs/nodes.png)

## Fault Tolerance

:::info
LLMOS uses etcd as its database, which means that in a cluster with 3 management nodes, the system can tolerate up to 1 node failure.

It’s recommended to have an odd number of management nodes in a cluster, as odd-sized clusters provide the same failure tolerance as even-sized clusters but with fewer nodes. The table below illustrates this:

:::

| Management Nodes | Majority | Failure Tolerance |
|------------------|----------|-------------------|
| 1                | 1        | 0                 |
| 2                | 2        | 0                 |
| 3                | 2        | 1                 |

## Adding a Node

LLMOS allows you to add either a management or worker node to the cluster. For detailed instructions, please refer to the [Join a Cluster](../installation#join-a-cluster) documentation.

## Deleting a Node

To delete a node from the cluster:

1. Go to the **LLMOS Management > Nodes** page.
2. Select the node you want to delete and click **Delete**.
3. Confirm the deletion by typing the node name in the confirmation dialog.
4. The node will be removed from the cluster.
5. To prevent the node from rejoining the cluster, you will need to either reinstall the operating system or remove the node completely using the [uninstall script](../installation/uninstall#uninstall-script).

![delete](/img/docs/delete-node.png)
