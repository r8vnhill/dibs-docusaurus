import React from 'react';
import PowerShellScriptBlock from '../../../../code-blocks/PowerShellScriptBlock';

const script = `# Enable advanced function features (e.g., -Verbose, -ErrorAction)
[CmdletBinding()]
param (
    # Mandatory parameter to specify the project name; cannot be null or empty
    [Parameter(Mandatory)]
    [ValidateNotNullOrWhiteSpace()]
    [string] $ProjectName
)

try {
    # Define the path to the source folder within the project
    $src = Join-Path $ProjectName src

    # Define the list of files to be created in the project
    $files = @(
        "$ProjectName/CMakeLists.txt",  # Root configuration file for CMake
        "$src/main.cpp"                 # Main C++ source file
    )

    Write-Host "📁 Creating project structure..." -ForegroundColor Cyan

    # Create the src directory (and parent if needed)
    New-Item $src -ItemType Directory -Force | Out-Null

    # Create each file listed in $files
    $files | ForEach-Object {
        New-Item $_ -ItemType File -Force | Out-Null
    }

    Write-Host "📌 Switching to $ProjectName" -ForegroundColor Cyan

    # Change the current working directory to the project folder
    Set-Location (Resolve-Path $ProjectName)
}
catch {
    Write-Error "❌ Error: $_"
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
