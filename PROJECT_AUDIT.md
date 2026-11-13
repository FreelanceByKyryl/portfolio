# Website collection audit

Reviewed on 2026-11-13 for `FreelanceByKyryl/portfolio`.

## Scope and additions

Compared the current project archive with all 12 repositories visible on the
FreelanceByKyryl GitHub profile and inspected the available website sources.
The second repository-list page was empty. This establishes coverage of the
visible repositories, not access to unlisted private repositories.

Six websites from inspected repositories and the owner-supplied Fernhollow visual
concept are added, retaining the original eight projects (15 total; 11 Websites,
4 Apps & Backend, 2 Bots & AI). The app/AI categories overlap.
UTOPIA Flowers was removed at the owner's request after the initial audit.

| Project | Source repository | Verified from source |
| --- | --- | --- |
| SpaceEdu | [spaceplanet](https://github.com/FreelanceByKyryl/spaceplanet) | HTML, CSS, JavaScript, Canvas; planet switching, orbital simulation, comparison and quiz |
| KV Freight Group | [kv-freight](https://github.com/FreelanceByKyryl/kv-freight) | HTML, CSS, JavaScript; multiple logistics pages, scroll motion and tracking demo |
| NEXLOOP | [assasproject](https://github.com/FreelanceByKyryl/assasproject) | HTML, CSS, JavaScript; SaaS landing page, dashboard-style preview and pricing |
| Grooming Studio 23 | [grooming](https://github.com/FreelanceByKyryl/grooming) | HTML, CSS, JavaScript; services, filterable gallery and copyable booking inquiry |
| Ali Baba Auto Service | [alibabacars](https://github.com/FreelanceByKyryl/alibabacars) | HTML, CSS, JavaScript; Bulgarian automotive site for Varna with interactive vehicle presentation |
| Fernhollow | Owner-supplied screenshot in `photos.zip`; no source URL verified | Flower-studio visual concept; description is limited to the supplied screenshot, with no unverified technology claims |
| Developer Portfolio | [MyPortfolio](https://github.com/FreelanceByKyryl/MyPortfolio) | A separate HTML/CSS/JavaScript portfolio design with project search and filters |

TENSILE, Flower Studio and Coffee Studio were already represented; their source
links and frontend technologies are now included without duplicating the sites.
`codexcheck` is empty. This portfolio is not added as a self-referential project.

Fernhollow source was not found in the visible repository list or inspected
sources; the exact `FreelanceByKyryl/Fernhollow` and
`FreelanceByKyryl/fernhollow` repository pages returned 404. The owner subsequently
supplied a screenshot and requested their own images in the collection, so it is
shown as a visual concept without fabricated demo/source links or technologies.

## Links and covers

- The existing TENSILE, Flower Studio and Coffee Studio Netlify demo links are
  preserved. Flower Studio uses the owner's screenshot on both the homepage and
  project archive; TENSILE and Coffee Studio retain their live previews. This
  environment blocks outbound access to those demo domains (CONNECT 403), so
  deployment availability is not verified here.
- No additional demo URL was found in the new sites' sources or GitHub homepage
  settings. Their cards explicitly link to source code instead of inventing demos.
- Eight original PNG screenshots from the owner's `photos.zip` replace the
  matching covers: SpaceEdu, KV Freight, NEXLOOP, Ali Baba, Grooming Studio 23,
  Discord Bio, Flower Studio and Fernhollow. Files are copied byte-for-byte,
  without cropping or image processing. Captions sit below screenshots so the
  full images remain visible, and lazy loading limits initial downloads.
- Only Developer Portfolio retains its illustrated SVG from the same owner's
  [MyPortfolio cover collection](https://github.com/FreelanceByKyryl/MyPortfolio/tree/377e680e177973512f6e3038b130d3dd185da211/images/projects).
  Obsolete illustrations for the five matching projects are removed.
- Discord Bio now links to its verified original
  [source repository](https://github.com/MuscuLopnul/Bio---Discord).
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
