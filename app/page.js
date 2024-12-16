import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function Home() {
  const Headers = await headers();
  const userLang =
    Headers.get("accept-language")?.split(",")[0].split("-")[0] || "en";

  const supportedLangs = ["en", "tr"];
  const lang = supportedLangs.includes(userLang) ? userLang : "en";

  redirect(`/${lang}#home`);
}
