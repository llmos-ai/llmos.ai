---
sidebar_position: 200
title: FAQ
---

This FAQ is regularly updated to help answer common questions about using LLMOS.

### What's the default path for LLMOS data?

The default path for LLMOS data is `/var/lib/llmos`.

### Where can I find the LLMOS configuration file?

You can find the configuration file at `/etc/llmos/config.yaml`.

### Where can I find the cluster token?

The cluster token is located at `/var/lib/llmos/token`, or you can run the command `llmos get-token`.

### My cluster can't find the GPU driver

LLMOS automatically detects and sets up the NVIDIA container runtime if the NVIDIA driver is present when LLMOS starts.

If you installed the [NVIDIA driver](https://docs.nvidia.com/datacenter/tesla/driver-installation-guide/index.html) after starting LLMOS, restart your machine for it to be detected.

```shell
# Reboot the machine
sudo reboot now
# Check if the NVIDIA driver and GPUs are working after reboot
nvidia-smi
```

### Where can I find the Kubeconfig file?

The Kubeconfig file is at `/etc/llmos/kubeconfig.yaml`.

### How do I reset the admin password?

If you forgot the admin password, here’s how to reset it:

1. Option 1: Ask another admin to set a new password for you in the LLMOS Dashboard under **Users & Authentication > Users**.

2. Option 2: If you're the only admin, follow these steps:

```shell
# Delete the default admin user
kubectl get users.management.llmos.ai -ojson | jq -r '.items[] | select(.spec.username == "admin") | .metadata.name' | xargs -I {} kubectl delete users {}

# Restart the LLMOS API Server to create a new default admin
kubectl rollout restart deployment llmos-operator -n llmos-system

# Get the new password:
kubectl get secret --namespace llmos-system llmos-bootstrap-passwd -o go-template='{{.data.password|base64decode}}{{"\n"}}'
```