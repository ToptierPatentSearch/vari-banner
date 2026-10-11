# vari-banner

A framework-free **large-to-compact sticky banner** for the Top-tier Patent Search website.

The component starts as a large hero banner, gradually shrinks as the visitor scrolls, and remains at the top as a compact stationary header.

## Current design

- Large hero banner at the top of the page
- Smooth scroll-driven collapse
- Standalone compact header: 66 px
- Google Sites optimized compact header: 50 px with `mode=google`
- Compact lockup keeps the TPS mark and current page title visible
- Subtitle and site-name line fade out during collapse
- No duplicate navigation menu inside the banner
- Responsive sizing for desktop, tablet, and mobile
- `prefers-reduced-motion` support
- Page-specific text through `?page=`
- No framework, package manager, or build step

## Files

```text
vari-banner/
├── index.html
├── styles.css
├── script.js
├── GOOGLE-SITES-INTEGRATION.md
├── .nojekyll
└── README.md
```

## Live GitHub Pages site

```text
https://toptierpatentsearch.github.io/vari-banner/
```

Standalone examples:

```text
https://toptierpatentsearch.github.io/vari-banner/?page=home
https://toptierpatentsearch.github.io/vari-banner/?page=services
https://toptierpatentsearch.github.io/vari-banner/?page=expertise
https://toptierpatentsearch.github.io/vari-banner/?page=software
https://toptierpatentsearch.github.io/vari-banner/?page=contact
```

Google Sites full-page embed examples:

```text
https://toptierpatentsearch.github.io/vari-banner/?page=home&mode=google
https://toptierpatentsearch.github.io/vari-banner/?page=services&mode=google
https://toptierpatentsearch.github.io/vari-banner/?page=expertise&mode=google
https://toptierpatentsearch.github.io/vari-banner/?page=software&mode=google
https://toptierpatentsearch.github.io/vari-banner/?page=contact&mode=google
```

## Page configuration

Edit the `pages` object near the top of `script.js`.

## Google Sites mode

`mode=google` preserves the large banner but changes the final compact state to fit more efficiently beneath the native Google Sites navigation:

- compact height: 50 px;
- compact TPS mark: 26 px;
- compact title: 17 px;
- lighter compact shadow;
- reduced technical-art visibility in compact state.

See `GOOGLE-SITES-INTEGRATION.md` for the recommended full-page embed workflow.

## Collapse settings

The scroll behavior is controlled by the `settings` object in `script.js`. `transitionDistance` is the scrolling distance, in pixels, over which the banner changes from the large state to the compact state.

## Google Sites integration limitation

A normal inline Google Sites embed is isolated inside its own frame. For browser-wide sticky behavior, use the **Full page embed** method documented in `GOOGLE-SITES-INTEGRATION.md`.

## License

Use and modify this project for the Top-tier Patent Search website and related prototypes.
