import { useState } from "react";
import styles from "@site/src/css/components/callouts/More.module.css";
import clsx from "clsx";
import { CaretDown, CaretUp, DotsThree } from "phosphor-react";
import { MoreProps } from "./types";
import FilledIcon from "./FilledIcon";

export default function More({
  className,
  children,
  heading,
  ...rest
}: MoreProps): JSX.Element {
  const defaultHeading = "Más información";
  const resolvedHeading = heading || defaultHeading;
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
        <FilledIcon Icon={DotsThree} className={styles.more__icon} />
        {resolvedHeading}
        <span className={styles.more__toggle}>
          {isOpen ? <CaretUp size={16} /> : <CaretDown size={16} />}
        </span>
      </button>
      {isOpen && <div className={styles.more__content}>{children}</div>}
    </section>
  );
}
