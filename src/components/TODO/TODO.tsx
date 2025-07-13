import React from "react";
import clsx from "clsx";
import styles from "./TODO.module.css";

export default function TODO({ reason }: { reason?: string }): JSX.Element {
  console.warn("TODO component is not implemented yet:", reason);
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
