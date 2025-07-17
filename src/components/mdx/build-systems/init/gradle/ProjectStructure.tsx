import React from "react";
import {
  FolderNotchOpen,
  Code,
  FileText,
  Flask,
} from "phosphor-react";
import type { IconListItem } from "../../../../IconList/IconList.types";
import { IconList } from "../../../../IconList/IconList";

const items: IconListItem[] = [
  {
    icon: FolderNotchOpen,
    content: "El tipo de proyecto (aplicación, biblioteca, proyecto vacío…)",
  },
  {
    icon: Code,
    content: (
      <>
        El lenguaje de script de configuración (<code>Kotlin</code> o{" "}
        <code>Groovy</code>)
      </>
    ),
  },
  {
    icon: FileText,
    content: "El nombre del proyecto",
    items: [
      {
        icon: Flask,
        content: "Si deseas habilitar APIs experimentales",
      },
    ],
  },
];

export default function GradleInitDetails() {
  return <IconList items={items} />;
}
