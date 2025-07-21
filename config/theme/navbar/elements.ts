import { createDocSidebarElement, createSimpleLinkElement } from "./utils";

/**
 * Left-aligned navbar item linking to the notes sidebar.
 */
const notesElement = createDocSidebarElement("notesSidebar", "Apuntes");

/**
 * Left-aligned navbar item linking to the lessons documentation page.
 */
const lessonsElement = createSimpleLinkElement("lessons", "Clases");

/**
 * Left-aligned navbar item linking to the syllabus documentation page.
 */
const syllabusElement = createSimpleLinkElement("syllabus", "Temario");

/**
 * Left-aligned navbar item linking to the assignments sidebar.
 */
const assignmentsElement = createDocSidebarElement("assignmentsSidebar", "Tareas");

/**
 * Array of content-related navbar elements.
 */
export const contentElements = [
  notesElement,
  lessonsElement,
  syllabusElement,
  assignmentsElement,
] as const;
