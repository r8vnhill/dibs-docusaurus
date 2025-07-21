import { PropsWithChildren } from "react";
import { WithClassName } from "~components/traits/WithClassName";
import styles from "./Note.module.css";
import clsx from "clsx";
import { Note as NoteIcon } from "phosphor-react";
import { WithHeading } from "~components/traits/WithHeading";

interface NoteProps extends PropsWithChildren, WithClassName, WithHeading { }

export default function Note({
  className,
  children,
  heading,
  ...rest
}: NoteProps): JSX.Element {
  const defaultHeading = "Nota";
  const resolvedHeading = heading || defaultHeading;

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
        {resolvedHeading}
      </h3>
      {children}
    </section>
  );
}
