---
sidebar_position: 1
title: Registries
---

The **LLMOS** platform supports private registries for storing models and datasets. Registries provide a secure and centralized way to manage your machine learning assets, making them easily accessible for model services and other applications within your LLMOS cluster.


## Overview

A registry is a private repository used to store models or datasets. The current backend storage only supports object storage solutions, providing scalable and reliable storage for your machine learning assets.

:::note
**Important Requirements:**
- Object storage must have CORS (Cross-Origin Resource Sharing) configured
- Only HTTPS endpoints are supported for security reasons
:::

## Creating a Registry

You can create one or more registries from the **AI Infrastructure Management > Model Management > Registries** page.

### General Configuration

1. **Name**: Enter a unique name for your registry.
2. **Description**: Provide a description that better describes this resource.
3. **Backend Type**: Select **S3** as the storage backend (currently the only supported option).

![registry-create](/img/docs/registry-create.png)

### Configure S3 Backend

When configuring the S3 backend, you need to provide the following information:

1. **Endpoint**: The S3-compatible endpoint URL (e.g., `s3.registry.com:5000`)
   - Must use HTTPS protocol for security
   - Ensure the endpoint is accessible from your LLMOS cluster

2. **Bucket**: The S3 bucket name where your models and datasets will be stored (e.g., `bucket`)

3. **Use Https**: This checkbox is enabled by default and cannot be disabled, as only HTTPS connections are supported.

4. **Secret Name**: Select an existing secret that contains your S3 credentials, or create a new one.
   - The secret should contain your S3 access key and secret key
   - See [Adding S3 Credentials](#adding-s3-credentials) for detailed instructions

## Managing Registries

Once created, registries appear in the registries list with the following information:

- **State**: Shows whether the registry is active and accessible
- **Name**: The registry name you specified
- **Endpoint**: The configured S3 endpoint
- **Bucket**: The associated S3 bucket
- **Default**: Indicates if this is the default registry for the namespace

![registries-list](/img/docs/registry-list.png)

### Registry Actions

For each registry, you can:

- **Edit**: Modify registry configuration
- **Delete**: Remove the registry (ensure no models or datasets are dependent on it)
- **Set as Default**: Make this registry the default for new model and dataset operations

## Using Registries

Once configured, registries can be used to:

1. **Store Models**: Upload and manage machine learning models
2. **Store Datasets**: Organize and version your training and validation datasets

## CORS Configuration

:::warning
**CORS Setup Required**

Your S3-compatible object storage must be configured with appropriate CORS settings to allow LLMOS to access the registry. Without proper CORS configuration, upload and download operations for models and datasets will fail.
:::

Example CORS configuration for your S3 bucket:

```json
[
  {
    "AllowedHeaders": ["*"],
    "AllowedMethods": ["GET", "PUT", "POST", "DELETE", "HEAD"],
    "AllowedOrigins": ["https://your-llmos-domain.com"],
    "ExposeHeaders": ["ETag"]
  }
]
```
