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
