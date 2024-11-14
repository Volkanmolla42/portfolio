"use client";
import { useContext, useEffect } from "react";
import { AppContext } from "../context/AppContext";
export default function NavBar() {
  const { activeHash, setActiveHash } = useContext(AppContext);
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "Me" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Touch me" },
  ];

  return (
    <div className="absolute h-screen  text-3xl md:text-5xl flex w-2/5 items-center justify-center gap-8 flex-col top-0 right-0">
      {navLinks.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className={`relative ${
            activeHash === link.href ? "text-blue-500" : "text-black"
          }`}
        >
          <span>{link.label}</span>
        </a>
      ))}
    </div>
  );
}
