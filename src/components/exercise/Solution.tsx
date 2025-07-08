import React from "react";
import styles from "./Solution.module.css";

/**
 * Props for the `<Solution />` component.
 *
 * This component renders a collapsible section intended to show one or more solutions to a problem.
 * It allows optional customization of the summary label and whether the section is expanded by
 * default.
 */
interface SolutionProps {
  /**
   * The solution content to be displayed inside the section.
   */
  children: React.ReactNode;
  /**
   * Optional custom label for the `<summary>` element.
   */
  summary?: string;
  /**
   * Whether the `<details>` element is expanded initially.
   */
  defaultOpen?: boolean;
}

/**
 * A collapsible section for displaying a solution to a problem.
 *
 * This component renders a styled `<details>` element with a customizable summary and content. It's
 * typically used in educational or documentation contexts to optionally reveal the solution to an
 * exercise.
 *
 * @param children - The content of the solution to be revealed.
 * @param summary - Optional text for the summary. Defaults to `"Solución"`.
 * @param defaultOpen - Whether the details element should be open by default. Defaults to `false`.
 * @returns A styled React element representing the collapsible solution section.
 */
export default function Solution({
  children,
  summary = "Solución",
  defaultOpen = false,
}: SolutionProps): React.ReactElement {
  return (
    <details className={styles.solution} open={defaultOpen}>
      <summary className={styles.summary}>{summary}</summary>
      <div className={styles.content}>{children}</div>
    </details>
  );
}
