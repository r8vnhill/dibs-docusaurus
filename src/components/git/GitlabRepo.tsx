import React from "react";
import styles from "./GitlabRepo.module.css";

const GitlabRepo = ({ repo, user }: { repo: string; user: string }) => {
  const url = `https://gitlab.com/${user}/${repo}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
    >
      <svg
        className={styles.icon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 36 36"
        width="20"
        height="20"
        aria-hidden="true"
        focusable="false"
      >
        <path d="M18 35l7.2-22H10.8L18 35z" fill="currentColor" />
        <path d="M18 35L10.8 13H3l15 22z" fill="currentColor" />
        <path d="M18 35l15-22h-7.8L18 35z" fill="currentColor" />
        <path
          d="M3 13l3.6-11h3.6L3 13zM33 13l-3.6-11h-3.6L33 13z"
          fill="currentColor"
        />
      </svg>{" "}
      <span className={styles.text}>
        {user}/{repo}
      </span>
    </a>
  );
};

export default GitlabRepo;
