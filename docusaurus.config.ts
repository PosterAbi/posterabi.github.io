import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Kassa Kasutusjuhend',
  tagline: 'Kõik vajalikud juhised kassasüsteemi kasutamiseks',
  favicon: 'img/favicon.ico',

  url: 'https://posterabi.github.io',
  baseUrl: '/',
  organizationName: 'posterabi',
  projectName: 'posterabi.github.io',
  deploymentBranch: 'gh-pages',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'et',
    locales: ['et'],
  },

  plugins: [
    [
      require.resolve('@cmfcmf/docusaurus-search-local'),
      {
        indexDocs: true,
        indexBlog: false,
        language: 'en',
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    navbar: {
      title: 'Kassa',
      logo: {
        alt: 'Kassa',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'kassaSidebar',
          position: 'left',
          label: 'Juhendid',
        },
      ],
    },

    footer: {
      style: 'light',
      links: [
        {
          title: 'Juhendid',
          items: [
            { label: 'Avaleht',   to: '/' },
            { label: 'Tooted',    to: '/category/tooted' },
            { label: 'Finantsid', to: '/category/finantsid' },
            { label: 'Kasutajad', to: '/category/kasutajad' },
          ],
        },
        {
          title: 'Tugi',
          items: [
            { label: 'Kontaktid',              to: '/kontaktid' },
            { label: 'Ametlik dokumentatsioon', href: 'https://knowledge-base.joinposter.com/en/' },
            { label: 'Live Chat',               href: 'https://joinposter.com' },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} Kassa Kasutusjuhend`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
