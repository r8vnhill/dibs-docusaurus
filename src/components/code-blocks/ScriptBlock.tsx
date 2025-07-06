import React from "react";
import CodeBlock from "@theme/CodeBlock";

type ScriptLanguage = "bash" | "powershell";

type ScriptBlockProps = {
  title: string;
  code: string;
  scriptName: string;
  language: ScriptLanguage;
  argsExample?: string;
  description?: React.ReactNode;
};

/**
 * `ScriptBlock` displays a syntax-highlighted code block for a script (e.g., Bash or PowerShell)
 * and shows an example of how to execute it from the terminal.
 *
 * This component is useful for tutorials or documentation pages where you want to:
 * - Present a script file with syntax highlighting.
 * - Provide a contextual explanation or usage instructions.
 * - Show an example terminal command for running the script.
 *
 * ## Props
 *
 * @property title - Title displayed above the code block (typically the file name).
 * @property code - The full script content to display inside the code block.
 * @property scriptName - The file name used in the command-line example.
 * @property language - Script language (`"bash"` or `"powershell"`) for syntax highlighting.
 * @property argsExample - Optional string of example arguments to append in the run command.
 * @property description - Optional React node rendered between the script and execution example.
 *
 * ## Example usage
 *
 * ```tsx
 * <ScriptBlock
 *   title="scripts/init.sh"
 *   code="#!/bin/bash\necho Hello, $1"
 *   scriptName="init.sh"
 *   language="bash"
 *   argsExample="MyProject"
 *   description={<p>Este script inicializa un nuevo proyecto con el nombre indicado.</p>}
 * />
 * ```
 */

export default function ScriptBlock({
  title,
  code,
  scriptName,
  language,
  argsExample,
  description,
}: ScriptBlockProps) {
  return (
    <section>
      <CodeBlock language={language} title={title} showLineNumbers>
        {code}
      </CodeBlock>
      {description}
      <p>
        Guarda este script como <code>{scriptName}</code>, y ejecútalo en la
        terminal:
      </p>
      <CodeBlock language="bash" showLineNumbers>
        {`${language === "powershell" ? "." : "bash"} ${title}${
          argsExample ? " " + argsExample : ""
        }`}
      </CodeBlock>
    </section>
  );
}
