import React from "react";
import { WithClassName } from "../../../components/traits/WithClassName";
import styles from "./Warning.module.css";
import clsx from "clsx";
import { WarningOctagon } from "phosphor-react";
import { WithTitle } from "../../../components/traits/WithTitle";

type WarningProps = React.PropsWithChildren<WithClassName & WithTitle>;

export default function Warning({
  className,
  children,
  title,
  defaultTitle = "Precaución",
  ...rest
}: WarningProps) {
  const resolvedTitle = title || defaultTitle;

  return (
    <section
      className={clsx(styles.warning, className)}
      role="alert"
      aria-labelledby="warning-title"
      {...rest}
    >
      <h3 id="warning-title" className={styles.warning__title}>
        <span className={styles.warning__icon} aria-hidden="true">
          <WarningOctagon size={20} weight="fill" />
        </span>
        {resolvedTitle}
      </h3>
      {children}
    </section>
  );
}
