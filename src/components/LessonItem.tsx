import React from 'react';
import styles from './LessonItem.module.css'; // Importar el CSS Module

type LessonItemProps = {
    Url: string;
    Counter: number;
    Title: string;
    Description: string;
};

/**
 * LessonItem component renders a lesson item with a title, description, and a clickable link.
 *
 * ## Usage:
 * This component is typically used to display a lesson in a list format, including a title,
 * description, and an index number.
 *
 * ### Example 1: Render a lesson with title and description
 * ```tsx
 * <LessonItem 
 *   Url="https://example.com/lesson-1" 
 *   Counter={1} 
 *   Title="Introduction to Programming" 
 *   Description="This lesson covers the basics of programming." 
 * />
 * ```
 * The above example renders a lesson item that links to `https://example.com/lesson-1`,
 * with the index `1`, the title "Introduction to Programming", and the description "This lesson covers the basics of
 * programming."
 *
 * @param Url The URL of the lesson to navigate to when clicked.
 * @param Counter The index number representing the lesson's position in the list.
 * @param Title The title of the lesson.
 * @param Description A brief description of the lesson.
 *
 * @returns A React functional component rendering the lesson information.
 */
const LessonItem: React.FC<LessonItemProps> = ({ Url, Counter, Title, Description }) => (
    <div className={styles.lessonItem}>
        <a href={Url} target="_blank" rel="noopener noreferrer" className={styles.item} aria-label="Navigate to the lesson">
            <i role="img" aria-label="Index" className={styles.iconContainer}>{Counter}</i>
            <div className={styles.details}>
                <h3>{Title}</h3>
                <p>{Description}</p>
            </div>
        </a>
    </div>
);

export default LessonItem;
