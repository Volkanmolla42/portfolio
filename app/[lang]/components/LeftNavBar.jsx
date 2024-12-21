"use client";

import React from "react";
import { useAppContext } from "../context/AppContext";

const LeftNavBar = ({ navLinks }) => {
  const { currentHash } = useAppContext();

  // Determine the class names for each link based on its state
  const getLinkClasses = (linkHref) => {
    const isActive = currentHash === linkHref;
    const isContact = linkHref === "#contact" && currentHash !== linkHref;

    return [
      "flex flex-col justify-center items-center w-full  px-3 h-16 md:h-full gap-1 transition-all",
      isActive
        ? "transform md:translate-x-3 -translate-y-2 md:translate-y-0 opacity-100 scale-105 text-red-500"
        : "opacity-60 hover:opacity-90 hover:scale-105",
      isContact && "animate-pulse opacity-100",
    ]
      .filter(Boolean)
      .join(" ");
  };

  return (
    <header role="banner" className="z-50 ">
      <nav
        className="flex justify-evenly md:flex-col pt-2 md:pt-0 md:h-full text-center text-white text-nowrap"
        aria-label="Main Navigation"
      >
        {navLinks.map(({ href, label, iconSvg }) => (
          <a
            key={href}
            href={href}
            className={getLinkClasses(href)}
            aria-current={currentHash === href ? "page" : undefined}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox={iconSvg.viewBox}
              className="aspect-square w-6 h-6"
              aria-label={`${label} icon`}
            >
              <path d={iconSvg.d} fill="currentColor" />
            </svg>
            <span className="text-xs md:block font-medium">{label}</span>
          </a>
        ))}
      </nav>
    </header>
  );
};

LeftNavBar.displayName = "LeftNavBar";

export default LeftNavBar;
