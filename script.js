(() => {
  "use strict";

  const pages = {
    home: {
      title: "Top-tier Patent Search",
      subtitle: "Systematic Patent Intelligence",
      contentTitle: "Professional Patent Search for Complex Technologies",
      contentLead: "Structured patent research combining technical analysis, classification intelligence, and modern search tools."
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
      contentTitle: "Professional Expertise at a Glance",
      contentLead: "Patent-search and analysis expertise combining claim-level technical interpretation, international patent information, classification-based retrieval, engineering knowledge, and AI-assisted research workflows."
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

  const expertiseSections = {
    overview: "h.bsy7a75ml47f",
    glance: "h.bsy7a75ml47f",
    core: "h.cpyduewk0btt",
    capabilities: "h.cpyduewk0btt",
    search: "h.6l38ivbh61ay",
    intelligence: "h.6l38ivbh61ay",
    technical: "h.b5cnudye6zj2",
    classification: "h.lxw66wfhxse8",
    systems: "h.lxw66wfhxse8",
    analysis: "h.61ao3yybxdqi",
    analytical: "h.61ao3yybxdqi",
    ai: "h.h4zd9sa6a5aj",
    software: "h.h4zd9sa6a5aj",
    quality: "h.47e6ljrvhmr2",
    evidence: "h.47e6ljrvhmr2",
    foundation: "h.yzp0fn57z0fv"
  };

  const homeSections = {
    overview: "h.7zz4v62xpgyu",
    value: "h.ovz6t4wp4y7f",
    challenges: "h.dvx2hyjv1t2j",
    services: "h.dyjpiv1mjfv9",
    methodology: "h.e9ja9l4q12tm",
    process: "h.g93ib7ydhdq",
    example: "h.4m9sve6c5660",
    classification: "h.6nkqtbdd13pd",
    software: "h.w4floza314a2",
    clients: "h.b7jk5j4mp8wc",
    experience: "h.qa9wusdsmszs",
    confidentiality: "h.ej832w73quke",
    faq: "h.xpvxldaes2mh",
    contact: "h.5aq67vi1funq"
  };

  const HOME_CONTENT = `
    <div class="home-page">
      <section class="home-section home-section--intro" id="h.ovz6t4wp4y7f">
        <p class="home-kicker">TOP-TIER PATENT SEARCH</p>
        <h1>Professional Patent Search for Complex Technologies</h1>
        <p class="home-lead">Structured patent research combining technical analysis, classification intelligence, and modern search tools.</p>
        <p class="home-support">Search strategy is developed around the technical question and the decision the research must support—not around a single keyword list.</p>
        <div class="home-actions">
          <a class="home-button" href="https://www.toptierpatentsearch.com/services/overview" target="_top">Explore Patent Search Services</a>
          <a class="home-button home-button--secondary" href="https://www.toptierpatentsearch.com/discuss-quote-order/overview" target="_top">Discuss / Quote / Order</a>
        </div>
      </section>

      <section class="home-section home-credibility" id="h.7zz4v62xpgyu">
        <p class="home-kicker">RESEARCH FOUNDATION</p>
        <h2>Technical Depth. Patent Intelligence. Modern Workflow.</h2>
        <p>A concise view of the technical expertise, patent classifications, search resources, and modern tools behind each investigation.</p>
      </section>

      <section class="home-section" id="h.dvx2hyjv1t2j">
        <div class="home-split">
          <div>
            <p class="home-kicker">SEARCH CHALLENGES</p>
            <h2>When Patent Searching Gets Difficult</h2>
          </div>
          <div class="home-copy">
            <p>Terminology shifts, hidden classifications, cross-domain concepts, translation differences, and noisy result sets can obscure the prior art that matters. A difficult search therefore requires repeated movement between technical interpretation, terminology, classifications, references, and evidence review.</p>
          </div>
        </div>
        <div class="home-feature-grid">
          <article class="home-card"><span class="home-label">Terminology</span><h3>Different words for the same technical concept</h3><p>Synonyms, historical terminology, abbreviations, translations, and industry-specific language can separate a relevant reference from a simple keyword query.</p></article>
          <article class="home-card"><span class="home-label">Classification</span><h3>Relevant art may sit behind unfamiliar classifications</h3><p>IPC, CPC, FI, and F-term structures can reveal technical neighborhoods that ordinary wording does not expose.</p></article>
          <article class="home-card"><span class="home-label">Cross-domain</span><h3>The same principle may appear in another field</h3><p>Functional concepts can migrate across industries, requiring broader technical interpretation before the search is narrowed.</p></article>
          <article class="home-card"><span class="home-label">Noise control</span><h3>Large result sets require disciplined refinement</h3><p>Candidate documents must be screened, compared, and used to improve the next search iteration rather than treated as an endpoint.</p></article>
        </div>
      </section>

      <section class="home-section home-services" id="h.dyjpiv1mjfv9">
        <p class="home-kicker">SEARCH SERVICES</p>
        <h2>Patent Search Services</h2>
        <p class="home-support">Choose the investigation that fits the decision: patentability, invalidity, freedom to operate, or competitive landscape.</p>
        <div class="home-service-grid">
          <a href="https://www.toptierpatentsearch.com/services/prior-art-patentability-search" target="_top"><strong>Prior Art &amp; Patentability</strong><span>Evaluate earlier technical disclosures →</span></a>
          <a href="https://www.toptierpatentsearch.com/services/patent-invalidity-search" target="_top"><strong>Patent Invalidity</strong><span>Investigate earlier evidence against claims →</span></a>
          <a href="https://www.toptierpatentsearch.com/services/fto-search" target="_top"><strong>Freedom-to-Operate</strong><span>Investigate potentially relevant patent rights →</span></a>
          <a href="https://www.toptierpatentsearch.com/services/patent-landscape-competitive-analysis" target="_top"><strong>Patent Landscape &amp; Competitive Analysis</strong><span>Structure technology and competitor activity →</span></a>
        </div>
      </section>

      <section class="home-section" id="h.e9ja9l4q12tm">
        <div class="home-split">
          <div>
            <p class="home-kicker">METHODOLOGY</p>
            <h2>More Than Keyword Searching</h2>
          </div>
          <div class="home-copy">
            <p>Technical concept decomposition, classification intelligence, iterative refinement, and human review support a more systematic investigation. Keywords are one search layer, not the entire search method.</p>
          </div>
        </div>
        <div class="home-card-grid">
          <article class="home-card home-card--soft"><h3>Technical Concept Decomposition</h3><p>Break the disclosure into components, functions, relationships, conditions, effects, and technical purposes that can be searched independently.</p></article>
          <article class="home-card home-card--soft"><h3>Terminology Expansion</h3><p>Develop synonyms and alternative expressions based on engineering meaning rather than superficial word similarity.</p></article>
          <article class="home-card home-card--soft"><h3>Classification Intelligence</h3><p>Use classifications as structured technical retrieval systems that complement text searching.</p></article>
          <article class="home-card home-card--soft"><h3>Iterative Human Review</h3><p>Use relevant documents, citations, families, inventors, and assignees to generate the next round of search directions.</p></article>
        </div>
      </section>

      <section class="home-section" id="h.g93ib7ydhdq">
        <p class="home-kicker">SEARCH PROCESS</p>
        <h2>A Systematic Search Process</h2>
        <p class="home-support">From understanding the technology to screening, refinement, and reporting, each stage follows a documented research logic.</p>
        <div class="home-process">
          <article class="home-process-step"><span>01</span><h3>Understand</h3><p>Clarify the technical concept and the research objective.</p></article>
          <article class="home-process-step"><span>02</span><h3>Decompose</h3><p>Separate the concept into searchable technical elements.</p></article>
          <article class="home-process-step"><span>03</span><h3>Retrieve</h3><p>Combine terminology, classifications, citations, families, and related clues.</p></article>
          <article class="home-process-step"><span>04</span><h3>Refine</h3><p>Review results and adjust the search direction iteratively.</p></article>
          <article class="home-process-step"><span>05</span><h3>Report</h3><p>Organize relevant evidence, search logic, limitations, and findings.</p></article>
        </div>
        <a class="home-card-link" href="https://www.toptierpatentsearch.com/expertise/search-methodology" target="_top">Explore the search methodology →</a>
      </section>

      <section class="home-section home-services" id="h.4m9sve6c5660">
        <p class="home-kicker">PROCESS IN ACTION</p>
        <h2>See the Search Process in Action</h2>
        <p class="home-support">A sanitized example can show how a technical description becomes concepts, classifications, search queries, candidate documents, and structured findings.</p>
        <div class="home-example-flow">
          <span>Technical description</span>
          <span>Concept decomposition</span>
          <span>Keywords &amp; synonyms</span>
          <span>Classification intelligence</span>
          <span>Candidate references</span>
          <span>Structured findings</span>
        </div>
      </section>

      <section class="home-section" id="h.6nkqtbdd13pd">
        <p class="home-kicker">SEARCH CAPABILITIES</p>
        <h2>Technical &amp; Classification Intelligence</h2>
        <p class="home-support">Search depth is strengthened by technical decomposition, IPC/CPC/FI classification intelligence, F-term awareness, and multilingual terminology analysis.</p>
        <div class="home-intelligence-grid">
          <article><strong>IPC</strong><p>International technical structure for broad and cross-jurisdictional searching.</p></article>
          <article><strong>CPC</strong><p>Detailed cooperative classification useful for focused retrieval.</p></article>
          <article><strong>FI</strong><p>Japanese classification providing finer technical subdivision in selected fields.</p></article>
          <article><strong>F-term</strong><p>Multi-dimensional Japanese indexing that can provide an additional technical search perspective.</p></article>
        </div>
      </section>

      <section class="home-section home-software" id="h.w4floza314a2">
        <div class="home-split">
          <div>
            <p class="home-kicker">PURPOSE-BUILT SOFTWARE</p>
            <h2>Patent Research Enhanced by Purpose-Built Software</h2>
          </div>
          <div class="home-copy">
            <p>AI, Python, and custom tools help organize concepts and accelerate search preparation while human technical judgment remains in control. Software supports repeatability and structure; it does not replace source verification or professional review.</p>
          </div>
        </div>
        <div class="home-workflow-line">
          <span>Technical Concept</span>
          <span>Classification Intelligence</span>
          <span>Precision Refinement</span>
          <span>Search-Ready Insights</span>
        </div>
        <a class="home-card-link" href="https://www.toptierpatentsearch.com/software-development/overview" target="_top">Explore software development →</a>
      </section>

      <section class="home-section" id="h.b7jk5j4mp8wc">
        <p class="home-kicker">WHO WE SERVE</p>
        <h2>Built for Patent and Technology Professionals</h2>
        <p class="home-support">Support for organizations and professionals facing technically demanding patent-search questions.</p>
        <div class="home-audience-grid">
          <article class="home-audience-card"><h3>Patent Firms</h3><p>Research support for technically complex prior-art, invalidity, FTO, and landscape matters.</p></article>
          <article class="home-audience-card"><h3>Corporate IP Teams</h3><p>Decision-oriented patent research connected to R&amp;D, product, and portfolio questions.</p></article>
          <article class="home-audience-card"><h3>Startups &amp; Inventors</h3><p>Structured investigation before filing, investment, development, or commercialization decisions.</p></article>
          <article class="home-audience-card"><h3>R&amp;D Organizations</h3><p>Technical landscape and competitive intelligence for emerging or cross-domain technologies.</p></article>
        </div>
      </section>

      <section class="home-section home-services" id="h.qa9wusdsmszs">
        <p class="home-kicker">PROFESSIONAL EXPERIENCE</p>
        <h2>Technical and Patent Research Experience</h2>
        <p class="home-support">Technical training, patent-search experience, technical patent translation, and software/data-analysis capability support rigorous research.</p>
        <div class="home-experience-list">
          <div>Physics and engineering-oriented technical analysis</div>
          <div>Patent-search and prior-art investigation experience</div>
          <div>Technical patent translation and U.S. patent-document familiarity</div>
          <div>Python, data science, AI, and custom research-tool development</div>
        </div>
        <a class="home-card-link" href="https://www.toptierpatentsearch.com/expertise/professional-expertise" target="_top">Explore Professional Expertise →</a>
      </section>

      <section class="home-section" id="h.ej832w73quke">
        <div class="home-trust-box">
          <p class="home-kicker">TRUST &amp; CONFIDENTIALITY</p>
          <h2>Confidentiality Matters</h2>
          <p class="home-support">Unpublished invention information and client materials should be handled carefully through an agreed engagement and information-handling process. Share only what is necessary to define the initial requirement until scope and handling expectations are clear.</p>
        </div>
      </section>

      <section class="home-section home-services" id="h.xpvxldaes2mh">
        <p class="home-kicker">RESOURCES</p>
        <h2>Frequently Asked Questions</h2>
        <p class="home-support">Quick answers about search types, technical fields, databases, classifications, deliverables, confidentiality, and quotations.</p>
        <div class="home-faq-grid">
          <article class="home-faq-card"><h3>Which search do I need?</h3><p>The correct search depends on the decision: filing, validity, product launch, competitive intelligence, or another defined objective.</p></article>
          <article class="home-faq-card"><h3>Which databases are used?</h3><p>The mix can include major international and national patent information systems depending on the jurisdiction and search objective.</p></article>
          <article class="home-faq-card"><h3>Are classifications used?</h3><p>Yes. IPC, CPC, FI, and F-term may be used alongside terminology, citations, families, and related evidence.</p></article>
          <article class="home-faq-card"><h3>How is pricing determined?</h3><p>Pricing depends on technical complexity, scope, jurisdictions, search depth, and requested deliverables.</p></article>
        </div>
        <a class="home-card-link" href="https://www.toptierpatentsearch.com/expertise/faq" target="_top">Read the full FAQ →</a>
      </section>

      <section class="home-section home-cta" id="h.5aq67vi1funq">
        <p class="home-kicker">NEXT STEP</p>
        <h2>Need a More Systematic Patent Search?</h2>
        <p>Discuss the technology, search objective, and desired deliverable before the investigation begins.</p>
        <div class="home-actions">
          <a class="home-button" href="https://www.toptierpatentsearch.com/discuss-quote-order/discuss-a-project" target="_top">Discuss Your Project</a>
          <a class="home-button" href="https://www.toptierpatentsearch.com/discuss-quote-order/request-a-custom-quote" target="_top">Request a Custom Quote</a>
        </div>
      </section>

      <footer class="home-footer-note" id="h.x3rwtphmesxc">Top-tier Patent Search — professional patent-search services, useful resources, contact routes, and essential legal information.</footer>
    </div>
  `;

  const settings = {
    largeHeightDesktop: 350,
    largeHeightTablet: 305,
    largeHeightMobile: 265,
    compactHeight: 66,
    googleCompactHeight: 50,
    largeTitleDesktop: 46,
    largeTitleMobile: 34,
    compactTitle: 19,
    googleCompactTitle: 17,
    largeSiteName: 14,
    largeMark: 52,
    compactMark: 32,
    googleCompactMark: 26,
    compactShadowStart: 0.72
  };

  const root = document.documentElement;
  const banner = document.getElementById("variBanner");
  const bannerSpacer = document.getElementById("bannerSpacer");
  const siteName = document.getElementById("siteName");
  const title = document.getElementById("heroTitle");
  const subtitle = document.getElementById("heroSubtitle");
  const contentTitle = document.getElementById("contentTitle");
  const contentLead = document.getElementById("contentLead");
  const genericContentTitle = document.getElementById("genericContentTitle");
  const genericContentLead = document.getElementById("genericContentLead");
  const expertiseContent = document.getElementById("expertiseContent");
  const genericContent = document.getElementById("genericContent");

  if (!banner || !bannerSpacer || !siteName || !title || !subtitle) return;

  const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
  const mix = (from, to, progress) => from + (to - from) * progress;
  const smoothstep = (progress) => progress * progress * (3 - 2 * progress);

  let pageMode = "standalone";
  let pageKey = "home";

  function getResponsiveLargeHeight() {
    if (window.innerWidth <= 520) return settings.largeHeightMobile;
    if (window.innerWidth <= 820) return settings.largeHeightTablet;
    return settings.largeHeightDesktop;
  }

  function getResponsiveLargeTitle() {
    return window.innerWidth <= 520 ? settings.largeTitleMobile : settings.largeTitleDesktop;
  }

  function getCompactMetrics() {
    if (pageMode === "google") {
      return {
        height: settings.googleCompactHeight,
        title: settings.googleCompactTitle,
        mark: settings.googleCompactMark,
        gap: 8
      };
    }

    return {
      height: settings.compactHeight,
      title: settings.compactTitle,
      mark: settings.compactMark,
      gap: 10
    };
  }

  function ensureHomeStyles() {
    if (document.getElementById("homeStyles")) return;
    const link = document.createElement("link");
    link.id = "homeStyles";
    link.rel = "stylesheet";
    link.href = "./home.css";
    document.head.appendChild(link);
  }

  function loadPageConfiguration() {
    const params = new URLSearchParams(window.location.search);
    const requestedPage = (params.get("page") || "home").toLowerCase();
    const requestedMode = (params.get("mode") || "standalone").toLowerCase();

    pageKey = pages[requestedPage] ? requestedPage : "home";
    const config = pages[pageKey];
    pageMode = requestedMode === "google" ? "google" : "standalone";

    document.body.dataset.page = pageKey;
    document.body.dataset.mode = pageMode;

    siteName.textContent = "Top-tier Patent Search";
    title.textContent = config.title;
    subtitle.textContent = config.subtitle;

    if (expertiseContent && genericContent) {
      const isExpertise = pageKey === "expertise";
      expertiseContent.hidden = !isExpertise;
      genericContent.hidden = isExpertise;

      if (pageKey === "home") {
        ensureHomeStyles();
        genericContent.innerHTML = HOME_CONTENT;
      }
    }

    if (pageKey === "expertise") {
      if (contentTitle) contentTitle.textContent = config.contentTitle;
      if (contentLead) contentLead.textContent = config.contentLead;
    } else if (pageKey !== "home") {
      if (genericContentTitle) genericContentTitle.textContent = config.contentTitle;
      if (genericContentLead) genericContentLead.textContent = config.contentLead;
    }

    document.title = `${config.title} | Top-tier Patent Search`;
  }

  function navigateToRequestedSection() {
    const params = new URLSearchParams(window.location.search);
    const requestedSection = (params.get("section") || "").trim().toLowerCase();
    const hashId = decodeURIComponent(window.location.hash.replace(/^#/, "")).trim();

    let sectionMap = null;
    if (pageKey === "expertise") sectionMap = expertiseSections;
    if (pageKey === "home") sectionMap = homeSections;
    if (!sectionMap) return;

    const targetId = hashId || sectionMap[requestedSection];
    if (!targetId) return;

    const target = document.getElementById(targetId);
    if (!target) return;

    window.requestAnimationFrame(() => {
      window.requestAnimationFrame(() => {
        target.scrollIntoView({ block: "start", behavior: "auto" });
        requestRender();
      });
    });
  }

  let ticking = false;

  function render() {
    const largeHeight = getResponsiveLargeHeight();
    const largeTitle = getResponsiveLargeTitle();
    const compact = getCompactMetrics();

    root.style.setProperty("--banner-spacer-height", `${largeHeight}px`);
    root.style.setProperty("--banner-min-height", `${compact.height}px`);

    const collapseDistance = Math.max(1, largeHeight - compact.height);
    const raw = clamp(window.scrollY / collapseDistance, 0, 1);
    const eased = smoothstep(raw);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const progress = reducedMotion ? (raw >= 0.5 ? 1 : 0) : eased;

    root.style.setProperty("--banner-height", `${mix(largeHeight, compact.height, progress)}px`);
    root.style.setProperty("--title-size", `${mix(largeTitle, compact.title, progress)}px`);
    root.style.setProperty("--mark-size", `${mix(settings.largeMark, compact.mark, progress)}px`);
    root.style.setProperty("--brand-gap", `${mix(16, compact.gap, progress)}px`);

    const subtitleOpacity = clamp(1 - progress * 1.8, 0, 1);
    root.style.setProperty("--subtitle-opacity", subtitleOpacity.toFixed(3));
    root.style.setProperty("--subtitle-shift", `${mix(0, -14, progress)}px`);
    root.style.setProperty("--subtitle-max-height", `${mix(36, 0, clamp(progress * 1.35, 0, 1))}px`);

    const siteNameVisibility = clamp(1 - progress * 2.3, 0, 1);
    root.style.setProperty("--site-name-opacity", siteNameVisibility.toFixed(3));
    root.style.setProperty("--site-name-size", `${mix(settings.largeSiteName, 10, progress)}px`);
    root.style.setProperty("--site-name-gap", `${mix(8, 0, progress)}px`);
    root.style.setProperty("--site-name-max-height", `${mix(24, 0, clamp(progress * 1.5, 0, 1))}px`);

    root.style.setProperty("--overlay-opacity", mix(0.34, pageMode === "google" ? 0.76 : 0.72, progress).toFixed(3));
    root.style.setProperty("--art-opacity", mix(0.82, pageMode === "google" ? 0.12 : 0.22, progress).toFixed(3));
    root.style.setProperty("--art-scale", mix(1, 1.08, progress).toFixed(3));

    const shadow = progress >= settings.compactShadowStart
      ? (pageMode === "google"
          ? "0 5px 14px rgba(15, 24, 42, .16)"
          : "0 7px 20px rgba(15, 24, 42, .18)")
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
  navigateToRequestedSection();

  window.addEventListener("scroll", requestRender, { passive: true });
  window.addEventListener("resize", requestRender);
})();
