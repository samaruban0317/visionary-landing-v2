import { Sparkles } from "lucide-react";

const Footer = () => {
  const footerLinks: Record<string, { label: string; href: string }[]> = {
    Product: [
      { label: "Features", href: "#features" },
      { label: "Roadmaps", href: "#paths" },
      { label: "FAQ", href: "#how-it-works" },
    ],
    Paths: [
      { label: "Teen Students", href: "#paths" },
      { label: "College Students", href: "#paths" },
      { label: "Professionals", href: "#paths" },
    ],
    Company: [
      { label: "About", href: "https://visionarysparks.in" },
      { label: "Blog", href: "https://visionarysparks.in" },
      { label: "Careers", href: "mailto:hello@visionarysparks.in" },
      { label: "Contact", href: "mailto:hello@visionarysparks.in" },
    ],
    Legal: [
      { label: "Privacy", href: "https://visionarysparks.in" },
      { label: "Terms", href: "https://visionarysparks.in" },
      { label: "Cookies", href: "https://visionarysparks.in" },
    ],
  };

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-xl bg-gradient-primary flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Classmate AI</span>
            </div>
            <p className="text-background/60 max-w-sm mb-6">
              Your AI companion for structured learning. Clear roadmaps, smart checklists, and personalized guidance.
            </p>
            <p className="text-sm text-background/40">
              A good plan is half done.
            </p>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-background/60 hover:text-background transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/40">
            © 2026 Visionary Sparks. All rights reserved.
          </p>
          <a href="mailto:hello@visionarysparks.in" className="text-sm text-background/60 hover:text-background transition-colors">
            hello@visionarysparks.in
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
