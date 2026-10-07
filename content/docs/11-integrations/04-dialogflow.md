---
title: "Dialogflow"
description: "Connect a Google Dialogflow agent to an EngageOne inbox so it answers customers first, then hands the conversation to your team."
---

The Dialogflow integration lets a Dialogflow ES agent answer customers in an EngageOne inbox. When the bot can't help, it hands the conversation to your team.

## How it works

1. A customer writes to an inbox that has Dialogflow connected.
2. The new conversation starts as **Pending**, so it waits for the bot instead of going to agents.
3. EngageOne sends each customer message to your Dialogflow agent and posts the agent's responses back as replies.
4. When Dialogflow returns a handoff action, the conversation becomes **Open** and your team takes over. The bot then stops replying in that conversation.

## Before you start

You need:

- The **Administrator** role in EngageOne.
- A Dialogflow ES agent in a Google Cloud project.
- A Google Cloud service account that can call Dialogflow, for example with the **Dialogflow API Client** role, and a JSON key file for it.

To create the key file in Google Cloud:

1. Open your project in the Google Cloud console.
2. Go to **IAM & Admin → Service Accounts** and create a service account.
3. Give it a Dialogflow role that can detect intents.
4. Open the service account, go to **Keys** and add a new **JSON** key. The file downloads to your computer.

> **Important:** The key file gives access to your Google Cloud project. Keep it private and don't share it in chats or tickets.

## Connect Dialogflow to an inbox

1. Go to **Settings → Integrations** and click **Configure** on the **Dialogflow** card.
2. Click **Add a new hook**.
3. Fill in the form:

| Field | What to enter |
| --- | --- |
| **Dialogflow Project ID** | The ID of the Google Cloud project that holds your agent. |
| **Dialogflow Project Key File** | Open the JSON key file in a text editor and paste its full contents. |
| **Dialogflow Region** | Where your agent lives. Use **Global - Default** unless your agent is in a specific region, such as **EU-W1 - St. Ghislain, Belgium** or **AS-NE1 - Tokyo, Japan**. |
| **Language Code** | The language to send to Dialogflow, such as **English (US)**. Choose **Auto-detect from contact** to use the contact's language when it's supported. |
| **Select Inbox** | The inbox the bot should answer. |

4. Click **Create**.

Each hook connects one inbox. Repeat these steps to connect Dialogflow to more inboxes, and connect each inbox only once. The hooks list shows which inbox each one is connected to.

> **Note:** If the inbox also has an agent bot, only one bot should answer. See [Agent bots](/docs/advanced-features/agent-bots).

## Hand the conversation to an agent

To hand over, add a **Custom payload** response to the Dialogflow intent that should transfer the chat:

```json
{
  "action": "handoff"
}
```

When this intent matches, the conversation moves from **Pending** to **Open** and appears for your agents.

To close the conversation from the bot instead, use:

```json
{
  "action": "resolve"
}
```

> **Tip:** Add a text response before the handoff payload, such as "Let me connect you with our team." The customer sees it before the agent joins.

## Send rich messages

A **Custom payload** without an `action` is sent to the customer as a message. You can use it for interactive messages, such as buttons, on channels that support them:

```json
{
  "content": "What can we help you with?",
  "content_type": "input_select",
  "content_attributes": {
    "items": [
      { "title": "Track my order", "value": "track_order" },
      { "title": "Talk to a person", "value": "agent" }
    ]
  }
}
```

When the customer picks an option, its `value` is sent to Dialogflow as their next message. See [Interactive messages](/docs/developers/interactive-messages) for the supported formats.

## If the bot stops replying

- The bot only replies while a conversation is **Pending**. Once it's **Open**, agents handle it.
- If Google rejects the key, for example because it was deleted or lost its role, EngageOne turns the hook off and emails your administrators. Create a new key and add the hook again.

## Remove Dialogflow from an inbox

1. Go to **Settings → Integrations → Dialogflow**.
2. Click **Delete** next to the inbox and confirm with **Yes, Delete**.

## Related articles

- [Agent bots](/docs/advanced-features/agent-bots)
- [Interactive messages](/docs/developers/interactive-messages)
- [Bot reports](/docs/reports/bot-reports)
- [Inboxes and channels explained](/docs/account-setup/inboxes-and-channels-explained)
