/* eslint-disable sort-keys */
// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require(`prism-react-renderer/themes/github`);
const darkCodeTheme = require(`prism-react-renderer/themes/dracula`);

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: `IT3038C - Scripting Languages`,
  tagline: `Wesley Reed`,
  url: `https://it3038c.github.io`,
  baseUrl: `/`,
  onBrokenLinks: `throw`,
  onBrokenMarkdownLinks: `warn`,
  favicon: `img/favicon.ico`,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: `IT3038C`, // Usually your GitHub org/user name.
  projectName: `IT3038C.github.i0`, // Usually your repo name.
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
        sidebarPath: require.resolve(`./content/modules/sidebarsModules.js`),
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
            docId: `modules`,
            position: `left`,
            label: `Modules`,
          },
          {
            href: `https://github.com/IT3038C/IT3038C`,
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
                href: `https://github.com/IT3038C/IT3038C`,
              },
            ],
          },
        ],
        /* eslint-disable max-len */
        copyright: `Copyright © ${new Date().getFullYear()} University of Cincinnati.
        <p xmlns:cc="http://creativecommons.org/ns#" xmlns:dct="http://purl.org/dc/terms/"><span property="dct:title">IT3038C - Scripting Languages</span> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://linkedin.com/in/wesley-reed">Wesley Reed</a> is licensed under <a href="http://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1" target="_blank" rel="license noopener noreferrer" style="display:inline-block;">CC BY-NC-ND 4.0<img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1"><img style="height:22px!important;margin-left:3px;vertical-align:text-bottom;" src="https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1"></a></p>`,
        /* eslint-enable max-len */
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: [ `powershell` ],
      },
    },
};

module.exports = config;
