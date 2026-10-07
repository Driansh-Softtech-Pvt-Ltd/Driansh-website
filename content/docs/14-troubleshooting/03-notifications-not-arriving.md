---
title: "Notifications not arriving"
description: "A step-by-step checklist for missing EngageOne email, push and mobile notifications: preferences, browser permission, focus modes, inboxes and bots."
---

Work through this checklist from top to bottom. Most missing notifications are fixed in the first three steps.

## 1. Check your notification preferences

1. Click your avatar at the bottom of the left sidebar and choose **Profile settings**.
2. Scroll to **Notification preferences**.
3. Make sure the events you expect are ticked in the **Email** or **Push notification** column.

Each event is separate. For example, ticking **A conversation is assigned to you** doesn't send you a notification for new messages in that conversation. For that, also tick **A new message is created in an assigned conversation**.

| You want to hear about | Tick |
| --- | --- |
| Every new conversation in your inboxes | **A new conversation is created** |
| Conversations given to you | **A conversation is assigned to you** |
| Teammates asking for your help | **You are mentioned in a conversation** |
| Customer replies in your conversations | **A new message is created in an assigned conversation** |
| Replies in conversations you've joined | **A new message is created in a participating conversation** |
| SLA problems | The three **misses ... SLA** events, if your account uses SLAs |

Preferences are saved per account. If you belong to more than one EngageOne account, check them in each one.

## 2. Check that you're in the right inboxes

You're only notified about new conversations in inboxes you're a member of.

- Ask your administrator to check **Settings → Inboxes → (inbox) → Collaborators** and make sure you're listed.
- If you can't open a conversation because of your role or team, you won't be notified about it either.

## 3. Check the browser permission (push)

- Make sure the switch next to **Enable push notifications for your browser so you're able to receive them** is on in **Notification preferences**.
- Make sure your browser allows notifications for your EngageOne address.

See [Browser notifications](/docs/troubleshooting/browser-notifications) for steps in Chrome, Edge, Safari and Firefox.

## 4. Check your computer and phone settings

Even when EngageOne sends a notification, your device can hide it.

| Setting | What to check |
| --- | --- |
| **Focus or Do Not Disturb** | macOS Focus, Windows Do not disturb, and iPhone or Android focus modes silence notifications. Turn them off, or allow your browser or the EngageOne app. |
| **Browser notifications in the system** | In Windows **Settings → System → Notifications** or macOS **System Settings → Notifications**, allow your browser. |
| **Battery saver** | On Android, battery optimisation can delay app notifications. Exclude the EngageOne app from it. |
| **App notifications on the phone** | Check the app is allowed to send notifications in your phone's settings. |

## 5. Understand when EngageOne doesn't notify

Some situations don't create a notification by design:

| Situation | Why |
| --- | --- |
| A bot or the EngageOne AI Assistant is still handling the conversation | The "new conversation" notification is sent when the bot hands the conversation to your team. |
| You sent the message yourself | You aren't notified about your own replies or your own assignments. |
| The contact is blocked | Only mentions still notify you. |

> **Note:** Your availability (**Online**, **Busy** or **Offline**) doesn't turn notifications on or off. It controls whether automatic assignment gives you new conversations. If you're **Offline**, you may simply not be assigned anything to be notified about.

## 6. Check email notifications

- Look in your spam or junk folder, and mark EngageOne emails as **Not spam**.
- Check that your email address in **Profile settings** is correct.
- Make sure you've confirmed your email address. Unconfirmed users don't get email notifications.

## 7. Check the mobile app

- Allow notifications for the app in your phone's settings.
- Sign out of the app and sign in again.
- Make sure you're signed in to the same installation and account as in the browser.

See [Mobile apps](/docs/troubleshooting/mobile-apps).

## 8. Still nothing?

- Check **My Inbox** in the sidebar. Assignments, mentions and new messages are listed there even if a push or email didn't reach you.
- Try a different browser or device to see whether the problem is with one browser.
- If push doesn't work for anyone on your team, ask your administrator or Driansh support to check that push notifications are set up for your EngageOne installation.

## Related articles

- [Profile and notifications](/docs/getting-started/profile-and-notifications)
- [Browser notifications](/docs/troubleshooting/browser-notifications)
- [Mobile apps](/docs/troubleshooting/mobile-apps)
- [Invite your team](/docs/getting-started/invite-your-team)
