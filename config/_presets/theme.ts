const customCss = require.resolve("../../src/css/custom.css");

/**
 * Theme preset configuration for Docusaurus.
 *
 * This preset exports a partial theme configuration object that specifies a custom global CSS file
 * to be injected into the site.
 *
 * It is intended to be used inside the `themes` or `presets` section of `docusaurus.config.ts` to
 * apply project-specific styling.
 *
 * @property customCss - Absolute path to the custom CSS file for global styles.
 */
const themePreset = {
  customCss,
};

export default themePreset;
