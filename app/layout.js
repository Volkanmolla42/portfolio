import React from "react";
import "./globals.css";
import NavBar from "./components/NavBar";
import { AppProvider } from "./context/AppContext";
import HamburgerMenu from "./components/buttons/HamburgerMenu";
import Image from "next/image";

const navLinks = [
  {
    href: "#home",
    label: "Home",
    icon: "/icons/menu-icons/house-solid.svg",
  },
  { href: "#about", label: "Me", icon: "/icons/menu-icons/user-solid.svg" },
  {
    href: "#projects",
    label: "My Creations",
    icon: "/icons/menu-icons/cubes-solid.svg",
  },
  {
    href: "#contact",
    label: "Touch Me",
    icon: "/icons/menu-icons/envelope-solid.svg",
  },
];

const NavLink = ({ href, label, icon }) => (
  <a
    href={href}
    className="flex flex-col gap-1 hover:bg-zinc-700 transition-colors duration-300 justify-center items-center py-3 w-full md:py-0 md:px-4 md:h-full"
  >
    <Image
      src={icon}
      alt={`${label} icon`}
      className="menu-svg"
      width={25}
      height={25}
    />
    <span className="hidden md:block text-xs">{label}</span>
  </a>
);

const RootLayout = ({ children }) => {
  return (
    <AppProvider>
      <html lang="en">
        <body className="bg-zinc-900">
          <div className="perspective active">
            <header className="text-white fixed bottom-0 md:top-0 md:left-0 md:w-max w-full z-50">
              <nav className="flex bg-zinc-800 items-center justify-evenly md:flex-col md:h-full">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.href}
                    href={link.href}
                    label={link.label}
                    icon={link.icon}
                  />
                ))}
              </nav>
            </header>
            <main>{children}</main>
          </div>
          <HamburgerMenu />
          <NavBar />
        </body>
      </html>
    </AppProvider>
  );
};

export default RootLayout;
