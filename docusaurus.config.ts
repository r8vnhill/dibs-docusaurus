import type { Config } from "@docusaurus/types";
import createSiteConfig from "./config/site";
import createFutureConfig from "./config/future";
import createBrokenLinkHandlingConfig from "./config/broken-link-handling";
import createMarkdownConfig from "./config/markdown";
import createI18nConfig from "./config/i18n";
import classicPresets from "./config/presets";
import createThemeConfig from "./config/theme";

const config: Config = {
  ...createSiteConfig(),
  ...createFutureConfig(),

  ...createBrokenLinkHandlingConfig(),
  ...createMarkdownConfig(),
  ...createI18nConfig(),
  presets: classicPresets,

  ...createThemeConfig(),
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
