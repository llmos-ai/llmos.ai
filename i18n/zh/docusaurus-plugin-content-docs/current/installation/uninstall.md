---
sidebar_position: 4
title: 卸载 LLMOS
---

如果您是通过安装脚本安装 LLMOS，卸载脚本将在安装过程中自动生成。

如果您计划在卸载和重新安装后将节点重新加入现有集群，请确保先从集群中删除该节点。这将确保节点密码被正确移除。有关更多详细信息，请按照以下步骤进行操作。

:::warning
运行卸载脚本将删除本地集群数据、配置文件、脚本和 CLI 工具。请确保在继续之前备份任何重要数据。

请注意，这不会从外部数据存储中删除任何数据。
:::

## 卸载步骤

卸载 LLMOS 涉及两个步骤：

1. 在节点上运行卸载脚本以清理系统：
    ```shell
    sudo llmos-uninstall.sh
    ```
2. 从集群中删除节点，可以在 `LLMOS Dashboard > Nodes` 页面中进行，或者通过运行以下 kubectl 命令：
    ```shell 
    kubectl delete node $NODE_NAME
    ```
   ![删除节点](/img/docs/delete-node.png)

## 手动卸载

如果您手动安装了 LLMOS，可以通过在目标节点上运行以下脚本进行卸载：

```shell
curl -sfL https://raw.githubusercontent.com/llmos-ai/llmos/main/uninstall.sh | sh -
```

然后，按照前一节中的说明从集群中删除节点。

如果您在隔离环境中工作，请将 [卸载脚本](https://raw.githubusercontent.com/llmos-ai/llmos/main/uninstall.sh) 保存到本地路径，并手动运行：
```
sudo sh ./uninstall.sh
```