import { IconProps } from "phosphor-react";
import { ReactNode } from "react";

export type IconListItem = {
  icon: IconProps;
  content: ReactNode;
  items?: IconListItem[];
};
