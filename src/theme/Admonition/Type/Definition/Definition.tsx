import React, { useMemo } from "react";
import styles from "./Definition.module.css";
import clsx from "clsx";
import { BookOpen } from "phosphor-react";
import { WithClassName } from "../../../../components/traits/WithClassName";
import { useDefinitionCounter } from "./DefinitionCounter";

type DefinitionProps = React.PropsWithChildren<
  {
    title?: React.ReactNode;
  } & WithClassName
>;

export default function Definition({
  className,
  children,
  title,
  ...rest
}: DefinitionProps): JSX.Element {
  const getNextDefinitionNumber = useDefinitionCounter();
  const number = useMemo(
    () => getNextDefinitionNumber?.getNextNumber?.() ?? "–",
    []
  );
  const headingId = `definition-title-${number}`;

  return (
    <section
      title={`Definición ${number}${title ? `: ${title}` : ""}`}
      className={clsx(styles.definition, className)}
      role="alert"
      aria-labelledby={headingId}
      {...rest}
    >
      <h3 id={headingId} className={styles.definition__title}>
        <span className={styles.definition__icon} aria-hidden="true">
          <BookOpen size={20} weight="fill" />
        </span>
        <span className={styles.definition__text}>
          <strong>Definición {number}</strong>
          {title && <>: {title}</>}
        </span>
      </h3>
      {children}
    </section>
  );
}
