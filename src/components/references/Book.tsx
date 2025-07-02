import React from "react";
import ExcludeFromReadingTime from "../reading-time/ExcludeFromReadingTime";
import styles from "./Book.module.css";

type PageRange = [number, number];

/**
 * Props for the {@link Book} reference component.
 *
 * @property chapter - The title of the chapter or section being referenced.
 * @property pages - A page range in the format `"start-end"` (e.g., `"10-20"`).
 * @property book - The title of the book.
 * @property author - The name of the book's author(s).
 * @property className - Optional CSS class for custom styling.
 * @property icon - Optional icon (React node) to show before the reference. Defaults to 📕.
 * @property children - Optional description or notes rendered below the reference.
 */
export interface BookProps {
  chapter: string;
  pages: PageRange;
  book: string;
  author: string;
  className?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Renders a reference to a chapter in a book.
 *
 * This component is designed for consistent citation of book chapters, including optional
 * iconography and extra descriptive content.
 * The page range is formatted with an en-dash (–) and validated strictly.
 *
 * Wrapped in {@link ExcludeFromReadingTime} to avoid polluting reading time analytics.
 *
 * @example
 * ```tsx
 * <Book
 *   chapter="Introduction to Gradle"
 *   pages={[1, 10]}
 *   book="Gradle in Action"
 *   author="Benjamin Muschko"
 * >
 *   A concise intro to Gradle and its core principles.
 * </Book>
 * ```
 */
const Book = React.memo(({
  chapter,
  pages,
  book,
  author,
  className = "",
  icon = "📕",
  children,
}: BookProps) => {
  if (!chapter || !book || !author) {
    throw new Error(
      "Book: 'chapter', 'book' and 'author' are required props."
    );
  }

  return (
    <div className={`${styles.book} ${className}`.trim()}>
      <span className={styles.icon}>{icon}</span>{' '}
      <span className={styles.chapter}>“{chapter}”</span>{' '}
      {pages && (
        <span className={styles.pages}>
          (pp. {pages[0]}–{pages[1]})
        </span>
      )}{" en "}
      <span className={styles.bookTitle}>{book}</span> por{' '}
      <span className={styles.author}>{author}</span>:
      {children && <div className={styles.description}>{children}</div>}
    </div>
  );
});

export default Book;
