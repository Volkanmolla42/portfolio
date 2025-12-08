"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useAppContext } from "../context/AppContext";
import { Menu, X } from "lucide-react";

const Navigation = ({ navLinks }) => {
  const { currentHash } = useAppContext();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const getLinkClasses = (linkHref) => {
    const isActive = currentHash === linkHref;
    return `flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
      isActive
        ? "bg-primary/10 text-primary"
        : "text-muted-foreground hover:bg-muted hover:text-foreground"
    }`;
  };

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border p-4 flex items-center justify-between">
        <span className="font-bold text-lg">Volkan Molla</span>
        <button
          onClick={toggleMobileMenu}
          className="p-2 text-foreground focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-background pt-20 px-6 animate-in slide-in-from-top-10 duration-200">
          <nav className="flex flex-col gap-2">
            {navLinks.map(({ href, label, iconSvg }) => (
              <a
                key={href}
                href={href}
                className={getLinkClasses(href)}
                onClick={() => setMobileMenuOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={iconSvg.viewBox}
                  className="w-5 h-5"
                >
                  <path d={iconSvg.d} fill="currentColor" />
                </svg>
                {label}
              </a>
            ))}
          </nav>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 h-screen fixed left-0 top-0 border-r border-border bg-card">
        <div className="p-6 border-b border-border">
          <h1 className="text-xl font-bold">Volkan Molla</h1>
          <p className="text-xs text-muted-foreground mt-1">Frontend Developer</p>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4">
          <nav className="flex flex-col gap-2">
            {navLinks.map(({ href, label, iconSvg }) => (
              <a
                key={href}
                href={href}
                className={getLinkClasses(href)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox={iconSvg.viewBox}
                  className="w-5 h-5"
                >
                  <path d={iconSvg.d} fill="currentColor" />
                </svg>
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="p-4 border-t border-border">
          <p className="text-xs text-center text-muted-foreground">
            © {new Date().getFullYear()} Volkan Molla
          </p>
        </div>
      </aside>
    </>
  );
};

export default Navigation;
