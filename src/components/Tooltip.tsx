import React, { useState } from 'react';
import '../css/tooltip.css';

type TooltipProps = {
    text: string | React.ReactNode;
    children: React.ReactNode;
    highlight?: boolean;
};

const Tooltip: React.FC<TooltipProps> = ({ text, children, highlight = false }) => {
    const [visible, setVisible] = useState(false);

    return (
        <span
            className={`tooltip-container ${highlight ? 'highlight' : ''}`}
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
            {children}
            {visible && <span className="tooltip-text">{text}</span>}
        </span>
    );
};

export default Tooltip;
