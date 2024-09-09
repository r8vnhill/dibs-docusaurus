import React from 'react';

interface Reference {
    id: string;
    title: string;
    url: string;
    type: 'web' | 'video' | 'book' | 'article' | 'paper';
    accessedDate?: string; // Agregar fecha de acceso para recursos web
    siteOrAuthor?: string; // Agregar el sitio o autor para los recursos web
}

interface ReferencesProps {
    references: Reference[];
}

const References: React.FC<ReferencesProps> = ({references}) => {
    const renderTypeLabel = (type: Reference['type']) => {
        switch (type) {
            case 'web':
                return '🌐 Web';
            case 'video':
                return '📹 Video';
            case 'book':
                return '📚 Book';
            case 'article':
                return '📰 Article';
            case 'paper':
                return '📄 Paper';
            default:
                return '';
        }
    };

    const renderReference = (reference: Reference) => {
        if (reference.type === 'web') {
            return (
                <li key={reference.id}>
                    <strong>{reference.title}.</strong> "{reference.siteOrAuthor}"
                    Accedido {reference.accessedDate}.{' '}
                    <a href={reference.url} target="_blank" rel="noopener noreferrer">
                        {reference.url}
                    </a>
                </li>
            );
        }

        // Otros tipos de recursos
        return (
            <li key={reference.id}>
                <strong>{renderTypeLabel(reference.type)}:</strong>{' '}
                <a href={reference.url} target="_blank" rel="noopener noreferrer">
                    {reference.title}
                </a>
            </li>
        );
    };

    return (
        <div className="references">
            <h3>Referencias</h3>
            <ul>
                {references.map(renderReference)}
            </ul>
        </div>
    );
};

export default References;
