import rehypeShiki, { RehypeShikiOptions } from "@shikijs/rehype";
import rehypeKatex from "rehype-katex";
import { BundledLanguage, bundledLanguages } from "shiki";

/**
 * A list of rehype plugins used by the Docusaurus documentation.
 *
 * Includes:
 * - `rehype-katex` for rendering LaTeX math expressions using KaTeX.
 *
 * These plugins are injected after the Markdown content has been transformed
 * into HTML but before the final rendering.
 *
 * @see https://github.com/remarkjs/remark-math
 * @see https://katex.org/
 */
export const rehypePlugins = [
  rehypeKatex,
];

/**
 * Returns a rehype plugin tuple that configures syntax highlighting with Shiki.
 *
 * This configuration is intended to be injected *before* the default rehype plugins.
 *
 * @param overrides Optional overrides to customize the base Shiki options.
 * @returns A tuple `[plugin, options]` suitable for use in `beforeDefaultRehypePlugins`.
 *
 * @see https://shiki.matsu.io/packages/rehype
 */
function createRehypeShikiConfig(
  overrides: Partial<RehypeShikiOptions> = {}
): [typeof rehypeShiki, RehypeShikiOptions] {
  return [
    rehypeShiki,
    {
      themes: {
        light: "catppuccin-latte",
        dark: "catppuccin-mocha",
      },
      langs: Object.keys(bundledLanguages) as BundledLanguage[],
      ...overrides,
    },
  ];
}

/**
 * Configuration object to inject Shiki-based syntax highlighting *before* Docusaurus's default
 * rehype plugins.
 *
 * @see https://lachieh.github.io/docusaurus-with-shiki-rehype/docs/intro
 */
export const beforeDefaultRehypePlugins = {
  beforeDefaultRehypePlugins: [createRehypeShikiConfig()],
};
