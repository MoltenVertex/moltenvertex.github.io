# Project Overview: Molten Vertex (`moltenvertex.github.io`)

This repository is the personal website and suite of web-based simulation and editing tools hosted on GitHub Pages for **Molten Vertex**.

## Repository Structure & Tools

The repository contains static web applications built with vanilla HTML, CSS, and JavaScript:

- **Root (`index.html`, `js/`, `css/`)**: Main landing page / portfolio portal linking to all apps and utilities.
- **`ppkasimulator/`**: PPKA (Perjalanan Kereta Api / Train Dispatcher) interactive railway simulation tool. Fully self-contained (inline styles).
- **`dynamiclightxmleditor/`**: Web tool for editing and generating dynamic light XML configurations.
- **`soundxmleditor/`**: Web tool for editing and configuring train/simulation sound XML files.
- **`trainxmleditor/`**: XML configuration editor for train specifications and properties.
- **`routecsveditor/`**: CSV editor and viewer tailored for railway route data. Fully self-contained (own styles, no shared CSS).

### Shared Design System (`css/`, `js/theme.js`)

CSS is layered like a mini component library (DaisyUI-style semantic classes, no dependencies):

| File | Purpose |
|---|---|
| `css/tokens.css` | Design tokens: color palette, line colors, light/dark theme variables (`[data-theme="dark"]`). |
| `css/components.css` | Reusable components: `.btn`, `.btn-primary`, `.btn-danger`, `.badge`, `.chip`, `.card`, `.modal`, `.toolbar`, `.medallion`, `.panel-header`, `.statusbar`, `.form-group`/`.input`, `.resizer`. Usage guide documented in the file header. |
| `css/editors.css` | Editor app shell: activate via `<body class="train-theme|sound-theme|light-theme|route-theme">` to get the themed top bar, name board, Blockly workspace, and output panel layout. |
| `css/style.css` | Portal-only styles (station signage landing page). |
| `js/theme.js` | Theme bootstrap — sets `<html data-theme>` from localStorage or OS preference. Must load synchronously in `<head>` (no `defer`) on every page to avoid theme flash. |
| `js/data.js` | Portal content: add/edit/remove project entries here. |
| `js/main.js` | Portal renderer + shared `ICONS` object used by sub-tools. |

**Required `<head>` load order for editor pages:**

```html
<link rel="stylesheet" href="../css/tokens.css">
<link rel="stylesheet" href="../css/components.css">
<link rel="stylesheet" href="../css/editors.css">
<script src="../js/theme.js"></script>
```

Portal (`index.html`) loads `tokens.css → components.css → style.css` instead.

---

## Tech Stack & Architecture Guidelines

1. **Vanilla Web Technologies**:
   - Standard HTML5, CSS3, and modern JavaScript (ES6+).
   - No unnecessary frameworks or heavy external bundlers unless explicitly requested.
   - Hosted statically on GitHub Pages.

2. **Styling & UI Aesthetics**:
   - Japanese railway station signage design language: square corners, bold borders, red signal accent, uppercase letter-spaced labels.
   - Build UI from the shared component classes in `components.css` instead of writing new CSS.
   - Colors must come from design tokens (`var(--red)`, `var(--border)`, etc.) — never hardcode hex values in shared files; dark/light theming depends on it.
   - Modern, responsive, clean design with dark/light themes where applicable.
   - Consistent typography and smooth interactive feedback (hover effects, transitions).

3. **Data Handling & Editors**:
   - File parsers (XML/CSV) should run client-side using native browser APIs (`DOMParser`, `XMLSerializer`, `FileReader`, Blob downloads).
   - Ensure resilient parsing with clear user feedback on invalid syntax or formatting errors.

---

## Adding New Content

- **New tool/editor app**: create a folder with an `index.html` following a sub-tool head pattern above, give `<body>` a theme class, assemble UI from component classes, then register one entry in `js/data.js`.
- **New portal card only**: append one object to `PROJECTS` in `js/data.js` (name, href, description, tech, line color, platform number, section).

---

## Agent Instructions & Coding Standards

- **Preserve Existing Functionality**: Maintain standalone portability of each sub-tool directory.
- **Use the Design System**: Extend `tokens.css`/`components.css` rather than duplicating styles per page; keep legacy class aliases working (e.g., `.line-badge` = `.badge`).
- **Code Style**: Clear, modular JavaScript functions, meaningful variable naming, and standard formatting.
- **No Heavy Build Steps**: Keep files directly runnable in the browser without mandatory transpilation steps.
- **Verification**: Always double-check client-side logic, file import paths, and browser compatibility.
