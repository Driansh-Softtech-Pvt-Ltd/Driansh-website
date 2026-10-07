---
title: "Webhooks"
description: "Send EngageOne events such as new messages, conversation changes and contact updates to your own server, and verify each request's signature."
---

Webhooks send a message to your server whenever something happens in EngageOne, such as a new message or a resolved conversation. Use them to sync data, trigger workflows or alert other systems.

## Add a webhook

1. Go to **Settings → Integrations**.
2. Find **Webhooks** and click **Configure**.
3. Click **Add new webhook**.
4. Enter a **Webhook Name** so you can recognise it later.
5. Enter the **Webhook URL**. It must start with `http://` or `https://` and be reachable from the internet.
6. Under **Events**, tick the events you want to receive.
7. Click **Create webhook**.
8. Copy the **Secret** that appears. Your server uses it to check that requests really come from EngageOne. You can find it again later in the webhook's edit form.

You can add more than one webhook, but each URL can only be used once per account. To change or remove a webhook, use **Edit** or **Delete** in the webhook list.

> **Note:** Webhooks are available on plans that include them.

## Events

| Event | Name in the payload | Sent when |
| --- | --- | --- |
| **Conversation Created** | `conversation_created` | A new conversation starts |
| **Conversation Status Changed** | `conversation_status_changed` | A conversation is opened, resolved, set to pending or snoozed |
| **Conversation Updated** | `conversation_updated` | A conversation changes, for example its assignee, team, labels or attributes |
| **Message created** | `message_created` | An incoming or outgoing message, or a private note, is added |
| **Message updated** | `message_updated` | A message changes, for example its delivery status or a customer's form answer |
| **Live chat widget opened by the user** | `webwidget_triggered` | A visitor opens the website chat widget |
| **Contact created** | `contact_created` | A new contact is added |
| **Contact updated** | `contact_updated` | A contact's details change |
| **Conversation Typing On** / **Off** | `conversation_typing_on` / `conversation_typing_off` | Someone starts or stops typing |

Some accounts also see **Inbox updated** (`inbox_updated`), if it's turned on for your account.

> **Important:** `message_created` also fires for private notes. If you forward messages to customers or another system, skip messages where `private` is `true`.

## What a webhook looks like

EngageOne sends a `POST` request with a JSON body. The `event` field tells you which event it is.

### Example: `message_created`

```json
{
  "event": "message_created",
  "id": 4521,
  "content": "Hi, where is my order?",
  "content_type": "text",
  "content_attributes": {},
  "message_type": "incoming",
  "private": false,
  "created_at": "2026-10-07T09:12:44.000Z",
  "source_id": null,
  "additional_attributes": {},
  "account": { "id": 1, "name": "Acme Support" },
  "inbox": { "id": 3, "name": "Website" },
  "sender": {
    "id": 812,
    "name": "Asha Patel",
    "email": "asha@example.com",
    "phone_number": "+919800000000",
    "identifier": null
  },
  "conversation": {
    "id": 245,
    "inbox_id": 3,
    "status": "open",
    "channel": "Channel::WebWidget",
    "labels": [],
    "priority": null,
    "meta": { "sender": { "id": 812, "name": "Asha Patel" }, "assignee": null, "team": null }
  }
}
```

`message_type` is `incoming` for customer messages and `outgoing` for replies from agents or bots. When an agent or bot sends the message, `sender` includes `"type": "user"` or `"type": "agent_bot"`. Files appear in an `attachments` array.

### Example: `conversation_status_changed`

```json
{
  "event": "conversation_status_changed",
  "id": 245,
  "inbox_id": 3,
  "status": "resolved",
  "channel": "Channel::WebWidget",
  "labels": ["billing"],
  "priority": "high",
  "meta": {
    "sender": { "id": 812, "name": "Asha Patel" },
    "assignee": { "id": 7, "name": "Ravi Kumar" },
    "team": { "id": 2, "name": "Billing" }
  },
  "messages": [],
  "account": { "id": 1, "name": "Acme Support" },
  "changed_attributes": [
    { "status": { "previous_value": "open", "current_value": "resolved" } }
  ]
}
```

The conversation `id` is the number you see in the dashboard. `conversation_updated`, `contact_updated` and `inbox_updated` also include `changed_attributes`, so you can see exactly what changed.

The examples are shortened. Real payloads carry more fields, so ignore any you don't need.

## Check the signature

Each request carries three extra headers: a unique delivery ID, a timestamp and a signature. Their names end in `-Delivery`, `-Timestamp` and `-Signature`. Log one request to see the exact names.

The signature header holds `sha256=` followed by the hex HMAC-SHA256 of `<timestamp>.<raw body>`, keyed with the webhook's **Secret**.

1. Read the raw request body exactly as received. Don't parse and re-encode it first.
2. Build the string `<timestamp header value>.<raw body>`.
3. Compute HMAC-SHA256 of that string with your Secret, as hex, and add `sha256=` in front.
4. Compare it with the signature header using a constant-time comparison.
5. Reject requests with old timestamps, for example older than 5 minutes.
6. Use the delivery ID to ignore a request you've already processed.

```python
import hmac, hashlib, time

def is_valid(raw_body: bytes, timestamp: str, signature: str, secret: str) -> bool:
    if abs(time.time() - int(timestamp)) > 300:
        return False
    message = timestamp.encode() + b"." + raw_body
    expected = "sha256=" + hmac.new(secret.encode(), message, hashlib.sha256).hexdigest()
    return hmac.compare_digest(expected, signature)
```

> **Tip:** The same signing method is used for API inbox webhooks and agent bot webhooks. Each uses its own secret.

## Delivery rules

- Each webhook is sent once. Account webhooks aren't retried if your server fails.
- Answer quickly with a `2xx` status. By default EngageOne waits 5 seconds.
- Do slow work, such as calling other APIs, after you've answered. A queue works well for this.
- Webhooks aren't guaranteed to arrive in order. Use `created_at` or `updated_at` if order matters.

## Troubleshooting

| Problem | Likely cause | Fix |
| --- | --- | --- |
| Nothing arrives | The URL isn't public, or no events are ticked | Use a public HTTPS URL and check the event list |
| Some events are missing | Your server was slow or returned an error | Answer within the timeout with a `2xx` status |
| The signature doesn't match | The body was re-encoded, or the wrong secret was used | Sign the raw body with this webhook's Secret |
| You get the same event twice | Two webhooks point at the same handler, or an API inbox also sends it | Use the delivery ID to drop duplicates |

## Related articles

- [API overview](/docs/developers/api-overview)
- [API channel](/docs/channels/api-channel)
- [Agent bots](/docs/advanced-features/agent-bots)
- [Real-time events](/docs/developers/realtime-events)
