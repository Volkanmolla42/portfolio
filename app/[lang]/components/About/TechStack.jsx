"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { useAppContext } from "@/app/[lang]/context/AppContext";
import JumpingCubes from "../utils/JumpingCubes";
const TechStack = () => {
  const { memoizedTechIcons } = useAppContext();

  // State definitions
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef(null);

  // Effect for tracking mouse movements
  useEffect(() => {
    const handleMouseMove = (event) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect();
        setMousePosition({
          x: event.clientX - rect.left,
          y: event.clientY - rect.top,
        });
      }
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const containerElement = containerRef.current;
    if (containerElement) {
      containerElement.addEventListener("mousemove", handleMouseMove);
      containerElement.addEventListener("mouseenter", handleMouseEnter);
      containerElement.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (containerElement) {
        containerElement.removeEventListener("mousemove", handleMouseMove);
        containerElement.removeEventListener("mouseenter", handleMouseEnter);
        containerElement.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <div className="relative w-full h-lvh overflow-hidden bg-gradient-to-bl from-gray-950 via-purple-950 to-red-900 px-8">
      <div className="size-full flex flex-col items-center justify-center">
        {/* Header */}
        <h3 className="text-3xl self-start font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-6">
          Technologies I Use
        </h3>

        {/* List of technologies */}
        <motion.div
          ref={containerRef}
          className="grid grid-cols-3  sm:grid-cols-4 gap-[3px] mb-6 w-full relative overflow-hidden bg-zinc-900 rounded-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hover effect reflection */}
          {isHovering && (
            <div
              className="absolute rounded-full bg-red-800 pointer-events-none"
              style={{
                left: `${mousePosition.x}px`,
                top: `${mousePosition.y}px`,
                width: "200px",
                height: "200px",
                transform: "translate(-50%, -50%)",
              }}
            />
          )}
          {/* Technology cards */}
          {memoizedTechIcons.map((icon, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="z-10"
            >
              <div
                className={`flex flex-col rounded-sm items-center justify-center p-2 h-24 w-full bg-gray-800 hover:outline-red-800 hover:outline hover:bg-gray-900 transition-[background-color] duration-300 cursor-pointer `}
                title={`I use ${icon.name} in my projects`}
                style={{ color: icon.color }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={30}
                  height={30}
                  viewBox="0 0 24 24"
                >
                  <path fill="currentColor" d={icon.svgPath} />
                </svg>

                <span className="text-xs mt-2 text-center text-zinc-400">
                  {icon.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom section animation */}
        <div className="w-full relative flex items-center justify-center ">
          <JumpingCubes />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
