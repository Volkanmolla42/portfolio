"use client";
import React, { createContext, useState, useEffect } from "react";

export const AppContext = createContext(undefined);

export const AppProvider = ({ children }) => {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, [setActiveHash]);

  return (
    <AppContext.Provider value={{ activeHash, setActiveHash }}>
      {children}
    </AppContext.Provider>
  );
};
