import React from "react";
import { useAppContext } from "@/app/context/AppContext";
const Section = ({ children, id }) => {
  const { currentHash } = useAppContext();
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`flex  flex-col items-center justify-center gap-3 absolute inset-0 snap-start scroll-smooth  transition-opacity duration-500  ${
        currentHash === `#${id}` ? "opacity-100" : "opacity-0"
      }`}
    >
      {children}
    </section>
  );
};

export default Section;
