import { ComponentType, PropsWithChildren } from "react";
import * as traits from "../traits";
import { IconProps } from "phosphor-react";

/**
 * Base props for components that display callout-like content (e.g., notes, abstracts, expandable
 * info).
 *
 * Extends standard `children` support and allows custom styling via a `className` prop.
 *
 * Useful as a reusable base for visual components that render styled sections with content inside.
 *
 * @property children - The inner content of the callout section.
 * @property className - Optional additional class names for styling.
 */
interface CalloutProps extends PropsWithChildren, traits.ClassName {}

/**
 * Props for components that include a heading (e.g., `<Note>`, `<More>`).
 */
interface CalloutWithHeadingProps extends CalloutProps, traits.Heading {}

/**
 * Props for the `<Abstract>` component.
 *
 * This type inherits from [CalloutProps] and represents a fixed visual block used to highlight
 * summaries or conceptual overviews.
 */
export interface AbstractProps extends CalloutProps {}

/**
 * Props for the `<Note>` component.
 *
 * This interface extends common traits to provide flexible rendering of content blocks (e.g.,
 * informative notes or callouts) with optional headings and custom styling.
 *
 * It combines:
 * - `PropsWithChildren`: to support nested content within the component.
 * - `WithClassName`: to allow custom CSS classes for layout or theming.
 * - `WithHeading`: to optionally display a heading above the note.
 *
 * Useful for reusable informational blocks, warnings, tips, or structured annotations.
 */
export interface NoteProps extends CalloutWithHeadingProps {}

/**
 * Props for the `<More>` component.
 *
 * Represents a collapsible section that displays additional information on toggle.
 * Includes a heading label and styling support via [CalloutProps].
 */
export interface MoreProps extends CalloutWithHeadingProps {}

/**
 * Props for rendering an icon component with fixed `weight="fill"` and additional customization.
 *
 * This abstraction allows rendering any icon with a common filled style and optional styling.
 *
 * @property Icon - The icon component to render (e.g., `Brain`, `DotsThree`).
 * @property props - Props to forward to the icon (e.g., `size`, `className`).
 * @property className - Optional custom class to apply alongside the icon.
 */
export interface FilledIconProps extends traits.ClassName {
  Icon: ComponentType<IconProps>;
  props?: IconProps;
  size?: number;
}
