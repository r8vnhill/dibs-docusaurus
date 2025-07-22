import { forwardRef, ForwardedRef, useMemo } from "react";
import styles from "@site/src/css/components/floats/TableFloat.module.css";
import clsx from "clsx";
import { TableFloatProps } from "./types";

type TableFloatComponent = (
  props: TableFloatProps,
  ref: ForwardedRef<HTMLElement>
) => JSX.Element;

/**
 * `TableFloat` is a reusable, styled React component that displays a floating table-like figure
 * with an optional caption and maximum width constraint.
 *
 * It is commonly used in documentation to visually group tables with contextual captions, applying
 * consistent layout and spacing. The component:
 * 
 * - Wraps its content in a semantic `<figure>` container.
 * - Applies a max width (default: `700px`) to limit layout overflow.
 * - Allows an optional caption, rendered as a `<figcaption>`.
 * - Accepts a `ref` for external DOM access.
 * - Supports additional styles via `style` and `className` props.
 * - Ignores layout-breaking styles via `useMemo` to prevent recomputation.
 *
 * @param caption - Optional caption shown below the table with a "Fig." prefix.
 * @param maxWidth - Optional max width constraint for the content (defaults to `700px`).
 * @param className - Additional class names to apply to the outer `<figure>`.
 * @param style - Inline style overrides to customize the container's appearance.
 * @param children - The content of the table, typically a `<table>` or a custom data layout.
 * @returns A styled floating figure block with optional caption and constrained width.
 */
const TableFloat: TableFloatComponent = (
  { caption, maxWidth, className, style, children }: TableFloatProps,
  ref: ForwardedRef<HTMLElement>
) => {
  const resolvedStyle = useMemo(
    () => ({ maxWidth: maxWidth ?? "700px", ...style }),
    [maxWidth, style]
  );

  return (
    <figure
      ref={ref}
      role="figure"
      className={clsx(styles.tableFloat, className)}
    >
      <div className={styles.tableFloat__container} style={resolvedStyle}>
        <div className={styles.tableFloat__table} role="table">
          {children}
        </div>{" "}
        {caption && (
          <figcaption className={styles.tableFloat__caption}>
            <strong>Tab.</strong> <span>{caption}</span>
          </figcaption>
        )}
      </div>
    </figure>
  );
};

export default forwardRef(TableFloat);
