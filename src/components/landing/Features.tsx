import { 
  Route, 
  ListChecks, 
  Brain, 
  Target, 
  Calendar, 
  TrendingUp 
} from "lucide-react";

const features = [
  {
    icon: Route,
    title: "Smart Roadmaps",
    description: "AI-generated learning paths tailored to your goals, pace, and learning style."
  },
  {
    icon: ListChecks,
    title: "Interactive Checklists",
    description: "Track your progress with satisfying checklists that keep you motivated and on track."
  },
  {
    icon: Brain,
    title: "AI Guidance",
    description: "Get personalized recommendations and support from your AI learning companion."
  },
  {
    icon: Target,
    title: "Goal Setting",
    description: "Define clear milestones and celebrate achievements along your learning journey."
  },
  {
    icon: Calendar,
    title: "Study Scheduling",
    description: "Intelligent scheduling that adapts to your lifestyle and optimizes retention."
  },
  {
    icon: TrendingUp,
    title: "Progress Analytics",
    description: "Visualize your growth with detailed insights and performance metrics."
  }
];

const Features = () => {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Everything You Need to <span className="text-gradient-secondary">Succeed</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features designed to make learning structured, engaging, and effective
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/20 hover:shadow-card transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary mb-5 group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
