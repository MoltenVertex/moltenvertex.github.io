const ICONS = {
  // Section icons
  check: '<svg viewBox="0 0 16 16" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"><circle cx="8" cy="8" r="5.5"/><path d="M5 8l2 2 4-4"/></svg>',
  clock: '<svg viewBox="0 0 16 16" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"><path d="M8 1v6l4 2"/><circle cx="8" cy="8" r="7"/></svg>',
  wrench: '<svg viewBox="0 0 16 16" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round"><path d="M2 14l4-12 4 12"/><path d="M3.5 10h5"/></svg>',

  // Facility icons
  github: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.4 7.86 10.91.58.1.79-.25.79-.56v-1.96c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.74.4-1.25.73-1.54-2.55-.29-5.23-1.28-5.23-5.68 0-1.25.45-2.28 1.18-3.08-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.16 1.18a10.94 10.94 0 016.4 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.24 2.75.12 3.04.74.8 1.18 1.83 1.18 3.08 0 4.42-2.69 5.39-5.25 5.67.41.36.78 1.06.78 2.13v3.17c0 .31.2.67.8.56A11.48 11.48 0 0023.5 12c0-6.35-5.15-11.5-11.5-11.5z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 6 10-6"/></svg>',
  map: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4z"/><path d="M8 2v16"/><path d="M16 6v16"/></svg>',

  // Misc
  train: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="3" width="16" height="14" rx="3"/><line x1="4" y1="10" x2="20" y2="10"/><line x1="8" y1="17" x2="8" y2="20"/><line x1="16" y1="17" x2="16" y2="20"/><line x1="6" y1="20" x2="18" y2="20"/></svg>',
  arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M13 6l6 6-6 6"/></svg>',
  chevron: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>',
};

function renderHeader(cfg) {
  return `
    <div class="station-header">
      <div class="top-bar">${ICONS.train}<span>${cfg.topBarLabel}</span></div>
      <div class="station-name-board">
        <div class="names">
          <h1>${cfg.name}</h1>
          <div class="romaji">${cfg.romaji}</div>
        </div>
        <div class="station-number">
          <span class="line-letter">${cfg.stationCode}</span>
          <span class="station-num">${cfg.stationNum}</span>
        </div>
      </div>
      <div class="direction-bar">
        <span class="arrow">${ICONS.arrowRight} ${cfg.directionText}</span>
      </div>
    </div>`;
}

function renderSections(sections, projects) {
  let html = '';
  let delay = 0.12;

  sections.forEach(section => {
    const items = projects.filter(p => p.section === section.id);
    if (!items.length) return;

    html += `
    <div class="section-label">
      <span class="line-indicator" style="background:${section.color}">${ICONS[section.icon] || ''}</span>
      <span class="label-text">${section.label}</span>
      <span class="label-line"></span>
    </div>
    <div class="station-list">`;

    items.forEach(p => {
      html += `
      <a class="station-card" href="${p.href}" style="animation-delay:${delay}s">
        <div class="platform">${p.platform}</div>
        <div class="line-bar ${p.line}"></div>
        <div class="station-info">
          <h2>${p.name}</h2>
          <p class="description">${p.description}</p>
          <div class="meta-row">
            <span class="line-badge ${p.line}">${p.lineName}</span>
            <span class="tech-tag">${p.tech}</span>
          </div>
        </div>
        <div class="direction">${ICONS.chevron}</div>
      </a>`;
      delay += 0.05;
    });

    html += '</div>';
  });

  return html;
}

function renderFacilities(facilities) {
  const items = facilities.map(f => `
      <div class="facility">
        <a href="${f.href}">${ICONS[f.icon] || ''}<span>${f.label}</span></a>
      </div>`).join('');

  return `<div class="facilities">${items}</div>`;
}

function renderFooter(text) {
  return `<div class="footer"><div class="line-sep"></div><span>${text}</span></div>`;
}

// ── Bootstrap ──
document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');
  app.innerHTML =
    renderHeader(STATION_CONFIG) +
    renderSections(STATION_CONFIG.sections, PROJECTS) +
    renderFacilities(STATION_CONFIG.facilities) +
    renderFooter(STATION_CONFIG.footerText);
});
