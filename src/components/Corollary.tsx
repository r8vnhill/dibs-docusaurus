// src/components/Corollary.tsx
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

type CorollaryProps = {
    title?: string;
    children: React.ReactNode;
};

const Corollary: React.FC<CorollaryProps> = ({ title = "Corolario", children }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleExpansion = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="corollary">
            <div className="corollary-header" onClick={toggleExpansion}>
                <h4>Corolario</h4>
                {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {isExpanded && <div className="corollary-content">{children}</div>}
        </div>
    );
};

export default Corollary;
