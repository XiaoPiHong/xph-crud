import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import path from "path";

const config: Config = {
  title: "xph-crud",
  tagline: "基于react的可配置CRUD组件库",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://xiaopihong.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/xph-crud/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "xiaopihong", // Usually your GitHub org/user name.
  projectName: "xph-crud", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "zh-Hans",
    locales: ["zh-Hans"],
  },
  plugins: [
    "docusaurus-plugin-sass",
    async function examplesAlias(context, options) {
      return {
        name: "examples-alias",
        configureWebpack(config) {
          return {
            resolve: {
              alias: {
                examples: path.resolve(__dirname, "../examples"),
                "xph-crud": path.resolve(__dirname, "../packages"),
              },
            },
          };
        },
      };
    },
  ],
  markdown: {
    mermaid: true, // 开启图表
  },
  themes: ["@docusaurus/theme-live-codeblock", "@docusaurus/theme-mermaid"],
  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: ["./src/css/custom.scss"],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "xph-crud",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "guide",
          position: "left",
          label: "文档",
        },
        {
          type: "docSidebar",
          sidebarId: "comp",
          position: "left",
          label: "组件",
        },
        {
          href: "https://github.com/XiaoPiHong/xph-crud",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "文档",
          items: [
            {
              label: "快速上手",
              to: "/docs/guide/getStarted",
            },
          ],
        },
        {
          title: "组件",
          items: [
            {
              label: "组件",
              to: "/docs/comp/form",
            },
          ],
        },
        {
          title: "更多",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/XiaoPiHong/xph-crud",
            },
          ],
        },
      ],
      // copyright: `Copyright © ${new Date().getFullYear()} xph-crud, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
