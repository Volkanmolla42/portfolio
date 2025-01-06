"use client";

import { memo } from "react";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { motion } from "framer-motion";

const LANGUAGES = [
  { code: "en", label: "EN" },
  { code: "tr", label: "TR" },
];

const LanguageLink = memo(({ lang, currentLang, newPathname }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    <Link
      href={`/${lang.code}${newPathname}`}
      className={`
        px-4 py-2 rounded-lg font-medium text-xs tracking-wider transition-all duration-200
        ${currentLang === lang.code 
          ? "bg-zinc-800 text-white shadow-lg" 
          : "bg-transparent text-zinc-300 hover:bg-zinc-800/80 hover:text-white"
        }
      `}
      aria-current={currentLang === lang.code ? "page" : undefined}
      title={`Switch language to ${lang.code.toUpperCase()}`}
    >
      {lang.label}
    </Link>
  </motion.div>
));

LanguageLink.displayName = 'LanguageLink';

function LanguageSwitcher() {
  const params = useParams();
  const pathname = usePathname();
  const currentLang = params.lang;
  const newPathname = pathname.replace(`/${currentLang}`, "#home");

  return (
    <nav 
      className="flex justify-center items-center space-x-2 px-2" 
      aria-label="Language switcher"
    >
      {LANGUAGES.map((lang) => (
        <LanguageLink
          key={lang.code}
          lang={lang}
          currentLang={currentLang}
          newPathname={newPathname}
        />
      ))}
    </nav>
  );
}

export default memo(LanguageSwitcher);
