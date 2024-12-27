---
sidebar_position: 1
title: 命名空间
---

命名空间提供了一种在单个集群中隔离资源组的方式。资源名称在命名空间内必须唯一，但可以在不同的命名空间之间重复使用。基于命名空间的作用域仅适用于命名空间对象（例如，Notebooks、Model Services），不会影响集群范围内的对象（例如，Nodes、GPU Devices、Storage Classes）。

:::note
对于生产环境和隔离环境，避免使用 `default` 或 `llmos-public` 命名空间。请创建并使用定制的命名空间，以满足您的需求。
:::

### 保留的系统命名空间

LLMOS 为系统组件保留了特定的命名空间，这些命名空间不适用于最终用户：

- `kube-system`：保留给 Kubernetes 系统组件。
- `kube-node-lease`：管理 Kubernetes 节点租约。
- `kube-public`：用于公开访问的 Kubernetes 资源。
- `llmos-system`：专门用于 LLMOS 系统组件。
- `llmos-gpu-stack-system`：专门用于系统 GPU 堆栈组件。
- `llmos-monitoring-system`：专门用于 LLMOS 内建系统监控组件和资源。
- `llmos-dashboards`：处理 LLMOS 内建监控仪表板。
- `llmos-db-system`：专门用于 LLMOS 内建数据库资源。
- `storage-system`：处理 LLMOS 内建系统存储。
- `system-upgrade`：用于系统升级服务。

### 公共命名空间

`llmos-public` 命名空间是为所有终端用户提供访问的资源空间。默认情况下，所有该命名空间内的资源都是公开的，但是非管理员用户具有 `只读` 权限。

如果您需要为公司或组织内的所有用户提供公共服务，可以使用此命名空间来托管公开访问的资源。

### 用户命名空间

在 LLMOS 中，管理员可以创建新的命名空间，并将普通用户分配到这些命名空间中并分配不同的[角色](../../user_and_auth/role-template#命名空间角色)。

普通用户可以在分配给他们的命名空间内创建资源，但不能创建新的命名空间。

要管理命名空间，请访问 **高级 > 命名空间** 页面。

![user-namespaces](/img/docs/user-namespaces.png)