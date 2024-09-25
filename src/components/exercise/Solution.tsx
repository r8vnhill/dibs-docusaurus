import React from 'react';
import styles from './Solution.module.css';

/**
 * The `SolutionProps` interface defines the expected properties for the `Solution` component. It is used to pass
 * children elements to the component, which are rendered within the expandable section.
 */
interface SolutionProps {
    children: React.ReactNode;
}

/**
 * The `Solution` component is used to display a collapsible section that reveals the solution to a problem.
 * It uses the HTML `<details>` element to provide a summary and expandable content.
 * This component is styled using an external CSS module for light and dark themes.
 *
 * ## Props:
 * - `children`: The content that will be displayed inside the expandable section when the user clicks on the summary.
 *
 * ## Usage Example:
 *
 * ```tsx
 * <Solution>
 *   <p>This is the solution to the problem.</p>
 * </Solution>
 * ```
 *
 * When rendered, this component shows a clickable "Solución" heading. When clicked, it reveals the content passed as
 * `children`.
 *
 * @param {SolutionProps} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The solution content that will be displayed when expanded.
 *
 * @returns {React.ReactNode} The `Solution` component.
 */
const Solution: React.FC<SolutionProps> = ({ children }: SolutionProps): React.ReactNode => {
    return (
        <details className={styles.solution}>
            <summary className={styles.summary}>Solución</summary>
            <div className={styles.content}>{children}</div>
        </details>
    );
};

export default Solution;
