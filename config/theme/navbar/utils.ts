import { NavbarItem } from "@docusaurus/theme-common";

/**
 * Represents a labeled item.
 */
type Labeled = {
  label: string;
};

// #region Left-aligned navbar items
/**
 * Base type for a left-aligned navbar item with a required label.
 */
export type LeftAlignedNavbarItem = NavbarItem &
  Labeled & {
    position: "left";
  };

/**
 * Adds the `position: "left"` field to a given navbar item.
 *
 * Useful for creating consistent, left-aligned items in the Docusaurus navbar.
 *
 * @param item - A navbar item configuration without the `position` field.
 * @returns A new navbar item with `position` set to `"left"`.
 */
export function createNavbarElementLeft<T extends NavbarItem>(
  item: Omit<T, "position">
): T & { position: "left" } {
  return {
    ...item,
    position: "left",
  } as T & { position: "left" };
}

/**
 * A specialized left-aligned navbar item representing a Docusaurus `docSidebar`.
 */
export interface DocSidebarElement extends LeftAlignedNavbarItem {
  type: "docSidebar";
  sidebarId: string;
}

/**
 * Creates a left-aligned navbar element of type `docSidebar`.
 *
 * @param sidebarId - The ID of the sidebar to link to.
 * @param label - The label displayed in the navbar.
 * @returns A `DocSidebarElement` navbar item.
 */
export function createDocSidebarElement(sidebarId: string, label: string) {
  return createNavbarElementLeft({
    type: "docSidebar",
    sidebarId,
    label,
  }) satisfies DocSidebarElement;
}

/**
 * A simple left-aligned link in the navbar that routes to a given path.
 */
export interface SimpleLinkElement extends LeftAlignedNavbarItem {
  to: string;
}

/**
 * Creates a left-aligned navbar link to a given `/docs/*` path.
 *
 * @param to - The relative path under `/docs/` to link to (e.g., `"lessons"`).
 * @param label - The label displayed in the navbar.
 * @returns A `SimpleLinkElement` navbar item.
 */
export function createSimpleLinkElement(
  to: string,
  label: string
): SimpleLinkElement {
  return createNavbarElementLeft({
    to: `/docs/${to}`,
    label,
  }) satisfies SimpleLinkElement;
}
// #endregion Left-aligned navbar items

// #region Right-aligned navbar items
/**
 * Base type for a right-aligned navbar item with a required label.
 */
export type RightAlignedNavbarItem = NavbarItem &
  Labeled & {
    position: "right";
  };

/**
 * Creates a right-aligned navbar element.
 *
 * @param item - A navbar item configuration without the `position` field.
 * @returns A new navbar item with `position` set to `"right"`.
 */
function createRightAlignedNavbarElement<T extends NavbarItem>(
  item: Omit<T, "position">
): T & { position: "right" } {
  return {
    ...item,
    position: "right",
  } as T & { position: "right" };
}

/**
 * A right-aligned navbar item that links to an external URL.
 */
export interface ExternalLinkElement extends RightAlignedNavbarItem {
  href: string;
}

/**
 * Creates a right-aligned navbar element that links to an external URL.
 *
 * @param href - The external URL to link to.
 * @param label - The label displayed in the navbar.
 * @returns An `ExternalLinkElement` navbar item.
 */
export function createExternalLinkElement(
  href: string,
  label: string
): ExternalLinkElement {
  return createRightAlignedNavbarElement({
    href,
    label,
  }) satisfies ExternalLinkElement;
}
// #endregion Right-aligned navbar items
