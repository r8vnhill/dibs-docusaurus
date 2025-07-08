import React from "react";
import styles from "./RepoLinks.module.css";

type RepoLinksProps = {
  children?: React.ReactNode[];
};

/**
 * A layout component for displaying a list of repository-related links or elements.
 *
 * This component accepts React children and renders them in a vertical layout, applying custom
 * styling to each item. It is useful for grouping links such as GitHub, documentation, or issue
 * trackers related to a project.
 *
 * ## Props
 *
 * @property children
 *  An optional array of `ReactNode` elements to be rendered as links or other content.
 *
 * ## Example
 *
 * ```tsx
 * <RepoLinks>
 *   <a href="https://github.com/r8vnhill/keen">GitHub</a>
 *   <a href="https://keen.dev/docs">Docs</a>
 * </RepoLinks>
 * ```
 *
 * Each child is wrapped in a `<div>` with styling from `RepoLinks.module.css`.
 */
const RepoLinks = ({ children }: RepoLinksProps) => (
  <div className={styles.container}>
    <span className={styles.title}>Encuentra el código de la lección:</span>
    {children?.map((child, index) => (
      <div key={index} className={styles.link}>
        {child}
      </div>
    ))}
  </div>
);

export default RepoLinks;
