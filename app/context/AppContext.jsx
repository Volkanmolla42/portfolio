"use client";
import React, {
  createContext,
  useState,
  useEffect,
  useContext,
  useCallback,
} from "react";
import localFont from "next/font/local";
export const AppContext = createContext();

const bokor = localFont({
  src: "../fonts/Bokor-Regular.ttf",
  weight: "400",
  style: "normal",
  subsets: ["khmer"],
  display: "swap",
});

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
      label: "Mail Me",
      icon: "/icons/menu-icons/envelope-solid.svg",
    },
  ];

  const projects = [
    {
      id: "1",
      title: "Online ChatApp",
      description: "Modern chatapp with real-time messaging",
      features: [
        "Real-time messaging",
        "User authentication",
        "Photo sending",
        "Online status",
        "Password reset",
        "User profile management",
        "Chat history",
        "User privacy",
        "Changeable theme",
        "Fully responsive design",
      ],
      image: "/images/atom.png",
      category: "web app",
      link: "https://full-stack-chat-app-git-main-volkanmolla42s-projects.vercel.app/chat",
      techs: ["React", "Node.js", "Firebase", "Vanilla CSS"],
    },
    {
      id: "2",
      title: "Mobil Fitness Uygulaması",
      description: "Kişiselleştirilmiş egzersiz planları sunan uygulama",
      image: "/placeholder.svg?height=300&width=400",
      category: "app",
      link: "https://example.com/fitness-app",
      techs: ["React", "Node.js", "MongoDB"],
    },
    {
      id: "3",
      title: "Veri Görselleştirme Dashboardu",
      description: "Karmaşık verileri anlaşılır grafiklerle sunan dashboard",
      image: "/placeholder.svg?height=300&width=400",
      category: "website",
      link: "https://example.com/data-viz",
      techs: ["React", "Node.js", "MongoDB"],
    },
    // Daha fazla proje ekleyebilirsiniz
  ];

  const handleHashChange = () => {
    setcurrentHash(window.location.hash);
  };

  useEffect(() => {
    const capitalizeHash = (hash) => {
      return hash.slice(1, 2).toUpperCase() + hash.slice(2);
    };

    document.title = "Hi, I'm Volkan Molla - " + capitalizeHash(currentHash);
    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [currentHash]);

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

  const value = {
    isMenuOpen,
    setIsMenuOpen,
    currentHash,
    setcurrentHash,
    navLinks,
    toggleClasses,
    currentHash,
    bokor,
    projects,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => useContext(AppContext);
