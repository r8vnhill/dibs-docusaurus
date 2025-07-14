import React from 'react';
import BashScriptBlock from '../../../../code-blocks/BashScriptBlock';

const script = `#!/usr/bin/env bash

# Enable strict mode:
# -e: exit immediately if a command fails
# -u: treat unset variables as errors
# -o pipefail: return the exit code of the first failed command in a pipeline
set -euo pipefail

# List of required Homebrew formulas for building modern C++ projects
required=(llvm cmake ninja)

echo "🔍 Checking for required packages..."

# Loop over each required package
for pkg in "\${required[@]}"; do
    if brew list --formula "$pkg" &>/dev/null; then
        echo "✅ $pkg already installed."
    else
        echo "📦 Installing $pkg..."
        brew install "$pkg"
    fi
done

echo -e "\n🔍 Checking tool availability..."

# List of expected tools in the system PATH
tools=(clang++ cmake ninja)

# Check if each tool is available
for tool in "\${tools[@]}"; do
    if command -v "$tool" >/dev/null 2>&1; then
        echo "✅ $tool found at $(command -v "$tool")"
    else
        echo "⚠️ $tool not found in PATH" >&2
    fi
done

# If clang++ isn't the one installed by Homebrew, suggest adding it to PATH
if [[ "$(command -v clang++)" != *"/opt/homebrew/opt/llvm/bin/clang++" ]]; then
    echo -e "\\nℹ️  To use Homebrew's clang++, consider adding to your shell config:"
    echo '    export PATH="/opt/homebrew/opt/llvm/bin:$PATH"'
fi
`

const scriptName = 'install_cmake_dependencies.sh';

export default function InstallCmakeDependenciesMac(): JSX.Element {
  return (
    <BashScriptBlock
      title={`scripts/macos/${scriptName}`}
      code={script}
      scriptName={scriptName}
    />
  );
}
