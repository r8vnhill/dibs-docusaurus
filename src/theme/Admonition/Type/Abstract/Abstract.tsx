import React from "react";
import { WithClassName } from "../../../../components/traits/WithClassName";
import styles from "./Abstract.module.css";
import clsx from "clsx";
import { Brain } from "phosphor-react";

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
      aria-labelledby="abstract-title"
      title="Abstract"
      {...rest}
    >
      <h3 id="abstract-title" className={styles.abstract__title}>
        <span className={styles.abstract__icon} aria-hidden="true">
          <Brain size={24} weight="fill" />
        </span>
        Abstract
      </h3>
      {children}
    </section>
  );
}
