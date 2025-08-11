---
sidebar_position: 2
title: Models
---

The **LLMOS** platform provides comprehensive model management capabilities, allowing you to store, organize, and manage machine learning models in registries. Models can be stored in private registries and cached locally for faster deployment and improved performance.

![models-list](/img/docs/model-list.png)

## Overview

Models in LLMOS serve as a centralized way to manage your machine learning assets. You can:

- **Store Models in Registries**: Upload and organize model files in private registries
- **File Management**: View, upload, and download model files with an intuitive interface
- **Upload Commands**: Generate scripts for uploading models from applications like [Notebooks](../notebooks.md)
- **Local Model Caching**: Create local model copies for faster model service deployment
- **Version Control**: Local model supports version control

## Creating a Model

You can create models from the **AI Infrastructure Management> Model Management > Models** page.

### General Configuration

1. **Namespace**: Choose the namespace for the model.
2. **Name**: Enter a unique name for your model.
3. **Description**: Provide a description that better describes this model.
4. **Registry**: Select the registry where the model will be stored.

![model-create-general](/img/docs/model-create.png)

## Managing Model Files

Once a model is created, you can manage its files through the model details page.

### File Operations

The model file management interface provides several operations:

- **View Files**: Browse the model's file structure and contents
- **Upload Files**: Add new files to the model
- **Download Files**: Download individual files or entire folders
- **Create Folders**: Organize files in a hierarchical structure
- **Remove Files**: Delete unnecessary files

![model-files](/img/docs/model-files.png)

### File Upload Methods

#### Direct Upload

You can upload files directly through the web interface:

1. Click **Upload File** in the model files view
2. Select files from your local system
3. Choose the destination folder within the model
4. Click **Upload** to transfer the files

#### Command-Line Upload

For programmatic uploads or integration with development workflows, LLMOS provides upload commands:

1. Click **Generate Upload Command** in the model files view
2. Choose between **File** or **Folder** upload mode
3. Copy the generated Python script
4. Run the script in your development environment (e.g., [Notebooks](../notebooks.md))

![model-upload-command](/img/docs/model-upload-command.png)

:::note
**API Token Security**

The API key will be expired in 30 minutes. You can visit the [API Keys](../../user_and_auth/api-keys.md) page to manage your own API key for better security.
:::

## Local Models

Local models are cached copies of registry-stored models that are pre-downloaded to local storage. This feature significantly improves model service startup times by eliminating the need to download model files during deployment.

![local-models](/img/docs/local-model-list.png)

### Prerequisites

:::warning
**Ceph Storage Requirement**

Local model functionality depends on [Ceph Storage](../storage/system-storage.md). You must enable and configure Ceph Storage before using local models.
:::

### Creating a Local Model

To create a local model from an existing registry model:

1. Navigate to the model details page
2. Click **Create Local Model**
3. Configure the local model settings:
   - **New Version**: Specify the version for the local model
   - **Registry**: The source registry (automatically filled)
   - **Namespace**: Choose the target namespace
4. Click **Create** to start the local caching process

![local-models](/img/docs/local-model-create.png)

### Local Model Version Control

Local models support version control, allowing you to maintain multiple versions of the same model. This is particularly useful when you need to roll back to a previous version or compare different model iterations.

![local-models](/img/docs/local-model-version.png)

### Local Model Benefits

- **Faster Deployment**: Model files are already available locally
- **Reduced Network Traffic**: No need to download from registry during deployment
- **Improved Reliability**: Less dependency on external registry availability
- **Better Performance**: Eliminates download time from model service startup

### Using Local Models in Model Services

When creating a [Model Service](../modelservice.md), you can select local models as the model source.
