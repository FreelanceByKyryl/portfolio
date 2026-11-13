# Website collection audit

Reviewed on 2026-11-13 for `FreelanceByKyryl/portfolio`.

## Scope and additions

Compared the current project archive with all 12 repositories visible on the
FreelanceByKyryl GitHub profile and inspected the available website sources.
The second repository-list page was empty. This establishes coverage of the
visible repositories, not access to unlisted private repositories.

Seven websites from inspected repositories and the owner-supplied Fernhollow visual
concept are added, retaining the original eight projects (16 total; 12 Websites,
4 Apps & Backend, 2 Bots & AI). The app/AI categories overlap.
The two florist designs are separate entries: the English Flower Studio with a
bouquet carousel, and the Bulgarian Flower Boutique with an arched bouquet hero.

| Project | Source repository | Verified from source |
| --- | --- | --- |
| SpaceEdu | [spaceplanet](https://github.com/FreelanceByKyryl/spaceplanet) | HTML, CSS, JavaScript, Canvas; planet switching, orbital simulation, comparison and quiz |
| KV Freight Group | [kv-freight](https://github.com/FreelanceByKyryl/kv-freight) | HTML, CSS, JavaScript; multiple logistics pages, scroll motion and tracking demo |
| Flower Boutique | [demoversionOfUTOPIAFLOWERS](https://github.com/FreelanceByKyryl/demoversionOfUTOPIAFLOWERS) | HTML, CSS, JavaScript; Bulgarian florist landing page, arched bouquet hero, flower collections and occasions |
| NEXLOOP | [assasproject](https://github.com/FreelanceByKyryl/assasproject) | HTML, CSS, JavaScript; SaaS landing page, dashboard-style preview and pricing |
| Grooming Studio 23 | [grooming](https://github.com/FreelanceByKyryl/grooming) | HTML, CSS, JavaScript; services, filterable gallery and copyable booking inquiry |
| Ali Baba Auto Service | [alibabacars](https://github.com/FreelanceByKyryl/alibabacars) | HTML, CSS, JavaScript; Bulgarian automotive site for Varna with interactive vehicle presentation |
| Fernhollow | Owner-supplied screenshot in `photos.zip`; no source URL verified | Flower-studio visual concept; description is limited to the supplied screenshot, with no unverified technology claims |
| Developer Portfolio | [MyPortfolio](https://github.com/FreelanceByKyryl/MyPortfolio) | A separate HTML/CSS/JavaScript portfolio design with project search and filters |

TENSILE, Flower Studio and Coffee Studio were already represented. Their frontend
technologies are documented without duplicating the sites.
`codexcheck` is empty. This portfolio is not added as a self-referential project.

Fernhollow source was not found in the visible repository list or inspected
sources; the exact `FreelanceByKyryl/Fernhollow` and
`FreelanceByKyryl/fernhollow` repository pages returned 404. The owner subsequently
supplied a screenshot and requested their own images in the collection, so it is
shown as a visual concept without fabricated demo/source links or technologies.

## Links and covers

- The owner supplied these nine Netlify URLs. All project-card anchors for these
  sites (cover, text action and round arrow) now open the live site instead of
  GitHub, with matching visible and accessible labels. Source references remain
  in this audit for provenance.

  | Project | Owner-supplied live URL |
  | --- | --- |
  | KV Freight Group | https://kv-freight.netlify.app/ |
  | Grooming Studio 23 | https://groomingstudio23.netlify.app/ |
  | Ali Baba Auto Service | https://alibabaservices.netlify.app/ |
  | TENSILE Fitness | https://tensilefitness.netlify.app/ |
  | Flower Studio (English) | https://interactiveflowershop.netlify.app/ |
  | Coffee Studio | https://coffeesitedemo.netlify.app/ |
  | Flower Boutique (Bulgarian) | https://flowersitedemo.netlify.app/ |
  | Developer Portfolio | https://myportfoliositebykirill.netlify.app/ |
  | SpaceEdu | https://space-eduu.netlify.app |

- Homepage project links use the same supplied URLs. Existing live iframes are
  retained. This environment blocks outbound Netlify access (CONNECT 403), so local
  checks validate link targets, not remote deployment availability.
- Projects without supplied live URLs keep their existing verified source links;
  Fernhollow remains a screenshot-only concept without a fabricated destination.
- Eight original PNG screenshots from the owner's `photos.zip` replace the
  matching covers: SpaceEdu, KV Freight, NEXLOOP, Ali Baba, Grooming Studio 23,
  Discord Bio, Flower Boutique and Fernhollow. Files are copied byte-for-byte,
  without cropping or image processing. Captions sit below screenshots so the
  full images remain visible, and lazy loading limits initial downloads.
- The Bulgarian screenshot is stored as `flower-boutique.png` and matches the
  `demoversionOfUTOPIAFLOWERS` layout, with generic YourCompanyName branding. The
  English florist is a different design, confirmed by the additional owner-supplied
  reference screenshot. Its existing live preview is retained; the inline reference
  image was not available as an importable file in the workspace.
- Only Developer Portfolio retains its illustrated SVG from the same owner's
  [MyPortfolio cover collection](https://github.com/FreelanceByKyryl/MyPortfolio/tree/377e680e177973512f6e3038b130d3dd185da211/images/projects).
  Obsolete illustrations for the five matching projects are removed.
- Discord Bio now links to its verified original
  [source repository](https://github.com/MuscuLopnul/Bio---Discord).
- The homepage hero features the owner's original SpaceEdu screenshot instead
  of the decorative TENSILE illustration. Its caption and both hero links now
  point to SpaceEdu, and the image is shown uncropped with high fetch priority.
  The selected-project list, visual theme and project categories are retained.

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
