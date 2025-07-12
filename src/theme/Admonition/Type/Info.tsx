import React from "react";
import { WithClassName } from "../../../components/traits/WithClassName";
import styles from "./Info.module.css";
import clsx from "clsx";
import { Info as InfoIcon } from "phosphor-react";
import { WithTitle } from "../../../components/traits/WithTitle";

type InfoProps = React.PropsWithChildren<WithClassName & WithTitle>;

export default function Info({
  className,
  children,
  title,
  defaultTitle = "Información",
  ...rest
}: InfoProps): JSX.Element {
  const resolvedTitle = title || defaultTitle;

  return (
    <section
      className={clsx(styles.info, className)}
      role="alert"
      aria-labelledby="info-title"
      {...rest}
    >
      <h3 id="info-title" className={styles.info__title}>
        <span className={styles.info__icon} aria-hidden="true">
          <InfoIcon size={20} weight="fill" />
        </span>
        {resolvedTitle}
      </h3>
      {children}
    </section>
  );
}
