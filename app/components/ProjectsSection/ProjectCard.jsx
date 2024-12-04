import { Button } from "@/app/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";
import Image from "next/image";
import React from "react";

function ProjectCard({ project }) {
  return (
    <Card className=" text-red-200  flex flex-col h-full bg-zinc-800 border-none shadow-sm shadow-red-800">
      <CardHeader>
        <Image
          src={project.image}
          alt={project.title + " image"}
          width={600}
          height={400}
          loading="lazy"
          className="object-cover w-full h-48 rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="flex-grow py-4">
        <CardTitle className="tracking-wider mb-2">{project.title}</CardTitle>
        <CardDescription className="tracking-wide">
          {project.description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button asChild>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            View Project
          </a>
        </Button>
      </CardFooter>
      <p className="px-5 pb-3 text-sm text-red-500">
        {project?.techs?.map((tech) => tech).join(", ") ||
          "No technologies listed"}{" "}
      </p>
    </Card>
  );
}

export default ProjectCard;
