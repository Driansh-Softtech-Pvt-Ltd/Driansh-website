---
title: "LeadSquared"
description: "Sync EngageOne contacts to LeadSquared as leads and log conversation starts and transcripts as LeadSquared activities."
---

The LeadSquared integration keeps your LeadSquared CRM up to date with the people who contact you in EngageOne, and logs their conversations on each lead.

## What it syncs

| When this happens in EngageOne | What happens in LeadSquared |
| --- | --- |
| A contact is created or updated and has an email, a phone number or a social profile | A lead is created, or the matching lead is updated, with the contact's first name, last name, email and mobile number. |
| A conversation starts (if **Push Conversation Activity** is on) | A "Conversation Started" activity is added to the lead, with the channel, start time, conversation number and a link to the conversation. |
| A conversation is resolved (if **Push Transcript Activity** is on) | A "Conversation Transcript" activity is added to the lead, with the channel, conversation number, a link and the full transcript. |

Syncing is one-way, from EngageOne to LeadSquared. Changes made in LeadSquared don't come back into EngageOne.

> **Note:** LeadSquared is available if it's turned on for your account. If you don't see the **LeadSquared** card under **Settings → Integrations**, contact your EngageOne administrator.

## Before you start

- You need the **Administrator** role in EngageOne.
- In LeadSquared, get your API **Access Key** and **Secret Key**. You'll find them in your LeadSquared settings under API and webhooks.

## Connect LeadSquared

1. Go to **Settings → Integrations** and click **Configure** on the **LeadSquared** card.
2. Click **Connect**.
3. Fill in the form:

| Field | What it does |
| --- | --- |
| **Access Key** | Your LeadSquared access key. Required. |
| **Secret Key** | Your LeadSquared secret key. Required. |
| **Push Conversation Activity** | Tick to add an activity to the lead when a conversation is created. |
| **Conversation Activity Score** | The lead score to give the conversation activity. Leave empty for 0. |
| **Push Transcript Activity** | Tick to add the conversation transcript to the lead when the conversation is resolved. |
| **Transcript Activity Score** | The lead score to give the transcript activity. Leave empty for 0. |

4. Click **Create**.

After you connect, EngageOne finds the right LeadSquared data centre for your account and creates the two activity types in LeadSquared, if they don't exist yet. Their names start with your EngageOne brand name, for example "EngageOne Conversation Started" and "EngageOne Conversation Transcript".

## How leads are matched

- The first time a contact syncs, EngageOne looks for an existing lead and creates one if none is found. It then remembers which lead belongs to that contact.
- Later updates go to the same lead.
- If that lead is deleted or merged in LeadSquared, EngageOne finds or creates a lead again on the next sync.
- Contacts with no email, phone number or social profile aren't synced.

> **Tip:** Ask for an email or phone number early, for example with a [pre-chat form](/docs/website-live-chat/pre-chat-forms), so new chats reach LeadSquared as leads.

## Disconnect LeadSquared

1. Go to **Settings → Integrations → LeadSquared**.
2. Click **Disconnect** and confirm with **Yes, Disconnect**.

Leads and activities already in LeadSquared stay there.

## Related articles

- [Contacts and segments](/docs/features/contacts-and-segments)
- [Pre-chat forms](/docs/website-live-chat/pre-chat-forms)
- [Custom attributes](/docs/features/custom-attributes)
