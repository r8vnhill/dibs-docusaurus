import styles from "@site/src/css/components/callouts/Note.module.css";
import clsx from "clsx";
import { Note as NoteIcon } from "phosphor-react";
import { NoteProps } from "./types";
import { useId } from "react";
import FilledIcon from "./FilledIcon";

/**
 * Renders a stylized, accessible note block with an optional heading and content.
 *
 * This component provides a semantic and reusable way to present information in a visual callout,
 * typically used in documentation or educational contexts.
 * It includes an icon, a customizable heading, and child content.
 * The heading level can be configured for semantic nesting.
 *
 * The note is visually styled using `.note`, `.note__title`, and `.note__icon` CSS classes.
 *
 * Accessibility is supported via a unique `aria-labelledby` ID generated with `useId`, and the
 * section is assigned a `role="note"` for assistive technologies.
 *
 * @param className - Optional additional class names for styling the outer wrapper.
 * @param children - The note's content, typically explanatory or contextual information.
 * @param heading - A custom heading to display instead of the default `"Nota"`.
 * @param headingLevel - The semantic level of the heading tag (`'h2'`, `'h3'`, etc.).
 * @param rest - Additional props to apply to the outer `<section>` element.
 *
 * @returns A JSX element representing a stylized note block with heading and content.
 */
export default function Note({
  className,
  children,
  heading,
  headingLevel,
  ...rest
}: NoteProps): JSX.Element {
  const defaultHeading = "Nota";
  const resolvedHeading = heading || defaultHeading;
  const HeadingTag = headingLevel ?? "h3";
  const headingId = useId();

  return (
    <section
      className={clsx(styles.note, className)}
      role="note"
      aria-labelledby={headingId}
      {...rest}
    >
      <HeadingTag id={headingId} className={styles.note__title}>
        <FilledIcon Icon={NoteIcon} className={styles.note__icon} />
        {resolvedHeading}
      </HeadingTag>
      {children}
    </section>
  );
}
