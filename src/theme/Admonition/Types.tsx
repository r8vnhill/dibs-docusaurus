import type AdmonitionTypes from '@theme/Admonition/Types';
import Explanation from './Type/Explanation';
import Warning from './Type/Warning';
import Tip from './Type/Tip';
import Danger from './Type/Danger/Danger';
import Note from './Type/Note';
import Important from './Type/Important';
import Info from './Type/Info';
import Question from './Type/Question';
import Exercise from './Type/Exercise';
import Solution from './Type/Solution';
import More from './Type/More/More';
import Definition from './Type/Definition/Definition';

const admonitionTypes: typeof AdmonitionTypes = {
  note: Note,
  tip: Tip,
  info: Info,
  warning: Warning,
  danger: Danger,
  question: Question,
  important: Important,
  explanation: Explanation,
  exercise: Exercise,
  solution: Solution,
  more: More,
  definition: Definition
};

// Undocumented legacy admonition type aliases
// Provide hardcoded/untranslated retrocompatible label
// See also https://github.com/facebook/docusaurus/issues/7767
const admonitionAliases: typeof AdmonitionTypes = {
  
};

export default {
  ...admonitionTypes,
  ...admonitionAliases,
};
