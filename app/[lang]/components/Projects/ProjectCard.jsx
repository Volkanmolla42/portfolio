import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import React from "react";
import clsx from "clsx"; // Import clsx for dynamic class management
import { Button } from "../ui/button";

const ProjectCard = ({ project, buttonTexts }) => {
  const {
    title = "Untitled Project",
    description = "No description available",
    projectImage = "/placeholder.jpg",
    liveDemoLink,
    gitHubLink,
    techs = [],
  } = project || {};

  return (
    <Card
      className={clsx(
        "group relative min-h-[420px] flex flex-col h-full bg-zinc-800 backdrop-blur-xs border border-zinc-700/50 rounded-lg shadow-lg",
        "hover:shadow-red-600/30 transition-all duration-200 ease-in-out"
      )}
      aria-labelledby={`project-title-${title}`}
      role="article"
    >
      {/* Image */}
      <CardHeader className="relative overflow-hidden rounded-t-lg p-0">
        <div className="relative w-full overflow-hidden">
          <div
            className="absolute inset-0 bg-linear-to-t from-zinc-900 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-200"
            aria-hidden="true"
          ></div>
          <Image
            src={projectImage}
            alt={`${title} project's visual representation`}
            width={400}
            height={400}
            priority
            className="size-full transition-transform duration-200 group-hover:scale-110 object-contain"
          />
        </div>
      </CardHeader>

      {/* Title and Description */}
      <CardContent className="grow p-4 space-y-3">
        <CardTitle
          id={`project-title-${title}`}
          className="text-2xl font-semibold tracking-wider text-red-100 group-hover:text-red-400 transition-colors duration-200"
        >
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-zinc-400 group-hover:text-white line-clamp-4">
          {description}
        </CardDescription>
      </CardContent>

      {/* Technology List */}
      {techs.length > 0 && (
        <div className="px-4 pb-3 cursor-default">
          <ul
            className="flex flex-wrap gap-2"
            aria-label="Technologies used in the project"
          >
            {techs.map((tech) => (
              <li
                key={tech}
                className="px-2 py-1 text-[10px] font-medium tracking-wider text-zinc-300 bg-zinc-700/50 rounded-full transition-all duration-200 hover:bg-red-600/30 hover:text-red-100"
                role="listitem"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Buttons */}
      <CardFooter className="flex flex-col lg:flex-row gap-1 px-4 pb-4">
        {[
          {
            link: liveDemoLink,
            label: `Visit the live demo of ${title}`,
            text: buttonTexts.exploreProject,
            className:
              "bg-red-600/80 hover:bg-red-700 text-white hover:shadow-red-600/30",
            icon: (
              <ExternalLink
                className="inline-block mr-2"
                size={16}
                aria-hidden
              />
            ),
          },
          {
            link: gitHubLink,
            label: `View ${title} on GitHub`,
            text: buttonTexts.viewGitHub,
            className:
              "bg-zinc-700/50 hover:bg-zinc-600/80 text-zinc-300 hover:shadow-zinc-600/30",
            icon: (
              <Image
                src="/icons/socials-icons/github-brands-solid.svg"
                alt="GitHub icon"
                width={16}
                height={16}
                className="inline-block aspect-square"
                aria-hidden
              />
            ),
          },
        ].map(({ link, label, text, className, icon }, index) => (
          <Button
            asChild
            key={index}
            className={clsx(
              "w-full text-sm font-medium transition-all duration-200 hover:underline underline-offset-4 hover:shadow-md",
              className
            )}
          >
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
            >
              {text}
              {icon}
            </a>
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
