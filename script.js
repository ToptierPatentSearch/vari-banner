(() => {
  "use strict";

  const pages = {
    home: {
      title: "Top-tier Patent Search",
      subtitle: "Systematic Patent Intelligence",
      contentTitle: "Variable Banner",
      contentLead: "Scroll to watch the large hero banner become a compact stationary header.",
      image: "linear-gradient(125deg, #263b62 0%, #5e769b 52%, #9eaabe 100%)"
    },
    services: {
      title: "Patent Search Services",
      subtitle: "Research Built Around Your Decision",
      contentTitle: "Services",
      contentLead: "A shared banner engine can present page-specific messaging without duplicating the scroll behavior.",
      image: "linear-gradient(125deg, #253b59 0%, #55708d 56%, #9da9b5 100%)"
    },
    expertise: {
      title: "Professional Expertise",
      subtitle: "Technical Depth. Patent Search Precision.",
      contentTitle: "Expertise",
      contentLead: "Use a page parameter to switch banner content while retaining one maintainable implementation.",
      image: "linear-gradient(125deg, #2c3f63 0%, #6c7894 54%, #b0b5c2 100%)"
    },
    software: {
      title: "Software Development",
      subtitle: "Purpose-Built Tools for Patent Research",
      contentTitle: "Software",
      contentLead: "The same component can be used across software, service, expertise, and informational pages.",
      image: "linear-gradient(125deg, #243a5d 0%, #526f91 52%, #9ba9ba 100%)"
    },
    contact: {
      title: "Contact",
      subtitle: "Discuss Your Search Objective",
      contentTitle: "Contact",
      contentLead: "A compact sticky state keeps key navigation available after the hero message has served its purpose.",
      image: "linear-gradient(125deg, #32435d 0%, #687b96 52%, #b0b8c2 100%)"
    }
  };

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

  const root = document.documentElement;
  const banner = document.getElementById("variBanner");
  const title = document.getElementById("heroTitle");
  const subtitle = document.getElementById("heroSubtitle");
  const contentTitle = document.getElementById("contentTitle");
  const contentLead = document.getElementById("contentLead");
  const nav = document.getElementById("compactNav");

  if (!banner || !title || !subtitle) return;

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
  const mix = (from, to, progress) => from + (to - from) * progress;
  const smoothstep = (progress) => progress * progress * (3 - 2 * progress);

  function loadPageConfiguration() {
    const params = new URLSearchParams(window.location.search);
    const requestedPage = (params.get("page") || "home").toLowerCase();
    const config = pages[requestedPage] || pages.home;

    title.textContent = config.title;
    subtitle.textContent = config.subtitle;
    contentTitle.textContent = config.contentTitle;
    contentLead.textContent = config.contentLead;
    banner.style.setProperty("--hero-image", config.image);
    document.title = `${config.title} | Vari Banner`;

    nav.querySelectorAll("a").forEach((link) => {
      const url = new URL(link.href, window.location.href);
      const active = (url.searchParams.get("page") || "home") === requestedPage;
      if (active) link.setAttribute("aria-current", "page");
      else link.removeAttribute("aria-current");
    });
  }

  let ticking = false;

  function render() {
    const raw = clamp(window.scrollY / settings.transitionDistance, 0, 1);
    const progress = smoothstep(raw);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const p = reducedMotion ? (raw >= 0.5 ? 1 : 0) : progress;

    const height = mix(settings.largeHeight, settings.compactHeight, p);
    const titleSize = mix(settings.largeTitle, settings.compactTitle, p);
    const markSize = mix(settings.largeMark, settings.compactMark, p);
    const subtitleOpacity = clamp(1 - p * 1.8, 0, 1);
    const subtitleShift = mix(0, -18, p);
    const overlayOpacity = mix(0.36, 0.72, p);
    const bgY = mix(50, 44, p);
    const navOpacity = clamp((p - settings.compactNavStart) / (1 - settings.compactNavStart), 0, 1);
    const hasShadow = p >= settings.compactShadowStart;

    root.style.setProperty("--banner-height", `${height}px`);
    root.style.setProperty("--title-size", `${titleSize}px`);
    root.style.setProperty("--mark-size", `${markSize}px`);
    root.style.setProperty("--brand-gap", `${mix(14, 9, p)}px`);
    root.style.setProperty("--subtitle-opacity", subtitleOpacity.toFixed(3));
    root.style.setProperty("--subtitle-shift", `${subtitleShift}px`);
    root.style.setProperty("--overlay-opacity", overlayOpacity.toFixed(3));
    root.style.setProperty("--bg-y", `${bgY}%`);
    root.style.setProperty("--nav-opacity", navOpacity.toFixed(3));
    root.style.setProperty("--nav-events", navOpacity > 0.75 ? "auto" : "none");
    root.style.setProperty("--banner-shadow", hasShadow ? "0 8px 22px rgba(15, 24, 42, .22)" : "0 0 0 rgba(0,0,0,0)");

    banner.classList.toggle("is-compact", p > 0.93);
    ticking = false;
  }

  function requestRender() {
    if (!ticking) {
      window.requestAnimationFrame(render);
      ticking = true;
    }
  }

  loadPageConfiguration();
  render();
  window.addEventListener("scroll", requestRender, { passive: true });
  window.addEventListener("resize", requestRender);
})();
