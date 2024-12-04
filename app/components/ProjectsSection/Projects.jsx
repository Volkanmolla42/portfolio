"use client";

import { useState } from "react";

import { Button } from "@/app/components/ui/button";
import { useAppContext } from "@/app/context/AppContext";
import ProjectCard from "./ProjectCard";

const categories = ["all", "app", "website"];

export default function ProjectsPage() {
  const { projects } = useAppContext();
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>

      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setFilter(category)}
            className={`font-bold text-red-700 border-none outline outline-[0.1em]  rounded-md hover:bg-zinc-800 ${
              category === filter ? " outline-[3]" : ""
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </Button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}
