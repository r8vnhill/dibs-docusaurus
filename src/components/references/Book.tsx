import React from "react";
import styles from "./Book.module.css";

type PageRange = [number, number];

type BookProps = {
  chapter: React.ReactNode;
  pages: PageRange;
  book: React.ReactNode;
  author: React.ReactNode;
  authors?: React.ReactNode[];
  className?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

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
