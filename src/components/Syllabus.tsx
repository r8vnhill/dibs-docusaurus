// src/components/Syllabus.tsx
import React, { useState } from 'react';

type CourseSection = {
    title: string;
    contents: string[];
};

const sections: CourseSection[] = [
    {
        title: "Introducción",
        contents: [
            "Sintaxis de lenguaje de programación",
            "Void-safety",
            "Build systems",
            "Herramientas de análisis estático",
        ],
    },
    {
        title: "Programación orientada a objetos",
        contents: [
            "Repaso de objetos, clases e interfaces",
            "Clases abiertas y cerradas/finales",
            "Funciones de extensión",
            "Registros (data classes)",
            "Enumeraciones",
            "Clases selladas",
            "Herencia múltiple",
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
                            style={{ cursor: 'pointer' }}
                        >
                            {section.title}
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
