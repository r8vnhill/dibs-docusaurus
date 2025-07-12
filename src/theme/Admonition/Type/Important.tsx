import React from "react";
import { WithClassName } from "../../../components/traits/WithClassName";
import styles from "./Important.module.css";
import clsx from "clsx";
import { Skull, Lightning } from "phosphor-react";
import { WithTitle } from "../../../components/traits/WithTitle";

type ImportantProps = React.PropsWithChildren<WithClassName & WithTitle>;

export default function Important({
  className,
  children,
  title,
  defaultTitle = "Importante",
  ...rest
}: ImportantProps): JSX.Element {
  const resolvedTitle = title || defaultTitle;

  return (
    <section
      className={clsx(styles.important, className)}
      role="alert"
      aria-labelledby="important-title"
      {...rest}
    >
      <h3 id="important-title" className={styles.important__title}>
        <span className={styles.important__icon} aria-hidden="true">
          <Lightning size={20} weight="fill" />
        </span>
        {resolvedTitle}
      </h3>
      {children}
    </section>
  );
}
