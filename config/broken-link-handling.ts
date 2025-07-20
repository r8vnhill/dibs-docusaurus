import { ReportingSeverity } from "@docusaurus/types";

/**
 * Defines how the site should behave when encountering broken links and broken Markdown links
 * during the build process.
 *
 * This configuration helps enforce link integrity and can be tuned
 * for strictness or leniency.
 */
export interface BrokenLinkHandlingConfig {
  /**
   * Specifies the severity level when broken HTML links are detected.
   * Values: "ignore" | "log" | "warn" | "throw"
   */
  onBrokenLinks: ReportingSeverity;

  /**
   * Specifies the severity level when broken Markdown links are detected.
   * Values: "ignore" | "log" | "warn" | "throw"
   */
  onBrokenMarkdownLinks: ReportingSeverity;
}

/**
 * Default behavior for broken link handling.
 *
 * By default, both broken HTML and Markdown links will cause the build to fail.
 */
const defaultBrokenLinkHandling = {
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
} as const satisfies BrokenLinkHandlingConfig;

/**
 * Creates a configuration object for broken link handling.
 *
 * You can override one or both default values to change how the site
 * handles broken links during the build.
 *
 * @param overrides - Optional overrides for default link handling behavior.
 * @returns A fully resolved {@link BrokenLinkHandlingConfig} object.
 */
export default function createBrokenLinkHandlingConfig(
  overrides: Partial<BrokenLinkHandlingConfig> = {}
): BrokenLinkHandlingConfig {
  return {
    ...defaultBrokenLinkHandling,
    ...overrides,
  };
}
