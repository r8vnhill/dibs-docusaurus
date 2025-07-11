import React, { useState, useEffect, useId } from "react";
import styles from "./Tooltip.module.css";
import clsx from "clsx";
import { WithClassName } from "../traits/WithClassName";

type TooltipProps = React.PropsWithChildren<
  {
    text: React.ReactNode;
    highlight?: boolean;
  } & WithClassName
>;

/**
 * Tooltip component for showing contextual help or descriptions on hover or focus.
 *
 * This component wraps arbitrary children and displays a tooltip when the user hovers over or
 * focuses the wrapped content. The tooltip content is specified via the `text` prop and can be
 * either plain text or rich content (React node).
 *
 * Accessibility features:
 * - Uses `aria-describedby` to associate the tooltip with the trigger element.
 * - Supports keyboard focus (`tabIndex=0`) for better keyboard navigation.
 *
 * ## Usage:
 * ```tsx
 * <Tooltip text="Información adicional">
 *   <span>¿Qué es esto?</span>
 * </Tooltip>
 * ```
 *
 * @param text Tooltip content to display (can be string or React element).
 * @param children The content that triggers the tooltip.
 * @param highlight If true, applies highlight styles to the trigger element.
 * @returns A JSX element with tooltip behavior on hover/focus.
 */
export default function Tooltip({
  text,
  children,
  highlight = true,
  className,
}: TooltipProps): JSX.Element {
  const [visible, setVisible] = useState(false);
  const [mounted, setMounted] = useState(false);
  const tooltipId = useId();

  // Marks the component as mounted after hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <span
      className={clsx(
        styles.tooltip,
        { [styles.tooltip__highlight]: highlight },
        className
      )}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onFocus={() => setVisible(true)}
      onBlur={() => setVisible(false)}
      tabIndex={0}
      aria-describedby={visible ? tooltipId : undefined}
    >
      {children}
      {mounted && visible && (
        <span id={tooltipId} role="tooltip" className={styles.tooltip__text}>
          {text}
        </span>
      )}
    </span>
  );
}
