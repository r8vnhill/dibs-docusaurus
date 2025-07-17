import React from "react";
import {
  Circle,
  Folder,
  File,
  CheckCircle,
  WarningCircle,
  ArchiveBox,
  Scroll,
  GitBranch,
  BracketsCurly,
  Sliders,
  TerminalWindow,
  Key,
  GlobeHemisphereWest,
} from "phosphor-react";
import styles from "./IconList.module.css";
import TODO from "../TODO/TODO";

/**
 * A list component that displays items with custom leading icons.
 *
 * Use together with components like `BulletItem`, `FolderItem`, etc.
 *
 * @example
 * <IconList>
 *   <BulletItem>Item 1</BulletItem>
 *   <FolderItem>Item 2</FolderItem>
 * </IconList>
 */
export const IconList: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => <ul className={styles.iconList}>{children}</ul>;

/**
 * Props shared by all icon-based list items.
 */
export type ItemProps = {
  children: React.ReactNode;
};

type IconItemProps = {
  icon: React.ReactElement;
  children: React.ReactNode;
};

/**
 * Generic component to render a list item with a leading icon.
 * Not meant to be used directly—prefer `BulletItem`, `FolderItem`, etc.
 *
 * @internal
 */
const IconItem: React.FC<IconItemProps> = ({ icon, children }) => (
  <li className={styles.iconListItem}>
    <span className={styles.iconWrapper}>{icon}</span>
    <span className={styles.content}>{children}</span>
  </li>
);

/**
 * List item with a circular bullet icon.
 * Suitable for unordered list semantics.
 */
export const BulletItem: React.FC<ItemProps> = ({ children }) => (
  <IconItem icon={<Circle size="0.5em" weight="fill" />}>{children}</IconItem>
);

/**
 * List item with a folder icon.
 * Suitable for describing folder paths or configuration topics.
 */
export const FolderItem: React.FC<ItemProps> = ({ children }) => (
  <IconItem icon={<Folder size="1em" weight="fill" />}>{children}</IconItem>
);

/**
 * List item with a file icon.
 * Useful for referring to file names or generated files.
 */
export const FileItem: React.FC<ItemProps> = ({ children }) => (
  <IconItem icon={<File size="1em" weight="fill" />}>{children}</IconItem>
);

/**
 * List item with a file icon, specialized for code-related topics.
 * Semantically identical to `FileItem`.
 */
export const CodeItem: React.FC<ItemProps> = ({ children }) => (
  <IconItem icon={<File size="1em" weight="fill" />}>{children}</IconItem>
);

/**
 * List item with a check circle icon.
 * Useful for highlighting benefits or completed features.
 */
export const CheckCircleItem: React.FC<ItemProps> = ({ children }) => (
  <IconItem icon={<CheckCircle size="1em" weight="fill" />}>
    {children}
  </IconItem>
);

export function WarningCircleItem({ children }: ItemProps) {
  return (
    <IconItem icon={<WarningCircle size="1em" weight="fill" />}>
      {children}
    </IconItem>
  );
}

export function ArchiveBoxItem({ children }: ItemProps) {
  return (
    <IconItem icon={<ArchiveBox size="1em" weight="fill" />}>
      {children}
    </IconItem>
  );
}

export function ScrollItem({ children }: ItemProps) {
  return (
    <IconItem icon={<Scroll size="1em" weight="fill" />}>{children}</IconItem>
  );
}

export function GitBranchItem({ children }: ItemProps) {
  return (
    <IconItem icon={<GitBranch size="1em" weight="fill" />}>
      {children}
    </IconItem>
  );
}

export function BracketsCurlyItem({ children }: ItemProps) {
  return (
    <IconItem icon={<BracketsCurly size="1em" weight="fill" />}>
      {children}
    </IconItem>
  );
}

export function SlidersItem({ children }: ItemProps) {
  return (
    <IconItem icon={<Sliders size="1em" weight="fill" />}>
      {children}
    </IconItem>
  );
}

export function TerminalWindowItem({ children }: ItemProps) {
  return (
    <IconItem icon={<TerminalWindow size="1em" weight="fill" />}>
      {children}
    </IconItem>
  );
}

export function KeyItem({ children }: ItemProps) {
  return (
    <IconItem icon={<Key size="1em" weight="fill" />}>
      {children}
    </IconItem>
  );
}

export function WebPageItem({ children }: ItemProps) {
  return (
    <IconItem icon={<GlobeHemisphereWest size="1.1em" weight="fill" />}>
      {children}
    </IconItem>
  );
}
