import type { ImageMetadata } from "astro";
import workExperience from "./work-experience.json";
import { formatISODate } from "../utils/date-formatter";

interface WorkExperienceEntry {
  company: {
    name: string;
    img: string;
  };
  startDate: string;
  endDate: string | null;
  title: string;
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
  import: "default"
});

const toExperienceDate = (iso: string): ExperienceDate => ({
  label: formatISODate(iso),
  datetime: iso.slice(0, 7)
});

/** Experiences grouped per company, newest first; consecutive roles at one company share a screen. */
export const companies = (workExperience as WorkExperienceEntry[]).reduce<CompanyExperience[]>(
  (groups, entry) => {
    const role: ExperienceRole = {
      title: entry.title,
      start: toExperienceDate(entry.startDate),
      end: entry.endDate ? toExperienceDate(entry.endDate) : { label: "Present" },
      description: entry.description
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
      roles: [role]
    });
    return groups;
  },
  []
);
