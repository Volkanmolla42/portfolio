"use client";
import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import { useAppContext } from "@/app/[lang]/context/AppContext";

const TechStack = ({ data }) => {
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
    <div className="w-full h-full flex flex-col gap-6">
      {/* Header */}
      <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">
        {data.techTitle}
      </h3>

      {/* List of technologies */}
      <motion.div
        ref={containerRef}
        className="grid grid-cols-3 sm:grid-cols-4 gap-2 w-full relative overflow-hidden bg-card border border-border rounded-xl p-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Hover effect reflection */}
        {isHovering && (
          <div
            className="absolute rounded-full bg-primary/10 pointer-events-none blur-xl"
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
            transition={{ duration: 0.3, delay: index * 0.05 }}
            className="relative z-10"
          >
            <div
              className="flex flex-col items-center justify-center p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200 cursor-pointer h-24"
              title={`I use ${icon.name} in my projects`}
              style={{ color: icon.color }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={32}
                height={32}
                viewBox="0 0 24 24"
              >
                <path fill="currentColor" d={icon.svgPath} />
              </svg>

              <span className="text-xs mt-2 text-center text-muted-foreground font-medium">
                {icon.name}
              </span>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default TechStack;
