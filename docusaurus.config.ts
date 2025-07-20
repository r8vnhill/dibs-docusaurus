import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import createSiteConfig from "./config/site";
import createFutureConfig from "./config/future";
import createBrokenLinkHandlingConfig from "./config/broken-link-handling";
import createMarkdownConfig from "./config/markdown";
import createI18nConfig from "./config/i18n";

const config: Config = {
  ...createSiteConfig(),
  baseUrl: "/",
  ...createFutureConfig(),
  
  themes: ["@docusaurus/theme-mermaid"],
  ...createBrokenLinkHandlingConfig(),
  ...createMarkdownConfig(),
  ...createI18nConfig(),

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          remarkPlugins: [remarkMath],
          rehypePlugins: [rehypeKatex],
          admonitions: {
            keywords: [
              "explanation",
              "exercise",
              "question",
              "solution",
              "more",
              "definition",
              "abstract",
            ],
            extendDefaults: true,
          },
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "DIBS",
      logo: {
        alt: "My Site Logo",
        src: "img/online-library.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Apuntes",
        },
        {
          to: "/docs/lessons",
          label: "Clases",
          position: "left",
        },
        {
          to: "/docs/syllabus",
          label: "Temario",
          position: "left",
        },
        {
          type: "docSidebar",
          sidebarId: "assignmentsSidebar",
          label: "Tareas",
          position: "left",
        },
        {
          href: "https://gitlab.com/r8vnhill/dibs",
          label: "Source",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} Ignacio Slater-Muñoz. Hecho con Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.nightOwl,
      additionalLanguages: [
        "bash",
        "clojure",
        "csharp",
        "eiffel",
        "elixir",
        "erlang",
        "fsharp",
        "groovy",
        "haskell",
        "java",
        "ocaml",
        "powershell",
        "properties",
        "ruby",
        "scala",
        "scheme",
        "toml",
        "gherkin",
      ],
    },
  } satisfies Preset.ThemeConfig,
  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM",
      crossorigin: "anonymous",
    },
  ],
  plugins: [require.resolve("docusaurus-lunr-search")],
};

// noinspection JSUnusedGlobalSymbols
export default config;
