import { UserPlus, Compass, ClipboardList, Trophy } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Choose Your Path",
    description: "Select your learner profile - Teen, College, or Professional - and tell us about your goals."
  },
  {
    number: "02",
    icon: Compass,
    title: "Get Your Roadmap",
    description: "Our AI creates a personalized learning roadmap with clear milestones and timelines."
  },
  {
    number: "03",
    icon: ClipboardList,
    title: "Follow & Track",
    description: "Complete daily and weekly checklists while tracking your progress in real-time."
  },
  {
    number: "04",
    icon: Trophy,
    title: "Achieve Your Goals",
    description: "Celebrate milestones, earn badges, and reach your educational objectives."
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How <span className="text-gradient-primary">Classmate AI</span> Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Four simple steps to transform your learning journey
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-12 left-[60%] w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent" />
                )}
                
                <div className="text-center">
                  {/* Number */}
                  <div className="text-6xl font-bold text-primary/10 mb-4">{step.number}</div>
                  
                  {/* Icon */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-white mb-5 shadow-soft">
                    <step.icon className="w-8 h-8" />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
