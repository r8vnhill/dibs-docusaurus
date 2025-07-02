import React from 'react';
import styles from './Video.module.css';

/**
 * Props for the `Video` component, representing a video reference entry.
 *
 * Includes metadata such as title, author, duration, and hosting location, as well as optional
 * children for additional content.
 *
 * @property title - The title of the video (required).
 * @property url - The URL of the video (required).
 * @property duration - The video duration (e.g., "12:30") (required).
 * @property location - The platform or source where the video is hosted (e.g., "YouTube") (required).
 * @property author - The person or organization that produced the video (required).
 * @property className - Optional CSS class for styling the container.
 * @property icon - Optional icon to represent the video (defaults to 🎥 or similar).
 * @property children - Optional description or additional content to display below the metadata.
 */
export interface VideoProps {
  title: string;
  url: string;
  duration: string;
  location: string;
  author: string;
  className?: string;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}

/**
 * Displays a reference to a video resource, including title, duration, location, and author.
 *
 * @param title - Title of the video (displayed as a link).
 * @param url - Target URL of the video.
 * @param duration - Duration of the video (e.g. "10:45").
 * @param location - Host platform or location of the video (e.g. "YouTube").
 * @param author - Author or speaker of the video.
 * @param className - Optional custom class.
 * @param icon - Optional icon (defaults to 🎥).
 * @param children - Optional description or extra content.
 */
const Video = React.memo(({
  title,
  url,
  duration,
  location,
  author,
  className = '',
  icon = '🎥',
  children,
}: VideoProps) => {
    if (!title || !url || !duration || !location || !author) {
        throw new Error(
        "Video: 'title', 'url', 'duration', 'location' and 'author' are required props."
        );
    }
    
  return (
    <div className={`${styles.video} ${className}`.trim()}>
      <span className={styles.icon}>{icon}</span>{' '}
      <a href={url} target="_blank" rel="noopener noreferrer" className={styles.title}>
        “{title}”
      </a>{' '}
      <span className={styles.duration}>({duration})</span> en{' '}
      <span className={styles.location}>{location}</span> por{' '}
      <span className={styles.author}>{author}</span>:
      {children && <div className={styles.description}>{children}</div>}
    </div>
  );
});

export default Video;
