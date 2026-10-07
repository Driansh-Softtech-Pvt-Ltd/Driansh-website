---
title: "Documents and FAQs"
description: "Teach the EngageOne AI Assistant with website pages, PDFs and FAQs, keep documents up to date, and review suggested FAQs before they go live."
---

The AI Assistant answers customers from its knowledge, which you build from documents and FAQs.

## How knowledge works

| Source | What it is | How it's used |
| --- | --- | --- |
| **Documents** | Website pages and PDF files you add. | The assistant reads them and creates FAQs from the content. |
| **FAQs** | Question-and-answer pairs. | The assistant searches approved FAQs to answer customers. |
| **FAQ suggestions** | FAQs the assistant proposes from real conversations. | You review them. Once approved, they become FAQs. |

> **Note:** The assistant answers from approved FAQs. If an answer is missing or wrong, fix the FAQ or the source document.

## Add a website page

1. Open **AI Assistant → Documents**.
2. Click **Create a new document**.
3. Under **Document Type**, choose **URL**.
4. Enter the page address in **URL**, for example `https://www.example.com/help/shipping`.
5. Optionally, enter a **Document Name (Optional)**.
6. Click **Create**.

EngageOne reads the page and creates FAQs from it in the background. It also follows links found on that page and may add those pages as separate documents.

> **Tip:** Add a page that links to your most useful help content, such as your help center home page or a "Support" page. Avoid pages behind a login, because EngageOne can't read them.

## Add a PDF

1. Open **AI Assistant → Documents**.
2. Click **Create a new document**.
3. Under **Document Type**, choose **PDF File**.
4. Click **Choose PDF file** and select your file. The maximum file size is 10 MB.
5. Click **Create**.

## Check and refresh documents

Each document shows when it was last updated and how many FAQs it produced. Use the filters at the top of the page to find documents by source (**Web pages** or **PDFs**) or by status:

| Status | Meaning |
| --- | --- |
| **Updated** | The content is up to date. |
| **Needs update** | The content may be out of date and should be refreshed. |
| **Updating** | EngageOne is reading the page now. |
| **Failed** | The page couldn't be read. Common reasons are **Page not found**, **Access denied** or **Page took too long to respond**. |

To refresh a document after you change your website:

1. Open the document's menu.
2. Click **Refresh now** (or **Retry refresh** if it failed).

To refresh several documents at once, select them and click **Refresh**. Depending on your setup, documents may also refresh automatically on a schedule.

To see what EngageOne read from a page, open the document's menu and click **View details**. You'll see the **Crawled content** and the **Related FAQs** created from it.

## Add an FAQ manually

1. Open **AI Assistant → FAQs**.
2. Click **Create new FAQ**.
3. Enter the **Question**, for example "Do you ship internationally?".
4. Enter the **Answer**.
5. Click **Create**.

Manual FAQs are useful for short facts that aren't on your website, such as holiday opening hours or a new promotion.

## Edit, approve or delete FAQs

On the **FAQs** page, open an FAQ's menu to:

- **Edit** – change the question or answer.
- **Approve** – make a pending FAQ available to the assistant.
- **Delete** – remove it.

Use the search box to find FAQs, and select several to delete them together.

## Review suggested FAQs

When **Generate FAQs from resolved conversations** is turned on in the assistant's settings, the assistant groups questions customers ask often and turns them into FAQ suggestions.

1. Open **AI Assistant → FAQs**.
2. When suggestions are ready, a banner appears. Click **Review suggestions**. You can also reach suggestions from the **Overview** page.
3. Suggestions are ranked by how often customers ask them. Click **Review sources** to see the conversations behind a suggestion.
4. Edit the question or answer if needed and click **Save changes**.
5. Click **Approve FAQ** to add it to the assistant's knowledge, or **Dismiss** to remove it.

> **Important:** Suggestions are based on what your agents told customers. Always check the answer is still correct before you approve it.

## Tips for good knowledge

- Keep one topic per page or FAQ.
- Use the same words your customers use.
- Remove or update old pages, then refresh the document.
- After any change, ask the same question in the **Playground** to check the answer.

## Related articles

- [Create an assistant](/docs/ai-assistant/create-an-assistant)
- [Scenarios and tools](/docs/ai-assistant/scenarios-and-tools)
- [Set up a help center](/docs/help-center/set-up-a-help-center)
