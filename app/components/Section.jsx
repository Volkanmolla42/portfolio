import React from "react";
import { useAppContext } from "@/app/context/AppContext";
const Section = ({ children, id }) => {
  const { currentHash } = useAppContext();
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={` size-full flex flex-col items-center justify-center gap-3 absolute inset-0 transition-opacity duration-500 bg-transparent overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-red-700 scrollbar-track-gray-800 scroll-smooth  ${
        currentHash === `#${id}` ? "opacity-100 z-50 " : "opacity-0 -z-50 "
      }`}
    >
      {children}
    </section>
  );
};

export default Section;
