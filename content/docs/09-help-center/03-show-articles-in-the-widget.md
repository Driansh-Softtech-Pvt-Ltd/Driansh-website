---
title: "Show help articles in the chat widget"
description: "Link an EngageOne help center portal to your website inbox so the chat widget shows popular articles and lets visitors browse your help center."
---

Link your help center to your website inbox so visitors can read answers inside the chat widget before they start a conversation.

## What visitors see

When a portal is linked, the widget's home screen shows a **Popular Articles** card:

- Up to six of your most viewed published articles.
- A **View all articles** link that opens your help center's categories inside the widget.

Clicking an article opens it in the widget, so visitors don't leave your website. If they still need help, they go back and start a chat.

## Before you start

- You have a help center portal with at least one **Published** article. See [Set up a help center](/docs/help-center/set-up-a-help-center).
- You have a website live chat inbox, and the widget is installed on your site. See [Install the widget](/docs/website-live-chat/install-the-widget).
- You are an administrator.

## Link a portal to your website inbox

1. Go to **Settings → Inboxes**.
2. Open your website inbox and go to the **Settings** tab.
3. Find **Help Center** and choose your portal from the list.
4. Click **Update**.

Open your website and the widget. The **Popular Articles** card appears on the home screen.

To stop showing articles, choose **None** under **Help Center** and click **Update**.

> **Note:** Each inbox can show one portal. If you run several brands, create one website inbox per brand and link each to its own portal.

## Match the widget language to your portal

The widget shows articles in the visitor's widget language. That language must exist in your portal:

| Widget language | Portal languages | Result |
| --- | --- | --- |
| English (`en`) | English | English articles are shown. |
| Portuguese (Brazil) (`pt_BR`) | Portuguese (`pt`) | Portuguese articles are shown, because the base language matches. |
| French (`fr`) | English and Spanish only | No articles are shown. |

If the card doesn't appear, add the missing language to your portal and translate a few articles. See [Custom domain and languages](/docs/help-center/custom-domain-and-languages).

The widget language comes from your account's language, or from the `locale` option in your widget script. See [Supported languages](/docs/troubleshooting/supported-languages).

## Which articles appear

- Only **Published** articles are shown. Drafts and archived articles never appear.
- Articles are ordered by views, so the list changes as visitors read different articles.
- Only articles in the matching language are shown.

> **Tip:** To push an article into the list, link to it from your website or emails. The more it's read, the higher it ranks.

## Show the chat widget on your help center

You can also link the other way round, so your help center pages show a chat bubble:

1. Go to **Help Center → Settings → Integrations**.
2. Under the live chat option, choose your website inbox. Choose **No widget** to remove it.
3. Click **Save changes**.

## Troubleshooting

| Problem | Likely cause | Fix |
| --- | --- | --- |
| No articles card in the widget | No portal is linked to the inbox | Choose the portal under **Help Center** in the inbox's **Settings** tab |
| No articles card, but a portal is linked | The widget language isn't one of the portal's languages, or there are no published articles in it | Add the language to the portal, or publish articles in it |
| An article you just published is missing | It has fewer views than the top six | It appears once it's among the most read, or visitors can find it under **View all articles** |
| Changes don't show on your website | The page is using an older copy of the widget | Reload your website. See [Refresh your browser](/docs/troubleshooting/refresh-your-browser) |

## Related articles

- [Set up a help center](/docs/help-center/set-up-a-help-center)
- [Custom domain and languages](/docs/help-center/custom-domain-and-languages)
- [Widget settings](/docs/website-live-chat/widget-settings)
- [Install the widget](/docs/website-live-chat/install-the-widget)
