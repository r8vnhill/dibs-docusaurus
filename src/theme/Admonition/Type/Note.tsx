import React from "react";
import { WithClassName } from "../../../components/traits/WithClassName";
import styles from "./Note.module.css";
import clsx from "clsx";
import { Note as NoteIcon } from "phosphor-react";
import { WithTitle } from "../../../components/traits/WithTitle";

type NoteProps = React.PropsWithChildren<WithClassName & WithTitle>;

export default function Note({
  className,
  children,
  title,
  defaultTitle = "Nota",
  ...rest
}: NoteProps): JSX.Element {
  const resolvedTitle = title || defaultTitle;

  return (
    <section
      className={clsx(styles.note, className)}
      role="alert"
      aria-labelledby="note-title"
      {...rest}
    >
      <h3 id="note-title" className={styles.note__title}>
        <span className={styles.note__icon} aria-hidden="true">
          <NoteIcon size={20} weight="fill" />
        </span>
        {resolvedTitle}
      </h3>
      {children}
    </section>
  );
}
