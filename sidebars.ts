import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  kassaSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: 'Avaleht',
    },
    {
      type: 'category',
      label: '1 — Tooted',
      collapsed: false,
      items: [
        'tooted/toote-lisamine',
        'tooted/kategooriad',
        'tooted/kampaaniad',
        'tooted/laoseis',
        'tooted/mahakandmised',
        'tooted/import-eksport',
      ],
    },
    {
      type: 'category',
      label: '2 — Finantsid',
      collapsed: false,
      items: [
        'finantsid/raha-algseisu',
        'finantsid/kassavahetus',
        'finantsid/sularaha',
        'finantsid/tulud-kulud',
        'finantsid/ettemaksud',
        'finantsid/tagastused',
      ],
    },
    {
      type: 'category',
      label: '3 — Aruanded',
      collapsed: false,
      items: [
        'aruanded/aruanded',
      ],
    },
    {
      type: 'category',
      label: '4 — Kliendid',
      collapsed: false,
      items: [
        'kliendid/kliendid',
      ],
    },
    {
      type: 'category',
      label: '5 — Kasutajad',
      collapsed: false,
      items: [
        'kasutajad/sisselogimine',
        'kasutajad/tootaja',
      ],
    },
    {
      type: 'category',
      label: '6 — KKK',
      collapsed: false,
      items: [
        'kkk/kviitungiprinter',
        'kkk/admin-paneel',
        'kkk/kassa',
        'kkk/internet-ja-vork',
      ],
    },
    {
      type: 'doc',
      id: 'kontaktid',
      label: 'Kontaktid & tugi',
    },
  ],
};

export default sidebars;
