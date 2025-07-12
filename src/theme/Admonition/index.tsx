import React, { type ReactNode } from "react";
import Admonition from "@theme-original/Admonition";
import type AdmonitionType from "@theme/Admonition";
import type { WrapperProps } from "@docusaurus/types";

type Props = WrapperProps<typeof AdmonitionType>;

type AdmonitionHeader = {
  title?: ReactNode;
  icon?: ReactNode;
};

const headers: Partial<Record<Props["type"], AdmonitionHeader>> = {

};

export default function AdmonitionWrapper(props: Props): JSX.Element {
  const defaults = headers[props.type] ?? {};

  return (
    <Admonition
      {...props}
      title={props.title ?? defaults.title}
      icon={props.icon ?? defaults.icon}
    />
  );
}
