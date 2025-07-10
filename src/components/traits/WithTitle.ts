
/**
 * Interface for components that accept a title with an optional fallback.
 *
 * This interface is designed to support customizable section headings or labels that can be
 * provided as either plain text (`string`) or a React element (e.g., to include icons or styled
 * text).
 */
export interface WithTitle {
  /**
   * The title to render for the section. Can be a string or a React element.
   */
  title: string | React.ReactElement;
  /**
   * Optional default title to use when no explicit title is provided.
   */
  defaultTitle?: string | React.ReactElement;
}
