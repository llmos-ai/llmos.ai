---
sidebar_position:  3
title:  Monitoring Management
---

With monitoring enabled, you can manage additional prometheus rules, alerts, and access dashboards through **LLMOS Management > Monitoring**.

### Monitoring Management
- **Config**: View and update LLMOS monitoring settings.
- **Prometheus Graph**: Access Prometheus metrics and graphs.
- **Grafana**: Explore Grafana dashboards.
- **Alertmanager**: Manage alert configurations.

![monitoring-management](/img/docs/monitoring-default.png)

---

## ServiceMonitor and PodMonitor

`ServiceMonitors` and `PodMonitors` define how Prometheus collects metrics from endpoints. These configurations ensure Prometheus knows what to scrape.

- **ServiceMonitors**: Best for most use cases; commonly used.
- **PodMonitors**: Used for specific pod-level scraping needs.

For more details:
- [Using ServiceMonitors](https://prometheus-operator.dev/docs/developer/getting-started/#using-servicemonitors)
- [Using PodMonitors](https://prometheus-operator.dev/docs/developer/getting-started/#using-podmonitors)

![monitoring-monitors](/img/docs/monitoring-monitors.png)


## PrometheusRules

`PrometheusRules` let you define rules for generating alerts or precomputing metrics. These rules are evaluated at regular intervals.

- **Recording Rules**: Create new metrics by combining or transforming existing ones. Useful for precomputing complex queries.
- **Alerting Rules**: Run queries to check for specific conditions. If a query returns a non-zero value, an alert is triggered.

For examples, check the [Prometheus Operator documentation](https://prometheus-operator.dev/kube-prometheus/kube/developing-prometheus-rules-and-grafana-dashboards/#prometheus-rules).

![monitoring-prometheus-rules](/img/docs/monitoring-prometheus-rules.png)

## Alertmanager Configurations

The `Alertmanager` processes alerts sent by Prometheus, handling tasks like:
- **Deduplication**: Removing duplicate alerts.
- **Grouping**: Organizing alerts by similar characteristics.
- **Routing**: Sending alerts to the right channels like email, Slack, or webhooks.
- **Silencing**: Temporarily disabling alerts.
- **Tracking**: Monitoring the status of alerts (firing or resolved).

### Creating Alertmanager Configurations

To set up alert routing in Alertmanager:
1. Go to **LLMOS Management > Monitoring > Alertmanager Configs**.
2. Click **Create** and provide a name and namespace.
3. Save the configuration.
4. Open the created configuration and add a receiver:
    - Name the receiver.
    - Choose a notification type (e.g., Slack, email).
    - Fill in the required fields (e.g., webhook URL for Slack).
5. Save the receiver.

**Result:** Alerts can now be sent to your specified receivers.


## Receiver Configuration

Receivers determine where notifications are sent. They can be native (e.g., Slack, email) or custom (e.g., using webhooks).

### Supported Receivers in UI
- **Slack**: Requires a webhook URL and channel name.
- **Email**: Needs SMTP server details and a recipient address.
- **PagerDuty**: Requires an integration key.
- **Opsgenie**: Needs an API key and responder details.
- **Webhook**: Supports generic webhook URLs.
- **Custom**: Configure manually with YAML for unsupported systems.

#### Example: Slack Receiver

| Field                    | Description                                                                               |
|--------------------------|-------------------------------------------------------------------------------------------|
| **Webhook URL**          | Slack webhook URL ([instructions](https://get.slack.help/hc/en-us/articles/115005265063)) |
| **Default Channel**      | Channel name (e.g., `#alerts`).                                                           |
| **Proxy URL**            | Proxy for the webhook notifications.                                                      |
| **Send Resolved Alerts** | Enable to notify when an alert is resolved.                                               |


### Routes in Alertmanager

Routes decide how alerts are forwarded. They allow:
- Sending alerts to multiple receivers.
- Grouping alerts by specific labels.
- Defining escalation policies using nested routes.

To configure a route:
1. Edit the Alertmanager configuration.
2. Add a new route and assign a receiver.
3. Set conditions for the route, like matching labels.
4. Save the configuration.

### Trusted Certificates for Notifiers

To use a trusted CA for notifications:
1.	Add your CA secret to the `llmos-monitoring-system` namespace.
2.	Edit the LLMOS Monitoring addon settings.
3.	In the Alerting section, add your secret to the **Additional Secrets**.
4.	Save the configuration.

**Result:** Alertmanager will use your trusted CA for secure communication.

Here’s the refined and clear version of the Route Configuration section:

## Route Configuration

Routes define how alerts are processed and forwarded to their respective receivers. They specify grouping, waiting intervals, and label-based matching for alert routing.

### Labels and Annotations

- **Labels**: Used for routing notifications. Examples include:
    - The name of a container.
    - The team responsible for resolving the alert.
- **Annotations**: Provide additional context that does not affect routing, such as:
    - A runbook URL.
    - An error message or troubleshooting guide.

### Receiver

Each route must reference a pre-configured [receiver](#receiver-configuration). Ensure the receiver is set up before defining a route.

### Grouping

Grouping determines how alerts are batched before sending them to receivers.

| Field               | Default | Description                                                                                                                                                           |
|---------------------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Group Wait**      | 30s     | The time to buffer alerts of the same group before sending the first notification.                                                                                    |
| **Group Interval**  | 5m      | The time to wait before sending additional alerts added to an existing group after the initial notification has been sent.                                            |
| **Repeat Interval** | 4h      | The time to wait before re-sending a notification for an alert that has already been sent.                                                                            |

For more details, see the [Alerting Routes](https://prometheus-operator.dev/docs/developer/alerting/) from the Prometheus Operator documentation.

### Matching

Routes can filter alerts using label matchers or regex matchers.

#### Match
Use the **Match** field to define key-value pairs that filter alerts based on exact label matches. Example in YAML:

```yaml
match:
  [ <labelname>: <labelvalue>, ... ]
```

#### Match Regex

Use the **Match Regex** field for regex-based filtering. Example in YAML:

```yaml
match_re:
  [ <labelname>: <regex>, ... ]
```

In the route UI, adding key-value pairs to the **Match** or **Match Regex** fields will automatically generate the corresponding YAML.
