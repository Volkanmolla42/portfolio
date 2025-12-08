"use client";

import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useMemo,
  useRef,
} from "react";
import { techIcons } from "../components/utils/techIcons";

const AppContext = createContext(null);

// Constants
const TITLE_PREFIX = "Hi, I'm Volkan Molla -";

export const AppProvider = ({ children }) => {
  const [mounted, setMounted] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Memoized values
  const memoizedTechIcons = useMemo(() => techIcons, []);

  // Initialize state after mount
  useEffect(() => {
    setMounted(true);
    setCurrentHash(window.location.hash || "#home");
  }, []);

  const handleHashChange = () => {
    setCurrentHash(window.location.hash);
  };

  // Title update effect
  useEffect(() => {
    if (!mounted || !currentHash) return;

    const capitalizeHash = (hash) => {
      const cleanHash = hash.replace("#", "");
      return cleanHash.charAt(0).toUpperCase() + cleanHash.slice(1);
    };

    document.title = `${TITLE_PREFIX} ${capitalizeHash(currentHash)}`;
  }, [currentHash, mounted]);

  // Hash change listener effect
  useEffect(() => {
    if (!mounted) return;

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [mounted]);

  const contextValue = useMemo(
    () => ({
      isMenuOpen,
      setIsMenuOpen,
      currentHash,
      setCurrentHash,
      memoizedTechIcons,
      mounted,
    }),
    [
      isMenuOpen,
      currentHash,
      memoizedTechIcons,
      mounted,
    ]
  );

  return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export const useHash = () => {
  const { currentHash, setCurrentHash, mounted } = useAppContext();
  return { currentHash, setCurrentHash, mounted };
};

export const useMenu = () => {
  const { isMenuOpen, setIsMenuOpen } = useAppContext();
  return { isMenuOpen, setIsMenuOpen };
};
