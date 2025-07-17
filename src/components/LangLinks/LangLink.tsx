import React from "react";
import styles from "./LangLinks.module.css";

type LangLinkProps = {
  href: string;
  src: string;
  alt: string;
  name: string;
};

/**
 * Renders a single language link with an icon and name.
 *
 * This component is typically used inside a list to represent a link to a related resource in
 * another programming language or technology.
 * It displays an image (logo/icon) and a label, and opens the link in a new tab.
 *
 * ## Behavior:
 * - Opens the provided `href` in a new tab with security-safe `rel` attributes.
 * - Displays an image (e.g. logo) with accessible `alt` text.
 * - Displays the provided name next to the image.
 *
 * @param href - The destination URL for the language link.
 * @param src - The URL of the icon/image to display.
 * @param alt - The accessible description of the image.
 * @param name - The label to show next to the icon.
 *
 * @example
 * ```tsx
 * <LangLink
 *   href="https://example.com/python"
 *   src="https://upload.wikimedia.org/…/Python-logo.svg"
 *   alt="Python"
 *   name="Python"
 * />
 * ```
 */
export default function LangLink({ href, src, alt, name }: LangLinkProps) {
  return (
    <a
      href={href}
      className={styles.langLinks__link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={src} alt={alt} className={styles.langLinks__logo} />
      <span className={styles.langLinks__name}>{name}</span>
    </a>
  );
}
