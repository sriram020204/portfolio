
import { portfolioData } from "@/lib/portfolio-data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { UserCircle } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="font-headline text-4xl font-bold text-primary sm:text-5xl animate-fade-in-up"
            style={{ opacity: 0, animationDelay: '100ms' }}
          >
            About Me
          </h2>
          <p 
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up"
            style={{ opacity: 0, animationDelay: '200ms' }}
          >
            A brief introduction to who I am and what I do.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          <div 
            className="md:col-span-3 animate-fade-in-up"
            style={{ opacity: 0, animationDelay: '300ms' }}
          >
            <Card className="shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.07] hover:-translate-y-1">
              <CardHeader>
                <CardTitle className="flex items-center text-2xl font-semibold text-primary">
                  <UserCircle className="mr-3 h-8 w-8" />
                  {portfolioData.name}
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

