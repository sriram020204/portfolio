
"use client";

import { portfolioData } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import React from 'react';

// Simple Kaggle Icon SVG component
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


export function ContactSection() {
  return (
    <section id="contact" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="font-headline text-4xl font-bold text-primary sm:text-5xl animate-fade-in-up"
            style={{ opacity: 0, animationDelay: '100ms' }}
          >
            Get In Touch
          </h2>
          <p
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up"
            style={{ opacity: 0, animationDelay: '200ms' }}
          >
            Feel free to reach out for collaborations, opportunities, or just a chat.
          </p>
        </div>

        <div
          className="animate-fade-in-up"
          style={{ opacity: 0, animationDelay: '300ms' }}
        >
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-10 md:gap-x-12">
            <Link href={`mailto:${portfolioData.contact.email}`} className="flex items-center group text-base sm:text-lg">
              <Mail className="mr-2 h-5 w-5 sm:mr-3 sm:h-6 sm:w-6 text-primary/80 group-hover:text-primary transition-colors" />
              <span className="text-foreground/90 group-hover:text-primary transition-colors">{portfolioData.contact.email}</span>
            </Link>
            <Link href={`tel:${portfolioData.contact.phone.replace(/\s/g, "")}`} className="flex items-center group text-base sm:text-lg">
              <Phone className="mr-2 h-5 w-5 sm:mr-3 sm:h-6 sm:w-6 text-primary/80 group-hover:text-primary transition-colors" />
              <span className="text-foreground/90 group-hover:text-primary transition-colors">{portfolioData.contact.phone}</span>
            </Link>
            <Link href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center group text-base sm:text-lg">
              <Linkedin className="mr-2 h-5 w-5 sm:mr-3 sm:h-6 sm:w-6 text-primary/80 group-hover:text-primary transition-colors" />
              <span className="text-foreground/90 group-hover:text-primary transition-colors">LinkedIn</span>
            </Link>
            <Link href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center group text-base sm:text-lg">
              <Github className="mr-2 h-5 w-5 sm:mr-3 sm:h-6 sm:w-6 text-primary/80 group-hover:text-primary transition-colors" />
              <span className="text-foreground/90 group-hover:text-primary transition-colors">GitHub</span>
            </Link>
            {portfolioData.contact.kaggle && (
              <Link href={portfolioData.contact.kaggle} target="_blank" rel="noopener noreferrer" className="flex items-center group text-base sm:text-lg">
                <KaggleIcon className="mr-2 h-5 w-5 sm:mr-3 sm:h-6 sm:w-6 text-primary/80 group-hover:text-primary transition-colors" />
                <span className="text-foreground/90 group-hover:text-primary transition-colors">Kaggle</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
