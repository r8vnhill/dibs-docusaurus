import React from 'react';
import BashScriptBlock from '../../../../code-blocks/BashScriptBlock';
import { OS } from '../../../../utils/OS';

const code = `#!/usr/bin/env bash

set -euo pipefail

# Display usage information
print_usage() {
    echo "Usage: $0 <project-root>"
    echo
    echo "Initializes a Gradle project in the specified directory."
}

# Trap errors and print a helpful message
trap 'echo "❌ An unexpected error occurred." >&2' ERR

# Ensure exactly one argument is passed
if [[ $# -ne 1 ]]; then
    echo "❌ Error: Missing required argument: project-root" >&2
    print_usage
    exit 1
fi

# Assign and sanitize argument
PROJECT_ROOT="$1"

# Disallow empty strings or strings with only whitespace
if [[ -z "\${PROJECT_ROOT//[[:space:]]/}" ]]; then
    echo "❌ Error: Project root cannot be empty or just whitespace." >&2
    exit 1
fi

# Resolve absolute path to avoid surprises with \`cd\`
PROJECT_ROOT="$(realpath -m "$PROJECT_ROOT")"

# Create the directory if it doesn't exist
mkdir -p "$PROJECT_ROOT"

# Change to the project directory
cd "$PROJECT_ROOT"

# Check if Gradle is installed
if ! command -v gradle &> /dev/null; then
    echo "❌ Gradle is not installed or not in your PATH." >&2
    exit 1
fi

# Run gradle init interactively
echo "🚀 Running 'gradle init' in '$PROJECT_ROOT'..."
# highlight-next-line
gradle init
`;

const scriptName = 'initialize_gradle_project.sh';

type Props = {
  os: OS;
}

export default function InitializeGradleProjectSh({ os }: Props): React.JSX.Element {
  return (
    <BashScriptBlock
      title={`scripts/${os}/${scriptName}`}
      code={code}
      scriptName={scriptName}
      argsExample="echo-app"
    />
  );
}
