import { WithClassName } from "../../traits/WithClassName";

export type ListingProps = React.PropsWithChildren<{
  title?: React.ReactNode;
  filename?: string;
  fileHref?: string;
  icon?: React.ReactNode;
  as?: React.ElementType;
}> &
  WithClassName;

export type PowerShellListingProps = React.PropsWithChildren<{
  title?: React.ReactNode;
  filename?: string;
  fileHref?: string;
  as?: React.ElementType;
}> &
  WithClassName;

export type BashListingProps = React.PropsWithChildren<{
  title?: React.ReactNode;
  filename?: string;
  fileHref?: string;
  as?: React.ElementType;
}> &
  WithClassName;
