import React, {
  PropsWithChildren,
  useMemo,
  forwardRef,
  ForwardedRef,
} from "react";
import styles from "./TableFigure.module.css";
import { useTableCounter } from "./TableCounter";
import clsx from "clsx";
import { WithClassName } from "../traits/WithClassName";

type TableFigureProps = PropsWithChildren<{
  /**
   * Optional caption shown below the table.
   */
  caption?: React.ReactNode;

  /**
   * Optional maximum width of the table container (e.g., `"800px"`).
   */
  maxWidth?: string;
} & WithClassName>;

/**
 * A styled and semantic table wrapper component with caption and automatic numbering.
 *
 * Use this component to display tables that are visually consistent with figures and responsive.
 *
 * @param caption - Optional caption displayed below the table with automatic numbering.
 * @param maxWidth - Optional maximum width of the table container.
 * @param className - Optional class name for custom styling.
 * @param children - Table element content.
 * @returns A styled `<figure>` block containing a table and caption.
 */
const TableFigure = (
  { caption, maxWidth, className, children }: TableFigureProps,
  ref: ForwardedRef<HTMLElement>
) => {
  const getNextFigureNumber = useTableCounter();
  const number = useMemo(() => getNextFigureNumber.getNextNumber(), []);

  const style = { maxWidth: maxWidth ?? "700px" };

  return (
    <figure ref={ref} className={clsx(styles.tableFigure, className)}>
      <div className={styles.container} style={style}>
        <div className={styles.table}>{children}</div>
        {caption && (
          <figcaption className={styles.caption}>
            <strong>Tabla {number}.</strong> <span>{caption}</span>
          </figcaption>
        )}
      </div>
    </figure>
  );
};

export default forwardRef(TableFigure);
