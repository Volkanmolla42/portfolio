"use client";

import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
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

  // Refs for cleanup
  const cleanupRef = useRef();

  // Memoized values
  const memoizedTechIcons = useMemo(() => techIcons, []);

  // Initialize state after mount
  useEffect(() => {
    setMounted(true);
    setCurrentHash(window.location.hash);
  }, []);

  const handleHashChange = useCallback(() => {
    setCurrentHash(window.location.hash);
  }, []);

  // Title update effect
  useEffect(() => {
    if (!mounted || !currentHash) return;

    const capitalizeHash = (hash) => {
      return hash.slice(1, 2).toUpperCase() + hash.slice(2);
    };

    document.title = `${TITLE_PREFIX} ${capitalizeHash(currentHash)}`;
  }, [currentHash, mounted]);

  // Hash change listener effect
  useEffect(() => {
    if (!mounted) return;

    window.addEventListener("hashchange", handleHashChange);
    cleanupRef.current = () => {
      window.removeEventListener("hashchange", handleHashChange);
    };

    return () => cleanupRef.current?.();
  }, [handleHashChange, mounted]);

  const toggleClasses = useCallback(
    (target, removeClasses = [], addClasses = [], delay = 0) => {
      if (!mounted) return;

      const targetElement =
        typeof target === "string" ? document.querySelector(target) : target;

      if (!targetElement) {
        console.warn(`Target element not found: ${target}`);
        return;
      }

      const updateClasses = () => {
        removeClasses.forEach(cls => targetElement.classList.remove(cls));
        addClasses.forEach(cls => targetElement.classList.add(cls));
      };

      if (delay > 0) {
        const timeoutId = setTimeout(() => {
          requestAnimationFrame(updateClasses);
        }, delay);
        return () => clearTimeout(timeoutId);
      } else {
        requestAnimationFrame(updateClasses);
      }
    },
    [mounted]
  );

  const contextValue = useMemo(
    () => ({
      isMenuOpen,
      setIsMenuOpen,
      currentHash,
      setCurrentHash,
      toggleClasses,
      memoizedTechIcons,
      mounted,
    }),
    [
      isMenuOpen,
      currentHash,
      toggleClasses,
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
