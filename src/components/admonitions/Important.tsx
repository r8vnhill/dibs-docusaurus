import React from "react";
import styles from "./Important.module.css";
import clsx from "clsx";
import { WithClassName } from "../traits/WithClassName";
import { WithTitle } from "../traits/WithTitle";

type ImportantProps = React.PropsWithChildren<WithClassName & WithTitle>;

/**
 * A styled container for highlighting important notes.
 *
 * This component renders a `<section>` with
 * - a semantic `role="note"` for accessibility,
 * - a customizable title,
 * - support for forwarding refs to the underlying DOM element,
 * - and any additional HTML attributes passed via `...rest`.
 *
 * @param props.title
 *   The heading text or React element to display at the top of the note.
 *   Defaults to `"Importante"` if not provided.
 *
 * @param props.className
 *   Optional additional CSS class names to apply alongside the default styling.
 *
 * @param props.children
 *   The content of the note, rendered below the title.
 *
 * @param props.rest
 *   Any other valid HTML attributes for a `<section>`, such as `id`, `data-` attributes, etc.
 */
const Important = React.forwardRef<HTMLDivElement, ImportantProps>(
  ({ title = "Importante", className, children, ...rest }, ref) => {
    return (
      <section
        className={clsx(styles.important, className)}
        ref={ref}
        role="note"
        aria-labelledby="important-title"
        {...rest}
      >
        <h3 id="important-title" className={styles.title}>
          <span className={styles.icon} aria-hidden="true">📌</span>
          {title}
        </h3>
        {children}
      </section>
    );
  }
);

Important.displayName = "Important";

export default Important;
