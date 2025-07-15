import React from 'react';
import PowerShellScriptBlock from '../../../../code-blocks/PowerShellScriptBlock';

const code = `# Enable advanced features like -Verbose and standard error handling flags.
[CmdletBinding()]
param (
    # Require a non-empty string as the project root path.
    [Parameter(Mandatory)]
    [ValidateNotNullOrEmpty()]
    [string] $ProjectRoot
)

try {
    # Attempt to resolve the full path (handles both absolute and relative paths).
    $fullPath = Resolve-Path -Path $ProjectRoot -ErrorAction SilentlyContinue

    # If the path doesn't exist yet, create the directory.
    if (-not $fullPath) {
        Write-Verbose "Creating '$ProjectRoot'"
        $null = New-Item -Path $ProjectRoot -ItemType Directory -Force
        $fullPath = Resolve-Path $ProjectRoot
    }

    # Navigate to the resolved project directory.
    Set-Location $fullPath

    # Log and run the Gradle initialization command interactively.
    Write-Verbose "Running 'gradle init' in '$fullPath'"
    # highlight-next-line
    & gradle init
}
catch {
    # If any error occurs, show a clear failure message.
    Write-Error "❌ Gradle init failed: $_"
}
`;

const scriptName = 'Initialize-GradleProject.ps1';

export default function InitializeGradleProjectPsCode() {
  return (
    <PowerShellScriptBlock
      title={`scripts/powershell/${scriptName}`}
      code={code}
      scriptName={scriptName}
      argsExample="-ProjectRoot echo-app"
    />
  );
}
