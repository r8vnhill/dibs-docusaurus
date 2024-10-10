import Admonition from "@theme/Admonition";

export default function Explanation({ children }) {
  return <Admonition type="info" title="¿Qué acabamos de hacer?">
    {children}
  </Admonition>
}
