import React, { useEffect, useState } from 'react';

function calculateReadingTime(html) {
    const wordsPerMinute = 250;

    // Eliminar saltos de línea y reducir espacios para evitar falsos positivos
    const cleanHtml = html.replace(/\n/g, ' ').trim();

    // Separar todo en palabras, incluyendo nombres de etiquetas, atributos y texto
    const words = cleanHtml.split(/\s+/).length;

    // Calcular el tiempo de lectura basado en palabras por minuto
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
}

const ReadingTime = () => {
    const [readingTime, setReadingTime] = useState(0);

    useEffect(() => {
        const pageContentElement = document.querySelector('.theme-doc-markdown');

        if (pageContentElement instanceof HTMLElement) {
            // Usar innerHTML para obtener todo el contenido HTML (incluyendo etiquetas y atributos)
            const pageContent = pageContentElement.innerHTML || '';
            const minutes = calculateReadingTime(pageContent);
            setReadingTime(minutes);
        }
    }, []);

    return <p>⏱ Tiempo de lectura: {readingTime} {readingTime === 1 ? 'minuto' : 'minutos'}</p>;
};

export default ReadingTime;
