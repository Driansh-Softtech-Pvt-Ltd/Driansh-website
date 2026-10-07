---
title: "Agent bots"
description: "Connect your own bot to EngageOne with a webhook: receive conversation events, reply through the API and hand chats to a human agent."
---

An agent bot is your own bot service, connected to EngageOne by a webhook, that answers customers first and hands over to your team when needed.

> **Note:** This article is about bots you build and host yourself. To use EngageOne's built-in AI, see [Introduction to the EngageOne AI Assistant](/docs/ai-assistant/introduction).

## How it works

1. You create an agent bot with a **Webhook URL** on your server.
2. You connect the bot to one or more inboxes.
3. New conversations in those inboxes start with the status **pending**, so they wait for the bot instead of going to agents.
4. EngageOne sends each event, such as a new customer message, to your Webhook URL.
5. Your bot replies through the EngageOne API, using the bot's access token.
6. When a human should take over, your bot changes the conversation status to **open**. Auto-assignment then gives it to an agent.

## Create an agent bot

You need to be an administrator.

1. Go to **Settings → Bots**.
2. Click **Add Bot**.
3. Optionally upload a **Bot avatar**. Customers see it next to the bot's replies.
4. Enter a **Bot name** and a **Description**.
5. Enter the **Webhook URL** where your bot receives events. It must start with `http://` or `https://`.
6. Click **Create Bot**.
7. Copy the **Webhook Secret** that appears. Your server uses it to check that webhooks really come from EngageOne.

To find the bot's **Access Token** later, open the bot from **Settings → Bots** and edit it. You can copy the token there, and reset the token or the secret if they leak.

## Connect the bot to an inbox

1. Go to **Settings → Inboxes** and open the inbox.
2. Open the **Bot Configuration** tab.
3. Under **Select an agent bot**, choose your bot.
4. Click **Update**.

To stop the bot, open the same tab and click **Disconnect bot**. An inbox can have one agent bot at a time.

## Events your bot receives

EngageOne sends a `POST` request with a JSON body to your Webhook URL. The `event` field tells you what happened.

| Event | When it is sent |
| --- | --- |
| `message_created` | A message is added to the conversation |
| `message_updated` | A message changes |
| `conversation_opened` | A conversation is opened |
| `conversation_resolved` | A conversation is resolved |
| `conversation_status_changed` | The conversation status changes |
| `conversation_updated` | The conversation changes, for example labels or attributes |
| `webwidget_triggered` | A visitor opens the website chat widget |

For most bots, handle `message_created` where `message_type` is `incoming`. Ignore your own outgoing messages, or the bot will answer itself.

### Check the signature

Each webhook carries a delivery ID, a timestamp and a signature header. The signature is `sha256=` followed by the hex HMAC-SHA256 of `<timestamp>.<raw body>`, keyed with the bot's **Webhook Secret**. The steps are the same as for the API channel. See [API channel](/docs/channels/api-channel#check-the-signature).

## Reply as the bot

Your bot calls the EngageOne application API and sends its access token in a request header, as shown below.

```bash
# api_access_token is the technical name of EngageOne's access token header
curl -X POST "https://<your-engageone-domain>/api/v1/accounts/<account_id>/conversations/<conversation_id>/messages" \
  -H "Content-Type: application/json" \
  -H "api_access_token: <bot_access_token>" \
  -d '{"content": "Hi! I can help with orders and returns. What do you need?", "message_type": "outgoing"}'
```

The `account_id` and `conversation_id` are in every webhook payload.

A bot token can only reach the endpoints a bot needs. With it, your bot can:

- Send messages to a conversation.
- Read a conversation and change its status or priority.
- Turn the typing indicator on and off.
- Assign an agent or team.
- Read and add labels.
- Update conversation custom attributes.

> **Tip:** Turn on the typing indicator while your bot works on a reply, so the customer knows something is happening.

## Hand the conversation to a human

When the bot can't help, or the customer asks for a person, set the status to `open`:

```bash
curl -X POST "https://<your-engageone-domain>/api/v1/accounts/<account_id>/conversations/<conversation_id>/toggle_status" \
  -H "Content-Type: application/json" \
  -H "api_access_token: <bot_access_token>" \
  -d '{"status": "open"}'
```

The conversation then shows up for your agents. If auto-assignment is on for the inbox, EngageOne assigns it to an online agent.

> **Important:** After the handoff, EngageOne still sends events to your bot. Check the conversation `status` in each webhook and stay quiet when it is `open`, so the bot doesn't talk over your agents.

To let the bot finish a conversation on its own, set the status to `resolved` instead.

## Troubleshooting

| Problem | Likely cause | Fix |
| --- | --- | --- |
| New conversations skip the bot | The bot isn't connected to the inbox | Check the inbox's **Bot Configuration** tab |
| Conversations stay pending forever | The bot never hands over | Send the `open` status when a human is needed |
| `401` when replying | Wrong or reset access token | Copy the current token from the bot settings |
| The bot replies to itself | It handles outgoing messages | Only answer `incoming` messages |
| The bot keeps replying after handoff | It ignores the conversation status | Skip events where `status` is `open` |

## Related articles

- [API channel](/docs/channels/api-channel)
- [Assignment and agent capacity](/docs/advanced-features/assignment-and-agent-capacity)
- [Webhooks](/docs/developers/webhooks)
- [Interactive messages](/docs/developers/interactive-messages)
