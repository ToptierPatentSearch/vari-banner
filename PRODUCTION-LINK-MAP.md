# Production link map — Professional Expertise

## Purpose

The production Professional Expertise page will be a Google Sites **full-page embed** whose embedded source is:

```text
https://toptierpatentsearch.github.io/vari-banner/?page=expertise&mode=google
```

Because the GitHub page runs inside an iframe, a fragment on the outer Google Sites URL (for example `#h.b5cnudye6zj2`) does **not** automatically navigate to a matching element inside the embedded GitHub document.

## Production rule

Use two kinds of links:

1. **Links from other Google Sites pages to Professional Expertise**
   - Link to the Google Sites Professional Expertise page itself:

   ```text
   https://www.toptierpatentsearch.com/expertise/professional-expertise
   ```

   - Do not rely on legacy `#h...` fragments for cross-page navigation once the page becomes a full-page embed.

2. **Links inside the embedded Professional Expertise page**
   - Use the built-in nine-item navigator and internal anchors. These operate inside the iframe and therefore work correctly.

## Direct deep links for testing or standalone use

The GitHub page also supports `section=` so a particular section can be opened directly when the GitHub URL itself is the navigation target.

| Section | Direct URL |
| --- | --- |
| At a Glance | `https://toptierpatentsearch.github.io/vari-banner/?page=expertise&mode=google&section=overview` |
| Core Professional Capabilities | `https://toptierpatentsearch.github.io/vari-banner/?page=expertise&mode=google&section=core` |
| Patent Search Intelligence | `https://toptierpatentsearch.github.io/vari-banner/?page=expertise&mode=google&section=search` |
| Technical Expertise | `https://toptierpatentsearch.github.io/vari-banner/?page=expertise&mode=google&section=technical` |
| Patent Classification & Information Systems | `https://toptierpatentsearch.github.io/vari-banner/?page=expertise&mode=google&section=classification` |
| Analytical Expertise | `https://toptierpatentsearch.github.io/vari-banner/?page=expertise&mode=google&section=analysis` |
| AI, Data & Software Capabilities | `https://toptierpatentsearch.github.io/vari-banner/?page=expertise&mode=google&section=ai` |
| Quality & Evidence Discipline | `https://toptierpatentsearch.github.io/vari-banner/?page=expertise&mode=google&section=quality` |
| Professional Foundation | `https://toptierpatentsearch.github.io/vari-banner/?page=expertise&mode=google&section=foundation` |

## Legacy anchor map

| Existing Google Sites anchor | Section |
| --- | --- |
| `#h.bsy7a75ml47f` | Professional Expertise at a Glance |
| `#h.cpyduewk0btt` | Core Professional Capabilities |
| `#h.6l38ivbh61ay` | Patent Search Intelligence |
| `#h.b5cnudye6zj2` | Technical Expertise |
| `#h.lxw66wfhxse8` | Patent Classification & Information Systems |
| `#h.61ao3yybxdqi` | Analytical Expertise |
| `#h.h4zd9sa6a5aj` | AI, Data & Software Capabilities |
| `#h.47e6ljrvhmr2` | Quality & Evidence Discipline |
| `#h.yzp0fn57z0fv` | Professional Foundation |

These legacy IDs are also retained inside the GitHub document so the internal navigator remains compatible with the section naming already used in the site content.

## Recommended migration

Before replacing the live Google Sites Professional Expertise page, change any external cards or menus that currently target a section-specific `#h...` URL so they target the Professional Expertise page root instead. Once visitors enter the page, the embedded nine-item section navigator provides section-level navigation.

Do not replace the live production page until those incoming links have been audited.
