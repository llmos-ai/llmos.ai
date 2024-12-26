---
sidebar_position: 1
title: GPU 设备
---

**GPU 设备**页面显示了 LLMOS 集群中所有可用的 GPU 设备。当添加新 GPU 时，它会被自动检测并列出在此页面中。

:::info
当前支持的 GPU：

:white_check_mark: Nvidia CUDA

未来计划支持：
- [ ] AMD ROCm
- [ ] 昇腾 CANN
- [ ] 寒武纪 MLU
- [ ] 海光 DCU
:::

![gpu-devices](/img/docs/gpu-devices.png)

## GPU 设备详细信息

**GPU 设备详细信息**页面提供了集群中每个 GPU 的具体信息：

- **设备 ID**：GPU 的唯一标识符。
- **厂商**：GPU 的制造商。
- **设备名称**：GPU 的产品名称。
- **VRAM**： GPU 可用的显存大小。
- **vGPU**：设备可以创建的 vGPU 最大实例数。
- **设备索引**：GPU 的 PCIe 总线索引。
- **状态**：GPU 的当前状态。

![gpu-device-details](/img/docs/gpu-device-details.png)

## 监控 GPU 设备

启用 [**LLMOS 监控**](../monitoring/enable-monitoring) 后，GPU 指标会被自动收集，允许您实时监控 GPU 的性能和利用率。

要查看 GPU 指标，请访问 GPU 设备详细信息页面上的 **Metrics** 标签。

![gpu-device-monitoring-metrics](/img/docs/gpu-device-monitoring-metrics.png)

### GPU 指标

以下是用于监控 GPU 设备的可用指标：

| **指标**                        | **描述**                                       |
|---------------------------------|----------------------------------------------|
| **GPU 平均温度**                 | 选定周期内 GPU 的平均温度。                             |
| **GPU 总功耗**                   | 选定周期内 GPU 消耗的总功率。                            |
| **GPU 利用率**                   | GPU 功率的使用百分比。通常游戏类的任务时为 60-90%，重负载任务时为 100%。 |
| **GPU 内存复制利用率**           | 主机与 GPU 之间复制数据的时间百分比。                        |
| **VRAM 利用率**                  | GPU 内存的使用百分比。                                |
| **VRAM 使用量**                  | 实际使用的 GPU 内存量。                               |
| **GPU SM 时钟**                  | GPU 核心的当前时钟速度。                               |
| **GPU 编码器利用率**             | GPU 编码器的使用百分比。                               |
| **GPU 解码器利用率**             | GPU 解码器的使用百分比。                               |
