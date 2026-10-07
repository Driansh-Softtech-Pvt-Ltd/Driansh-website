---
title: "SLA policies"
description: "Set first response, next response and resolution targets in EngageOne, apply them with automations, and spot misses on conversations and in reports."
---

An SLA policy sets how fast your team should reply to and resolve conversations, and EngageOne flags every conversation that misses a target.

SLA policies are available on plans that include them. If you don't see **SLA** in settings, the feature isn't turned on for your account.

## What an SLA policy measures

| Target | Short name | The clock runs from… | It's met when… |
| --- | --- | --- | --- |
| **First Response Time** | FRT | The conversation gets the SLA | A teammate sends the first reply |
| **Next Response Time** | NRT | The customer writes again after a reply | A teammate replies again |
| **Resolution Time** | RT | The conversation gets the SLA | The conversation is resolved |

You can fill in any or all of the three targets. A target you leave empty isn't checked.

## Create an SLA policy

You need to be an administrator.

1. Go to **Settings → SLA**.
2. Click **Add SLA**.
3. Enter an **SLA Name**, for example `Enterprise-P1`. Use letters, numbers, hyphens and underscores only.
4. Optionally add a **Description**, such as "SLA for premium customers".
5. Set **First Response Time**, **Next Response Time** and **Resolution Time**. For each one, type a number and pick **Minutes**, **Hours** or **Days**.
6. Turn on **Business Hours** if the clock should only run while the inbox is open.
7. Click **Create**.

The SLA list shows each policy with its FRT, NRT and RT targets and whether business hours are **Turned on** or **Turned off**.

> **Tip:** Create one policy per service level, for example `Enterprise-P0` for issues that need immediate attention and `Enterprise-P1` for issues that need a quick acknowledgement.

### How business hours work

With **Business Hours** on, EngageOne pauses the clock when the conversation's inbox is closed. It uses the working hours you set on that inbox. For example, a 2-hour target that starts 30 minutes before closing time is due 90 minutes after the inbox opens again.

If the inbox has no business hours turned on, the clock runs around the clock.

> **Note:** Set business hours on each inbox first. See [Business hours and away messages](/docs/account-setup/business-hours-and-away-messages).

## Apply an SLA with an automation

SLAs are added to conversations by automation rules.

1. Go to **Settings → Automation → Create Automation**.
2. Choose an event, usually **Conversation Created**.
3. Add conditions to pick the conversations, for example **Inbox** equal to "Enterprise Support" or **Labels** containing `vip`.
4. Under **Actions**, choose **Add SLA** and select your policy.
5. Click **Create**.

Keep in mind:

- A conversation can have only one SLA. If it already has one, the **Add SLA** action is skipped.
- Once an SLA is on a conversation, it can't be removed or swapped for another.
- SLAs aren't applied to conversations from blocked contacts.

## Where you see SLA status

### In the conversation list and header

Conversations with an SLA show a small badge with the next target and the time left, for example **FRT due** or **NRT missed**. The badge is amber while the target is due and red once it's missed.

In the conversation header, hover over the badge to see **SLA Misses**: each missed target with the time it was missed.

### Notifications

When a target is missed, EngageOne notifies the assigned agent, the conversation's participants and all administrators. Each person can choose how they are told under **Profile settings → Notification preferences**:

- A conversation misses first response SLA
- A conversation misses next response SLA
- A conversation misses resolution SLA

### SLA reports

Go to **Reports → SLA** to see your **Hit Rate**, **Number of Misses** and **Number of Conversations** with an SLA. You can filter by SLA policy, inbox, agent, label or team, and click **Download SLA reports** to export the data.

## Delete a policy

Go to **Settings → SLA** and click the delete button on the policy, then confirm.

Deleting a policy also removes its SLA data from the conversations that had it. Policies can't be edited from the list, so to change a target, create a new policy and point your automation rule at it.

> **Important:** After you delete a policy, open any automation rule that used it and pick another policy in the **Add SLA** action.

## Related articles

- [Automations](/docs/features/automations)
- [Business hours and away messages](/docs/account-setup/business-hours-and-away-messages)
- [SLA reports](/docs/reports/sla-reports)
- [Conversation priority](/docs/advanced-features/conversation-priority)
