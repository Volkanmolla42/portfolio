"use client";
import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useAppContext } from "@/app/context/AppContext";
import ProjectCard from "./ProjectCard";

// Animation variants for container animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Animation variants for individual project cards
const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function ProjectsPage() {
  // State management hooks
  const { projects } = useAppContext();
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Initialize loading state with timeout
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Extract unique categories from projects
  const categories = useMemo(() => {
    const uniqueCategories = new Set(["all"]);
    projects.forEach((project) => {
      const category = project.category?.toLowerCase();
      if (category) uniqueCategories.add(category);
    });
    return Array.from(uniqueCategories);
  }, [projects]);

  // Filter projects based on selected category and search term
  const filteredProjects = useMemo(() => {
    return projects
      .filter(
        (project) =>
          filter === "all" || project.category?.toLowerCase() === filter
      )
      .filter(
        (project) =>
          project.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
  }, [filter, projects, searchTerm]);

  return (
    <div className="size-full flex flex-col bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white">
      {/* Search and Filter Section */}
      <div className="sticky top-0  z-10 bg-gray-900/80 backdrop-blur-sm py-4 md:py-2 flex flex-col pr-1 pl-6  ">
        <input
          type="text"
          placeholder="Search projects..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className=" w-full px-6 py-4 md:py-3  my-1  rounded-xl bg-zinc-800/70  text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500"
        />

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-4 py-2 ml-3">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 font-medium text-xs rounded-full transition-all duration-300 ${
                category === filter
                  ? "bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg shadow-red-500/40"
                  : "bg-zinc-700/80 text-zinc-200 hover:bg-gradient-to-r hover:from-zinc-500 hover:to-zinc-400 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1  px-6  pb-0 ">
        <AnimatePresence mode="wait">
          {/* Loading Spinner Animation */}

          {isLoading ? (
            <motion.div
              key="loader"
              className="flex items-center justify-center h-64"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="w-16 h-16 rounded-full border-t-4 border-red-500 border-l-4"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              />
            </motion.div>
          ) : filteredProjects.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12 p-6 pt-4 pb-4"
            >
              {/* Individual Project Cards */}
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center h-64 text-zinc-400"
            >
              <svg
                className="w-16 h-16 mb-4 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p className="text-lg font-medium">No projects found</p>
              {/* Reset Filters Button */}
              <button
                className="mt-4 px-6 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium rounded-full shadow-lg hover:shadow-red-500/40"
                onClick={() => {
                  setFilter("all");
                  setSearchTerm("");
                }}
              >
                Reset Filters
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
