import { useCallback, useEffect, useState } from "react";
import { ReadingTimeOptions } from "./types";

/**
 * Calculates an estimated reading time (in minutes) from a given text input.
 *
 * @param text - The input string to analyze.
 * @param options - Optional configuration.
 * @param options.wordsPerMinute - Words read per minute (default: 250).
 * @returns Estimated reading time in whole minutes (minimum value: 1).
 */
export function calculateReadingTime(
  text: string,
  { wordsPerMinute = 250 }: ReadingTimeOptions = {}
): number {
  const words = text.trim().split(/\s+/).filter(Boolean);
  const minutes = Math.ceil(words.length / wordsPerMinute);
  return Math.max(1, minutes);
}

/**
 * Safely retrieves the main markdown container from the DOM.
 *
 * By default, it queries for the `.theme-doc-markdown` class, which is typically used in Docusaurus
 * to wrap rendered MDX content.
 * This selector can be overridden for reusability across other layouts.
 *
 * @param selector - Optional CSS selector to locate the container (default: `.theme-doc-markdown`).
 * @returns The container element as an HTMLElement, or `null` if not found or not an HTMLElement.
 */
export function getMarkdownContainer(
  selector = ".theme-doc-markdown"
): HTMLElement | null {
  const container = document.querySelector(selector);
  return container instanceof HTMLElement ? container : null;
}

/**
 * Extracts visible and relevant text content from a markdown container.
 *
 * This function clones the container to avoid mutating the DOM, then removes nodes that should be
 * excluded from reading time calculations — such as collapsed `<details>` elements or any element
 * matching a customizable exclusion selector.
 *
 * @param container - The markdown container to process.
 * @param excludeSelector - Optional selector for elements to exclude from the analysis.
 *                          Defaults to `"details:not([open]), .exclude-from-reading-time"`.
 * @returns The cleaned text content after exclusions.
 */
export function extractRelevantText(
  container: HTMLElement,
  excludeSelector = "details:not([open]), .exclude-from-reading-time"
): string {
  const clone = container.cloneNode(true) as HTMLElement;

  clone.querySelectorAll(excludeSelector).forEach((el) => el.remove());

  return clone.textContent?.trim() ?? "";
}

/**
 * Computes the estimated reading time from a given text and multiplier.
 *
 * This function takes raw text content and a multiplier, computes the base reading time using
 * `calculateReadingTime`, and scales it according to the multiplier to account for user-specific
 * pacing, content complexity, or other adjustments.
 *
 * @param text - The input text to analyze.
 * @param multiplier - A factor to adjust the estimated reading time (default: 1).
 * @param wordsPerMinute - Optional custom reading speed to override the default (250).
 * @returns The estimated reading time in minutes, rounded up to the nearest whole number.
 */
export function computeReadingTimeFromText(
  text: string,
  multiplier = 1,
  wordsPerMinute?: number
): number {
  const rawMinutes = calculateReadingTime(text, { wordsPerMinute });
  return Math.ceil(rawMinutes * multiplier);
}

/**
 * React hook to compute the estimated reading time of a markdown container.
 *
 * This hook:
 * - Locates the `.theme-doc-markdown` element in the DOM.
 * - Extracts visible and relevant text, ignoring collapsed content and elements marked with
 *   `.exclude-from-reading-time`.
 * - Computes the reading time using a configurable multiplier (default logic assumes ~250 words per
 *   minute base).
 * - Returns the result as a number (in minutes), or `null` if the container is not found.
 *
 * The reading time is recalculated whenever the `multiplier` changes.
 *
 * @param multiplier - A factor to scale the base reading time (e.g. 1.5 = 50% more time).
 * @returns The estimated reading time in minutes, or `null` if not yet available.
 */
export function useReadingTime(multiplier = 1): number | null {
  const [readingTime, setReadingTime] = useState<number | null>(null);

  const compute = useCallback(() => {
    const container = getMarkdownContainer();
    if (!container) return;

    const text = extractRelevantText(container);
    const minutes = computeReadingTimeFromText(text, multiplier);
    setReadingTime(minutes);
  }, [multiplier]);

  useEffect(() => {
    compute();
  }, [compute]);

  return readingTime;
}
