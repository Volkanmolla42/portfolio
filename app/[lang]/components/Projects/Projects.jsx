"use client";
import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

export default function Projects({ data }) {
  // State management hooks
  const { projects } = data;
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState(data.allText);
  const [searchTerm, setSearchTerm] = useState("");

  // Initialize loading state with timeout
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Extract unique categories from projects
  const categories = useMemo(() => {
    if (!data?.allText || !projects) return [];
    const uniqueCategories = new Set([
      data.allText,
      ...projects.map((p) => p.category?.toLowerCase()),
    ]);
    return Array.from(uniqueCategories);
  }, [projects, data?.allText]);

  // Filter projects based on selected category and search term
  const filteredProjects = useMemo(() => {
    if (!data?.allText || !projects) return [];
    return projects.filter(
      (project) =>
        (filter === data.allText ||
          project.category?.toLowerCase() === filter) &&
        (project.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          project.description?.toLowerCase().includes(searchTerm.toLowerCase()))
    );
  }, [filter, projects, searchTerm, data?.allText]);

  return (
    <div className="w-full flex flex-col space-y-8">
      <div className="space-y-2 text-center md:text-left">
        <h2 className="text-3xl font-bold">Projects</h2>
        <p className="text-muted-foreground">Check out some of my recent work</p>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center justify-between sticky top-0 z-10 bg-background/80 backdrop-blur-md py-4 -mx-4 px-4 md:mx-0 md:px-0">
        {/*  Filter Section */}
        <div className="flex overflow-x-auto pb-2 md:pb-0 gap-2 scrollbar-none">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-2 font-medium text-sm rounded-full transition-all whitespace-nowrap ${
                category === filter
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted text-muted-foreground hover:bg-muted/80"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>
        <input
          type="text"
          placeholder={data.searchPlaceholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full md:w-64 px-4 py-2 rounded-lg bg-input border border-border text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      {/* Main Content Area */}
      <div className="min-h-[500px]">
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
              <div className="w-12 h-12 rounded-full border-4 border-primary border-t-transparent animate-spin" />
            </motion.div>
          ) : filteredProjects.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6"
            >
              {/* Individual Project Cards */}
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="h-full"
                >
                  <ProjectCard
                    project={project}
                    buttonTexts={data.projectButtonTexts}
                  />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center h-64 text-muted-foreground"
            >
              <svg
                className="w-16 h-16 mb-4 text-muted-foreground/50"
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
              <p className="text-lg font-medium">{data.notFoundMsg}</p>
              {/* Reset Filters Button */}
              <button
                className="mt-4 px-6 py-2 bg-primary text-primary-foreground font-medium rounded-full shadow-lg hover:bg-primary/90 transition-colors"
                onClick={() => {
                  setFilter(data.allText);
                  setSearchTerm("");
                }}
              >
                {data.resetFiltersMsg}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {!isLoading && filteredProjects.length > 0 && (
          <div className="w-full pt-12 text-center italic text-muted-foreground font-medium">
            {data.toBeContinuedMsg}
          </div>
        )}
      </div>
    </div>
  );
}
