import { Navbar } from "@docusaurus/theme-common";
import createLogoConfig from "../logo";
import { contentElements } from "./elements";
import COURSE_META from "../../course-meta";
import { socialElements } from "./social";

/**
 * Navbar configuration interface for Docusaurus.
 */
export interface NavbarConfig {
  /**
   * The navbar configuration for Docusaurus.
   *
   * Contains the title, logo, and items for the navbar.
   */
  navbar: {
    title: string;
    logo: Navbar["logo"];
    items: Navbar["items"];
  };
}

/**
 * Navbar configuration factory for Docusaurus.
 *
 * Generates a typed Docusaurus navbar configuration object composed of:
 * - A short course title defined in {@link COURSE_META}
 * - A logo configuration from {@link createLogoConfig}
 * - Left-aligned content elements and external social links
 *
 * An optional `overrides` parameter can be used to customize or extend the default configuration,
 * allowing for environment-specific or theme-based changes without mutating the base definition.
 *
 * @param overrides Optional partial overrides for the default navbar configuration.
 * @returns An object containing the `navbar` field for Docusaurus site config.
 *
 * @see {@link Navbar} for Docusaurus navbar structure
 * @see {@link COURSE_META} for course metadata (title, logo, URL)
 * @see {@link createLogoConfig} for default logo configuration
 * @see {@link contentElements} and {@link socialElements} for default navbar items
 */
export default function createNavbarConfig(
  overrides?: Partial<Navbar>
): NavbarConfig {
  return {
    navbar: {
      title: COURSE_META.shortTitle,
      ...createLogoConfig(),
      items: [...contentElements, ...socialElements],
      ...overrides,
    },
  };
}
