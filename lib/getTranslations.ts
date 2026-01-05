import { readFileSync } from "fs";
import { join } from "path";
import type { AppTranslations } from "./types";
import type { SupportedLanguage } from "./constants";
import { SUPPORTED_LANGUAGES, DEFAULT_LANGUAGE } from "./constants";

/**
 * Validates if a language code is supported
 */
export function isValidLanguage(lang: string): lang is SupportedLanguage {
  return SUPPORTED_LANGUAGES.includes(lang as SupportedLanguage);
}

/**
 * Get translations for a specific language and page
 * Falls back to default language if the requested language is not found
 */
export function getTranslations(
  lang: string,
  page: string
): AppTranslations {
  // Validate and fallback to default language if invalid
  const validLang = isValidLanguage(lang) ? lang : DEFAULT_LANGUAGE;

  try {
    const filePath = join(process.cwd(), `locales/${validLang}/${page}.json`);
    const fileContent = readFileSync(filePath, "utf8");
    return JSON.parse(fileContent) as AppTranslations;
  } catch (error) {
    // If translation file not found, try default language
    if (validLang !== DEFAULT_LANGUAGE) {
      console.warn(
        `Translation file not found for ${validLang}/${page}, falling back to ${DEFAULT_LANGUAGE}`
      );
      const fallbackPath = join(
        process.cwd(),
        `locales/${DEFAULT_LANGUAGE}/${page}.json`
      );
      const fallbackContent = readFileSync(fallbackPath, "utf8");
      return JSON.parse(fallbackContent) as AppTranslations;
    }
    throw error;
  }
}

/**
 * Get a specific translation key with type safety
 */
export function getTranslationKey<K extends keyof AppTranslations>(
  lang: string,
  page: string,
  key: K
): AppTranslations[K] {
  const translations = getTranslations(lang, page);
  return translations[key];
}