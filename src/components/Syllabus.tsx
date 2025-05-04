import React, { useState, useCallback } from "react";
import styles from "./Syllabus.module.css"; // Importar el CSS Module

type CourseSection = {
  title: string;
  contents: string[];
  id?: string; // Optional ID for each section
};

// Course content organized by thematic units
const sections: CourseSection[] = [
  {
    title: "Fundamentos de tipos y representaciones de datos",
    contents: [
      "Fundamentos del lenguaje de programación",
      "Tipos algebraicos: producto, suma, combinaciones",
      "Estructuras recursivas: listas, árboles, expresiones",
      "Tipos anónimos y estructurales",
      "Null / Void safety",
      "Option, Result y alternativas a null",
    ],
  },
  {
    title: "Tipos y estructuras de datos",
    contents: [
      "Introducción al desarrollo de bibliotecas de software",
      "Principios de código limpio y mantenible",
      "Principios de una buena documentación",
      "Lógica de negocio vs lógica de aplicación",
      "Diseño de funciones y APIs seguras",
    ],
  },
  {
    title: "Build systems y análisis estático",
    contents: [
      "Introducción a los build systems",
      "Automatización de tareas",
      "Análisis estático",
      "Generación de documentación",
      "Publicación de artefactos",
    ],
  },
  {
    title: "Testing",
    contents: [
      "Behavior-Driven Development (BDD)",
      "Testing declarativo (Matchers)",
      "Data driven testing",
      "Property-based testing",
      "Generadores arbitrarios",
      "Técnicas de diseño de propiedades",
      "Reducción de ejemplos (Shrinking)",
    ],
  },
  {
    title: "Funciones y modularidad",
    contents: [
      "Funciones como ciudadanos de primera clase",
      "Funciones de orden superior",
      "Lambdas y funciones anónimas",
      "Currying y composición parcial",
      "Funciones de extensión",
      "Sobrecarga de operadores",
      "Expresiones infijas",
      "Funciones y variables estáticas",
      "Objetos y companion objects",
      "Declaraciones top-level",
    ],
  },
  {
    title: "Jerarquías y genéricos",
    contents: [
      "Interfaces y herencia",
      "Resolución de métodos",
      "Polimorfismo paramétrico",
      "Acotaciones y contratos de tipo",
      "Variancia",
      "Diseño de colecciones y estructuras genéricas",
      "Genéricos en ADTs y APIs públicas",
    ],
  },
  {
    title: "Patrones de diseño multiparadigma",
    contents: [
      "Iterator pattern",
      "Delegation pattern",
      "Functor pattern",
      "Monad pattern",
      "Dependency injection",
      "Internal DSLs",
      "Builder pattern",
    ],
  },
  {
    title: "Errores y efectos",
    contents: [
      "Excepciones en tiempo de ejecución",
      "Tipos para errores: Result, Either",
      "Null safety vs excepciones",
      "Control de flujo con errores",
      "Efectos controlados y composición",
      "Funciones puras y efectos secundarios",
    ],
  },
];

/**
 * Interactive and accessible component to display a course syllabus.
 *
 * This component renders a list of course sections, each with a toggleable list of lessons.
 * It improves user experience by supporting both mouse and keyboard interaction, and includes ARIA attributes
 * to enhance accessibility.
 *
 * ## Features:
 * - Expand/collapse course units by clicking or pressing Enter/Space.
 * - Semantic and accessible structure using `<ol>` for ordered content and `role="button"` for headers.
 * - Clean separation of rendering logic with helper functions.
 *
 * ## Usage:
 * ```tsx
 * <Syllabus />
 * ```
 *
 * @component
 */

const Syllabus: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<
    Record<number, boolean>
  >({});

  /**
   * Toggles the visibility of a section by index.
   *
   * @param index The index of the section to toggle.
   */
  const toggleVisibility = useCallback((index: number) => {
    setVisibleSections((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  }, []);

  /**
   * Renders the list of lessons inside a section.
   *
   * @param lessons The list of lesson titles to render.
   * @returns A JSX ordered list of lesson items.
   */
  const renderLessonList = useCallback(
    (lessons: string[]) => (
      <ol>
        {lessons.map((lesson, i) => (
          <li key={i}>{lesson}</li>
        ))}
      </ol>
    ),
    []
  );

  /**
   * Renders a single course section with title and (if expanded) its contents.
   *
   * @param section The course section to render.
   * @param index The index of the section.
   * @returns A JSX list item containing the section title and optionally the lesson list.
   */
  const renderSection = useCallback(
    (section: CourseSection, index: number) => {
      const isVisible = !!visibleSections[index];

      return (
        <li key={section.id ?? index} className={styles.syllabus__section}>
          <button
            className={styles.syllabus__header}
            aria-expanded={isVisible}
            onClick={() => toggleVisibility(index)}
          >
            {`Unidad ${index + 1}: ${section.title}`}
          </button>
          {isVisible && (
            <div className={styles.syllabus__content}>
              {renderLessonList(section.contents)}
            </div>
          )}
        </li>
      );
    },
    [visibleSections, toggleVisibility, renderLessonList]
  );

  return (
    <section className="syllabus">
      <h2>
        Contenidos del curso (haz clic en los títulos para ver los detalles de
        cada sección)
      </h2>
      <ol>{sections.map((section, index) => renderSection(section, index))}</ol>
    </section>
  );
};

export default Syllabus;
