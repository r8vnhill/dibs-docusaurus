import React from 'react';
import BashScriptBlock from '../../../../code-blocks/BashScriptBlock';

const script = `#!/usr/bin/env bash
# Enable strict mode for safer scripting:
# -e: exit on any error
# -u: treat unset variables as errors
# -o pipefail: fail if any part of a pipeline fails
set -euo pipefail

echo "🔧 Preparing environment..."

# Refresh package list to get the latest metadata (prevents outdated index issues)
sudo apt update -y

# Check if the Kitware APT repository (for newer CMake versions) is already present
if ! grep -q "^deb .*kitware" /etc/apt/sources.list /etc/apt/sources.list.d/* 2>/dev/null; then
    echo "➕ Adding Kitware APT repository..."

    # Ensure necessary tools are available to add external repositories
    sudo apt install -y wget gpg software-properties-common

    # Download and install Kitware's GPG key securely
    wget -O - https://apt.kitware.com/keys/kitware-archive-latest.asc |
        gpg --dearmor | sudo tee /usr/share/keyrings/kitware-archive-keyring.gpg >/dev/null

    # Add Kitware’s repository using the signed key
    echo "deb [signed-by=/usr/share/keyrings/kitware-archive-keyring.gpg] https://apt.kitware.com/ubuntu/ $(lsb_release -cs) main" |
        sudo tee /etc/apt/sources.list.d/kitware.list >/dev/null

    # Refresh package list again after adding the new source
    sudo apt update -y
fi

# Define the list of required packages for modern C++ development
packages=(llvm clang cmake ninja-build)

# Track which packages need to be installed
install=()

# Loop through each package and check if it’s already installed
for pkg in "\${packages[@]}"; do
    if ! dpkg -s "$pkg" &>/dev/null; then
        echo "📦 Will install: $pkg"
        install+=("$pkg")
    else
        echo "✅ $pkg is already installed."
    fi
done

# If any package is missing, install all at once
if [ "\${#install[@]}" -gt 0 ]; then
    sudo apt install -y "\${install[@]}"
fi

# Final check: confirm that all critical tools are available and show their versions
echo -e "\\n🔍 Tool versions:"
for tool in clang++ cmake ninja; do
    if command -v "$tool" &>/dev/null; then
        echo "✅ $tool: $($tool --version | head -n1)"
    else
        echo "⚠️ $tool not found in PATH" >&2
    fi
done
`

const scriptName = 'install_cmake_dependencies.sh';

export default function InstallCmakeDependenciesDebian(): JSX.Element {
  return (
    <BashScriptBlock
      title={`scripts/deb/\${scriptName}`}
      code={script}
      scriptName={scriptName}
    />
  );
}
