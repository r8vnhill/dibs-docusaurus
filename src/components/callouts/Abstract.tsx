import styles from "@site/src/css/components/callouts/Abstract.module.css";
import clsx from "clsx";
import { Brain } from "phosphor-react";
import { AbstractProps } from "./types";
import FilledIcon from "./FilledIcon";

const TITLE_ID = "abstract-title";
const TITLE_TEXT = "Abstract";

/**
 * Renders an admonition box with the "Abstract" style.
 *
 * This component displays a visually distinct section labeled "Abstract", useful for highlighting
 * summaries or overviews within content such as documentation or educational material.
 *
 * It applies a consistent design using scoped CSS modules and includes an icon (🧠) to visually
 * reinforce its semantic meaning.
 *
 * Accessibility is provided via ARIA roles and labels, and customization is supported through
 * `className` and child content.
 *
 * @param className - Optional CSS class to extend or override styles.
 * @param children - Content to display inside the abstract section.
 * @returns A styled section element representing an abstract.
 *
 * @example
 * <Abstract>
 *   This section provides an overview of the lesson's key ideas.
 * </Abstract>
 */
export default function Abstract({
  className,
  children,
  ...rest
}: AbstractProps): JSX.Element {
  return (
    <section
      className={clsx(styles.abstract, className)}
      role="region"
      aria-labelledby={TITLE_ID}
      aria-label={TITLE_TEXT}
      {...rest}
    >
      <h3 id={TITLE_ID} className={styles.abstract__title}>
        <FilledIcon Icon={Brain} size={24} className={styles.abstract__icon} />
        {TITLE_TEXT}
      </h3>
      {children}
    </section>
  );
}
