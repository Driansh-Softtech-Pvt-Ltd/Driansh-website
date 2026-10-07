---
title: "Shopify"
description: "Connect your Shopify store to EngageOne and see a customer's recent orders, payment and fulfilment status right next to the conversation."
---

The Shopify integration shows a customer's Shopify orders inside the conversation, so you can answer order questions without switching tabs.

## Before you start

- You need the **Administrator** role in EngageOne.
- You need access to install apps on your Shopify store.
- Shopify is available on plans that include it. If you don't see it under **Settings → Integrations**, it isn't turned on for your account.

## Connect your store

1. Go to **Settings → Integrations** and click **Configure** on the **Shopify** card.
2. Click **Connect**.
3. In **Connect Shopify Store**, enter your **Store URL**, for example `your-store.myshopify.com`.
4. Confirm. Shopify opens.
5. Review the requested access and approve it.
6. You're sent back to EngageOne and the integration shows as connected.

> **Tip:** Use your store's `myshopify.com` address, not your custom shop domain. You'll find it in your Shopify admin under **Settings → Domains**.

If the connection fails, EngageOne shows an error on the Shopify page. Try again, and make sure you approved the app in Shopify.

## See orders in a conversation

1. Open a conversation.
2. In the conversation sidebar on the right, open the **Shopify Orders** section.

EngageOne looks up the customer in Shopify using the contact's email address or phone number. For each order you see:

| Detail | Example |
| --- | --- |
| **Order number** | Order #5012345678 |
| **Order date** | Mar 4, 2026 |
| **Total** | Shown in the order's currency |
| **Payment status** | Pending, Authorized, Partially Paid, Paid, Partially Refunded, Refunded or Voided |
| **Fulfilment status** | Fulfilled, Partially Fulfilled or Unfulfilled |

Click the order number to open the order in your Shopify admin.

If you see **No orders found**, the contact has no email or phone number, or no Shopify customer matches them. Add the right email or phone number to the contact and open the conversation again.

> **Note:** Orders are read from Shopify each time you open the section. EngageOne doesn't change anything in your store.

## Disconnect your store

1. Go to **Settings → Integrations → Shopify**.
2. Click **Delete** and confirm.

Uninstalling the app from your Shopify admin also disconnects it.

## Related articles

- [Contacts and segments](/docs/features/contacts-and-segments)
- [Identify users](/docs/website-live-chat/identify-users)
- [Dashboard apps](/docs/integrations/dashboard-apps)
