/**
 * Base path for the course's logo and icon assets.
 */
const ONLINE_LIBRARY_BASE = "img/online-library";

/**
 * Metadata information about the course used throughout the site.
 *
 * Includes identifiers, URL references, and image assets used in the UI and social sharing.
 *
 * @property shortTitle - A short label for the course (e.g., for navbars).
 * @property title - The full course name.
 * @property icon - Path to the favicon or tab icon.
 * @property url - Canonical URL of the deployed site.
 * @property baseUrl - Base URL for the Docusaurus router.
 * @property logo - Path to the course logo image.
 * @property socialCard - Image used in social media previews (Open Graph).
 */
const COURSE_META = {
  shortTitle: "DIBS",
  title: "Diseño e Implementación de Bibliotecas de Software",
  icon: `${ONLINE_LIBRARY_BASE}.ico`,
  url: "https://dibs.ravenhill.cl",
  baseUrl: "/",
  logo: `${ONLINE_LIBRARY_BASE}.png`,
  socialCard: "img/docusaurus-social-card.jpg",
} as const;

export default COURSE_META;

/**
 * External links used across the site, such as repository links.
 *
 * Each link includes a label for display and its corresponding URL.
 */
export const EXTERNAL_LINKS = {
  gitlab: {
    url: "https://gitlab.com/r8vnhill/dibs-docusaurus",
    label: "Repositorio en GitLab",
  },
} as const;

/**
 * Copyright holder for the course.
 */
export const COPYRIGHT_HOLDER = "Ignacio Slater-Muñoz";
