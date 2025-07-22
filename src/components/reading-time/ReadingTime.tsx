import { ClockAfternoon } from "phosphor-react";
import styles from "@site/src/css/components/reading-time/ReadingTime.module.css";
import clsx from "clsx";
import ExcludeFromReadingTime from "./ExcludeFromReadingTime";
import type { ReadingTimeProps } from "./types";
import { useReadingTime } from "./utils";

/**
 * Displays an estimated reading time for the current markdown content.
 *
 * It analyzes the content of a `.theme-doc-markdown` container (Docusaurus default) and displays a
 * reading time estimation in minutes.
 * It ignores collapsed `<details>` and elements marked with `.exclude-from-reading-time`.
 *
 * @param multiplier - A factor to scale the estimated reading time (default: `1.5`)
 * @param className - Custom class names for the outer wrapper
 * @param icon - Optional icon element to show before the label
 * @param label - Text label to display before the number (default: `"Dedicación recomendada"`)
 * @param ariaLive - `aria-live` attribute for accessibility updates
 * @returns A stylized JSX block with the reading time estimate, or `null` if container is not found
 */
export default function ReadingTime({
  multiplier = 1.5,
  className,
  icon = <ClockAfternoon weight="regular" size={20} aria-hidden />,
  label = "Dedicación recomendada",
  ariaLive = "polite",
}: ReadingTimeProps): JSX.Element | null {
  const readingTime = useReadingTime(multiplier);

  if (readingTime == null) return null;

  return (
    <ExcludeFromReadingTime>
      <div className={clsx(styles.readingTime, className)} aria-live={ariaLive}>
        <p className={styles.readingTime__iconText}>
          <span className={styles.readingTime__icon}>{icon}</span>
          {label}: {readingTime} {readingTime === 1 ? "minuto" : "minutos"}
        </p>
        <p className={styles.readingTime__note}>
          Esto considera el contenido visible y relevante, e ignora texto
          colapsado o marcado como opcional.
        </p>
      </div>
    </ExcludeFromReadingTime>
  );
}
