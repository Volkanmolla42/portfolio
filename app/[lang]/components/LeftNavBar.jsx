"use client";

import { useAppContext } from "../context/AppContext";
import React from "react";

const LeftNavBar = ({ navLinks }) => {
  const { currentHash } = useAppContext();

  const getLinkClasses = (linkHref) => {
    const isActive = currentHash === linkHref;
    const isContact = linkHref === "#contact" && currentHash !== linkHref;

    return [
      "flex flex-col justify-center items-center w-full h-14 md:h-full py-8 gap-1",
      isActive ? "bg-zinc-900 opacity-100" : "opacity-70 hover:opacity-100",
      isContact && "animate-pulse opacity-100",
    ]
      .filter(Boolean)
      .join(" ");
  };

  const getTextClasses = (linkHref) => {
    return currentHash === linkHref ? "font-medium text-destructive" : "";
  };

  return (
    <header role="banner" className="z-50 md:w-[10%] lg:w-[5%]">
      <nav
        className="flex items-center justify-evenly bg-zinc-800 text-nowrap text-center md:flex-col md:h-full"
        aria-label="Ana Navigasyon"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={getLinkClasses(link.href)}
            aria-current={currentHash === link.href ? "page" : undefined}
          >
            <img
              src={link.icon}
              alt={`${link.label} ikonu`}
              width={20}
              height={20}
            />
            <span
              className={`hidden md:block text-xs ${getTextClasses(link.href)}`}
            >
              {link.label}
            </span>
          </a>
        ))}
      </nav>
    </header>
  );
};

LeftNavBar.displayName = "LeftNavBar";

export default LeftNavBar;
