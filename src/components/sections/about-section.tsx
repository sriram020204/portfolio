import { portfolioData } from "@/lib/portfolio-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { UserCircle } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl font-bold text-primary sm:text-5xl">
            About Me
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            A brief introduction to who I am and what I do.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-1 flex justify-center">
            <div className="relative h-48 w-48 sm:h-64 sm:w-64 rounded-full overflow-hidden shadow-xl border-4 border-primary/20">
              <Image 
                src="https://placehold.co/300x300.png" 
                alt={portfolioData.name} 
                layout="fill"
                objectFit="cover"
                data-ai-hint="professional portrait"
                className="transform transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
          <div className="md:col-span-2">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-semibold text-primary">
                  <UserCircle className="mr-3 h-8 w-8" />
                  Ginjala Sri Ram Kumar Reddy
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-base text-foreground/90 leading-relaxed">
                {portfolioData.aboutMe.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
