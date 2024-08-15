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

The default username and password is `admin` and `password`, you can change it in the dashboard after login.

![login](/img/docs/login.png)