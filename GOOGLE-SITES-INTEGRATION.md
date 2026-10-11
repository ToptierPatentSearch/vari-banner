# Google Sites integration for vari-banner

## Recommended method: Full page embed

Google Sites officially supports embedding a website as an entire page. This is the most reliable way to preserve the `vari-banner` page's own scrolling context so that the large banner can collapse to the compact sticky state.

### Example URLs

```text
https://toptierpatentsearch.github.io/vari-banner/?page=home
https://toptierpatentsearch.github.io/vari-banner/?page=services
https://toptierpatentsearch.github.io/vari-banner/?page=expertise
https://toptierpatentsearch.github.io/vari-banner/?page=software
https://toptierpatentsearch.github.io/vari-banner/?page=contact
```

## Steps in Google Sites

1. Open the site in edit mode.
2. In the right sidebar, select **Pages**.
3. Hover over **Add (+)**.
4. Select **Full page embed**.
5. Enter the GitHub Pages URL for the desired `?page=` variant.
6. Name the new Google Sites page appropriately, for example `Expertise Test`.
7. Publish the site.
8. Open the published page and test scrolling on desktop and mobile.

## Important limitation

A normal inline embed is isolated in its own frame. CSS such as `position: sticky` and JavaScript scroll listeners operate inside that frame, not on the surrounding native Google Sites document. Therefore, an inline embed cannot reliably make the banner remain sticky relative to the whole Google Sites browser viewport.

## Recommended test

Create one temporary full-page embed first using:

```text
https://toptierpatentsearch.github.io/vari-banner/?page=expertise
```

Confirm:

- large banner at the top;
- smooth collapse while scrolling;
- compact sticky banner remains visible;
- Google Sites navigation remains usable;
- no double scrollbars or clipping;
- acceptable behavior on mobile.

Do not replace existing production pages until this test passes.

## Production options after the test

If the full-page embed works well, use the same pattern for selected pages that need the variable banner. If it does not behave reliably enough, keep the existing native Google Sites pages and use the variable banner only on separately hosted GitHub Pages pages, or migrate the affected page content to the GitHub Pages template.
