
"use client";

import type { Project } from "@/lib/portfolio-data";
import { portfolioData } from "@/lib/portfolio-data";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Github, ExternalLink } from "lucide-react";
import React from "react";


interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <Card
      className="flex flex-col overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.07] hover:-translate-y-1 animate-fade-in-up"
      style={{ opacity: 0, animationDelay: `${300 + index * 100}ms` }}
    >
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-semibold font-headline text-primary">{project.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow space-y-3">
        {project.description.map((desc, idx) => (
          <p key={idx} className="text-sm text-foreground/80 leading-relaxed">
            {desc}
          </p>
        ))}
        <div className="pt-2">
          <h4 className="text-sm font-medium text-muted-foreground mb-2">Tech Stack:</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-4 flex-wrap gap-2">
        <div className="flex w-full items-center justify-start space-x-3">
          {project.githubLink && (
            <Button variant="outline" size="sm" asChild>
              <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
          )}
          {project.liveLink && (
              <Button variant="default" size="sm" asChild>
                <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                </Link>
              </Button>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}


export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
           <h2
            className="font-headline text-4xl font-bold text-primary sm:text-5xl animate-fade-in-up"
            style={{ opacity: 0, animationDelay: '100ms' }}
           >
            Projects
          </h2>
          <p
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up"
            style={{ opacity: 0, animationDelay: '200ms' }}
          >
            Showcasing some of the key projects I've worked on.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioData.projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

