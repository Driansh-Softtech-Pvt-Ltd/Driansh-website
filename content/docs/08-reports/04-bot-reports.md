---
title: "Bot reports"
description: "See how many conversations your bots and the EngageOne AI Assistant handle, how many they resolve on their own, and how often they hand off to agents."
---

The Bot report shows how much work your bots take off your team, and how often a customer still needs a person.

## Which bots are included

The report counts conversations in inboxes that have an active bot. That includes:

- An agent bot connected to the inbox. See [Agent bots](/docs/advanced-features/agent-bots).
- A Dialogflow bot connected through the Dialogflow integration. See [Dialogflow](/docs/integrations/dialogflow).
- An EngageOne AI Assistant connected to the inbox, if the AI Assistant is turned on for your account. See [EngageOne AI Assistant](/docs/ai-assistant/introduction).

> **Note:** The report looks at which inboxes have an active bot right now. If you remove a bot from an inbox, that inbox's past conversations no longer appear in the report.

## Open the Bot report

1. Go to **Reports → Bot**.
2. Choose a date range at the top of the page, such as **Last 7 days**, **Last 30 days** or **Custom date range**.
3. Choose how to **Group By**: **Day**, **Week**, **Month** or **Year**. The options depend on the length of the period.

You need to be an administrator, or have a custom role with **Manage reports**, to see reports.

## Summary metrics

| Metric | Meaning | How it's calculated |
| --- | --- | --- |
| **No. of Conversations** | Conversations handled by a bot. | Conversations created in the period in inboxes with an active bot. |
| **Total Responses** | Replies sent in those conversations. | Count of outgoing messages in those conversations. |
| **Resolution Rate** | Share of conversations the bot resolved on its own. | Bot-resolved conversations ÷ conversations handled by the bot × 100. |
| **Handoff Rate** | Share of conversations passed to a human. | Conversations handed off to agents ÷ conversations handled by the bot × 100. |

Rates are shown as whole percentages. A dash (**--**) means there was nothing to calculate in the period.

### What counts as a resolution

A conversation counts as **resolved by the bot** when it is resolved and no agent sent a reply in it. If an agent replied at any point, the resolution belongs to the team, not the bot.

### What counts as a handoff

A conversation counts as a **handoff** when the bot passes it to your team, for example when the customer asks for a person or the bot can't answer. Each conversation is counted as a handoff only once.

If a conversation was both handed off and later resolved in the same period, it counts as a handoff, not a bot resolution.

## Charts

Below the summary, two charts show the trend over your chosen period:

| Chart | What it shows |
| --- | --- |
| **Resolution Count** | Number of conversations the bot resolved in each day, week, month or year. |
| **Handoff Count** | Number of conversations the bot handed to your team in each period. |

## Reading the numbers

- **High resolution rate, low handoff rate** – the bot answers most questions. Spot-check a few resolved conversations to make sure customers really got what they needed.
- **High handoff rate** – customers often need a person. Look at the handed-off conversations to find missing answers you can add to your bot or AI Assistant.
- **Resolution and handoff rates add up to much less than 100%** – many conversations are still open, or were closed by an agent without a handoff.

> **Tip:** Compare the Bot report with the [CSAT report](/docs/reports/csat-reports) to see whether faster bot answers also keep customers happy.

## Related articles

- [Agent bots](/docs/advanced-features/agent-bots)
- [Introduction to the EngageOne AI Assistant](/docs/ai-assistant/introduction)
- [Overview and live view](/docs/reports/overview-and-live-view)
- [Conversation, agent, inbox, team and label reports](/docs/reports/conversation-agent-team-reports)
