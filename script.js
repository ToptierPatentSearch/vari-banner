(() => {
  "use strict";

  const pages = {
    home: {
      title: "Top-tier Patent Search",
      subtitle: "Systematic Patent Intelligence",
      contentTitle: "Systematic Patent Research",
      contentLead: "Patent research organized around the technical question, classification structure, and business decision that matter.",
      image: "linear-gradient(125deg, #263b62 0%, #5e769b 52%, #9eaabe 100%)"
    },
    services: {
      title: "Patent Search Services",
      subtitle: "Research Built Around Your Decision",
      contentTitle: "Patent Search Services",
      contentLead: "Search strategy should reflect the decision at hand, whether the objective is prior art, patentability, FTO, invalidity, or landscape research.",
      image: "linear-gradient(125deg, #253b59 0%, #55708d 56%, #9da9b5 100%)"
    },
    expertise: {
      title: "Professional Expertise",
      subtitle: "Technical Depth. Patent Search Precision.",
      contentTitle: "Professional Expertise",
      contentLead: "Technical analysis, patent-search methodology, and classification intelligence combined in one research workflow.",
      image: "linear-gradient(125deg, #2c3f63 0%, #6c7894 54%, #b0b5c2 100%)"
    },
    software: {
      title: "Software Development",
      subtitle: "Purpose-Built Tools for Patent Research",
      contentTitle: "Software Development",
      contentLead: "Purpose-built software can support repeatable keyword, classification, retrieval, and review workflows.",
      image: "linear-gradient(125deg, #243a5d 0%, #526f91 52%, #9ba9ba 100%)"
    },
    contact: {
      title: "Contact",
      subtitle: "Discuss Your Search Objective",
      contentTitle: "Discuss Your Search Objective",
      contentLead: "Define the technical scope, commercial objective, and expected deliverable before the search begins.",
      image: "linear-gradient(125deg, #32435d 0%, #687b96 52%, #b0b8c2 100%)"
    }
  };

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

  const root = document.documentElement;
  const banner = document.getElementById("variBanner");
  const siteName = document.getElementById("siteName");
  const title = document.getElementById("heroTitle");
  const subtitle = document.getElementById("heroSubtitle");
  const contentTitle = document.getElementById("contentTitle");
  const contentLead = document.getElementById("contentLead");

  if (!banner || !siteName || !title || !subtitle) return;

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
  const mix = (from, to, progress) => from + (to - from) * progress;
  const smoothstep = (progress) => progress * progress * (3 - 2 * progress);

  function getResponsiveLargeHeight() {
    if (window.innerWidth <= 520) return settings.largeHeightMobile;
    if (window.innerWidth <= 820) return settings.largeHeightTablet;
    return settings.largeHeightDesktop;
  }

  function getResponsiveLargeTitle() {
    return window.innerWidth <= 520
      ? settings.largeTitleMobile
      : settings.largeTitleDesktop;
  }

  function loadPageConfiguration() {
    const params = new URLSearchParams(window.location.search);
    const requestedPage = (params.get("page") || "home").toLowerCase();
    const pageKey = pages[requestedPage] ? requestedPage : "home";
    const config = pages[pageKey];

    document.body.dataset.page = pageKey;
    siteName.textContent = "Top-tier Patent Search";
    title.textContent = config.title;
    subtitle.textContent = config.subtitle;

    if (contentTitle) contentTitle.textContent = config.contentTitle;
    if (contentLead) contentLead.textContent = config.contentLead;

    banner.style.setProperty("--hero-image", config.image);
    document.title = `${config.title} | Top-tier Patent Search`;
  }

  let ticking = false;

  function render() {
    const raw = clamp(window.scrollY / settings.transitionDistance, 0, 1);
    const eased = smoothstep(raw);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const progress = reducedMotion ? (raw >= 0.5 ? 1 : 0) : eased;

    const largeHeight = getResponsiveLargeHeight();
    const largeTitle = getResponsiveLargeTitle();

    const height = mix(largeHeight, settings.compactHeight, progress);
    const titleSize = mix(largeTitle, settings.compactTitle, progress);
    const siteNameSize = mix(settings.largeSiteName, settings.compactSiteName, progress);
    const markSize = mix(settings.largeMark, settings.compactMark, progress);
    const subtitleOpacity = clamp(1 - progress * 1.75, 0, 1);
    const subtitleShift = mix(0, -14, progress);
    const overlayOpacity = mix(0.32, 0.70, progress);
    const bgY = mix(50, 45, progress);
    const shadow = progress >= settings.compactShadowStart
      ? "0 8px 22px rgba(15, 24, 42, .20)"
      : "0 0 0 rgba(0, 0, 0, 0)";

    root.style.setProperty("--banner-height", `${height}px`);
    root.style.setProperty("--title-size", `${titleSize}px`);
    root.style.setProperty("--site-name-size", `${siteNameSize}px`);
    root.style.setProperty("--mark-size", `${markSize}px`);
    root.style.setProperty("--brand-gap", `${mix(16, 10, progress)}px`);
    root.style.setProperty("--subtitle-opacity", subtitleOpacity.toFixed(3));
    root.style.setProperty("--subtitle-shift", `${subtitleShift}px`);
    root.style.setProperty("--overlay-opacity", overlayOpacity.toFixed(3));
    root.style.setProperty("--bg-y", `${bgY}%`);
    root.style.setProperty("--banner-shadow", shadow);

    banner.classList.toggle("is-compact", progress > 0.93);
    ticking = false;
  }

  function requestRender() {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(render);
  }

  loadPageConfiguration();
  render();

  window.addEventListener("scroll", requestRender, { passive: true });
  window.addEventListener("resize", requestRender);
})();
