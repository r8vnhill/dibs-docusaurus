import { createNamespacedConfig } from "./utils";

/**
 * Flags that control future or experimental features in the site configuration.
 *
 * This interface defines optional behaviors that can be enabled to adopt upcoming improvements or
 * breaking changes before they become defaults.
 *
 * These flags are typically used to opt-in to features planned for a future major version.
 */
export interface FutureFlags {
  /**
   * Enables compatibility with version 4+ features.
   *
   * Use this flag to adopt upcoming changes and behaviors aligned with a future major release.
   * Activating it may alter default behavior.
   */
  v4: boolean;

  /**
   * Enables experimental optimizations for faster execution.
   *
   * This flag activates performance improvements that may not yet be stable, but can offer
   * measurable speed-ups during site build or runtime.
   */
  experimental_faster: boolean;
}

/**
 * Default feature flags for future-facing configuration options.
 *
 * These values represent experimental or upcoming behaviors that can be enabled explicitly.
 * You can override them using {@link createFutureConfig}.
 */
const DEFAULT_FLAGS: FutureFlags = {
  v4: true,
  experimental_faster: true,
};

/**
 * Represents the shape of a configuration object that enables future or experimental features.
 */
export interface FutureConfig {
  /**
   * Contains flags that control future-facing features.
   */
  future: FutureFlags;
}

/**
 * Creates a configuration object with future-facing flags.
 *
 * You can optionally override any of the default flags by passing a partial configuration object.
 * This function ensures that all required fields are filled by merging them with defaults.
 *
 * @param overrides - An optional object that overrides one or more future flags.
 * @returns A fully merged {@link FutureConfig} object.
 */
export default function createFutureConfig(
  overrides: Partial<FutureConfig["future"]> = {}
): FutureConfig {
  return createNamespacedConfig("future", DEFAULT_FLAGS, overrides);
}
