import Admonition from "@theme/Admonition";
import React from "react";

export default function Explanation({ children }) {
  return <Admonition type="info" title="¿Qué acabamos de hacer?">
    {children}
  </Admonition>
}
