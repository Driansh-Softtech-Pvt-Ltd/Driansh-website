---
title: "Single sign-on (SAML)"
description: "Let your team sign in to EngageOne through your identity provider with SAML SSO: the settings to copy, attributes to send and how roles work."
---

SAML single sign-on lets your team sign in to EngageOne with your company's identity provider, such as Okta, Microsoft Entra ID or Google Workspace, instead of a separate password.

SAML SSO is available on plans that include it. If you don't see **Security** in settings, it isn't turned on for your account.

## Before you start

You need:

- To be an administrator in EngageOne.
- Admin access to your identity provider (IdP), so you can create a SAML app.

## Step 1: Create a SAML app in your identity provider

1. In EngageOne, go to **Settings → Security**.
2. Turn on **SAML SSO**.
3. In your identity provider, create a new SAML application. Keep both windows open.

EngageOne shows the values your IdP needs under **Service Provider Information**. Use the copy buttons to copy them. The **ACS URL** is there straight away. The **SP Entity ID** and **Fingerprint** appear after you save your settings in step 3, so come back for them afterwards.

| EngageOne value | Where it goes in your IdP |
| --- | --- |
| **ACS URL** | The Assertion Consumer Service URL, also called the reply URL or single sign-on URL |
| **SP Entity ID** | The audience URI or service provider entity ID |
| **Fingerprint** | Use it to check that the certificate in your IdP matches the one EngageOne has |

## Step 2: Send the right attributes

Your IdP must send these attributes in the SAML response. EngageOne lists them under **SAML Attribute Setup**.

| Attribute | Contains |
| --- | --- |
| `email` | The person's work email. Used to match them to their EngageOne user. |
| `first_name` | Their first name |
| `last_name` | Their last name |

> **Important:** The email must match the address the person uses in EngageOne. Otherwise EngageOne creates a new user for them.

## Step 3: Enter your identity provider details

Copy these values from your IdP into **Settings → Security**:

| Field | What to enter |
| --- | --- |
| **SSO URL** | The URL where EngageOne sends sign-in requests, for example `https://sso.example.com/saml/sso` |
| **Identity Provider Entity ID** | Your IdP's unique identifier, usually called the issuer or entity ID |
| **Signing certificate in PEM format** | Your IdP's public signing certificate, including the `-----BEGIN CERTIFICATE-----` and `-----END CERTIFICATE-----` lines |

All three fields are required. Click **Update SAML Settings** to save.

> **Important:** As soon as you save, everyone who belongs only to your EngageOne account, including you, must sign in through SSO. Their passwords stop working. Test the connection with your IdP before your team's next sign-in, and keep the IdP admin console open in case you need to fix a value.

Finally, assign the people or groups who should use EngageOne to the SAML app in your identity provider.

## How your team signs in

1. On the EngageOne sign-in page, click **Sign in with SSO**.
2. Enter their **Work Email** and click **Continue with SSO**.
3. Sign in at your identity provider. They come back to EngageOne signed in.

What happens when someone signs in through SSO:

- **New to EngageOne**: a user is created and added to your account as an **Agent**.
- **Already a member of only your account**: they are signed in to their existing user.
- **Also a member of another EngageOne account**: SSO sign-in is refused. Contact support to sort out the account first.

SSO users can't sign in with a password. If they try, EngageOne asks them to sign in through your organisation's identity provider.

## Roles

People who join through SSO start as **Agent**. To make someone an administrator, or to give them a custom role, change it in **Settings → Agents** after their first sign-in. See [Roles and permissions](/docs/account-setup/roles-and-permissions).

## Turn SSO off

Go to **Settings → Security** and turn off **SAML SSO**. Your saved settings are removed and your team can sign in with email and password again. People who were created through SSO never had a password, so they should use **Forgot password?** on the sign-in page to set one.

## Troubleshooting

| Problem | Likely cause | Fix |
| --- | --- | --- |
| "SSO authentication failed" | The certificate, SSO URL or entity ID doesn't match your IdP | Copy the values again from your IdP and save |
| The person gets a new, empty user | The `email` attribute differs from their EngageOne email | Send the same email address from your IdP |
| Sign-in is refused for one person | They belong to more than one EngageOne account | Contact support |
| The IdP shows an audience or ACS error | The ACS URL or SP Entity ID was pasted wrongly | Copy them again with the copy buttons |

## Related articles

- [Two-factor authentication](/docs/advanced-features/two-factor-authentication)
- [Roles and permissions](/docs/account-setup/roles-and-permissions)
- [Invite your team](/docs/getting-started/invite-your-team)
- [Audit logs](/docs/advanced-features/audit-logs)
