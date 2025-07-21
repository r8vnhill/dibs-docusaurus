/**
 * Trait for components that can have a heading.
 */
export interface WithHeading {
    /**
     * The heading to render for the section. Can be a string or a React element.
     */
    heading?: React.ReactNode;
}
