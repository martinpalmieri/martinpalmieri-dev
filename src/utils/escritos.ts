import { getCollection, type CollectionEntry } from "astro:content";

export type Escrito = CollectionEntry<"escritos">;

const dateFormatter = new Intl.DateTimeFormat("es-AR", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "UTC",
});

export function compareEscritos(a: Escrito, b: Escrito): number {
  const dateDiff = b.data.date.getTime() - a.data.date.getTime();

  if (dateDiff !== 0) {
    return dateDiff;
  }

  const titleDiff = a.data.title.localeCompare(b.data.title, "es", {
    sensitivity: "base",
  });

  if (titleDiff !== 0) {
    return titleDiff;
  }

  return a.data.slug.localeCompare(b.data.slug, "es");
}

export async function getEscritos(): Promise<Escrito[]> {
  const escritos = await getCollection("escritos");
  return escritos.sort(compareEscritos);
}

export function formatEscritoDate(date: Date): string {
  return dateFormatter.format(date);
}

export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
