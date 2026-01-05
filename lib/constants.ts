// ============================================
// Site Configuration & Constants
// ============================================

export const SITE_CONFIG = {
  name: "Volkan Molla",
  title: "Hi, I'm Volkan Molla | Frontend Developer",
  description:
    "Welcome to Volkan Molla's portfolio. Explore my projects, skills, and experiences as a passionate frontend developer specializing in React and Next.js.",
  url: "https://portfolio-volkanmolla42s-projects.vercel.app",
  locale: "en_US",
  author: {
    name: "Volkan Molla",
    role: "Frontend Developer",
    email: "volkanmolla42@gmail.com",
  },
} as const;

// ============================================
// Contact & Social Links
// ============================================

export const CONTACT_INFO = {
  whatsapp: {
    number: "905418224484",
    url: "https://wa.me/905418224484",
  },
  email: "volkanmolla42@gmail.com",
  github: {
    username: "Volkanmolla42",
    url: "https://github.com/Volkanmolla42",
  },
  linkedin: {
    username: "volkan-molla-b851a3308",
    url: "https://www.linkedin.com/in/volkan-molla-b851a3308/",
  },
} as const;

// ============================================
// Supported Languages
// ============================================

export const SUPPORTED_LANGUAGES = ["en", "tr"] as const;
export type SupportedLanguage = (typeof SUPPORTED_LANGUAGES)[number];

export const DEFAULT_LANGUAGE: SupportedLanguage = "en";

// ============================================
// Navigation Section IDs
// ============================================

export const SECTION_IDS = {
  home: "home",
  about: "about",
  services: "services",
  projects: "projects",
  testimonials: "testimonials",
  contact: "contact",
} as const;

export type SectionId = (typeof SECTION_IDS)[keyof typeof SECTION_IDS];

// ============================================
// Animation Durations (in milliseconds)
// ============================================

export const ANIMATION_DURATION = {
  fast: 150,
  normal: 300,
  slow: 500,
  verySlow: 1000,
} as const;

// ============================================
// Breakpoints (matching Tailwind defaults)
// ============================================

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
} as const;

// ============================================
// Asset Paths
// ============================================

export const ASSETS = {
  images: {
    profile: "/images/177041753.jpg",
    appScreenshot: "/images/app-ss.webp",
    logo: "/main-logo.webp",
  },
  icons: {
    github: "/icons/socials-icons/github-brands-solid.svg",
    linkedin: "/icons/socials-icons/linkedin-in-brands-solid.svg",
    whatsapp: "/icons/socials-icons/whatsapp-brands-solid.svg",
  },
  sounds: {
    paperSlide: "/sounds/paper-slide.mp3",
  },
} as const;

// ============================================
// SEO Keywords
// ============================================

export const SEO_KEYWORDS = [
  "Volkan Molla",
  "Portfolio",
  "Frontend Developer",
  "Web Developer",
  "React",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "UI/UX",
  "Web Development",
] as const;