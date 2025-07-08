import React from "react";
import styles from "./Hint.module.css";

/**
 * Props for the `Hint` component.
 *
 * Defines the interface used to render a collapsible list of hints or tips.
 */
interface HintProps {
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
}

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
  defaultOpen = false,
}: HintProps): React.ReactElement {
  const isPlural = hints.length > 1;
  const title = `${summary}${isPlural ? "s" : ""}`;

  return (
    <details className={styles.hint} open={defaultOpen}>
      <summary className={styles.summary}>{title}</summary>
      <ul className={styles.hintList}>
        {hints.map((hint, index) => (
          <li key={index} className={styles.hintItem}>
            {hint}
          </li>
        ))}
      </ul>
    </details>
  );
}
