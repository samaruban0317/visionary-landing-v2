import Layout from "@/components/landing/Layout";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";

const steps = [
  {
    n: "01",
    title: "Sign up free",
    body: "Enter your name, age, and goal. No credit card.",
  },
  {
    n: "02",
    title: "Set your archetype",
    body: "Grinder (exams), Innovator (skills/career), or Dreamer (big goals). This shapes every answer Astra gives.",
  },
  {
    n: "03",
    title: "Generate your roadmap",
    body: "Tell Pathfinder your dream. One AI call. A full 3-tier roadmap appears: long-term milestones, weekly plan, today's tasks.",
  },
  {
    n: "04",
    title: "Study daily with Astra",
    body: "Ask questions. Complete quests. Earn XP. Astra knows your goal and level — answers are always relevant.",
  },
  {
    n: "05",
    title: "Track your streak",
    body: "Check off daily tasks. Login bonus every day. 7-day streak = bonus XP. The system keeps you going.",
  },
];

const HowItWorksPage = () => (
  <Layout>
    <PageSEO
      title="How It Works | Classmate AI"
      description="Learn how Classmate AI works in 5 steps: sign up, set your archetype, generate an AI roadmap, study with Astra, and track your streak."
      path="/how-it-works"
    />

    <section className="py-20 px-4 text-center bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          How Classmate AI Works
        </h1>
        <p className="text-xl text-gray-600">Five steps from signup to unstoppable study habit.</p>
      </div>
    </section>

    <section className="py-16 px-4">
      <div className="container mx-auto max-w-3xl">
        <ol className="relative border-l-2 border-purple-200 space-y-12 pl-8">
          {steps.map((step) => (
            <li key={step.n} className="relative">
              <span className="absolute -left-[2.85rem] flex items-center justify-center w-12 h-12 rounded-full bg-purple-600 text-white font-bold text-sm">
                {step.n}
              </span>
              <h2 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h2>
              <p className="text-gray-600 leading-relaxed">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>

    <section className="py-20 px-4 text-center bg-purple-50">
      <div className="container mx-auto max-w-xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Ready to start?</h2>
        <p className="text-gray-600 mb-8">Takes 2 minutes to set up. Free forever at the core.</p>
        <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-10" asChild>
          <a href="https://visionarysparks.in">Get Started Free</a>
        </Button>
      </div>
    </section>
  </Layout>
);

export default HowItWorksPage;
