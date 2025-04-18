import Admonition from "@theme/Admonition";

export default function Glossary({ children }) {
  return <Admonition type="tip" title="Glosario rápido">
    {children}
  </Admonition>
}
