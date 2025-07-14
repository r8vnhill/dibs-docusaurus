import React from 'react';
import PowerShellScriptBlock from '../../../../code-blocks/PowerShellScriptBlock';

const script = `# Enable advanced function features such as -Verbose, -ErrorAction, etc.
[CmdletBinding()]
param (
    # Define a mandatory parameter for the project name; must not be null or whitespace
    [Parameter(Mandatory)]
    [ValidateNotNullOrWhiteSpace()]
    [string] $ProjectName
)

try {
    # Check if the project directory exists; create it if not
    if (-not (Test-Path $ProjectName -PathType Container)) {
        New-Item $ProjectName -ItemType Directory -Force | Out-Null
    }

    # Create the initial CMakeLists.txt if it doesn't exist
    if (-not (Test-Path "$ProjectName/CMakeLists.txt")) {
        New-Item "$ProjectName/CMakeLists.txt" -ItemType File -Force | Out-Null
    }
    # Change the working directory to the project folder
    Set-Location (Resolve-Path $ProjectName)
    Write-Host "📌 Switched to $ProjectName" -ForegroundColor Cyan
}
catch {
    Write-Error "❌ Failed to initialize project: $_"
    exit 1
}
`

const scriptName = 'Initialize-CMakeProject.ps1';

const args = "-ProjectName echo-app-cmake"

export default function InitializeCmakeProjectWindows(): JSX.Element {
  return (
    <PowerShellScriptBlock
      title={`scripts/windows/${scriptName}`}
      code={script}
      scriptName={scriptName}
      argsExample={args}
    />
  );
}
