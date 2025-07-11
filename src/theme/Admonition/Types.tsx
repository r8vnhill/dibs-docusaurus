import React from 'react';
import AdmonitionTypeNote from '@theme/Admonition/Type/Note';
import AdmonitionTypeInfo from '@theme/Admonition/Type/Info';
import AdmonitionTypeCaution from '@theme/Admonition/Type/Caution';
import type AdmonitionTypes from '@theme/Admonition/Types';
import Explanation from './Type/Explanation';
import Warning from './Type/Warning';
import Tip from './Type/Tip';
import Danger from './Type/Danger';

const admonitionTypes: typeof AdmonitionTypes = {
  note: AdmonitionTypeNote,
  tip: Tip,
  info: AdmonitionTypeInfo,
  warning: Warning,
  danger: Danger,
  explanation: Explanation,
};

// Undocumented legacy admonition type aliases
// Provide hardcoded/untranslated retrocompatible label
// See also https://github.com/facebook/docusaurus/issues/7767
const admonitionAliases: typeof AdmonitionTypes = {
  secondary: (props) => <AdmonitionTypeNote title="secondary" {...props} />,
  important: (props) => <AdmonitionTypeInfo title="important" {...props} />,
  success: (props) => <Tip title="success" {...props} />,
  caution: AdmonitionTypeCaution,
};

export default {
  ...admonitionTypes,
  ...admonitionAliases,
};
