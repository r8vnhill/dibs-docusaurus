import { createNamespacedConfig } from "./utils";

/**
 * Feature flags that control Markdown rendering behavior.
 *
 * These options allow enabling optional Markdown extensions or syntax such as diagram support via
 * [Mermaid](https://mermaid.js.org/).
 */
export interface MarkdownFlags {
  /**
   * Enables support for Mermaid diagrams in Markdown code blocks.
   *
   * When enabled, fenced code blocks with `mermaid` as language will be rendered as interactive
   * diagrams.
   */
  mermaid: boolean;
}

/**
 * Default Markdown feature flags.
 *
 * By default, Mermaid support is enabled.
 */
const DEFAULT_FLAGS: MarkdownFlags = {
  mermaid: true,
};

/**
 * Represents the full Markdown configuration namespace, including its feature flags.
 */
export interface MarkdownConfig {
  markdown: MarkdownFlags;
}

/**
 * Creates a Markdown configuration object by merging user overrides with default flags.
 * This ensures that all required fields are present while allowing customization.
 *
 * @param overrides - Optional overrides for the default Markdown flags.
 * @returns A fully resolved {@link MarkdownConfig} object.
 */
export default function createMarkdownConfig(
  overrides: Partial<MarkdownConfig["markdown"]> = {}
): MarkdownConfig {
  return createNamespacedConfig("markdown", DEFAULT_FLAGS, overrides);
}
