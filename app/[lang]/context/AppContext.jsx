"use client";
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
  useMemo,
} from "react";
import localFont from "next/font/local";
import { techIcons } from "../components/utils/techIcons";
const itimFont = localFont({
  src: "../../fonts/Itim-Regular.ttf",
  weight: "400",
  style: "normal",
  subsets: ["khmer"],
  display: "swap",
});

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentHash, setCurrentHash] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const memoizedTechIcons = useMemo(() => techIcons, []);

  const handleHashChange = useCallback(() => {
    setCurrentHash(window.location.hash);
  }, []);

  useEffect(() => {
    const capitalizeHash = (hash) => {
      return hash.slice(1, 2).toUpperCase() + hash.slice(2);
    };

    document.title = `Hi, I'm Volkan Molla - ${capitalizeHash(currentHash)}`;
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [currentHash, handleHashChange]);

  const toggleClasses = useCallback(
    (target, removeClasses = [], addClasses = [], delay = 0) => {
      const targetElement =
        typeof target === "string" ? document.querySelector(target) : target;

      if (!targetElement) return;

      const updateClasses = () => {
        const currentClasses = targetElement.className.split(" ");
        const filteredClasses = currentClasses.filter(
          (cls) => !removeClasses.includes(cls)
        );
        targetElement.className = [...filteredClasses, ...addClasses].join(" ");
      };

      if (delay > 0) {
        setTimeout(() => {
          requestAnimationFrame(updateClasses);
        }, delay);
      } else {
        requestAnimationFrame(updateClasses);
      }
    },
    []
  );

  const value = useMemo(
    () => ({
      isMenuOpen,
      setIsMenuOpen,
      currentHash,
      setCurrentHash,
      toggleClasses,
      itimFont,
      memoizedTechIcons,
    }),
    [isMenuOpen, currentHash, toggleClasses]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};
