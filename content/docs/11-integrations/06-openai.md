---
title: "OpenAI"
description: "Add your own OpenAI API key to EngageOne to power reply suggestions, rewriting, summaries and label suggestions in conversations."
---

The OpenAI integration lets EngageOne's AI writing tools in the reply box run on your own OpenAI account, and turns on label suggestions.

## What your key powers

When the integration is connected, these features use your OpenAI API key:

| Feature | Where you find it |
| --- | --- |
| **Suggest a reply** | Sparkle icon in the reply box |
| **Improve reply**, **Change tone** and **Fix grammar & spelling** | Sparkle icon in the reply box, when your draft has text |
| **Summarize the conversation** | Sparkle icon in the reply box |
| **Suggested labels** | Inside the conversation, when label suggestions are on |

Usage is billed to your OpenAI account by OpenAI.

> **Note:** These AI writing tools must be turned on for your account. If you don't see the sparkle icon in the reply box, the tools aren't available on your account. Connecting OpenAI doesn't turn them on by itself.

**Ask Copilot** and the EngageOne AI Assistant don't use this key. They are set up separately. See [Introduction to the EngageOne AI Assistant](/docs/ai-assistant/introduction).

## Before you start

- You need the **Administrator** role in EngageOne.
- You need an OpenAI account with API access and billing set up.
- Create a secret key in your OpenAI dashboard under **API keys**. Copy it somewhere safe; OpenAI only shows it once.

## Connect OpenAI

1. Go to **Settings → Integrations** and click **Configure** on the **OpenAI** card.
2. Click **Connect**.
3. Paste your key into **API Key**.
4. Tick **Show label suggestions** if you want EngageOne to suggest labels for conversations.
5. Click **Create**.

EngageOne checks the key with OpenAI before saving it. You'll see **Validating with OpenAI...** while it checks. If the key is wrong or has no access, you get an error and nothing is saved.

> **Important:** Treat your API key like a password. Anyone with it can use your OpenAI account.

## Use AI in the reply box

1. Open a conversation.
2. Click the sparkle icon above the reply box.
3. Choose **Suggest a reply**, **Summarize the conversation**, or, if your draft has text, **Improve reply**, **Change tone** or **Fix grammar & spelling**.
4. Review the result and edit it before you send.

See [Copilot for agents](/docs/ai-assistant/copilot-for-agents) for each action in detail.

## Label suggestions

With **Show label suggestions** ticked, open conversations that don't have labels yet can show **Suggested labels** based on what the customer wrote.

- Click a suggestion to select it, then click **Add selected labels**.
- Or click **Add all labels**.
- Dismiss the suggestions if they don't fit.

Suggestions come from the labels you've already created. See [Labels](/docs/features/labels).

## Change or remove the key

You can't edit a saved key. To change the key or the label suggestion setting:

1. Go to **Settings → Integrations → OpenAI**.
2. Click **Disconnect** and confirm with **Yes, Disconnect**.
3. Click **Connect** and add the key again with the settings you want.

## Related articles

- [Copilot for agents](/docs/ai-assistant/copilot-for-agents)
- [Labels](/docs/features/labels)
- [Introduction to the EngageOne AI Assistant](/docs/ai-assistant/introduction)
