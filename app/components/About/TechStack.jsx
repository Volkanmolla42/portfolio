import React from "react";
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
import JumpingCubes from "../jumpingCubes/JumpingCubes";

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
  { name: "HTML", icon: SiHtml5, color: "text-[#E34F26] " },
  { name: "CSS", icon: SiCss3, color: "text-[#1572B6] " },
  { name: "JavaScript", icon: SiJavascript, color: "text-[#F7DF1E]" },
  { name: "Bootstrap", icon: SiBootstrap, color: "text-[#6b46c1]" },
  { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28] " },
  { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248] " },
  { name: "Git", icon: SiGit, color: "text-[#F05032] " },
];

const TechStack = () => {
  return (
    <div className="w-full h-lvh overflow-hidden bg-gradient-to-bl from-gray-900 via-purple-950 to-red-900 px-8">
      <div className=" size-full   flex flex-col  items-center justify-center ">
        <h3 className="text-3xl self-start font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8">
          Technologies I Use
        </h3>

        <motion.div
          className="grid grid-cols-3 sm:grid-cols-4 gap-4  mb-6 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <div
                className="flex flex-col items-center justify-center p-2 h-20 w-full bg-gray-800 bg-opacity-50 rounded-lg hover:bg-opacity-75 transition-colors cursor-pointer"
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
        <div className="w-full relative flex items-center justify-center">
          <JumpingCubes />
        </div>
      </div>
    </div>
  );
};

export default TechStack;
