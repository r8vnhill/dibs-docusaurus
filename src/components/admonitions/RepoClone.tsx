import Admonition from "@theme/Admonition";
import CodeBlock from "@theme/CodeBlock";

export default function RepoClone({ repoName, groupId }) {
  return (
    <Admonition
      type="note"
      title={
        <>
          Si quieres seguir el código del tutorial puedes comenzar desde{" "}
          <a
            href={`https://github.com/r8vnhill/${repoName}/tree/base`}
            target="_blank"
            rel="noopener noreferrer"
          >
            este punto
          </a>
        </>
      }
    >
      <p>
        Si tienes <code>gh</code> instalado, puedes obtener el código haciendo:
      </p>
      <CodeBlock language="bash">{`gh repo clone r8vnhill/${repoName}
cd ${repoName} || exit
git checkout base`}</CodeBlock>
      <p>
        Si quieres tener tu propia copia del código, puedes hacer un fork del
        repositorio y clonarlo desde tu cuenta de GitHub.
      </p>
      <CodeBlock language="bash">{`gh repo fork r8vnhill/${repoName}
cd ${repoName} || exit
git checkout --track origin/base`}</CodeBlock>
      <Admonition
        type="tip"
        title={
          <>
            Cambia la propiedad <code>group</code> en{" "}
            <code>gradle.properties</code>
          </>
        }
      >
        Recuerda cambiar la propiedad <code>{groupId}.group</code> en el archivo <code>gradle.properties</code> por tu nombre de dominio.
      </Admonition>
    </Admonition>
  );
}
