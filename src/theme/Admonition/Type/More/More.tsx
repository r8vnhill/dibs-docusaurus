import React, { useState } from "react";
import styles from "./More.module.css";
import clsx from "clsx";
import { CaretDown, CaretUp, DotsThree } from "phosphor-react";
import { WithClassName } from "../../../../components/traits/WithClassName";
import { WithTitle } from "../../../../components/traits/WithTitle";

type MoreProps = React.PropsWithChildren<WithClassName & WithTitle>;

export default function More({
  className,
  children,
  title,
  defaultTitle = "Más información",
  ...rest
}: MoreProps): JSX.Element {
  const resolvedTitle = title || defaultTitle;
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section
      className={clsx(styles.more, className)}
      role="note"
      aria-labelledby="more-title"
      {...rest}
    >
      <button
        className={styles.more__title}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        id="more-title"
      >
        <span className={styles.more__icon} aria-hidden="true">
          <DotsThree size={20} weight="fill" />
        </span>
        {resolvedTitle}
        <span className={styles.more__toggle}>
          {isOpen ? <CaretUp size={16} /> : <CaretDown size={16} />}
        </span>
      </button>
      {isOpen && <div className={styles.more__content}>{children}</div>}
    </section>
  );
}
