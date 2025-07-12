import React from "react";
import { WithClassName } from "../../../components/traits/WithClassName";
import styles from "./Exercise.module.css";
import clsx from "clsx";
import { PencilLine } from "phosphor-react";
import { WithTitle } from "../../../components/traits/WithTitle";

type ExerciseProps = React.PropsWithChildren<WithClassName & WithTitle>;

export default function Exercise({
  className,
  children,
  title,
  defaultTitle = "Ejercicio",
  ...rest
}: ExerciseProps): JSX.Element {
  const resolvedTitle = title || defaultTitle;

  return (
    <section
      className={clsx(styles.exercise, className)}
      role="note"
      aria-labelledby="exercise-title"
      {...rest}
    >
      <h3 id="exercise-title" className={styles.exercise__title}>
        <span className={styles.exercise__icon} aria-hidden="true">
          <PencilLine size={20} weight="fill" />
        </span>
        {resolvedTitle}
      </h3>
      {children}
    </section>
  );
}
