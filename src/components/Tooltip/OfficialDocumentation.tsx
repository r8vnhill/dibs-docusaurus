import React from "react";
import { WithClassName } from "../traits/WithClassName";
import Tooltip from "./Tooltip";

type OfficialDocumentationProps = React.PropsWithChildren<WithClassName>;

export default function OfficialDocumentation({
  className,
  children,
}: OfficialDocumentationProps): React.JSX.Element {
  return (
    <Tooltip className={className} text="Documentación oficial.">
      {children}
    </Tooltip>
  );
}
