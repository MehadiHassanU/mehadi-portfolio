# Implementation Plan

[Overview]
Keep the hero layout as is (name, headline, supporting copy, academic profile card, social row) and only reposition the two CTA buttons ("Explore My Work" / "Let's Connect") so they sit stacked vertically, cleanly levelled under the supporting description in the lower-left area, with the Academic Profile card remaining top-aligned on the right.

[Types]
No type changes. Existing component props (HeroSupportingCopyProps, HeroCTAsProps, HeroAcademicMetaProps) remain unchanged.

[Files]
New files: none.
Modified files:
- src/components/Hero.tsx — wrap HeroSupportingCopy + HeroCTAs in one grid cell (cols 5–8, row 3) so both share the same left column; academic meta stays cols 9–12 row 3.
- src/components/HeroSupportingCopy.tsx — remove grid placement classes (now provided by wrapper); keep self-start.
- src/components/HeroCTAs.tsx — remove grid placement + arbitrary mt-6/lg:mt-8; keep vertical stack (flex-col on lg) with a consistent top margin under the description.

[Functions]
Modified components only (className/JSX restructure):
- Hero: new wrapper div `col-span-12 lg:col-span-4 lg:col-start-5 lg:row-start-3 flex flex-col` containing the two components.
- HeroSupportingCopy: className becomes `self-start` (drop col-span/col-start/row-start).
- HeroCTAs: className becomes `mt-10 flex flex-col sm:flex-row lg:flex-col gap-4` (drop col-span/col-start and mt-6/lg:mt-8).

[Classes]
No new classes. Reuses existing: editorial-grid, swiss-card-soft, swiss-accent-bar.

[Dependencies]
No changes.

[Testing]
- Run `npm run build` and `npm run lint`.
- Visual QA: CTAs stacked, left-aligned under description, top of CTA block clearly below description; academic card top-aligned right; no overlap at 1440/1024/768/375px.

[Implementation Order]
1. Edit Hero.tsx (wrapper)
2. Edit HeroSupportingCopy.tsx and HeroCTAs.tsx (strip grid classes)
3. Build + lint verify
4. Visual QA