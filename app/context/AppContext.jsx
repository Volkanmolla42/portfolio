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
const itim = localFont({
  src: "../fonts/Itim-Regular.ttf",
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

  const navLinks = useMemo(
    () => [
      {
        href: "#home",
        label: "Home",
        icon: "/icons/menu-icons/house-solid.svg",
      },
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
        label: "Mail Me",
        icon: "/icons/menu-icons/envelope-solid.svg",
      },
    ],
    []
  );

  const projects = useMemo(
    () => [
      {
        id: "1",
        title: "Real-time Chat App",
        description:
          "Modern chat application offering real-time messaging with a sleek interface. Powered by Firebase for reliable and fast communication.",
        projectImage: "/images/projectImages/chatapp.webp",
        category: "Apps",
        liveDemoLink:
          "https://full-stack-chat-app-git-main-volkanmolla42s-projects.vercel.app/chat",
        gitHubLink: "https://github.com/Volkanmolla42/fullStack-chat-app",
        techs: ["React & Vite", "Node.js", "Firebase", "Vanilla CSS", "Vercel"],
      },
      {
        id: "2",
        title: "Apple.com clone",
        description:
          "Pixel-perfect clone of Apple's website, featuring immersive animations with GSAP and Three.js for a premium user experience.",
        projectImage: "/images/projectImages/apple.webp",
        category: "websites",
        liveDemoLink:
          "https://apple-website-m5a6uzoiq-volkanmolla42s-projects.vercel.app/",
        gitHubLink: "https://github.com/Volkanmolla42/apple-website",
        techs: ["React & Vite", "GSAP", "Three.js", "Tailwind CSS", "Vercel"],
      },
      {
        id: "3",
        title: "Amazon.com clone",
        description:
          "Minimalist replica of Amazon's website built with HTML, CSS, and JavaScript, focusing on essential design and features.",
        projectImage: "/images/projectImages/amazon.webp",
        category: "websites",
        liveDemoLink: "https://volkanmolla42.github.io/Amazon_site/amazon.html",
        gitHubLink: "https://github.com/Volkanmolla42/Amazon_site",
        techs: ["HTML", "CSS", "JAVASCRIPT"],
      },
      {
        id: "4",
        title: "Starbucks.com.tr clone",
        description:
          "Polished replica of Starbucks Turkey's website built with HTML, CSS, and Bootstrap for a seamless browsing experience.",
        projectImage: "/images/projectImages/starbucks.webp",
        category: "websites",
        liveDemoLink: "https://volkanmolla42.github.io/Starbucks_site/",
        gitHubLink: "https://github.com/Volkanmolla42/Starbucks_site",
        techs: ["HTML", "CSS", "Bootstrap"],
      },
      {
        id: "5",
        title: "Frontend Bootcamp",
        description:
          "Modern training site for aspiring frontend developers, featuring a stylish interface built with Bootstrap for a responsive experience.",
        projectImage: "/images/projectImages/bootcamp.webp",
        category: "websites",
        liveDemoLink: "https://volkanmolla42.github.io/Bootcamp_site/",
        gitHubLink: "https://github.com/Volkanmolla42/Bootcamp_site",
        techs: ["HTML", "CSS", "Bootstrap"],
      },
      {
        id: "6",
        title: "New Design",
        description:
          "Sleek web design project combining modern aesthetics with user-centered functionality for an impressive digital experience.",
        projectImage: "/images/projectImages/design.webp",
        category: "websites",
        liveDemoLink: "https://volkanmolla42.github.io/Design_site/",
        gitHubLink: "https://github.com/Volkanmolla42/Design_site",
        techs: ["HTML", "CSS", "JAVASCRIPT", "Bootstrap"],
      },
    ],
    []
  );

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
      navLinks,
      toggleClasses,
      itim,
      projects,
      memoizedTechIcons,
    }),
    [isMenuOpen, currentHash, navLinks, toggleClasses, projects]
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
