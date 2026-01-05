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
import type { AppContextValue, TechIcon } from "@/lib/types";
import { SITE_CONFIG } from "@/lib/constants";

// ============================================
// Context Creation
// ============================================

const AppContext = createContext<AppContextValue | null>(null);

// ============================================
// Constants
// ============================================

const TITLE_PREFIX = `${SITE_CONFIG.name} -`;

// ============================================
// Helper Functions
// ============================================

/**
 * Capitalizes the first letter of a hash string (removes # prefix)
 */
function capitalizeHash(hash: string): string {
  if (!hash || hash.length < 2) return "";
  return hash.slice(1, 2).toUpperCase() + hash.slice(2);
}

// ============================================
// App Provider Component
// ============================================

interface AppProviderProps {
  children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  // ============================================
  // State Management
  // ============================================
  const [mounted, setMounted] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Refs for cleanup
  const cleanupRef = useRef<(() => void) | undefined>(undefined);

  // Memoized tech icons (static data, no need to recompute)
  const memoizedTechIcons = useMemo<TechIcon[]>(() => techIcons, []);

  // ============================================
  // Effects
  // ============================================

  // Initialize state after mount (client-side only)
  useEffect(() => {
    setMounted(true);
    setCurrentHash(window.location.hash);
  }, []);

  // Handle hash change events
  const handleHashChange = useCallback(() => {
    setCurrentHash(window.location.hash);
  }, []);

  // Update document title based on current hash
  useEffect(() => {
    if (!mounted || !currentHash) return;
    document.title = `${TITLE_PREFIX} ${capitalizeHash(currentHash)}`;
  }, [currentHash, mounted]);

  // Add hash change listener
  useEffect(() => {
    if (!mounted) return;

    window.addEventListener("hashchange", handleHashChange);
    cleanupRef.current = () => {
      window.removeEventListener("hashchange", handleHashChange);
    };

    return () => cleanupRef.current?.();
  }, [handleHashChange, mounted]);

  // ============================================
  // Utility Functions
  // ============================================

  /**
   * Toggle CSS classes on an element with optional delay
   */
  const toggleClasses = useCallback(
    (
      target: string | Element,
      removeClasses: string[] = [],
      addClasses: string[] = [],
      delay: number = 0
    ): (() => void) | undefined => {
      if (!mounted) return undefined;

      const targetElement =
        typeof target === "string" ? document.querySelector(target) : target;

      if (!targetElement) {
        console.warn(`Target element not found: ${target}`);
        return undefined;
      }

      const updateClasses = () => {
        removeClasses.forEach((cls) => targetElement.classList.remove(cls));
        addClasses.forEach((cls) => targetElement.classList.add(cls));
      };

      if (delay > 0) {
        const timeoutId = setTimeout(() => {
          requestAnimationFrame(updateClasses);
        }, delay);
        return () => clearTimeout(timeoutId);
      } else {
        requestAnimationFrame(updateClasses);
        return undefined;
      }
    },
    [mounted]
  );

  // ============================================
  // Context Value
  // ============================================

  const contextValue = useMemo<AppContextValue>(
    () => ({
      isMenuOpen,
      setIsMenuOpen,
      currentHash,
      setCurrentHash,
      toggleClasses,
      memoizedTechIcons,
      mounted,
    }),
    [isMenuOpen, currentHash, toggleClasses, memoizedTechIcons, mounted]
  );

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
}

// ============================================
// Custom Hooks for Context Access
// ============================================

/**
 * Hook to access the full app context
 * @throws Error if used outside of AppProvider
 */
export function useAppContext(): AppContextValue {
  const context = useContext(AppContext);
  if (context === null) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
}

/**
 * Hook to access hash-related context values
 */
export function useHash() {
  const { currentHash, setCurrentHash, mounted } = useAppContext();
  return { currentHash, setCurrentHash, mounted };
}

/**
 * Hook to access menu state
 */
export function useMenu() {
  const { isMenuOpen, setIsMenuOpen } = useAppContext();
  return { isMenuOpen, setIsMenuOpen };
}

/**
 * Hook to access tech icons
 */
export function useTechIcons(): TechIcon[] {
  const { memoizedTechIcons } = useAppContext();
  return memoizedTechIcons;
}

/**
 * Hook to access toggle classes utility
 */
export function useToggleClasses() {
  const { toggleClasses } = useAppContext();
  return toggleClasses;
}