---
title: "Real-time events"
description: "Connect to the EngageOne WebSocket with a pubsub token to get live updates for messages, conversations, typing and presence."
---

EngageOne pushes live updates over a WebSocket. The dashboard and the chat widget use it to show new messages instantly. You can use the same connection in your own agent tool or custom chat app.

## When to use it

| Use | Pick |
| --- | --- |
| Show live updates in an app that a person is looking at | Real-time events (this article) |
| Sync data between servers, or trigger workflows | [Webhooks](/docs/developers/webhooks) |

Real-time events only reach clients that are connected at that moment. Nothing is stored or resent, so don't rely on them for server-to-server syncing.

## What you need

- **The WebSocket address**: `wss://<your-engageone-domain>/cable`
- **A pubsub token**, which tells EngageOne who is listening.

There are two kinds of pubsub token:

| Token for | Where to get it | What you receive |
| --- | --- | --- |
| **An agent** | The `pubsub_token` field from `GET /api/v1/profile`, called with that agent's access token | Events for conversations in the agent's inboxes, plus their notifications |
| **A contact** | The `pubsub_token` returned when you create a contact through the Client API | Events for that contact's own conversations |

> **Important:** A pubsub token works like a password for live data. Keep agent tokens on trusted devices, and only give a contact their own token.

## Connect and subscribe

The connection uses the Rails ActionCable protocol. The easiest way to connect from JavaScript is the official `@rails/actioncable` package.

### As an agent

```javascript
import { createConsumer } from '@rails/actioncable';

const consumer = createConsumer('wss://<your-engageone-domain>/cable');

const subscription = consumer.subscriptions.create(
  {
    channel: 'RoomChannel',
    pubsub_token: '<agent-pubsub-token>',
    account_id: 1,      // your account ID
    user_id: 7,         // the agent's user ID from /api/v1/profile
  },
  {
    received({ event, data }) {
      if (event === 'message.created') {
        console.log('New message in conversation', data.conversation_id, data.content);
      }
    },
  }
);
```

### As a contact

Leave out `user_id` and `account_id`. EngageOne finds the contact from the token.

```javascript
consumer.subscriptions.create(
  { channel: 'RoomChannel', pubsub_token: '<contact-pubsub-token>' },
  { received: ({ event, data }) => handleEvent(event, data) }
);
```

### Without the library

If you use another language, open a WebSocket to the same address and send a subscribe command. The `identifier` is a JSON string:

```json
{
  "command": "subscribe",
  "identifier": "{\"channel\":\"RoomChannel\",\"pubsub_token\":\"<token>\",\"account_id\":1,\"user_id\":7}"
}
```

The server sends `welcome`, `ping` and `confirm_subscription` messages to manage the connection. Your events arrive in this shape:

```json
{
  "identifier": "{\"channel\":\"RoomChannel\",...}",
  "message": {
    "event": "message.created",
    "data": { "id": 4521, "content": "Hi there", "conversation_id": 245, "account_id": 1 }
  }
}
```

## Event names

| Event | Sent when | Agents | Contacts |
| --- | --- | :-: | :-: |
| `message.created` | A message is added | ✓ | ✓ (not private notes) |
| `message.updated` | A message changes, such as its delivery status | ✓ | ✓ (not private notes) |
| `first.reply.created` | The first reply is sent in a conversation | ✓ | |
| `conversation.created` | A conversation starts | ✓ | ✓ |
| `conversation.status_changed` | A conversation is opened, resolved, pending or snoozed | ✓ | ✓ |
| `conversation.updated` | A conversation's details change | ✓ | ✓ |
| `conversation.read` | Someone reads a conversation | ✓ | |
| `conversation.typing_on` / `conversation.typing_off` | Someone starts or stops typing | ✓ | ✓ |
| `conversation.contact_changed` | The conversation moves to another contact, for example after a merge | ✓ | |
| `conversation.mentioned` | You are @mentioned in a private note | ✓ | |
| `assignee.changed` | The assigned agent changes | ✓ | |
| `team.changed` | The assigned team changes | ✓ | |
| `contact.created` / `contact.updated` / `contact.deleted` / `contact.merged` | A contact is added, changed, deleted or merged | ✓ | |
| `notification.created` / `notification.updated` / `notification.deleted` | Your notification list changes | ✓ | |
| `presence.update` | Who is online changes | ✓ | ✓ |

In message events, `message_type` is a number: `0` incoming, `1` outgoing, `2` activity and `3` template. This differs from webhooks, which use words.

Every `data` object includes `account_id`. When a person caused the change, it also includes `performer` with their details.

> **Note:** Typing events aren't sent back to the person who is typing. A private-note typing event has `is_private` set to `true`, and you should hide it from customers.

## Stay online and reconnect

- **Presence**: to show as online, call the `update_presence` action every 20 to 30 seconds, for example `subscription.perform('update_presence')`. The dashboard does this every 20 seconds.
- **Reconnects**: the library reconnects by itself. Events sent while you were offline are lost, so reload the data you show through the API after a reconnect.
- **Avoid duplicates**: one change can trigger more than one event, for example an assignment can send both `assignee.changed` and `conversation.updated`. Update your view by ID instead of appending blindly.

## Related articles

- [Webhooks](/docs/developers/webhooks)
- [API channel](/docs/channels/api-channel)
- [Access tokens](/docs/developers/access-tokens)
- [API overview](/docs/developers/api-overview)
