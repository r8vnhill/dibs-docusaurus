import rehypeKatex from "rehype-katex";

/**
 * Preset for rehype plugins used in Docusaurus documentation.
 */
const rehypePlugins = [
  rehypeKatex, // Enables KaTeX support for rendering LaTeX math
];

export default rehypePlugins;
