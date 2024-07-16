export const locales = ["en", "de", "kn-IN"] as const;
export type Locale = (typeof locales)[number];