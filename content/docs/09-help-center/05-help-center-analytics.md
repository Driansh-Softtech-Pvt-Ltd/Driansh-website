---
title: "Help center analytics"
description: "See article views in EngageOne and connect Google Tag Manager, Google Analytics 4, Hotjar, Plausible, Amplitude, Microsoft Clarity or Meta Pixel to your portal."
---

Find out which help articles people read, and connect your own analytics tools to your help center to learn more about your visitors.

## Article views in EngageOne

EngageOne counts views for every published article. You don't need to set anything up.

1. Go to **Help Center → Articles**.
2. Each article shows its number of views.

How views are counted:

- Only published articles count views.
- A view counts when the visitor interacts with the page, for example moves the mouse, touches the screen or uses the keyboard. Just loading the page isn't enough.
- A visitor who opens the same article again from the same browser within 24 hours counts once.
- Articles opened inside the chat widget also count views.
- Your team's visits to the public article count too, so expect a few extra views while you test.

The most viewed articles are the ones shown in the chat widget's **Popular Articles** list. See [Show help articles in the chat widget](/docs/help-center/show-articles-in-the-widget).

## Connect an analytics tool

You can add one or more of these tools to a portal. EngageOne adds each tool's standard tracking code to your public help center pages.

| Tool | What to enter | Example format |
| --- | --- | --- |
| **Google Tag Manager** | Container ID | `GTM-XXXXXXX` |
| **Google Analytics 4** | Measurement ID, found under **Admin → Data streams** in Google Analytics | `G-XXXXXXXXXX` |
| **Hotjar** | Site ID, found under **Sites & organizations** in Hotjar | `1234567` |
| **Plausible** | The domain set up in your Plausible site settings | `help.example.com` |
| **Amplitude** | API key from your Amplitude project settings | `0123456789abcdef0123456789abcdef` |
| **Microsoft Clarity** | Project ID from your Clarity project settings | `abcd1234ef` |
| **Meta Pixel** | Pixel ID from Meta Events Manager | `123456789012345` |

To connect a tool:

1. Go to **Help Center → Settings**.
2. Open the **Integrations** tab.
3. Enter the ID for each tool you want to use.
4. Click **Save changes**.

Only administrators can see and change these settings.

If an ID isn't in the right format, EngageOne shows a message such as **Enter a valid container ID, for example GTM-XXXXXXX.** and doesn't save it. Copy the ID again from the tool and check for extra characters.

To stop tracking with a tool, clear its field and click **Save changes**.

> **Tip:** If you already manage tags with Google Tag Manager, add only your GTM container ID and load the other tools from GTM. This keeps all your tags in one place.

## Where tracking runs

| Page | Analytics tools load? |
| --- | --- |
| Your public help center, on its default address or your custom domain | Yes |
| Articles opened inside the chat widget | No |

Because the widget doesn't load your analytics tools, use the EngageOne view count to see how often articles are read in the widget.

## Check that it works

1. Open your public help center in a private browser window.
2. Open your analytics tool's live or real-time view.
3. Visit a few articles. Your visits should appear within a few minutes.

If nothing appears, check the ID, make sure an ad blocker isn't blocking the tool, and see [Refresh your browser](/docs/troubleshooting/refresh-your-browser).

## Privacy

Analytics tools can set their own cookies and collect visitor data under their own terms. Check whether your privacy policy or cookie banner needs to mention them before you turn them on. See [Cookies and privacy](/docs/troubleshooting/cookies-and-privacy).

## Related articles

- [Set up a help center](/docs/help-center/set-up-a-help-center)
- [Custom domain and languages](/docs/help-center/custom-domain-and-languages)
- [Show help articles in the chat widget](/docs/help-center/show-articles-in-the-widget)
- [Cookies and privacy](/docs/troubleshooting/cookies-and-privacy)
