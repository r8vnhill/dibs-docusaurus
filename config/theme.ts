import type * as Preset from "@docusaurus/preset-classic";
import meta from '~course-meta';

const themes = ["@docusaurus/theme-mermaid"];

export interface ThemeConfig {
  themes: string[];
  themeConfig: Preset.ThemeConfig;
}

export default function createThemeConfig() {
  return {
    themes: themes,
    themeConfig: {
      image: meta.socialCard,
      navbar: {
        title: meta.shortTitle,
        logo: {
          alt: `${meta.shortTitle} Logo`,
          src: meta.logo,
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Apuntes",
          },
          {
            to: "/docs/lessons",
            label: "Clases",
            position: "left",
          },
          {
            to: "/docs/syllabus",
            label: "Temario",
            position: "left",
          },
          {
            type: "docSidebar",
            sidebarId: "assignmentsSidebar",
            label: "Tareas",
            position: "left",
          },
          {
            href: "https://gitlab.com/r8vnhill/dibs",
            label: "Source",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} Ignacio Slater-Muñoz. Hecho con Docusaurus.`,
      },
    } satisfies Preset.ThemeConfig,
  };
}
