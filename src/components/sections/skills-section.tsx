
import { portfolioData } from "@/lib/portfolio-data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Code, Database, Cpu, GitFork, Layers, FlaskConical, MessageSquareText, BarChartBig } from "lucide-react";

const categoryIcons: { [key: string]: React.ElementType } = {
  "Languages": Code,
  "Machine Learning": Cpu,
  "Data Science & Analytics": Database,
  "Developer Tools": GitFork,
  "Libraries & Frameworks": CheckCircle,
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 sm:py-24 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 
            className="font-headline text-4xl font-bold text-primary sm:text-5xl animate-fade-in-up"
            style={{ opacity: 0, animationDelay: '100ms' }}
          >
            Technical Skills
          </h2>
          <p 
            className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up"
            style={{ opacity: 0, animationDelay: '200ms' }}
          >
            A collection of technologies and tools I'm proficient with.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {portfolioData.skills.map((skillCategory, index) => {
            const Icon = categoryIcons[skillCategory.category] || CheckCircle;
            return (
              <Card 
                key={skillCategory.category} 
                className="shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl hover:scale-[1.05] hover:-translate-y-1 animate-fade-in-up"
                style={{ opacity: 0, animationDelay: `${300 + index * 100}ms` }}
              >
                <CardHeader>
                  <CardTitle className="flex items-center text-xl font-semibold text-primary">
                    <Icon className="mr-3 h-6 w-6 text-primary/80" />
                    {skillCategory.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="px-3 py-1 text-sm bg-primary/10 text-primary hover:bg-primary/20">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

