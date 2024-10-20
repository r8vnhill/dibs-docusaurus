import React from "react";
import CodeBlock from "@theme/CodeBlock";

/**
 * Props for setting up a module in a React component.
 *
 * The `SetupModuleProps` interface defines the properties required for a setup module component.
 * It includes `children` to render nested content, and `module` and `task` to specify the context
 * of the module and task being set up.
 */
interface SetupModuleProps {
  /**
   * The nested React components or elements to be rendered within this component.
   */
  children: React.ReactNode;
  /**
   * The name of the module that is being set up.
   */
  module: string;
  /**
   * The name of the task within the module that is being set up.
   */
  task: string;
}

/**
 * A React component that sets up a module for a lesson.
 *
 * The `ModuleSetup` component provides a structured way to guide users through the process of
 * setting up a module in a project.It displays instructions for applying a plugin, running a task
 * using Gradle, and updating the `settings.gradle.kts` file. The component also renders any
 * children elements passed to it.
 *
 * This component takes `SetupModuleProps` as its props, including the name of the module, the task
 * to be executed, and any nested content to be displayed.
 *
 * @param SetupModuleProps The props for this component, including:
 * - `children`: Nested React nodes to display inside the component.
 * - `module`: The name of the plugin module that should be applied.
 * - `task`: The name of the task to be executed using Gradle.
 */
class ModuleSetup extends React.Component<SetupModuleProps> {
  render() {
    return (
      <details>
        <summary>Comencemos por crear un módulo para la lección...</summary>
        <br />
        {this.props.children}
        <p>
          Preocúpate de que el plugin <code>{this.props.module}</code> esté
          aplicado en el archivo <code>build.gradle.kts</code> de tu proyecto.
        </p>
        <CodeBlock language="bash">{`./gradlew ${this.props.task}`}</CodeBlock>
        <p>
          Recuerda agregar el nuevo módulo al archivo{" "}
          <code>settings.gradle.kts</code>.
        </p>
      </details>
    );
  }
}

export default ModuleSetup;
