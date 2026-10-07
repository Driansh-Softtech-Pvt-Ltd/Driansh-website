---
title: "WhatsApp common issues"
description: "Fix common EngageOne WhatsApp problems: the 24-hour window, rejected templates, failed messages, numbers that don't receive, and webhook or token errors."
---

Use this guide when WhatsApp messages fail, don't arrive, or templates won't send.

## Find out why a message failed

When a WhatsApp message can't be delivered, EngageOne shows **Failed to send** under it.

1. Hover over the warning icon next to **Failed to send**.
2. Read the reason. Errors from Meta are shown as a code and a short title, for example `131026: Message undeliverable`.
3. Use the sections below to fix the cause.

If the message was sent less than a day ago, a retry button appears next to the warning. Click it to send the message again after you fix the problem.

## "Message not sent because the WhatsApp 24-hour customer service window is closed"

WhatsApp only lets businesses send free-form messages within 24 hours of the customer's last message.

| Situation | What you can send |
| --- | --- |
| The customer messaged you in the last 24 hours | Any message, file or template |
| More than 24 hours since the customer's last message | Approved templates only |
| You're starting a new conversation | Approved templates only |

When the window is closed, the reply box tells you that you can only reply using a template message.

To fix it:

1. In the conversation, choose a template instead of typing a message.
2. Fill in any variables and send it.
3. When the customer replies, the window opens again for another 24 hours and you can reply normally.

> **Tip:** The window is based on the customer's last message, not yours. Sending several messages yourself doesn't extend it.

## A template is rejected or stays pending

Meta reviews every template before you can use it. EngageOne shows the status Meta returns.

| Status | What it means | What to do |
| --- | --- | --- |
| Pending | Meta is still reviewing it. | Wait for Meta to finish its review, then sync templates. |
| Approved | It can be sent. | Use it from the conversation or a campaign. |
| Rejected | Meta didn't accept it. | Check the reason in Meta's WhatsApp Manager, fix the content and submit a new template. |
| **Not submitted for WhatsApp approval** | It was saved but never sent to Meta. | Submit it for review. |

Common reasons Meta rejects templates:

- Variables like `{{1}}` at the very start or end of the message, or next to each other with no text between.
- Missing sample values for variables.
- The wrong category, for example a promotion submitted as **Utility**.
- Content that breaks WhatsApp's commerce or business policies.

### A new or approved template doesn't appear

1. Go to **Settings → Templates** and click **Sync templates**. Updates can take a couple of minutes.
2. Or open **Settings → Inboxes → (your WhatsApp inbox) → Configuration** and click **Sync Templates**.

Only approved templates can be sent. See [WhatsApp templates](/docs/advanced-features/whatsapp-templates).

## Messages to a number never arrive

| Cause | How to check | Fix |
| --- | --- | --- |
| The number isn't on WhatsApp | Ask the customer, or check the error on the message | Contact them on another channel |
| The number is missing the country code | Look at the contact's phone number | Save it in full international format, for example `+44 7700 900123` |
| Meta held back the message | Meta often doesn't deliver marketing templates to people who receive many business messages | Try again later, or use a utility template if the message isn't promotional |
| You've hit your messaging limit | Open the inbox's **Account Health** tab and check **Business messaging limit** | Wait for the limit to reset, or raise it in Meta |
| The number's quality is low or it's restricted | Check **Quality rating** and **Phone number status** in **Account Health** | Follow Meta's guidance in Meta Business Manager |

## Customer messages don't reach EngageOne

If customers say they've written to you but nothing appears:

1. Go to **Settings → Inboxes**, open your WhatsApp inbox and go to the **Account Health** tab.
2. Check the webhook section. If the webhook is missing or points to the wrong address, click **Register Webhook**.
3. Send a test message from your own phone to check.

If you set up the connection manually, you can also check the callback address and verify token in your Meta app's WhatsApp webhook settings. See [WhatsApp](/docs/channels/whatsapp).

### "Webhook not verified" in Meta

Meta shows this when the verify token in your Meta app doesn't match EngageOne's.

1. Open **Settings → Inboxes → (your WhatsApp inbox) → Configuration**.
2. Copy the **Webhook Verification Token**.
3. Paste it into the verify token field in your Meta app's webhook settings, and check the callback URL.
4. Save in Meta and try verifying again.

## Access token and connection errors

| What you see | Cause | Fix |
| --- | --- | --- |
| **This access token is invalid or expired.** | The token was revoked, expired or lost its permissions | Generate a new permanent token in Meta Business Settings and update it with **Update API Key** in the **Configuration** tab |
| **WhatsApp access token needs attention** in **Account Health** | Meta can't validate the token | Go to **Configuration** to verify or replace the token |
| **WhatsApp connection needs to be refreshed** | A quick-setup connection has expired | Go to **Configuration** and reconnect with Meta |
| **Your inbox is disconnected. You won't receive new messages until you reauthorize it.** | The connection to Meta was lost | Click the reconnect link in the banner and sign in to Meta again |
| **Your WhatsApp Business registration isn't complete.** | Meta hasn't finished registering the number | Check the display name status in Meta Business Manager before reconnecting |

Administrators also get an email when a WhatsApp connection expires.

## Using WhatsApp through Twilio?

The 24-hour window and template rules are the same. For Twilio-specific setup and webhook problems, see [WhatsApp through Twilio](/docs/channels/whatsapp-twilio).

## Related articles

- [WhatsApp](/docs/channels/whatsapp)
- [WhatsApp templates](/docs/advanced-features/whatsapp-templates)
- [WhatsApp through Twilio](/docs/channels/whatsapp-twilio)
- [Campaigns](/docs/advanced-features/campaigns)
