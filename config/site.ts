import meta from './course-meta';

/**
 * Define the shape of the site's global configuration.
 *
 * This interface can be used to validate and document the core metadata associated with the site,
 * such as title, URL, and assets.
 */
export interface SiteConfig {
  /** The title of the site (displayed in the browser and metadata). */
  title: string;

  /** A short description or slogan for the site. */
  tagline: string;

  /** The path to the favicon image relative to the site's base URL. */
  favicon: string;

  /** The full URL of the site, including protocol (e.g., https://). */
  url: string;

  /** The base URL for the site, relative to the domain (e.g., /docs/). */
  baseUrl: string;
}

/**
 * Creates a complete site configuration object, optionally overriding defaults.
 *
 * This factory function is useful to generate consistent configuration objects,
 * while allowing partial overrides for customization (e.g., testing, theming, or staging).
 *
 * @param overrides - An optional partial configuration object to override the defaults.
 * @returns A fully merged {@link SiteConfig} object with defaults applied.
 */
export default function createSiteConfig(
  overrides: Partial<SiteConfig> = {}
): SiteConfig {
  return {
    title: `📚 ${meta.shortTitle}`,
    tagline: meta.title,
    favicon: meta.icon,
    url: meta.url,
    baseUrl: meta.baseUrl,
    ...overrides,
  };
}
