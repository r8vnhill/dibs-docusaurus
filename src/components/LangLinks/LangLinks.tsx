import React from "react";
import styles from "./LangLinks.module.css";
import Box from "../cajitas/Box";
import { WithClassName } from "../traits/WithClassName";
import clsx from "clsx";

/**
 * Props for the language links component.
 */
type LangLinksProps = {
  /**
   * Optional title for the language links section.
   */
  title?: string;
  /**
   * Array of React nodes representing the language links.
   * Each node can be a link or any other React element.
   */
  links: React.ReactNode[];
} & WithClassName;

/**
 * Renders a list of links to related content in other programming languages.
 *
 * This component is useful in multilingual or polyglot programming documentation, where readers may
 * want to access equivalent lessons, examples, or references in different languages like Python,
 * JavaScript, or Rust.
 *
 * Each link should be a fully composed React node (e.g., `<PythonLink href="..." />`) that includes
 * its own icon and label.
 *
 * ## Behavior:
 * - If the `links` array is empty, the component renders nothing.
 * - Optionally renders a section title (defaults to `"En otros lenguajes"`).
 * - Accepts custom `className` to extend styles from outside.
 *
 * @param title - Optional title for the section.
 * @param links - An array of pre-rendered React nodes, each representing a language link.
 * @param className - Optional additional class names for the container.
 *
 * @returns A styled box containing a header and a list of language links.
 */
export default function LangLinks({
  title = "En otros lenguajes",
  links,
  className,
}: LangLinksProps): JSX.Element {
  if (links.length === 0) return <></>;

  return (
    <Box as="div" className={clsx(styles.langLinks, className)}>
      {title && <h4 className={clsx(styles.langLinks__title)}>{title}</h4>}
      <ul className={clsx(styles.langLinks__list)}>
        {links.map((link, idx) => (
          <li key={idx} className={clsx(styles.langLinks__item)}>
            {link}
          </li>
        ))}
      </ul>
    </Box>
  );
}
