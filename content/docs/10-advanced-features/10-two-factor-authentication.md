---
title: "Two-factor authentication"
description: "Protect your EngageOne sign-in with a code from an authenticator app, save backup codes, and turn two-factor authentication off when you need to."
---

Two-factor authentication (2FA) asks for a code from your phone as well as your password, so nobody can sign in with your password alone.

2FA is personal: each person turns it on for their own sign-in. It is available if it's turned on for your installation. If you don't see the option in your profile, it isn't available yet.

## What you need

An authenticator app on your phone, such as Google Authenticator, Authy, Microsoft Authenticator or any app that supports time-based one-time passwords (TOTP).

## Turn on two-factor authentication

1. Click your avatar at the bottom of the left sidebar and click **Profile settings**.
2. Under **Security**, click **Manage Two-Factor Authentication**.
3. Click **Enable Two-Factor Authentication**.
4. Open your authenticator app and scan the QR code. If you can't scan it, click **Can't scan? Enter code manually** and type the **Secret Key** into the app.
5. Enter the 6-digit code that the app shows, then click **Verify & Continue**.
6. Save your backup codes. Click **Download** or **Copy All** and keep them somewhere safe, such as a password manager.
7. Tick the box to confirm you saved the codes, then click **Complete Setup**.

The page now shows **Two-factor authentication is active**.

> **Important:** You see your backup codes only once. Save them before you click **Complete Setup**.

## Sign in with 2FA

1. Sign in with your email and password as usual.
2. When asked, open your authenticator app and enter the 6-digit code.
3. Click **Verify**.

Codes change every 30 seconds. If one is rejected, wait for the next code and try again. Check that your phone's clock is set automatically, because a wrong clock produces wrong codes.

## Backup codes

You get 10 backup codes when you turn on 2FA. Use one when you don't have your phone:

1. On the verification screen, switch from **Authenticator App** to the **Backup Code** tab.
2. Enter one of your codes and click **Verify**.

Each code works once. When you are running low, EngageOne shows a banner with a **Generate codes** button.

### Get new backup codes

1. Go to **Profile settings → Manage Two-Factor Authentication**.
2. Under **Backup Codes**, click **Regenerate Backup Codes**.
3. Enter a code from your authenticator app and click **Generate New Codes**.
4. Download or copy the new codes, then click **I've Saved My Codes**.

Your old codes stop working as soon as new ones are made.

## Turn off two-factor authentication

1. Go to **Profile settings → Manage Two-Factor Authentication**.
2. Under **Disable 2FA**, click **Disable Two-Factor Authentication**.
3. Enter your **Password** and a **Verification Code** from your app. If you've lost your phone, click **Lost access to your authenticator? Use a backup code instead** and enter a backup code.
4. Click **Disable 2FA**.

## If you lose your phone

- **You still have backup codes**: sign in with a backup code, then turn 2FA off and on again to connect your new phone.
- **You have no backup codes**: contact your administrator or EngageOne support. They can help you get back into your account.

> **Tip:** When you get a new phone, move your authenticator accounts before you reset the old one. Many authenticator apps have a transfer or backup option.

## Related articles

- [Profile and notifications](/docs/getting-started/profile-and-notifications)
- [Single sign-on (SAML)](/docs/advanced-features/single-sign-on)
- [Audit logs](/docs/advanced-features/audit-logs)
