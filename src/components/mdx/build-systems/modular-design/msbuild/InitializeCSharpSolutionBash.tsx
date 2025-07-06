import React from "react";
import BashScriptBlock from "../../../../code-blocks/BashScriptBlock";

const code = `#!/bin/bash
# Enable strict error handling:
# -e: exit on error
# -u: treat unset variables as an error
# -o pipefail: fail if any command in a pipeline fails
set -euo pipefail

# Ensure a solution name is provided as the first argument
if [[ $# -lt 1 ]]; then
    echo "Usage: $0 <SOLUTION_NAME>"
    exit 1
fi

# Store the provided solution name and define default project names
SOLUTION_NAME="$1"
LIB_NAME="EchoLib"
APP_NAME="EchoApp"

# Function to initialize a new C# solution with a library and console app
function initialize_csharp_solution() {
    # Create the solution file
    echo "📁 Creating solution '$SOLUTION_NAME'..."
    dotnet new sln -n "$SOLUTION_NAME"

    # Create the class library project and add it to the solution
    echo "📚 Creating class library '$LIB_NAME'..."
    dotnet new classlib -n "$LIB_NAME"
    dotnet sln "$SOLUTION_NAME.sln" add "$LIB_NAME/$LIB_NAME.csproj"

    # Create the console application project
    echo "🖥️ Creating console app '$APP_NAME'..."
    dotnet new console -n "$APP_NAME"

    # Reference the library project from the console app
    dotnet add "$APP_NAME/$APP_NAME.csproj" reference "$LIB_NAME/$LIB_NAME.csproj"

    # Add the console app project to the solution
    dotnet sln "$SOLUTION_NAME.sln" add "$APP_NAME/$APP_NAME.csproj"

    # Final message indicating completion
    echo "✅ Solution '$SOLUTION_NAME' initialized successfully."
}

# Invoke the function
initialize_csharp_solution
`;

type Props = {
  title: string;
};

export default function InitializeCSharpSolutionBashCode({ title }: Props) {
  return (
    <BashScriptBlock
      title={title}
      code={code}
      scriptName="initialize_csharp_solution.sh"
      argsExample="EchoAppCSharp"
    />
  );
}
