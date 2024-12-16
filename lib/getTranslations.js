import { readFileSync } from "fs";
import { join } from "path";

export function getTranslations(lang, page) {
  const filePath = join(process.cwd(), `locales/${lang}/${page}.json`);
  const fileContent = readFileSync(filePath, "utf8");
  return JSON.parse(fileContent);
}
