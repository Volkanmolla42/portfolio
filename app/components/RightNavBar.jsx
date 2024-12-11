"use client";

import { useAppContext } from "../context/AppContext";
import { useEffect, useCallback } from "react";

export default function RightNavBar() {
  const { currentHash, navLinks, isMenuOpen, setIsMenuOpen, toggleClasses } =
    useAppContext();

  const moveMiddleBar = useCallback(
    (delay) => {
      const middleBar = document.querySelector(".middle-bar");
      const currentLinkElement = document.querySelector(
        `.nav-links a[href="${currentHash}"]`
      );

      if (!middleBar || !currentLinkElement) return;

      setTimeout(() => {
        const { top } = currentLinkElement.getBoundingClientRect();
        middleBar.style.top = isMenuOpen ? `${top + 2 * 24}px` : "50%";
        middleBar.style.height = isMenuOpen
          ? `${currentLinkElement.clientHeight}px`
          : "4px";
      }, delay);
    },
    [currentHash, isMenuOpen]
  );

  const toggleNavMenu = (isOpening) => {
    const perspectiveElement = document.querySelector(".perspective");
    const rightNavElement = document.querySelector(".right-nav");
    const navLinksElement = document.querySelector(".nav-links");

    if (isOpening) {
      perspectiveElement.addEventListener("click", closeMenu);
      toggleClasses(
        perspectiveElement,
        ["inactive"],
        ["active", "cursor-pointer"]
      );
      toggleClasses(rightNavElement, ["w-[2%]"], ["w-[35%]"]);
      toggleClasses(rightNavElement, ["h-6"], ["h-[92vh]"], 500);
      toggleClasses(navLinksElement, ["hidden"], ["flex"], 600);
      moveMiddleBar(1000);
    } else {
      perspectiveElement.removeEventListener("click", closeMenu);
      moveMiddleBar(0);

      toggleClasses(
        perspectiveElement,
        ["active", "cursor-pointer"],
        ["inactive"],
        500
      );
      toggleClasses(rightNavElement, ["h-[92vh]"], ["h-6"]);
      toggleClasses(rightNavElement, ["w-[35%]"], ["w-[2%]"], 500);
      toggleClasses(navLinksElement, ["flex"], ["hidden"], 400);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    toggleNavMenu(isMenuOpen);
  }, [isMenuOpen, currentHash, toggleClasses, moveMiddleBar, setIsMenuOpen]);

  return (
    <div
      className="right-nav fixed top-8 right-8 select-none cursor-pointer min-w-8 h-6 transition-all duration-500 text-3xl md:text-5xl flex-col overflow-hidden flex text-center text-red-100 items-center justify-center gap-8 z-50"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      {/* Hamburger Bars */}
      {["top-bar", "middle-bar", "bottom-bar"].map((bar, index) => (
        <div
          key={bar}
          className={`border-none ${bar} bg-red-900 w-full h-1 absolute ${
            index === 0
              ? "top-0"
              : index === 1
              ? "top-1/2 -translate-y-1/2"
              : "bottom-0"
          } left-1/2 -translate-x-1/2 transition-all duration-300`}
        ></div>
      ))}

      {/* Navigation Links */}
      <nav className="nav-links flex-col w-full h-full items-center hidden">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="relative h-full flex justify-center items-center w-full transition-colors duration-300 select-none hover:text-red-300 cursor-pointer"
          >
            <span>{link.label}</span>
          </a>
        ))}
      </nav>
    </div>
  );
}
