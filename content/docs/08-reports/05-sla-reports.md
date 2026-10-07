---
title: "SLA reports"
description: "Track your EngageOne SLA hit rate and misses, filter by policy, inbox, agent, team or label, see which targets were missed and download a CSV."
---

The SLA report shows how often your team meets the response and resolution targets in your SLA policies, and which conversations missed them.

## Before you start

- SLA reports are available on plans that include SLA policies.
- You need at least one SLA policy, and it must be applied to conversations. See [SLA policies](/docs/advanced-features/sla-policies).
- Only administrators can open the SLA report.

## Open the SLA report

1. Go to **Reports → SLA**.
2. Choose a date range at the top of the page. The report shows the last 7 days by default.
3. Optionally, click **Add filter** to narrow the results.

The date range uses the date the SLA policy was applied to each conversation.

## Summary metrics

| Metric | Meaning |
| --- | --- |
| **Hit Rate** | Share of SLA-applied conversations that met every target. It's calculated as (conversations with an SLA − conversations with a miss) ÷ conversations with an SLA × 100. It shows 100% when there are no misses. |
| **Number of Misses** | Number of conversations that missed at least one target in the period. |
| **Number of Conversations** | Number of conversations that had an SLA policy applied in the period. |

A conversation that is still open but has already missed a target counts as a miss.

## Filters

Click **Add filter** and choose one or more of:

| Filter | Use it to |
| --- | --- |
| **SLA Policy** | Check one policy, for example your VIP policy. |
| **Inbox** | Compare channels. |
| **Agent** | See misses for conversations assigned to an agent. |
| **Team** | See misses for a team. |
| **Label** | Focus on conversations with a label, such as `billing`. |

Click **Clear all** to remove every filter.

## Conversations that missed their SLA

Below the metrics, a table lists every conversation that missed a target:

| Column | Meaning |
| --- | --- |
| **Conversation** | The conversation number, the contact's name and any labels. Click the number to open the conversation. |
| **Policy** | The SLA policy applied to it. |
| **Agent** | The agent assigned to the conversation, or **---** if nobody was assigned. |

Click **View Details** on a row to see which targets were missed:

| Target | Missed when |
| --- | --- |
| **First response time** | The first reply came later than the policy allows. |
| **Next response time** | A follow-up reply came late. A conversation can miss this more than once. |
| **Resolution time** | The conversation wasn't resolved in time. |

The table shows conversations with misses only. Conversations that met every target are counted in **Hit Rate** but aren't listed.

## Download SLA data

1. Set the date range and filters you want.
2. Click **Download SLA reports**.

You get a CSV file of the conversations that missed their SLA, with these columns:

| Column | Contents |
| --- | --- |
| **Conversation ID** | The conversation number. |
| **SLA Policy** | The policy that was missed. |
| **Assignee** | The assigned agent. |
| **Team** | The assigned team. |
| **Inbox** | The inbox the conversation came in through. |
| **Labels** | The conversation's labels. |
| **Link to the Conversation** | A direct link to open it in EngageOne. |
| **Breached Events** | The targets that were missed. |

> **Tip:** Agents can also get an email or push notification when a conversation misses an SLA. They turn these on in their [profile notification preferences](/docs/getting-started/profile-and-notifications).

## Improve your hit rate

- **Many first response misses** – check that enough agents are online during busy hours, and review [assignment and agent capacity](/docs/advanced-features/assignment-and-agent-capacity).
- **Many next response misses** – conversations may be waiting after the first reply. Use conversation filters to find open conversations waiting on your team.
- **Many resolution misses** – the target may be too short for complex issues, or conversations stay open after the customer is helped. Resolve conversations when the work is done.
- **Misses only outside working hours** – check whether your SLA policy should count business hours only.

## Related articles

- [SLA policies](/docs/advanced-features/sla-policies)
- [Conversation, agent, inbox, team and label reports](/docs/reports/conversation-agent-team-reports)
- [Assignment and agent capacity](/docs/advanced-features/assignment-and-agent-capacity)
- [Conversation filters](/docs/features/conversation-filters)
