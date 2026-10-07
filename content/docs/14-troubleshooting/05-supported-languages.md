---
title: "Supported languages"
description: "The languages available for the EngageOne dashboard and website chat widget, and how to change the language for your account, yourself or your widget."
---

EngageOne's dashboard and website chat widget are available in the languages listed below.

## Languages

The dashboard and the chat widget support the same languages.

| Language | Code |
| --- | --- |
| Arabic (العربية) | `ar` |
| Bulgarian (български) | `bg` |
| Catalan (Català) | `ca` |
| Chinese, Simplified (中文) | `zh_CN` |
| Chinese, Traditional – Taiwan (中文 台湾) | `zh_TW` |
| Czech (čeština) | `cs` |
| Danish (dansk) | `da` |
| Dutch (Nederlands) | `nl` |
| English | `en` |
| Estonian (Eesti keel) | `et` |
| Finnish (suomi) | `fi` |
| French (Français) | `fr` |
| German (Deutsch) | `de` |
| Greek (ελληνικά) | `el` |
| Hebrew (עברית) | `he` |
| Hungarian (magyar) | `hu` |
| Icelandic (íslenska) | `is` |
| Indonesian (Bahasa Indonesia) | `id` |
| Italian (Italiano) | `it` |
| Japanese (日本語) | `ja` |
| Korean (한국어) | `ko` |
| Latvian (latviešu) | `lv` |
| Lithuanian (lietuvių) | `lt` |
| Malayalam (മലയാളം) | `ml` |
| Norwegian (norsk) | `no` |
| Persian (فارسی) | `fa` |
| Polish (polski) | `pl` |
| Portuguese (Português) | `pt` |
| Portuguese, Brazil (Português Brasileiro) | `pt_BR` |
| Romanian (Română) | `ro` |
| Russian (русский) | `ru` |
| Serbian (Српски) | `sr` |
| Slovak (slovenčina) | `sk` |
| Slovenian (slovenščina) | `sl` |
| Spanish (Español) | `es` |
| Swedish (Svenska) | `sv` |
| Tamil (தமிழ்) | `ta` |
| Thai (ภาษาไทย) | `th` |
| Turkish (Türkçe) | `tr` |
| Ukrainian (українська) | `uk` |
| Uzbek (Oʻzbekcha) | `uz` |
| Vietnamese (Tiếng Việt) | `vi` |

Arabic, Hebrew and Persian are shown right to left in both the dashboard and the widget.

> **Note:** Translations are kept up to date for English first. In other languages, a few newer labels may still appear in English for a while.

## Change the language for your whole account

The account language is the default for everyone on your team and for your chat widget.

1. Go to **Settings → Account Settings**.
2. Choose a **Site language**.
3. Save your changes.

See [Account settings](/docs/account-setup/account-settings).

## Change the language just for you

1. Click your avatar at the bottom of the left sidebar and choose **Profile settings**.
2. In the **Interface** section, choose a **Preferred Language**.

Choose **Use account default** to follow the account's language again.

## Change the chat widget language

By default, the widget uses your account's language. You can change this in your widget script:

| Option | What it does |
| --- | --- |
| `locale: "fr"` | Always shows the widget in the language you set. |
| `useBrowserLanguage: true` | Shows the widget in the visitor's browser language, if it's one of the supported languages. |

Add the option to the settings object above your widget script. The object name is a technical name and must be written exactly as shown:

```html
<script>
  window.chatwootSettings = {
    locale: "fr",
    // or, to follow each visitor's browser:
    // useBrowserLanguage: true,
  };
</script>
```

If you choose a regional code that isn't in the list, such as `fr_CA`, the widget uses the base language (`fr`) instead. If the language isn't supported at all, the widget stays in your account's language.

You can also switch the language while the page is open. See [Identify users](/docs/website-live-chat/identify-users).

> **Tip:** The widget only shows help articles in a language your help center has. See [Show help articles in the chat widget](/docs/help-center/show-articles-in-the-widget).

## What isn't translated

- Messages you and your customers write stay in the language they were written in. To translate conversations, see [Google Translate](/docs/integrations/google-translate).
- Text you set yourself, such as your widget's welcome heading, canned responses and automated messages, appears exactly as you wrote it.
- Help center languages are set separately for each portal. See [Custom domain and languages](/docs/help-center/custom-domain-and-languages).

## Related articles

- [Account settings](/docs/account-setup/account-settings)
- [Profile and notifications](/docs/getting-started/profile-and-notifications)
- [Install the widget](/docs/website-live-chat/install-the-widget)
- [Custom domain and languages](/docs/help-center/custom-domain-and-languages)
