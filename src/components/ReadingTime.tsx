import React, { useEffect, useState } from 'react';

function calculateReadingTime(text) {
    const wordsPerMinute = 200; // Velocidad de lectura promedio
    const words = text.trim().split(/\s+/).length;
    const minutes = Math.ceil(words / wordsPerMinute);
    return minutes;
}

const ReadingTime = () => {
    const [readingTime, setReadingTime] = useState(0);

    useEffect(() => {
        const pageContentElement = document.querySelector('.theme-doc-markdown');

        if (pageContentElement instanceof HTMLElement) {
            const pageContent = pageContentElement.innerText || '';
            const minutes = calculateReadingTime(pageContent);
            setReadingTime(minutes); // Actualiza el estado con el tiempo de lectura calculado
        }
    }, []); // Solo ejecuta una vez después de que el componente se ha montado

    return <p>⏱ Tiempo de lectura: {readingTime} {readingTime === 1 ? 'minuto' : 'minutos'}</p>;
};

export default ReadingTime;
