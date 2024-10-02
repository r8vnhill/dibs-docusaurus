import React from 'react';

interface Reference {
    id?: string;
    title: string;
    url?: string;
    type: 'web' | 'video' | 'book' | 'article' | 'paper';
    accessedDate?: string;
    publishedDate?: string;
    siteOrAuthor?: string;
    bookTitle?: string;
    pages?: string;
    location?: string;
    publisher?: string;
    year?: string;
    author?: string;
    edition?: string;
    series?: string;
}

interface ReferencesProps {
    references: Reference[];
    additionalReferences?: Reference[]; // Opcional
}

const renderTypeEmoji = (type: Reference['type']) => {
    switch (type) {
        case 'web':
            return '🌐';
        case 'video':
            return '📹';
        case 'book':
            return '📚';
        case 'article':
            return '📰';
        case 'paper':
            return '📄';
        default:
            return '';
    }
};

const assignIdIfMissing = (reference: Reference, index: number) => {
    if (!reference.id) {
        reference.id = `ref-${index}`;
    }
    return reference;
};

const sortBooks = (a: Reference, b: Reference) => {
    const authorA = (a.author || '').toLowerCase();
    const authorB = (b.author || '').toLowerCase();
    const yearA = a.year ? parseInt(a.year) : 0;
    const yearB = b.year ? parseInt(b.year) : 0;
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();

    if (authorA < authorB) return -1;
    if (authorA > authorB) return 1;
    if (yearA < yearB) return -1;
    if (yearA > yearB) return 1;
    if (titleA < titleB) return -1;
    if (titleA > titleB) return 1;
    return 0;
};

const sortWebReferences = (a: Reference, b: Reference) => {
    const authorA = (a.siteOrAuthor || '').toLowerCase();
    const authorB = (b.siteOrAuthor || '').toLowerCase();
    const titleA = a.title.toLowerCase();
    const titleB = b.title.toLowerCase();

    if (authorA < authorB) return -1;
    if (authorA > authorB) return 1;
    if (titleA < titleB) return -1;
    if (titleA > titleB) return 1;
    return 0;
};

const categorizeReferences = (references: Reference[]) => ({
    books: references.filter(ref => ref.type === 'book').sort(sortBooks),
    web: references.filter(ref => ref.type === 'web').sort(sortWebReferences),
    video: references.filter(ref => ref.type === 'video'),
    article: references.filter(ref => ref.type === 'article'),
    paper: references.filter(ref => ref.type === 'paper'),
});

const renderReference = (reference: Reference) => {
    if (reference.type === 'book') {
        return (
            <li key={reference.id}>
                {renderTypeEmoji(reference.type)}{' '}
                <em>"{reference.title}"</em>,{' '}
                {`${reference.author}, `}
                {reference.bookTitle && (<>en <em>{reference.bookTitle},</em></>)}{' '}
                {reference.edition && `${reference.edition}, `}
                {reference.series && `en ${reference.series}, `}
                {reference.location && reference.publisher && `${reference.location}: ${reference.publisher}, `}
                {reference.year},{' '}
                {reference.pages && `pp. ${reference.pages}`}.{' '}
            </li>
        );
    }

    if (reference.type === 'article') {
        return (
            <li key={reference.id}>
                {renderTypeEmoji(reference.type)}{' '}
                {<em>"{reference.title}."</em>}{' '}
                {`${reference.author}, `}
                {reference.publishedDate && `${reference.publishedDate}.`}{' '}
                {reference.url && (
                    <a href={reference.url} target="_blank" rel="noopener noreferrer">
                        {reference.url}
                    </a>
                )}
            </li>
        );
    }

    // [1] “Expect / Should - Chai”. Accedido: 1 de octubre de 2024. [En línea]. Disponible en: https://www.chaijs.com/api/bdd/#method_language-chains
    if (reference.type === 'web') {
        return (
            <li key={reference.id}>
                {renderTypeEmoji(reference.type)}{' '}
                {<em>"{reference.title}."</em>}{` `}
                {`Accedido: ${reference.accessedDate}.`}{` `}
                {`[En línea]. Disponible en: `}
                {reference.url && (
                    <a href={reference.url} target="_blank" rel="noopener noreferrer">
                        {reference.url}
                    </a>
                )}
            </li>
        );
    }

    return (
        <li key={reference.id}>
            {renderTypeEmoji(reference.type)}{' '}
            <a href={reference.url} target="_blank" rel="noopener noreferrer">
                {reference.title}
            </a>
        </li>
    );
};


const References: React.FC<ReferencesProps> = ({ references, additionalReferences }) => {
    const allRecommendedReferences = categorizeReferences(
        references.map(assignIdIfMissing)
    );

    const allAdditionalReferences = additionalReferences
        ? categorizeReferences(additionalReferences.map(assignIdIfMissing))
        : { books: [], web: [], video: [], article: [], paper: [] };

    const combinedReferences = [
        ...allRecommendedReferences.books,
        ...allRecommendedReferences.web,
        ...allRecommendedReferences.video,
        ...allRecommendedReferences.article,
        ...allRecommendedReferences.paper,
    ];

    const additionalCombinedReferences = [
        ...allAdditionalReferences.books,
        ...allAdditionalReferences.web,
        ...allAdditionalReferences.video,
        ...allAdditionalReferences.article,
        ...allAdditionalReferences.paper,
    ];

    return (
        <div className="references">
            <h3>Bibliografías Recomendadas</h3>
            <ul>{combinedReferences.map(renderReference)}</ul>

            {additionalCombinedReferences.length > 0 && (
                <>
                    <h3>Bibliografías Adicionales</h3>
                    <ul>{additionalCombinedReferences.map(renderReference)}</ul>
                </>
            )}
        </div>
    );
};

export default References;
