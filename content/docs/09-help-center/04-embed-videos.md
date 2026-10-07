---
title: "Embed videos in articles"
description: "Add YouTube, Vimeo, Loom, Wistia and other videos to EngageOne help center articles, or upload your own MP4 file, using the article editor."
---

You can add a playable video to any help center article, either by pasting a link from a video service or by uploading an MP4 file.

## Supported video links

| Service | Example link |
| --- | --- |
| YouTube | `https://www.youtube.com/watch?v=VIDEO_ID` or `https://youtu.be/VIDEO_ID` |
| Vimeo | `https://vimeo.com/123456789` |
| Loom | `https://www.loom.com/share/VIDEO_ID` |
| Wistia | `https://yourcompany.wistia.com/medias/VIDEO_ID` |
| Arcade | `https://app.arcade.software/share/DEMO_ID` |
| Bunny Stream | `https://iframe.mediadelivery.net/play/LIBRARY_ID/VIDEO_ID` |
| CodePen | `https://codepen.io/USER/pen/PEN_ID` |
| GuideJar | `https://www.guidejar.com/guides/GUIDE_ID` |
| Any MP4 file | A direct link ending in `.mp4` |

Use the normal share link from the service. Other link formats, such as YouTube Shorts links, aren't turned into a player.

## Embed a video from a link

1. Go to **Help Center → Articles** and open the article.
2. Put your cursor on an empty line where the video should go.
3. Type `/` and choose **Video**.
4. On the **Embed link** tab, paste the video link.
5. Click **Embed**.

The editor shows a preview of the video. EngageOne saves the article automatically.

If you see **That doesn't look like a supported video link**, check that the link matches one of the formats above.

> **Tip:** You can also paste a supported link on its own line. When the link is the only thing on that line, it's shown as a video player in the published article.

## Upload your own video

1. Type `/` and choose **Video**.
2. Open the **Upload** tab.
3. Click **Choose a video file**, or drag the file onto the box.
4. Wait for the upload to finish.

You can also drag an MP4 file straight into the editor, or paste it from your clipboard.

Only MP4 files can be uploaded. The maximum file size is shown under the upload box and is set by your EngageOne installation.

> **Tip:** For long or high-quality videos, host them on a video service and embed the link. The video then streams from that service, and you can update it there without editing the article.

## Publish and check

1. Click **Preview** to see the article as customers will.
2. Play the video to make sure it loads.
3. Click **Publish**, or **Publish changes** if the article was already published.

Videos also play when the article is opened inside your chat widget. See [Show help articles in the chat widget](/docs/help-center/show-articles-in-the-widget).

## Make videos easy to follow

- Add a short sentence above the video that says what it shows and how long it is.
- Write the key steps as text below the video, so readers can skim and search engines can index them.
- Set the video to public or unlisted on the hosting service. A private video won't play for your customers.
- If you update a video on YouTube or another service, keep the same link so the article doesn't need editing.

## Troubleshooting

| Problem | Likely cause | Fix |
| --- | --- | --- |
| The link shows as text, not a video | The link shares a line with other text, or isn't a supported format | Put the link on its own line, or use **/** → **Video** |
| "That doesn't look like a supported video link" | The link format isn't supported | Use the service's standard share link from the table above |
| "Only MP4 files can be uploaded" | The file is another format, such as MOV or WebM | Convert it to MP4, or upload it to a video service and embed the link |
| The video shows an error for customers | The video is private or restricted on the hosting service | Change its sharing settings so anyone with the link can watch |

## Related articles

- [Set up a help center](/docs/help-center/set-up-a-help-center)
- [Show help articles in the chat widget](/docs/help-center/show-articles-in-the-widget)
- [Help center analytics](/docs/help-center/help-center-analytics)
- [Custom domain and languages](/docs/help-center/custom-domain-and-languages)
