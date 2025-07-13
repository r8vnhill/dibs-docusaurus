import React from "react";
import styles from "./LangLinks.module.css";

type PythonLinkProps = {
  href: string;
};

export default function PythonLink({ href }: PythonLinkProps) {
  return (
    <a
      href={href}
      className={styles.langLinks__link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png"
        alt="Python"
        className={styles.langLinks__logo}
      />
      <span className={styles.langLinks__name}>Python</span>
    </a>
  );
}
