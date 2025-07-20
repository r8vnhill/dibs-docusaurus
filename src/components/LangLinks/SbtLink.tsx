import React from "react";
import LangLink from "./LangLink";

type SbtLinkProps = {
  href: string;
};

export default function SbtLink({ href }: SbtLinkProps) {
  return (
    <LangLink
      href={href}
      src="/img/logos/sbt-logo.png"
      alt="Sbt"
      name="Scala: Sbt"
    />
  );
}
