import { FC, PropsWithChildren } from 'react';
import './ProCons.css';
import React from 'react';

interface SectionProps extends PropsWithChildren {
  title?: string;
  className: string;
  defaultTitle: string;
}

const Section: FC<SectionProps> = ({ title, children, className, defaultTitle }) => (
  <div className={className}>
    <h3>{title ?? defaultTitle}</h3>
    {children}
  </div>
);

export const ProCons: FC<PropsWithChildren> = ({ children }) => (
  <div className="procons-container">{children}</div>
);

export const Pros: FC<PropsWithChildren<{ title?: string }>> = ({ title, children }) => (
  <Section
    className="procons__section--pros"
    title={title}
    defaultTitle="Beneficios"
  >
    {children}
  </Section>
);

export const Cons: FC<PropsWithChildren<{ title?: string }>> = ({ title, children }) => (
  <Section
    className="procons__section--cons"
    title={title}
    defaultTitle="Limitaciones"
  >
    {children}
  </Section>
);
