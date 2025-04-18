import React from "react";
import CodeBlock from "@theme/CodeBlock";
import Explanation from "./admonitions/Explanation";
import Admonition from "@theme/Admonition";

export default function ScriptSetup({
  moduleName,
  repo,
  branch = "main",
}: {
  moduleName: string;
  repo: string;
  branch?: string;
}) {
  const path = `scripts/windows/${moduleName}.psm1`;
  const rawUrl = `https://raw.githubusercontent.com/r8vnhill/${repo}/refs/heads/${branch}/${path}`;

  return (
    <>
      <Admonition type="tip" title="Be lazy">
        <p>
          Te recomendamos descargar el script directamente desde tu terminal:
        </p>
        <CodeBlock
          language="powershell"
          title="Desde tu terminal"
          showLineNumbers
        >
          {`$path = '${path}'; \`
md (Split-Path $path) -f > $null; \`
iwr "https://raw.githubusercontent.com/r8vnhill/${repo}/refs/heads/${branch}/$path" \`
    -OutFile $path`}
        </CodeBlock>

        <Explanation>
          <ul>
            <li>
              <code>md</code> (<code>New-Item -ItemType Directory</code>): Crea
              el directorio <code>scripts/windows</code> si aún no existe.
              <ul>
                <li>
                  <code>-f</code> (<code>-Force</code>): Ignora errores si el
                  directorio ya existe.
                </li>
                <li>
                  <code>&gt; $null</code>: Redirige la salida para evitar
                  mensajes innecesarios.
                </li>
              </ul>
            </li>
            <li>
              <code>iwr</code> (<code>Invoke-WebRequest</code>): Descarga el
              script desde GitHub.
              <ul>
                <li>
                  <code>-OutFile</code>: Especifica dónde guardar el archivo.
                </li>
              </ul>
            </li>
          </ul>
        </Explanation>
      </Admonition>

      <p>
        Ahora puedes hacer las funciones del script disponibles en tu terminal
        de PowerShell:
      </p>
      <CodeBlock
        language="powershell"
        title="Desde tu terminal"
        showLineNumbers
      >
        {`Import-Module .\\scripts\\windows\\${moduleName}.psm1
# Y ver la documentación del comando que importamos:
Get-Help ${moduleName} -Examples`}
      </CodeBlock>

      <p>Y si quieres eliminar el comando del scope de tu terminal:</p>
      <CodeBlock
        language="powershell"
        title="Desde tu terminal"
        showLineNumbers
      >
        {`Remove-Module ${moduleName}`}
      </CodeBlock>

      <Admonition type="tip" title="¿Por qué desasociar el comando?">
        <p>
          Al desasociar el comando, evitas que permanezca en el scope de tu
          terminal, lo que puede ayudar a prevenir conflictos con otros comandos
          o scripts con el mismo nombre.
        </p>
      </Admonition>
    </>
  );
}
