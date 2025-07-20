import React from "react";
import ScriptBlock from "./ScriptBlock";

type CmdScriptBlockProps = {
  title?: string;
  code: string;
  scriptName: string;
  argsExample?: string;
  description?: React.ReactNode;
};

export default function CmdScriptBlock({
  code,
  scriptName,
  argsExample,
  description,
}: CmdScriptBlockProps) {
  return (
    <ScriptBlock
      code={code}
      scriptName={scriptName}
      language="cmd"
      argsExample={argsExample}
      description={description}
    />
  );
} 
