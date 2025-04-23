import React from "react";

interface Props {
  children: React.ReactNode;
}

/**
 * Envuelve contenido que debe excluirse del cálculo de tiempo de lectura.
 * Equivale a aplicar la clase `.exclude-from-reading-time` al nodo HTML.
 */
const ExcludeFromReadingTime: React.FC<Props> = ({ children }) => {
  return <div className="exclude-from-reading-time">{children}</div>;
};

export default ExcludeFromReadingTime;
