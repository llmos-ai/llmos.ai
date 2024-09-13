---
sidebar_position: 1
title: Nodes
---

LLMOS manages your workload by deploying containers on your Nodes. A Node can be either a virtual or physical machine, depending on the cluster. The initial cluster node is always designated as the **management** node by default. Following nodes can be configured as either **management** nodes or **worker** nodes.

The management node hosts both system components, such as the API server, controller-manager, and etcd, as well as user workloads. In contrast, the worker node is dedicated primarily to running user workloads and some minimal system-required services like Kubelet and tunnel proxy.

You can view and manage the nodes in the cluster through the **LLM Management > Nodes** page.

![nodes](/img/docs/nodes.png)


## Fault Tolerance
:::info

LLMOS uses etcd as its database, so the maximum node fault toleration is `1` when there is a `3` management nodes cluster.

It is recommended to have an odd number of management nodes in a cluster. An odd-size cluster tolerates the same number of failures as an even-size cluster but with fewer nodes. The difference can be seen below.

:::


| Management Nodes | Majority | Failure Tolerance |
|------------------|----------|-------------------|
| 1                | 1        | 0                 |
| 2                | 2        | 0                 |
| 3	            | 2	       | 1                 |


## Add a Node

LLMOS allows you to add either a management or worker node to the cluster. please refer to the [Join a Cluster](../installation#join-a-cluster) documentation for detailed information.


## Delete a Node

To delete a node, you need to remove it from the cluster first:

1. Go to the **LLMOS Management > Nodes** page.
2. Select the node you want to delete and click the **Delete** option.
3. Confirm the deletion by typing the correct node name in the confirmation dialog.
4. The node will be deleted from the cluster.
5. To prevent the node from rejoining the cluster, you should either reinstall the operating system or run the [uninstall script](../installation/uninstall) on the node.