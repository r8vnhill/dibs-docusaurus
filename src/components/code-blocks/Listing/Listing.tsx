import React from "react";
import styles from "./Listing.module.css";
import clsx from "clsx";
import { Code } from "phosphor-react";
import type { ListingProps } from "./Listing.types";

export default function Listing({
  title,
  filename,
  fileHref,
  icon = <Code size={16} weight="fill" />,
  children,
  className,
  as: Wrapper = "section",
  ...rest
}: ListingProps): JSX.Element {
  return (
    <Wrapper
      className={clsx(styles.listing, className)}
      role="region"
      {...rest}
    >
      {(title || filename) && (
        <header className={styles.listing__header}>
          <div className={styles.listing__left}>
            {icon && (
              <span className={styles.listing__icon} aria-hidden="true">
                {icon}
              </span>
            )}
            {title && <span className={styles.listing__title}>{title}</span>}
          </div>

          {filename &&
            (fileHref ? (
              <a
                href={fileHref}
                className={styles.listing__filename}
                target="_blank"
                rel="noopener noreferrer"
              >
                {filename}
              </a>
            ) : (
              <span className={styles.listing__filename}>{filename}</span>
            ))}
        </header>
      )}

      <div className={styles.listing__body}>{children}</div>
    </Wrapper>
  );
}
