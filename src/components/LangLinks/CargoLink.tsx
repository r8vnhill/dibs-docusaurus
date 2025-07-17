import React from "react";
import LangLink from "./LangLink";

type CargoLinkProps = {
  href: string;
};

export default function CargoLink({ href }: CargoLinkProps) {
  return (
    <LangLink
      href={href}
      src="https://doc.rust-lang.org/cargo/images/Cargo-Logo-Small.png"
      alt="Cargo"
      name="Rust: Cargo"
    />
  );
}
