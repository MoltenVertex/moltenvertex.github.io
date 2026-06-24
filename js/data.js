/**
 * ═══════════════════════════════════════
 *  PROJECT DATA — Edit this file to add,
 *  remove, or update your projects.
 * ═══════════════════════════════════════
 *
 *  Each project needs:
 *    name        — Display name (station name)
 *    href        — Repo path: "/repo-name"
 *    description — One-liner about the project
 *    tech        — Tech stack label
 *    line        — Line color: red|blue|green|orange|purple|teal
 *    lineName    — Label shown on the badge
 *
 *  Sections are grouped by "section" key.
 *  Add new sections freely — just give each
 *  a unique section name.
 */

const STATION_CONFIG = {
  // Station header
  name: 'モルテン・バーテックス',           // Main station name
  romaji: 'MoltenVertex',      // Subtitle below
  stationCode: 'M',               // Station number prefix
  stationNum: '01',               // Station number
  directionText: 'Select a station to explore',
  topBarLabel: 'Projects Index',

  // Section definitions
  sections: [
    {
      id: 'operational',
      label: 'Operational',
      color: 'var(--green)',
      icon: 'check',
    },
    {
      id: 'in-service',
      label: 'In Service',
      color: 'var(--orange)',
      icon: 'clock',
    },
    {
      id: 'construction',
      label: 'Under Construction',
      color: 'var(--purple)',
      icon: 'wrench',
    },
  ],

  // Footer facilities
  facilities: [
    { label: 'GitHub', href: 'https://github.com/MoltenVertex', icon: 'github' },
    // { label: 'Email', href: 'mailto:296416754+MoltenVertex@users.noreply.github.com', icon: 'mail' },
    // { label: 'Schedule', href: '#', icon: 'clock' },
    // { label: 'Map', href: '#', icon: 'map' },
  ],

  footerText: '\u00A9 2026 \u00B7 All lines operational unless noted',
};

const PROJECTS = [
  // ── Operational ──
  {
    name: 'OpenBVE train.xml Editor',
    href: './trainxmleditor/openbve_train_editor.html',
    description: 'A visual Blockly-based configuration editor for OpenBVE train.xml files.',
    tech: 'HTML/Blockly',
    line: 'blue',
    lineName: 'BLUE LINE',
    platform: '1',
    section: 'operational',
  },
  {
    name: 'Project Four',
    href: '/project4',
    description: 'A weekend hack turned into something people actually use.',
    tech: 'Python',
    line: 'teal',
    lineName: 'TEAL LINE',
    platform: '4',
    section: 'operational',
  },

  // ── In Service ──
  {
    name: 'Project Two',
    href: '/project2',
    description: 'An open-source CLI tool for automating developer workflows.',
    tech: 'Rust',
    line: 'red',
    lineName: 'RED LINE',
    platform: '2',
    section: 'in-service',
  },

  // ── Under Construction ──
  {
    name: 'Project Three',
    href: '/project3',
    description: 'An experiment blending real-time data with generative visuals.',
    tech: 'Three.js',
    line: 'orange',
    lineName: 'ORANGE LINE',
    platform: '3',
    section: 'construction',
  },
  {
    name: 'Project Five',
    href: '/project5',
    description: 'Still on the drawing board. Coming to a platform near you.',
    tech: 'TBD',
    line: 'purple',
    lineName: 'PURPLE LINE',
    platform: '5',
    section: 'construction',
  },
];
