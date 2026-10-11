# Google Sites integration for vari-banner

## Recommended method: Full page embed

Google Sites supports embedding a website as an entire page. This is the most reliable way to preserve the `vari-banner` page's own scrolling context so that the large banner can collapse to a compact sticky state immediately below the native Google Sites navigation.

## Google Sites optimized mode

Use `mode=google` when the page is embedded as a full page in Google Sites.

The Google Sites mode keeps the same large hero banner but reduces the final compact banner from 66 px to 50 px, reduces the TPS mark and title size, and uses a lighter compact shadow so the two fixed horizontal bars consume less vertical space.

### Recommended URLs

```text
https://toptierpatentsearch.github.io/vari-banner/?page=home&mode=google
https://toptierpatentsearch.github.io/vari-banner/?page=services&mode=google
https://toptierpatentsearch.github.io/vari-banner/?page=expertise&mode=google
https://toptierpatentsearch.github.io/vari-banner/?page=software&mode=google
https://toptierpatentsearch.github.io/vari-banner/?page=contact&mode=google
```

Without `mode=google`, the page remains in standalone mode and uses the original 66 px compact banner.

## Steps in Google Sites

1. Open the site in edit mode.
2. In the right sidebar, select **Pages**.
3. Hover over **Add (+)**.
4. Select **Full page embed**.
5. Enter the GitHub Pages URL for the desired `?page=` variant, including `&mode=google`.
6. Name the new Google Sites page appropriately.
7. Publish the site.
8. Open the published page and test scrolling on desktop and mobile.

## Important limitation

A normal inline embed is isolated in its own frame. CSS such as `position: sticky` and JavaScript scroll listeners operate inside that frame, not on the surrounding native Google Sites document. Therefore, an inline embed cannot reliably make the banner remain sticky relative to the entire Google Sites browser viewport.

The same iframe boundary also applies to section anchors. A fragment on the outer Google Sites URL, such as:

```text
https://www.toptierpatentsearch.com/expertise/professional-expertise#h.b5cnudye6zj2
```

does not automatically navigate to the matching section inside the embedded GitHub page.

For production, links from other Google Sites pages should therefore point to the Professional Expertise page root:

```text
https://www.toptierpatentsearch.com/expertise/professional-expertise
```

Once the visitor enters the page, the nine-item navigator inside the embedded page handles section-level navigation.

For direct GitHub Pages testing or standalone use, `section=` is supported, for example:

```text
https://toptierpatentsearch.github.io/vari-banner/?page=expertise&mode=google&section=technical
```

See `PRODUCTION-LINK-MAP.md` for the complete section and legacy-anchor map.

## Recommended production test

Use:

```text
https://toptierpatentsearch.github.io/vari-banner/?page=expertise&mode=google
```

Confirm:

- the large banner appears normally at the top;
- the banner collapses smoothly while scrolling;
- the final compact banner is about 50 px high;
- the compact banner remains immediately below the native Google Sites navigation;
- there is no duplicate navigation menu;
- there are no double scrollbars or clipping;
- behavior is acceptable on desktop and mobile.

## Production strategy

If the Google Sites mode works well, use the same full-page embed pattern for the selected Top-tier Patent Search pages that need the variable banner. Keep the ordinary standalone URLs available for direct GitHub Pages use or future migration away from Google Sites.

Before replacing a live Google Sites page with a full-page embed, audit incoming section-specific links and remove reliance on outer-page `#h...` fragments. This avoids links that appear valid but cannot reach content inside the iframe.
