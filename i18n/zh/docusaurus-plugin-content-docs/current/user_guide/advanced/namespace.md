---
sidebar_position: 1
title: Namespace
---

Namespaces provide a way to isolate groups of resources within a single cluster. Resource names must be unique within a namespace, but can be duplicated across different namespaces. Namespace-based scoping applies only to namespaced objects (e.g., Notebooks, Model Services) and does not impact cluster-wide objects (e.g., Nodes, Storage Classes).

:::note
For production and isolated environments, avoid using the `default` or `llmos-public` namespaces. Instead, create and use custom namespaces tailored to your needs.
:::

### System Namespaces

LLMOS reserves specific namespaces for system components. These are not intended for end-user use:

- `kube-system`: Reserved for Kubernetes system components.
- `kube-node-lease`: Manages Kubernetes node leases.
- `kube-public`: For publicly accessible Kubernetes resources.
- `llmos-system`: Dedicated to LLMOS system components.
- `storage-system`: Handles built-in system storage.
- `system-upgrade`: Used for the system upgrade service.


### Public Namespace

The `llmos-public` namespace is a designated space for resources that are accessible to all end users. By default, all resources within this namespace are publicly available, with non-admin users having `read-only` access.

If you need to offer a service to all users within your company or organization, this namespace is ideal for hosting such publicly accessible resources.