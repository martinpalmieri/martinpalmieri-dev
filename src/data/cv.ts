import type { ImageMetadata } from "astro";
import workExperience from "./work-experience.json";
import workExperienceEs from "./work-experience.es.json";
import { t, type Locale } from "../i18n";
import { formatISODate } from "../utils/date-formatter";

interface WorkExperienceEntry {
  id: string;
  company: {
    name: string;
    img: string;
  };
  startDate: string;
  endDate: string | null;
  title: string;
  description: string;
}

interface LocalizedRoleCopy {
  description: string;
}

export interface ExperienceDate {
  label: string;
  datetime?: string;
}

export interface ExperienceRole {
  title: string;
  start: ExperienceDate;
  end: ExperienceDate;
  description: string;
}

export interface CompanyExperience {
  id: string;
  name: string;
  image: ImageMetadata;
  roles: ExperienceRole[];
}

const titleImages = import.meta.glob<ImageMetadata>("../assets/cv/companies/*.png", {
  eager: true,
  import: "default",
});

const entries = workExperience as WorkExperienceEntry[];
const spanishCopy = workExperienceEs as Record<string, LocalizedRoleCopy>;

function assertSpanishComplete(roles: WorkExperienceEntry[]) {
  const ids = roles.map(role => role.id);

  if (ids.some(id => !id)) {
    throw new Error("Every work experience entry needs a stable id.");
  }

  if (new Set(ids).size !== ids.length) {
    throw new Error("Work experience ids must be unique.");
  }

  for (const id of ids) {
    if (!spanishCopy[id]?.description) {
      throw new Error(`Missing Spanish CV description for role "${id}".`);
    }
  }
}

assertSpanishComplete(entries);

const toExperienceDate = (iso: string, locale: Locale): ExperienceDate => ({
  label: formatISODate(iso, locale),
  datetime: iso.slice(0, 7),
});

function roleDescription(entry: WorkExperienceEntry, locale: Locale): string {
  if (locale === "en") {
    return entry.description;
  }

  const copy = spanishCopy[entry.id];

  if (!copy?.description) {
    throw new Error(`Missing Spanish CV description for role "${entry.id}".`);
  }

  return copy.description;
}

/** Experiences grouped per company, newest first; consecutive roles at one company share a screen. */
export function getCompanies(locale: Locale): CompanyExperience[] {
  const present = t(locale).cv.present;

  return entries.reduce<CompanyExperience[]>((groups, entry) => {
    const role: ExperienceRole = {
      title: entry.title,
      start: toExperienceDate(entry.startDate, locale),
      end: entry.endDate ? toExperienceDate(entry.endDate, locale) : { label: present },
      description: roleDescription(entry, locale),
    };
    const previous = groups.at(-1);

    if (previous?.name === entry.company.name) {
      previous.roles.push(role);
      return groups;
    }

    const image = titleImages[`../assets/cv/companies/${entry.company.img}`];

    if (!image) {
      throw new Error(`Missing CV title image "${entry.company.img}" for ${entry.company.name}.`);
    }

    groups.push({
      id: entry.company.img.replace(/\.png$/, ""),
      name: entry.company.name,
      image,
      roles: [role],
    });
    return groups;
  }, []);
}
