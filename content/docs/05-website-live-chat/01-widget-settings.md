---
title: "Customise the live chat widget"
description: "Change the colour, greeting, reply time, availability, allowed domains and features of your EngageOne website live chat widget."
---

Every website inbox in EngageOne has its own widget, and you can change how it looks and behaves without touching your website code.

## Where to find the widget settings

1. Go to **Settings → Inboxes**.
2. Find your website inbox and open its settings.
3. Use the tabs at the top of the page. Each tab controls a different part of the widget.
   ![Website inbox settings with the tabs along the top and a live widget preview](/docs/images/website-live-chat/widget-settings-1.jpg)

| Tab | What you change there |
| --- | --- |
| **Settings** | Inbox name, website domain, colour, welcome text, reply time, launcher bubble, greeting message, widget features and email options, with a live preview and the install script on the right |
| **Collaborators** | Which agents can see and reply in this inbox |
| **Configuration** | Allowed domains and identity validation |
| **Business Hours** | When your team shows as available |
| **CSAT** | Satisfaction surveys after a conversation is resolved |
| **Pre Chat Form** | Questions visitors answer before they start chatting |

> **Note:** Changes you save apply to the widget on your website straight away. You do not need to reinstall the script.

## Change the look of the widget

The **Settings** tab shows a live preview of the widget on the right, so you can see each change before you save it.

1. Open **Settings → Inboxes**, select your website inbox and stay on the **Settings** tab.
2. Fill in the fields you want to change:

| Field | What it does |
| --- | --- |
| **Website Avatar** | The image shown at the top of the widget. |
| **Website Name** | Your business or website name, shown in the widget header. |
| **Welcome Heading** | The large greeting, for example "Hi there!". |
| **Welcome Tagline** | One or two lines under the heading that tell visitors what to expect. |
| **Reply Time** | Sets the "Typically replies in…" text. Choose **In a few minutes**, **In a few hours** or **In a day**. |
| **Widget Color** | The main colour for the bubble, header and buttons. |
| **Bubble → Position** | Shows the chat bubble on the **Left** or **Right** of the page. |
| **Bubble → Type** | **Standard** shows a round icon. **Expanded Bubble** shows a wider button with text. |
| **Launcher Title** | The text on an expanded bubble, for example "Chat with us". |

3. Switch between **Preview** and **Script** above the preview to see the widget or the matching settings code.
4. Click **Update Widget Settings**.
   ![Widget fields such as Welcome Heading, Welcome Tagline, Widget Color and Bubble, next to the live preview](/docs/images/website-live-chat/widget-settings-2.jpg)

> **Tip:** Pick a widget colour with good contrast against white text. Visitors read the header and buttons on top of this colour.

## Set a greeting message

A greeting message is sent automatically when a visitor starts a conversation and sends their first message.

1. Open your website inbox and click the **Settings** tab.
2. Turn on **Enable channel greeting**.
3. Type your message in **Channel greeting message**, for example "Thanks for reaching out. We usually reply within a few minutes."
4. Click **Update**.

## Show when your team is available

By default, the widget shows "We are Online" when at least one agent in the inbox is online, and "We are away at the moment" when nobody is.

You can show fixed working hours instead:

1. Open your website inbox and click the **Business Hours** tab.
2. Turn on **Enable business availability for this inbox**.
3. Choose your time zone in **Select timezone**.
4. Under **Set your weekly hours**, turn each day on or off and set its hours. You can also mark a day as **All-Day**.
5. Write an **Unavailable message for visitors**. Visitors see this outside your working hours.
6. Click **Update business hours settings**.

Visitors can still leave a message outside your hours. Your team sees it the next time they log in.

> **Note:** Business hours also control away messages on other channels. See [Business hours and away messages](/docs/account-setup/business-hours-and-away-messages).

## Turn widget features on or off

1. Open your website inbox and click the **Settings** tab.
2. Find the **Features** section and tick the options you want:

| Option | What it does |
| --- | --- |
| **Display file picker on the widget** | Lets visitors attach files and images. |
| **Display emoji picker on the widget** | Shows an emoji button in the message box. |
| **Allow users to end conversation from the widget** | Lets visitors close the chat themselves. |
| **Use inbox name and avatar for the bot** | Shows the inbox name and avatar on bot replies instead of the bot's own. |

3. Click **Update**.

## Other options on the Settings tab

| Option | What it does |
| --- | --- |
| **Website Domain** | The website where you use this widget. |
| **Enable email collect box** | Asks visitors for their email address when they start a new conversation. |
| **Enable conversation continuity via email** | If you have the visitor's email, replies they miss in the chat are also sent by email, and they can reply from their inbox. |
| **Allow messages after conversation resolved** | Lets visitors keep writing after a conversation is resolved. |
| **Help Center** | Attaches one of your help centers to this inbox. |

## Limit which websites can show the widget

By default, anyone who copies your script could load your widget on another site. Use allowed domains to stop that.

1. Open your website inbox and click the **Configuration** tab.
2. In **Allowed Domains**, enter your domains separated by commas, for example `example.com, www.example.com, app.example.com`.
   ![The Configuration tab with Allowed Domains and Enable widget in mobile apps](/docs/images/website-live-chat/widget-settings-3.jpg)
3. If you also show the widget inside an iOS or Android app, turn on **Enable widget in mobile apps**. Mobile apps do not send domain information, so they would otherwise be blocked.
4. Save your changes.

> **Important:** Leaving **Allowed Domains** empty allows every domain. Add your domains before you go live.

## Related articles

- [Install the widget on your website](/docs/website-live-chat/install-the-widget)
- [Identify logged-in users](/docs/website-live-chat/identify-users)
- [Pre-chat forms](/docs/website-live-chat/pre-chat-forms)
- [Business hours and away messages](/docs/account-setup/business-hours-and-away-messages)
