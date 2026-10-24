export type Locale = "en" | "es";

const en = {
  languageNav: "Language",
  english: "English",
  spanish: "Español",
  englishHome: "English homepage",
  siteTitle: "Martín Palmieri | Frontend/Software Developer",
  siteDescription: "Martín Palmieri Frontend/Software Developer.",
  mainNav: "Main",
  tiles: {
    cv: "CV",
    read: "Read",
    music: "Music",
    art: "Art",
    contact: "Contact",
  },
  comingSoon: "Coming soon",
  emailMe: "Email me",
  opensInNewTab: "opens in a new tab",
  close: "Close",
  backTo: "Back to ",
  cv: {
    title: "Curriculum Vitae | Martín Palmieri",
    description: "Professional experience and background of Martín Palmieri.",
    heading: "Martín Palmieri: work experience",
    trackLabel: "Work experience",
    navLabel: "Experience navigation",
    previous: "Previous experience",
    next: "Next experience",
    statusOf: "of",
    present: "Present",
  },
  footer: {
    navLabel: "Social media and contact links",
    email: "Email",
  },
};

const es: typeof en = {
  languageNav: "Idioma",
  english: "English",
  spanish: "Español",
  englishHome: "Inicio en inglés",
  siteTitle: "Martín Palmieri | Desarrollador frontend/software",
  siteDescription: "Martín Palmieri, desarrollador frontend/software.",
  mainNav: "Navegación principal",
  tiles: {
    cv: "CV",
    read: "Leer",
    music: "Música",
    art: "Arte",
    contact: "Contacto",
  },
  comingSoon: "Próximamente",
  emailMe: "Escríbeme",
  opensInNewTab: "se abre en una nueva pestaña",
  close: "Cerrar",
  backTo: "Volver a ",
  cv: {
    title: "Currículum | Martín Palmieri",
    description: "Experiencia profesional y trayectoria de Martín Palmieri.",
    heading: "Martín Palmieri: experiencia laboral",
    trackLabel: "Experiencia laboral",
    navLabel: "Navegación por la experiencia laboral",
    previous: "Experiencia anterior",
    next: "Experiencia siguiente",
    statusOf: "de",
    present: "Actualidad",
  },
  footer: {
    navLabel: "Redes sociales y contacto",
    email: "Email",
  },
};

export const ui = { en, es } as const;

export type UI = typeof en;

export function t(locale: Locale): UI {
  return ui[locale];
}
