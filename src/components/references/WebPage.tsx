import React from "react";
import styles from "./WebPage.module.css";

/**
 * Props for the {@link WebPage} component.
 *
 * @property title - The name or title of the linked web resource.
 * @property url - The URL the title links to. Opens in a new tab.
 * @property location - A short label or source (e.g., domain or organization) where the content is hosted.
 * @property className - Optional CSS class for custom styling of the container.
 * @property icon - Optional icon (React node) shown before the link. Defaults to 🌐.
 * @property children - Optional descriptive content rendered below the link.
 */
export interface WebPageProps {
  title: React.ReactNode;
  url: string;
  location: string;
  className?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Renders a link to a web page with an optional icon, location label, and description.
 *
 * This component is useful for referencing external articles, documentation,
 * or resources in a consistent and accessible way.
 *
 * @example
 * ```tsx
 * <WebPage
 *   title="Kotlin Documentation"
 *   url="https://kotlinlang.org"
 *   location="kotlinlang.org"
 * >
 *   A concise and pragmatic programming language for the JVM, JS, and Native.
 * </WebPage>
 * ```
 */
const WebPage: React.FC<WebPageProps> = ({
  title,
  url,
  location,
  className = "",
  icon = "🌐",
  children,
}) => {
  if (!title || !url || !location) {
    throw new Error("WebPage: 'title', 'url', and 'location' are required props.");
  }

  return (
    <div className={`${styles.webPage} ${className}`.trim()}>
      <span className={styles.icon}>{icon}</span>{' '}
      <a href={url} target="_blank" rel="noopener noreferrer" className={styles.title}>
        “{title}”
      </a> en{' '}
      <span className={styles.location}>{location}</span>:
      {children && <div className={styles.description}>{children}</div>}
    </div>
  );
};

export default WebPage;
