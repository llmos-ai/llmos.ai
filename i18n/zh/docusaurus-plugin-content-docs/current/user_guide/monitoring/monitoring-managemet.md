---
sidebar_position: 3
title: 监控管理
---

启用监控后，您可以通过 **LLMOS Management > Monitoring** 管理额外的 Prometheus 规则、告警以及访问仪表盘。

### 监控管理
- **配置 (Config)**：查看并更新 LLMOS 监控设置。
- **Prometheus 图表**：访问 Prometheus 指标和图表。
- **Grafana**：探索 Grafana 仪表盘。
- **Alertmanager**：查看并管理告警配置。

![monitoring-management](/img/docs/monitoring-default.png)

## ServiceMonitor 和 PodMonitor

`ServiceMonitors` 和 `PodMonitors` 是 [Prometheus Operator](https://github.com/prometheus-operator/prometheus-operator) 创建的自定义资源，用于定义 Prometheus 如何从端点收集指标。这些配置确保 Prometheus 知道从哪里抓取数据。

- **ServiceMonitors**：适用于大多数使用场景，常用于抓取服务端点的指标。
- **PodMonitors**：用于特定的 Pod 级别抓取需求。

更多详情：
- [使用 ServiceMonitors](https://prometheus-operator.dev/docs/developer/getting-started/#using-servicemonitors)
- [使用 PodMonitors](https://prometheus-operator.dev/docs/developer/getting-started/#using-podmonitors)

![monitoring-monitors](/img/docs/monitoring-monitors.png)

## PrometheusRules

`PrometheusRules` 允许您定义规则以生成告警或预计算指标。这些规则会被定期评估。

- **记录规则 (Recording Rules)**：通过组合或转换现有指标创建新指标。适用于预计算复杂查询。
- **告警规则 (Alerting Rules)**：运行查询以检查特定条件。如果查询返回非零值，则触发告警。

更多示例请参考 [Prometheus Rules 文档](https://prometheus-operator.dev/kube-prometheus/kube/developing-prometheus-rules-and-grafana-dashboards/#prometheus-rules)。

![monitoring-prometheus-rules](/img/docs/monitoring-prometheus-rules.png)

## Alertmanager 配置

`Alertmanager` 处理由 Prometheus 发送的告警，执行以下任务：
- **去重**：移除重复告警。
- **分组**：按相似特征组织告警。
- **路由**：将告警发送到合适的渠道，例如邮件、Slack 或 Webhook。
- **静默**：临时禁用告警。
- **跟踪**：监控告警的状态（触发或已解决）。

### 创建 AlertmanagerConfig 资源

要在 Alertmanager 中设置告警接收器和路由：
1. 前往 **LLMOS Management > Monitoring > AlertmanagerConfigs**。
2. 点击 **Create**，填写名称和命名空间。
3. 保存配置。
4. 打开创建的配置，点击 **[Add Receiver](#接收器配置)**：
   - 给接收器命名。
   - 选择通知类型（如 Slack、邮件）。
   - 填写必需字段（如 Slack 的 `api_url` 和 `channel`）。
     ![monitoring-alertconfig-slack](/img/docs/monitoring-alertconfig-slack.png)
5. 点击 **Route** 标签，添加接收器并设置[路由配置](#路由配置)到 AlertmanagerConfig。
6. 保存 AlertmanagerConfig。

**结果：** 当触发告警时，告警会发送到指定的接收器。

:::note
对于一级路由，Prometheus Operator 会自动添加一个默认匹配器：`namespace: <AlertmanagerConfig namespace>`。该匹配器确保告警根据 `AlertmanagerConfig` 的命名空间进行路由。

对于不同命名空间的告警，您可以通过以下两种方式处理告警：

1. **为每个命名空间创建一个 AlertmanagerConfig**
   - 这种方式允许每个命名空间独立管理其告警。告警会路由到相应命名空间的配置。

2. **使用子路由集中处理所有告警**
   - 如果您更倾向于集中管理告警，可以在单个 `AlertmanagerConfig` 的 YAML 文件中配置子路由。子路由可以基于特定匹配器或标签条件处理来自多个命名空间的告警。

选择与您的操作和组织需求最匹配的方法。

:::

![monitoring-alertconfigs](/img/docs/monitoring-alertconfigs.png)

### AlertmanagerConfig YAML 示例

以下是一个使用 Slack 的 `AlertmanagerConfig` 资源示例：

```yaml
apiVersion: monitoring.coreos.com/v1alpha1
kind: AlertmanagerConfig
metadata:
   labels:
      llmos.ai/alertmanagerconfig: "true"
   name: config-example
   namespace: llmos-monitoring-system
spec:
   receivers:
      - name: llmos-slack
        slackConfigs:
        - apiURL:
             key: api_url # custom key name
             name: $slack-secret # your secret name that contains the slack api_url
          channel: '#alarm-test'
          httpConfig: {}
          sendResolved: true
          text: |-
             {{ define "cluster" }}{{ .ExternalURL | reReplaceAll ".*alertmanager\\.(.*)" "$1" }}{{ end }}
             {{ define "slack.myorg.text" }}
             {{- $root := . -}}
             {{ range .Alerts }}
               *Alert:* {{ .Annotations.summary }} - `{{ .Labels.severity }}`
               *Cluster:* {{ template "cluster" $root }}
               *Description:* {{ .Annotations.description }}
               *Graph:* <{{ .GeneratorURL }}|:chart_with_upwards_trend:>
               *Runbook:* <{{ .Annotations.runbook_url }}|:spiral_note_pad:>
               *Details:*
                 {{ range .Labels.SortedPairs }} - *{{ .Name }}:* `{{ .Value }}`
                 {{ end }}
             {{ end }}
             {{ end }}
   route:
      groupInterval: 5m
      groupWait: 30s
      receiver: llmos-slack
      repeatInterval: 4h
```

## 接收器配置

接收器决定通知的发送位置。它们可以是原生（如 Slack、邮件）或自定义（如使用 Webhook）的方式。

### UI 支持的接收器
- **Slack**：需要 Webhook URL 和频道名称。
- **Email**：需要 SMTP 服务器详情和收件人地址。
- **PagerDuty**：需要集成密钥。
- **Opsgenie**：需要 API 密钥和响应者详细信息。
- **Webhook**：支持通用 Webhook URL。
- **Custom**：对于不受支持的系统，可以使用 YAML 手动配置。

更多关于每种接收器配置的详细信息，请参考 Prometheus 的[接收器集成设置](https://prometheus.io/docs/alerting/latest/configuration/#receiver-integration-settings)。

#### 示例：Slack 接收器

| 字段                     | 描述                                                                                      |
|--------------------------|------------------------------------------------------------------------------------------|
| **Webhook URL**          | 包含 Slack Webhook URL 的密钥 ([操作指南](https://api.slack.com/messaging/webhooks))       |
| **Default Channel**      | 频道名称（例如 `#alerts`）。                                                              |
| **Proxy URL**            | 用于 Webhook 通知的代理 URL。                                                              |
| **Send Resolved Alerts** | 启用后会在告警解决时发送通知。                                                              |
| **Text Template**        | 在使用前会模板扩展的字符串。                                                              |

## 路由配置

路由定义告警如何被处理并转发到各自的接收器。它们指定分组、等待间隔以及基于标签的匹配规则来进行告警路由。

### 接收器

每个路由必须引用一个预先配置的 [接收器](#接收器配置)。在定义路由之前，确保接收器已设置完成。

![monitoring-route-receiver](/img/docs/monitoring-route-receiver.png)

### 分组

分组决定在将告警发送给接收器之前如何将告警进行批处理。

| 字段                | 默认值 | 描述                                                                                                                                                           |
|---------------------|---------|----------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Group By**        | N/A     | 用于分组告警的标签列表。标签必须唯一。特殊标签 `"..."` 会按所有可能的标签进行分组，但它必须是列表中的唯一元素。                                                 |
| **Group Wait**      | 30s     | 在发送第一条通知前缓冲同一分组告警的时间。                                                                                                                        |
| **Group Interval**  | 5m      | 在发送初始通知后，新增告警加入现有分组前的等待时间。                                                                                                              |
| **Repeat Interval** | 4h      | 在已发送的告警重新发送前的等待时间。                                                                                                                             |

![monitoring-route-grouping](/img/docs/monitoring-route-grouping.png)

更多详情，请参阅 Prometheus Operator 文档中的[告警路由](https://prometheus-operator.dev/docs/developer/alerting/)。

### 匹配规则

路由可以使用标签匹配器或正则表达式匹配器过滤告警。

#### 标签匹配（Match）
使用 **Match** 字段定义键值对，根据精确标签匹配过滤告警。YAML 示例：

```yaml
match:
        [ <labelname>: <labelvalue>, ... ]
```

#### 正则表达式（Match Regex）
使用 **Match Regex** 字段进行基于正则表达式的过滤。YAML 示例：

```yaml
match_re:
  [ <labelname>: <regex>, ... ]
```

在路由的 UI 中，为 **Match** 或 **Match Regex** 字段添加键值对会自动生成对应的 YAML。

![monitoring-route-matchers](/img/docs/monitoring-route-matchers.png)

## 告警测试验证

启用上述 [Alertmanager 配置](#验证告警)后，您可以创建一个 `PrometheusRule` 对象来验证配置是否正确。

确保对象的标签与 Prometheus 对象的 `spec.ruleSelector` 匹配（**LLMOS Monitoring** 使用标签 `release: llmos-monitoring`）。

```shell
kubectl apply -f - <<EOF
apiVersion: monitoring.coreos.com/v1
kind: PrometheusRule
metadata:
  name: prometheus-example-rules
  namespace: llmos-monitoring-system
  labels:
    release: llmos-monitoring
    role: alert-rules-testing
spec:
  groups:
  - name: ./example.rules
    rules:
    - alert: ExampleAlert
      expr: vector(1)
      labels:
        namespace: llmos-monitoring-system # namespace should matches the namespace of the AlertmanagerConfig object
EOF
```

为演示目的，上述 `PrometheusRule` 对象始终触发 `ExampleAlert` 告警。接下来，验证所有配置是否正常工作：
1. 前往 **LLMOS Management > Monitoring**，打开 Prometheus Web 界面并导航到 **Alerts** 页面，确认 `ExampleAlert` 告警已触发。
2. 打开 Alertmanager Web 界面，确认显示一个活动告警。
3. 验证您配置的 [接收器](#路由配置) 是否接收到告警。

以下是 Slack 告警通知的示例：

![monitoring-slack-alerts](/img/docs/monitoring-slack-alerts.png)

## 参考
- [Prometheus Operator API 参考](https://prometheus-operator.dev/docs/api-reference/api/)
- [告警路由](https://prometheus-operator.dev/docs/developer/alerting/)
