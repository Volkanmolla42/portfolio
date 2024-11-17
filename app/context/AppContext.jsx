"use client";
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentHash, setcurrentHash] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home", icon: "/icons/menu-icons/house-solid.svg" },
    {
      href: "#about",
      label: "About me",
      icon: "/icons/menu-icons/user-solid.svg",
    },
    {
      href: "#projects",
      label: "Projects",
      icon: "/icons/menu-icons/cubes-solid.svg",
    },
    {
      href: "#contact",
      label: "Touch Me",
      icon: "/icons/menu-icons/envelope-solid.svg",
    },
  ];

  const handleHashChange = () => {
    setcurrentHash(window.location.hash);
  };

  useEffect(() => {
    const capitalizeHash = (hash) => {
      return hash.slice(1, 2).toUpperCase() + hash.slice(2);
    };

    document.title = "Hi, I'm Volkan - " + capitalizeHash(currentHash);
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [currentHash]);

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

  const value = {
    isMenuOpen,
    setIsMenuOpen,
    currentHash,
    setcurrentHash,
    navLinks,
    toggleClasses,
    currentHash,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
