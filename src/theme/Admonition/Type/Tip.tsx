import React from "react";
import { WithClassName } from "../../../components/traits/WithClassName";
import styles from "./Tip.module.css";
import clsx from "clsx";
import { Lightbulb } from "phosphor-react";
import { WithTitle } from "../../../components/traits/WithTitle";

type TipProps = React.PropsWithChildren<WithClassName & WithTitle>;

export default function Tip({
  className,
  children,
  title,
  defaultTitle = "Tip",
  ...rest
}: TipProps) {
  const resolvedTitle = title || defaultTitle;

  return (
    <section
      className={clsx(styles.tip, className)}
      role="tip"
      aria-labelledby="tip-title"
      {...rest}
    >
      <h3 id="tip-title" className={styles.tip__title}>
        <span className={styles.tip__icon} aria-hidden="true">
          <Lightbulb size={20} weight="fill" />
        </span>
        {resolvedTitle}
      </h3>
      {children}
    </section>
  );
}
