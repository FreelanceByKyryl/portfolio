# Website collection audit

Reviewed on 2026-11-13 for `FreelanceByKyryl/portfolio`.

## Scope and additions

Compared the current project archive with all 12 repositories visible on the
FreelanceByKyryl GitHub profile and inspected the available website sources.
The second repository-list page was empty. This establishes coverage of the
visible repositories, not access to unlisted private repositories.

Seven websites are added, retaining the original eight projects (15 total;
11 Websites, 4 Apps & Backend, 2 Bots & AI). The app/AI categories overlap.

| Project | Source repository | Verified from source |
| --- | --- | --- |
| SpaceEdu | [spaceplanet](https://github.com/FreelanceByKyryl/spaceplanet) | HTML, CSS, JavaScript, Canvas; planet switching, orbital simulation, comparison and quiz |
| KV Freight Group | [kv-freight](https://github.com/FreelanceByKyryl/kv-freight) | HTML, CSS, JavaScript; multiple logistics pages, scroll motion and tracking demo |
| NEXLOOP | [assasproject](https://github.com/FreelanceByKyryl/assasproject) | HTML, CSS, JavaScript; SaaS landing page, dashboard-style preview and pricing |
| UTOPIA Flowers | [demoversionOfUTOPIAFLOWERS](https://github.com/FreelanceByKyryl/demoversionOfUTOPIAFLOWERS) | HTML, CSS, JavaScript; Bulgarian florist landing page, bouquets, occasions and animations |
| Grooming Studio 23 | [grooming](https://github.com/FreelanceByKyryl/grooming) | HTML, CSS, JavaScript; services, filterable gallery and copyable booking inquiry |
| Ali Baba Auto Service | [alibabacars](https://github.com/FreelanceByKyryl/alibabacars) | HTML, CSS, JavaScript; Bulgarian automotive site for Varna with interactive vehicle presentation |
| Developer Portfolio | [MyPortfolio](https://github.com/FreelanceByKyryl/MyPortfolio) | A separate HTML/CSS/JavaScript portfolio design with project search and filters |

TENSILE, Flower Studio and Coffee Studio were already represented; their source
links and frontend technologies are now included without duplicating the sites.
`codexcheck` is empty. This portfolio is not added as a self-referential project.

Fernhollow was not found in the visible repository list or inspected sources;
the exact `FreelanceByKyryl/Fernhollow` and `FreelanceByKyryl/fernhollow` repository
pages returned 404. It has not been added without verifiable source material.

## Links and covers

- The existing TENSILE, Flower Studio and Coffee Studio Netlify demo links and
  live previews are preserved. This environment blocks outbound access to those
  demo domains (CONNECT 403), so deployment availability is not verified here.
- No additional demo URL was found in the new sites' sources or GitHub homepage
  settings. Their cards explicitly link to source code instead of inventing demos.
- The seven local `images/projects/*.svg` covers come from the same owner's
  [MyPortfolio cover collection](https://github.com/FreelanceByKyryl/MyPortfolio/tree/377e680e177973512f6e3038b130d3dd185da211/images/projects).
  They are illustrated covers, not screenshots. The alternate portfolio label is
  adjusted for this archive. The assets need no remote fonts, images or scripts.
- Existing homepage selections, visual theme and project categories are retained.

## Validation

Chromium/Playwright checks cover 320, 375, 680, 768, 980 and 1440 px:
category membership and repeated switching, initial/updated `aria-pressed`,
hidden-card layout, local cover loading, text/layout overflow, and mobile menu
opening, Escape, outside-click dismissal and navigation. Screenshots of the new
cards were visually inspected at mobile and desktop sizes.

All five pages also pass HTTP, main-heading, local-link and JavaScript-error smoke
checks at 375 and 1440 px. Local assets exist, the SVGs parse, and `node --check
script.js` passes. External resources were excluded from the local browser checks
because of the environment's outbound restrictions; this does not validate the
linked websites themselves.
