import React, { useEffect, useState } from 'react';

function calculateReadingTime(html) {
    const wordsPerMinute = 350;
    const cleanHtml = html.replace(/\n/g, ' ').trim();
    const words = cleanHtml.split(/\s+/).length;
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

    return <>
        <p>
            ⏱ Dedicación recomendada: {readingTime} {readingTime === 1 ? 'minuto' : 'minutos'}<br/>
            Esto considera la lectura completa del contenido, incluyendo todas las pestañas, ejemplos y ejercicios.
        </p>
        <hr/>
    </>;
};

export default ReadingTime;
