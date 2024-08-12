---
sidebar_position: 1
title: LLMOS Configurations
---

LLMOS provides a set of configuration options that can be set in the `/etc/llmos/config.yaml` file, create it manually if it does not exist.

```shell
## e.g., minimum cluster-init node configuration
mkdir -p /etc/llmos
cat > /etc/llmos/config.yaml << EOF
role: cluster-init
token: mytoken
EOF
```

### Example of Full Configurations

```yaml
########################################################
# The below parameters apply to cluster-init role only #
########################################################

# The Kubernetes version to be installed. This is default to use the latest stable k3s version
# if not specified.
kubernetesVersion: v1.29.7+k3s1

# The LLMOS operator version to be installed or a channel with "latest" or "dev"
llmosOperatorVersion: v0.1.0

# Values set on the LLMOS Operator Helm chart. Refer to
# https://github.com/llmos-ai/llmos-operator/blob/main/deploy/charts/llmos-operator/values.yaml
# for possible values.
operatorValues:
  # Below are the default values set
  operator:
      apiserver:
        replicaCount: 1

# Addition SANs (hostnames) to be added to the generated TLS certificate that
# served on port 6443.
tlsSans:
- additionalhostname.example.com

# Generic commands to run before bootstrapping the node.
preInstructions:
  - name: something
    # This image will be extracted to a temporary folder and
    # set as the current working dir. The command will not run
    # contained or chrooted, this is only a way to copy assets
    # to the host. This is parameter is optional
    image: custom/image:1.1.1
    # Environment variables to set
    env:
    - FOO=BAR
    # Program arguments
    args:
    - arg1
    - arg2
    # Command to run
    command: /bin/dosomething
    # Save output to /var/lib/llmos/plan/plan-output.json
    saveOutput: false

# Generic commands to run after bootstrapping the node.
postInstructions:
  - name: something
    env:
    - FOO=BAR
    args:
    - arg1
    - arg2
    command: /bin/dosomething
    saveOutput: false

# Custom Kubernetes resources that will be created once LLMOS operator is bootstrapped
resources:
- kind: ConfigMap
  apiVersion: v1
  metadata:
    name: random
  data:
    key: value

# Contents of the registries.yaml that will be used by k3s/RKE2. The structure
# is documented at https://rancher.com/docs/k3s/latest/en/installation/private-registry/
registries: {}

# The default registry used for all llmos-operator container images. For more information
# refer to https://github.com/llmos-ai/llmos-operator/blob/991809f8c480185bc977edd2ed7a2da54749f886/deploy/charts/llmos-operator/values.yaml#L7-L17
globalImageRegistry: someprefix.example.com:5000

# Advanced: The system agent installer image used for Kubernetes
runtimeInstallerImage: ...

# Advanced: The system agent installer image used for LLMOS operator
llmosInstallerImage: ...


###########################################
# The below parameters apply to all roles #
###########################################

# The URL for a node to join an LLMOS cluster.
server: https://server-url:6443

# A shared secret to join nodes to the cluster
token: mytoken

# The role of this node.  Every cluster must start with one node as role=cluster-init.
# After that nodes can be joined using the server role for control-plane nodes and
# agent role for worker only nodes.  The server/agent terms correspond to the server/agent
# terms in k3s and RKE2
role: cluster-init,server,agent
# The Kubernetes node name that will be set
nodeName: custom-hostname
# The IP address that will be set in Kubernetes for this node
address: 123.123.123.123
# The internal IP address that will be used for this node
internalAddress: 123.123.123.124
# Taints to apply to this node upon creation
taints:
- dedicated=special-user:NoSchedule
# Labels to apply to this node upon creation
labels:
- key=value

# Advanced: Arbitrary configuration that will be placed in /etc/rancher/k3s/config.yaml.d/40-llmos.yaml
# or /etc/rancher/rke2/config.yaml.d/40-llmos.yaml
extraConfig: {}
```
