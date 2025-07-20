import React from "react";
import CodeBlock from "@theme/CodeBlock";

type ScriptLanguage = "bash" | "powershell" | "cmd";

type ScriptBlockProps = {
  code: string;
  scriptName: string;
  language: ScriptLanguage;
  argsExample?: string;
  description?: React.ReactNode;
};

export default function ScriptBlock({
  code,
  scriptName,
  language,
  argsExample,
  description,
}: ScriptBlockProps) {
  const command = (() => {
    const args = argsExample ? " " + argsExample : "";
    switch (language) {
      case "bash":
        return `source ${scriptName}${args}`;
      case "cmd":
        return `call ${scriptName}${args}`;
      case "powershell":
      default:
        return `${scriptName}${args}`;
    }
  })();

  return (
    <section>
      <CodeBlock language={language} showLineNumbers>
        {code}
      </CodeBlock>
      {description}
      <p>
        Guarda este script como <code>{scriptName}</code> y ejecútalo en la terminal:
      </p>
      <CodeBlock language={language} showLineNumbers>
        {command}
      </CodeBlock>
    </section>
  );
}
