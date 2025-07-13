import React from "react";
import PowerShellScriptBlock from "../../../../code-blocks/PowerShellScriptBlock";

const code = `# Enable common parameters like -Verbose, -Debug, etc.
[CmdletBinding()]
param (
    # Project root path (default: current directory)
    [ValidateNotNullOrEmpty()]
    [string] $ProjectPath = (Get-Location).Path,

    # Module map: name → list of files (relative to project root)
    [Parameter(Mandatory)]
    [ValidateNotNullOrEmpty()]
    [hashtable] $Modules
)

# Ensure root meson.build exists
$rootMeson = Join-Path $ProjectPath 'meson.build'
if (-not (Test-Path $rootMeson)) {
    New-Item -ItemType File -Path $rootMeson -Force | Out-Null
    Write-Verbose "🛠️  Root meson.build created"
}

# Process each module
$Modules.GetEnumerator() | ForEach-Object {
    $module     = $_.Key
    $filePaths  = $_.Value
    $modulePath = Join-Path $ProjectPath "src\$module"
    $mesonPath  = Join-Path $modulePath 'meson.build'

    Write-Information "\`n📁 $module" -InformationAction Continue

    # Ensure module directory exists
    if (-not (Test-Path $modulePath)) {
        Write-Verbose "📂 Creating: $modulePath"
        New-Item -ItemType Directory -Path $modulePath -Force | Out-Null
    }

    # Always touch meson.build inside module
    New-Item -ItemType File -Path $mesonPath -Force | Out-Null
    Write-Verbose "🛠️  meson.build touched in $module"

    # Ensure all files and their directories exist
    foreach ($relative in $filePaths) {
        $fullPath = Join-Path $modulePath $relative
        $dir      = Split-Path $fullPath -Parent

        if (-not (Test-Path $dir)) {
            Write-Verbose "📂 Creating: $dir"
            New-Item -ItemType Directory -Path $dir -Force | Out-Null
        }

        if (-not (Test-Path $fullPath)) {
            New-Item -ItemType File -Path $fullPath -Force | Out-Null
            Write-Information "✅ Created: $relative" -InformationAction Continue
        } else {
            Write-Warning "⚠️  Already exists: $relative"
        }
    }
}

Write-Host "\`n🟢 Project initialized successfully." -ForegroundColor Green
`

const args = `-Modules @{
  app = @("main.cpp")
  core = @("echo.cpp", "echo.hpp")
}`

const scriptName = "Initialize-MultiModuleMesonProject.ps1";

export default function InitializeMultiModuleMesonProjectWindows(): JSX.Element {
  return (
    <PowerShellScriptBlock 
      title={`scripts/windows/${scriptName}`}
      code={code}
      scriptName={scriptName}
      argsExample={args}
    />
  );
}
