import { Footer } from "@docusaurus/theme-common";
import { COPYRIGHT_HOLDER } from "config/course-meta";

/**
 * The current year.
 */
const currentYear = new Date().getFullYear();

/**
 * Footer configuration interface for Docusaurus.
 */
interface FooterConfig {
  footer: {
    style: Footer["style"];
    copyright: Footer["copyright"];
  };
}

/**
 * Creates the footer configuration for the Docusaurus site.
 *
 * This includes default values for style and dynamic copyright, and allows optional overrides for
 * customization.
 *
 * @param overrides Optional partial footer fields to override defaults.
 * @returns A fully typed Docusaurus footer config object.
 */
export default function createFooterConfig(
  overrides?: Partial<FooterConfig["footer"]>
) {
  return {
    footer: {
      style: "dark",
      copyright: `Copyright © ${currentYear} ${COPYRIGHT_HOLDER}. Hecho con Docusaurus.`,
      ...overrides,
    },
  } satisfies FooterConfig;
}
