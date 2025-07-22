import { CSSProperties, PropsWithChildren, ReactNode } from "react";
import { WithClassName } from "../traits/WithClassName";

/**
 * Props for the `TableFloat` component.
 *
 * Extends:
 * - `PropsWithChildren` to allow nested React elements inside the component.
 * - `WithClassName` to support custom class names for styling.
 *
 * Used to define layout and content behavior of a floating or scrollable table.
 *
 * @property caption - Optional caption element to display above the table.
 *   Can be any valid React node.
 * @property maxWidth - Optional maximum width constraint for the container (e.g. `"800px"` or
 *   `"100%"`).
 * @property children - The table content, usually including `<table>`, `<thead>`, and `<tbody>`.
 * @property className - Optional CSS class name(s) for custom styling (inherited from
 *   `WithClassName`).
 */
export interface TableFloatProps extends PropsWithChildren, WithClassName {
  caption?: ReactNode;
  maxWidth?: string;
  style?: CSSProperties;
}
