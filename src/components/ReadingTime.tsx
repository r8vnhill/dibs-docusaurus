import React, { useEffect, useState } from 'react';

function calculateReadingTime(text: string, wordsPerMinute = 250): number {
    const words = text.trim().split(/\s+/).filter(Boolean).length;
    return Math.max(1, Math.ceil(words / wordsPerMinute));
}

interface ReadingTimeProps {
    multiplier?: number;
}

const ReadingTime: React.FC<ReadingTimeProps> = ({ multiplier = 1.5 }) => {
    const [readingTime, setReadingTime] = useState(0);

    useEffect(() => {
        const container = document.querySelector('.theme-doc-markdown');
        if (!(container instanceof HTMLElement)) return;

        const clone = container.cloneNode(true) as HTMLElement;

        clone.querySelectorAll('details:not([open]), .exclude-from-reading-time')
            .forEach(el => el.remove());

        const text = clone.textContent ?? '';
        const minutes = calculateReadingTime(text);
        setReadingTime(Math.ceil(minutes * multiplier));
    }, [multiplier]);

    return (
        <>
            <p>
                ⏱ Dedicación recomendada: {readingTime} {readingTime === 1 ? 'minuto' : 'minutos'}<br />
                Esto considera el contenido visible y relevante, e ignora texto colapsado o marcado como opcional.
            </p>
            <hr />
        </>
    );
};

export default ReadingTime;
