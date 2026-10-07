---
title: "Interactive messages"
description: "Send option buttons, cards, forms and article lists through the EngageOne API, and see which channels show them to customers."
---

Interactive messages let a bot or integration send more than plain text: buttons to pick from, product cards, short forms and article links. You send them through the Application API by setting a content type.

## How to send one

Post a message to the conversation, the same way you send a normal reply, and add two fields:

- `content_type`: the kind of interactive message.
- `content_attributes`: an object with an `items` list that describes the buttons, cards, fields or articles.

```bash
curl -X POST "https://<your-engageone-domain>/api/v1/accounts/<account_id>/conversations/<conversation_id>/messages" \
  -H "api_access_token: <your-access-token>" \
  -H "Content-Type: application/json" \
  -d @message.json
```

You can use a personal access token or an agent bot token. See [Access tokens](/docs/developers/access-tokens).

| `content_type` | What the customer sees |
| --- | --- |
| `input_select` | A question with option buttons |
| `cards` | One or more cards with an image, title, text and buttons |
| `form` | A small form with text, email, long text or dropdown fields |
| `article` | A list of links to help articles |

Every content type needs at least one item. Unknown keys inside an item are rejected with a `422` error, so send only the keys shown below.

## Options (`input_select`)

```json
{
  "content": "How can we help you today?",
  "content_type": "input_select",
  "content_attributes": {
    "items": [
      { "title": "Track my order", "value": "track_order" },
      { "title": "Return an item", "value": "return_item" },
      { "title": "Talk to a person", "value": "agent" }
    ]
  }
}
```

| Key | Required | Notes |
| --- | --- | --- |
| `title` | Yes | The button text the customer sees |
| `value` | Yes | The value your bot receives |
| `description` | No | Extra text under the option, used in WhatsApp lists |

## Cards (`cards`)

```json
{
  "content": "Here are our most popular plans",
  "content_type": "cards",
  "content_attributes": {
    "items": [
      {
        "media_url": "https://example.com/images/basic.png",
        "title": "Basic plan",
        "description": "For small teams getting started",
        "actions": [
          { "type": "link", "text": "View details", "uri": "https://example.com/plans/basic" },
          { "type": "postback", "text": "Choose Basic", "payload": "PLAN_BASIC" }
        ]
      }
    ]
  }
}
```

Each card needs at least one action.

| Action `type` | Keys | What happens |
| --- | --- | --- |
| `link` | `text`, `uri` | Opens the link in a new tab |
| `postback` | `text`, `payload` | Sends the payload to the web page that hosts the chat widget |

A postback doesn't create a message in EngageOne. Instead, the widget fires a browser event on your website with the payload. The event's technical name comes from the underlying platform:

```javascript
window.addEventListener('chatwoot:postback', (event) => {
  console.log(event.detail.payload); // "PLAN_BASIC"
});
```

## Forms (`form`)

```json
{
  "content": "Tell us a bit about your request",
  "content_type": "form",
  "content_attributes": {
    "items": [
      { "name": "full_name", "type": "text", "label": "Your name", "placeholder": "Asha Patel", "required": true },
      { "name": "email", "type": "email", "label": "Email", "placeholder": "you@example.com", "required": true },
      { "name": "topic", "type": "select", "label": "Topic",
        "options": [
          { "label": "Billing", "value": "billing" },
          { "label": "Technical", "value": "technical" }
        ]
      },
      { "name": "details", "type": "text_area", "label": "Details", "placeholder": "What happened?" }
    ]
  }
}
```

| Key | Notes |
| --- | --- |
| `name` | Field key. It's returned with the answer |
| `type` | `text`, `email`, `text_area` or `select` |
| `label` | The field label |
| `placeholder` | Hint text inside the field |
| `required` | `true` to make the field mandatory |
| `options` | For `select` fields: a list of `label` and `value` pairs |
| `default` | A starting value |
| `pattern`, `pattern_error` | For `text` fields: a regular expression and the error shown when it doesn't match |

## Articles (`article`)

```json
{
  "content": "These articles might help",
  "content_type": "article",
  "content_attributes": {
    "items": [
      { "title": "How to reset your password", "description": "Step-by-step guide", "link": "https://help.example.com/reset-password" },
      { "title": "Update billing details", "description": "Change your card or address", "link": "https://help.example.com/billing" }
    ]
  }
}
```

## Getting the customer's answer

When a website visitor picks an option or submits a form, EngageOne saves the answer on the original message in `content_attributes.submitted_values`. You get it in a `message_updated` webhook:

```json
{
  "event": "message_updated",
  "content_type": "form",
  "content_attributes": {
    "items": ["..."],
    "submitted_values": [
      { "name": "full_name", "value": "Asha Patel" },
      { "name": "email", "value": "asha@example.com" }
    ]
  }
}
```

On WhatsApp, Messenger, Telegram and LINE, the customer's choice arrives as a normal incoming message instead.

## Which channels show them

| Channel | Options | Cards | Forms | Articles |
| --- | :-: | :-: | :-: | :-: |
| Website live chat | ✓ | ✓ | ✓ | ✓ |
| WhatsApp (Cloud API and 360dialog) | ✓ | | | |
| Facebook Messenger | ✓ | | | |
| Telegram | ✓ | | | |
| LINE | ✓ | | | |
| API channel | Your app decides | Your app decides | Your app decides | Your app decides |

How options look on each channel:

- **WhatsApp**: up to 3 options without descriptions become reply buttons. More options, or any option with a description, become a list the customer opens. WhatsApp's own limits on button and list text apply.
- **Facebook Messenger**: quick reply buttons under the message.
- **Telegram**: buttons under the message.
- **LINE**: buttons inside a message bubble.

On other channels, the customer sees only the `content` text. Write it so it still makes sense on its own, for example "Reply 1 to track an order or 2 to talk to a person."

> **Tip:** For API channel inboxes, EngageOne passes `content_type` and `content_attributes` to your webhook unchanged, so your own app can draw buttons, cards or forms however it likes.

## Related articles

- [API overview](/docs/developers/api-overview)
- [Agent bots](/docs/advanced-features/agent-bots)
- [Webhooks](/docs/developers/webhooks)
- [Website live chat](/docs/channels/website-live-chat)
