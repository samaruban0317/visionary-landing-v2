import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import LearnerPaths from "@/components/landing/LearnerPaths";
import Features from "@/components/landing/Features";
import HowItWorks from "@/components/landing/HowItWorks";
import CTA from "@/components/landing/CTA";
import Footer from "@/components/landing/Footer";
import { CareerChatbot } from "@/components/chat/CareerChatbot";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <LearnerPaths />
        <Features />
        <HowItWorks />
        <CTA />
      </main>
      <Footer />
      <CareerChatbot />
    </div>
  );
};

export default Index;
