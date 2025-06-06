
"use client";

import { portfolioData } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import React, { useState, useEffect } from "react";

export function HeroSection() {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return (
      <section
        id="hero"
        className="flex min-h-[calc(100vh-5rem)] items-center bg-gradient-to-br from-background to-secondary/30 py-20"
      >
        <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
          {/* Placeholder for H1 */}
          <div className="mx-auto h-16 w-3/4 animate-pulse rounded-md bg-muted/30 sm:h-20 md:h-24"></div>
          {/* Placeholder for P (role) */}
          <div className="mx-auto mt-6 h-8 w-1/2 animate-pulse rounded-md bg-muted/30 sm:h-10 md:h-12"></div>
          {/* Placeholder for P (tagline) */}
          <div className="mx-auto mt-8 h-6 w-5/6 max-w-3xl animate-pulse rounded-md bg-muted/30 sm:h-7"></div>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <div className="h-11 w-40 animate-pulse rounded-md bg-primary/30" />
            <div className="h-11 w-40 animate-pulse rounded-md bg-muted/30" />
          </div>
          <div className="mt-12 flex justify-center space-x-6">
            <div className="h-10 w-10 animate-pulse rounded-full bg-muted/30" />
            <div className="h-10 w-10 animate-pulse rounded-full bg-muted/30" />
            <div className="h-10 w-10 animate-pulse rounded-full bg-muted/30" />
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="hero"
      className="flex min-h-[calc(100vh-5rem)] items-center bg-gradient-to-br from-background to-secondary/30 py-20"
    >
      <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <h1 
          className="font-headline text-5xl font-bold tracking-tight text-primary sm:text-6xl md:text-7xl animate-fade-in-up"
          style={{ animationDelay: '100ms', opacity: 0 }}
        >
          {portfolioData.name}
        </h1>
        <p 
          className="mt-6 text-xl text-foreground/90 sm:text-2xl md:text-3xl animate-fade-in-up"
          style={{ animationDelay: '200ms', opacity: 0 }}
        >
          {portfolioData.role}
        </p>
        <p 
          className="mx-auto mt-8 max-w-3xl text-lg text-muted-foreground sm:text-xl animate-fade-in-up"
          style={{ animationDelay: '300ms', opacity: 0 }}
        >
          {portfolioData.heroTagline}
        </p>
        <div 
          className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row animate-fade-in-up"
          style={{ animationDelay: '400ms', opacity: 0 }}
        >
          <Button size="lg" asChild>
            <Link href="#projects">View Projects</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="#contact">Get in Touch <ArrowDown className="ml-2 h-5 w-5" /></Link>
          </Button>
        </div>
        <div 
          className="mt-12 flex justify-center space-x-6 animate-fade-in-up"
          style={{ animationDelay: '500ms', opacity: 0 }}
        >
          <Link href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <Github className="h-7 w-7" />
            </Button>
          </Link>
          <Link href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <Linkedin className="h-7 w-7" />
            </Button>
          </Link>
          <Link href={`mailto:${portfolioData.contact.email}`} aria-label="Email">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <Mail className="h-7 w-7" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
