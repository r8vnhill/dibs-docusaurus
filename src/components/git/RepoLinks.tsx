import React from "react";
import styles from "./RepoLinks.module.css";

type RepoLinksProps = {
  children?: React.ReactNode[];
};

const RepoLinks = ({ children }: RepoLinksProps) => (
  <div className={styles.container}>
    {children?.map((child, index) => (
      <div key={index} className={styles.link}>
        {child}
      </div>
    ))}
  </div>
);

export default RepoLinks;
