---
title: "Dashboard apps"
description: "Embed your own web app as a tab in EngageOne conversations and read the conversation, contact and agent data it receives via postMessage."
---

Dashboard apps let you show your own web page inside EngageOne, next to the conversation. Use them to show order history, billing details or anything else from your systems while agents chat.

## How it works

- You host a web page, for example `https://tools.example.com/customer`.
- You add it in EngageOne as a dashboard app.
- Each dashboard app appears as a tab at the top of every conversation, next to the **Messages** tab.
- When an agent opens the tab, your page loads in a frame and EngageOne sends it the current conversation, contact and agent details.

## Add a dashboard app

1. Go to **Settings → Integrations** and click **Configure** on the **Dashboard Apps** card.
2. Click **Add a new dashboard app**.
3. Enter a **Name**. This is the tab label agents see.
4. Enter the **Endpoint**: the full URL of your page, starting with `https://` or `http://`.
5. Click **Submit**.

You can add more than one app. Each gets its own tab. Use the edit and delete icons in the list to change or remove an app.

> **Important:** Your page must allow being shown in a frame on your EngageOne domain. If your server sends `X-Frame-Options: DENY` or a strict `frame-ancestors` policy, the tab stays blank. Serve the page over HTTPS.

## Receive the conversation context

EngageOne sends the context to your page with `window.postMessage`. It sends it when the page loads, each time the agent opens the tab again, and when the agent switches between light and dark mode.

The message data is a JSON **string**. Parse it before you use it:

```js
window.addEventListener('message', (event) => {
  // Optional: only accept messages from your EngageOne domain
  // if (event.origin !== 'https://<your-engageone-domain>') return;

  let payload;
  try {
    payload = JSON.parse(event.data);
  } catch {
    return; // not a dashboard app message
  }

  if (payload.event !== 'appContext') return;

  const { conversation, contact, currentAgent, customAttributes, theme } = payload.data;
  showCustomer(contact.email, conversation.id);
});
```

### Ask for the context again

Your page can request fresh data at any time by posting this exact string to the parent window. The string contains the platform's technical name; use it exactly as shown:

```js
window.parent.postMessage('chatwoot-dashboard-app:fetch-info', '*');
```

EngageOne replies with a new `appContext` message.

## The appContext payload

Here is an example payload, shortened for readability:

```json
{
  "event": "appContext",
  "data": {
    "conversation": {
      "id": 1042,
      "inbox_id": 7,
      "account_id": 1,
      "status": "open",
      "labels": ["billing"],
      "custom_attributes": { "order_id": "A-5531" },
      "additional_attributes": {},
      "created_at": 1767225600,
      "unread_count": 0,
      "messages": [ { "id": 88123, "content": "Where is my order?", "message_type": 0 } ],
      "meta": {
        "channel": "Channel::WebWidget",
        "sender": {
          "id": 315,
          "name": "Asha Patel",
          "email": "asha@example.com",
          "phone_number": "+919800000000",
          "identifier": "cust_8812",
          "custom_attributes": { "plan": "pro" }
        },
        "assignee": { "id": 4, "name": "Ravi", "email": "ravi@example.com" },
        "team": { "id": 2, "name": "Support" }
      }
    },
    "contact": {
      "id": 315,
      "name": "Asha Patel",
      "email": "asha@example.com",
      "phone_number": "+919800000000",
      "identifier": "cust_8812",
      "additional_attributes": { "city": "Ahmedabad" },
      "custom_attributes": { "plan": "pro" }
    },
    "currentAgent": {
      "id": 4,
      "name": "Ravi",
      "email": "ravi@example.com"
    },
    "customAttributes": [
      {
        "attribute_key": "order_id",
        "attribute_display_name": "Order ID",
        "attribute_model": "conversation_attribute",
        "attribute_display_type": "text"
      }
    ],
    "theme": "light"
  }
}
```

| Field | What it contains |
| --- | --- |
| `conversation` | The open conversation. `id` is the conversation number shown in EngageOne. `meta.sender` is the contact, `meta.assignee` and `meta.team` are present when set. |
| `contact` | The contact's full details, including `custom_attributes`. |
| `currentAgent` | The agent viewing the tab: `id`, `name` and `email`. |
| `customAttributes` | The custom attribute definitions in your account, not the values. Values are on the conversation and contact. |
| `theme` | `light` or `dark`, so your page can match the agent's view. |

> **Tip:** Use `contact.identifier` or `contact.email` to look the customer up in your own system. See [Identify users](/docs/website-live-chat/identify-users) to set the identifier from your website.

## Keep it secure

- The context is sent to whatever URL you enter, so only add pages you control.
- Your page should still check that the agent is allowed to see the data it loads, for example with your own login.

## Related articles

- [Custom attributes](/docs/features/custom-attributes)
- [Identify users](/docs/website-live-chat/identify-users)
- [API overview](/docs/developers/api-overview)
- [Shopify](/docs/integrations/shopify)
