// ============================================
// TypeScript Type Definitions
// ============================================

import type { SupportedLanguage, SectionId } from "./constants";

// ============================================
// Navigation Types
// ============================================

export interface NavIconSvg {
  d: string;
  viewBox: string;
}

export interface NavLink {
  href: string;
  label: string;
  iconSvg: NavIconSvg;
}

// ============================================
// Project Types
// ============================================

export interface Project {
  id: string;
  title: string;
  description: string;
  projectImage: string;
  category: string;
  liveDemoLink: string | null;
  gitHubLink: string | null;
  techs: string[];
}

export interface ProjectButtonTexts {
  exploreProject: string;
  viewGitHub: string;
}

// ============================================
// Service Types
// ============================================

export interface ServicePackage {
  id: string;
  title: string;
  description: string;
  features: string[];
  techs: string[];
  cta: string;
}

// ============================================
// Testimonial Types
// ============================================

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  project: string;
  rating: number;
}

// ============================================
// Tech Stack Types
// ============================================

export interface TechIcon {
  name: string;
  color: string;
  svgPath: string;
}

// ============================================
// Translation Types
// ============================================

export interface HomeTranslations {
  heroTitle: string;
  heroSubtitle: string;
  valueProposition: string;
  aboutText: string;
  primaryCTA: string;
  secondaryCTA: string;
  whatsapText: string;
  githubText: string;
  linkedinText: string;
  trustIndicators: Record<string, string>;
  infoSliderItems: string[];
}

export interface AboutTranslations {
  title: string;
  techTitle: string;
  aboutTitle: string;
  aboutParagraphs: string[];
  quote: {
    text: string;
    author: string;
  };
}

export interface ProjectsTranslations {
  projects: Project[];
  allText: string;
  searchPlaceholder: string;
  projectButtonTexts: ProjectButtonTexts;
  notFoundMsg: string;
  resetFiltersMsg: string;
  toBeContinuedMsg: string;
}

export interface ServicesTranslations {
  title: string;
  subtitle: string;
  packages: ServicePackage[];
}

export interface TestimonialsTranslations {
  title: string;
  subtitle: string;
  cta: string;
  items: Testimonial[];
}

export interface MailMeTranslations {
  title: string;
  subtitle: string;
  nameText: string;
  emailText: string;
  quickContact: string;
  responseTime: string;
  mailSuccessText: string;
  mailErrorText: string;
  alternativeContact: string;
}

export interface FloatingCTATranslations {
  tooltip: string;
  ariaLabel: string;
}

export interface CTATexts {
  startProject: string;
  getQuote: string;
  viewWork: string;
  contactMe: string;
  learnMore: string;
  wantThisProject: string;
}

export interface AppTranslations {
  navLinks: NavLink[];
  home: HomeTranslations;
  about: AboutTranslations;
  projects: ProjectsTranslations;
  services: ServicesTranslations;
  testimonials: TestimonialsTranslations;
  mailMe: MailMeTranslations;
  floatingCTA: FloatingCTATranslations;
  ctaTexts: CTATexts;
}

// ============================================
// Component Props Types
// ============================================

export interface SectionProps {
  id: SectionId;
  children: React.ReactNode;
}

export interface PageProps {
  params: Promise<{
    lang: SupportedLanguage;
  }>;
}

// ============================================
// Form Types
// ============================================

export type FormStatus = "idle" | "sending" | "success" | "error";

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// ============================================
// API Response Types
// ============================================

export interface EmailResponse {
  success: boolean;
  message: string;
}

// ============================================
// Context Types
// ============================================

export interface AppContextValue {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  currentHash: string;
  setCurrentHash: React.Dispatch<React.SetStateAction<string>>;
  toggleClasses: (
    target: string | Element,
    removeClasses?: string[],
    addClasses?: string[],
    delay?: number
  ) => (() => void) | undefined;
  memoizedTechIcons: TechIcon[];
  mounted: boolean;
}