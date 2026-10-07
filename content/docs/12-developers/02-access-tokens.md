---
title: "Access tokens"
description: "Find, copy and reset your personal EngageOne access token or an agent bot token, and learn how to keep API tokens safe."
---

An access token lets a script or app call the EngageOne Application API on your behalf. There are two kinds: your personal token and agent bot tokens.

## Which token should I use?

| Token | Acts as | Can do | Use it for |
| --- | --- | --- | --- |
| **Personal access token** | You | Everything your role allows in the dashboard | Scripts, reports, back-office tools |
| **Agent bot token** | The bot | A small set of conversation actions | Bots that reply to customers and hand over to agents |

Both go in the same request header, named `api_access_token`:

```bash
curl "https://<your-engageone-domain>/api/v1/profile" \
  -H "api_access_token: <token>"
```

> **Tip:** For shared integrations, consider creating a separate agent user, for example "Integration User", and using its token. That way the integration keeps working when a teammate leaves, and its actions are easy to spot.

## Find your personal access token

1. Click your avatar at the bottom of the left sidebar.
2. Click **Profile settings**.
3. Scroll to the **Access Token** section.
4. Click the eye icon to show the token, or click **Copy** to copy it.

Your token has the same permissions as you. An administrator's token can change settings. An agent's token can only reach the inboxes and conversations that agent can see.

> **Note:** API access is available on plans that include it. If the section says API access tokens need a paid plan, ask your administrator.

## Reset your personal token

Reset your token if you think someone else has it, or when a person who had it leaves.

1. Open **Profile settings** and find **Access Token**.
2. Click **Reset**.
3. Click again to confirm.

You'll see "Access token regenerated successfully". The old token stops working straight away, so update every script that used it.

## Agent bot tokens

Each agent bot gets its own token when you create it.

1. Go to **Settings → Bots** and click **Add Bot**.
2. Enter a **Bot name** and a **Webhook URL**, then click **Create Bot**.
3. Copy the **Access Token** that appears and store it safely.

To see or reset it later, open **Settings → Bots**, click **Edit** on the bot, and use the **Access Token** field. The same dialog shows the bot's **Webhook Secret**, which your bot uses to check incoming webhooks.

A bot token can only:

- Get a conversation and update its status, priority, typing indicator and custom attributes.
- Send messages in a conversation.
- Assign a conversation to an agent or team.
- List and add labels on a conversation.

Any other endpoint returns `401` for a bot token. Use a personal token for those calls instead.

## Keep tokens secret

- Treat every token like a password.
- Keep tokens on your server, in environment variables or a secrets manager. Never put them in website code, mobile apps or public repositories.
- Use the Client API, not a token, for anything that runs on a customer's device. See [API channel](/docs/channels/api-channel).
- Give each integration its own token where you can, so you can reset one without breaking the others.
- Reset a token straight away if it shows up in logs, screenshots or chat messages.

## Related articles

- [API overview](/docs/developers/api-overview)
- [Agent bots](/docs/advanced-features/agent-bots)
- [Profile and notifications](/docs/getting-started/profile-and-notifications)
- [Roles and permissions](/docs/account-setup/roles-and-permissions)
