import React from "react";
import clsx from "clsx";
import styles from "./TODO.module.css";

type TODOProps = {
  metadata?: Record<string, unknown>;
}

export default function TODO({ metadata }: TODOProps) {
  console.warn("TODO component is not implemented yet:", metadata);
  // Message is just for logging purposes, it is not rendered in the UI.
  const text = "TODO: Estamos (estoy) trabajando para ustedes c:";
  return (
    <figure className={clsx(styles.figure)}>
      <img
        src="/img/why/todo.jpg"
        alt={text}
        className={styles.img}
        loading="lazy"
      />
      <figcaption className={styles.caption}>{text}</figcaption>
    </figure>
  );
}
