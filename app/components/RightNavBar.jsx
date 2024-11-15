"use client";

import { useContext, useEffect, useCallback } from "react";
import { AppContext } from "../context/AppContext";

export default function RightNavBar() {
  const { currentHash, navLinks, isMenuOpen, setIsMenuOpen } =
    useContext(AppContext);

  const toggleClasses = useCallback(
    (element, removeClasses, addClasses, delay = 0) => {
      const targetElement = document.querySelector(element);
      if (!targetElement) {
        console.error(`Element ${element} not found`);
        return;
      }

      setTimeout(() => {
        targetElement.classList.remove(...removeClasses);
        targetElement.classList.add(...addClasses);
      }, delay);
    },
    []
  );

  const moveMiddleBar = useCallback(
    (delay) => {
      const middleBar = document.querySelector(".middle-bar");
      const currentLinkElement = document.querySelector(
        `.nav-links a[href="${currentHash}"]`
      );

      if (!middleBar || !currentLinkElement) return;

      setTimeout(() => {
        const { top } = currentLinkElement.getBoundingClientRect();
        middleBar.style.top = isMenuOpen ? `${top + 10}px` : "50%";
      }, delay);
    },
    [currentHash, isMenuOpen]
  );

  useEffect(() => {
    const closeMenu = () => {
      setIsMenuOpen(false);
    };
    if (isMenuOpen) {
      document
        .querySelector(".perspective")
        .addEventListener("click", closeMenu);
      moveMiddleBar(1000);
      toggleClasses(".perspective", ["inactive"], ["active"]);
      toggleClasses(".right-nav", ["w-[2%]"], ["w-[35%]"]);
      toggleClasses(".right-nav", ["h-6"], ["h-[94vh]"], 500);
      toggleClasses(".nav-links", ["hidden"], ["flex"], 600);
    } else {
      document
        .querySelector(".perspective")
        .removeEventListener("click", closeMenu);
      moveMiddleBar(0);
      toggleClasses(".right-nav", ["h-[94vh]"], ["h-6"]);
      toggleClasses(".right-nav", ["w-[35%]"], ["w-[2%]"], 500);
      toggleClasses(".perspective", ["active"], ["inactive"], 500);
      toggleClasses(".nav-links", ["flex"], ["hidden"], 400);
    }
  }, [isMenuOpen, currentHash, toggleClasses, moveMiddleBar, setIsMenuOpen]);

  return (
    <div
      className="right-nav absolute top-6 right-5 select-none cursor-pointer min-w-8 w-[2%] h-6 transition-all duration-500 text-3xl md:text-5xl flex-col overflow-hidden flex text-center text-red-100 items-center justify-center gap-8"
      onClick={() => setIsMenuOpen(!isMenuOpen)}
    >
      {/* Hamburger Bars */}
      {["top-bar", "middle-bar", "bottom-bar"].map((bar, index) => (
        <div
          key={bar}
          className={`border-2 ${bar} border-red-900 w-full h-0 absolute ${
            index === 0
              ? "top-0"
              : index === 1
              ? "top-1/2 -translate-y-1/2 z-30"
              : "bottom-0"
          } left-1/2 -translate-x-1/2 transition-all duration-300`}
        ></div>
      ))}

      {/* Navigation Links */}
      <div className="nav-links hidden flex-col justify-evenly h-full">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`relative transition-colors duration-300 select-none hover:text-red-500 cursor-pointer`}
          >
            <span>{link.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}
