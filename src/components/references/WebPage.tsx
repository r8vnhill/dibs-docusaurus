import React from "react";
import clsx from "clsx";
import styles from "./WebPage.module.css";
import { WebPageItem } from "../IconList/IconList";

type WebPageProps = {
  title: React.ReactNode;
  url: string;
  location: string;
  author?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
};

/**
 * Renders a consistent and accessible preview of an external web page.
 *
 * Useful for referencing documentation, articles, or learning resources.
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
const WebPage: React.FC<WebPageProps> = React.memo(
  ({ title, url, location, author, className, icon = "🌐", children }) => {
    if (!title || !url || !location) {
      console.warn(
        "WebPage: Missing one or more required props: title, url, location."
      );
      return null;
    }

    return (
      <WebPageItem>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.title}
          >
            “{title}”
          </a>{" "}
          en <span className={styles.location}>{location}</span>
          {author && (
            <span className={styles.author}>
              {" "}
              por <span className={styles.authorName}>{author}</span>
            </span>
          )}
          {children && (
            <>
              {":"}
              <div className={styles.description}>{children}</div>
            </>
          )}
      </WebPageItem>
    );
  }
);

export default WebPage;
