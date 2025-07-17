import React from "react";
import LangLink from "./LangLink";

type CMakeLinkProps = {
  href: string;
};

export default function CMakeLink({ href }: CMakeLinkProps) {
  return (
    <LangLink
      href={href}
      src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Cmake.svg/1200px-Cmake.svg.png"
      alt="CMake"
      name="C++: CMake"
    />
  );
}
