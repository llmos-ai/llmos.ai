---
sidebar_position: 3
title: LLMOS 配置
---

LLMOS 提供了一组可以在 `/etc/llmos/config.yaml` 文件中设置的配置选项。如果该文件不存在，您可以手动创建它。

### 最小配置

```shell
mkdir -p /etc/llmos
cat > /etc/llmos/config.yaml << EOF
role: cluster-init
token: mytoken
#address: 123.123.123.123 # 指定节点的外部IP地址
mirror: cn # 国内用户可选使用 mirror 地址镜像
EOF
```
## 配置参数

### Cluster-init 角色参数
| 参数                          | 描述                                                                                                                                                   | 默认值            |
|------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------|----------------|
| `llmosOperatorVersion`       | 要安装的 LLMOS Operator 版本。如果未指定，将从最新的仓库中获取。                                                                                                             |                |
| `chartRepo`                  | LLMOS chart 仓库，设置为 `latest`、`rc` 或 `dev`。默认设置为 `latest`。生产环境中请勿使用 `rc` 或 `dev`。                                                                      | `latest`       |
| `kubernetesVersion`          | 要安装的 Kubernetes 版本。如果未指定，默认为稳定的 k3s 版本。                                                                                                              | `v1.33.1+k3s1` |
| `operatorValues`             | 覆盖 LLMOS Operator Helm chart 的默认值。请参考 [values.yaml](https://github.com/llmos-ai/llmos-operator/blob/main/deploy/charts/llmos-operator/values.yaml)   |                |
| `globalSystemImageRegistry`  | LLMOS operator 和系统附加容器镜像的默认镜像仓库。                                                                                                                     |                |
| `mirror`                     | 为 LLMOS bootstrap 指定镜像注册表。目前仅支持 `cn` 选项。                                                                                                             |                |
| `registries`                 | 用于 k8s 集群的 [registries.yaml](https://docs.k3s.io/installation/private-registry#registries-configuration-file) 文件的内容。                                 |                |
| `systemDefaultImage`         | k8s 运行时容器镜像的默认镜像仓库。                                                                                                                                  |                |
| `tlsSans`                    | 为端口 6443 生成的 TLS 证书的附加 SAN（主机名），例如 `llmos.example.com`                                                                                               |                |
| `preInstructions`            | 在启动节点之前运行的命令。请参考 [Instructions](#instructions)                                                                                                       |                |
| `postInstructions`           | 在启动节点之后运行的命令。请参考 [Instructions](#instructions)                                                                                                       |                |
| `resources`                  | 在 LLMOS operator 启动后创建的自定义 Kubernetes 资源。                                                                                                           |                |
| `runtimeInstallerImage`      | **高级设置：** 覆盖 Kubernetes 系统代理安装程序镜像。                                                                                                                  |                |
| `llmosInstallerImage`        | **高级设置：** 覆盖 LLMOS operator 安装程序镜像。                                                                                                                  |                |

### 所有角色参数
| 参数                     | 描述                                                                             | 默认值      |
|--------------------------|--------------------------------------------------------------------------------|-------------|
| `role`                   | 该节点的角色。集群必须以一个节点作为 `role=cluster-init` 开始。                                     |             |
| `server`                 | 加入 LLMOS 集群的节点的 URL。例如：`https://server-url:6443`                               |             |
| `token`                  | 用于将节点加入集群的共享密钥。                                                                |             |
| `nodeName`               | 设置节点名称。                                                                        |             |
| `address`                | 集群中节点的外部 IP 地址。                                                                |             |
| `internalAddress`        | 节点的内部 IP 地址。                                                                   |             |
| `taints`                 | 创建时应用于节点的污点。                                                                   |             |
| `labels`                 | 创建时应用于节点的标签。                                                                   |             |
| `extraConfig`            | **高级:** 在引导过程中要应用的额外 [k3s 配置](https://docs.k3s.io/installation/configuration)。 |             |


#### Instructions
| 字段          | 描述                                                        | 数据类型 |
|---------------|-------------------------------------------------------------|-----------|
| `name`        | 任务名称（例如：`custom-pre-task`）                         | string    |
| `image`       | 可选的要提取并使用的镜像                                    | string    |
| `env`         | 环境变量（例如：`FOO=BAR`）                                 | []        |
| `args`        | 程序参数（例如：`arg1`、`arg2`）                            | []        |
| `command`     | 要执行的命令（例如：`/bin/dosomething`）                   | string    |
| `saveOutput`  | 将输出保存到 `/var/lib/llmos/plan/plan-output.json`（可选） | bool      |


### 完整配置示例

```yaml
################################################################
# 以下参数仅适用于 cluster-init 角色                             #
################################################################

# 要安装的 LLMOS Operator 版本
llmosOperatorVersion: v0.3.1

# LLMOS Chart 仓库版本，设置为 "latest"、"rc" 或 "dev"。默认为 latest。
chartRepo: latest

# 要安装的 Kubernetes 版本。如果未指定，则默认为 LLMOS 指定的稳定的 k3s 版本。
kubernetesVersion: v1.33.1+k3s1

# LLMOS 系统组件镜像的默认仓库地址
# 更多详情请参见：https://github.com/llmos-ai/llmos-operator/blob/main/deploy/charts/llmos-operator/values.yaml
globalSystemImageRegistry: registry.example.com:5000

# 用于 k8s 运行时的 `registries.yaml` 文件内容
# 详情请参考：https://rancher.com/docs/k3s/latest/en/installation/private-registry/
registries: {}

# 用于引导 LLMOS 安装程序和 k8s 运行时的镜像仓库 mirror 配置
mirror: cn

# LLMOS Operator Helm 图表的自定义值。
# 参见 https://github.com/llmos-ai/llmos-operator/blob/main/deploy/charts/llmos-operator/values.yaml
operatorValues:
  # 默认值
  operator:
    apiserver:
      replicaCount: 1

# 为在端口 6443 上生成的 TLS 证书添加额外的 SAN（主机名）。
tlsSans:
- additionalhostname.example.com

# 在引导节点之前要运行的命令。
preInstructions:
  - name: custom-pre-task
    # 要提取并设置为当前工作目录的镜像（可选）
    image: custom/image:1.1.1
    # 要设置的环境变量
    env:
    - FOO=BAR
    # 程序参数
    args:
    - arg1
    - arg2
    # 要执行的命令
    command: /bin/dosomething
    # 将输出保存到 /var/lib/llmos/plan/plan-output.json（可选）
    saveOutput: false

# 在引导节点之后要运行的命令。
postInstructions:
  - name: custom-post-task
    env:
    - FOO=BAR
    args:
    - arg1
    - arg2
    command: /bin/dosomething
    saveOutput: false

# 在 LLMOS operator 引导后要创建的自定义 Kubernetes 资源。
resources:
  - kind: ConfigMap
    apiVersion: v1
    metadata:
      name: random
    data:
      key: value

# 高级：覆盖 Kubernetes 系统代理安装程序镜像。
runtimeInstallerImage: ...

# 高级：覆盖 LLMOS operator 安装程序镜像。
llmosInstallerImage: ...

###############################################
# 以下参数适用于所有角色                    #
###############################################

# 加入 LLMOS 集群的节点的 URL。
server: https://server-url:6443

# 共享密钥，用于将节点加入集群。
token: mytoken

# 该节点的角色。集群必须以一个节点作为 `role=cluster-init` 开始。
# 其他节点可以使用 `server` 作为控制平面节点或 `agent` 作为工作节点加入。
# 这些角色与 k3s 使用的 server/agent 术语对齐。
role: cluster-init,server,agent

# 设置 Kubernetes 节点名称。
nodeName: custom-hostname

# Kubernetes 中节点的外部 IP 地址。
address: 123.123.123.123

# 节点的内部 IP 地址。
internalAddress: 123.123.123.124

# 创建时应用于节点的污点。
taints:
- dedicated=special-user:NoSchedule

# 创建时应用于节点的标签。
labels:
- key=value

# 高级：额外的 k3s 配置，将放置在 `/etc/rancher/k3s/config.yaml.d/40-llmos.yaml` 中。
extraConfig: {}
```

