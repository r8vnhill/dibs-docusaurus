import styles from "@site/src/css/components/callouts/FilledIcon.module.css";
import { FilledIconProps } from "./types";
import clsx from "clsx";

/**
 * Renders a filled-style icon inside a stylized wrapper.
 *
 * This component provides a reusable wrapper for rendering icons from libraries like
 * `phosphor-react` with a consistent filled appearance (`weight="fill"`). It accepts any icon
 * component and forwards additional props, allowing for size, color, and accessibility
 * customization.
 *
 * The icon is wrapped in a `<span>` element with predefined styling and marked as `aria-hidden`
 * since it's purely decorative.
 *
 * @template T - The props type of the icon component.
 *
 * @param Icon - The icon component to render (e.g., `Brain`, `DotsThree`, etc.).
 * @param props - Additional props to pass to the icon (e.g., `size`, `color`).
 * @param className - Optional extra class names to apply to the wrapper span.
 *
 * @returns A JSX element containing the styled icon.
 *
 * @example
 * <FilledIcon Icon={Brain} size={24} className="my-icon" />
 */
export default function FilledIcon({
  Icon,
  size = 20,
  props = {},
  className,
}: FilledIconProps) {
  return (
    <span className={clsx(styles.filledIcon, className)} aria-hidden="true">
      <Icon weight="fill" size={size} {...props} />
    </span>
  );
}
