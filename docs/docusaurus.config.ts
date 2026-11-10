import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import path from "path";

const config: Config = {
  title: "xph-crud",
  tagline: "基于 React 与 Ant Design 的可配置 CRUD 组件库",
  favicon: "img/favicon.svg",

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
    [
      "docusaurus-plugin-typedoc",
      {
        id: "api/index",
        entryPoints: [path.resolve(__dirname, "../packages/index.ts")],
        out: "./docs/api",
        tsconfig: "../tsconfig.json",
        readme: "none",
        exclude: ["**/*.md"],
        excludeExternals: true, // 排除外部声明
        propertyMembersFormat: "table",
        interfacePropertiesFormat: "table",
        typeDeclarationFormat: "table",
        parametersFormat: "table",
        enumMembersFormat: "table",
        classPropertiesFormat: "table",
        membersWithOwnFile: ["Enum", "Variable", "Interface", "TypeAlias"],
        tableColumnSettings: {
          hideInherited: true,
          hideModifiers: true,
          hideOverrides: true,
          hideSources: true,
        },
      },
    ],
  ],
  markdown: {
    mermaid: true, // 开启图表
  },
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        // hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        language: ["en", "zh"],
        // ```
      },
    ],
    "@docusaurus/theme-live-codeblock",
    "@docusaurus/theme-mermaid",
  ],
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
    image: "img/xph-crud-social-card.png",
    navbar: {
      title: "xph-crud",
      logo: {
        alt: "xph-crud 标志",
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
          type: "docSidebar",
          sidebarId: "api",
          position: "left",
          label: "API",
        },
        {
          type: "docSidebar",
          sidebarId: "extends",
          position: "left",
          label: "扩展",
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
            {
              label: "API 参考",
              to: "/docs/api",
            },
          ],
        },
        {
          title: "组件",
          items: [
            {
              label: "配置表单",
              to: "/docs/comp/form/base",
            },
            {
              label: "数据表格",
              to: "/docs/comp/table/base",
            },
            {
              label: "弹窗交互",
              to: "/docs/comp/dialog/base",
            },
          ],
        },
        {
          title: "更多",
          items: [
            {
              label: "组件扩展",
              to: "/docs/comp/extends/base",
            },
            {
              label: "GitHub",
              href: "https://github.com/XiaoPiHong/xph-crud",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} xph-crud.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
