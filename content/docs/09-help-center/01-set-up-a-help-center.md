---
title: "Set up a help center"
description: "Create an EngageOne help center portal, organise categories, write and publish articles, and show your help articles inside the website chat widget."
---

A help center is a public website of help articles, so customers can find answers on their own before they contact you.

## How a help center is organised

| Item | What it is |
| --- | --- |
| **Portal** | Your help center site. You can have more than one, for example one per brand or product. |
| **Locale** | A language version of a portal, such as English or Spanish. |
| **Category** | A group of related articles, such as "Billing" or "Getting started". |
| **Article** | A single help page. |

## Step 1: Create a portal

1. In the left sidebar, open **Help Center**.
2. If you have no portals yet, click **Create Portal**. Otherwise, open the portal switcher and click **New portal**.
3. Enter a **Name**, for example "Acme Help".
4. Check the **Slug**. This is the short name used in your help center's web address, for example `acme-help`.
5. Click **Create**.

Your help center is available at an address like this:

```text
https://<your-engageone-domain>/hc/acme-help/en
```

You can change the name and slug later in the portal settings.

## Step 2: Brand your portal

1. Go to **Help Center → Settings**.
2. On the **General** tab, set:

| Field | What it does |
| --- | --- |
| **Logo** | Shown at the top of your help center. |
| **Name** | The portal name. |
| **Header text** | The welcome line on the home page, for example "How can we help?". |
| **Page title** | The title shown in the browser tab and search results. |
| **Home page link** | A link back to your main website. |
| **Slug** | The portal part of the web address. |
| **Brand color** | The main color used for links and buttons. |

3. Click **Save changes**.
4. On the **Appearance** tab, choose a layout:
   - **Classic** – a home page with search and featured topics.
   - **Documentation** – a sidebar layout that keeps every guide one click away. You can also add **Social links** that appear in the footer.
5. Click **Save changes**.

## Step 3: Create categories

1. Go to **Help Center → Categories**.
2. Click **New category**.
3. Enter a **Name**, a **Slug** and a short **Description**.
4. Click **Create**.

Categories belong to one locale. If your help center has more than one language, choose the locale at the top of the page before you create categories. See [Custom domain and languages](/docs/help-center/custom-domain-and-languages).

> **Tip:** Start with five to eight categories that match the questions customers ask most. You can add more later.

## Step 4: Write an article

1. Go to **Help Center → Articles**.
2. Click **New article**.
3. Type the article title at the top.
4. Write the content below. Type `/` to see formatting options, such as headings, lists, images and code blocks.
5. Choose a category for the article. Articles without one are listed as **Uncategorized**.
6. Optionally, open **More properties** to add a **Meta title**, **Meta description** and **Meta tags** for search engines.

EngageOne saves your work automatically. New articles start as **Draft**, so customers can't see them yet.

## Step 5: Publish

1. Open the article.
2. Click **Preview** to check how it looks.
3. Click **Publish**.

Articles have three statuses:

| Status | Who can see it |
| --- | --- |
| **Draft** | Only your team. |
| **Published** | Everyone who visits your help center. |
| **Archived** | Only your team. Use this for articles that are no longer needed. |

If you edit a published article, your changes are saved as **Unpublished edits**. Customers keep seeing the live version until you click **Publish changes**. Click **Discard changes** to go back to the live version.

To change several articles at once, select them on the **Articles** page and choose **Publish**, **Draft**, **Archive**, **Category** or **Delete**.

## Step 6: Show your help center in the chat widget

Link a portal to your website inbox so customers can search and read articles inside the chat widget.

1. Go to **Settings → Inboxes**.
2. Open your website inbox and go to its **Settings** tab.
3. In **Help Center**, choose your portal.
4. Save your changes.

The widget now shows articles from your portal on its home screen. Customers can read an article and then start a chat if they still need help.

You can also do the opposite and add your live chat widget to the help center:

1. Go to **Help Center → Settings → Integrations**.
2. Under the live chat option, choose your website inbox.
3. Click **Save changes**.

The same **Integrations** tab lets you add analytics tools such as Google Tag Manager or Google Analytics 4 by entering their IDs.

## Related articles

- [Custom domain and languages](/docs/help-center/custom-domain-and-languages)
- [Widget settings](/docs/website-live-chat/widget-settings)
- [Install the widget](/docs/website-live-chat/install-the-widget)
- [Documents and FAQs](/docs/ai-assistant/documents-and-faqs)
