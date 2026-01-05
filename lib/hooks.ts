"use client";

// ============================================
// Custom React Hooks
// ============================================

import { useCallback, useEffect, useState, useRef } from "react";
import { SECTION_IDS } from "./constants";
import type { SectionId } from "./constants";

// ============================================
// Scroll to Section Hook
// ============================================

/**
 * Hook that provides a function to smoothly scroll to a section by ID
 */
export function useScrollToSection() {
  const scrollToSection = useCallback((sectionId: SectionId) => {
    const section = document.getElementById(sectionId);
    section?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return scrollToSection;
}

/**
 * Pre-configured scroll functions for common sections
 */
export function useScrollNavigation() {
  const scrollToSection = useScrollToSection();

  return {
    scrollToHome: useCallback(
      () => scrollToSection(SECTION_IDS.home),
      [scrollToSection]
    ),
    scrollToAbout: useCallback(
      () => scrollToSection(SECTION_IDS.about),
      [scrollToSection]
    ),
    scrollToServices: useCallback(
      () => scrollToSection(SECTION_IDS.services),
      [scrollToSection]
    ),
    scrollToProjects: useCallback(
      () => scrollToSection(SECTION_IDS.projects),
      [scrollToSection]
    ),
    scrollToTestimonials: useCallback(
      () => scrollToSection(SECTION_IDS.testimonials),
      [scrollToSection]
    ),
    scrollToContact: useCallback(
      () => scrollToSection(SECTION_IDS.contact),
      [scrollToSection]
    ),
  };
}

// ============================================
// Mouse Position Hook
// ============================================

interface MousePosition {
  x: number;
  y: number;
}

/**
 * Hook that tracks mouse position relative to a container element
 */
export function useMousePosition(containerRef: React.RefObject<HTMLElement>) {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
  });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const containerElement = containerRef.current;
    if (!containerElement) return;

    const handleMouseMove = (event: MouseEvent) => {
      const rect = containerElement.getBoundingClientRect();
      setMousePosition({
        x: event.clientX - rect.left,
        y: event.clientY - rect.top,
      });
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    containerElement.addEventListener("mousemove", handleMouseMove);
    containerElement.addEventListener("mouseenter", handleMouseEnter);
    containerElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      containerElement.removeEventListener("mousemove", handleMouseMove);
      containerElement.removeEventListener("mouseenter", handleMouseEnter);
      containerElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [containerRef]);

  return { mousePosition, isHovering };
}

// ============================================
// Mounted State Hook
// ============================================

/**
 * Hook that returns true after the component has mounted (client-side only)
 */
export function useMounted() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted;
}

// ============================================
// Hash Change Hook
// ============================================

/**
 * Hook that tracks the current URL hash
 */
export function useHashChange() {
  const [currentHash, setCurrentHash] = useState("");

  useEffect(() => {
    // Set initial hash
    setCurrentHash(window.location.hash);

    const handleHashChange = () => {
      setCurrentHash(window.location.hash);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  return { currentHash, setCurrentHash };
}

// ============================================
// Scroll Visibility Hook
// ============================================

/**
 * Hook that returns true when scroll position passes a threshold
 */
export function useScrollVisibility(threshold = 600) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > threshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return isVisible;
}

// ============================================
// Debounced Value Hook
// ============================================

/**
 * Hook that debounces a value by the specified delay
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

// ============================================
// Local Storage Hook
// ============================================

/**
 * Hook that syncs state with localStorage
 */
export function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (value: T | ((val: T) => T)) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      if (typeof window !== "undefined") {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  return [storedValue, setValue];
}

// ============================================
// Previous Value Hook
// ============================================

/**
 * Hook that returns the previous value of a variable
 */
export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T | undefined>(undefined);

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

// ============================================
// Media Query Hook
// ============================================

/**
 * Hook that returns true if the media query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    const handler = (event: MediaQueryListEvent) => {
      setMatches(event.matches);
    };

    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [query]);

  return matches;
}

/**
 * Pre-configured media query hooks for common breakpoints
 */
export function useBreakpoints() {
  const isMobile = useMediaQuery("(max-width: 639px)");
  const isTablet = useMediaQuery("(min-width: 640px) and (max-width: 1023px)");
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isLargeDesktop = useMediaQuery("(min-width: 1280px)");

  return { isMobile, isTablet, isDesktop, isLargeDesktop };
}