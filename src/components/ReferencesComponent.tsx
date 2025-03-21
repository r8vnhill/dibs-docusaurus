import React from "react";

interface Reference {
  id?: string;
  title: string;
  url?: string;
  type: "web" | "video" | "book" | "article" | "paper";
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
  additionalReferences?: Reference[];
}

const renderTypeEmoji = (type: Reference["type"]) => {
  switch (type) {
    case "web":
      return "🌐";
    case "video":
      return "📹";
    case "book":
      return "📚";
    case "article":
      return "📰";
    case "paper":
      return "📄";
    default:
      return "";
  }
};

const sortBooks = (a: Reference, b: Reference) => {
  const authorA = (a.author || "").toLowerCase();
  const authorB = (b.author || "").toLowerCase();
  const yearA = a.year ? parseInt(a.year, 10) : 0;
  const yearB = b.year ? parseInt(b.year, 10) : 0;
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
  const siteA = (a.siteOrAuthor || "").toLowerCase();
  const siteB = (b.siteOrAuthor || "").toLowerCase();
  const titleA = a.title.toLowerCase();
  const titleB = b.title.toLowerCase();

  if (siteA < siteB) return -1;
  if (siteA > siteB) return 1;
  if (titleA < titleB) return -1;
  if (titleA > titleB) return 1;
  return 0;
};

const emptyCategories = {
  books: [] as Reference[],
  web: [] as Reference[],
  video: [] as Reference[],
  article: [] as Reference[],
  paper: [] as Reference[],
};

/**
 * Assigns missing IDs and categorizes references by type.
 */
const categorizeReferences = (refs: Reference[]) => {
  const referencesWithId = refs.map((ref, i) => {
    if (!ref.id) {
      ref.id = `ref-${i}`;
    }
    return ref;
  });

  return {
    books: referencesWithId.filter((r) => r.type === "book").sort(sortBooks),
    web: referencesWithId
      .filter((r) => r.type === "web")
      .sort(sortWebReferences),
    video: referencesWithId.filter((r) => r.type === "video"),
    article: referencesWithId.filter((r) => r.type === "article"),
    paper: referencesWithId.filter((r) => r.type === "paper"),
  };
};

const renderReference = (reference: Reference) => {
  const {
    id,
    type,
    title,
    url,
    year,
    author,
    bookTitle,
    edition,
    pages,
    publisher,
    accessedDate,
    publishedDate,
  } = reference;

  const emoji = renderTypeEmoji(type);

  if (type === "book") {
    return (
      <li key={id}>
        {emoji} <em>"{title}"</em>.{" "}
        {year && `(${year}). ` /* e.g. "(2020). " */}
        {author && `${author}, `}
        {bookTitle && (
          <>
            en <em>{bookTitle},</em>{" "}
          </>
        )}
        {(edition || pages) && (
          <>
            {"("}
            {edition && `${edition}, `}
            {pages && `pp. ${pages}.`}
            {") "}
          </>
        )}
        {publisher && `${publisher}. `}
      </li>
    );
  }

  if (type === "article") {
    return (
      <li key={id}>
        {emoji} <em>"{title}."</em> {author && `${author}, `}
        {publishedDate && `${publishedDate}. `}
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </a>
        )}
      </li>
    );
  }

  if (type === "web") {
    return (
      <li key={id}>
        {emoji} <em>"{title}."</em>{" "}
        {accessedDate && `Accedido: ${accessedDate}. `}
        {[`[En línea]. Disponible en: `]}
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </a>
        )}
      </li>
    );
  }

  if (type === "video") {
    return (
      <li key={id}>
        {emoji} <em>"{title}."</em> {year && `(${year}). `}
        {author && `${author}, `}
        {url && (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {url}
          </a>
        )}
      </li>
    );
  }

  if (type === "paper") {
    return (
      <li key={id}>
        {emoji} <em>"{title}."</em> {author && `${author}, `}
        {year && `(${year}). `}
        {publishedDate && `${publishedDate}. `}
      </li>
    );
  }

  // Default / fallback render:
  return (
    <li key={id}>
      {emoji}{" "}
      {url ? (
        <a href={url} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      ) : (
        title
      )}
    </li>
  );
};

const References: React.FC<ReferencesProps> = ({
  references,
  additionalReferences,
}) => {
  // If performance is a concern (large lists), use useMemo to avoid re-categorizing on every render
  const categorizedRefs = React.useMemo(
    () => categorizeReferences(references),
    [references]
  );
  const categorizedAdditionalRefs = React.useMemo(
    () =>
      additionalReferences
        ? categorizeReferences(additionalReferences)
        : emptyCategories,
    [additionalReferences]
  );

  const combinedReferences = [
    ...categorizedRefs.books,
    ...categorizedRefs.web,
    ...categorizedRefs.video,
    ...categorizedRefs.article,
    ...categorizedRefs.paper,
  ];

  const additionalCombinedReferences = [
    ...categorizedAdditionalRefs.books,
    ...categorizedAdditionalRefs.web,
    ...categorizedAdditionalRefs.video,
    ...categorizedAdditionalRefs.article,
    ...categorizedAdditionalRefs.paper,
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
