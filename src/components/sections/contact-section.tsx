
"use client";

import { portfolioData } from "@/lib/portfolio-data";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import Link from "next/link";

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

        <div className="max-w-lg mx-auto">
          <div
            className="animate-fade-in-up"
            style={{ opacity: 0, animationDelay: '300ms' }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-primary text-center md:text-left">Contact Information</h3>
            <div className="space-y-4">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
