
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
  const contactItems = [
    {
      href: `mailto:${portfolioData.contact.email}`,
      icon: Mail,
      text: portfolioData.contact.email,
      ariaLabel: "Email Ginjala Sri Ram Kumar Reddy",
      minWidthClass: "sm:min-w-[280px]",
    },
    {
      href: `tel:${portfolioData.contact.phone.replace(/\s/g, "")}`,
      icon: Phone,
      text: portfolioData.contact.phone,
      ariaLabel: "Call Ginjala Sri Ram Kumar Reddy",
      minWidthClass: "sm:min-w-[240px]",
    },
    {
      href: portfolioData.contact.linkedin,
      icon: Linkedin,
      text: "LinkedIn",
      target: "_blank",
      ariaLabel: "Ginjala Sri Ram Kumar Reddy's LinkedIn Profile",
      minWidthClass: "sm:min-w-[180px]",
    },
    {
      href: portfolioData.contact.github,
      icon: Github,
      text: "GitHub",
      target: "_blank",
      ariaLabel: "Ginjala Sri Ram Kumar Reddy's GitHub Profile",
      minWidthClass: "sm:min-w-[180px]",
    },
  ];

  if (portfolioData.contact.kaggle) {
    contactItems.push({
      href: portfolioData.contact.kaggle,
      icon: KaggleIcon,
      text: "Kaggle",
      target: "_blank",
      ariaLabel: "Ginjala Sri Ram Kumar Reddy's Kaggle Profile",
      minWidthClass: "sm:min-w-[180px]",
    });
  }

  return (
    <section id="contact" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            className="font-headline text-4xl font-bold sm:text-5xl animate-fade-in-up"
            style={{ opacity: 0, animationDelay: '100ms' }}
          >
            <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-text-gradient-flow bg-[size:200%_auto]">
              Get In Touch
            </span>
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
          <div className="mt-8 flex flex-wrap items-stretch justify-center gap-4 sm:gap-6 md:gap-8">
            {contactItems.map((item) => (
              <div 
                key={item.text} 
                className={`flex flex-col items-center justify-center p-4 sm:p-6 border rounded-lg shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-[1.03] hover:-translate-y-1 bg-card text-center min-w-[150px] ${item.minWidthClass}`}
              >
                <item.icon className="h-7 w-7 sm:h-8 sm:w-8 text-primary mb-2 sm:mb-3" />
                <Link 
                  href={item.href} 
                  target={item.target} 
                  rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                  aria-label={item.ariaLabel}
                  className="text-sm sm:text-base font-medium text-foreground/90 hover:text-primary transition-colors break-words"
                >
                  {item.text}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
