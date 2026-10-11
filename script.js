(() => {
  "use strict";

  const pages = {
    home: {
      title: "Top-tier Patent Search",
      subtitle: "Systematic Patent Intelligence",
      contentTitle: "Systematic Patent Research",
      contentLead: "Patent research organized around the technical question, classification structure, and business decision that matter."
    },
    services: {
      title: "Patent Search Services",
      subtitle: "Research Built Around Your Decision",
      contentTitle: "Patent Search Services",
      contentLead: "Search strategy should reflect the decision at hand, whether the objective is prior art, patentability, FTO, invalidity, or landscape research."
    },
    expertise: {
      title: "Professional Expertise",
      subtitle: "Technical Depth. Patent Search Precision.",
      contentTitle: "Professional Expertise",
      contentLead: "Technical analysis, patent-search methodology, and classification intelligence combined in one research workflow."
    },
    software: {
      title: "Software Development",
      subtitle: "Purpose-Built Tools for Patent Research",
      contentTitle: "Software Development",
      contentLead: "Purpose-built software can support repeatable keyword, classification, retrieval, and review workflows."
    },
    contact: {
      title: "Contact",
      subtitle: "Discuss Your Search Objective",
      contentTitle: "Discuss Your Search Objective",
      contentLead: "Define the technical scope, commercial objective, and expected deliverable before the search begins."
    }
  };

  const settings = {
    largeHeightDesktop: 350,
    largeHeightTablet: 305,
    largeHeightMobile: 265,
    compactHeight: 66,
    largeTitleDesktop: 46,
    largeTitleMobile: 34,
    compactTitle: 19,
    largeSiteName: 14,
    largeMark: 52,
    compactMark: 32,
    transitionDistance: 330,
    compactShadowStart: 0.72
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
    return window.innerWidth <= 520 ? settings.largeTitleMobile : settings.largeTitleDesktop;
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

    root.style.setProperty("--banner-height", `${mix(largeHeight, settings.compactHeight, progress)}px`);
    root.style.setProperty("--title-size", `${mix(largeTitle, settings.compactTitle, progress)}px`);
    root.style.setProperty("--mark-size", `${mix(settings.largeMark, settings.compactMark, progress)}px`);
    root.style.setProperty("--brand-gap", `${mix(16, 10, progress)}px`);

    const subtitleOpacity = clamp(1 - progress * 1.8, 0, 1);
    root.style.setProperty("--subtitle-opacity", subtitleOpacity.toFixed(3));
    root.style.setProperty("--subtitle-shift", `${mix(0, -14, progress)}px`);
    root.style.setProperty("--subtitle-max-height", `${mix(36, 0, clamp(progress * 1.35, 0, 1))}px`);

    const siteNameVisibility = clamp(1 - progress * 2.3, 0, 1);
    root.style.setProperty("--site-name-opacity", siteNameVisibility.toFixed(3));
    root.style.setProperty("--site-name-size", `${mix(settings.largeSiteName, 10, progress)}px`);
    root.style.setProperty("--site-name-gap", `${mix(8, 0, progress)}px`);
    root.style.setProperty("--site-name-max-height", `${mix(24, 0, clamp(progress * 1.5, 0, 1))}px`);

    root.style.setProperty("--overlay-opacity", mix(0.34, 0.72, progress).toFixed(3));
    root.style.setProperty("--art-opacity", mix(0.82, 0.22, progress).toFixed(3));
    root.style.setProperty("--art-scale", mix(1, 1.08, progress).toFixed(3));

    const shadow = progress >= settings.compactShadowStart
      ? "0 7px 20px rgba(15, 24, 42, .18)"
      : "0 0 0 rgba(0, 0, 0, 0)";
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
