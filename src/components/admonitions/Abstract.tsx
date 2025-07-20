import React from "react";
import { WithClassName } from "~/components/traits/WithClassName";
import styles from "~/css/components/admonitions/Abstract.module.css";
import clsx from "clsx";
import { Brain } from "phosphor-react";

const TITLE_ID = "abstract-title";
const TITLE_TEXT = "Abstract";

type AbstractProps = React.PropsWithChildren<WithClassName>;

export default function Abstract({
  className,
  children,
  ...rest
}: AbstractProps): JSX.Element {
  return (
    <section
      className={clsx(styles.abstract, className)}
      role="region"
      aria-labelledby={TITLE_ID}
      aria-label={TITLE_TEXT}
      {...rest}
    >
      <h3 id={TITLE_ID} className={styles.abstract__title}>
        <span className={styles.abstract__icon} aria-hidden="true">
          <Brain size={24} weight="fill" />
        </span>
        {TITLE_TEXT}
      </h3>
      {children}
    </section>
  );
}
