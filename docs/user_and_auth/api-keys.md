---
sidebar_position: 3
title: API Keys
---

LLMOS support authentication using API keys, each user can create and manage their own API keys through the **Account & API Keys** page on the top right menu.

![Account & API Keys](/img/docs/auth-apikeys-top-nav-menu.png)

Authentication with API Keys are composed of the following components:

- **API Endpoint:** This is the IP address and path that other applications use to send requests to the LLMOS API.
  - Usually, this will be `https://$server-url:8443/v1`.
- **API Token:** This is the unique identifier for the API key that is used to authenticate requests.
    - For applications that prompt you for two different strings for API authentication, e.g., HTTP Basic Auth, use:
        - **Access Key:** The token's username.
        - **Secret Key:** The token's password.
    - For applications that prompt you for one authentication string, use: 
        - **Bearer Token:** The token username and password concatenated together by a colon `(:)`.

### Creating an API Key

1. Click **Create API Key** on the **Account & API Keys** page.
1. *(Optional)* Enter a **Description** for the API key to identify the purpose of the key.
1. Config the expiration period, shorter expiration periods usually are more secure.
    - The maximum TTL for API keys is bound to the system setting `auth-token-max-ttl-minutes` and is default to **90 days**.
    - Your API key won't be valid after expiration, it will be automatically deleted in a scheduled routine or you can delete it manually.
![API Keys](/img/docs/auth-apikey-create.png)
1. Click **Create** to create the API Key, and you will see the generated API key. 
![API Keys](/img/docs/auth-generated-apikey.png)

:::info Note
You can only see the generated API key once upon creation, save your API keys somewhere safe. If you lose it, you'll need to create a new API key.
:::

## Deleting an API Key
1. Find the API key you want to delete on the **Account & API Keys** page.
2. Click **Delete** on the API key row.
3. Your API key will be removed after confirmation, and the token will no longer be valid.
