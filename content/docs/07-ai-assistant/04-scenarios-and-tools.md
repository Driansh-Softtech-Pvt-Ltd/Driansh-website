---
title: "Scenarios and tools"
description: "Use scenarios to tell the EngageOne AI Assistant how to handle specific situations, and give it built-in and custom HTTP tools to take action."
---

Scenarios tell the AI Assistant how to handle a specific situation, and tools let it take actions such as adding a label or looking up an order.

> **Note:** Scenarios and custom tools may not be available on every workspace or plan. If you don't see **Scenarios** or **Tools** under **AI Assistant**, contact your administrator.

## What is a scenario?

A scenario is a set of steps for one type of request. For example:

- "A customer asks for a refund"
- "A customer wants to buy more licences"
- "A customer reports that the app is not loading"

When a conversation matches a scenario, the assistant follows its steps and can use the tools you mention in them.

## Create a scenario

1. Open **AI Assistant → Scenarios**.
2. Click **Add a scenario**. You can also start from one of the **Example scenarios** and click **Add this**.
3. Fill in the form:

| Field | What to enter |
| --- | --- |
| **Title** | A short name, for example "Refund request". |
| **Description** | When this scenario applies. The assistant uses this to decide when to follow it. |
| **How to handle** | The steps the assistant should take, written as a numbered list. |

4. In **How to handle**, type `@` to insert a tool into a step.
5. Click **Create**.

Here is an example of the **How to handle** text:

```text
1. Ask for the order number and the reason for the refund.
2. Add a private note with the order number and reason using @Add Private Note.
3. Add the label "refund" using @Add Label to Conversation.
4. Tell the customer a team member will reply within one business day, then use @Handoff to Human.
```

Each scenario has an **Enabled** / **Disabled** switch, so you can turn it off without deleting it. Select several scenarios to delete them together.

> **Tip:** Describe one situation per scenario. Keep the **Description** specific so the assistant doesn't follow the wrong scenario.

## Built-in tools

These tools are included with every assistant and can be used in scenarios.

| Tool | What it does |
| --- | --- |
| **Add Contact Note** | Adds a note to the customer's contact profile. |
| **Add Private Note** | Adds a private note to the conversation that only your team can see. |
| **Update Priority** | Changes the conversation priority. |
| **Add Label to Conversation** | Adds a label to the conversation. |
| **FAQ Lookup** | Searches your FAQs for an answer. |
| **Resolve Conversation** | Resolves the conversation when the issue is solved. |
| **Handoff to Human** | Passes the conversation to your team. |

The assistant can always use **FAQ Lookup** and **Handoff to Human**, even without a scenario.

## Custom HTTP tools

Custom tools connect the assistant to your own systems through an HTTP request. For example, an "Order Lookup" tool can fetch an order's status from your store.

### Create a custom tool

1. Open **AI Assistant → Tools**.
2. Click **Create a new tool**.
3. Fill in the form:

| Field | What to enter |
| --- | --- |
| **Tool Name** | A clear name, for example "Order Lookup". |
| **Description** | What the tool does and when to use it, for example "Looks up order details by order ID". |
| **Method** | `GET` or `POST`. |
| **Endpoint URL** | The address to call. You can include parameters, for example `https://api.example.com/orders/{{ order_id }}`. |
| **Authentication Type** | **None**, **Bearer Token**, **Basic Auth** or **API Key** (header name and value). |
| **Parameters** | The details the assistant must collect from the customer. For each one, set a name, a type (**String**, **Number**, **Boolean**, **Array** or **Object**), a description, and whether it is **Required**. |
| **Request Body Template (Optional)** | The body to send with a `POST` request. |
| **Response Template (Optional)** | How to turn the response into text for the assistant. |

4. Click **Test connection** to check the endpoint responds. Testing works only for endpoints without templates or a request body.
5. Save the tool.

Example request body template:

```json
{
  "order_id": "{{ order_id }}"
}
```

Example response template:

```text
Order {{ order_id }} status: {{ status }}
```

Enabled custom tools are available to the assistant, and you can insert them into scenarios with `@` like the built-in tools.

### Manage custom tools

- Use the **Enabled** / **Disabled** switch to turn a tool off. If enabled scenarios use the tool, EngageOne warns you before you disable it.
- Open a tool's menu to **Edit tool** or **Delete tool**.

> **Tip:** Only add the tools you need. When an assistant has many tools, it can be less reliable at choosing the right one.

> **Important:** Custom tools send data to the address you enter. Only connect systems you trust, use HTTPS, and give API keys the least access they need.

## Test your scenarios and tools

1. Open **AI Assistant → Playground**.
2. Send a message that should trigger your scenario.
3. Open the run details under the reply to see which scenario and tools were used.

## Related articles

- [Create an assistant](/docs/ai-assistant/create-an-assistant)
- [Documents and FAQs](/docs/ai-assistant/documents-and-faqs)
- [Labels](/docs/features/labels)
- [Private notes and mentions](/docs/features/private-notes-and-mentions)
