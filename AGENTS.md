# AGENTS.md — CES Study Materials

Content-only repository (no code). All material is in Traditional Chinese (香港繁體中文).

## Structure

- `book/` — source markdown files (edit these)
  - `book.md` — Unit 1.4 權利與義務, full study guide with exam paper + answer key
  - `book_1.4.md` — expanded outline of Unit 1.4 content (draft/source)
  - `book_1.2.md` — Unit 1.2 人際關係與社會共融, full study guide
  - `book_1.3.md` — Unit 1.3 理財教育, full study guide (金錢運用/網上消費/綠色消費)
  - `raw.md` — structured outline of Unit 1.4 content (draft/source)
  - `ces_unit1.2_b.jpg` — image asset
- Root — PWA entry point + config
  - `index.html` — landing page (unit card grid, PWA entry)
  - `manifest.json` — PWA manifest (teal theme, standalone display)
  - `sw.js` — service worker (cache-first for all static assets)
- `styles/main.css` — shared styles (teal + warm accent, responsive, print-friendly)
- `units/` — generated HTML per unit (separate page per unit, not monolithic)
  - `unit1-2.html` — Unit 1.2 hub (exam + links to sub-pages)
  - `unit1-2-peer.html` — 朋輩壓力
  - `unit1-2-inclusive.html` — 建立多元共融社會
  - `unit1-3.html` — Unit 1.3 hub (exam + links to sub-pages)
  - `unit1-3-money.html` — 金錢的運用
  - `unit1-3-online.html` — 網上消費
  - `unit1-3-green.html` — 綠色消費
  - `unit1-4.html` — Unit 1.4 hub (exam + links to sub-pages)
  - `unit1-4-constitution.html` — 《憲法》權利與義務
  - `unit1-4-basiclaw.html` — 《基本法》與香港居民
  - `unit1-4-ruleoflaw.html` — 法治原則
  - `unit1-4-treaties.html` — 國際協議

## Conventions

- Question types in the study guide follow this order: 單項選擇題 → 是非題 → 配對題 → 填充題 → 資料分析及短答題
- Answer keys are at the bottom under 標準答案及評分準則 with point allocations
- Content references the Hong Kong Basic Law (《基本法》) and Chinese Constitution (《憲法》) as the legal framework
- Sticky top nav on every page links all units and home; `.active` class marks current page
- Inline SVG icons (no external icon files); cache-first service worker for offline use

## Workflow

1. Edit source markdown in `book/`
2. Rebuild corresponding HTML in `units/` (markup + CSS class conventions)
3. To add a new unit: add source `.md` to `book/`, create HTML in `units/`, add a `unit-card` on `index.html`, add a nav link to all HTML files
4. **After any file change**, bump the cache version in `sw.js` (e.g. `ces-study-v7` → `ces-study-v8`) so the service worker refreshes users' cached assets on next visit

No automated tooling, tests, or build steps. Edit files directly.
