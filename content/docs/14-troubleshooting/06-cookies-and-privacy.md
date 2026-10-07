---
title: "Cookies and privacy"
description: "What the EngageOne website chat widget stores in your visitors' browsers, why each cookie is needed, what visitor details are shared, and how to reset them."
---

This article explains what the website chat widget stores in a visitor's browser and what information it sends to EngageOne, so you can describe it accurately in your own privacy notice.

> **Note:** This article describes how the product works. It isn't legal advice. Check with your own legal or privacy adviser about what your cookie banner and privacy policy need to say.

## Cookies set by the widget

The widget sets a small number of cookies on your website's domain. The names below are technical identifiers used by the product and can't be renamed.

| Cookie | Purpose | How long it lasts |
| --- | --- | --- |
| `cw_conversation` | Keeps the visitor connected to their own chat, so their conversation history is still there when they move between pages or come back later. | Up to 1 year |
| `cw_user_<website token>` | Remembers which signed-in user details were last sent to EngageOne, so the widget doesn't send them again on every page. Stores a fingerprint of the details, not the details themselves. Only set if you identify users. | Up to 1 year |
| `cw_snooze_campaigns_till` | Stops campaign messages from popping up again right after a visitor has seen one. | 1 hour |

`<website token>` is replaced by your inbox's website token.

These cookies are needed for the chat to work. Without `cw_conversation`, a visitor would start a new, empty chat on every page.

### Sharing cookies across subdomains

By default, cookies belong to the exact domain the widget is on. If your site spans several subdomains, such as `www.example.com` and `app.example.com`, you can share the chat between them by setting a base domain in your widget settings. The setting name is a technical name and must be written exactly as shown:

```html
<script>
  window.chatwootSettings = {
    baseDomain: ".example.com",
  };
</script>
```

## What the widget sends to EngageOne

When a visitor starts a conversation, EngageOne records some basic details so your team has context. Agents see them in the conversation's sidebar.

| Information | Example | Why |
| --- | --- | --- |
| Browser and version | Chrome 120 | Helps agents troubleshoot. |
| Operating system and device | macOS, iPhone | Helps agents troubleshoot. |
| Browser language | `en-US` | Lets you route or reply in the right language. |
| The page the chat started on | `https://example.com/pricing` | Shows what the visitor was looking at. |
| The time the chat started | – | Shown in the conversation details. |
| IP address | – | Recorded only if IP lookup is turned on for your account. Used to show an approximate location. |

Anything visitors type, files they send and details they enter in a pre-chat form are also stored, as part of the conversation.

If you identify signed-in users with the widget, the details you pass, such as name, email and custom attributes, are saved on the contact. See [Identify users](/docs/website-live-chat/identify-users).

## Reset the widget when a user signs out

On a shared computer, the next person could see the previous visitor's chat if the cookies stay in place. When a user signs out of your website, call the reset command. The object name is a technical name and must be written exactly as shown:

```javascript
window.$chatwoot.reset();
```

This clears the widget's cookies and starts a fresh, anonymous session.

## Help center pages

Your public help center doesn't need the widget cookies above, unless you add the chat widget to it. If you connect analytics tools such as Google Analytics or Meta Pixel to your help center, those tools may set their own cookies. See [Help center analytics](/docs/help-center/help-center-analytics).

## Visitors who block cookies

If a visitor's browser blocks cookies for your site, the widget can still open. Their conversation won't be remembered between pages or visits, so they may see a new chat each time.

## Data requests from customers

If a customer asks you to delete their data, an administrator can open the contact in EngageOne and choose **Delete contact**. This removes the contact and their conversations. See [Contacts and segments](/docs/features/contacts-and-segments).

## Related articles

- [Install the widget](/docs/website-live-chat/install-the-widget)
- [Identify users](/docs/website-live-chat/identify-users)
- [Pre-chat forms](/docs/website-live-chat/pre-chat-forms)
- [Help center analytics](/docs/help-center/help-center-analytics)
