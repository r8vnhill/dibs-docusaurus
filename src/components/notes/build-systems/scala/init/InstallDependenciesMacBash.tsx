import React from "react";
import PowerShellScriptBlock from "../../../../code-blocks/PowerShellScriptBlock";
import BashListing from "../../../../code-blocks/Listing/BashListing";

const script = `[CmdletBinding()]
param ()

# Check if 'sbt' is listed as an installed Scoop package.
# If it's not installed, install it.
if (-not (scoop list | 
            ForEach-Object { $_.Name } | 
            Where-Object { $_ -eq 'sbt' })) {
    Write-Host '🔍 sbt not found, installing...'
    # highlight-next-line
    scoop install sbt
}

# Check if 'sbt' is available in the system PATH (can be executed in the shell).
Write-Host "\`n🔍 Checking tool availability..."
if ($cmd = Get-Command sbt -ErrorAction SilentlyContinue) {
    # If found, output the path to the executable.
    Write-Host "✅ sbt found at $($cmd.Source)"
} else {
    # If not found, show an error message.
    Write-Error '⚠️ sbt not found in PATH'
}
`;

export default function InstallDependenciesWinMacBash() {
  const scriptName = "scripts/macos/bash/install_sbt_dependencies.sh";
  return (
    <BashListing
      title="Instalar sbt con Homebrew en Bash"
      filename={scriptName}
      fileHref="https://gitlab.com/r8vnhill/echo-app-sbt/-/blob/main/scripts/win/ps1/Install-ScalaDependencies.ps1"
    >
      <PowerShellScriptBlock code={script} scriptName={scriptName} />
    </BashListing>
  );
}
