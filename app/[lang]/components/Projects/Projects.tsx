"use client";

import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { 
  containerVariants, 
  itemVariants, 
  fadeInUpVariants,
  spinnerAnimation,
  spinnerTransition,
  viewportOnce 
} from "@/lib/animations";
import { useScrollNavigation } from "@/lib/hooks";
import { SadFaceIcon } from "../ui/icons";
import type { ProjectsTranslations } from "@/lib/types";

// ============================================
// Types
// ============================================

interface ProjectsProps {
  data: ProjectsTranslations;
}

// ============================================
// Projects Component
// ============================================

export default function Projects({ data }: ProjectsProps) {
  const { scrollToContact } = useScrollNavigation();
  const { projects } = data;
  
  // State management
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

  // Reset filters handler
  const handleResetFilters = () => {
    setFilter(data.allText);
    setSearchTerm("");
  };

  return (
    <div className="size-full flex flex-col text-white">
      {/* Enhanced Header */}
      <div className="text-center py-8 px-4">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ delay: 0.2 }}
          className="text-zinc-400 text-lg max-w-3xl mx-auto"
        >
          Modern teknolojilerle geliştirilmiş, performanslı ve kullanıcı dostu projelerim
        </motion.p>
      </div>

      {/* Search and Filter Section */}
      <div className="flex flex-col-reverse gap-4 px-3 pb-2 pt-4 md:flex-row md:items-center sticky top-0 z-10 backdrop-blur-xs">
        {/* Filter Section */}
        <div className="flex text-nowrap gap-2">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 font-medium text-xs rounded-full transition-all duration-300 ${
                category === filter
                  ? "bg-gradient-to-r from-red-600 to-red-800 text-white shadow-lg shadow-red-500/40"
                  : "bg-zinc-800 text-zinc-200 hover:bg-gradient-to-r hover:from-zinc-700 hover:to-zinc-600 hover:text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </div>
        
        {/* Search Input */}
        <input
          type="text"
          placeholder={data.searchPlaceholder}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-5 py-3 my-1 rounded-xl bg-zinc-800 text-white placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>

      {/* Main Content Area */}
      <div className="flex-1 py-4 md:px-6 pb-0">
        <AnimatePresence mode="wait">
          {/* Loading Spinner */}
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
                animate={spinnerAnimation}
                transition={spinnerTransition}
              />
            </motion.div>
          ) : filteredProjects.length > 0 ? (
            <>
              {/* Projects Grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-12 p-6 pt-4 pb-4"
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    variants={itemVariants}
                    whileHover={{ y: -5 }}
                  >
                    <ProjectCard
                      project={project}
                      buttonTexts={data.projectButtonTexts}
                    />
                  </motion.div>
                ))}
              </motion.div>

              {/* Bottom CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                className="w-full py-12 text-center"
              >
                <div className="max-w-3xl mx-auto px-4">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    Sizin Projenizi de Burada Görmek İster misiniz? 🎯
                  </h3>
                  <p className="text-zinc-400 mb-6">
                    Hayalinizdeki projeyi birlikte hayata geçirelim
                  </p>
                  <button
                    onClick={scrollToContact}
                    className="px-8 py-4 bg-gradient-to-r from-red-600 to-fuchsia-600 hover:from-red-500 hover:to-fuchsia-500 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105"
                  >
                    Hemen Başlayalım 🚀
                  </button>
                </div>
              </motion.div>

              {/* To Be Continued Message */}
              <div className="w-full pb-4 text-center italic text-muted-foreground text-lg font-bold">
                {data.toBeContinuedMsg}
              </div>
            </>
          ) : (
            /* Empty State */
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center justify-center h-64 text-zinc-400"
            >
              <SadFaceIcon className="w-16 h-16 mb-4" />
              <p className="text-lg font-medium">{data.notFoundMsg}</p>
              <button
                className="mt-4 px-6 py-2 bg-gradient-to-r from-red-500 to-orange-500 text-white font-medium rounded-full shadow-lg hover:shadow-red-500/40"
                onClick={handleResetFilters}
              >
                {data.resetFiltersMsg}
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}