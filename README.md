# vari-banner

A framework-free demonstration of a **large hero/banner that gradually collapses into a compact sticky header while the page is scrolled**.

Designed for easy deployment on GitHub Pages and reuse from Google Sites by URL embedding.

## Features

- Large-to-compact banner transition driven by scroll position
- Sticky compact header after collapse
- Interpolated banner height, title size, mark size, subtitle opacity, overlay strength, background position, and shadow
- Compact navigation gradually appears during collapse
- Page-specific configuration through `?page=`
- No framework, package manager, or build step
- Relative asset paths suitable for GitHub Pages project sites
- Responsive layout
- `prefers-reduced-motion` support

## Files

```text
vari-banner/
├── index.html
├── styles.css
├── script.js
├── .nojekyll
└── README.md
```

## Local test

You can open `index.html` directly, or serve the directory with a simple local HTTP server.

Example with Python:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000/
http://localhost:8000/?page=services
http://localhost:8000/?page=expertise
```

## GitHub Pages

For repository `ToptierPatentSearch/vari-banner`, enable GitHub Pages from the `main` branch and repository root.

Expected project-site URL:

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

## Customize page banners

Edit the `pages` object near the top of `script.js`:

```js
home: {
  title: "Top-tier Patent Search",
  subtitle: "Systematic Patent Intelligence",
  contentTitle: "Variable Banner",
  contentLead: "...",
  image: "url('./images/home-banner.jpg')"
}
```

You can use a local image instead of the included demonstration gradient. If you do, create an `images/` directory and keep paths relative, for example:

```js
image: "url('./images/home-banner.jpg')"
```

## Adjust collapse behavior

Edit the `settings` object in `script.js`:

```js
const settings = {
  largeHeight: 360,
  compactHeight: 72,
  largeTitle: 46,
  compactTitle: 21,
  largeMark: 54,
  compactMark: 36,
  transitionDistance: 320,
  compactNavStart: 0.62,
  compactShadowStart: 0.78
};
```

`transitionDistance` is the amount of scrolling, in pixels, over which the large banner transforms into the compact header.

## Google Sites use

Google Sites does not give embedded code unrestricted control over the native Google Sites page header. For reliable sticky behavior, host this component on GitHub Pages and use it as a full-page embed or link to the hosted page.

## License

Use and modify this project for the Top-tier Patent Search website and related prototypes.
