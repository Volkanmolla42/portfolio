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

const bokor = localFont({
  src: "../fonts/Bokor-Regular.ttf",
  weight: "400",
  style: "normal",
  subsets: ["khmer"],
  display: "swap",
});

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentHash, setCurrentHash] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        description: "Modern chatapp with real-time messaging",

        projectImage: "/images/projectImages/chatapp/ss2.jpeg",
        category: "Apps",
        liveDemoLink:
          "https://full-stack-chat-app-git-main-volkanmolla42s-projects.vercel.app/chat",
        gitHubLink: "https://github.com/Volkanmolla42/fullStack-chat-app",
        techs: ["React & Vite", "Node.js", "Firebase", "Vanilla CSS", "Vercel"],
      },
      {
        id: "2",
        title: "Apple.com clone",
        description: "Apple.com clone with React and Gsap",

        projectImage: "/images/projectImages/appleWebsite/apple-ss1.png",
        category: "websites",
        liveDemoLink:
          "https://apple-website-m5a6uzoiq-volkanmolla42s-projects.vercel.app/",
        gitHubLink: "https://github.com/Volkanmolla42/apple-website",
        techs: [
          "React & Vite",
          "Node.js",
          "GSAP",
          "Three.js",
          "Tailwind CSS",
          "Vercel",
        ],
      },
      {
        id: "3",
        title: "Amazon.com clone",
        description: "Amazon.com clone with vanilla html, css & javascript",

        projectImage: "/images/projectImages/amazon/amazon-ss.png",
        category: "websites",
        liveDemoLink: "https://volkanmolla42.github.io/Amazon_site/amazon.html",
        gitHubLink: "https://github.com/Volkanmolla42/Amazon_site",
        techs: ["HTML", "CSS", "JAVASCRIPT"],
      },
      {
        id: "4",
        title: "Starbucks.com.tr clone",
        description: "Starbucks.com.tr clone with html, css & Bootstrap",

        projectImage: "/images/projectImages/starbucks/starbucks-ss.png",
        category: "websites",
        liveDemoLink: "https://volkanmolla42.github.io/Starbucks_site/",
        gitHubLink: "https://github.com/Volkanmolla42/Starbucks_site",
        techs: ["HTML", "CSS", "Bootstrap"],
      },
      {
        id: "5",
        title: "Frontend Bootcamp",
        description:
          "A modern frontend developer bootcamp site designed using HTML, CSS, and Bootstrap. This project features a user-friendly interface and stylish design.",

        projectImage: "/images/projectImages/bootcamp/bootcamp-ss.png",
        category: "websites",
        liveDemoLink: "https://volkanmolla42.github.io/Bootcamp_site/",
        gitHubLink: "https://github.com/Volkanmolla42/Bootcamp_site",
        techs: ["HTML", "CSS", "Bootstrap"],
      },
      {
        id: "6",
        title: "New Design",
        description:
          "A sleek and modern platform for web design. Built with HTML, CSS, JavaScript, and Bootstrap to deliver a user-focused experience.",

        projectImage: "/images/projectImages/design/design-ss.png",
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

  const value = useMemo(
    () => ({
      isMenuOpen,
      setIsMenuOpen,
      currentHash,
      setCurrentHash,
      navLinks,
      toggleClasses,
      bokor,
      projects,
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
