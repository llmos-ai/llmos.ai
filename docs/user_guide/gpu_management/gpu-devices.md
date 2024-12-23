---
sidebar_position: 1
title: GPU Devices
---

The **GPU Devices** page shows all GPU devices available in the LLMOS cluster. When a new GPU is added, it is automatically detected and listed on this page.

:::info
Currently supported GPUs:

:white_check_mark: Nvidia CUDA

Planned future support:
- [ ] AMD ROCm
- [ ] Ascend CANN
- [ ] Cambricon MLU
- [ ] HYGON DCU
:::

![gpu-devices](/img/docs/gpu-devices.png)

## GPU Device Details

The **GPU Device Details** page provides specific information about each GPU in the cluster:

- **Device ID**: A unique identifier for the GPU.
- **Vendor**: The manufacturer of the GPU.
- **Device Name**: The product name of the GPU.
- **VRAM**: Total video random-access memory available.
- **vGPU**: Number of virtual GPU instances the device can create.
- **Device Index**: The PCIe bus index of the GPU.
- **Status**: Current status of the GPU.

![gpu-device-details](/img/docs/gpu-device-details.png)

## Monitoring GPU Devices

After enabling [**LLMOS Monitoring**](../monitoring/enable-monitoring), GPU metrics are automatically collected, allowing you to monitor performance and utilization in real time.

To view GPU metrics, go to the **Metrics** tab on the GPU Device Details page.

![gpu-device-monitoring-metrics](/img/docs/gpu-device-monitoring-metrics.png)

### GPU Metrics

Below are the metrics available for monitoring GPU devices:

| **Metric**                      | **Description**                                                                    |
|---------------------------------|------------------------------------------------------------------------------------|
| **GPU Average Temperature**     | The average temperature of the GPU during the selected period.                     |
| **GPU Power Total**             | Total power consumed by the GPU during the selected period.                        |
| **GPU Utilization**             | Percentage of GPU power in use. Typically 60–90% for gaming, 100% for heavy tasks. |
| **GPU Memory Copy Utilization** | Percentage of time spent copying data between the host and the GPU.                |
| **VRAM Utilization**            | Percentage of the GPU's memory being used.                                         |
| **VRAM Used**                   | The actual amount of GPU memory in use.                                            |
| **GPU SM Clocks**               | Current clock speed of the GPU cores.                                              |
| **GPU Encoder Utilization**     | Percentage of the GPU's encoder in use.                                            |
| **GPU Decoder Utilization**     | Percentage of the GPU's decoder in use.                                            |