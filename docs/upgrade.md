---
sidebar_position: 40
title: Upgrade
---

LLMOS includes a built-in upgrade check mechanism that automatically checks for new versions every 60 minutes. The upgrade checker [settings](./settings.md#upgrade-check-enabled) can be configured on the **settings** page.

Admin users can view all available versions and manually upgrade to new versions through the CLI.

:::note
Downgrading LLMOS is not supported.
:::


## Upgrade Guide

### Upgrading from v0.2.0 to v0.3.1
To Upgrade LLMOS cluster from `v0.2.0` to `v0.3.1`, you can simply run the following command:
```
curl -sfL https://get-llmos.1block.ai/v0.3.1-upgrade.sh | sh -s -
```

And then, you can check the upgrade status by running the following command and wait for the upgrade state to become `Complete`:
```
kubectl get Upgrade.management.llmos.ai upgrade-v030-v1 -oyaml -w
```

## Upgrade via Command Line
1. Login to one of the management nodes, or have the `KUBECONFIG` environment variable set to point to correct LLMOS cluster.
    ```shell
    export KUBECONFIG=/path/to/llmos-kubeconfig
    ```
2. Run the following command to upgrade the cluster to a newer version:
    ```shell
    kubectl apply -f - <<EOF
    apiVersion: management.llmos.ai/v1
    kind: Upgrade
    metadata:
      name: upgrade-v030-v1
    spec:
      version: v0.3.1 # The version to upgrade to
      kubernetesVersion: v1.33.1+k3s1
      registry: "ghcr.io/llmos-ai" # Override the default registry if needed(e.g., private registry)
    EOF
    ```
3. Wait for the upgrade to complete. A successful upgrade YAML will look like the following(with `status.state` to `Complete`):
   ```yaml
   apiVersion: management.llmos.ai/v1
   kind: Upgrade
   metadata:
     annotations:
       kubectl.kubernetes.io/last-applied-configuration: |
         {"apiVersion":"management.llmos.ai/v1","kind":"Upgrade","metadata":{"annotations":{},"name":"llmos-upgrade-test"},"spec":{"registry":"docker.io/llmos-dev","version":"v0.1.1-rc1"}}
     creationTimestamp: "2024-09-23T02:32:24Z"
     generation: 1
     labels:
       llmos.ai/latest-upgrade: "true"
     name: llmos-upgrade-test
     resourceVersion: "9348507"
     uid: ca703060-73a0-4b32-8b93-9266c8c7a28f
   spec:
     version: v0.1.1-rc1
   status:
     PreviousKubernetesVersion: v1.31.0+k3s1
     appliedVersion: v0.1.1-rc1
     completeTime: "2024-09-23T02:36:36Z"
     conditions:
     - lastUpdateTime: "2024-09-23T02:36:36Z"
       message: Upgrade completed
       reason: Ready
       status: "True"
       type: Completed
     - lastUpdateTime: "2024-09-23T02:32:24Z"
       message: Chart repo is ready for upgrade v0.1.1-rc1
       reason: Ready
       status: "True"
       type: ChartsRepoReady
     - lastUpdateTime: "2024-09-23T02:36:35Z"
       message: All managed system addons are ready
       reason: Ready
       status: "True"
       type: ManagedAddonsIsReady
     - lastUpdateTime: "2024-09-23T02:35:40Z"
       message: Manifest upgrade is ready
       reason: Ready
       status: "True"
       type: ManifestUpgradeComplete
     - lastUpdateTime: "2024-09-23T02:36:36Z"
       message: All nodes upgraded to version v0.1.1-rc1(v1.31.1+k3s1)
       reason: Ready
       status: "True"
       type: NodesUpgraded
     managedAddonStatus:
     - complete: true
       disabled: false
       jobName: helm-install-gpu-operator
       name: gpu-operator
     - complete: true
       disabled: false
       jobName: helm-install-kuberay-operator
       name: kuberay-operator
     - complete: true
       disabled: false
       jobName: helm-install-llmos-operator-redis
       name: llmos-operator-redis
     - complete: true
       disabled: false
       jobName: helm-install-rook-ceph
       name: rook-ceph
     planStatus:
     - complete: true
       lastUpdateTime: "2024-09-24T01:48:31Z"
       latestHash: 962f583a45a4301325b824255d3c2232b5372caed16741717e5317db
       latestVersion: v0.1.1-rc1
       name: llmos-upgrade-test-agent
     - complete: true
       lastUpdateTime: "2024-09-24T02:42:45Z"
       latestHash: 962f583a45a4301325b824255d3c2232b5372caed16741717e5317db
       latestVersion: v0.1.1-rc1
       name: llmos-upgrade-test-server
     previousVersion: v0.1.0
     startTime: "2024-09-23T02:32:24Z"
     state: Complete
     upgradeJobs:
     - complete: true
       helmChartName: llmos-crd
       lastUpdateTime: "2024-09-23T02:34:55Z"
       name: helm-install-llmos-crd
     - complete: true
       helmChartName: llmos-operator
       lastUpdateTime: "2024-09-23T02:35:43Z"
       name: helm-install-llmos-operator
   ```
   
## Adding a new version

The new versions are available in the [upgrade-check-url](https://llmos-upgrade.1block.ai/v1/versions), if you don't want to enable the default upgrade checker, you can add a new version to the cluster by creating a new `Version` resource manually as shown below.

```shell
kubectl apply -f - <<EOF
apiVersion: management.llmos.ai/v1
kind: Version
metadata:
   name: v0.3.1
spec:
   minUpgradableVersion: v0.2.0 # The minimum version that can be upgraded to this version
   kubernetesVersion: v1.33.1+k3s1 # The newer k8s version that is included in the new version
   releaseDate: "2025-08-07"
   tags: ["stable"]
EOF
```

:::warning
With this method, you are responsible to create the correct `Version` resource, and do not modify the spec parameters copied from the upgrade check URL unless you know exactly what you are doing.
:::