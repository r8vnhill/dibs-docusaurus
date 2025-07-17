import React from "react";
import styles from "../IconList.module.css";
import { Code } from "phosphor-react";
import { ItemProps } from "../IconList";

export default function CodeItem({ children }: ItemProps) {
  return (
    <li className={styles.iconListItem}>
      <span className={styles.iconWrapper}>
        <Code size="1em" weight="fill" />
      </span>
      <span className={styles.content}>{children}</span>
    </li>
  )
}
