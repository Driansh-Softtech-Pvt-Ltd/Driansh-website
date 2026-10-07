---
title: "Video calls with Cloudflare RealtimeKit"
description: "Connect Cloudflare RealtimeKit to EngageOne so agents can start a video or voice call with a customer from a live chat conversation."
---

The Cloudflare RealtimeKit integration lets agents start a video call with a customer from inside a conversation. Both sides join the call in their browser, without installing anything.

## Where you can use it

The video call button appears in conversations from:

- **Website live chat** inboxes. The customer joins from the chat widget.
- **API** inboxes. Your own app receives the call invitation as a message and must show it to the customer.

It isn't available on other channels, such as WhatsApp, email or Messenger.

## Before you start

You need:

- The **Administrator** role in EngageOne.
- A Cloudflare account with **RealtimeKit** set up and an app created in it.
- A Cloudflare API token with **Realtime Admin** access to that account.

Collect these three values from your Cloudflare dashboard:

| Value | Where to find it |
| --- | --- |
| **Cloudflare Account ID** | Your Cloudflare account overview. |
| **RealtimeKit App ID** | The RealtimeKit app you created. |
| **Cloudflare API Token** | Create one under your Cloudflare API tokens, with Realtime Admin permission. |

> **Note:** Cloudflare charges for RealtimeKit usage on your Cloudflare account. Check Cloudflare's pricing before you turn it on.

## Connect Cloudflare RealtimeKit

1. Go to **Settings → Integrations** and click **Configure** on the **Cloudflare RealtimeKit** card.
2. Click **Connect**.
3. Enter the **Cloudflare Account ID**, **RealtimeKit App ID** and **Cloudflare API Token**.
4. Click **Create**.

EngageOne checks the details with Cloudflare before saving. If something is wrong, you see a message that tells you which part to fix, for example that the API token is inactive or the App ID wasn't found in this account.

> **Note:** If your account used the older Dyte video integration, delete it and connect again with your Cloudflare RealtimeKit details.

## Start a call

1. Open a website live chat or API conversation.
2. Make sure you're in **Reply** mode, not writing a private note.
3. Click the video call button at the bottom of the reply box. Its tooltip reads "Start a new video call with the customer".
4. EngageOne posts a meeting message in the conversation, for example "Asha has started a meeting".
5. Click **Click here to join** on that message. The call opens inside the conversation. Allow camera and microphone access when your browser asks.

## How the customer joins

On website live chat, the customer sees the meeting message in the chat widget. They click **Click here to join** to enter the call, and **Leave the call** when they're done.

Other agents can join the same call from the meeting message in the conversation.

## Leave a call

Click **Leave the room** under the call. You can rejoin from the meeting message while the meeting is still running.

## If something goes wrong

| Message | What to do |
| --- | --- |
| "There was an error creating a meeting link, please try again" | Check that the integration is still connected and the API token is active. |
| "There was an error joining the call, please try again" | Refresh the page and try again. Check your browser allows camera and microphone access. |

## Disconnect

1. Go to **Settings → Integrations → Cloudflare RealtimeKit**.
2. Click **Disconnect** and confirm with **Yes, Disconnect**.

## Related articles

- [Website live chat](/docs/channels/website-live-chat)
- [API channel](/docs/channels/api-channel)
- [Calling overview](/docs/voice/calling-overview)
