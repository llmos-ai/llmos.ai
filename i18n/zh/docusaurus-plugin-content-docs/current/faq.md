---
sidebar_position: 200
title: 常见问题
---

此 FAQ 会定期更新，以帮助解答关于使用 LLMOS 的常见问题。

### LLMOS 数据的默认路径是什么？

LLMOS 数据的默认路径是 `/var/lib/llmos`。

### 我在哪里可以找到 LLMOS 的配置文件？

您可以在 `/etc/llmos/config.yaml` 找到配置文件。

### 我在哪里可以找到集群的 token？

集群的 token 位于 `/var/lib/llmos/token`，或者您可以运行以下命令获取：
```shell
llmos get-token
```

### 我的集群找不到 GPU 驱动

如果 LLMOS 启动时已安装 NVIDIA 驱动程序，它会自动检测并设置 NVIDIA 容器运行时。

如果您在启动 LLMOS 后安装了 [NVIDIA 驱动程序](https://docs.nvidia.com/datacenter/tesla/driver-installation-guide/index.html)，请重启机器以便检测到驱动程序。

```shell
# 重启机器
sudo reboot now
# 重启后检查 NVIDIA 驱动程序和 GPU 是否正常工作
nvidia-smi
```

### 我在哪里可以找到 Kubeconfig 文件？

Kubeconfig 文件位于 `/etc/llmos/kubeconfig.yaml`。

### 如何重置 admin 密码？

如果您忘记了 admin 密码，可以按照以下步骤进行重置：

1. 选项 1：让其他管理员在 LLMOS 控制台的 **用户与认证 > 用户** 部分为您设置新密码。

2. 选项 2：如果您是唯一的管理员，按以下步骤操作：

```shell
# 删除默认的 admin 用户
kubectl get users.management.llmos.ai -ojson | jq -r '.items[] | select(.spec.username == "admin") | .metadata.name' | xargs -I {} kubectl delete users {}

# 重启 LLMOS API 服务器以创建新的默认 admin
kubectl rollout restart deployment llmos-operator -n llmos-system

# 获取新密码：
kubectl get secret --namespace llmos-system llmos-bootstrap-passwd -o go-template='{{.data.password|base64decode}}{{"\n"}}'
```
