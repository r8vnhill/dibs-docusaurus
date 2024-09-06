// src/components/Definition.tsx
import React from 'react';

type DefinitionProps = {
    title: string;
    children: React.ReactNode;
};

const Definition: React.FC<DefinitionProps> = ({ title, children }) => (
    <div className="definition">
        <h4>{title}</h4>
        <p>{children}</p>
    </div>
);

export default Definition;
