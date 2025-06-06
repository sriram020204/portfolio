
import { portfolioData } from "@/lib/portfolio-data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CalendarDays, MapPin } from "lucide-react";

export function ExperienceSection() {
  if (!portfolioData.experience || portfolioData.experience.length === 0) {
    return null;
  }

  return (
    <section id="experience" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="font-headline text-4xl font-bold text-primary sm:text-5xl animate-fade-in-up"
            style={{ opacity: 0, animationDelay: '100ms' }}
          >
            Work Experience
          </h2>
          <p 
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up"
            style={{ opacity: 0, animationDelay: '200ms' }}
          >
            My professional roles and contributions.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto space-y-8">
          {portfolioData.experience.map((exp, index) => (
            <Card 
              key={index} 
              className="shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.07] hover:-translate-y-1 animate-fade-in-up"
              style={{ opacity: 0, animationDelay: `${400 + index * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold font-headline text-primary">{exp.role}</CardTitle>
                <CardDescription className="text-md text-muted-foreground">{exp.company}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-base text-foreground/90">
                  <CalendarDays className="mr-2 h-4 w-4 text-primary/70" />
                  <span>{exp.dates}</span>
                </div>
                {exp.location && (
                  <div className="flex items-center text-base text-foreground/90">
                    <MapPin className="mr-2 h-4 w-4 text-primary/70" />
                    <span>{exp.location}</span>
                  </div>
                )}
                <ul className="list-disc list-inside space-y-1 pl-1 text-base text-foreground/90 leading-relaxed">
                  {exp.description.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

