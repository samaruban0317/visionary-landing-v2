import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-accent">Start Free Today</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Plan Your
            <br />
            <span className="text-gradient-primary">Success Story?</span>
          </h2>

          <p className="text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
            Join early learners building better study habits with Classmate AI
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="https://visionarysparks.in" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-10 py-6 shadow-soft">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </div>

          <p className="text-sm text-muted-foreground mt-6">
            Free to use • No credit card required
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
