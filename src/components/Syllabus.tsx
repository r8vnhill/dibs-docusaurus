// src/components/Syllabus.tsx
import React, {useState} from 'react';

type CourseSection = {
    title: string;
    contents: string[];
};

const sections: CourseSection[] = [
    {
        title: "Introducción", // 2 semanas   total: 2/15 semanas
        contents: [
            "Introducción a bibliotecas de software",
            "Principios de código limpio y mantenible",
            "Sintaxis de lenguaje de programación",
            "Void-safety",
            "Repaso de programación orientada a objetos",
            "Repaso de generics",
            "Declaration-site variance",
            "Use-site variance",
        ],
    },
    {
        title: "Build systems", // 3 semanas    total: 5/15 semanas
        contents: [
            "Introducción a build systems",
            "Manejo de dependencias",
            "Automatización de tareas",
            "Compilación y empaquetado de aplicaciones",
            "Compilación y empaquetado de bibliotecas",
            "Publicación de bibliotecas",
        ],
    },
    {
        title: "Programación funcional",    // 2.5 semanas    total: 7.5/15 semanas
        contents: [
            "Funciones puras y efectos secundarios",
            "Funciones de alto orden",
            "Funciones lambda",
            "Tipos de datos algebráicos",
            "Optimización de funciones recursivas",
            "Mónadas"
        ],
    },
    {
        title: "Testing",   // 3 semanas    total: 10.5/15 semanas
        contents: [
            "Repaso de testing",
            "Data-driven testing",
            "Aserciones avanzadas",
            "Property-based testing",
            "Generadores arbitrarios",
            "Técnicas de desarrollo de propiedades",
            "Shrinking"
        ],
    },
    {
        title: "Programación orientada a objetos",  // 2 semanas    total: 12.5/15 semanas
        contents: [
            "Clases abiertas y cerradas/finales",
            "Métodos de extensión",
            "Herencia múltiple",
            "Soluciones al problema del diamante",
            "Tipos anónimos",
        ],
    },
    {
        title: "Colecciones",   // 1 semana    total: 13.5/15 semanas
        contents: [
            "Iterator pattern",
            "Colecciones inmutables",
            "Colecciones mutables",
            "Operaciones de colecciones",
        ]
    },
];

const Syllabus: React.FC = () => {
    const [visibleSections, setVisibleSections] = useState<{ [key: number]: boolean }>({});

    const toggleVisibility = (index: number) => {
        setVisibleSections((prevState) => ({
            ...prevState,
            [index]: !prevState[index],
        }));
    };

    return (
        <section className="syllabus">
            <h2>Contenidos del curso (haz clic en los títulos para ver los detalles de cada sección)</h2>
            <ol>
                {sections.map((section, index) => (
                    <li key={index}>
                        <h3
                            onClick={() => toggleVisibility(index)}
                            style={{cursor: 'pointer'}}
                        >
                            {`Unidad ${index + 1}: ${section.title}`}
                        </h3>
                        {visibleSections[index] && (
                            <ol>
                                {section.contents.map((lesson, lessonIndex) => (
                                    <li key={lessonIndex}>{lesson}</li>
                                ))}
                            </ol>
                        )}
                    </li>
                ))}
            </ol>
        </section>
    );
};

export default Syllabus;
