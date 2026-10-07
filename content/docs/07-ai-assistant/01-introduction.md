---
title: "Introduction to the EngageOne AI Assistant"
description: "Learn what the EngageOne AI Assistant does for your customers and agents, how it fits into your inboxes, and what you need before you start."
---

The EngageOne AI Assistant answers common customer questions for you and gives your agents AI help inside every conversation.

## What the AI Assistant does

The AI Assistant works in two places.

| Where | Who it helps | What it does |
| --- | --- | --- |
| Your connected inboxes | Customers | Replies to new conversations, answers from your knowledge, and hands the chat to your team when it can't help. |
| The conversation screen | Agents | Suggests replies, improves drafts, summarises conversations and answers questions through Copilot. |

## How it works for customers

1. A customer starts a conversation in an inbox that has an assistant connected.
2. The conversation starts in the **Pending** status, which means the assistant is handling it.
3. The assistant looks up answers in its FAQs and replies in the chat.
4. If the customer asks for a person, or the assistant can't answer, it hands the conversation to your team. The conversation moves to **Open** and appears in your agents' lists.
5. If the issue is solved, the assistant can resolve the conversation.

> **Note:** The assistant only replies while a conversation is **Pending**. Once an agent takes over, or the conversation is handed off, the assistant stops replying in that conversation.

## How it works for agents

Agents get AI help without leaving the conversation:

- **Copilot** – a side panel where you ask questions about the conversation or your account.
- **AI actions in the reply box** – suggest a reply, improve your draft, change its tone, fix grammar and spelling, or summarise the conversation.
- **Label suggestions** – suggested labels for conversations that don't have any yet.

See [Copilot for agents](/docs/ai-assistant/copilot-for-agents) for details.

## Where to find it

Open **AI Assistant** in the left sidebar. Inside, each assistant has these pages:

| Page | What you do there |
| --- | --- |
| **Overview** | See how many conversations the assistant handled, resolved and handed off. |
| **FAQs** | Add, edit and approve the questions and answers the assistant uses. |
| **Documents** | Add website pages and PDFs so the assistant can learn from them. |
| **Scenarios** | Describe how to handle specific situations, such as refund requests. |
| **Playground** | Test the assistant before customers see it. |
| **Inboxes** | Choose which inboxes the assistant replies in. |
| **Tools** | Connect the assistant to your own systems through HTTP tools. |
| **Settings** | Change the name, messages, audience, schedule and other options. |

> **Note:** Some pages, such as Scenarios, Tools, Guardrails and Response guidelines, may not be available on every workspace or plan. If you don't see one, contact your administrator.

## Requirements

Before you use the AI Assistant, check the following:

- **The AI features are turned on for your workspace.** If the AI Assistant menu is missing or shows an upgrade message, ask your account administrator.
- **An AI provider is connected.** The AI Assistant uses an AI model from an external provider. On self-hosted installations, the server administrator adds the provider API key in the installation settings. Agent AI features in the reply box can also use an API key added under **Settings → Integrations → OpenAI**.
- **AI usage is paid for.** Depending on how your workspace is hosted, AI usage is either counted against your plan's AI credits or billed directly by your AI provider. Check with your administrator before you go live.
- **You are an administrator** if you want to create or change assistants.

> **Tip:** Messages you send in the **Playground** also use AI, so they count towards your usage in the same way as real conversations.

## Related articles

- [Create an assistant](/docs/ai-assistant/create-an-assistant)
- [Documents and FAQs](/docs/ai-assistant/documents-and-faqs)
- [Copilot for agents](/docs/ai-assistant/copilot-for-agents)
- [Inboxes and channels explained](/docs/account-setup/inboxes-and-channels-explained)
