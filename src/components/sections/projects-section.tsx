
"use client";

import type { Project } from "@/lib/portfolio-data";
import { portfolioData } from "@/lib/portfolio-data";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Github, ExternalLink, Briefcase, Sparkles } from "lucide-react";
import React, { useState } from "react";
import { explainProject, type ExplainProjectInput, type ExplainProjectOutput } from "@/ai/flows/explain-project-flow";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";


interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [aiExplanation, setAiExplanation] = useState<string | null>(null);
  const [isAiExplanationLoading, setIsAiExplanationLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);

  const handleExplainProject = async () => {
    setIsAiExplanationLoading(true);
    setAiError(null);
    setAiExplanation(null); // Clear previous explanation

    try {
      const input: ExplainProjectInput = {
        projectTitle: project.title,
        projectDescription: project.description,
      };
      const result: ExplainProjectOutput = await explainProject(input);
      setAiExplanation(result.explanation);
    } catch (error) {
      console.error("Error fetching AI explanation:", error);
      setAiError("Sorry, I couldn't generate an explanation at this moment. Please try again later.");
    } finally {
      setIsAiExplanationLoading(false);
    }
  };

  return (
    <Card 
      className="flex flex-col overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.03] hover:-translate-y-1 animate-fade-in-up"
      style={{ opacity: 0, animationDelay: `${200 + index * 100}ms` }}
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
        
        {isAiExplanationLoading && (
          <div className="mt-4 p-3 bg-muted/50 rounded-md">
            <p className="text-sm text-muted-foreground flex items-center">
              <Sparkles className="mr-2 h-4 w-4 animate-spin" />
              Generating AI explanation...
            </p>
          </div>
        )}
        {aiError && (
          <Alert variant="destructive" className="mt-4">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{aiError}</AlertDescription>
          </Alert>
        )}
        {aiExplanation && (
          <div className="mt-4 p-4 bg-secondary/40 rounded-lg shadow">
            <h5 className="text-sm font-semibold mb-2 text-primary flex items-center">
              <Sparkles className="mr-2 h-4 w-4" />
              AI Explanation
            </h5>
            <p className="text-sm text-foreground/90 leading-relaxed whitespace-pre-wrap">
              {aiExplanation}
            </p>
          </div>
        )}

      </CardContent>
      <CardFooter className="pt-4 flex-wrap gap-2">
        <div className="flex w-full items-center justify-start space-x-3 mb-2 sm:mb-0">
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
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleExplainProject} 
          disabled={isAiExplanationLoading}
          className="text-primary hover:bg-primary/10 hover:text-primary w-full sm:w-auto justify-start"
        >
          {isAiExplanationLoading ? "Thinking..." : "Ask AI to Explain"}
          {!isAiExplanationLoading && <Sparkles className="ml-2 h-4 w-4" />}
        </Button>
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
            className="font-headline text-4xl font-bold text-primary sm:text-5xl flex items-center justify-center animate-fade-in-up"
            style={{ opacity: 0, animationDelay: '100ms' }}
           >
            <Briefcase className="mr-3 h-10 w-10" />
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
