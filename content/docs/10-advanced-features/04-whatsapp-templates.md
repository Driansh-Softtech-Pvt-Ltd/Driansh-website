---
title: "WhatsApp templates"
description: "Create WhatsApp message templates in EngageOne, submit them to Meta, keep them in sync and send them in conversations outside the 24-hour window."
---

WhatsApp templates are pre-approved messages you need to start a chat, or to reply once the 24-hour window has closed.

## When you need a template

WhatsApp lets you send free-form replies only within 24 hours of the customer's last message. After that, and for any message you start yourself, you must send a template that Meta has approved.

In EngageOne you use templates in three places:

- In a conversation, when the 24-hour window has closed.
- In [WhatsApp campaigns](/docs/advanced-features/campaigns), to message many contacts at once.
- When you start a new WhatsApp conversation with a contact.

## View your templates

Go to **Settings → Templates**. You need to be an administrator.

The page lists templates from all your WhatsApp inboxes, including Twilio WhatsApp inboxes. Each card shows the template's status, category, language, content type and the inboxes it belongs to. Click a card to open the **Template preview**, which shows how the message looks in WhatsApp.

Use the filters to narrow the list by **All inboxes**, **All languages** or **All types**, or search by name or content.

### Template status

| Status | Meaning |
| --- | --- |
| **Approved** | Ready to send. |
| **Pending** | Meta is still reviewing it. |
| **Rejected** | Meta didn't approve it. Check the reason in Meta, fix the template and submit a new one. |
| **Paused** | Meta paused it, usually because of poor customer feedback. |
| **Disabled** | Meta turned it off. |
| **Not submitted for WhatsApp approval** | The template exists but hasn't been sent to Meta for review. |

Only approved templates can be sent.

## Create a template and submit it to Meta

You can create templates for WhatsApp Cloud inboxes straight from EngageOne.

1. Go to **Settings → Templates** and click **Create template**.
2. Choose the **WhatsApp inbox**.
3. Pick a **Category**:
   - **Marketing**: offers, greetings and announcements.
   - **Utility**: order, account and booking updates.
4. Enter a **Template name** using lowercase letters, numbers and underscores, for example `order_shipped`.
5. Choose the **Language**.
6. Choose a **Header**: **No header**, **Text** (up to 60 characters) or **Image** (JPG or PNG, up to 5 MB).
7. Write the **Message** body, up to 1024 characters. Click **Add variable** to insert a placeholder such as `{{1}}`.
8. For each variable, enter a sample value. Meta uses the samples to review the template.
9. Optionally add a **Footer (optional)**, up to 60 characters.
10. Optionally add **Buttons (optional)**:
    - **Quick reply**: up to 3.
    - **Visit website**: up to 2, each with a URL.
    - **Call phone number**: 1, with the number in international format, for example `+919876543210`.
11. Check the **Preview**, then click **Submit for review**.

Button text can be up to 25 characters. Meta usually reviews a template within a few minutes to a few hours, and the status updates once it does.

### Rules for variables

- Number variables in order, starting from `{{1}}`, with no gaps.
- The message can't start or end with a variable.
- Every variable needs a sample value.

```
Hi {{1}}, your order {{2}} has shipped and will arrive on {{3}}. Thank you for shopping with us.
```

> **Tip:** Keep marketing and utility messages in separate templates. Meta may reject a utility template that contains promotional text.

### Twilio WhatsApp inboxes

Templates for Twilio WhatsApp inboxes are created in your Twilio account as content templates. EngageOne syncs them so you can see and send them, but you can't create them here. In a template's preview, click **Manage in Twilio** to open your Twilio console.

For other WhatsApp templates, the preview has **Manage in Meta**, which opens Meta's template manager.

## Sync templates

EngageOne refreshes templates in the background. To pull in changes straight away, for example a template you just created in Meta:

1. Go to **Settings → Templates**.
2. Click **Sync templates**.

Updates can take a couple of minutes. The page shows when the last sync was attempted.

You can also refresh from a conversation: open the template picker and click **Refresh templates**.

## Send a template in a conversation

1. Open the WhatsApp conversation.
2. In the reply box, click the WhatsApp icon (**Whatsapp Templates**).
3. Search for and pick a template.
4. Fill in each value under **Variables**. Templates with an image or document header ask for the media URL. Templates with buttons may ask for **Button Parameters**.
5. Click **Send Message**.

For Twilio WhatsApp inboxes, use the **Content Templates** button in the reply box instead. It works the same way.

> **Note:** If the 24-hour window has closed, the reply box tells you that you can only reply using a template. Once the customer answers, you can reply freely again.

## Related articles

- [WhatsApp (Cloud API)](/docs/channels/whatsapp)
- [WhatsApp through Twilio](/docs/channels/whatsapp-twilio)
- [Campaigns](/docs/advanced-features/campaigns)
- [WhatsApp common issues](/docs/troubleshooting/whatsapp-common-issues)
