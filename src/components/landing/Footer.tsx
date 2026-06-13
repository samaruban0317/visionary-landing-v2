import { Link } from "react-router-dom";

const HexBolt = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" aria-hidden="true">
    <polygon points="16,2 30,10 30,22 16,30 2,22 2,10" fill="#13131f" stroke="#7c3aed" strokeWidth="1.2"/>
    <path d="M18,6 L12,17 L17,17 L14,28 L23,16 L18,16 Z" fill="#7c3aed"/>
    <path d="M18,6 L12,17 L17,17 L14,28 L23,16 L18,16 Z" fill="none" stroke="#22d3ee" strokeWidth="0.8" strokeLinejoin="round"/>
    <circle cx="2" cy="10" r="1.2" fill="#22d3ee"/>
    <circle cx="30" cy="10" r="1.2" fill="#7c3aed"/>
    <circle cx="30" cy="22" r="1.2" fill="#22d3ee"/>
    <circle cx="2" cy="22" r="1.2" fill="#7c3aed"/>
  </svg>
);

const Footer = () => {
  const footerLinks: Record<string, { label: string; href: string; external?: boolean }[]> = {
    Product: [
      { label: "Features", href: "/features" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "For Students", href: "/for-students" },
      { label: "Blog", href: "/blog" },
    ],
    Learn: [
      { label: "Crack JEE with AI", href: "/blog/how-to-crack-jee-with-ai" },
      { label: "Python Roadmap", href: "/blog/python-roadmap-beginners-india" },
      { label: "Build a Study Streak", href: "/blog/how-to-build-study-streak" },
    ],
    Company: [
      { label: "About", href: "https://visionarysparks.in", external: true },
      { label: "Careers", href: "mailto:hello@visionarysparks.in", external: true },
      { label: "Contact", href: "mailto:hello@visionarysparks.in", external: true },
    ],
    Legal: [
      { label: "Privacy", href: "https://visionarysparks.in", external: true },
      { label: "Terms", href: "https://visionarysparks.in", external: true },
    ],
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <HexBolt />
              <div className="flex flex-col leading-none">
                <span className="text-lg font-bold text-background">Classmate AI</span>
                <span className="text-[9px] font-semibold tracking-widest" style={{ color: "#22d3ee" }}>VISIONARY SPARKS</span>
              </div>
            </div>
            <p className="text-background/60 max-w-sm mb-6">
              Your AI companion for structured learning. Clear roadmaps, smart checklists, and personalized guidance.
            </p>
            <p className="text-sm text-background/40">A good plan is half done.</p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        className="text-sm text-background/60 hover:text-background transition-colors"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-sm text-background/60 hover:text-background transition-colors"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/40">© 2026 Visionary Sparks. All rights reserved.</p>
          <a href="mailto:hello@visionarysparks.in" className="text-sm text-background/60 hover:text-background transition-colors">
            hello@visionarysparks.in
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
