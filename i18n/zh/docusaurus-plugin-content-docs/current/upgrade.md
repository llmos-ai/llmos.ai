---
sidebar_position: 40
title: 升级指南
---

LLMOS 包含一个内置的升级检查机制，每 60 分钟自动检查新版本。升级检查的[设置](./settings.md#upgrade-check-enabled)可以在**全局设置**页面上进行配置。

管理员用户可以查看所有可用版本，并通过命令行手动升级到新版本。

:::info
LLMOS不支持降级。
:::


## 升级指南

### 从 v0.2.0 升级到 v0.3.0

要将 LLMOS 集群从 `v0.2.0` 升级到 `v0.3.0`，你只需运行以下命令：

```
curl -sfL https://get-llmos.1block.ai/v0.3.0-upgrade.sh | sh -s -
```

然后，你可以运行以下命令来检查升级状态，并等待升级状态变为 `Complete`：

```
kubectl get Upgrade.management.llmos.ai upgrade-v030-v1 -oyaml -w
```


## 通过命令行升级
1. 登录到其中一个管理节点，或设置 `KUBECONFIG` 环境变量指向正确的 LLMOS 集群。
    ```shell
    export KUBECONFIG=/path/to/llmos-kubeconfig
    ```
2. 运行以下命令将集群升级到较新版本：
    ```shell
    kubectl apply -f - <<EOF
    apiVersion: management.llmos.ai/v1
    kind: Upgrade
    metadata:
      name: upgrade-v030-v1
    spec:
      version: v0.3.0 # 要升级到的版本
      kubernetesVersion: v1.33.1+k3s1
      registry: "ghcr.io/llmos-ai" # 如有需要，覆盖默认注册表（例如，私有注册表）
    EOF
    ```
3. 等待升级完成。成功的升级 YAML 看起来如下（`status.state` 为 `Complete`）：
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

## 添加新版本

新版本可以在[upgrade-check-url](https://llmos-upgrade.1block.ai/v1/versions)中找到，如果您不想启用默认的升级检查器，可以通过手动创建新的 `Version` 资源来添加新版本，如下所示。

```shell
kubectl apply -f - <<EOF
apiVersion: management.llmos.ai/v1
kind: Version
metadata:
   name: v0.3.0
spec:
   minUpgradableVersion: v0.2.0 # 可升级到此版本的最低版本
   kubernetesVersion: v1.33.1+k3s1 # 新版本中包含的更新的 k8s 版本
   releaseDate: "2025-08-15"
   tags: ["stable"]
EOF
```

:::warning
使用此方法时，您需要负责创建正确的 `Version` 资源，且除非您完全了解，否则不要修改从升级检查 URL 复制的 spec 参数。
:::