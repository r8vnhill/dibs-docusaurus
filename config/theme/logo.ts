import { NavbarLogo } from "@docusaurus/theme-common";
import COURSE_META from "../course-meta";

/**
 * Represents the configuration for the Docusaurus navbar logo.
 */
export interface LogoConfig {

  /**
   * Represents the configuration for the Docusaurus navbar logo.
   */
  logo: NavbarLogo;
}

/**
 * Generates the configuration for the Docusaurus navbar logo.
 *
 * Combines default logo metadata derived from the course configuration with optional overrides to
 * allow flexible customization of logo properties.
 *
 * This function is typically used in the `themeConfig` section of `docusaurus.config.ts`.
 *
 * @param overrides - Optional fields to override the default logo properties (e.g., `srcDark`,
 *   `width`, etc.).
 * @returns An object containing the configured navbar logo.
 *
 * @example
 * const logoConfig = createLogoConfig({ srcDark: "/img/logo-dark.svg" });
 */
export default function createLogoConfig(
  overrides?: Partial<NavbarLogo>
): LogoConfig {
  return {
    logo: {
      alt: `${COURSE_META.shortTitle} Logo`,
      src: COURSE_META.logo,
      ...overrides,
    },
  };
}
