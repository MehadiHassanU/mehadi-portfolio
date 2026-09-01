# Implementation Plan

[Overview]
Rebuild the mehadi-portfolio About section and overall page layout using a strict Swiss International Typographic Style editorial grid. Remove overlapping elements, arbitrary absolute positioning, and inconsistent spacing. Establish one primary 12-column grid with consistent gutters, align all major elements to the same grid lines, and rebuild the About cards as 3 equal bordered cards with precise internal spacing.

[Types]
No new TypeScript types required. Existing interfaces (About props, SectionLabel props, ProjectRow props) remain unchanged. Only layout class names and grid structures are modified.

[Files]
New files: none.
Modified files:
- src/components/About.tsx — rebuild with strict grid alignment, 3-col cards, consistent spacing
- src/app/globals.css — add spacing token utilities (space-1 through space-16 already exist; verify consistent usage)
- src/components/SectionLabel.tsx — ensure label aligns to grid, no arbitrary margins
- src/components/DisplayHeading.tsx — verify heading aligns to grid lines
- src/components/Hero.tsx — verify hero grid alignment, remove unnecessary absolute positioning where possible
- src/components/ProjectRow.tsx — verify card alignment to grid
- src/components/ProjectIndex.tsx — verify grid spacing consistency
- src/components/Skills.tsx — verify card grid alignment
- src/components/Experience.tsx — verify card grid alignment
- src/components/Education.tsx — verify split panel alignment
- src/components/BeyondCode.tsx — verify card grid alignment
- src/components/Contact.tsx — verify card grid alignment
- src/components/Research.tsx — verify grid alignment
- src/components/Trajectory.tsx — verify numbered block alignment
- src/components/Header.tsx — verify header grid alignment
- src/components/Footer.tsx — verify footer grid alignment

[Functions]
No new functions required. Modified functions:
- About component: restructure JSX to use editorial-grid with consistent col-span assignments; replace arbitrary mt-8 with grid-aligned spacing; rebuild cards with equal widths, consistent padding, and no fixed heights.
- SectionLabel: verify className applies correctly to grid column.

[Classes]
No new classes required. Existing classes used:
- editorial-grid (12-col grid, 24px gap, 1200px max-width, 80px padding)
- swiss-card-soft (1px silver border, white bg, hover shadow)
- swiss-label (bordered label chip)
- swiss-tag (bordered tag)

[Dependencies]
No new dependencies. Existing Tailwind CSS v4 + Next.js 16 setup sufficient.

[Testing]
Visual QA only: inspect page at 1440px, 1280px, 1024px, 768px, 480px, 375px. Verify:
- Section label, heading, and cards align to same left/right grid lines
- No overlaps between heading and cards
- Cards have equal widths and consistent internal padding
- No unexplained vertical gaps
- Responsive collapse: 3-col → 2+1 → 1-col

[Implementation Order]
1. Inspect current About.tsx and identify all arbitrary margins/transforms/absolute positioning
2. Remove bad layout rules (negative margins, arbitrary transforms, fixed heights)
3. Rebuild About with editorial-grid: label (col-span-2), heading (col-span-10 col-start-3), cards (col-span-10 col-start-3, grid-cols-3 gap-6)
4. Verify cards use consistent padding (p-6 lg:p-8) and no fixed heights
5. Check responsive: lg:grid-cols-3, md:grid-cols-2, grid-cols-1
6. Verify build passes
7. Visual QA at all breakpoints