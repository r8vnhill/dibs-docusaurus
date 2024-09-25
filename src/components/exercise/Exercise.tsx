import React from 'react';
import styles from './Exercise.module.css';

/**
 * The `ExerciseProps` interface defines the properties that can be passed to the `Exercise` component. It provides an
 * optional title for the exercise and the children that will be rendered inside the component.
 */
interface ExerciseProps {
    title?: string;
    children: React.ReactNode;
}

/**
 * The `Exercise` component is used to display a collapsible section that reveals an exercise.
 * It utilizes the HTML `<details>` element to provide a summary and expandable content.
 * The component is styled using an external CSS module to support light and dark themes.
 *
 * ## Props:
 * - `title`: An optional title for the exercise. If no title is provided, the default label "Ejercicio" will be used.
 * - `children`: The content to be displayed inside the expandable section, typically the details or instructions for
 * the exercise.
 *
 * ## Usage Example:
 *
 * ```tsx
 * <Exercise title="Void Safety">
 *   <p>This exercise helps you practice handling nullability in Kotlin.</p>
 * </Exercise>
 * ```
 *
 * In this example, the `Exercise` component will display a collapsible section with the title "Ejercicio: Void Safety"
 * and the exercise instructions.
 *
 * @param {ExerciseProps} props - The properties passed to the component.
 * @param {React.ReactNode} props.children - The content to be shown within the exercise.
 *
 * @returns {React.ReactElement} A `details` element containing the exercise summary and content.
 */
class Exercise extends React.Component<ExerciseProps> {
    render() {
        let {title, children} = this.props;
        return (
            <details className={styles.exercise}>
                <summary className={styles.summary}>
                    {title ? <strong>{`Ejercicio: ${title}`}</strong> : <strong>Ejercicio</strong>}
                </summary>
                <div className={styles.content}>{children}</div>
            </details>
        );
    }
}

export default Exercise;
