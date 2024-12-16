"use client";

import Link from "next/link";
import { useParams, usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  const currentLang = params.lang;
  const newPathname = pathname.replace(`/${currentLang}`, "#home");

  const languages = [
    { code: "en", label: "EN" },
    { code: "tr", label: "TR" },
  ];

  return (
    <div className="flex justify-center items-center space-x-2 p-2 ">
      {languages.map((lang) => (
        <Link
          key={lang.code}
          href={`/${lang.code}${newPathname}`}
          className={`px-4 py-2 rounded-lg font-medium text-xs tracking-wider transition-colors  hover:bg-zinc-800 text-zinc-300 hover:text-white  ${
            currentLang === lang.code ? "  bg-zinc-800  " : "bg-zinc-900 "
          }`}
        >
          {lang.label}
        </Link>
      ))}
    </div>
  );
}
