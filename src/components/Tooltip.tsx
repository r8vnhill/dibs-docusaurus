// Tooltip.tsx
import React, { useState } from 'react';
import '../css/tooltip.css';

type TooltipProps = {
    text: string;
    children: React.ReactNode;
};

const Tooltip: React.FC<TooltipProps> = ({ text, children }) => {
    const [visible, setVisible] = useState(false);

    return (
        <span
            className="tooltip-container"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
        >
      {children}
            {visible && <span className="tooltip-text">{text}</span>}
    </span>
    );
};

export default Tooltip;
