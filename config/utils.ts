/**
 * Creates a configuration object with namespaced default values, allowing overrides via a partial.
 *
 * @param key - The namespace key for the configuration (e.g., "future").
 * @param defaults - The default values for that configuration section.
 * @param overrides - Optional overrides to apply.
 * @returns A namespaced configuration object with defaults merged.
 */
export function createNamespacedConfig<
  S extends Record<string, any>,
  K extends string
>(
  key: K,
  defaults: S,
  overrides: Partial<S> = {}
): Record<K, S> {
  return {
    [key]: {
      ...defaults,
      ...overrides,
    },
  } as Record<K, S>;
}
