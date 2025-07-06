import React from "react";
import ScriptBlock from "./ScriptBlock";

type PowerShellScriptBlockProps = {
  title: string;
  code: string;
  scriptName: string;
  argsExample?: string;
  description?: React.ReactNode;
};

/**
 * `PowerShellScriptBlock` is a convenience wrapper around `ScriptBlock` that preconfigures
 * the language as `"powershell"`.
 *
 * It renders a syntax-highlighted PowerShell script and shows how to execute it from the terminal.
 *
 * This component is ideal when you want to:
 * - Display PowerShell scripts consistently across your documentation.
 * - Avoid repeating the language setup for each script block.
 *
 * ## Props
 *
 * @property title - Title displayed above the code block (usually the script file name).
 * @property code - Full PowerShell script content to be displayed inside the code block.
 * @property scriptName - Name of the file used in the terminal execution example.
 * @property argsExample - Optional command-line arguments to display in the usage example.
 * @property description - Optional React node inserted between the code block and usage instruction.
 *
 * ## Example usage
 *
 * ```tsx
 * <PowerShellScriptBlock
 *   title="scripts/setup.ps1"
 *   code="Write-Output 'Setting up...'"
 *   scriptName="setup.ps1"
 *   argsExample="-Verbose"
 *   description={<p>This script sets up your development environment.</p>}
 * />
 * ```
 */
export default function PowerShellScriptBlock({
  title,
  code,
  scriptName,
  argsExample,
  description,
}: PowerShellScriptBlockProps) {
  return (
    <ScriptBlock
      title={title}
      code={code}
      scriptName={scriptName}
      language="powershell"
      argsExample={argsExample}
      description={description}
    />
  );
}
