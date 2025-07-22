import { WithClassName } from "~components/traits/WithClassName";
import { WithIcon } from "~components/traits/WithIcon";

/**
 * Props for the ReadingTime component.
 */
export interface ReadingTimeProps extends WithClassName, WithIcon {
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
}

/**
 * Configuration options for calculating reading time.
 *
 * Allows customization of the average reading speed in words per minute.
 */
export interface ReadingTimeOptions {
  /**
   * Average number of words read per minute.
   */
  wordsPerMinute?: number;
}
