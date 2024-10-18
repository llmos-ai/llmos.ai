import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'LLMOS',
  tagline: 'An open-source, cloud-native infrastructure software for AI',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://llmos-docs.1block.ai',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'llmos-ai', // Usually your GitHub org/user name.
  projectName: 'homepage', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/llmos-ai/llmos.ai/tree/main/docs/',
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   editUrl: 'https://github.com/llmos-ai/llmos.ai/tree/main/blog/',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'LLMOS',
      logo: {
        alt: 'LLMOS Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          href: 'https://1block.ai',
          label: 'Home',
          position: 'right',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          label: 'Docs',
          position: 'right'
        },
        {
          href: 'https://github.com/llmos-ai/llmos',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Docs',
              to: '/docs',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discussions',
              href: 'https://github.com/llmos-ai/llmos/discussions',
            },
            {
              label: 'Issues',
              href: 'https://github.com/llmos-ai/llmos/issues',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/llmos-ai/llmos',
            },
            {
              label: 'Terms of Use',
              to: '/terms-of-use',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 1Block.AI, Built with love 💙.`,
    },
    prism: {
      theme: prismThemes.dracula,
    },
    algolia: {
      appId: 'Q6P8C7D7PL',
      apiKey: '273e669737ab2cf565295ab7ab782c8b',
      indexName: 'llmos-1block',
      contextualSearch: true,
      searchParameters: {},
      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',
      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      // replaceSearchResultPathname: {
      //   from: '/docs/', // or as RegExp: /\/docs\//
      //   to: '/',
      // },

      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-PTL7Y3S3YY',
      },
    ],
  ],
};

export default config;
