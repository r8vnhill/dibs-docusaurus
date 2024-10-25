import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import CodeBlock from "@theme/CodeBlock";
import styles from "./ModuleSetup.module.css";
import Admonition from "@theme/Admonition";

interface SetupModuleProps {
  children: React.ReactNode;
  module: string;
  task: string;
}

const ModuleSetup: React.FC<SetupModuleProps> = ({
  children,
  module,
  task,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const animationStyles = useSpring({
    from: { maxHeight: 0, opacity: 0 },
    to: {
      maxHeight: isOpen ? 4000 : 0,
      opacity: isOpen ? 1 : 0,
    },
    config: { tension: 300, friction: 30 },
  });

  return (
    <div className={styles.container}>
      <button
        className={styles.summary}
        onClick={toggle}
        aria-expanded={isOpen}
      >
        Comencemos por crear un módulo para la lección...
      </button>
      <animated.div style={animationStyles} className={styles.content}>
        <div className={styles.innerContent}>
          <hr />
          <Admonition type="tip" title="Be lazy...">
            <p>Puedes ejecutar el siguiente comando para crear el módulo </p>
            <CodeBlock language="bash">{`./gradlew ${task}`}</CodeBlock>
          </Admonition>
          <p>
            Mientras se crean los archivos necesarios, puedes leer el código
            para saber qué está pasando.
          </p>
          {children}
          <p>
            Preocúpate de que el plugin <code>{module}</code> esté aplicado en
            el archivo <code>build.gradle.kts</code> de tu proyecto.
          </p>
          <CodeBlock language="bash">{`./gradlew ${task}`}</CodeBlock>
          <p>
            Preocúpate de que el nuevo módulo esté incluido en el archivo{" "}
            <code>settings.gradle.kts</code>.
          </p>
        </div>
      </animated.div>
    </div>
  );
};

export default ModuleSetup;
