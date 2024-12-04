"use client";
import { useAppContext } from "../context/AppContext";
import React, { memo } from "react";

const LeftNavBar = memo(() => {
  const { navLinks, currentHash } = useAppContext();

  return (
    <header role="banner" className="z-50">
      <nav
        className="flex items-center justify-evenly bg-zinc-800 text-nowrap text-center  md:flex-col md:h-full "
        aria-label="Ana Navigasyon"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`flex flex-col justify-center items-center w-full h-14  py-8  gap-1 hover:bg-zinc-900  transition-colors duration-300  md:h-full md:px-3  ${
              currentHash === link.href ? "bg-zinc-900" : ""
            }`}
            aria-current={currentHash === link.href ? "page" : undefined}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={link.icon}
              alt={`${link.label} ikonu`}
              width={25}
              height={25}
            />
            <span className="hidden md:block  text-xs">{link.label}</span>
          </a>
        ))}
      </nav>
    </header>
  );
});

LeftNavBar.displayName = "LeftNavBar";

export default LeftNavBar;
