import type { Locale } from "./ui";

export type { Locale, UI } from "./ui";
export { t, ui } from "./ui";

export const locales = ["en", "es"] as const;
export const defaultLocale: Locale = "en";

export function homePath(locale: Locale): string {
  return locale === "en" ? "/" : "/es";
}

export function cvPath(locale: Locale): string {
  return locale === "en" ? "/cv" : "/es/cv";
}

export function normalizePath(pathname: string): string {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }

  return pathname || "/";
}

export function hasLocalePair(pathname: string): boolean {
  const path = normalizePath(pathname);
  return path === "/" || path === "/es" || path === "/cv" || path === "/es/cv";
}

export function switchLocalePath(pathname: string, target: Locale): string {
  const path = normalizePath(pathname);

  if (path === "/" || path === "/es") {
    return homePath(target);
  }

  if (path === "/cv" || path === "/es/cv") {
    return cvPath(target);
  }

  return target === "en" ? "/" : path;
}

export function hreflangAlternates(page: "home" | "cv"): { hreflang: string; href: string }[] {
  const en = page === "home" ? "/" : "/cv";
  const es = page === "home" ? "/es" : "/es/cv";

  return [
    { hreflang: "en", href: en },
    { hreflang: "es", href: es },
    { hreflang: "x-default", href: page === "home" ? "/" : "/cv" },
  ];
}
