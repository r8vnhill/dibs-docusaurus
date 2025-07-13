import React from 'react';
import PowerShellScriptBlock from '../../../../code-blocks/PowerShellScriptBlock';

const script = `[CmdletBinding()]
param ()

# Required packages to compile C++ projects with CMake and Ninja
$required = @('llvm', 'cmake', 'ninja')

# Get installed package names as a set
$installed = (scoop list | ForEach-Object { $_.Name }) -as [string[]]

# Install missing packages
foreach ($pkg in $required) {
    if ($installed -contains $pkg) {
        Write-Host "✅ $pkg already installed."
    } else {
        Write-Host "📦 Installing $pkg..."
        scoop install $pkg
    }
}

Write-Host "\`n🔍 Checking tool availability..."

# Check if each required tool is in PATH
foreach ($tool in @('clang++', 'cmake', 'ninja')) {
    $cmd = Get-Command $tool -ErrorAction SilentlyContinue
    if ($cmd) {
        Write-Host "✅ $tool found at $($cmd.Source)"
    } else {
        Write-Error "⚠️ $tool not found in PATH"
    }
}
`

const scriptName = 'Install-CMakeDependencies.ps1';

export default function InstallCmakeDependenciesWindows(): JSX.Element {
  return (
    <PowerShellScriptBlock
      title={`scripts/windows/${scriptName}`}
      code={script}
      scriptName={scriptName}
    />
  );
}
