---
sidebar_position: 2
title: Quickstart
---

# Quickstart

This guide will help you quickly launch a LLMOS cluster with default bootstrap options. The [installation](./installation) section covers more details about the bootstrap configuration options.

Make sure your nodes meet the [requirements](/docs/installation/requirements.md) before proceeding.

## Installation Script

LLMOS can be installed to a bare-metal server or a virtual machine. To bootstrap a **new cluster**, follow the steps below:

```shell
curl -sfL https://get-llmos.1block.ai | sh -s - --cluster-init --token mytoken
```

:::note
For CN users, you can use the following command to accelerate the installation:
```
sudo curl -sfL https://get-llmos.1block.ai | sh -s - --cluster-init --token mytoken --mirror cn
```
:::

To monitor installation logs, run `journalctl -u llmos -f`.

For more advanced configurations, you can check out the [LLMOS Configurations](/docs/installation/configurations) page.

After installation, you may optionally add a worker node to the cluster with the following command:
```shell
curl -sfL https://get-llmos.1block.ai | LLMOS_SERVER=https://server-url:6443 LLMOS_TOKEN=mytoken sh -s -
```

### Config Proxy
If your environment requires internet access through a proxy, set the `HTTP_PROXY` and `HTTPS_PROXY` environment variables before running the installation script:

```shell
export HTTP_PROXY=http://proxy.example.com:8080
export HTTPS_PROXY=http://proxy.example.com:8080
export NO_PROXY=127.0.0.0/8,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16 # Replace the CIDRs with your own
```

If you want to configure the proxy settings for `containerd` without affecting the node and LLMOS, you can prefix the variables with `CONTAINERD_`:

```shell
export CONTAINERD_HTTP_PROXY=http://proxy.example.com:8080
export CONTAINERD_HTTPS_PROXY=http://proxy.example.com:8080
export CONTAINERD_NO_PROXY=127.0.0.0/8,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16 # Replace the CIDRs with your own
```

## Getting Started

After installing LLMOS, access the dashboard by navigating to `https://<server-ip>:8443` in your web browser.

1. LLMOS will create a default `admin` user with a randomly generated password. To retrieve the password, run the following command on the **cluster-init** node:
    ```shell
    kubectl get secret --namespace llmos-system llmos-bootstrap-passwd -o go-template='{{.data.password|base64decode}}{{"\n"}}'
    ```
    ![first-login](/img/docs/auth-first-login.png)
1. Upon logging in, you will be redirected to the setup page. Configure the following:
    - Set a **new password** for the admin user (strong passwords are recommended).
    - Configure the **server URL** that all other nodes in your cluster will use to connect.
    ![setup](/img/docs/auth-first-login-setup.png)
1. After setup, you will be redirected to the home page where you can start using LLMOS.
    ![home-page](/img/docs/home-page.png)

## Examples

To learn more about using LLMOS, explore the following resources:
- [Chat with LLMOS Models](./user_guide/modelservice.md)
- [Creating a Machine Learning Cluster](./user_guide/ml_clusters)
- [Creating a Jupyter Notebook](./user_guide/notebooks.md#create-a-notebook)