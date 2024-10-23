---
sidebar_position: 3
title: API 密钥
---

LLMOS 支持使用 API 密钥进行身份验证，每个用户可以通过右上角菜单中的**账户与 API 密钥**页面创建和管理自己的 API 密钥。

![账户与 API 密钥](/img/docs/auth-apikeys-top-nav-menu.png)

使用 API 密钥进行身份验证由以下几个组件组成：

- **API 端口** 这是其他应用程序用于向 LLMOS API 发送请求的 IP 地址和路径。
    - 通常，这将是 `https://$server-url:8443/v1`。
- **API Token：** 这是用于身份验证请求的 API 密钥的唯一标识符。
    - 对于提示您输入两个不同字符串进行 API 身份验证的应用程序，例如 HTTP 基本身份验证，请使用：
        - **Access Key：** 令牌的用户名。
        - **Secret Key：** 令牌的密码。
    - 对于提示您输入一个身份验证字符串的应用程序，请使用：
        - **Bearer Token：** 令牌的用户名和密码用冒号 `(:)` 连接在一起。

### 创建 API 密钥

1. 在**账户与 API 密钥**页面上点击**创建 API 密钥**。
2. *(可选)* 输入 API 密钥**描述**以识别该密钥的用途。
3. 配置过期时间，较短的过期时间通常更安全。
    - API 密钥的最大有效期受系统设置 `auth-token-max-ttl-minutes` 的限制，默认为 **90 天**。
    - API 密钥在过期后将失效，系统将定期自动删除，您也可以手动删除。
      ![API 密钥](/img/docs/auth-apikey-create.png)
4. 点击 **创建** 以生成 API 密钥，您将看到生成的 API 密钥。
   ![API 密钥](/img/docs/auth-generated-apikey.png)

:::info 注意
您只能在创建时看到生成的 API 密钥，请将其保存在安全的地方。如果丢失，您需要创建新的 API 密钥。
:::

## 删除 API 密钥
1. 在**账户与 API 密钥**页面上找到您要删除的 API 密钥。
2. 点击该 API 密钥行上的**删除**。
3. 在确认后，您的 API 密钥将被移除，令牌将不再有效。