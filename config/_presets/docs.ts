import path from "path";

import { PluginOptions } from "@docusaurus/plugin-content-docs";
import remarkPlugins from "./remark";
import rehypePlugins from "./rehype";

const sidebarPath = path.resolve(__dirname, "../sidebars.ts");

/**
 * Partial Docusaurus docs plugin configuration.
 *
 * This preset defines a reusable and isolated configuration fragment for the
 * `@docusaurus/plugin-content-docs` plugin.
 * It includes:
 *
 * - A custom `sidebarPath` to load sidebar structure.
 * - Math-related `remarkPlugins` (e.g., for KaTeX/LaTeX support).
 * - Custom `rehypePlugins` (e.g., KaTeX rendering, additional HTML transformations).
 *
 * This configuration can be imported and merged into a larger Docusaurus `presets` array
 * or plugin setup.
 *
 * @see https://docusaurus.io/docs/api/plugins/@docusaurus/plugin-content-docs
 * @see https://docusaurus.io/docs/sidebar
 */
const docsPreset: Partial<PluginOptions> = {
  sidebarPath,
  remarkPlugins,
  rehypePlugins,
};

export default docsPreset;
