---
title: "API overview"
description: "Learn the three EngageOne APIs: the Application API for your account, the Client API for custom chat apps, and the Platform API for multi-tenant setups."
---

EngageOne has three REST APIs. Pick the one that matches who is making the call: your team, your customer, or the person who runs the whole installation.

## The three APIs at a glance

| API | Who calls it | Base path | How it authenticates |
| --- | --- | --- | --- |
| **Application API** | Your own scripts, back-office tools and bots, acting for an agent or a bot | `/api/v1/accounts/<account_id>/...` | A user or agent bot access token |
| **Client API** | Your app, acting for a customer in an API inbox | `/public/api/v1/inboxes/<inbox_identifier>/...` | The inbox identifier and the contact's `source_id` in the path |
| **Platform API** | The installation's super admin, for multi-tenant or reseller setups | `/platform/api/v1/...` | A platform app access token |

All paths start with your EngageOne address, for example:

```
https://<your-engageone-domain>/api/v1/accounts/<account_id>/conversations
```

> **Tip:** Your account ID is the number after `/accounts/` in the address bar when you're signed in to EngageOne.

## Application API

Use the Application API to do what an agent can do in the dashboard: list and update conversations, send messages, manage contacts, labels, teams, inboxes and reports.

Every request needs an access token in a request header. The header is named `api_access_token`:

```
api_access_token: <your-access-token>
```

The token decides what you're allowed to do. A personal token has the same permissions as the person who owns it. An agent bot token can only reach a small set of conversation endpoints. See [Access tokens](/docs/developers/access-tokens).

### Example: list conversations

This request lists open conversations assigned to you:

```bash
curl "https://<your-engageone-domain>/api/v1/accounts/<account_id>/conversations?status=open&assignee_type=me&page=1" \
  -H "api_access_token: <your-access-token>"
```

Useful query parameters:

| Parameter | Values |
| --- | --- |
| `status` | `open`, `resolved`, `pending`, `snoozed` or `all`. Defaults to `open` |
| `assignee_type` | `me`, `unassigned` or `assigned`. Leave it out to get all |
| `conversation_type` | `mention`, `participating` or `unattended` |
| `inbox_id` | Only conversations in this inbox |
| `team_id` | Only conversations for this team |
| `labels[]` | Only conversations with any of these labels |
| `page` | Page number, starting at 1 |

The response has two parts. `data.meta` holds counts such as `mine_count`, `unassigned_count` and `all_count`. `data.payload` holds the conversations.

### Example: send a reply

```bash
curl -X POST "https://<your-engageone-domain>/api/v1/accounts/<account_id>/conversations/<conversation_id>/messages" \
  -H "api_access_token: <your-access-token>" \
  -H "Content-Type: application/json" \
  -d '{"content": "Thanks, your refund is on its way.", "message_type": "outgoing", "private": false}'
```

Set `"private": true` to add a private note instead of a reply.

## Client API

Use the Client API when you build your own chat experience, for example inside a mobile app. Your app calls it on behalf of the customer, so it doesn't use an access token. Instead, each path includes:

- The **Inbox Identifier** of an API inbox.
- The contact's `source_id`, which you get when you create the contact.

```
https://<your-engageone-domain>/public/api/v1/inboxes/<inbox_identifier>/contacts/<source_id>/conversations
```

The [API channel](/docs/channels/api-channel) article walks through the full flow, from creating a contact to receiving agent replies.

## Platform API

The Platform API is for whoever runs the EngageOne installation, for example a reseller who creates accounts for their own customers. It can:

- Create, update and delete accounts.
- Create users, add them to accounts and get a single sign-on link for them.
- Create and manage agent bots.

A super admin creates a platform app in the super admin console and copies its access token. Send it in the same `api_access_token` header. A platform app can only see and change the accounts, users and bots it created itself.

> **Note:** If you use EngageOne as a hosted service, you normally don't have super admin access. Use the Application API instead, or contact Driansh support.

## Errors and limits

| Status | Meaning |
| --- | --- |
| `401` | The token is missing or wrong, or a bot token called an endpoint bots can't use |
| `403` | The account doesn't have API access, or your role doesn't allow the action |
| `404` | The account, conversation or other record wasn't found |
| `422` | The request body is invalid. The response explains what to fix |
| `429` | You sent too many requests in a short time |

EngageOne limits how many requests one IP address can send per minute, with tighter limits on a few busy endpoints. If you get a `429`, wait a little and retry. Spread large jobs out instead of sending everything at once.

> **Note:** API access is available on plans that include it. If your token works in the dashboard but API calls return `403`, ask your administrator to check your plan.

## Related articles

- [Access tokens](/docs/developers/access-tokens)
- [Webhooks](/docs/developers/webhooks)
- [API channel](/docs/channels/api-channel)
- [Agent bots](/docs/advanced-features/agent-bots)
