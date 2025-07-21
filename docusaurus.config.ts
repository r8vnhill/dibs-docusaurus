import type { Config } from "@docusaurus/types";
import createSiteConfig from "./config/site";
import createFutureConfig from "./config/future";
import createBrokenLinkHandlingConfig from "./config/broken-link-handling";
import createMarkdownConfig from "./config/markdown";
import createI18nConfig from "./config/i18n";
import classicPresets from "./config/presets";
import createThemeConfig from "./config/theme";
import { katexStylesheet } from "./config/stylesheets";

const config: Config = {
  // General site metadata
  ...createSiteConfig(),
  ...createI18nConfig(),

  // Feature flags and experimental support
  ...createFutureConfig(),

  // Content processing
  ...createMarkdownConfig(),
  ...createBrokenLinkHandlingConfig(),

  // Visuals and theme
  ...createThemeConfig(),
  stylesheets: [katexStylesheet],

  // Presets and plugins
  presets: classicPresets,
  plugins: [require.resolve("docusaurus-lunr-search")],
};

// noinspection JSUnusedGlobalSymbols
export default config;
