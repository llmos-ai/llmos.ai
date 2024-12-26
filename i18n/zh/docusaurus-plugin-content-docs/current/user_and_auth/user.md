---
sidebar_position: 1
title: 用户
---

LLMOS 提供了一种简单且高效的方式来对本地用户进行管理和权限分配。
在安装过程中，LLMOS 将创建一个默认的管理员用户 `admin`，您可以根据需要更改默认密码或添加新的管理员用户。

- 当前默认有两种用户类型：**管理员**和**标准用户**。
    - **管理员**拥有对集群的完全访问权限，可以创建新用户并为他们分配不同的角色。
    - **标准用户**只能以基本权限访问 LLMOS 仪表板，并管理指定命名空间内的资源。
- **管理员**用户还可以通过[角色模板](./role-template)页面创建和管理角色权限。

![Users](/img/docs/user-list.png)

## 创建新用户

对于管理员用户，您可以通过点击**创建**按钮来创建新用户。
1. 指定**用户名**和**密码**。
2. *(可选)* 指定用户的**显示名称**和**描述**。
3. 如果希望用户在创建后处于活动状态，请勾选 **Active**。
4. 在 **全局权限** 部分，选择要分配给用户的角色。
    - 一个用户可以被分配多个角色。
    - 自定义角色可以通过 **[角色模板](./role-template.md)** 页面由管理员创建。

![Create User](/img/docs/user-create-new-user.png)

:::note
- 管理员用户将拥有访问所有命名空间和资源的权限。
- 标准用户默认只能访问有限的系统资源和 **llmos-public** 命名空间，管理员用户可以为标准用户[分配命名空间和角色](./role-template.md#rbac-管理)。
  :::

## 更改密码
对于管理员用户，您可以直接从**用户**页面通过点击**编辑配置**下拉菜单来更改密码。

对于标准用户，您可以通过点击右上角的**用户头像 > 账户与 API 密钥**来更改密码。

1. 点击 **更改密码** 按钮。
2. 输入当前密码。
3. 输入新密码并确认密码。
4. 点击 `应用` 保存更改。

![Change Password](/img/docs/user-change-password.png)

## 删除用户
对于管理员用户，您可以通过点击**删除**按钮来删除用户。 但是，管理员用户无法从仪表板中删除或停用自己。

普通用户请联系管理员删除。