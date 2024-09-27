---
sidebar_position: 1
title: Bootstrap Options
---

## Installation Script

The installation script provides a convenient method to bootstrap LLMOS using a shell script. It automatically downloads the latest LLMOS release from [Github](https://github.com/llmos-ai/llmos/releases) and initializes the LLMOS cluster and system components via the systemd service.


### Cluster Initialization

Cluster creation begins with one node initializing the cluster by assigning the `cluster-init` role. Other nodes can then join the cluster later. 
A unique token is generated for the new cluster, or you can manually assign one. To retrieve the token for an existing cluster, run `llmos get-token` or `cat /var/lib/llmos/token`.

To bootstrap a new cluster, run the following command on a bare-metal server or virtual machine:

```shell
curl -sfL https://get-llmos.1block.ai | sh -s - --cluster-init --token mytoken
```

### Join a Cluster

To add more nodes to the cluster, you can assign them the **server** role to increase the number of management nodes or the **agent** role to add more worker nodes. 
To join a node, you will need the `server-url` and the cluster `token`.

```shell
curl -sfL https://get-llmos.1block.ai | sh -s - --server https://server-url:6443 --token mytoken
```

:::info
If you have already configured those options using the [LLMOS Configuration](/docs/installation/configurations) file, you can just run the installation script with:
`curl -sfL https://get-llmos.1block.ai | sh -`.

Or if you have already downloaded the [LLMOS binary](https://github.com/llmos-ai/llmos/releases) manually, you can run with:

`llmos bootstrap --debug`
:::

### Node Roles

LLMOS will bootstrap a node with one of the following roles:

- **cluster-init:** The first node in every cluster must have this role.
- **server:** Joins the cluster with a management role, functioning as a control-plane, etcd, and worker node.
- **agent:**  Joins the cluster as a worker-only node.


### Config Proxy
If you environment needs to access the internet through a proxy, you can set the `HTTP_PROXY` and `HTTPS_PROXY` environment variables to configure the installation script to use the proxy.

```shell
export HTTP_PROXY=http://proxy.example.com:8080
export HTTPS_PROXY=http://proxy.example.com:8080
export NO_PROXY=127.0.0.0/8,10.0.0.0/8,172.16.0.0/12,192.168.0.0/16
```

### Bootstrap Environment Variables
Environment variables prefixed with `LLMOS_` are preserved for the systemd service. 

| Flag              | Environment Variable  | Default                  | Description                                                                                                             |
|-------------------|-----------------------|--------------------------|-------------------------------------------------------------------------------------------------------------------------|
| --cluster-init    | LLMOS_CLUSTER_INIT    | `false`                  | Run bootstrap as cluster-init node.                                                                                     |
| --server          | LLMOS_SERVER          |                          | The URL of the server to join. e.g., `https://server-url:6443`                                                          |
| --token           | LLMOS_TOKEN           |                          | The token to use for join the cluster.                                                                                  |
| --role            | LLMOS_ROLE            |                          | The node role to join the cluster. Default to `agent` role when server URL and token is provided but the role is empty. |
| --force           | LLMOS_BOOTSTRAP_FORCE | `false`                  | Force run bootstrap even if already bootstrapped.                                                                       |
| --config          | LLMOS_CONFIG_FILE     | `/etc/llmos/config.yaml` | Path to the LLMOS configuration file.                                                                                   |
| --data-dir        | LLMOS_DATA_DIR        | `/var/lib/llmos`         | Path to the LLMOS data directory.                                                                                       |
| --debug           | LLMOS_DEBUG           | `false`                  | Enable debug logging.                                                                                                   |
| --debug-level     | LLMOS_DEBUG_LEVEL     | `7`                      | Debug log level (valid 0-9).                                                                                            |

To pass environment variables to the installation script, add the `LLMOS_` prefix environment variables just like below:

```shell
curl -sfL https://get-llmos.1block.ai | LLMOS_DEBUG=true LLMOS_DEBUG_LEVEL=9 sh -s -
```

For more detailed information about LLMOS configuration options, you can check out the [LLMOS Configurations](/docs/installation/configurations) page.

### Installation Script Environment Variables

The following environment variables are used exclusively with the LLMOS installation script:

| Variable                    | Default               | Description                                                                                                  |
|-----------------------------|-----------------------|--------------------------------------------------------------------------------------------------------------|
| INSTALL_LLMOS_SKIP_DOWNLOAD | `false`               | If set to true will not download LLMOS hash or binary.                                                       |
| INSTALL_LLMOS_FORCE_RESTART | `false`               | If set to true will always restart the LLMOS service.                                                        |
| INSTALL_LLMOS_SKIP_ENABLE   | `false`               | If set to true will not enable or start LLMOS service.                                                       |
| INSTALL_LLMOS_SKIP_START    | `false`               | If set to true will not start LLMOS service.                                                                 |
| INSTALL_LLMOS_VERSION       | `latest`              | Version of LLMOS to download from github. Will attempt to download from the latest version if not specified. |
| INSTALL_LLMOS_BIN_DIR       | `/usr/local/bin`      | Directory to install LLMOS binary, links, and uninstall script to.                                           |
| INSTALL_LLMOS_SYSTEMD_DIR   | `/etc/systemd/system` | Directory to install systemd service and environment files to.                                               |

For example, if you already have the LLMOS binary installed in `/usr/local/bin/llmos` and you want to skip the download step, you can set the following environment variables:

```shell
curl -sfL https://get-llmos.1block.ai | INSTALL_LLMOS_SKIP_DOWNLOAD=true sh -s -
```
