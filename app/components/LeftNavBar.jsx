"use client";
import { useAppContext } from "../context/AppContext";
import React, { memo } from "react";

const LeftNavBar = memo(() => {
  const { navLinks, currentHash } = useAppContext();

  return (
    <header role="banner" className="z-50 md:w-[10%] lg:w-[5%]">
      <nav
        className="flex items-center justify-evenly bg-zinc-800 text-nowrap text-center  md:flex-col md:h-full "
        aria-label="Ana Navigasyon"
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`flex flex-col justify-center items-center w-full h-14 py-8  gap-1 hover:bg-zinc-900  transition-colors duration-300  md:h-full md:px-3  ${
              currentHash === link.href
                ? "bg-zinc-900 opacity-100"
                : " opacity-70 hover:opacity-100"
            }`}
            aria-current={currentHash === link.href ? "page" : undefined}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={link.icon}
              alt={`${link.label} ikonu`}
              width={20}
              height={20}
            />
            <span
              className={`hidden md:block  text-xs  ${
                currentHash === link.href
                  ? " font-medium  text-destructive"
                  : ""
              } `}
            >
              {link.label}
            </span>
          </a>
        ))}
      </nav>
    </header>
  );
});

LeftNavBar.displayName = "LeftNavBar";

export default LeftNavBar;
