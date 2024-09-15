import Tooltip from './Tooltip';
import React from "react";

const DocumentationText: React.FC = () => (
    <p>
        Una buena documentación facilita el entendimiento y uso de la biblioteca por otrxs desarrolladorxs. Ahorra
        tiempo y recursos al reducir la necesidad de{' '}
        <Tooltip
            text="Todxs sabemos que el tiempo es dinero, y en una sociedad capitalista, el dinero es la prioridad número uno para las grandes corporaciones.">
            soporte y consultas frecuentes
        </Tooltip>
        , mejorando la adopción de la biblioteca, ya que los desarrolladores prefieren usar herramientas bien
        documentadas.
    </p>
);

export default DocumentationText;
