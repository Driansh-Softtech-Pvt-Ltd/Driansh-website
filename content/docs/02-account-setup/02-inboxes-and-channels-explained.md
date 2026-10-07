---
title: Inboxes and channels explained
description: Understand how channels and inboxes work in EngageOne, which channels you can connect, and how to plan, create and manage your inboxes.
---

This article explains the difference between a channel and an inbox, and helps you decide how many inboxes to create.

## Channels and inboxes in one minute

- A **channel** is the way a customer reaches you: website chat, WhatsApp, Instagram, email and so on.
- An **inbox** is what you create in EngageOne to connect one channel. Messages from that channel arrive in that inbox as conversations.

Each inbox has its own name, members, settings and business hours. You can create as many inboxes as you need, including several of the same type. For example, you might have one WhatsApp inbox for Sales and another for Support.

## Channels you can connect

| Channel | Good for | Setup guide |
| --- | --- | --- |
| **Website** | Live chat on your website or web app | [Website live chat](/docs/channels/website-live-chat) |
| **WhatsApp** | Chat with customers on WhatsApp through the WhatsApp Cloud API | [WhatsApp](/docs/channels/whatsapp) |
| **WhatsApp (Twilio)** | WhatsApp through a Twilio account | [WhatsApp via Twilio](/docs/channels/whatsapp-twilio) |
| **Facebook** | Facebook Messenger messages to your Facebook Page | [Facebook Messenger](/docs/channels/facebook-messenger) |
| **Instagram** | Instagram direct messages | [Instagram](/docs/channels/instagram) |
| **Email** | A shared support mailbox, such as Gmail, Outlook or any IMAP/SMTP provider | [Email](/docs/channels/email) |
| **SMS** | Text messages through Twilio or Bandwidth | [SMS](/docs/channels/sms) |
| **Telegram** | A Telegram bot for your business | [Telegram](/docs/channels/telegram) |
| **Line** | LINE Official Account messages | [LINE](/docs/channels/line) |
| **TikTok** | TikTok direct messages | [TikTok](/docs/channels/tiktok) |
| **API** | Any custom channel you build, such as your own mobile app | [API channel](/docs/channels/api-channel) |
| **Voice** and **WhatsApp Call** | Phone and WhatsApp voice calls | [Calling overview](/docs/voice/calling-overview) |

> **Note:** Which channels you see depends on your plan and how your installation is configured. If a channel is missing from the list, contact Driansh.

## How many inboxes do you need?

Use these rules of thumb:

- **One inbox per phone number, page, mailbox or website.** Each WhatsApp number, Facebook Page, Instagram account, email address and website needs its own inbox.
- **Split by team when it helps.** If different people answer sales and support, separate inboxes (or separate [teams](/docs/account-setup/teams)) keep their work apart.
- **Keep names clear.** Name inboxes so everyone knows what they are, for example "Website – Main site", "WhatsApp – Support" or "Email – billing@".

> **Tip:** Don't create extra inboxes just to sort conversations by topic. Use [labels](/docs/features/labels) and [teams](/docs/account-setup/teams) for that instead. Fewer inboxes are easier to manage.

## Create an inbox

1. Go to **Settings → Inboxes**.
2. Click **Add Inbox**.
   ![The Inboxes page in settings with the Add Inbox button highlighted](/docs/images/account-setup/inboxes-and-channels-explained-1.jpg)
3. Under **Choose a channel**, pick the channel you want to connect.
4. Follow the steps for that channel. Most channels ask you to sign in to the other service (for example Facebook) or paste keys from it (for example Twilio).
5. On the **Agents** step, pick who can work in this inbox and click **Add agents**.
6. When you see **Your Inbox is ready!**, click **Take me there** to open the inbox, or **More settings** to configure it.

## Who can see an inbox

- **Administrators** can see every inbox.
- **Agents** see conversations only in the inboxes they have been added to.

To change who works in an inbox, open it from **Settings → Inboxes** and use the **Collaborators** tab. See [Invite your team](/docs/getting-started/invite-your-team).

## Inbox settings

Open any inbox from **Settings → Inboxes** to see its tabs. The tabs you see depend on the channel:

| Tab | What you can do |
| --- | --- |
| **Settings** | Rename the inbox, change its avatar, set a greeting message and other channel options. For website inboxes, customise the chat widget. |
| **Collaborators** | Choose the agents for this inbox and turn automatic assignment on or off. |
| **Business Hours** | Set opening hours and an away message. See [Business hours and away messages](/docs/account-setup/business-hours-and-away-messages). |
| **CSAT** | Ask customers to rate conversations after they are resolved. See [CSAT surveys](/docs/features/csat-surveys). |
| **Pre Chat Form** | Website only. Ask visitors for details before they start a chat. See [Pre-chat forms](/docs/website-live-chat/pre-chat-forms). |
| **Configuration** | Channel-specific technical settings, such as allowed domains for the website widget or webhook details. |
| **Bot Configuration** | Connect an agent bot to the inbox. |
| **Account Health** | WhatsApp and Twilio inboxes. Check the status of the connected account. |

## Reply windows on messaging apps

Some messaging apps limit when businesses can send messages. For example, on WhatsApp you can reply freely only within 24 hours of the customer's last message. After that, EngageOne shows a message such as "You cannot reply due to 24 hour message window restriction", and you need to send an approved message template to restart the conversation.

Each channel guide explains its own rules.

## Delete an inbox

1. Go to **Settings → Inboxes**.
2. Click **Delete** next to the inbox.
3. Type the inbox name to confirm.

> **Important:** Deleting an inbox also deletes all of its conversations and messages. This can't be undone. If you only want to stop using a channel for a while, remove the agents from the inbox instead.

## Related articles

- [Your first conversation](/docs/getting-started/your-first-conversation)
- [Business hours and away messages](/docs/account-setup/business-hours-and-away-messages)
- [Website live chat](/docs/channels/website-live-chat)
- [WhatsApp](/docs/channels/whatsapp)
