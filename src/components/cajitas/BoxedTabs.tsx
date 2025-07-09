import React from "react";
import Tabs from "@theme/Tabs";
import styles from "./BoxedTabs.module.css";
import TabItem from "@theme/TabItem";
import { WithClassName } from "../traits/WithClassName";
import clsx from "clsx";

/**
 * Props for the `BoxedTabs` component.
 */
interface BoxedTabsProps extends WithClassName {
  /**
   * The tab items to display, typically a set of `<TabItem>` components.
   */
  children: React.ComponentProps<typeof Tabs>["children"];
  /**
   * Optional group identifier for synchronizing tab selections across multiple `Tabs` components.
   */
  groupId?: string;
}

/**
 * Renders a styled wrapper around a Docusaurus `<Tabs>` component, optionally allowing tab
 * synchronization via `groupId` and custom styling via `className`.
 *
 * This component enhances the default `Tabs` by wrapping it in a decorated container, enabling
 * reuse with consistent visual appearance across documentation pages.
 *
 * @param children - The tab content to render, typically `<TabItem>` elements.
 * @param groupId - Optional identifier to sync tab selections across multiple tab groups.
 * @param className - Optional custom CSS class for styling the outer container.
 * @param rest - Any other standard HTML attributes passed to the container `<div>`.
 *
 * @returns A boxed layout containing the tabbed content.
 */
export default function BoxedTabs({
  children,
  groupId,
  className,
  ...rest
}: BoxedTabsProps & React.HTMLAttributes<HTMLDivElement>): JSX.Element {
  return (
    <div className={clsx(styles.box, className)} {...rest}>
      <Tabs groupId={groupId}>{children}</Tabs>
    </div>
  );
}

export { TabItem };

BoxedTabs.displayName = "BoxedTabs";
