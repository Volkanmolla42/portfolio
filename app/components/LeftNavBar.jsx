"use client";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Image from "next/image";

export default function LeftNavBar() {
  const { navLinks, activeHash } = useContext(AppContext);
  return navLinks.map((link) => (
    <a
      key={link.href}
      href={link.href}
      className={`flex flex-col gap-1 hover:bg-zinc-700 transition-colors duration-300 justify-center items-center py-3 w-full md:py-0 md:px-4 md:h-full ${
        activeHash === link.href ? "bg-zinc-700" : ""
      }`}
    >
      <Image
        src={link.icon}
        alt={`${link.label} icon`}
        width={25}
        height={25}
      />
      <span className="hidden md:block text-xs">{link.label}</span>
    </a>
  ));
}
