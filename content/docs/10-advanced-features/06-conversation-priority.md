---
title: "Conversation priority"
description: "Mark EngageOne conversations as urgent, high, medium or low, sort and filter by priority, and set it automatically with automations and macros."
---

Priority shows your team which conversations to handle first.

## Priority levels

| Priority | Use it for |
| --- | --- |
| **Urgent** | Outages, payment failures or anything that can't wait |
| **High** | Important customers or time-sensitive requests |
| **Medium** | Normal requests that need attention today |
| **Low** | Questions that can wait |
| **None** | No priority set. This is the default. |

Conversations with a priority show a small priority icon on their card in the conversation list.

## Set the priority of a conversation

**From the conversation sidebar**

1. Open the conversation.
2. In the right sidebar, open **Conversation Actions**.
3. Under **Priority**, choose a level.

**From the conversation list**

1. Right-click a conversation card.
2. Hover over **Priority** and choose a level.

**From the command bar**

1. Open a conversation and press **Cmd + K** (Mac) or **Ctrl + K** (Windows).
2. Choose **Assign priority**, then pick a level.

To clear the priority, choose **None**.

## Sort by priority

1. Open the sort and view options above the conversation list.
2. Under **Order by**, choose one of:
   - **Priority: Highest first**
   - **Priority: Lowest first**
   - **Priority: Highest first, Created: Oldest first**

The last option is a good default for busy teams: urgent work rises to the top, and within each level the oldest conversations come first.

## Filter by priority

1. Click the filter button above the conversation list.
2. Click **Add filter** and choose **Priority**.
3. Pick an operator and one or more levels, for example **Urgent** and **High**.
4. Apply the filter.

Save the filter as a folder to keep an "Urgent queue" one click away. See [Conversation filters](/docs/features/conversation-filters).

## Set priority automatically

### With an automation

1. Go to **Settings → Automation → Create Automation**.
2. Choose an event, such as **Conversation Created** or **Message Created**.
3. Add conditions, for example **Message Content** contains "refund" or **Inbox** equal to "VIP Support".
4. Under **Actions**, choose **Change Priority** and pick a level.
5. Click **Create**.

You can also use **Priority** as a condition in automation rules, for example to assign every urgent conversation to a senior team.

### With a macro

Add the **Change Priority** action to a macro so agents can set priority together with other steps, such as adding a label and assigning a team, in one click. See [Macros](/docs/features/macros).

### With the API

Bots and integrations can set priority through the API:

```bash
# api_access_token is the technical name of EngageOne's access token header
curl -X POST "https://<your-engageone-domain>/api/v1/accounts/<account_id>/conversations/<conversation_id>/toggle_priority" \
  -H "Content-Type: application/json" \
  -H "api_access_token: <your_access_token>" \
  -d '{"priority": "urgent"}'
```

Use `urgent`, `high`, `medium` or `low`. Get a token as described in [Access tokens](/docs/developers/access-tokens).

## Related articles

- [Conversation filters](/docs/features/conversation-filters)
- [Automations](/docs/features/automations)
- [Macros](/docs/features/macros)
- [SLA policies](/docs/advanced-features/sla-policies)
