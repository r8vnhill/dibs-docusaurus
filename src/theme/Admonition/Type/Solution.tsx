import React, { useState } from "react";
import { WithClassName } from "../../../components/traits/WithClassName";
import { WithTitle } from "../../../components/traits/WithTitle";
import styles from "./Solution.module.css";
import clsx from "clsx";
import { CaretDown, CaretUp, Lightbulb } from "phosphor-react";

type SolutionProps = React.PropsWithChildren<WithClassName & WithTitle>;

export default function Solution({
  className,
  children,
  title,
  defaultTitle = "Solución",
  ...rest
}: SolutionProps): JSX.Element {
  const resolvedTitle = title || defaultTitle;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className={clsx(styles.solution, className)}
      role="note"
      aria-labelledby="solution-title"
      {...rest}
    >
      <button
        className={styles.solution__title}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        id="solution-title"
      >
        <span className={styles.solution__icon} aria-hidden="true">
          <Lightbulb size={20} weight="fill" />
        </span>
        {resolvedTitle}
        <span className={styles.solution__toggle}>
          {isOpen ? <CaretUp size={16} /> : <CaretDown size={16} />}
        </span>
      </button>
      {isOpen && <div className={styles.solution__content}>{children}</div>}
    </section>
  );
}
