import { type ReactNode } from "react";
import type { Props } from "@theme/MDXComponents/Pre";

/**
 * Passthrough implementation of the MDX <pre> component.
 *
 * This component is swizzled to avoid interference with syntax highlighting handled by
 * `@shiki/rehype`.
 * 
 * Since `@shiki/rehype` performs syntax highlighting at the remark/rehype stage, we do not need to 
 * override or extend Docusaurus's default `<Pre>` rendering logic.
 * This component simply returns the original HTML <pre> element with its props.
 *
 * This avoids any theming logic that Docusaurus might normally inject via the
 * `@theme/MDXComponents/Pre` component.
 *
 * @param props - Props passed from MDX rendering
 * @returns The original <pre> element with all passed props
 *
 * @see https://github.com/shikijs/shiki
 * @see https://docusaurus.io/docs/using-themes#swizzling-theme-components
 */
export default function MDXPre(props?: Props): ReactNode {
  return <pre {...props} />;
}

MDXPre.displayName = "MDXPre";
