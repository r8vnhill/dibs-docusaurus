import React from "react";
import ScriptBlock from "./ScriptBlock";

type BashScriptBlockProps = {
  title: string;
  code: string;
  scriptName: string;
  argsExample?: string;
  description?: React.ReactNode;
};

/**
 * `BashScriptBlock` is a convenience wrapper around `ScriptBlock` that preconfigures
 * the language as `"bash"`.
 *
 * It renders a syntax-highlighted Bash script and shows how to execute it from the terminal.
 *
 * This component is ideal when you want to:
 * - Show Bash scripts in a consistent way across documentation.
 * - Avoid manually specifying the language every time you use a Bash script.
 *
 * ## Props
 *
 * @property title - Title displayed above the code block (typically the script file name).
 * @property code - Full Bash script content to be displayed inside the code block.
 * @property scriptName - File name of the script, used in the terminal execution example.
 * @property argsExample - Optional arguments appended in the run command preview.
 * @property description - Optional React node rendered between the code and execution example.
 *
 * ## Example usage
 *
 * ```tsx
 * <BashScriptBlock
 *   title="scripts/setup.sh"
 *   code="#!/bin/bash\necho Setting up..."
 *   scriptName="setup.sh"
 *   argsExample="--verbose"
 *   description={<p>Este script prepara tu entorno de desarrollo.</p>}
 * />
 * ```
 */
export default function BashScriptBlock({
  title,
  code,
  scriptName,
  argsExample,
  description = "",
}: BashScriptBlockProps) {
  return (
    <ScriptBlock
      title={title}
      code={code}
      scriptName={scriptName}
      language="bash"
      argsExample={argsExample}
      description={description}
    />
  );
}
