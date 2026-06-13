import Layout from "@/components/landing/Layout";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { BookOpen, Sword, Map, CalendarCheck, Zap } from "lucide-react";

const features = [
  {
    icon: <BookOpen className="w-7 h-7 text-purple-600" />,
    title: "Astra Study",
    body: "Ask anything. Get answers tuned to your age, goal, and learning style. Explains JEE concepts differently than Python basics.",
  },
  {
    icon: <Sword className="w-7 h-7 text-purple-600" />,
    title: "Quests RPG",
    body: "Boring word problems become missions. Solve a math problem as a Police Detective. Earn XP. Stay hooked.",
  },
  {
    icon: <Map className="w-7 h-7 text-purple-600" />,
    title: "AI Roadmaps",
    body: "Tell us your dream. We generate a 3-tier roadmap: long-term milestones, short-term objectives, this week's tasks.",
  },
  {
    icon: <CalendarCheck className="w-7 h-7 text-purple-600" />,
    title: "Daily Consistency Loop",
    body: "Every day: 3 tasks from your roadmap. Check them off. Earn XP. Build a streak. Miss a day? No guilt — just catch up.",
  },
  {
    icon: <Zap className="w-7 h-7 text-purple-600" />,
    title: "XP + Streaks",
    body: "Login bonus. 30-min activity bonus. Quest XP. Streak multipliers. The dopamine loop that makes studying addictive.",
  },
];

const FeaturesPage = () => (
  <Layout>
    <PageSEO
      title="Features | Classmate AI — AI Tutor for Indian Students"
      description="Explore Classmate AI features: Astra AI tutor, RPG quests, personalized roadmaps, daily tasks and XP streaks built for Indian students."
      path="/features"
    />

    {/* Hero */}
    <section className="py-20 px-4 text-center bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Everything You Need to Stay Consistent
        </h1>
        <p className="text-xl text-gray-600">
          Not just an AI tutor. A system that keeps you going.
        </p>
      </div>
    </section>

    {/* Feature cards */}
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-8">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-md transition-shadow">
            <div className="mb-4">{f.icon}</div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h2>
            <p className="text-gray-600 leading-relaxed">{f.body}</p>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 px-4 text-center bg-purple-50">
      <div className="container mx-auto max-w-xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Start Free</h2>
        <p className="text-gray-600 mb-8">No credit card. No catch.</p>
        <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-10" asChild>
          <a href="https://visionarysparks.in">Get Started Free</a>
        </Button>
      </div>
    </section>
  </Layout>
);

export default FeaturesPage;
