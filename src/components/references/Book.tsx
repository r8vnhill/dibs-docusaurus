import React from "react";
import ExcludeFromReadingTime from "../reading-time/ExcludeFromReadingTime";

type PageRange = string & { __brand: "PageRange" };

/**
 * Creates a validated `PageRange` from a string value.
 *
 * This function ensures the string is in the format `number-number`, such as `"12-45"`, and casts
 * it to a branded type.
 *
 * @param value - The raw string representing a page range.
 * @returns A branded `PageRange` string.
 * @throws Will throw an error if the format does not match `^\d+-\d+$`.
 */
export function createPageRange(value: string): PageRange {
  if (!/^\d+-\d+$/.test(value)) {
    throw new Error(`Invalid page range: ${value}`);
  }
  return value as PageRange;
}

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
 *   pages={createPageRange("1-10")}
 *   book="Gradle in Action"
 *   author="Benjamin Muschko"
 * >
 *   A concise intro to Gradle and its core principles.
 * </Book>
 * ```
 */
const Book: React.FC<BookProps> = ({
  chapter,
  pages,
  book,
  author,
  className = "",
  icon = "📕",
  children,
}) => {
  if (!chapter || !pages || !book || !author) {
    throw new Error(
      "Book: 'chapter', 'pages', 'book' and 'author' are required props."
    );
  }

  return (
    <ExcludeFromReadingTime>
      <div className={`book ${className}`}>
        {icon} "{chapter}" (pp. {createPageRange(pages).replace("-", "–")}) en{" "}
        <i>{book}</i> por <b>{author}</b>:
      </div>
      {children && <div className="book-description">{children}</div>}
    </ExcludeFromReadingTime>
  );
};

export default Book;
