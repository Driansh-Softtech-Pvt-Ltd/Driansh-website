---
title: "Audit logs"
description: "See who signed in and who changed agents, teams, inboxes, automations and settings in your EngageOne account, and filter the log by person, event and date."
---

The audit log is a record of important activity in your account, so you can see who changed what and when.

Audit logs are available on plans that include them.

## Who can see audit logs

Only administrators can open the audit log. Agents don't see it in settings.

## Open the audit log

1. Go to **Settings → Audit Logs**.
2. The newest events are listed first.

Each row shows:

| Column | What it shows |
| --- | --- |
| **Activity** | What happened and who did it, for example "Asha signed in" or "Ravi updated an automation rule (#12)" |
| **Time** | When it happened |
| **Location** or **IP address** | Where the request came from. Depending on your account, you see a location or the IP address. |

Changes made by EngageOne itself, rather than a person, are shown as **System**.

## What is recorded

| Group | Events |
| --- | --- |
| **Access** | **Sign in / sign out**: each time someone signs in or out |
| **Agents & teams** | **Agents**: agents invited, and changes to an agent's role or availability |
| | **Teams**: teams created, updated or deleted |
| | **Team members**: agents added to or removed from a team |
| | **Inbox collaborators**: agents added to or removed from an inbox |
| **Configuration** | **Account settings**: changes to the account configuration |
| | **Inboxes**: inboxes created or updated |
| | **Webhooks**: webhooks created, updated or deleted |
| | **Automation rules**: rules created, updated or deleted |
| | **Macros**: macros created, updated or deleted |
| **Conversations** | **Conversation deletions**: conversations that were deleted |
| | **Message deletions**: messages that were deleted |

Secrets, such as webhook secrets, are never stored in the log.

> **Note:** The audit log records changes to your setup and access. It doesn't record everyday work such as replies, assignments or label changes. Use the conversation itself and [reports](/docs/reports/overview-and-live-view) for those.

## Find an event

Use the controls at the top of the page:

- **Search by name or email**: show only events by one person.
- **All events**: pick one or more event types, such as **Sign in / sign out** or **Automation rules**.
- **Date range**: limit the list to a period.
- **Newest first** / **Oldest first**: change the order.

Click **Clear filters** to see everything again.

## Ways to use the audit log

- **Unexpected sign-in**: filter by **Sign in / sign out** and the person's email to see when and where they signed in.
- **An automation started acting strangely**: filter by **Automation rules** to see who edited it and when.
- **Someone lost access to an inbox**: filter by **Inbox collaborators** to see who removed them.
- **A conversation disappeared**: filter by **Conversation deletions**.

> **Tip:** If you see activity you don't recognise, ask the person to change their password and turn on [two-factor authentication](/docs/advanced-features/two-factor-authentication).

## Related articles

- [Roles and permissions](/docs/account-setup/roles-and-permissions)
- [Two-factor authentication](/docs/advanced-features/two-factor-authentication)
- [Single sign-on](/docs/advanced-features/single-sign-on)
