import React from "react";
import LangLink from "./LangLink";

type PythonLinkProps = {
  href: string;
};

export default function PythonLink({ href }: PythonLinkProps) {
  return (
    <LangLink
      href={href}
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/800px-Python-logo-notext.svg.png"
      alt="Python"
      name="Python"
    />
  );
}
