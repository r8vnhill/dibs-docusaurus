import React from "react";
import clsx from "clsx";
import styles from "./Paper.module.css";

type PaperProps = {
  title: React.ReactNode;
  journal: React.ReactNode;
  author: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
};

export default function Paper({
  title,
  journal,
  author,
  className = "",
  icon = "📄",
  children,
}: PaperProps): React.JSX.Element {
  return (
    <div className={clsx(styles.paper, className)}>
      <span className={styles.icon}>{icon}</span>{" "}
      <span className={styles.title}>“{title}”</span> en{" "}
      <span className={styles.journal}>{journal}</span> por{" "}
      <span className={styles.author}>{author}</span>
      {children && (
        <>
          {":"}
          <div className={styles.description}>{children}</div>
        </>
      )}
    </div>
  );
}
