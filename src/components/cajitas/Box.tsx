import React, { ElementType, forwardRef } from "react";
import clsx from "clsx";
import styles from "./Box.module.css";
import { WithClassName } from "../traits/WithClassName";

/**
 * Generic props for a polymorphic `Box` component.
 *
 * Enables the `Box` to render as different HTML elements or components via the `as` prop, while
 * preserving proper typing for all valid attributes.
 *
 * @template T - The element type to render (e.g., 'div', 'section', custom component).
 *
 * Includes all standard props for the given element type, excluding `ref`.
 */
type BoxProps<T extends ElementType> = {
  /**
   * Optional component or HTML tag to render. Defaults to `'div'`.
   */
  as?: T;
} & React.ComponentPropsWithoutRef<T> &
  React.PropsWithChildren<WithClassName>;

/**
 * Extracts the `ref` type for a given component or HTML element.
 *
 * Useful for typing refs in polymorphic components that use `forwardRef`, ensuring compatibility
 * with both DOM elements and custom components.
 *
 * @template C - The element or component type (e.g., 'div', 'button', or a React component).
 *
 * @example
 * type DivRef = PolymorphicRef<'div'>; // RefObject<HTMLDivElement> | ((instance: HTMLDivElement) => void)
 */
type PolymorphicRef<C extends ElementType> =
  React.ComponentPropsWithRef<C>["ref"];

/**
 * A flexible, polymorphic container component that can render as any valid HTML element or React component.
 *
 * This component uses `forwardRef` to pass a `ref` to the rendered element or component,
 * and supports polymorphism via the `as` prop.
 *
 * It also applies shared styling via `styles.box` and supports custom class names via `className`.
 *
 * @template T - The type of the element or component to render. Defaults to `"div"`.
 *
 * @param props - Props extending the target component's props, plus:
 *  - `as`: (optional) The element or component to render as.
 *  - `children`: The content to render inside the component.
 *  - `className`: (optional) Additional class names to merge with the default box style.
 *  - `ref`: A forwarded ref to the rendered element or component.
 *
 * @example
 * ```tsx
 * <Box as="section" className="my-section">
 *   Content
 * </Box>
 *
 * <Box as={Link} to="/home">
 *   Go Home
 * </Box>
 * ```
 */
const Box = forwardRef(
  <T extends ElementType = "div">(
    { as, children, className, ...props }: BoxProps<T>,
    ref: PolymorphicRef<T>
  ) => {
    const Component = as || "div";
    return (
      <Component ref={ref} className={clsx(styles.box, className)} {...props}>
        {children}
      </Component>
    );
  }
);

Box.displayName = "Box";
export default Box;
