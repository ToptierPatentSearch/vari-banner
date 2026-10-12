# Full-page migration map

This document maps the current public Google Sites paths to reusable `banner.toptierpatentsearch.com` full-page embed URLs.

> Important: do not replace a production Google Sites page with a Full page embed until that page's complete body content has been migrated to the banner application. A Full page embed replaces the native page body; it does not sit above existing Google Sites content.

## URL syntax

Correct:

```text
https://banner.toptierpatentsearch.com/?page=home&mode=google
```

Not:

```text
https://banner.toptierpatentsearch.com/?pagehome&mode=google
```

The parameter name and value must be separated by `=`.

## Page map

| Public Google Sites path | Banner page key | Full-page embed URL |
|---|---|---|
| `/home` | `home` | `https://banner.toptierpatentsearch.com/?page=home&mode=google` |
| `/services/overview` | `services-overview` | `https://banner.toptierpatentsearch.com/?page=services-overview&mode=google` |
| `/services/patent-search-services` | `services` | `https://banner.toptierpatentsearch.com/?page=services&mode=google` |
| `/services/prior-art-patentability-search` | `prior-art` | `https://banner.toptierpatentsearch.com/?page=prior-art&mode=google` |
| `/services/fto-search` | `fto` | `https://banner.toptierpatentsearch.com/?page=fto&mode=google` |
| `/services/patent-invalidity-search` | `invalidity` | `https://banner.toptierpatentsearch.com/?page=invalidity&mode=google` |
| `/services/patent-landscape-competitive-analysis` | `landscape` | `https://banner.toptierpatentsearch.com/?page=landscape&mode=google` |
| `/expertise/overview` | `expertise-overview` | `https://banner.toptierpatentsearch.com/?page=expertise-overview&mode=google` |
| `/expertise/professional-expertise` | `expertise` | `https://banner.toptierpatentsearch.com/?page=expertise&mode=google` |
| `/expertise/patent-search-resources` | `resources` | `https://banner.toptierpatentsearch.com/?page=resources&mode=google` |
| `/expertise/search-methodology` | `search-methodology` | `https://banner.toptierpatentsearch.com/?page=search-methodology&mode=google` |
| `/expertise/faq` | `faq` | `https://banner.toptierpatentsearch.com/?page=faq&mode=google` |
| `/pricing` | `pricing` | `https://banner.toptierpatentsearch.com/?page=pricing&mode=google` |
| `/software-development/overview` | `software-overview` | `https://banner.toptierpatentsearch.com/?page=software-overview&mode=google` |
| `/software-development/keyword-classification-app` | `keyword-app` | `https://banner.toptierpatentsearch.com/?page=keyword-app&mode=google` |
| `/software-development/product-demo` | `product-demo` | `https://banner.toptierpatentsearch.com/?page=product-demo&mode=google` |
| `/software-development/operation-guide` | `operation-guide` | `https://banner.toptierpatentsearch.com/?page=operation-guide&mode=google` |
| `/discuss-quote-order/overview` | `project-overview` | `https://banner.toptierpatentsearch.com/?page=project-overview&mode=google` |
| `/discuss-quote-order/discuss-a-project` | `discuss` | `https://banner.toptierpatentsearch.com/?page=discuss&mode=google` |
| `/discuss-quote-order/request-a-custom-quote` | `quote` | `https://banner.toptierpatentsearch.com/?page=quote&mode=google` |
| `/discuss-quote-order/request-a-search` | `search-request` | `https://banner.toptierpatentsearch.com/?page=search-request&mode=google` |
| `/discuss-quote-order/place-an-order` | `order` | `https://banner.toptierpatentsearch.com/?page=order&mode=google` |
| `/contact` | `contact` | `https://banner.toptierpatentsearch.com/?page=contact&mode=google` |
| `/legal-disclaimer` | `legal` | `https://banner.toptierpatentsearch.com/?page=legal&mode=google` |
| `/privacy-policy` | `privacy` | `https://banner.toptierpatentsearch.com/?page=privacy&mode=google` |
| `/terms-of-service` | `terms` | `https://banner.toptierpatentsearch.com/?page=terms&mode=google` |

## Migration status

### Ready for full-page production testing

- Home (`page=home`) — production-style Home body, retained legacy Home section IDs, and variable banner are implemented.
- Professional Expertise (`page=expertise`) — complete production-style body and variable banner are implemented.

### Route registered; complete body migration still required

All other page keys listed above. Their public paths and intended banner URLs are reserved in `site-routes.js`, but the complete native Google Sites body must be reproduced in the banner application before production cutover.

## Safe production cutover per page

1. Duplicate the existing Google Sites page as a rollback copy.
2. Hide the backup from navigation.
3. Migrate and verify the complete page body in the banner application.
4. Test the banner URL directly on desktop and mobile.
5. Create or replace the Google Sites page with **Full page embed**.
6. Use the corresponding banner URL from the table above.
7. Preserve the existing Google Sites custom path.
8. Publish and verify navigation, links, forms, anchors, mobile layout, and analytics.
9. Keep the rollback copy until the production page has been stable.

## Why migration must be page-by-page

The existing `*-private-domain.html` files are primarily section navigators/cards that link into native Google Sites sections. They are useful source material, but they are not the complete page bodies. Switching every page to Full page embed before migrating the remaining native sections would remove content from the public site.
