import type { Locale } from "../i18n";

const monthNames: Record<Locale, readonly string[]> = {
  en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  es: ["ene", "feb", "mar", "abr", "may", "jun", "jul", "ago", "sep", "oct", "nov", "dic"],
};

export function formatISODate(dateString: string, locale: Locale): string {
  const date = new Date(dateString);
  const monthIndex = date.getUTCMonth();
  const year = date.getUTCFullYear();
  return `${monthNames[locale][monthIndex]} ${year}`;
}
