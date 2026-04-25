## Goal

Replace the radial branching SVG visual in **Section 8 — "Built as part of the Borna AI platform"** on `src/pages/BornaCarePage.tsx` (currently lines ~383–478). The starburst/branch node style is reused across multiple pages and feels repetitive. Swap it for a real product preview using the existing live Borna Care dashboard screenshots.

## What will change

**File:** `src/pages/BornaCarePage.tsx` (Section 8 only — lines 383–478)

Remove:
- The `<svg>` ecosystem diagram (radial gradients, branch curves, glowing core circle)
- The center "Borna Care – Live" card
- The 4 surrounding orbiting module cards (Connect / Engage / Insight / Core)
- Related `ecosystemModules` mapping inside this section

Replace with: a **stacked dual-dashboard preview** showing the actual product, mirroring the proven pattern used in `CareHero.tsx` and `WatchBornaCareWork.tsx`:

- Two glass-panel framed images, stacked with slight overlap/offset for depth
  - Top/back: `/images/Admin_Dashboard.webp` — labelled "Practice dashboard"
  - Front/foreground: `/images/Hero_-_patient_Dashboard__1_.webp` — labelled "Patient portal"
- Each in a rounded-2xl frame with the same subtle teal glow used elsewhere (`boxShadow: 0 0 40px 8px hsla(170,100%,43%,0.08)`, `border: 0.5px solid rgba(255,255,255,0.1)`)
- Small "LIVE" pill badge (pulsing teal dot) on the front frame to preserve the "first live module" message
- Fully responsive: stacked vertically on mobile (no overlap, ~16px gap), offset/overlapping on `lg:` for visual depth
- No horizontal overflow; respects existing container padding

The left column (heading "Built as part of the Borna AI platform", paragraph, "See the full platform" link) stays unchanged. Only the right visual column is rebuilt.

## Visual sketch

```text
Desktop (lg+):
┌─────────────────────┐       ┌──────────────────┐
│ Built as part of    │       │  ┌─────────────┐ │
│ the Borna AI        │       │  │ Admin dash  │ │
│ platform            │       │  │             │ │
│                     │       │  └────┬────────┘ │
│ Borna Care is the   │       │       │ ┌──────┐ │
│ first live module…  │       │       └─│Patient│ │
│                     │       │         │portal │ │
│ See the platform →  │       │    [LIVE] └─────┘ │
└─────────────────────┘       └──────────────────┘

Mobile: two frames stacked vertically, no overlap.
```

## Notes

- Keeps the section's intent (Care = live anchor of the wider platform) but communicates it through real product visuals instead of yet another node diagram.
- Reuses already-optimised WebP assets — no new image work needed.
- No changes to imports beyond removing now-unused `MessageSquare`, `Users`, `BarChart3`, `Cpu`, `Sparkles` icon refs (only if no longer referenced elsewhere on the page — will verify before removing).
