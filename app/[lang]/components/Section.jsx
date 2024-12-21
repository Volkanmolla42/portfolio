"use client";
import React, { useMemo } from "react";
import { useAppContext } from "@/app/[lang]/context/AppContext";
import clsx from "clsx"; // Using clsx for className management

const Section = ({ children, id }) => {
  const { currentHash } = useAppContext();

  // useMemo ensures the className is recalculated only when currentHash or id changes
  const sectionClassName = useMemo(
    () =>
      clsx(
        "size-full flex flex-col items-center justify-center gap-3 absolute inset-0 transition-opacity duration-300 bg-transparent overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-red-700 scrollbar-track-gray-800 scroll-smooth",
        {
          "opacity-100 z-50": currentHash === `#${id}`,
          "opacity-0 -z-50": currentHash !== `#${id}`,
        }
      ),
    [currentHash, id]
  ); // Dependencies: currentHash and id

  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={sectionClassName}
    >
      {children}
    </section>
  );
};

export default Section;
