---
sidebar_position: 2
title: Quickstart
---

# Quickstart

This guide will help you quickly launch a LLMOS cluster with default bootstrap options. The [installation](./installation) section covers more details about the bootstrap configuration options.

## Install Script

LLMOS can be installed to a bare-metal server or a virtual machine. To bootstrap a new cluster, follow the steps below:

```shell
curl -sfL https://get-llmos.1block.ai | sh -s - --cluster-init --token mytoken
```

Additionally, you can run the following command to add a new worker node to an existing cluster:
```shell
curl -sfL https://get-llmos.1block.ai | LLMOS_SERVER=https://server-url:6443 LLMOS_TOKEN=mytoken sh -s -
```

## Getting Started

After installing LLMOS, you can access the dashboard by navigating to `https://<server-ip>:8443` in your web browser.

1. LLMOS will bootstrap a default admin user with the username `admin` and a random password. To get the password, you can run the following command on the **cluster-init** node:
    ```shell
    kubectl get secret --namespace llmos-system llmos-bootstrap-passwd -o go-template='{{.data.password|base64decode}}{{"\n"}}'
    ```
    ![first-login](/img/docs/auth-first-login.png)
1. After logging in, you will be redirected to the setup page, you will need to configure the following:
    - Set a new password for the admin user, using strong passwords is recommended.
    - Config the server URL where all other nodes in your clusters will need to be able to reach this.
    ![setup](/img/docs/auth-first-login-setup.png)
1. After that, you will be redirected to the home page where you can start using LLMOS.
    ![home-page](/img/docs/home-page.png)

## Examples

To learn more about how to use LLMOS, check out the examples below:

- [Chat with LLMOS Models](./user_guide/llm_management/serve)
- [Creating a Jupyter Notebook](./user_guide/llm_management/notebooks#create-a-notebook)

[//]: # (TODO: add more examples)
[//]: # (- [Chat with LLMOS Models with Streaming]&#40;./examples/chat-streaming&#41;)
[//]: # (- [Creating a Machine Learning Cluster]&#40;./examples/ml-cluster&#41;)