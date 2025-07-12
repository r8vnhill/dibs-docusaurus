import React from "react";
import { WithClassName } from "../../../components/traits/WithClassName";
import styles from "./Question.module.css";
import clsx from "clsx";
import { PencilLine, Question as QuestionIcon } from "phosphor-react";
import { WithTitle } from "../../../components/traits/WithTitle";

type QuestionProps = React.PropsWithChildren<WithClassName & WithTitle>;

export default function Question({
  className,
  children,
  title,
  defaultTitle = "Piensa rápido",
  ...rest
}: QuestionProps): JSX.Element {
  const resolvedTitle = title || defaultTitle;

  return (
    <section
      className={clsx(styles.question, className)}
      role="note"
      aria-labelledby="question-title"
      {...rest}
    >
      <h3 id="question-title" className={styles.question__title}>
        <span className={styles.question__icon} aria-hidden="true">
          <QuestionIcon size={20} weight="fill" />
        </span>
        {resolvedTitle}
      </h3>
      {children}
    </section>
  );
}
