---
sidebar_position: 1
title: Namespace
---

Namespaces provide a way to isolate groups of resources within a single cluster. Resource names must be unique within a namespace, but can be duplicated across different namespaces. Namespace-based scoping applies only to namespaced objects (e.g., Notebooks, Model Services) and does not impact cluster-wide objects (e.g., Nodes, GPU Devices, Storage Classes).

:::note
For production and isolated environments, avoid using the `default` or `llmos-public` namespaces. Instead, create and use custom namespaces tailored to your needs.
:::

### Reserved System Namespaces

LLMOS reserves specific namespaces for system components. These are not intended for end-user use:

- `kube-system`: Reserved for Kubernetes system components.
- `kube-node-lease`: Manages Kubernetes node leases.
- `kube-public`: For publicly accessible Kubernetes resources.
- `llmos-system`: Dedicated to LLMOS system components.
- `llmos-gpu-stakc-system`: Dedicated to system GPU stack components.
- `llmos-monitoring-system`: Dedicated to LLMOS built-in system monitoring components and resources.
- `llmos-dashboards`: Handles LLMOS built-in monitoring dashboards.
- `llmos-db-system`: Dedicated to LLMOS built-in database resources.
- `storage-system`: Handles LLMOS built-in system storage.
- `system-upgrade`: Used for the system upgrade service.


### Public Namespace

The `llmos-public` namespace is a designated space for resources that are accessible to all end users. By default, all resources within this namespace are publicly available, with non-admin users having `read-only` access.

If you need to offer a service to all users within your company or organization, this namespace is ideal for hosting such publicly accessible resources.


### User Namespace

In LLMOS, admins can create new namespaces and assign normal users to these namespaces with different [roles](../../user_and_auth/role-template#namespace-roles).

Normal users can create resources within the namespace they are assigned to but cannot create a new namespace.

To manage namespaces, go to the **Advanced > Namespace** page.

![user-namespaces](/img/docs/user-namespaces.png)