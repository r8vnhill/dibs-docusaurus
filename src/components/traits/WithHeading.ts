import { ReactNode } from "react";

/**
 * Trait for components that can have a heading.
 */
export default interface WithHeading {
  /**
   * The heading to render for the section. Can be a string or a React element.
   */
  heading?: ReactNode;

  /**
   * The level of the heading (h1, h2, etc.)
   */
  headingLevel?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

  /**
   * Optional ID for the heading element.
   */
  headingId?: string;
}
