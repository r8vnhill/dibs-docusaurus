import React from "react";
import styles from "./AuthorList.module.css";

/**
 * Represents a single author with optional web link.
 *
 * Useful for displaying contributor names in references, articles, or metadata.
 */
type Author = {
  /**
   * Full display name, used for authors with no clear first/last name distinction (e.g., "OpenAI").
   */
  fullName?: string;
  /**
   * The author's given name.
   */
  firstName?: string;
  /**
   * The author's family name, used for sorting and display.
   */
  lastName?: string;
  /**
   * Optional URL to the author's profile or personal page.
   */
  url?: string;
};

/**
 * Props for the {@link AuthorList} component.
 *
 * Defines the list of authors to display, as well as optional customization settings.
 */
type AuthorListProps = {
  /**
   * Array of [Author] entries to display.
   */
  authors: Author[];
  /**
   * Optional CSS class name for styling the container.
   */
  className?: string;
  /**
   * Optional threshold after which remaining authors are replaced with "et al."
   */
  etAlAfter?: number;
};

/**
 * Displays a sorted and optionally truncated list of authors.
 *
 * Authors are sorted alphabetically by last name. If the total number of authors exceeds the
 * `etAlAfter` threshold, only the first `etAlAfter` authors are shown followed by ", et al." to
 * indicate the presence of additional authors.
 *
 * Each author's name is displayed as a link if a `url` is provided; otherwise, it is rendered as
 * plain text.
 *
 * @param authors - Array of author objects with first name, last name, and optional URL.
 * @param className - Optional custom class to apply to the container.
 * @param etAlAfter - Maximum number of authors to show before truncating and appending "et al."
 *   (default: 3).
 */
function AuthorList({
  authors,
  className = "",
  etAlAfter = 3,
}: AuthorListProps) {
  if (authors.length === 0) {
    return <span className={className}>No authors available</span>;
  }

  const sortedAuthors = sortAuthorsByLastName(authors);
  const { visibleAuthors, showEtAl } = getVisibleAuthors(
    sortedAuthors,
    etAlAfter
  );

  return (
    <span className={`${styles.authorList} ${className}`.trim()}>
      {visibleAuthors.map(renderAuthor)}
      {showEtAl && ", et al."}
    </span>
  );
}

/**
 * Returns a new array of authors sorted alphabetically by last name.
 *
 * The sort is case-insensitive and uses locale-aware comparison to ensure consistent ordering
 * across different languages.
 *
 * The original array is not mutated.
 *
 * @param authors - The array of authors to sort.
 * @returns A new array of authors sorted by last name.
 */
function sortAuthorsByLastName(authors: Author[]): Author[] {
  return [...authors].sort((a, b) => {
    const aKey = a.lastName || a.fullName || a.firstName || "";
    const bKey = b.lastName || b.fullName || b.firstName || "";
    return aKey.localeCompare(bKey, undefined, { sensitivity: "base" });
  });
}

/**
 * Returns a subset of authors to be displayed and a flag indicating whether to append "et al.".
 *
 * If the number of authors exceeds the `etAlAfter` threshold, only the first `etAlAfter` authors
 * are returned in `visibleAuthors`, and `showEtAl` is set to `true`. Otherwise, all authors are
 * shown and `showEtAl` is `false`.
 *
 * @param authors - The list of all authors.
 * @param etAlAfter - The maximum number of authors to show before truncating with "et al.".
 * @returns An object with the visible authors and whether to append "et al.".
 */
function getVisibleAuthors(
  authors: Author[],
  etAlAfter: number
): { visibleAuthors: Author[]; showEtAl: boolean } {
  const showEtAl = authors.length > etAlAfter;
  const visibleAuthors = showEtAl ? authors.slice(0, etAlAfter) : authors;
  return { visibleAuthors, showEtAl };
}

/**
 * Renders a single author as a formatted React element, optionally linking to their URL.
 *
 * If the author has a URL, their full name is rendered as a clickable link; otherwise, it is
 * rendered as plain text. A comma is appended after the author's name unless they are the last in
 * the list.
 *
 * @param author - The author object containing first name, last name, and optional URL.
 * @param index - The index of the author in the array.
 * @param array - The full array of authors, used to determine comma placement. Defaults to an empty array.
 * @returns A JSX element representing the formatted author.
 */
function renderAuthor(
  author: Author,
  index: number,
  array: Author[] = []
): JSX.Element {
  const fullName =
    author.fullName ??
    [author.firstName, author.lastName].filter(Boolean).join(" ");
  const isLast = index === array.length - 1;

  return (
    <span key={index}>
      {author.url ? (
        <a
          href={author.url}
          className={styles.authorLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          {fullName}
        </a>
      ) : (
        fullName
      )}
      {!isLast ? ", " : ""}
    </span>
  );
}

export default AuthorList;
