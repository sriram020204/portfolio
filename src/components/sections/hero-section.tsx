
"use client";

import { portfolioData } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import React, { useState, useEffect } from "react";
import { TypingAnimation } from "@/components/effects/typing-animation";

// Simple Kaggle Icon SVG component (can be moved to a shared icons file if used elsewhere)
const KaggleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <title>Kaggle</title>
    <path d="M15.334 16.958L12 13.623l-3.334 3.335L4.92 20.704h14.16L15.334 16.96zm.666-3.334L12 10.29l-3.975 3.975L3.21 19.128V4.872l4.815 4.815L12 5.712l3.975 3.975 4.815-4.815v14.256z" />
  </svg>
);

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
            {portfolioData.contact.kaggle && <div className="h-10 w-10 animate-pulse rounded-full bg-muted/30" />}
          </div>
        </div>
      </section>
    );
  }

  const nameParts = portfolioData.name.split(" ");
  const firstName = nameParts[0];
  const lastName = nameParts.slice(1).join(" ");

  return (
    <section
      id="hero"
      className="flex min-h-[calc(100vh-5rem)] items-center bg-gradient-to-br from-background to-secondary/30 py-20"
    >
      <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
        <h1
          className="font-headline text-5xl font-bold tracking-tight sm:text-6xl md:text-7xl animate-fade-in-up"
          style={{ animationDelay: '100ms', opacity: 0 }}
        >
          <span className="text-primary">{firstName}</span> <span className="text-foreground/80">{lastName}</span>
        </h1>
        <div
          className="mt-6 text-xl text-foreground/90 sm:text-2xl md:text-3xl animate-fade-in-up min-h-[2.5em] sm:min-h-[2.8em] md:min-h-[3em]"
          style={{ animationDelay: '200ms', opacity: 0 }}
        >
          {hasMounted && (
            <TypingAnimation
              text={portfolioData.role}
              className="text-xl text-foreground/90 sm:text-2xl md:text-3xl"
            />
          )}
        </div>
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
          {portfolioData.contact.kaggle && (
            <Link href={portfolioData.contact.kaggle} target="_blank" rel="noopener noreferrer" aria-label="Kaggle">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                <KaggleIcon className="h-7 w-7" />
              </Button>
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
