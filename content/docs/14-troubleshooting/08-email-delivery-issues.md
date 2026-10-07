---
title: "Email delivery issues"
description: "Fix EngageOne email inbox problems: forwarding not set up, IMAP and SMTP sign-in errors, app passwords, replies in spam, and reconnecting Google or Microsoft."
---

Use this guide when customer emails don't reach EngageOne, or your replies don't reach customers.

## First, find out how your inbox receives email

Go to **Settings → Inboxes**, open the email inbox and open the **Configuration** tab.

| Your inbox uses | How email arrives |
| --- | --- |
| **Google** or **Microsoft** sign-in | EngageOne reads new mail from the mailbox about every minute. |
| **IMAP** | EngageOne signs in to your mailbox about every minute and picks up new mail. |
| **Forwarding** | Your mail provider forwards each new email to an EngageOne address. |

Then jump to the matching section below.

## New emails don't appear

### Forwarding isn't set up

An **Other Providers** inbox doesn't receive anything until you turn on forwarding or IMAP.

1. In the **Configuration** tab, find **Forward to Email** and copy the address shown.
2. In your mail provider, set up automatic forwarding of all incoming mail to that address. Some providers send a confirmation email first. Look for it in the EngageOne inbox and follow the link.
3. Send a test email to your support address from another mailbox.

If the **Configuration** tab says forwarding is disabled on this installation, ask your administrator to turn it on, or use IMAP instead.

> **Tip:** Forward all mail, not just some of it. Filters that forward only certain senders or subjects are a common reason emails go missing.

### IMAP can't sign in

When you save IMAP settings, EngageOne tests the connection and shows an error if it fails:

| Error | What it means | Fix |
| --- | --- | --- |
| **Please check the IMAP credentials and try again.** | The mail server rejected the login or password. | Check the **Login** (usually the full email address) and **Password**. If your provider uses two-step sign-in, use an app password. |
| **Please check the network connection, IMAP address and try again.** | The server address couldn't be found. | Check the **Address**, for example `imap.yourprovider.com`. |
| **Host unreachable, Please check the IMAP address, IMAP port and try again.** | EngageOne couldn't reach the server. | Check the address and **Port**. IMAP with SSL usually uses `993`. |
| **Connection timed out for** *address:port* | The server didn't answer in time. | Check the port and that **Enable SSL** matches it. Some servers block outside connections; ask your mail provider. |
| **Connection closed.** | The server ended the connection. | Check the SSL setting and authentication type, then try again. |

### IMAP was working and then stopped

- **You changed the mailbox password.** Update the password in the **IMAP** section and click **Update IMAP settings**.
- **IMAP was turned off in the mailbox.** Some providers let you turn IMAP access off. Turn it back on in the mailbox settings.
- **Emails went to another folder.** EngageOne reads the mailbox's main inbox. Mail that your provider's filters move to other folders, including spam, isn't picked up.

> **Note:** EngageOne only picks up recent emails. Older emails that were already in the mailbox before you connected aren't imported.

## Replies don't reach customers

### SMTP sign-in errors

When you save SMTP settings, EngageOne tests them:

| Error | What it means | Fix |
| --- | --- | --- |
| **SMTP authentication failed. Please verify your login credentials.** | The login or password is wrong, or the provider needs an app password. | Check the **Login** and **Password**, or create an app password. Check the **Authentication** setting too. |
| **Could not connect to SMTP server. Please check the server address and port.** | The server or port is wrong or blocked. | Check the **Address**. Use `587` with STARTTLS or `465` with SSL/TLS. |
| **SSL/TLS error. Please verify your encryption settings.** | The encryption doesn't match the port. | Use STARTTLS for port `587` and SSL/TLS for port `465`. |
| **SMTP server error. Please check your configuration and try again.** | The server refused the request. | Check the **Domain** field and your settings, then ask your mail provider. |

### Replies come from a different address

If SMTP isn't turned on for an **Other Providers** inbox, replies are sent from your installation's default sender address. Turn on SMTP in the **Configuration** tab so customers see your own address.

### Replies land in the customer's spam folder

- Turn on SMTP so replies come from your own mail server, not a shared sender.
- Ask whoever manages your domain to set up SPF, DKIM and DMARC records for the mail service you send through.
- Avoid sending only a link or an attachment with no text.
- Ask the customer to mark your email as **Not spam** and add your address to their contacts.

## App passwords

Many providers block normal passwords for IMAP and SMTP when two-step sign-in is on. Use an app password instead:

1. Sign in to your mail provider's account security settings.
2. Create an app password, sometimes called an app-specific password.
3. Paste it into the **Password** field in both the **IMAP** and **SMTP** sections.
4. Save each section.

For Gmail and Microsoft 365 mailboxes, it's usually easier to connect with **Google** or **Microsoft** sign-in instead. See [Email](/docs/channels/email).

## Reconnect Google or Microsoft

Google and Microsoft sign-ins can expire, for example after a password change, a security review or an admin policy change. When that happens:

- The inbox shows **Your inbox is disconnected. You won't receive new messages until you reauthorize it.**
- Administrators get an email saying the inbox has been disconnected.

To reconnect:

1. Click **Click here to reconnect.** in the banner, or open the inbox's settings.
2. Sign in again with the same mailbox.
3. Accept the permissions Google or Microsoft asks for.

Send a test email afterwards to make sure new mail arrives.

> **Important:** Sign in with the same mailbox that was connected before. Each email address can be connected to only one inbox.

## Quick test checklist

1. Send an email to your support address from a personal mailbox.
2. Wait a minute or two and check that it appears as a new conversation.
3. Reply from EngageOne.
4. Check that the reply arrives in the personal mailbox, in the same thread, from your support address.
5. Reply again from the personal mailbox and check it joins the same conversation.

## Related articles

- [Email](/docs/channels/email)
- [Inboxes and channels explained](/docs/account-setup/inboxes-and-channels-explained)
- [Notifications not arriving](/docs/troubleshooting/notifications-not-arriving)
- [Message signatures](/docs/advanced-features/message-signatures)
