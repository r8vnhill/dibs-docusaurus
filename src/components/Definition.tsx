// src/components/Definition.tsx
import React from 'react';

type DefinitionProps = {
    title: string;
    children: React.ReactNode;
    id?: string;
};

const Definition: React.FC<DefinitionProps> = ({ title, children, id }) => (
    <div className="definition" id={id}> {}
        <h4>{title}</h4>
        <p>{children}</p>
    </div>
);

export default Definition;
