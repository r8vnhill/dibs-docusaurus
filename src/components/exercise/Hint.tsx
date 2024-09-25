import React from 'react';
import styles from './Hint.module.css';

/**
 * The `HintProps` interface defines the properties expected by the `Hint` component. It provides an array of hints that
 * will be displayed as a list inside the collapsible section.
 */
interface HintProps {
    hints: string[];
}

/**
 * The `Hint` component is a collapsible section that displays a list of hints. It uses the HTML `<details>` and
 * `<summary>` elements to allow users to expand and view the hints. The component is styled using a CSS module for
 * visual consistency.
 *
 * ## Props:
 * - `hints`: An array of hints (`string[]`) that will be displayed as a list. The component will adjust the label
 *   "Ver hints" or "Ver hint" depending on whether there is more than one hint.
 *
 * ## Usage Example:
 *
 * ```tsx
 * <Hint hints={['Try breaking the problem down', 'Check the edge cases', 'Think about performance']} />
 * ```
 *
 * In this example, the `Hint` component will display a collapsible section with the label "Ver hints". Once expanded, it will show each hint as a list item.
 *
 * @param {HintProps} props - The properties passed to the `Hint` component.
 *
 * @returns {React.ReactElement} A `details` element that contains a summary and a list of hints.
 */

const Hint: React.FC<HintProps> = ({ hints }: HintProps): React.ReactElement => {
    return (
        <details className={styles.hint}>
            <summary className={styles.summary}>Ver hint{hints.length > 1 ? 's' : ''}</summary>
            <ul className={styles.hintList}>
                {hints.map((hint, index) => (
                    <li key={index} className={styles.hintItem}>{hint}</li>
                ))}
            </ul>
        </details>
    );
};

export default Hint;
