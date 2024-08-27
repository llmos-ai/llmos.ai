---
sidebar_position: 1
title: Namespace
---

Namespaces is a special resource provide a mechanism for isolating groups of resources within a single cluster. Names of resources need to be unique within a namespace, but not across namespaces. Namespace-based scoping is applicable only for namespaced objects (e.g. Notebooks, Model Services, etc.) and not for cluster-wide objects (e.g. Nodes, Storage Classes, etc.).

:::note
For a production and independent environment, consider not using the `default` or `llmos-public` namespace. Instead, make other namespaces and use those.
:::


### System Namespaces

LLMOS reserves some namespaces for system components. These namespaces are not intended for use by end users.
- `ceph-system`: This namespace is used for built-in system Ceph storage.
- `kube-system`: This namespace is used for Kubernetes system components.
- `kube-node-lease`: This namespace is used for Kubernetes node lease.
- `kube-public`: This namespace is used for Kubernetes public resources.
- `llmos-system`: This namespace is used for LLMOS system components.
- `system-upgrade`: This namespace is used for LLMOS system upgrade components.

:::note
`llmos-public` is a special namespace that is used for public resources and can be accessed by all end users.
:::