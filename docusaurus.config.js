/* eslint-disable sort-keys */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require(`prism-react-renderer/themes/github`);
const darkCodeTheme = require(`prism-react-renderer/themes/dracula`);

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: `IT3038C - Scripting Languages`,
  tagline: `Wesley Reed`,
  url: `https://reedws.github.io`,
  baseUrl: `/IT3038C/`,
  onBrokenLinks: `throw`,
  onBrokenMarkdownLinks: `warn`,
  favicon: `img/favicon.ico`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: `reedws`, // Usually your GitHub org/user name.
  projectName: `IT3038C`, // Usually your repo name.
  trailingSlash: false,

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: `en`,
    locales: [ `en` ],
  },

  presets: [
    [
      `classic`,
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        blog: false,
        docs: {
          id: `syllabus`,
          path: `content/syllabus`,
          routeBasePath: `syllabus`,
          sidebarPath: require.resolve(`./content/syllabus/sidebarsSyllabus.js`),
        },
        theme: {
          customCss: require.resolve(`./src/css/custom.css`),
        },
      },
    ],
  ],

  plugins: [
    [
      `content-docs`,
      /** @type {import('@docusaurus/plugin-content-docs').Options} */
      {
        path: `content/modules`,
        routeBasePath: `modules`,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    {
      colorMode: {
        defaultMode: `dark`,
      },
      navbar: {
        title: `IT3038C`,
        logo: {
          alt: `My Site Logo`,
          src: `img/logo.svg`,
        },
        items: [
          {
            to: `/syllabus/info`,
            label: `Syllabus`,
          },
          {
            type: `doc`,
            docId: `week-1`,
            position: `left`,
            label: `Modules`,
          },
          {
            href: `https://github.com/reedws/IT3038C`,
            label: `GitHub`,
            position: `right`,
          },
        ],
      },
      footer: {
        style: `dark`,
        links: [
          {
            title: `More`,
            items: [
              {
                label: `GitHub`,
                href: `https://github.com/reedws/IT3038C`,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} University of Cincinnati, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [ `powershell` ],
      },
    },
};

module.exports = config;
