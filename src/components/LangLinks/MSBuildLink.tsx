import React from "react";
import LangLink from "./LangLink";

type MSBuildLinkProps = {
  href: string;
};

export default function MSBuildLink({ href }: MSBuildLinkProps) {
  return (
    <LangLink
      href={href}
      src="https://upload.wikimedia.org/wikipedia/commons/b/bf/MSBuild_logo.png"
      alt="MSBuild"
      name="C#: MSBuild"
    />
  );
}
