import { motion } from "framer-motion";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiGreensock,
  SiThreedotjs,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiFirebase,
  SiMongodb,
  SiGit,
  SiBootstrap,
} from "react-icons/si";
import React, { useState, useEffect, useRef } from "react";
import JumpingCubes from "../jumpingCubes/JumpingCubes";

// List of technologies
const technologies = [
  { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-[#000000] dark:text-white",
  },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "GSAP", icon: SiGreensock, color: "text-[#88CE02]" },
  {
    name: "Three.js",
    icon: SiThreedotjs,
    color: "text-[#000000] dark:text-white",
  },
  { name: "HTML", icon: SiHtml5, color: "text-[#E34F26]" },
  { name: "CSS", icon: SiCss3, color: "text-[#1572B6]" },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-[#6b46c1]" },
  { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" },
  { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" },
  { name: "Git", icon: SiGit, color: "text-[#F05032]" },
];

const TechStack = () => {
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
        <h3 className="text-3xl self-start font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
          Technologies I Use
        </h3>

        {/* List of technologies */}
        <motion.div
          ref={containerRef}
          className="grid grid-cols-3 sm:grid-cols-4 gap-[3px] mb-4 w-full relative overflow-hidden bg-zinc-900 rounded-xl"
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
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.2 }}
              className="z-10"
            >
              <div
                className="flex flex-col rounded-sm items-center justify-center p-2 h-24 w-full bg-gray-800 hover:outline-red-800 hover:outline hover:bg-gray-900 transition-[background-color] duration-500 cursor-pointer"
                title={`I use ${tech.name} in my projects`}
              >
                <tech.icon className={`text-2xl ${tech.color}`} />
                <span className="text-xs mt-2 text-center text-white">
                  {tech.name}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom section animation */}
        <div className="w-full relative flex items-center justify-center mb-2">
          <JumpingCubes />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
