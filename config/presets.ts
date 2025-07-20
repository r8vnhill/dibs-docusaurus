import type * as Preset from "@docusaurus/preset-classic";
import docsPreset from "./_presets/docs";
import themePreset from "./_presets/theme";

const presets = [
  "classic",
  {
    docs: docsPreset,
    theme: themePreset,
  } satisfies Preset.Options,
] as const;
