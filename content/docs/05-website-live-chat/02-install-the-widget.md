---
title: "Install the widget on your website"
description: "Copy your EngageOne live chat script and add it to a plain HTML site, WordPress, Google Tag Manager, or a Next.js or React app."
---

To show live chat on your website, you paste one short script into your pages. This article shows where to find the script and how to add it on common platforms.

## Before you start

You need a website inbox. If you do not have one yet, create it first. See [Website live chat](/docs/channels/website-live-chat).

## Copy your script

1. Go to **Settings → Inboxes**.
2. Select your website inbox. On the **Settings** tab, the widget preview is on the right.
3. Switch the preview to **Script** and copy the full code block.

> **Tip:** The same script is also shown on the last screen when you first create the website inbox.

The script looks like this. Your copy already contains your own values:

```html
<script>
  (function (d, t) {
    var BASE_URL = "{{BASE_URL}}";
    var g = d.createElement(t),
      s = d.getElementsByTagName(t)[0];
    g.src = BASE_URL + "/packs/js/sdk.js";
    g.async = true;
    s.parentNode.insertBefore(g, s);
    g.onload = function () {
      window.chatwootSDK.run({
        websiteToken: "{{WEBSITE_TOKEN}}",
        baseUrl: BASE_URL,
      });
    };
  })(document, "script");
</script>
```

| Placeholder | What it is |
| --- | --- |
| `{{BASE_URL}}` | The web address of your EngageOne workspace. |
| `{{WEBSITE_TOKEN}}` | The unique token for this website inbox. |

> **Note:** The script uses some names that differ from the EngageOne brand, such as the object it calls in `g.onload`. These are the widget's technical names in code. They cannot be renamed, and visitors never see them. Always copy the script from your inbox rather than typing it by hand.

> **Tip:** The script loads asynchronously, so it does not slow down the rest of your page.

## Plain HTML website

1. Open the HTML file for each page where you want the chat, or your shared layout or footer file.
2. Paste the script just before the closing `</body>` tag.
3. Save and upload the file, then reload your website.

```html
    <!-- your page content -->
    <script>
      /* paste your EngageOne script here */
    </script>
  </body>
</html>
```

The chat bubble appears in the bottom corner of the page.

## WordPress

You can add the script without editing theme files by using a plugin that inserts code into the footer, such as a "header and footer scripts" plugin.

1. In your WordPress admin, install and activate a plugin that can add code to the site footer.
2. Open the plugin's settings.
3. Paste your script into the **footer** (or "before `</body>`") box.
4. Save, then open your site in a new tab to check the bubble.

If you prefer to edit your theme, paste the script just before `</body>` in your child theme's `footer.php`.

> **Tip:** Use a child theme for code changes. Edits to a parent theme are lost when the theme updates.

## Google Tag Manager

1. In Google Tag Manager, open your container and click **Tags → New**.
2. Choose **Tag Configuration → Custom HTML**.
3. Paste your script into the HTML box.
4. Under **Triggering**, choose **All Pages** (or only the pages you want).
5. Save the tag, then click **Submit** and **Publish** to make it live.

## Next.js

Use the built-in `next/script` component so the script loads once after the page becomes interactive.

For the App Router, add it to `app/layout.tsx`:

```tsx
import Script from "next/script";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Script id="engageone-chat" strategy="afterInteractive">
          {`
            (function (d, t) {
              var BASE_URL = "{{BASE_URL}}";
              var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
              g.src = BASE_URL + "/packs/js/sdk.js";
              g.async = true;
              s.parentNode.insertBefore(g, s);
              g.onload = function () {
                window.chatwootSDK.run({
                  websiteToken: "{{WEBSITE_TOKEN}}",
                  baseUrl: BASE_URL
                });
              };
            })(document, "script");
          `}
        </Script>
      </body>
    </html>
  );
}
```

For the Pages Router, put the same `<Script>` block in `pages/_app.tsx`.

## React (single-page apps)

Load the script once when your app starts, for example in your root component:

```jsx
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    if (window.chatwootSDK) return; // already loaded

    const BASE_URL = "{{BASE_URL}}";
    const script = document.createElement("script");
    script.src = `${BASE_URL}/packs/js/sdk.js`;
    script.async = true;
    script.onload = () => {
      window.chatwootSDK.run({
        websiteToken: "{{WEBSITE_TOKEN}}",
        baseUrl: BASE_URL,
      });
    };
    document.body.appendChild(script);
  }, []);

  return <YourRoutes />;
}
```

> **Important:** Load the script only once. Adding it inside a component that mounts on every page change can create duplicate widgets.

## Optional display settings

You can set a few extra options before the script runs by defining a settings object. The object name in the example below is a technical name and must be written exactly as shown. Place it above your script:

```html
<script>
  window.chatwootSettings = {
    position: "left",          // "left" or "right"
    type: "expanded_bubble",   // "standard" or "expanded_bubble"
    launcherTitle: "Chat with us",
    locale: "en",
    darkMode: "auto",          // "light", "auto" or "dark"
    hideMessageBubble: false,  // true hides the bubble so you can open chat from your own button
  };
</script>
```

The **Script** view in the preview panel on the **Settings** tab shows these options for the settings you choose there.

## Check that it works

1. Open your website in a private or incognito window.
2. Click the chat bubble and send a test message.
3. In EngageOne, open **Conversations**. Your test message appears in the website inbox.

If the bubble does not appear:

- Make sure you pasted the full script, including the opening and closing `<script>` tags.
- Clear your site cache or CDN cache, if you use one.
- Check **Allowed Domains** on the **Configuration** tab. If it is set, your website's domain must be in the list.

## Related articles

- [Customise the live chat widget](/docs/website-live-chat/widget-settings)
- [Identify logged-in users](/docs/website-live-chat/identify-users)
- [Website live chat](/docs/channels/website-live-chat)
- [Your first conversation](/docs/getting-started/your-first-conversation)
