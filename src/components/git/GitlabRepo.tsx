import React from "react";
import styles from "./GitLabRepo.module.css";
import LogoIcon from "@site/static/img/logos/GitLab-logo.svg";

const GitLabRepo = ({ repo, user }: { repo: string; user: string }) => {
  const url = `https://gitlab.com/${user}/${repo}`;
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.link}
    >
      <LogoIcon className={styles.icon} width={20} height={20} />{" "}
      <span className={styles.text}>
        {user}/{repo}
      </span>
    </a>
  );
};

export default GitLabRepo;
