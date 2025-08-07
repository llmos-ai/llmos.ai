---
sidebar_position: 1
title: Requirements
---

Whether you're setting up LLMOS on a virtual machine or bare-metal server, each node running LLMOS needs to meet these minimum requirements. These requirements cover LLMOS and its components but don’t include resources needed by the workloads you run.

## Prerequisites

- If the node has NVIDIA GPUs, install the [NVIDIA driver](https://docs.nvidia.com/datacenter/tesla/driver-installation-guide/index.html) first.
    - Ensure the CUDA driver's major version is `575` or higher.
- No two nodes should have the same hostname.
- The node must not have any existing Kubernetes clusters running on it.

:::note
To check if the NVIDIA driver is installed correctly, run the following command:
```shell
nvidia-smi
```
The output should look something like this:
```
+-----------------------------------------------------------------------------------------+
| NVIDIA-SMI 575.64.03              Driver Version: 575.64.03      CUDA Version: 12.9     |
|-----------------------------------------+------------------------+----------------------+
| GPU  Name                 Persistence-M | Bus-Id          Disp.A | Volatile Uncorr. ECC |
| Fan  Temp   Perf          Pwr:Usage/Cap |           Memory-Usage | GPU-Util  Compute M. |
|                                         |                        |               MIG M. |
|=========================================+========================+======================|
|   0  NVIDIA GeForce RTX 4090        Off |   00000000:01:00.0 Off |                  Off |
|  0%   48C    P8             14W /  450W |   16801MiB /  24564MiB |      0%      Default |
|                                         |                        |                  N/A |
+-----------------------------------------+------------------------+----------------------+
                                                                                         
+-----------------------------------------------------------------------------------------+
| Processes:                                                                              |
|  GPU   GI   CI              PID   Type   Process name                        GPU Memory |
|        ID   ID                                                               Usage      |
|=========================================================================================|
|    0   N/A  N/A          746020      C   /usr/bin/python3                       8434MiB |
|    0   N/A  N/A          819263      C   /usr/bin/python3                       8352MiB |
+-----------------------------------------------------------------------------------------+
```
:::
## Supported Architectures

LLMOS works on the following system architectures:

- x86_64
- arm64/aarch64

## Supported Operating Systems

While LLMOS is expected to work on most modern Linux distributions, the team has officially tested and verified the following:

:::info
It’s recommended to turn off `firewalld`. If you keep it enabled, you may need to open additional ports. Check the [Inbound Rules](#inbound-rules-for-llmos-nodes) section for more info.
:::

| Distribution  | Version         |
|---------------|-----------------|
| Ubuntu        | 20.04 LTS or newer |
| RHEL          | 8.5 or newer    |
| SLES/OpenSUSE | 15.3 (Leap) or newer |
| Rocky Linux   | 8.5 or newer    |
| Debian        | 11.0 or newer   |
| Fedora        | 37 or newer     |

## Hardware Requirements

The hardware needs will vary depending on your deployment size. Below are the minimum recommendations:

| Spec             | Minimum Requirement                                                                                           | Recommended Spec             |
|------------------|---------------------------------------------------------------------------------------------------------------|------------------------------|
| CPU              | 8 cores                                                                                                       | 16 cores                     |
| Memory           | 16 GB                                                                                                         | 32 GB                        |
| Root Disk Space  | 100  GB                                                                                                       | 200 GB                       |
| Disk Performance | [5,000+ random IOPS](https://prog.world/is-storage-speed-suitable-for-etcd-ask-fio/) for root disk (SSD/NVMe) | Same as minimum requirements |

### Disk Type

For better performance, always use SSDs for your LLMOS cluster. If you’re using a cloud provider, pick the suitable disk size that gives you the maximum IOPS.

## Networking

LLMOS nodes need to access ports 6443 and 8443 on all nodes. The node should not be using other ports.

LLMOS uses reverse tunneling, meaning the nodes establish outbound connections to the server, and all Kubelet traffic runs through this tunnel.

To use the metrics server, ensure all nodes can communicate with each other on port 10250.

### Inbound Rules for LLMOS Nodes

| Protocol | Port         | Source    | Destination | Description                               |
|----------|--------------|-----------|-------------|-------------------------------------------|
| TCP      | 2379-2380    | Servers   | Servers     | Required for HA setups with embedded etcd |
| TCP      | 6443         | Workers   | Servers     | Kubernetes API Server                     |
| TCP      | 8443         | All nodes | All nodes   | LLMOS dashboard and API Server            |
| UDP      | 8472         | All nodes | All nodes   | For system VXLAN network                  |
| TCP      | 10250        | All nodes | All nodes   | Metrics server                            |
| TCP      | 5001, 6443   | All nodes | All nodes   | Embedded distributed registry (Spegel)    |
| TCP      | 30000-32767  | All nodes | All nodes   | NodePort port range                       |

Usually, all outbound traffic is allowed. Depending on your OS, you may need to adjust the firewall settings.