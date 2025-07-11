import React from "react";
import { WithClassName } from "../../../components/traits/WithClassName";
import styles from "./Explanation.module.css";
import clsx from "clsx";
import { ChatCircleText } from "phosphor-react";
import { WithTitle } from "../../../components/traits/WithTitle";

type ExplanationProps = React.PropsWithChildren<WithClassName & WithTitle>;

/**
 * Renders a styled informational block meant to explain recent actions or code behavior.
 *
 * This component mimics an "info" admonition and supports a customizable title, styling, and
 * content.
 * It is especially useful in educational or documentation contexts to answer questions like
 * "What did we just do?" or provide explanations after code examples.
 *
 * ## Usage:
 * ```tsx
 * <Explanation>
 *   En este ejemplo, el constructor secundario permite crear una instancia de `Person`.
 * </Explanation>
 * ```
 *
 * You can customize the title or override styles using `className`:
 * ```tsx
 * <Explanation title="Detalles del comportamiento">
 *   Esta función realiza una validación antes de continuar.
 * </Explanation>
 * ```
 *
 * @param className Optional additional CSS class names.
 * @param children Content to display inside the explanation box.
 * @param title Optional title to show; if not provided, `defaultTitle` is used.
 * @param defaultTitle Fallback title to render when no `title` is given.
 */
export default function Explanation({
  className,
  children,
  title,
  defaultTitle = "¿Qué acabamos de hacer?",
  ...rest
}: ExplanationProps) {
  const resolvedTitle = title || defaultTitle;

  return (
    <section
      className={clsx(styles.explanation, className)}
      role="info"
      aria-labelledby="explanation-title"
      {...rest}
    >
      <h3 id="explanation-title" className={styles.explanation__title}>
        <span className={styles.explanation__icon} aria-hidden="true">
          <ChatCircleText size={20} weight="fill" />
        </span>
        {resolvedTitle}
      </h3>
      {children}
    </section>
  );
}
