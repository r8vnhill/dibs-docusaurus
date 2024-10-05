import React from 'react';
import '../../css/language-card.css';

interface LanguageCardProps {
    logoSrc: string;
    language: string;
    link: string;
}

const LanguageCard: React.FC<LanguageCardProps> = ({ logoSrc, language, link }) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferrer" className="language-card">
            <div className="language-card-logo-container">
                <img src={logoSrc} alt={`${language} logo`} className="language-card-logo" />
            </div>
            <span className="language-card-name">{language}</span>
        </a>
    );
};

export default LanguageCard;
