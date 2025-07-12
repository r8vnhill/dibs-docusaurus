import React, { useCallback, useEffect, useState } from "react";
import { WithClassName } from "../traits/WithClassName";
import { ClockAfternoon } from "phosphor-react";
import styles from "./ReadingTime.module.css";
import clsx from "clsx";
import type { WithIcon } from "../traits/WithIcon";
import ExcludeFromReadingTime from "./ExcludeFromReadingTime";

/**
 * Calculates estimated reading time in minutes.
 *
 * @param text - The input text to analyze.
 * @param options - Optional configuration.
 * @param options.wordsPerMinute - Average reading speed (default: 250).
 * @returns Estimated reading time in minutes (minimum of 1).
 */
function calculateReadingTime(
  text: string,
  options: { wordsPerMinute?: number } = {}
): number {
  const { wordsPerMinute = 250 } = options;
  const wordCount = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
}

/**
 * Props for the ReadingTime component.
 */
type ReadingTimeProps = {
  /**
   * Multiplier for the reading time calculation.
   */
  multiplier?: number;

  /**
   * Label for the reading time display.
   */
  label?: string;

  /**
   * Aria-live attribute for accessibility.
   */
  ariaLive?: "off" | "polite" | "assertive";
} & WithClassName &
  WithIcon;

/**
 * Safely retrieves the main markdown container from the DOM.
 *
 * This function queries the document for the element with the `.theme-doc-markdown` class, which is
 * typically used in Docusaurus or similar static site generators to wrap rendered MDX content.
 *
 * @returns The markdown container as an HTMLElement, or `null` if not found or not an HTMLElement.
 */
function getMarkdownContainer(): HTMLElement | null {
  const container = document.querySelector(".theme-doc-markdown");
  return container instanceof HTMLElement ? container : null;
}

/**
 * Extracts visible and relevant text content from a markdown container.
 *
 * This function clones the provided container to avoid mutating the DOM, removes elements that
 * should be excluded from reading time calculations—specifically collapsed `<details>` elements and
 * elements with the `.exclude-from-reading-time` class—and returns the resulting text content.
 *
 * @param container - The markdown container to process.
 * @returns The cleaned text content after exclusions.
 */
function extractRelevantText(container: HTMLElement): string {
  const clone = container.cloneNode(true) as HTMLElement;

  clone
    .querySelectorAll("details:not([open]), .exclude-from-reading-time")
    .forEach((el) => el.remove());

  return clone.textContent ?? "";
}

/**
 * Computes the estimated reading time from a given text and multiplier.
 *
 * This function takes raw text content and a multiplier, computes the base reading time using
 * `calculateReadingTime`, and scales it according to the multiplier to account for user-specific
 * pacing, content complexity, or other adjustments.
 *
 * @param text - The input text to analyze.
 * @param multiplier - A factor to adjust the estimated reading time.
 * @returns The estimated reading time in minutes, rounded up to the nearest whole number.
 */
function computeReadingTimeFromText(text: string, multiplier: number): number {
  const rawMinutes = calculateReadingTime(text);
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
function useReadingTime(multiplier: number): number | null {
  const [readingTime, setReadingTime] = useState<number | null>(null);

  const computeReadingTime = useCallback(() => {
    const container = getMarkdownContainer();
    if (!container) return;

    const text = extractRelevantText(container);
    const minutes = computeReadingTimeFromText(text, multiplier);
    setReadingTime(minutes);
  }, [multiplier]);

  useEffect(() => {
    computeReadingTime();
  }, [computeReadingTime]);

  return readingTime;
}

/**
 * `ReadingTime` is a React component that displays an estimated reading time for the current page
 * content.
 *
 * It analyzes the content of a `.theme-doc-markdown` container (typically used in Docusaurus sites)
 * and displays a time estimation in minutes based on the word count.
 * Content marked with `.exclude-from-reading-time` or collapsed `<details>` elements is excluded
 * from the calculation.
 *
 * This component is designed to be visually subtle and accessible, and can be customized via props.
 *
 * @param multiplier
 *   A factor to scale the estimated reading time.
 *   Useful for adjusting based on audience or complexity.
 * @param className
 *   Additional class names to apply to the root container.
 * @param icon
 *   Optional icon to display alongside the label.
 *   Defaults to a `ClockAfternoon` from Phosphor.
 * @param label
 *   Text label shown before the reading time value.
 *   Defaults to `"Dedicación recomendada"`.
 * @param ariaLive
 *   `aria-live` attribute for accessibility, useful when content is dynamically
 *   updated.
 *
 * @returns A stylized JSX block displaying the estimated reading time, or `null` if content could
 *   not be found.
 */
export default function ReadingTime({
  multiplier = 1.5,
  className = "",
  icon = <ClockAfternoon weight="regular" size={20} aria-hidden />,
  label = "Dedicación recomendada",
  ariaLive = "polite",
}: ReadingTimeProps): JSX.Element | null {
  const readingTime = useReadingTime(multiplier);

  if (readingTime === null) return null;

  return (
    <ExcludeFromReadingTime>
      <div className={clsx(styles.readingTime, className)} aria-live={ariaLive}>
        <p className={styles.iconText}>
          <span className={styles.icon} aria-hidden>
            {icon}
          </span>
          {label}: {readingTime} {readingTime === 1 ? "minuto" : "minutos"}
        </p>
        <p className={styles.note}>
          Esto considera el contenido visible y relevante, e ignora texto
          colapsado o marcado como opcional.
        </p>
      </div>
    </ExcludeFromReadingTime>
  );
}
