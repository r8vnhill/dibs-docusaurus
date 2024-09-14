// src/components/Syllabus.tsx
import React, {useState} from 'react';

type CourseSection = {
    title: string;
    contents: string[];
};

const sections: CourseSection[] = [
    {
        title: "Introducción",
        contents: [
            "Introducción a bibliotecas de software",
            "Principios de código limpio y mantenible",
            "Sintaxis de lenguaje de programación",
            "Void-safety",
            "Repaso de programación orientada a objetos",
        ],
    },
    {
        title: "Build systems",
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
        title: "APIs funcionales",
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
        title: "Testing",
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
        title: "Colecciones",
        contents: [
            "Iterator pattern",
            "Colecciones inmutables",
            "Colecciones mutables",
            "Operaciones de colecciones",
        ]
    },
    {
        title: "APIs orientadas a objetos",
        contents: [
            "Clases abiertas y cerradas/finales",
            "Funciones de extensión",
            "Registros (data classes)",
            "Herencia múltiple",
            "Soluciones al problema del diamante",
        ],
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
