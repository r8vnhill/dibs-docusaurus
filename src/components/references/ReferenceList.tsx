import React from "react";
import ExcludeFromReadingTime from "../reading-time/ExcludeFromReadingTime";
import styles from "./ReferenceList.module.css";

export interface ReferenceListProps {
  items: React.ReactNode[];
  className?: string;
  title?: string;
}

/**
 * Renders a list of arbitrary reference components (e.g. `Book`, `WebPage`).
 *
 * Each item should be a valid React component instance.
 *
 * @param items - Array of JSX elements representing references.
 * @param className - Optional additional class names.
 * @param title - Optional section title (defaults to "Referencias").
 */
const ReferenceList: React.FC<ReferenceListProps> = ({
  items,
  className = "",
  title = "Referencias",
}) => {
  return (
    <ExcludeFromReadingTime>
      <section className={`${styles.referenceList} ${className}`.trim()}>
        {title && <h3 className={styles.title}>{title}</h3>}
        <ul className={styles.list}>
          {items.map((item, index) => (
            <li key={index} className={styles.listItem}>{item}</li>
          ))}
        </ul>
      </section>
    </ExcludeFromReadingTime>
  );
};

export default ReferenceList;
