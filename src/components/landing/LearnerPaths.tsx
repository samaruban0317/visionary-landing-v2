import { GraduationCap, BookOpen, Briefcase, ArrowRight, CheckCircle2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const paths = [
  {
    id: "teen",
    icon: BookOpen,
    title: "Teen Students",
    subtitle: "Academic Excellence",
    duration: "1-Year Program",
    description: "Master your academic year with structured learning plans, exam preparation, and skill-building activities.",
    features: [
      "Subject-wise study roadmaps",
      "Weekly progress checklists",
      "Exam preparation guides",
      "Extracurricular balance tips"
    ],
    gradient: "bg-gradient-primary",
    accentColor: "text-primary",
    bgAccent: "bg-primary/10"
  },
  {
    id: "college",
    icon: GraduationCap,
    title: "College Students",
    subtitle: "Career Foundation",
    duration: "4-Year Journey",
    description: "Navigate your college years with career-focused guidance, internship planning, and skill development tracks.",
    features: [
      "Semester-by-semester planning",
      "Internship & project roadmaps",
      "Skills portfolio building",
      "Industry connection strategies"
    ],
    gradient: "bg-gradient-secondary",
    accentColor: "text-secondary",
    bgAccent: "bg-secondary/10"
  },
  {
    id: "professional",
    icon: Briefcase,
    title: "Professionals",
    subtitle: "Career Advancement",
    duration: "Continuous Growth",
    description: "Accelerate your career with promotion-focused plans, upskilling paths, and leadership development tracks.",
    features: [
      "Promotion roadmap planning",
      "Skill gap analysis & training",
      "Leadership development",
      "Industry certification guides"
    ],
    gradient: "bg-gradient-accent",
    accentColor: "text-accent",
    bgAccent: "bg-accent/10"
  }
];

const LearnerPaths = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Choose Your <span className="text-gradient-primary">Learning Path</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Tailored roadmaps designed for every stage of your educational journey
          </p>
        </div>

        {/* Path Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {paths.map((path) => (
            <Card 
              key={path.id}
              className="group relative overflow-hidden border-2 border-transparent hover:border-primary/20 transition-all duration-300 shadow-card hover:shadow-elevated"
            >
              <CardContent className="p-8">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl ${path.gradient} mb-6`}>
                  <path.icon className="w-7 h-7 text-white" />
                </div>

                {/* Duration Badge */}
                <div className={`inline-flex items-center px-3 py-1 rounded-full ${path.bgAccent} ${path.accentColor} text-xs font-medium mb-4`}>
                  {path.duration}
                </div>

                {/* Title & Description */}
                {(path.id === "college" || path.id === "professional") && (
                  <Badge variant="secondary" className="mb-2">Coming Soon</Badge>
                )}
                <h3 className="text-2xl font-bold mb-1">{path.title}</h3>
                <p className={`text-sm font-medium ${path.accentColor} mb-3`}>{path.subtitle}</p>
                <p className="text-muted-foreground mb-6">{path.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {path.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className={`w-5 h-5 ${path.accentColor} flex-shrink-0 mt-0.5`} />
                      <span className="text-sm text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a href="https://visionarysparks.in" target="_blank" rel="noopener noreferrer" className="block w-full">
                  <Button
                    className={`w-full ${path.gradient} hover:opacity-90 group-hover:translate-x-0 transition-transform`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearnerPaths;
