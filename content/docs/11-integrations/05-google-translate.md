---
title: "Google Translate"
description: "Connect Google Cloud Translation to EngageOne so agents can translate customer messages and conversations get their language detected."
---

The Google Translate integration lets agents translate any message in a conversation into their own language with one click.

## What it does

- **Translate messages.** Agents can translate a message into their preferred language from the message menu.
- **Detect the conversation language.** When a customer sends their first message, EngageOne detects its language and saves it on the conversation. You can then use the **Conversation Language** condition in [automations](/docs/features/automations), for example to route Spanish chats to a Spanish-speaking team.

## Before you start

You need:

- The **Administrator** role in EngageOne.
- A Google Cloud project with the **Cloud Translation API** turned on.
- A service account in that project that can use the Translation API, for example with the **Cloud Translation API User** role, and a JSON key file for it.

To create the key file in Google Cloud:

1. Open your project in the Google Cloud console and turn on the **Cloud Translation API**.
2. Go to **IAM & Admin → Service Accounts** and create a service account.
3. Give it a role that can use the Translation API.
4. Open the service account, go to **Keys** and add a new **JSON** key. The file downloads to your computer.

> **Note:** Google charges for Cloud Translation through your Google Cloud billing account. Check Google's pricing before you turn it on.

## Connect Google Translate

1. Go to **Settings → Integrations** and click **Configure** on the **Google Translate** card.
2. Click **Connect**.
3. Enter your **Google Cloud Project ID**.
4. In **Google Cloud Project Key File**, open the JSON key file in a text editor and paste its full contents.
5. Click **Create**.

> **Important:** The key file gives access to your Google Cloud project. Keep it private.

## Translate a message

1. Open a conversation.
2. Right-click the message, or open its menu.
3. Click **Translate**.

The translated text replaces the original in the conversation view. Click **View original** under the message to switch back, and **View translated** to see the translation again.

Each translation is saved, so the next time anyone translates that message into the same language, it appears straight away.

## Which language messages are translated into

EngageOne translates into your **Preferred Language** from your profile settings. If you haven't set one, it uses the account's **Site language** from **Settings → Account Settings**.

To change your preferred language:

1. Click your avatar at the bottom of the sidebar and click **Profile settings**.
2. Under **Preferred Language**, choose a language.

## Disconnect Google Translate

1. Go to **Settings → Integrations → Google Translate**.
2. Click **Disconnect** and confirm with **Yes, Disconnect**.

Translations already saved on messages stay visible.

## Related articles

- [Supported languages](/docs/troubleshooting/supported-languages)
- [Profile and notifications](/docs/getting-started/profile-and-notifications)
- [Automations](/docs/features/automations)
