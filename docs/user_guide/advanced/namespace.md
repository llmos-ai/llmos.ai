---
sidebar_position: 1
title: Namespace
---

Namespaces are a special resource that provide a mechanism for isolating groups of resources within a single cluster. Resource names need to be unique within a namespace, but not across different namespaces. Namespace-based scoping applies only to namespaced objects (e.g., Notebooks, Model Services) and does not affect cluster-wide objects (e.g., Nodes, Storage Classes).

:::note
For production and isolated environments, avoid using the `default` or `llmos-public` namespaces. Instead, create and use custom namespaces.
:::

### System Namespaces

LLMOS reserves certain namespaces for system components. These namespaces are not intended for end-user use.

- `ceph-system`: Used for built-in Ceph storage.
- `kube-system`: Reserved for Kubernetes system components.
- `kube-node-lease`: Used for managing Kubernetes node leases.
- `kube-public`: For Kubernetes public resources.
- `llmos-system`: Dedicated to LLMOS system components.
- `system-upgrade`: Used for system upgrade service.

### Public Namespace
The `llmos-public` namespace is a special namespace designed for public resources accessible by all end users. By default, all resources in this namespace are publicly accessible(**Read Only**).