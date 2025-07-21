import type { ComponentProps } from "react";
import React from "react";
import CodeInline from "@theme/CodeInline";
import type { Props } from "@theme/MDXComponents/Code";

function shouldBeInline(props: Props) {
  return (
    typeof props.children !== "undefined" &&
    React.Children.toArray(props.children).every(
      (el) => typeof el === "string" && !el.includes("\n")
    )
  );
}

function CodeBlock(props: ComponentProps<"code">): JSX.Element {
  return <code {...props} />;
}

/**
 * Swizzled MDX <code> component for compatibility with `@shiki/rehype`.
 *
 * Since `@shiki/rehype` performs all syntax highlighting at compile time, this component bypasses
 * Docusaurus's default code block rendering logic.
 *
 * If the code snippet contains only inline content (no line breaks), it delegates rendering to
 * `@theme/CodeInline` for proper formatting.
 * Otherwise, it renders a raw <code> block with the provided props.
 *
 * This prevents double-highlighting or wrapping behavior that is unnecessary with `@shiki/rehype`.
 *
 * @param props - MDX <code> props, including potential children content
 * @returns A JSX element for inline code or a code block
 *
 * @see https://github.com/shikijs/shiki
 * @see https://docusaurus.io/docs/markdown-features/code-blocks
 * @see https://docusaurus.io/docs/using-themes#swizzling-theme-components
 */
export default function MDXCode(props: Props): JSX.Element {
  return shouldBeInline(props) ? (
    <CodeInline {...props} />
  ) : (
    <CodeBlock {...props} />
  );
}
