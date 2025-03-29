/**
 * Component for displaying a programming language or tool as a clickable card.
 *
 * Each card includes a logo and a label, and links to an external resource when clicked.
 * It is designed for use in a grid or gallery of technologies.
 *
 * ## Usage:
 * Use the exported cards directly or create your own via `createCard`.
 *
 * ### Example:
 * ```tsx
 * <JavaCard link="https://www.oracle.com/java/" />
 * <LanguageCard logoSrc="/img/custom.svg" language="MyLang" link="https://example.com" />
 * ```
 */

import React from "react";
import "../../css/language-card.css";

/**
 * Props for the [LanguageCard] component.
 *
 * @property logoSrc The URL of the logo image.
 * @property language The name of the language or tool.
 * @property link The external URL to navigate to when the card is clicked.
 */
interface LanguageCardProps {
  logoSrc: string;
  language: string;
  link: string;
}

/**
 * A visual card component representing a language or tool.
 *
 * Displays a logo and label inside a styled anchor tag, opening the link in a new tab.
 */
export const LanguageCard: React.FC<LanguageCardProps> = ({
  logoSrc,
  language,
  link,
}) => (
  <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="language-card"
  >
    <div className="language-card-logo-container">
      <img
        src={logoSrc}
        alt={`${language} logo`}
        className="language-card-logo"
      />
    </div>
    <span className="language-card-name">{language}</span>
  </a>
);

/**
 * Factory function that creates a configured [LanguageCard] component with fixed logo and label.
 *
 * @param logoSrc The URL of the logo image.
 * @param language The name of the language or tool.
 * @return A React component expecting a `link` prop.
 */
const createCard = (logoSrc: string, language: string) => {
  return ({ link }: { link: string }) => (
    <LanguageCard logoSrc={logoSrc} language={language} link={link} />
  );
};

// Exported pre-configured cards
export const JavaCard = createCard(
  "https://www.svgrepo.com/show/184143/java.svg",
  "Java"
);
export const JavaScriptCard = createCard(
  "https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg",
  "JavaScript"
);
export const PythonCard = createCard(
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png",
  "Python"
);
export const ScalaCard = createCard(
  "https://www.svgrepo.com/show/354313/scala.svg",
  "Scala"
);
export const ScalaTestCard = createCard(
  "https://www.svgrepo.com/show/354313/scala.svg",
  "Scala: ScalaTest"
);
export const MSBuildCard = createCard(
  "https://upload.wikimedia.org/wikipedia/commons/b/bf/MSBuild_logo.png",
  ".NET: MSBuild"
);
export const AntCard = createCard(
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Apache-Ant-logo.svg/2560px-Apache-Ant-logo.svg.png",
  "JVM: Apache Ant"
);
export const RakeCard = createCard(
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/240px-Ruby_logo.svg.png",
  "Ruby: Rake"
);
export const TypeScriptCard = createCard(
  "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png",
  "TypeScript"
);
export const RSpecCard = createCard(
  "https://www.svgrepo.com/show/374053/rspec.svg",
  "Ruby: RSpec"
);
export const HaskellCard = createCard(
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Haskell-Logo.svg/1200px-Haskell-Logo.svg.png",
  "Haskell"
);
export const QuickCheckCard = createCard(
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Haskell-Logo.svg/1200px-Haskell-Logo.svg.png",
  "Haskell: QuickCheck"
);
export const SwiftCard = createCard(
  "https://cdn-icons-png.flaticon.com/512/3984/3984314.png",
  "Swift"
);
export const RustCard = createCard(
  "https://www.svgrepo.com/show/306688/rust.svg",
  "Rust"
);
export const BazelCard = createCard(
  "https://upload.wikimedia.org/wikipedia/en/7/7d/Bazel_logo.svg",
  "Multilenguaje: Bazel"
);
export const AssertJCard = createCard(
  "https://www.svgrepo.com/show/184143/java.svg",
  "JVM: AssertJ"
);
export const CMakeCard = createCard(
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Cmake.svg/1200px-Cmake.svg.png",
  "C/C++: CMake"
);
export const MavenCard = createCard(
  "https://static-00.iconduck.com/assets.00/file-type-maven-icon-192x256-wb8b12w6.png",
  "JVM: Maven"
);
export const BuckCard = createCard(
  "https://www.svgrepo.com/show/373479/buckbuild.svg",
  "Multilenguaje: Buck"
);
export const CSharpCard = createCard(
  "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1200px-Logo_C_sharp.svg.png",
  "C#"
);
export const EiffelCard = createCard("/img/Eiffel_logo.svg.png", "Eiffel");
export const JqwikCard = createCard(
  "https://www.svgrepo.com/show/184143/java.svg",
  "JVM: jqwik"
);
export const JUnitCard = createCard(
  "https://junit.org/junit5/assets/img/junit5-logo.png",
  "JVM: JUnit 5"
);
export const CppCard = createCard(
  "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png",
  "C++"
);
export const PoetryCard = createCard(
  "https://avatars.githubusercontent.com/u/48722593?s=280&v=4",
  "Python: Poetry"
);
export const HypothesisCard = createCard(
  "https://hypothesis.readthedocs.io/en/latest/_static/dragonfly-rainbow-150w.svg",
  "Python: Hypothesis"
);
export const JestCard = createCard(
  "https://www.svgrepo.com/show/353930/jest.svg",
  "JavaScript: Jest"
);
export const PytestCard = createCard(
  "https://docs.pytest.org/en/stable/_static/pytest1.png",
  "Python: Pytest"
);
export const PdmCard = createCard(
  "https://daobook.github.io/pdm/assets/logo.svg",
  "Python: PDM"
);
export const NxCard = createCard(
  "https://miro.medium.com/v2/resize:fit:1048/0*tiFxxz3C6clSRAbf.png",
  "JavaScript/TypeScript: Nx"
);
