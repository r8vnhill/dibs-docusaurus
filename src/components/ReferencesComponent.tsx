import React from 'react';

interface Reference {
    id?: string; // The ID can be optional
    title: string; // The title of the reference
    url?: string; // The URL is optional for books
    type: 'web' | 'video' | 'book' | 'article' | 'paper'; // Types of references
    accessedDate?: string; // Accessed date for web resources
    publishedDate?: string; // Published date for web resources
    siteOrAuthor?: string; // Site or author for web resources or books
    bookTitle?: string; // Title of the book (for book references)
    pages?: string; // Specific pages in the book
    location?: string; // Location of the publisher (for books)
    publisher?: string; // Publisher of the book
    year?: string; // Year of publication
    author?: string; // Author of the book
}

interface ReferencesProps {
    references: Reference[]; // Array of reference objects
}

/**
 * Renders an emoji that represents the type of reference.
 *
 * @param type - The type of reference (e.g., 'web', 'video', 'book', etc.)
 * @returns A string representing the emoji for the given type.
 */
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

/**
 * Assigns an automatic ID to the reference if it's missing.
 *
 * @param reference - The reference object.
 * @param index - The index of the reference in the array.
 * @returns The reference with an ID assigned if it was missing.
 */
const assignIdIfMissing = (reference: Reference, index: number) => {
    if (!reference.id) {
        reference.id = `ref-${index}`;
    }
    return reference;
};

/**
 * Sorts book references by author, then by year, and finally by title.
 *
 * @param a - The first reference to compare.
 * @param b - The second reference to compare.
 * @returns A number indicating the sorting order.
 */
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

/**
 * Sorts web references by site/author and then by title.
 *
 * @param a - The first reference to compare.
 * @param b - The second reference to compare.
 * @returns A number indicating the sorting order.
 */
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

/**
 * Categorizes references by type (books, web, video, article, and paper).
 *
 * @param references - The array of references to categorize.
 * @returns An object containing categorized references.
 */
const categorizeReferences = (references: Reference[]) => ({
    books: references.filter(ref => ref.type === 'book').sort(sortBooks),
    web: references.filter(ref => ref.type === 'web').sort(sortWebReferences),
    video: references.filter(ref => ref.type === 'video'),
    article: references.filter(ref => ref.type === 'article'),
    paper: references.filter(ref => ref.type === 'paper'),
});

/**
 * Renders a reference in HTML format based on its type.
 *
 * @param reference - The reference object to render.
 * @returns A JSX element representing the rendered reference.
 */
const renderReference = (reference: Reference) => {
    if (reference.type === 'book') {
        return (
            <li key={reference.id}>
                {renderTypeEmoji(reference.type)}{' '}
                {reference.author && <strong>{reference.author}.</strong>} "{reference.title}".{' '}
                {reference.bookTitle && (
                    <>
                        En <em>{reference.bookTitle}</em>, {reference.pages}.{' '}
                    </>
                )}
                {reference.location && reference.publisher && `${reference.location}: ${reference.publisher}, `}
                {reference.year}.
            </li>
        );
    }

    if (reference.type === 'web') {
        return (
            <li key={reference.id}>
                {renderTypeEmoji(reference.type)}{' '}
                {reference.siteOrAuthor && <strong>{reference.siteOrAuthor}.</strong>} "{reference.title}"{' '}
                {reference.publishedDate && `En ${reference.siteOrAuthor} el ${reference.publishedDate}.`}{' '}
                {reference.accessedDate && `Accedido el ${reference.accessedDate}.`}{' '}
                {reference.url && (
                    <a href={reference.url} target="_blank" rel="noopener noreferrer">
                        {reference.url}
                    </a>
                )}
            </li>
        );
    }

    // Otros tipos de recursos
    return (
        <li key={reference.id}>
            {renderTypeEmoji(reference.type)}{' '}
            <a href={reference.url} target="_blank" rel="noopener noreferrer">
                {reference.title}
            </a>
        </li>
    );
};


/**
 * Renders a list of references categorized by type (books, web, video, article, and paper).
 *
 * @param references - The array of references to render.
 * @returns A JSX element displaying the categorized references.
 */
const References: React.FC<ReferencesProps> = ({ references }) => {
    const allReferences = categorizeReferences(
        references.map(assignIdIfMissing)
    );

    const combinedReferences = [
        ...allReferences.books,
        ...allReferences.web,
        ...allReferences.video,
        ...allReferences.article,
        ...allReferences.paper,
    ];

    return (
        <div className="references">
            <h3>References</h3>
            <ul>
                {combinedReferences.map(renderReference)}
            </ul>
        </div>
    );
};

export default References;
