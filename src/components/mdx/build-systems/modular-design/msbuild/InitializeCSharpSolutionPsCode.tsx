import React from "react";
import PowerShellScriptBlock from "../../../../code-blocks/PowerShellScriptBlock";

const code = `[CmdletBinding()]
param (
    # Name of the .NET solution to create
    [Parameter(Mandatory)]
    [string] $SolutionName
)

function Script:Initialize-CSharpSolution {
    [CmdletBinding()]
    param ()

    # Create a new empty solution with the provided name
    Write-Verbose "Creating solution '$SolutionName'..."
    dotnet new sln -n $SolutionName

    # Define the class library project name
    $libName = 'EchoLib'
    Write-Verbose "Creating class library project '$libName'..."

    # Create the class library project in a new folder
    dotnet new classlib -n $libName

    # Add the library project to the solution
    dotnet sln add "$libName/$libName.csproj"

    # Define the console application project name
    $appName = 'EchoApp'
    Write-Verbose "Creating console app project '$appName'..."

    # Create the console application project in a new folder
    dotnet new console -n $appName

    # Add a project reference from the console app to the library
    dotnet add "$appName/$appName.csproj" reference "$libName/$libName.csproj"

    # Add the console app project to the solution
    dotnet sln add "$appName/$appName.csproj"
}

# Run the initialization function to create the solution and its projects
Initialize-CSharpSolution
`;

const scriptName = "Initialize-CSharpSolution.ps1";

export default function InitializeCSharpSolutionPsCode() {
  return (
    <PowerShellScriptBlock
      title={`scripts/windows/${scriptName}`}
      code={code}
      scriptName={scriptName}
      argsExample="-SolutionName EchoAppCSharp"
    />
  );
}
