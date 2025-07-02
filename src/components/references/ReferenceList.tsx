import React from "react";

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
    <section className={`reference-list ${className}`.trim()}>
      {title && <h2>{title}</h2>}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </section>
  );
};

export default ReferenceList;
