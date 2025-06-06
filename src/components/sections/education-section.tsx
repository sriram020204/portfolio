
import { portfolioData } from "@/lib/portfolio-data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CalendarDays, Award } from "lucide-react";

export function EducationSection() {
  return (
    <section id="education" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="font-headline text-4xl font-bold text-primary sm:text-5xl animate-fade-in-up"
            style={{ opacity: 0, animationDelay: '100ms' }}
          >
            Education
          </h2>
          <p 
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up"
            style={{ opacity: 0, animationDelay: '200ms' }}
          >
            My academic background and qualifications.
          </p>
        </div>
        
        <div>
          {portfolioData.education.map((edu, index) => (
            <Card 
              key={index} 
              className="shadow-lg mb-6 transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.07] hover:-translate-y-1 animate-fade-in-up max-w-3xl mx-auto"
              style={{ opacity: 0, animationDelay: `${400 + index * 100}ms` }}
            >
              <CardHeader>
                <CardTitle className="text-xl font-semibold font-headline text-primary">{edu.institution}</CardTitle>
                <CardDescription className="text-md text-muted-foreground">{edu.degree}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center text-base text-foreground/90">
                  <CalendarDays className="mr-2 h-4 w-4 text-primary/70" />
                  <span>{edu.dates}</span>
                </div>
                {edu.gpa && (
                  <div className="flex items-center text-base text-foreground/90">
                    <Award className="mr-2 h-4 w-4 text-primary/70" />
                    <span>GPA: {edu.gpa}</span>
                  </div>
                )}
                {edu.details && edu.details.map((detail, i) => (
                  <p key={i} className="text-base text-foreground/90 leading-relaxed">{detail}</p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

