"use client";
import React, { createContext, useState, useEffect, useContext } from "react";

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
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const value = {
    isMenuOpen,
    setIsMenuOpen,
    currentHash,
    setcurrentHash,
    navLinks,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
