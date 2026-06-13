import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import FeaturesPage from "./pages/FeaturesPage";
import HowItWorksPage from "./pages/HowItWorksPage";
import ForStudentsPage from "./pages/ForStudentsPage";
import BlogPage from "./pages/BlogPage";
import JeeBlogPost from "./pages/blog/JeeBlogPost";
import PythonBlogPost from "./pages/blog/PythonBlogPost";
import StudyStreakBlogPost from "./pages/blog/StudyStreakBlogPost";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/how-it-works" element={<HowItWorksPage />} />
            <Route path="/for-students" element={<ForStudentsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/how-to-crack-jee-with-ai" element={<JeeBlogPost />} />
            <Route path="/blog/python-roadmap-beginners-india" element={<PythonBlogPost />} />
            <Route path="/blog/how-to-build-study-streak" element={<StudyStreakBlogPost />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
