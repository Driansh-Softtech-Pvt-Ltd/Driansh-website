---
title: "Campaigns"
description: "Send proactive website chat messages based on URL and time on page, and schedule one-off SMS and WhatsApp campaigns to labelled contacts."
---

Campaigns let you start the conversation: greet website visitors at the right moment, or send one message to a group of contacts over SMS or WhatsApp.

EngageOne has three kinds of campaign. Find them all under **Campaigns** in the left sidebar.

| Campaign | Channel | How it is sent |
| --- | --- | --- |
| **Live chat** | Website live chat | Ongoing. Shows to each visitor who matches the URL and time on page. |
| **SMS** | SMS inboxes, including Twilio SMS | One off. Sent once to an audience at a scheduled time. |
| **WhatsApp** | WhatsApp Cloud inboxes | One off. Sends an approved template to an audience at a scheduled time. |

## Live chat campaigns

A live chat campaign pops up a message in your website widget when a visitor is on a certain page for a certain time.

1. Go to **Campaigns → Live chat**.
2. Click **Create campaign**.
3. Fill in the form:

| Field | What to enter |
| --- | --- |
| **Title** | A name your team will recognise. Visitors don't see it. |
| **Message** | The text the visitor sees. |
| **Select Inbox** | The website inbox whose widget shows the campaign. |
| **Sent by** | The agent the message appears to come from, or **Bot**. |
| **URL** | The page the campaign runs on, starting with `http://` or `https://`. |
| **Time on page(Seconds)** | How long the visitor must stay on the page before the message shows. |

4. Under **Other preferences**:
   - Keep **Enable campaign** ticked to make it live.
   - Tick **Trigger only during business hours** to show it only while the inbox is open.
5. Click **Create**.

### Match more than one page

The **URL** field accepts `*` as a wildcard. For example:

```
https://www.example.com/pricing
https://www.example.com/products/*
```

The first matches only the pricing page. The second matches every page under `/products/`.

### What happens when a visitor replies

The campaign message starts a new conversation when the visitor replies. If **Sent by** is an agent, the conversation goes to the inbox as usual. If it is **Bot** and the inbox has an agent bot, the bot handles the conversation first.

> **Tip:** To pause a live chat campaign without deleting it, click the edit button on its card and untick **Enable campaign**. The card then shows **Disabled**.

## SMS campaigns

An SMS campaign sends one text message to every contact with the labels you choose.

1. Go to **Campaigns → SMS**.
2. Click **Create campaign**.
3. Enter a **Title** and the **Message**.
4. In **Select Inbox**, choose an SMS inbox.
5. In **Audience**, choose one or more contact labels. Contacts with any of these labels receive the message.
6. Set the **Scheduled time**.
7. Click **Create**.

Contacts without a phone number are skipped.

### Personalise the message

Add contact details to the message with variables in double curly brackets:

```
Hi {{contact.first_name}}, your appointment at {{account.name}} is confirmed for tomorrow.
```

| Variable | Inserts |
| --- | --- |
| `{{contact.name}}` | The contact's full name |
| `{{contact.first_name}}` / `{{contact.last_name}}` | First or last name |
| `{{contact.email}}` / `{{contact.phone_number}}` | Email or phone number |
| `{{inbox.name}}` | The inbox name |
| `{{account.name}}` | Your account name |

## WhatsApp campaigns

A WhatsApp campaign sends an approved message template to every contact with the labels you choose. WhatsApp campaigns are available if they are turned on for your account, and they work with WhatsApp Cloud inboxes.

1. Go to **Campaigns → WhatsApp**.
2. Click **Create campaign**.
3. Enter a **Title**.
4. In **Select Inbox**, choose your WhatsApp inbox.
5. In **WhatsApp Template**, pick an approved template. A preview shows its **Language** and **Category**.
6. Fill in each value under **Variables**. You can type a fixed value or click **Insert customer field** to add a detail such as **Customer first name**, so each customer sees their own details.
7. In **Audience**, choose one or more contact labels.
8. Set the **Scheduled time**.
9. Click **Create**.

### Fallback values

When you insert a customer field, you can set **If … is empty, use:** with a fallback, for example "there" in "Hi there". If you leave the fallback empty, contacts who don't have that detail are skipped, so nobody gets a message with a blank in it.

### Campaign analytics

Once a WhatsApp campaign starts sending, click **View analytics** on its card to see:

| Metric | Meaning |
| --- | --- |
| **Audience** | Contacts included in the campaign |
| **Submitted to WhatsApp** | Messages WhatsApp accepted for delivery |
| **Delivered** | Messages that reached the contact's device, including read ones |
| **Read** | Messages the contact opened |
| **Failed** | Messages WhatsApp couldn't deliver |
| **Skipped** | Contacts skipped before sending, usually for a missing or invalid phone number |

The **Deliveries** table lists every contact with their status and, for failures, the reason.

> **Important:** Only send marketing templates to contacts who agreed to hear from you. WhatsApp can limit or block numbers that get many complaints.

## Campaign status

SMS and WhatsApp campaigns show **Scheduled** until their time, **Processing** while sending, and **Completed** when done. SMS and WhatsApp campaigns can't be edited once created. Use the delete button on a card to remove a campaign. To send again, create a new campaign.

## Related articles

- [WhatsApp templates](/docs/advanced-features/whatsapp-templates)
- [Labels](/docs/features/labels)
- [Contacts and segments](/docs/features/contacts-and-segments)
- [Install the widget](/docs/website-live-chat/install-the-widget)
