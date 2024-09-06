
/**
 * Represents a single educational lesson, containing details about the lesson's name,
 * description, and a link to more information or the lesson's content.
 */
export interface Lesson {
    /**
     * The name of the lesson.
     */
    name: string;

    /**
     * A short description of the lesson's content and objectives.
     */
    description: string;

    /**
     * A URL link to the lesson's materials or additional information.
     */
    link: string;
}
