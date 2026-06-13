import { Link } from "react-router-dom";
import Layout from "@/components/landing/Layout";
import PageSEO from "@/components/PageSEO";

const posts = [
  {
    slug: "how-to-crack-jee-with-ai",
    title: "How to Use AI to Crack JEE Advanced in 2026",
    excerpt: "Why traditional prep fails and how an AI study roadmap keeps you on track — from daily tasks to concept explanations tuned for JEE level.",
    tag: "JEE / NEET",
    readTime: "6 min read",
  },
  {
    slug: "python-roadmap-beginners-india",
    title: "The Complete Python Learning Roadmap for Beginners in India (2026)",
    excerpt: "A 4-month Python roadmap that mirrors what Classmate AI generates — resources, daily habits, and the mindset shift that makes it stick.",
    tag: "Python",
    readTime: "7 min read",
  },
  {
    slug: "how-to-build-study-streak",
    title: "How to Build a Study Streak That Actually Sticks",
    excerpt: "Motivation fades. Systems don't. Learn the XP and gamification psychology behind streaks — and how daily tasks outperform willpower every time.",
    tag: "Study Habits",
    readTime: "5 min read",
  },
];

const BlogPage = () => (
  <Layout>
    <PageSEO
      title="Blog | Classmate AI — Study Tips & AI Learning"
      description="Study tips, AI learning strategies and roadmaps for Indian students — JEE, Python, placement prep and building consistent study habits."
      path="/blog"
    />

    <section className="py-20 px-4 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto max-w-3xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Blog</h1>
        <p className="text-xl text-gray-600">Study tips, roadmaps, and AI learning strategies for Indian students.</p>
      </div>
    </section>

    <section className="py-16 px-4">
      <div className="container mx-auto max-w-3xl space-y-8">
        {posts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="block rounded-2xl border border-gray-100 bg-white p-8 shadow-sm hover:shadow-md transition-shadow group"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-xs font-semibold uppercase tracking-widest text-purple-600 bg-purple-100 px-2 py-0.5 rounded-full">
                {post.tag}
              </span>
              <span className="text-xs text-gray-400">{post.readTime}</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
              {post.title}
            </h2>
            <p className="text-gray-600 leading-relaxed text-sm">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  </Layout>
);

export default BlogPage;
