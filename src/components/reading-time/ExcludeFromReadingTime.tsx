import React from "react";

/**
 * Props for the `ExcludeFromReadingTime` component.
 *
 * Extends all standard HTML `<div>` attributes, allowing for full customization.
 *
 * @property children - The content to be excluded from reading time calculation.
 * @property className - Optional custom class names to apply to the wrapper.
 */

export interface ExcludeFromReadingTimeProps
  extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

/**
 * Wraps content that should be excluded from reading time estimation tools.
 *
 * This component renders a `<div>` with a default class of `"exclude-from-reading-time"`, allowing
 * external tools (e.g., blog engines or analytics) to ignore its content when calculating estimated
 * reading time.
 *
 * It accepts all standard HTML div attributes for styling or data attributes, and merges any custom
 * `className` with the default one.
 *
 * ## Usage:
 *
 * ### Example 1: Exclude a callout from reading time
 * ```tsx
 * <ExcludeFromReadingTime>
 *   <aside>This disclaimer is not part of the main article content.</aside>
 * </ExcludeFromReadingTime>
 * ```
 *
 * ### Example 2: Add additional styles
 * ```tsx
 * <ExcludeFromReadingTime className="my-extra-style">
 *   <div>Some content</div>
 * </ExcludeFromReadingTime>
 * ```
 *
 * @param props - Component props.
 * @param props.children - The content to exclude from reading time.
 * @param props.className - Optional additional class names.
 * @returns A `<div>` wrapper for excluded content.
 */
const ExcludeFromReadingTime: React.FC<ExcludeFromReadingTimeProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <div className={`exclude-from-reading-time ${className}`.trim()} {...props}>
      {children}
    </div>
  );
};

export default ExcludeFromReadingTime;
