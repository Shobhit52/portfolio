import { Github, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Ben Rogers</h3>
            <p className="text-slate-400 leading-relaxed">
              Full Stack Developer passionate about creating exceptional digital
              experiences through clean code and innovative solutions.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button
                onClick={() => scrollToSection("home")}
                className="block text-slate-400 hover:text-white transition-colors duration-200 text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block text-slate-400 hover:text-white transition-colors duration-200 text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="block text-slate-400 hover:text-white transition-colors duration-200 text-left"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="block text-slate-400 hover:text-white transition-colors duration-200 text-left"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block text-slate-400 hover:text-white transition-colors duration-200 text-left"
              >
                Contact
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                className="text-slate-400 hover:text-white transition-colors duration-200 text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                className="text-slate-400 hover:text-white transition-colors duration-200 text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                className="text-slate-400 hover:text-white transition-colors duration-200 text-xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:ben@benrogers.dev"
                className="text-slate-400 hover:text-white transition-colors duration-200 text-xl"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-center text-slate-400">
          <p>
            &copy; {currentYear} Ben Rogers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
