import type * as Preset from "@docusaurus/preset-classic";
import docsPreset from "./docs";
import themePreset from "./theme";
import { Config } from "@docusaurus/types";

/**
 * Classic Docusaurus preset configuration.
 *
 * This constant defines the `classic` preset along with custom configuration for the `docs` and
 * `theme` plugins.
 *
 * It is extracted into its own module to encourage modularity and maintainability, especially as
 * the site grows in complexity or requires additional customization.
 *
 * The use of `satisfies Preset.Options` ensures type safety without losing inference, and
 * `as const` guarantees immutability of the configuration structure.
 *
 * @see https://docusaurus.io/docs/presets
 */
const classicPresets: NonNullable<Config["presets"]> = [
  [
    "classic",
    {
      docs: docsPreset,
      theme: themePreset,
    } satisfies Preset.Options,
  ],
] as const;

export default classicPresets;
