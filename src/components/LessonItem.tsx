import React from 'react';
import styles from './LessonItem.module.css'; // Importar el CSS Module

type LessonItemProps = {
    Url: string;
    Counter: number;
    Title: string;
    Description: string;
};

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
