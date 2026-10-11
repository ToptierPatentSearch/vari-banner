# vari-banner

A framework-free **large-to-compact sticky banner** prototype for the Top-tier Patent Search website.

The component starts as a large hero banner, gradually shrinks as the visitor scrolls, and remains at the top as a compact stationary header.

## Current design

- Large hero banner at the top of the page
- Smooth scroll-driven collapse to a 64 px compact header
- Compact lockup keeps the TPS mark, `Top-tier Patent Search`, and the current page title visible
- Subtitle fades out during collapse
- No duplicate navigation menu inside the banner
- Responsive sizing for desktop, tablet, and mobile
- `prefers-reduced-motion` support
- Page-specific text and backgrounds through `?page=`
- No framework, package manager, or build step

## Files

```text
vari-banner/
├── index.html
├── styles.css
├── script.js
├── .nojekyll
└── README.md
```

## Live GitHub Pages site

```text
https://toptierpatentsearch.github.io/vari-banner/
```

Examples:

```text
https://toptierpatentsearch.github.io/vari-banner/?page=home
https://toptierpatentsearch.github.io/vari-banner/?page=services
https://toptierpatentsearch.github.io/vari-banner/?page=expertise
https://toptierpatentsearch.github.io/vari-banner/?page=software
https://toptierpatentsearch.github.io/vari-banner/?page=contact
```

## Page configuration

Edit the `pages` object near the top of `script.js`.

Example:

```js
expertise: {
  title: "Professional Expertise",
  subtitle: "Technical Depth. Patent Search Precision.",
  contentTitle: "Professional Expertise",
  contentLead: "Technical analysis, patent-search methodology, and classification intelligence combined in one research workflow.",
  image: "linear-gradient(125deg, #2c3f63 0%, #6c7894 54%, #b0b5c2 100%)"
}
```

## Add an actual banner image

After adding an image file to the repository, replace the `image` value with a relative URL.

For example, if the file is stored as:

```text
assets/expertise-banner.jpg
```

use:

```js
image: "url('./assets/expertise-banner.jpg')"
```

A gradient can be retained as a fallback by using multiple CSS backgrounds if desired.

## Collapse settings

The scroll behavior is controlled by the `settings` object in `script.js`:

```js
const settings = {
  largeHeightDesktop: 340,
  largeHeightTablet: 300,
  largeHeightMobile: 260,
  compactHeight: 64,
  largeTitleDesktop: 44,
  largeTitleMobile: 34,
  compactTitle: 18,
  largeSiteName: 15,
  compactSiteName: 11,
  largeMark: 52,
  compactMark: 32,
  transitionDistance: 320,
  compactShadowStart: 0.76
};
```

`transitionDistance` is the scrolling distance, in pixels, over which the banner changes from the large state to the compact state.

## Google Sites integration

The component is intended to be hosted on GitHub Pages and then used from Google Sites by URL.

A normal Google Sites embed is isolated inside its own frame, so `position: sticky` applies to that embedded frame rather than to the surrounding native Google Sites page. For full-width sticky behavior, use a full-page embed or a separately hosted page where appropriate.

The banner intentionally does **not** reproduce the Google Sites navigation menu. This avoids duplicate navigation when the component is used with the existing Top-tier Patent Search site.

## Next customization step

Add the actual Top-tier Patent Search banner image or images to the repository, then update the `image` entries in `script.js`.

## License

Use and modify this project for the Top-tier Patent Search website and related prototypes.
