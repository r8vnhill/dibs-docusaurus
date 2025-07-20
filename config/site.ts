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

  /** The base URL where the site is deployed. */
  url: string;
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
    title: "📚 DIBS",
    tagline: "Diseño e Implementación de Bibliotecas de Software",
    favicon: "img/online-library.ico",
    url: "https://dibs.pages.dev",
    ...overrides,
  };
}
