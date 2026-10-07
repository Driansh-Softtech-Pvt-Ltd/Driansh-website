---
title: "Linear"
description: "Connect Linear to EngageOne to create issues from a conversation, link existing issues and see linked issues next to the chat."
---

The Linear integration lets your team turn a customer conversation into a Linear issue, or link it to an issue that already exists.

## Before you start

- An **Administrator** connects the Linear workspace. After that, every agent can create and link issues.
- Linear is available if it's turned on for your account. If you don't see the **Linear** card under **Settings → Integrations**, ask your EngageOne administrator.

## Connect Linear

1. Go to **Settings → Integrations** and click **Configure** on the **Linear** card.
2. Click **Connect**.
3. Linear opens. Choose your Linear workspace and approve access.
4. You're sent back to EngageOne and the integration shows as connected.

You can also connect from inside a conversation: open the **Linked Linear Issues** section in the conversation sidebar and click **Connect Linear workspace**. Agents who aren't administrators see a message asking them to contact their administrator instead.

## Create an issue from a conversation

1. Open the conversation.
2. In the conversation sidebar, open **Linked Linear Issues**.
3. Click **Create/Link Linear Issue**.
4. Keep the **Create** tab selected and fill in the form:

| Field | Required | Notes |
| --- | :-: | --- |
| **Title** | ✓ | A short summary of the problem. |
| **Description** | | Details for your product or engineering team. |
| **Team** | ✓ | The Linear team that owns the issue. |
| **Assignee** | | Loaded from the selected team. |
| **Label** | | Loaded from the selected team. |
| **Priority** | | |
| **Project** | | Loaded from the selected team. |
| **Status** | | Loaded from the selected team. |

5. Click **Create**.

The issue is created in Linear with a link back to the conversation. A note such as "Linear issue ENG-123 was created by Asha" is added to the conversation, so everyone can see what happened.

## Link an existing issue

1. In **Linked Linear Issues**, click **Create/Link Linear Issue**.
2. Switch to the **Link** tab.
3. Search for the issue by its title or ID and select it.
4. Click **Link**.

### Link an issue by pasting its URL

You can also link an issue from a private note. Paste the Linear issue URL into a private note in the conversation:

```
Tracking this in https://linear.app/your-team/issue/ENG-123/checkout-fails-on-safari
```

EngageOne links that issue to the conversation automatically, if it isn't linked already.

## See and unlink issues

The **Linked Linear Issues** section lists every issue linked to the conversation, with its **Status**, **Priority**, **Assignee** and **Labels**. Click the arrow icon next to an issue to open it in Linear.

To remove a link, click the unlink icon on the issue. The issue stays in Linear; only the link is removed.

## Disconnect Linear

1. Go to **Settings → Integrations → Linear**.
2. Click **Delete** and confirm with **Yes, Delete**.

## Related articles

- [Private notes and mentions](/docs/features/private-notes-and-mentions)
- [Labels](/docs/features/labels)
- [Slack](/docs/integrations/slack)
