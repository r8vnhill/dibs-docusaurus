
/**
 * Optional `className` prop for extending CSS styling.
 *
 * This interface is useful for components that accept an optional `className` to allow
 * customization via utility classes or CSS modules.
 */
export interface WithClassName extends React.HTMLAttributes<HTMLElement> {
  /**
   * Optional custom CSS class or utility classes to apply to the component.
   */
  className?: string;
}
