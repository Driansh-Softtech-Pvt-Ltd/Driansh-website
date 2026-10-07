---
title: "TikTok"
description: "Connect your TikTok business account so direct messages arrive in EngageOne, and reply with text and images within TikTok's 48-hour window."
---

A TikTok inbox lets your team answer direct messages sent to your TikTok business account from inside EngageOne.

## How it works

1. You sign in with TikTok once. EngageOne creates an inbox named after your account.
2. When a customer sends you a direct message, TikTok passes it to EngageOne and a conversation opens.
3. Agents reply in EngageOne, and the reply goes out through TikTok's business messaging.
4. Messages you send from the TikTok app also appear in the conversation, so the history stays complete.

EngageOne refreshes TikTok access on its own. If TikTok access fully expires, the inbox asks you to reauthorize.

## Before you start

- You need a TikTok business account.
- Your EngageOne installation must have a TikTok app connected, and TikTok must be enabled for your account. If you don't see the **TikTok** tile in **Add Inbox**, or it's greyed out, ask your EngageOne administrator.

## Set up

1. Go to **Settings → Inboxes → Add Inbox → TikTok**.
2. Select **Continue with TikTok**.
3. Sign in to your TikTok business account and approve every permission on the consent screen.
4. TikTok sends you back to EngageOne. Pick the agents for this inbox and select **Add agents**.

> **Important:** You must approve all the permissions TikTok asks for. If you skip one, setup stops with "User did not grant all the required scopes".

If you connect the same TikTok account again, EngageOne updates the existing inbox instead of creating a second one.

## The 48-hour reply window

You can reply for 48 hours after the customer's last message. After that, the reply box is locked until they write again.

## What's supported

| Feature | Supported | Notes |
| --- | --- | --- |
| Receive text | Yes | |
| Receive images | Yes | |
| Receive shared posts | Yes | Shown as an embedded TikTok post |
| Send text | Yes | |
| Send an image | Yes | One JPG or PNG under 3 MB per message |
| Send text and an image together | No | Send them as two messages |
| Send video, audio or files | No | |
| Replies to a specific message | Yes | |
| Read receipts | Yes | |
| Messages sent from the TikTok app | Yes | Copied into the conversation |

## Troubleshooting

| Problem | Likely cause | Fix |
| --- | --- | --- |
| No **TikTok** tile in **Add Inbox** | TikTok isn't set up for your installation | Ask your EngageOne administrator |
| The **TikTok** tile is greyed out | TikTok isn't enabled for your account | Ask your EngageOne administrator to enable it |
| "User did not grant all the required scopes" | A permission was skipped on TikTok's consent screen | Select **Continue with TikTok** again and approve all permissions |
| The inbox shows a reauthorize banner | TikTok access has expired | Select **Reauthorize** and sign in again |
| Reply box is locked | More than 48 hours since the customer's last message | Wait for the customer to write again |
| "Sending attachments with text is not supported on TikTok." | Text and an image were sent together | Send them as two messages |
| The image is rejected | Wrong file type or too large | Use a JPG or PNG under 3 MB |

## Related articles

- [Instagram](/docs/channels/instagram)
- [Inboxes and channels explained](/docs/account-setup/inboxes-and-channels-explained)
- [Canned responses](/docs/features/canned-responses)
