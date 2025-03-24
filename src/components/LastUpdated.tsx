import React from 'react';
import {useDoc} from '@docusaurus/plugin-content-docs/client';

export default function LastUpdated() {
  const {metadata} = useDoc();
  if (!metadata) return null;

  const {lastUpdatedAt} = metadata;
  console.log('Raw lastUpdatedAt seconds:', lastUpdatedAt);

  // Check the JS date object:
  const date = new Date(lastUpdatedAt);
  console.log('Date object interpretation:', date.toISOString());

  const formatted = date.toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  console.log('Formatted string:', formatted);

  return <p>Última modificación: {formatted}</p>;
}
