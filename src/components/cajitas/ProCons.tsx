import React from "react";
import styles from "./ProCons.module.css";
import clsx from "clsx";
import { WithClassName } from "../traits/WithClassName";
import { WithTitle } from "../traits/WithTitle";

/**
 * Props type for content blocks that support styling, titles, and nested elements.
 *
 * This utility type combines `WithClassName` and `WithTitle` interfaces, along with the standard
 * `children` prop from React. It is ideal for reusable components that render titled sections or
 * cards and support custom styles.
 */
type BlockProps = React.PropsWithChildren<WithClassName & WithTitle>;

/**
 * A reusable section component with a customizable title and optional styling.
 *
 * `ContentBlock` is a generic layout block used to group content under a heading.  
 * It supports custom class names for styling, fallback logic for missing titles, and ref
 * forwarding.
 *
 * ## Features:
 * - Displays a heading (`h3`) using the provided `title` or `defaultTitle`.
 * - Wraps children in a `<section>` element with an `aria-label` for accessibility.
 * - Applies styles via `clsx`, merging external and internal class names.
 * - Forwards refs to the underlying `<section>` element for integration with other systems (e.g., scroll anchors).
 *
 * @param title The section’s title. If not provided, `defaultTitle` is used.
 * @param defaultTitle The fallback title to display when `title` is missing.
 * @param className Optional class name for styling.
 * @param children The content inside the section.
 * @param ref A forwarded ref to the underlying `<section>` element.
 */
const ContentBlock = React.forwardRef<HTMLElement, BlockProps>(
  ({ title, defaultTitle = "Untitled Section", children, className }, ref) => {
    const resolvedTitle = title ?? defaultTitle;

    return (
      <section
        className={clsx(styles.procons__section, className)}
        aria-label={resolvedTitle.toString()}
        ref={ref}
      >
        <h3 className={styles.title}>{resolvedTitle}</h3>
        {children}
      </section>
    );
  }
);

/**
 * A layout container for displaying pros and cons side by side.
 *
 * `ProCons` acts as a flexible wrapper for comparison-style sections, typically used with the
 * `Pros` and `Cons` components. It arranges its children using flexbox and supports optional
 * styling through a custom `className`.
 *
 * ## Features:
 * - Forwards a `ref` to the root `<div>` element.
 * - Uses `clsx` to merge internal and external class names.
 * - Responsive layout designed to stack children vertically on small screens.
 *
 * @param className Optional class name for custom styling.
 * @param children The content to display within the pros and cons layout.
 * @param ref A forwarded ref to the root container element.
 */
export const ProCons = React.forwardRef<
  HTMLDivElement,
  React.PropsWithChildren<WithClassName>
>(({ children, className }, ref) => {
  return (
    <div className={clsx(styles.procons, className)} ref={ref}>
      {children}
    </div>
  );
});

/**
 * A section component for displaying the "Pros" (benefits) in a comparison layout.
 *
 * `Pros` is typically used within a `ProCons` container to highlight positive aspects of a feature,
 * decision, or design. It extends `ContentBlock`, applying consistent styling for visual
 * distinction and accessibility.
 *
 * ## Features:
 * - Displays a titled section styled as a list of benefits.
 * - Allows overriding the default title ("Beneficios").
 * - Forwards a `ref` to the underlying `<section>` element.
 * - Supports custom styling via `className`.
 *
 * @param title Optional custom section title.
 * @param defaultTitle Fallback title if `title` is not provided (defaults to "Beneficios").
 * @param className Optional additional class name for styling.
 * @param children Section content, typically a `<ul>` list.
 * @param ref A forwarded ref to the underlying section element.
 */
export const Pros = React.forwardRef<HTMLElement, BlockProps>(
  ({ title, defaultTitle = "Beneficios", children, className }, ref) => {
    return (
      <ContentBlock
        className={clsx(styles.procons__sectionPros, className)}
        title={title}
        defaultTitle={defaultTitle}
        ref={ref}
      >
        {children}
      </ContentBlock>
    );
  }
);

/**
 * A section component for displaying the "Cons" (limitations) in a comparison layout.
 *
 * `Cons` is typically paired with the `Pros` component inside a `ProCons` container to outline
 * trade-offs, drawbacks, or limitations of a given feature or decision.
 * It uses `ContentBlock` to encapsulate consistent styling and behavior.
 *
 * ## Features:
 * - Highlights a list of limitations or downsides with a distinct visual style.
 * - Allows customizing or overriding the default title ("Limitaciones").
 * - Supports `ref` forwarding for accessibility or programmatic focus.
 * - Accepts a custom `className` for extended styling.
 *
 * @param title Optional custom section title.
 * @param defaultTitle Fallback title if `title` is not provided (defaults to "Limitaciones").
 * @param className Optional additional class name for styling.
 * @param children Section content, typically a list of items.
 * @param ref A forwarded ref to the underlying section element.
 */
export const Cons = React.forwardRef<HTMLElement, BlockProps>(
  ({ title, defaultTitle = "Limitaciones", children, className }, ref) => {
    return (
      <ContentBlock
        className={clsx(styles.procons__sectionCons, className)}
        title={title}
        defaultTitle={defaultTitle}
        ref={ref}
      >
        {children}
      </ContentBlock>
    );
  }
);

ProCons.displayName = "ProCons";
Pros.displayName = "Pros";
Cons.displayName = "Cons";
