import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-slate-900">
            Ben Rogers
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-slate-600 hover:text-primary transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-slate-600 hover:text-primary transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-slate-600 hover:text-primary transition-colors duration-200"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-slate-600 hover:text-primary transition-colors duration-200"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-slate-600 hover:text-primary transition-colors duration-200"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-200">
            <div className="flex flex-col space-y-3 pt-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-slate-600 hover:text-primary transition-colors duration-200 py-2 text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-600 hover:text-primary transition-colors duration-200 py-2 text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-slate-600 hover:text-primary transition-colors duration-200 py-2 text-left"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-slate-600 hover:text-primary transition-colors duration-200 py-2 text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-slate-600 hover:text-primary transition-colors duration-200 py-2 text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
