import { portfolioData } from "@/lib/portfolio-data";
import { Heart } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t py-8 text-center text-sm text-muted-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="flex items-center justify-center">
          &copy; {currentYear} {portfolioData.name}. All rights reserved.
        </p>
        <p className="mt-2 flex items-center justify-center">
          Made with <Heart className="mx-1 h-4 w-4 text-primary" /> using Next.js & Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}
