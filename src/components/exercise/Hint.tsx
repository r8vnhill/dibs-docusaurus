import React, { useState } from "react";
import styles from "./Hint.module.css";
import { CaretDown, CaretUp, ChatTeardropText } from "phosphor-react";
import { WithClassName } from "../traits/WithClassName";
import clsx from "clsx";

/**
 * Props for the `Hint` component.
 *
 * Defines the interface used to render a collapsible list of hints or tips.
 */
type HintProps = {
  /**
   * An array of React nodes, each representing a hint item.
   */
  hints: React.ReactNode[];
  /**
   * Optional custom summary text shown in the `<summary>` tag.
   */
  summary?: string;
  /**
   * Whether the details element is expanded by default.
   */
  defaultOpen?: boolean;
} & WithClassName;

/**
 * Renders a collapsible list of hints inside a `<details>` element.
 *
 * This component is useful for progressively revealing tips or hints, such as in exercises or
 * documentation.
 * It pluralizes the summary label if more than one hint is provided.
 *
 * @param hints - An array of hint elements to display inside the list.
 * @param summary - Optional text for the `<summary>` element. Defaults to `"Ver hint"`.
 * @param defaultOpen - Whether the hint box should be expanded by default. Defaults to `false`.
 *
 * @returns A React element representing the hint box.
 */
export default function Hint({
  hints,
  summary = "Ver hint",
  className
}: HintProps): React.ReactElement {
  const isPlural = hints.length > 1;
  const resolvedTitle = `${summary}${isPlural ? "s" : ""}`;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className={clsx(styles.hint, className)}
      role="note"
      aria-labelledby="hint-title"
    >
      <button
        className={styles.hint__title}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        id="hint-title"
      >
        <span className={styles.hint__icon} aria-hidden="true">
          <ChatTeardropText size={20} weight="fill" />
        </span>
        {resolvedTitle}
        <span className={styles.hint__toggle}>
          {isOpen ? <CaretUp size={16} /> : <CaretDown size={16} />}
        </span>
      </button>
      {isOpen &&
        (isPlural ? (
          <ul className={styles.hintList}>
            {hints.map((hint, index) => (
              <li key={index} className={styles.hintItem}>
                {hint}
              </li>
            ))}
          </ul>
        ) : (
          <div className={styles.hintItem}>{hints[0]}</div>
        ))}
    </section>
  );
}
