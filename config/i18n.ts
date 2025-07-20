import { createNamespacedConfig } from "./utils";

/**
 * Flags that control internationalization (i18n) settings.
 *
 * These options define the default locale and the set of supported locales used for multilingual
 * documentation, UI labels, and routing.
 */
export interface I18nFlags {
  /**
   * The default locale to use when none is explicitly selected.
   *
   * This is used for fallback rendering and initial site loading.
   */
  defaultLocale: string;

  /**
   * A list of all supported locales in the site.
   *
   * Each locale should correspond to a valid language tag (e.g., `"es"`, `"en"`).
   */
  locales: string[];
}

/**
 * Default i18n configuration flags.
 *
 * By default, the site is configured for Spanish-only support.
 */
const DEFAULT_I18N_FLAGS: I18nFlags = {
  defaultLocale: "es",
  locales: ["es"],
};

/**
 * Represents the full i18n configuration namespace, containing locale behavior and supported
 * languages.
 */
export interface I18nConfig {
  i18n: I18nFlags;
}

/**
 * Creates an internationalization configuration object by merging user-defined overrides with the
 * default i18n settings.
 *
 * This ensures that all required fields are populated while allowing customization.
 *
 * @param overrides - Optional overrides for default i18n behavior.
 * @returns A fully resolved {@link I18nConfig} object.
 */
export default function createI18nConfig(
  overrides: Partial<I18nFlags> = {}
): I18nConfig {
  return createNamespacedConfig("i18n", DEFAULT_I18N_FLAGS, overrides);
}
