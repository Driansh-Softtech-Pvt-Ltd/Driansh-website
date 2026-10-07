---
title: "Slack"
description: "Post new EngageOne conversations to a Slack channel, reply to customers from Slack threads and add private notes with note:."
---

The Slack integration posts your incoming conversations to a Slack channel, so your team can follow them and, if you choose, reply without leaving Slack.

## Before you start

- You need the **Administrator** role in EngageOne.
- You need permission to add apps to your Slack workspace.
- To use a private Slack channel, add the EngageOne app to that channel in Slack first.

> **Note:** If you don't see Slack in your list of integrations, it hasn't been set up for your EngageOne installation. Contact your EngageOne administrator.

## Connect your Slack workspace

1. Go to **Settings → Integrations** and click **Configure** on the **Slack** card.
2. Click **Connect**.
3. Slack opens. Pick your workspace and allow access.
4. You're sent back to EngageOne. An **Attention required** box appears, because no channel is connected yet.
5. Click **Connect channel**.
6. Choose a channel from **Select a channel**, then click **Update**.

You'll see "The channel is connected successfully". From now on, new conversations are posted to that channel.

## Choose how Slack threads behave

After a channel is connected, pick a **Slack thread behaviour**:

| Option | What it does |
| --- | --- |
| **Two-way sync** | Replies in a Slack thread are sent to the customer. Start a message with `note:` to keep it internal. |
| **Alerts only** | Conversations are posted to Slack for internal discussion only. Nothing posted in the thread reaches the customer. |

Two-way sync is the default. You can change it at any time on the same page.

## What appears in Slack

- Each new conversation starts a new message in the channel. It shows the inbox name and type, a link to open the conversation in EngageOne and the customer's first message. For email conversations, the subject is included too.
- Later messages in that conversation, from the customer and from your team, are added to the same Slack thread.
- Private notes added in EngageOne appear in the thread starting with `private:`.
- Files and images are shared in the thread too.

> **Note:** A Slack thread starts with a customer message. A conversation that an agent starts, for example an outbound message, only appears in Slack after the customer replies.

## Reply from Slack

This works only with **Two-way sync**.

1. Find the conversation's message in your Slack channel.
2. Reply **in the thread**. Messages posted directly in the channel, outside a thread, are ignored.
3. Your reply is sent to the customer through EngageOne.

If your Slack email address matches an agent's email in EngageOne, the reply shows as coming from that agent. If not, it's sent from a bot profile.

## Add a private note from Slack

Start your thread reply with `note:` or `private:`:

```
note: Customer is on the annual plan, offer the upgrade discount.
```

The message is saved as a private note in EngageOne. The customer never sees it.

## Share conversation links in Slack

When someone pastes an EngageOne conversation link into Slack, Slack shows a preview with the contact's **Name**, **Email**, **Phone**, **Company**, **Inbox** and **Inbox Type**, and an **Open conversation** button.

## Disconnect Slack

1. Go to **Settings → Integrations → Slack**.
2. Click **Delete** and confirm.

Your team will no longer see conversations in Slack.

> **Important:** If EngageOne loses access to Slack, the page shows "Your Slack integration has expired". Delete the integration and connect your workspace again.

## Related articles

- [Private notes and mentions](/docs/features/private-notes-and-mentions)
- [Roles and permissions](/docs/account-setup/roles-and-permissions)
- [Notifications not arriving](/docs/troubleshooting/notifications-not-arriving)
