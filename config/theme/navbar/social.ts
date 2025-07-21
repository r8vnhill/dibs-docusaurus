import { EXTERNAL_LINKS } from "config/course-meta";
import { createExternalLinkElement } from "./utils";

/**
 * Social navigation elements for the site's navbar or footer.
 *
 * Each element is derived from entries in `EXTERNAL_LINKS`, which centralizes metadata such as URLs
 * and labels for external resources related to the course.
 *
 * These elements are created using `createExternalLinkElement`, ensuring consistent structure and
 * right-aligned positioning compatible with Docusaurus's theme conventions.
 */
export const socialElements = [
  createExternalLinkElement(
    EXTERNAL_LINKS.gitlab.url,
    EXTERNAL_LINKS.gitlab.label
  ),
] as const;
