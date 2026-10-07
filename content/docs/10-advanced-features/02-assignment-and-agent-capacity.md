---
title: "Assignment and agent capacity"
description: "Let EngageOne assign new conversations automatically: round robin per inbox, team auto-assign, assignment limits and capacity policies."
---

Auto-assignment hands each new conversation to an available agent, so nothing waits in the unassigned queue.

## How auto-assignment works

When auto-assignment is on for an inbox, EngageOne assigns a conversation when it is created, and again when an unassigned conversation is reopened.

- **Round robin**: conversations go to agents in turn, so the work is spread evenly.
- **Online agents only**: only agents who are members of the inbox and set to **Online** are picked. Agents set to **Busy** or **Offline** are skipped.
- **Already assigned**: conversations that already have an agent, or that a bot is handling, are left alone.
- **Nobody online**: the conversation stays unassigned until someone picks it up or it is reopened.

> **Tip:** Ask your team to set their availability at the start and end of each shift. See [Profile and notifications](/docs/getting-started/profile-and-notifications).

## Turn on auto-assignment for an inbox

1. Go to **Settings → Inboxes** and open the inbox.
2. Open the **Collaborators** tab.
3. Under **Agents**, add every agent who should handle this inbox, then click **Update**.
4. Under **Conversation Assignment**, turn on the auto-assignment toggle.

To stop auto-assignment, turn the toggle off. New conversations then stay unassigned until an agent or an automation assigns them.

### Limit how many conversations each agent gets

On plans that include it, the **Conversation Assignment** section also shows **Auto assignment limit**. Enter the most open conversations from this inbox that EngageOne may auto-assign to one agent, then click **Update**. An agent who reaches the limit is skipped until they resolve some conversations.

The limit only affects auto-assignment. Agents and admins can still assign more conversations by hand.

## Assign within a team

When a conversation is given to a team, EngageOne can pick an agent from that team.

1. Go to **Settings → Teams** and create or edit a team.
2. Tick **Allow auto assign for this team.**
3. Save the team.

When a team is set on a conversation, by hand or with an automation such as **Assign a Team**, EngageOne picks an online team member who is also a member of the inbox. If the current agent isn't in the team, they are unassigned first.

> **Note:** Team auto-assign follows the same rules as inbox auto-assignment: only online agents are picked, and the inbox's assignment limit still applies.

## Assignment policies and agent capacity

If advanced assignment is turned on for your account, you get more control under **Settings → Agent Assignment**. The page has two kinds of policy.

### Assignment policies

An assignment policy decides how conversations are handed out in the inboxes you link to it. Each inbox can have one policy.

1. Go to **Settings → Agent Assignment** and open **Assignment policy**.
2. Click **New policy**.
3. Enter a **Policy name** and **Description**, and set the status to **Policy is active**.
4. Choose an **Assignment order**:
   - **Round robin**: assign conversations evenly among agents.
   - **Balanced**: assign based on how much capacity each agent has left. Available on plans that include it.
5. Choose an **Assignment priority**:
   - **Earliest created**: the oldest conversation is assigned first.
   - **Longest waiting**: the conversation that has waited longest is assigned first.
6. Under **Fair distribution policy**, set **Assign max** conversations per agent in a time window, so nobody gets flooded. The default is 100 per hour.
7. Under **Skip stale conversations**, choose how old an unassigned conversation can be before it is skipped. The default is 7 days. Clear the field to assign conversations of any age.
8. Under **Added inboxes**, click **Add inbox** and pick the inboxes this policy covers.
9. Click **Create policy**.

You can also link a policy from the inbox itself: open the inbox's **Collaborators** tab and, under **Conversation Assignment**, choose **Link existing policy** or **Create new policy**. Without a policy, the inbox uses the default rules: earliest created conversations first, round robin distribution.

> **Note:** If you add an inbox that already belongs to another policy, EngageOne asks you to confirm. The inbox moves to the new policy.

### Agent capacity policies

An agent capacity policy sets how much work each agent can hold. Each agent can have one policy.

1. Go to **Settings → Agent Assignment** and open **Agent capacity policy**.
2. Click **New policy** and enter a **Policy name** and **Description**.
3. Under **Inbox capacity limits**, click **Add inbox**, select an inbox and set **Max conversations** for it.
4. Under **Exclusion rules**, choose conversations that shouldn't count towards capacity:
   - Conversations tagged with specific labels.
   - Conversations older than a time you set.
5. Under **Assigned agents**, click **Add agent** and choose the agents this policy applies to.
6. Click **Create policy**.

When an agent reaches their limit for an inbox, they are skipped for new conversations in that inbox until they free up capacity.

## Related articles

- [Teams](/docs/account-setup/teams)
- [Automations](/docs/features/automations)
- [Profile and notifications](/docs/getting-started/profile-and-notifications)
- [Agent bots](/docs/advanced-features/agent-bots)
