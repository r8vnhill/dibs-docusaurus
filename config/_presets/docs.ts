import { PluginOptions } from "@docusaurus/plugin-content-docs";
import remarkPlugins from "./remark";
import rehypePlugins from "./rehype";
import "~/theme/Admonition/Types.tsx"

const sidebarPath = require.resolve("./sidebars.ts");

const docsPreset: Partial<PluginOptions> = {
  sidebarPath,
  remarkPlugins,
  rehypePlugins,
  admonitions: {
    keywords: [
      "explanation",
      "exercise",
      "question",
      "solution",
      "more",
      "definition",
      "abstract",
    ],
    extendDefaults: true,
  },
};

export default docsPreset;
