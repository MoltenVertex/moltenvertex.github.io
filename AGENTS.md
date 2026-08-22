# Project Overview: Molten Vertex (`moltenvertex.github.io`)

This repository is the personal website and suite of web-based simulation and editing tools hosted on GitHub Pages for **Molten Vertex**.

## Repository Structure & Tools

The repository contains static web applications built with vanilla HTML, CSS, and JavaScript:

- **Root (`index.html`, `js/`, `css/`)**: Main landing page / portfolio portal linking to all apps and utilities.
- **`ppkasimulator/`**: PPKA (Perjalanan Kereta Api / Train Dispatcher) interactive railway simulation tool.
- **`dynamiclightxmleditor/`**: Web tool for editing and generating dynamic light XML configurations.
- **`soundxmleditor/`**: Web tool for editing and configuring train/simulation sound XML files.
- **`trainxmleditor/`**: XML configuration editor for train specifications and properties.
- **`routecsveditor/`**: CSV editor and viewer tailored for railway route data.

---

## Tech Stack & Architecture Guidelines

1. **Vanilla Web Technologies**:
   - Standard HTML5, CSS3, and modern JavaScript (ES6+).
   - No unnecessary frameworks or heavy external bundlers unless explicitly requested.
   - Hosted statically on GitHub Pages.

2. **Styling & UI Aesthetics**:
   - Modern, responsive, clean design with dark/light themes where applicable.
   - Consistent typography and smooth interactive feedback (hover effects, transitions).

3. **Data Handling & Editors**:
   - File parsers (XML/CSV) should run client-side using native browser APIs (`DOMParser`, `XMLSerializer`, `FileReader`, Blob downloads).
   - Ensure resilient parsing with clear user feedback on invalid syntax or formatting errors.

---

## Agent Instructions & Coding Standards

- **Preserve Existing Functionality**: Maintain standalone portability of each sub-tool directory.
- **Code Style**: Clear, modular JavaScript functions, meaningful variable naming, and standard formatting.
- **No Heavy Build Steps**: Keep files directly runnable in the browser without mandatory transpilation steps.
- **Verification**: Always double-check client-side logic, file import paths, and browser compatibility.
