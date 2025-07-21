import type * as Preset from "@docusaurus/preset-classic";
import COURSE_META from "../course-meta";
import createNavbarConfig from "./navbar";
import createFooterConfig from "./footer";

/**
 * Theme configuration interface for Docusaurus.
 */
export interface ThemeConfig {
  themes: string[];
  themeConfig: Preset.ThemeConfig;
}

/**
 * Creates the theme configuration for Docusaurus.
 *
 * Includes base theme plugins, navbar and footer settings, and allows optional overrides for
 * extensibility.
 *
 * @param overrides Optional partial theme config overrides.
 * @returns A fully-typed theme configuration object.
 */
export default function createThemeConfig(
  overrides?: Partial<Preset.ThemeConfig>
): ThemeConfig {
  return {
    themes: ["@docusaurus/theme-mermaid"],
    themeConfig: {
      image: COURSE_META.socialCard,
      ...createNavbarConfig(),
      ...createFooterConfig(),
      ...overrides,
    } satisfies Preset.ThemeConfig,
  };
}
