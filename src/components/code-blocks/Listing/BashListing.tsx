import Listing from "./Listing";
import type { BashListingProps } from "./Listing.types";
import React from "react";
import PowerShellIcon from "@site/static/img/logos/powershell.svg";
import styles from "./Listing.module.css";

export default function BashListing({
  title,
  filename,
  fileHref,
  as: Wrapper = "section",
  children,
  className,
}: BashListingProps): JSX.Element {
  return (
    <Listing
      title={title}
      filename={filename}
      fileHref={fileHref}
      as={Wrapper}
      className={className}
      icon={
        <PowerShellIcon
          width={16}
          height={16}
          className={styles.listing__icon}
          fill="currentColor"
        />
      }
    >
      {children}
    </Listing>
  );
}
