import React, {
  PropsWithChildren,
  useMemo,
  forwardRef,
  ForwardedRef,
} from "react";
import styles from "./Figure.module.css";
import { useFigureCounter } from "./FigureContext";
import { WithClassName } from "../traits/WithClassName";
import clsx from "clsx";

/** Props for the [Figure] component.
 *
 * This type defines the properties required to render a figure with an image, a caption, and
 * optional styling controls.
 * It extends `PropsWithChildren` to allow the caption content as children, and `WithClassName` for
 * custom CSS class support.
 */
type FigureProps = PropsWithChildren<{
  /**
   * The source URL of the image to display.
   */
  src: string;

  /**
   * The alt text for the image, required for accessibility.
   */
  alt: string;

  /**
   * Optional maximum width of the figure container (e.g., `"600px"`).
   */
  maxWidth?: string;
} & WithClassName>;

/** 
 * A semantic and stylable figure component with automatic numbering.
 * 
 * This component renders an image with a caption and wraps it in a semantic `<figure>` block.
 * It uses a counter from `useFigureCounter()` to automatically assign and display a figure number,
 * and supports customization through props such as `maxWidth` and `className`.
 * 
 * It is also prepared for use in scroll/anchor navigation systems via `forwardRef`, and it defers
 * image loading using `loading="lazy"` for performance optimization.
 * 
 * @param src - The image URL to display.
 * @param alt - Alternative text for accessibility and SEO.
 * @param children - Caption content, rendered after the figure number.
 * @param maxWidth - Optional maximum width of the figure container (defaults to 600px).
 * @param className - Optional CSS class to customize the outer `<figure>` element.
 * @param ref - Optional forwarded ref to the `<figure>` element (for scroll/anchor support).
 * 
 * @returns A styled figure block containing an image and caption.
 */
const Figure = (
  { src, alt, children, maxWidth, className }: FigureProps,
  ref: ForwardedRef<HTMLElement>
) => {
  const getNextFigureNumber = useFigureCounter();
  const number = useMemo(() => getNextFigureNumber.getNextNumber(), []);

  const style = { maxWidth: maxWidth ?? "600px" };

  return (
    <figure ref={ref} className={clsx(styles.figure, className)}>
      <div className={styles.container} style={style}>
        <img
          src={src}
          alt={alt}
          className={styles.img}
          loading="lazy"
        />
        <figcaption className={styles.caption}>
          <strong>Figura {number}.</strong> <span>{children}</span>
        </figcaption>
      </div>
    </figure>
  );
};

export default forwardRef(Figure);
