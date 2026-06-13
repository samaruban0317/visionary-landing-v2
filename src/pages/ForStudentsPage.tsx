import Layout from "@/components/landing/Layout";
import PageSEO from "@/components/PageSEO";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const personas = [
  {
    title: "JEE / NEET Grinder",
    emoji: "🎯",
    body: "Roadmap from today to exam day. Daily tasks. Quest problems in your exam context. Astra explains concepts at JEE level.",
    color: "border-purple-200 bg-purple-50",
  },
  {
    title: "Python / Tech Learner",
    emoji: "💻",
    body: "Month-by-month Python roadmap. Daily coding tasks. Astra explains code line by line. Quest missions in your dream job context.",
    color: "border-cyan-200 bg-cyan-50",
  },
  {
    title: "Placement Prep",
    emoji: "🏢",
    body: "Skills gap analysis. Interview prep roadmap. Daily tasks toward your target company. Astra answers DSA + HR questions.",
    color: "border-indigo-200 bg-indigo-50",
  },
];

const freeFeatures = [
  "Astra Study chat",
  "Quest RPG (5 quests/day)",
  "Roadmap generation",
  "Daily tasks + XP",
  "Streak tracking",
];

const ForStudentsPage = () => (
  <Layout>
    <PageSEO
      title="For Students | Free AI Tutor — JEE, NEET, Python & More | Classmate AI"
      description="Free AI tutor for Indian students — JEE, NEET, Python, placement prep. Personalized roadmaps, daily tasks, XP and streaks. No credit card needed."
      path="/for-students"
    />

    {/* Hero */}
    <section className="py-20 px-4 text-center bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Built for Indian Students.{" "}
          <span className="text-purple-600">Free Forever</span> at the Core.
        </h1>
        <p className="text-xl text-gray-600">
          Whether you're cracking JEE, learning Python, or prepping for placements — Classmate AI meets you where you are.
        </p>
      </div>
    </section>

    {/* Persona cards */}
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-10">Who is it for?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {personas.map((p) => (
            <div key={p.title} className={`rounded-2xl border p-8 ${p.color}`}>
              <div className="text-4xl mb-4">{p.emoji}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{p.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Free features */}
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto max-w-xl text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">What's always free</h2>
        <ul className="space-y-3 text-left inline-block">
          {freeFeatures.map((f) => (
            <li key={f} className="flex items-center gap-3 text-gray-700">
              <Check className="w-5 h-5 text-green-500 shrink-0" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 px-4 text-center bg-purple-50">
      <div className="container mx-auto max-w-xl">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Join free — takes 2 minutes</h2>
        <p className="text-gray-600 mb-8">No credit card. No catch. Just start learning.</p>
        <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white px-10" asChild>
          <a href="https://visionarysparks.in">Get Started Free</a>
        </Button>
      </div>
    </section>
  </Layout>
);

export default ForStudentsPage;
