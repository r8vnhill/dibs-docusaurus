import React from "react";
import BashScriptBlock from "../../../../code-blocks/BashScriptBlock";
import type { OS } from "../../../../utils/OS";

const script = `#!/usr/bin/env bash

# Enable strict mode
set -euo pipefail

# Check if a project name was provided
if [[ $# -ne 1 || -z "\${1// }" ]]; then
    echo "❌ Error: You must provide a non-empty project name." >&2
    echo "Usage: $0 <ProjectName>" >&2
    exit 1
fi

project_name="$1"
cmake_file="$project_name/CMakeLists.txt"

# Create the project directory if it doesn't exist
if [[ ! -d "$project_name" ]]; then
    echo "📁 Creating project directory: $project_name"
    mkdir -p "$project_name"
fi

# Create CMakeLists.txt if it doesn't exist
if [[ ! -f "$cmake_file" ]]; then
    echo "📄 Creating CMakeLists.txt"
    touch "$cmake_file"
fi

# Change to the project directory
cd "$project_name"
echo "📌 Switched to $project_name"
`;

const scriptName = "initialize_cmake_project.sh";

const args = "echo-app-cmake";

type Props = {
  os: OS;
};

export default function InitializeCmakeProjectSh({ os }: Props): JSX.Element {
  return (
    <BashScriptBlock
      title={`scripts/${os}/${scriptName}`}
      code={script}
      scriptName={scriptName}
      argsExample={args}
    />
  );
}
