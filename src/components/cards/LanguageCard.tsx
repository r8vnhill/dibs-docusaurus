import React from "react";
import "../../css/language-card.css";

interface LanguageCardProps {
  logoSrc: string;
  language: string;
  link: string;
}

export const LanguageCard: React.FC<LanguageCardProps> = ({
  logoSrc,
  language,
  link,
}) => {
  return (
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
};

export const JavaCard = ({ link }) => {
  return (
    <LanguageCard
      logoSrc="https://www.svgrepo.com/show/184143/java.svg"
      language="Java"
      link={link}
    />
  );
};

export const JavaScriptCard = ({ link }) => {
  return <LanguageCard
    logoSrc="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg"
    language="JavaScript"
    link={link}
  />
}

export const PythonCard = ({ link }) => {
  return <LanguageCard
    logoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png"
    language="Python"
    link={link}
  />
}

export const ScalaCard = ({ link }) => {
  return <LanguageCard
        logoSrc="https://www.svgrepo.com/show/354313/scala.svg"
        language="Scala"
        link={link}
    />
}

export const ScalaTestCard = ({ link }) => {
  return <LanguageCard
        logoSrc="https://www.svgrepo.com/show/354313/scala.svg"
        language="Scala: ScalaTest"
        link={link}
    />
}

export const MSBuildCard = ({ link }) => {
  return <LanguageCard
    logoSrc="https://upload.wikimedia.org/wikipedia/commons/b/bf/MSBuild_logo.png"
    language=".NET: MSBuild"
    link={link}
  />
}

export const AntCard = ({ link }) => {
  return <LanguageCard
    logoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Apache-Ant-logo.svg/2560px-Apache-Ant-logo.svg.png"
    language="JVM: Apache Ant"
    link={link}
  />
}

export const RakeCard = ({ link }) => {
  return <LanguageCard
    logoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Ruby_logo.svg/240px-Ruby_logo.svg.png"
    language="Ruby: Rake"
    link={link}
  />
}

export const TypeScriptCard = ({ link }) => {
  return <LanguageCard
    logoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
    language="TypeScript"
    link={link}
  />
}

export const RSpecCard = ({ link }) => {
  return <LanguageCard
    logoSrc="https://www.svgrepo.com/show/374053/rspec.svg"
    language="Ruby: RSpec"
    link={link}
  />
}

export const HaskellCard = ({ link }) => {
  return <LanguageCard
    logoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Haskell-Logo.svg/1200px-Haskell-Logo.svg.png"
    language="Haskell"
    link={link}
  />
}

export const QuickCheckCard = ({ link }) => {
  return <LanguageCard
    logoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Haskell-Logo.svg/1200px-Haskell-Logo.svg.png"
    language="Haskell: QuickCheck"
    link={link}
  />
}

export const SwiftCard = ({ link }) => {
  return <LanguageCard
    logoSrc="https://cdn-icons-png.flaticon.com/512/3984/3984314.png"
    language="Swift"
    link={link}
  />
}

export const RustCard = ({ link }) => {
  return <LanguageCard
    logoSrc="https://www.svgrepo.com/show/306688/rust.svg"
    language="Rust"
    link={link}
  />
}

export const BazelCard = ({ link }) => {
  return <LanguageCard
    logoSrc="https://upload.wikimedia.org/wikipedia/en/7/7d/Bazel_logo.svg"
    language="Multilenguaje: Bazel"
    link={link}
  />
}

export const AssertJCard = ({ link }) => {
  return <LanguageCard
    logoSrc="https://www.svgrepo.com/show/184143/java.svg"
    language="JVM: AssertJ"
    link={link}
  />
}

export const CMakeCard = ({ link }) => {
  return <LanguageCard
    logoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Cmake.svg/1200px-Cmake.svg.png"
    language="C/C++: CMake"
    link={link}
  />
}

export const MavenCard = ({ link }) => {
  return <LanguageCard
    logoSrc="https://static-00.iconduck.com/assets.00/file-type-maven-icon-192x256-wb8b12w6.png"
    language="JVM: Maven"
    link={link}
  />
}

export const BuckCard = ({ link }) => {
  return <LanguageCard
    logoSrc="https://www.svgrepo.com/show/373479/buckbuild.svg"
    language="Multilenguaje: Buck"
    link={link}
  />
}

export const CSharpCard = ({ link }) => {
  return <LanguageCard
    logoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1200px-Logo_C_sharp.svg.png"
    language="C#"
    link={link}
  />
}

export const EiffelCard = ({ link }) => {
  return <LanguageCard
    logoSrc="/img/Eiffel_logo.svg.png"
    language="Eiffel"
    link={link}
  />
}

export const JqwikCard = ({ link }) => {
  return (
    <LanguageCard
      logoSrc="https://www.svgrepo.com/show/184143/java.svg"
      language="JVM: jqwik"
      link={link}
    />
  );
};

export const JUnitCard = ({ link }) => {
  return <LanguageCard
    logoSrc="https://junit.org/junit5/assets/img/junit5-logo.png"
    language="JVM: JUnit 5"
    link={link}
  />
}

export const CppCard = ({ link }) => {
  return <LanguageCard
    logoSrc="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1822px-ISO_C%2B%2B_Logo.svg.png"
    language="C++"
    link={link}
  />
}

export const PoetryCard = ({ link }) => {
  return <LanguageCard
    logoSrc="https://avatars.githubusercontent.com/u/48722593?s=280&v=4"
    language="Python: Poetry"
    link={link}
  />
}

export const HypothesisCard = ({ link }) => {
  return <LanguageCard
    logoSrc="https://hypothesis.readthedocs.io/en/latest/_static/dragonfly-rainbow-150w.svg"
    language="Python: Hypothesis"
    link={link}
  />
}

export const JestCard = ({ link }) => {
  return <LanguageCard
    logoSrc="https://www.svgrepo.com/show/353930/jest.svg"
    language="JavaScript: Jest"
    link={link}
  />
}
