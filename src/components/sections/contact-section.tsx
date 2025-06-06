
"use client";

import { portfolioData } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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

        <div className="max-w-md mx-auto">
          <Card
            className="shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.07] hover:-translate-y-1 animate-fade-in-up"
            style={{ opacity: 0, animationDelay: '300ms' }}
          >
            <CardHeader>
              <CardTitle className="flex items-center text-2xl font-semibold text-primary">
                <Mail className="mr-3 h-8 w-8" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link href={`mailto:${portfolioData.contact.email}`} className="flex items-center group">
                <Mail className="mr-3 h-6 w-6 text-primary/80 group-hover:text-primary transition-colors" />
                <span className="text-base text-foreground/90 group-hover:text-primary transition-colors">{portfolioData.contact.email}</span>
              </Link>
              <Link href={`tel:${portfolioData.contact.phone.replace(/\s/g, "")}`} className="flex items-center group">
                <Phone className="mr-3 h-6 w-6 text-primary/80 group-hover:text-primary transition-colors" />
                <span className="text-base text-foreground/90 group-hover:text-primary transition-colors">{portfolioData.contact.phone}</span>
              </Link>
              <Link href={portfolioData.contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center group">
                <Linkedin className="mr-3 h-6 w-6 text-primary/80 group-hover:text-primary transition-colors" />
                <span className="text-base text-foreground/90 group-hover:text-primary transition-colors">LinkedIn Profile</span>
              </Link>
              <Link href={portfolioData.contact.github} target="_blank" rel="noopener noreferrer" className="flex items-center group">
                <Github className="mr-3 h-6 w-6 text-primary/80 group-hover:text-primary transition-colors" />
                <span className="text-base text-foreground/90 group-hover:text-primary transition-colors">GitHub Profile</span>
              </Link>
              {portfolioData.contact.kaggle && (
                <Link href={portfolioData.contact.kaggle} target="_blank" rel="noopener noreferrer" className="flex items-center group">
                  <KaggleIcon className="mr-3 h-6 w-6 text-primary/80 group-hover:text-primary transition-colors" />
                  <span className="text-base text-foreground/90 group-hover:text-primary transition-colors">Kaggle Profile</span>
                </Link>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
