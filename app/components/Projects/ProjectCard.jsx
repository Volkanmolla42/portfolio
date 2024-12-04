import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import React from "react";

function ProjectCard({ project }) {
  const {
    title = "Untitled Project",
    description = "No description available",
    projectImage = "",
    liveDemoLink,
    gitHubLink,
    techs = [],
  } = project || {};

  return (
    <Card
      className="group relative flex flex-col h-full bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-lg shadow-lg hover:shadow-red-600/30 transition-all duration-300 ease-in-out  text-red-100"
      aria-labelledby={`project-title-${title}`}
      role="article"
    >
      {/* Görsel */}
      <CardHeader className="relative overflow-hidden rounded-t-lg p-0">
        <div className="relative w-full h-48 overflow-hidden">
          <Image
            src={projectImage || "/placeholder.jpg"}
            alt={
              projectImage
                ? `${title} project's visual representation`
                : "Placeholder image for projects"
            }
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-110"
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"
            aria-hidden="true"
          ></div>
        </div>
      </CardHeader>

      {/* Başlık ve Açıklama */}
      <CardContent className="flex-grow p-4 space-y-3">
        <CardTitle
          id={`project-title-${title}`}
          className="text-xl font-semibold tracking-wider text-red-100 group-hover:text-red-400 transition-colors duration-300"
        >
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-zinc-400 line-clamp-3">
          {description}
        </CardDescription>
      </CardContent>

      {/* Teknoloji Listesi */}
      {techs.length > 0 && (
        <div className="px-4 pb-3">
          <ul
            className="flex flex-wrap gap-2"
            aria-label="Technologies used in the project"
          >
            {techs.map((tech) => (
              <li
                key={tech}
                className="px-2 py-1 text-[10px] font-medium tracking-wider text-zinc-300 bg-zinc-700/50 rounded-full transition-all duration-300 hover:bg-red-600/30 hover:text-red-100"
                role="listitem"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Butonlar */}
      <CardFooter className="flex flex-col md:flex-row gap-3 p-4">
        {liveDemoLink && (
          <Button
            asChild
            className="w-full hover:underline underline-offset-4 text-sm font-medium bg-red-600/80 hover:bg-red-700 text-white transition-all duration-300 hover:shadow-md hover:shadow-red-600/30"
          >
            <a
              href={liveDemoLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit the live demo of ${title}`}
            >
              <ExternalLink
                className="inline-block mr-2"
                size={16}
                aria-hidden="true"
              />
              Explore Project
            </a>
          </Button>
        )}
        {gitHubLink && (
          <Button
            asChild
            className="w-full hover:underline underline-offset-4 text-sm font-medium bg-zinc-700/50 hover:bg-zinc-600/80 text-zinc-100 transition-all duration-300 hover:shadow-md hover:shadow-zinc-600/30"
          >
            <a
              href={gitHubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${title} on GitHub`}
            >
              <ExternalLink
                className="inline-block mr-2"
                size={16}
                aria-hidden="true"
              />
              See on GitHub
            </a>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}

export default ProjectCard;
