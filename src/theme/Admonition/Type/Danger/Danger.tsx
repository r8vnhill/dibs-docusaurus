import React from "react";
import { WithClassName } from "../../../../components/traits/WithClassName";
import styles from "./Danger.module.css";
import clsx from "clsx";
import { Skull } from "phosphor-react";
import { WithTitle } from "../../../../components/traits/WithTitle";

type DangerProps = React.PropsWithChildren<WithClassName & WithTitle>;

export default function Danger({
  className,
  children,
  title,
  defaultTitle = "Peligro",
  ...rest
}: DangerProps): JSX.Element {
  const resolvedTitle = title || defaultTitle;

  return (
    <section
      className={clsx(styles.danger, className)}
      role="alert"
      aria-labelledby="danger-title"
      {...rest}
    >
      <h3 id="danger-title" className={styles.danger__title}>
        <span className={styles.danger__icon} aria-hidden="true">
          <Skull size={20} weight="fill" />
        </span>
        {resolvedTitle}
      </h3>
      {children}
    </section>
  );
}
