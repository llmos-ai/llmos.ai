"use strict";(self.webpackChunkllmos_ai=self.webpackChunkllmos_ai||[]).push([[849],{6164:e=>{e.exports=JSON.parse('{"version":{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Overview","href":"/docs/","docId":"index","unlisted":false},{"type":"link","label":"Quickstart","href":"/docs/quickstart","docId":"quickstart","unlisted":false},{"type":"category","label":"Installation","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Requirements","href":"/docs/installation/requirements","docId":"installation/requirements","unlisted":false},{"type":"link","label":"Bootstrap Options","href":"/docs/installation/","docId":"installation/index","unlisted":false},{"type":"link","label":"LLMOS Configurations","href":"/docs/installation/configurations","docId":"installation/configurations","unlisted":false},{"type":"link","label":"Uninstalling LLMOS","href":"/docs/installation/uninstall","docId":"installation/uninstall","unlisted":false}],"href":"/docs/category/installation"},{"type":"link","label":"Upgrade","href":"/docs/upgrade","docId":"upgrade","unlisted":false},{"type":"category","label":"User Guide","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Nodes","href":"/docs/user_guide/nodes","docId":"user_guide/nodes","unlisted":false},{"type":"link","label":"Machine Learning Clusters","href":"/docs/user_guide/ml_clusters","docId":"user_guide/ml_clusters","unlisted":false},{"type":"category","label":"LLM Management","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Notebooks","href":"/docs/user_guide/llm_management/notebooks","docId":"user_guide/llm_management/notebooks","unlisted":false},{"type":"link","label":"Model Serving","href":"/docs/user_guide/llm_management/serve","docId":"user_guide/llm_management/serve","unlisted":false}],"href":"/docs/category/llm-management"},{"type":"category","label":"Storage","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Volumes","href":"/docs/user_guide/storage/volumes","docId":"user_guide/storage/volumes","unlisted":false},{"type":"link","label":"System Storage","href":"/docs/user_guide/storage/system-storage","docId":"user_guide/storage/system-storage","unlisted":false}],"href":"/docs/category/storage"},{"type":"category","label":"Advanced","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Namespace","href":"/docs/user_guide/advanced/namespace","docId":"user_guide/advanced/namespace","unlisted":false},{"type":"link","label":"Managed Addons","href":"/docs/user_guide/advanced/managed_addon","docId":"user_guide/advanced/managed_addon","unlisted":false}],"href":"/docs/category/advanced"}],"href":"/docs/category/user-guide"},{"type":"category","label":"Users & RBAC","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Users","href":"/docs/user_and_auth/user","docId":"user_and_auth/user","unlisted":false},{"type":"link","label":"Role Templates","href":"/docs/user_and_auth/role-template","docId":"user_and_auth/role-template","unlisted":false},{"type":"link","label":"API Keys","href":"/docs/user_and_auth/api-keys","docId":"user_and_auth/api-keys","unlisted":false}],"href":"/docs/category/users--rbac"},{"type":"link","label":"Settings","href":"/docs/settings","docId":"settings","unlisted":false}]},"docs":{"index":{"id":"index","title":"Overview","description":"LLMOS is an open-source, cloud-native infrastructure software tailored for managing AI applications and large language models(LLMs) on your AI workstation or GPU machines.","sidebar":"tutorialSidebar"},"installation/configurations":{"id":"installation/configurations","title":"LLMOS Configurations","description":"LLMOS provides a set of configuration options that can be set in the /etc/llmos/config.yaml file. If the file doesn\'t exist, you can create it manually.","sidebar":"tutorialSidebar"},"installation/index":{"id":"installation/index","title":"Bootstrap Options","description":"Installation Script","sidebar":"tutorialSidebar"},"installation/requirements":{"id":"installation/requirements","title":"Requirements","description":"Whether you\'re setting up LLMOS on a virtual machine or bare-metal server, each node running LLMOS needs to meet these minimum requirements. These requirements cover LLMOS and its components but don\u2019t include resources needed by the workloads you run.","sidebar":"tutorialSidebar"},"installation/uninstall":{"id":"installation/uninstall","title":"Uninstalling LLMOS","description":"If you installed LLMOS using the installation script, an uninstallation script is automatically generated during installation.","sidebar":"tutorialSidebar"},"quickstart":{"id":"quickstart","title":"Quickstart","description":"This guide will help you quickly launch a LLMOS cluster with default bootstrap options. The installation section covers more details about the bootstrap configuration options.","sidebar":"tutorialSidebar"},"settings":{"id":"settings","title":"Settings","description":"Global Settings","sidebar":"tutorialSidebar"},"upgrade":{"id":"upgrade","title":"Upgrade","description":"LLMOS includes a built-in upgrade check mechanism that automatically checks for new versions every 60 minutes. The upgrade checker settings can be configured on the settings page.","sidebar":"tutorialSidebar"},"user_and_auth/api-keys":{"id":"user_and_auth/api-keys","title":"API Keys","description":"LLMOS support authentication using API keys, each user can create and manage their own API keys through the Account & API Keys page on the top right menu.","sidebar":"tutorialSidebar"},"user_and_auth/role-template":{"id":"user_and_auth/role-template","title":"Role Templates","description":"Role templates are used to create roles with predefined permissions that can be assigned to users. LLMOS currently has two types of role templates:","sidebar":"tutorialSidebar"},"user_and_auth/user":{"id":"user_and_auth/user","title":"Users","description":"LLMOS provides a simple way to manage users and their permissions through the Users & Authentication pages.","sidebar":"tutorialSidebar"},"user_guide/advanced/managed_addon":{"id":"user_guide/advanced/managed_addon","title":"Managed Addons","description":"Managed Addons help manage additional components required for your LLMOS cluster. By default, LLMOS comes with a set of system addons that are enabled out of the box. These system addons include:","sidebar":"tutorialSidebar"},"user_guide/advanced/namespace":{"id":"user_guide/advanced/namespace","title":"Namespace","description":"Namespaces provide a way to isolate groups of resources within a single cluster. Resource names must be unique within a namespace, but can be duplicated across different namespaces. Namespace-based scoping applies only to namespaced objects (e.g., Notebooks, Model Services) and does not impact cluster-wide objects (e.g., Nodes, Storage Classes).","sidebar":"tutorialSidebar"},"user_guide/llm_management/notebooks":{"id":"user_guide/llm_management/notebooks","title":"Notebooks","description":"Notebooks offer a way to run lightweight web-based development environments of JupyterLab, RStudio, and VS Code within your LLMOS cluster, where you can run interactive code, data analysis, and machine learning tasks.","sidebar":"tutorialSidebar"},"user_guide/llm_management/serve":{"id":"user_guide/llm_management/serve","title":"Model Serving","description":"The LLMOS platform provides a streamlined way to serve machine learning models using the ModelService resource. This resource offers a user-friendly interface to configure and manage model serving, leveraging the powerful vLLM serving engine. By specifying parameters like the model name, Hugging Face configurations, resource requirements, and more, users can easily set up and deploy models efficiently and at scale.","sidebar":"tutorialSidebar"},"user_guide/ml_clusters":{"id":"user_guide/ml_clusters","title":"Machine Learning Clusters","description":"A Machine Learning (ML) Cluster provides a distributed computing environment for running machine learning workloads. Built on top of Ray, a unified framework for scaling AI and Python applications, it provides a distributed runtime, parallel processing, and a suite of AI libraries to accelerate your machine learning tasks.","sidebar":"tutorialSidebar"},"user_guide/nodes":{"id":"user_guide/nodes","title":"Nodes","description":"LLMOS node can either be a virtual or physical machines, depending on your cluster. The first node in the cluster is designated as the cluster-init node by default. Additional nodes can be configured as either server nodes or worker nodes.","sidebar":"tutorialSidebar"},"user_guide/storage/system-storage":{"id":"user_guide/storage/system-storage","title":"System Storage","description":"LLMOS provides two built-in storage service:","sidebar":"tutorialSidebar"},"user_guide/storage/volumes":{"id":"user_guide/storage/volumes","title":"Volumes","description":"Volumes provide a persistent storage mechanism that enables workloads to share and retain data even after workloads are restarted or deleted.","sidebar":"tutorialSidebar"}}}}')}}]);