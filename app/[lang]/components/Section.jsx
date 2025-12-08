"use client";
import React from "react";
import clsx from "clsx";

const Section = ({ children, id, className }) => {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={clsx(
        "min-h-screen w-full flex flex-col justify-center py-16 px-4 md:px-8",
        className
      )}
    >
      <div className="max-w-4xl mx-auto w-full">
        {children}
      </div>
    </section>
  );
};

export default Section;
