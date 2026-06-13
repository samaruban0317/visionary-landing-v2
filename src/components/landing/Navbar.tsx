import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Features", href: "/features" },
  { label: "How It Works", href: "/how-it-works" },
  { label: "For Students", href: "/for-students" },
  { label: "Blog", href: "/blog" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <svg width="40" height="40" viewBox="0 0 32 32" aria-hidden="true">
              <polygon points="16,2 30,10 30,22 16,30 2,22 2,10" fill="#13131f" stroke="#7c3aed" strokeWidth="1.2"/>
              <path d="M18,6 L12,17 L17,17 L14,28 L23,16 L18,16 Z" fill="#7c3aed"/>
              <path d="M18,6 L12,17 L17,17 L14,28 L23,16 L18,16 Z" fill="none" stroke="#22d3ee" strokeWidth="0.8" strokeLinejoin="round"/>
              <circle cx="2" cy="10" r="1.2" fill="#22d3ee"/>
              <circle cx="30" cy="10" r="1.2" fill="#7c3aed"/>
              <circle cx="30" cy="22" r="1.2" fill="#22d3ee"/>
              <circle cx="2" cy="22" r="1.2" fill="#7c3aed"/>
            </svg>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold text-gray-900">Classmate AI</span>
              <span className="text-[9px] font-semibold tracking-widest text-purple-600">VISIONARY SPARKS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://visionarysparks.in">Sign In</a>
            </Button>
            <Button size="sm" className="bg-gradient-primary hover:opacity-90" asChild>
              <a href="https://visionarysparks.in">Get Started</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="ghost" className="justify-start" asChild>
                  <a href="https://visionarysparks.in">Sign In</a>
                </Button>
                <Button className="bg-gradient-primary hover:opacity-90" asChild>
                  <a href="https://visionarysparks.in">Get Started</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
