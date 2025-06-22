import { Button } from "@/components/ui/button";
import { Github, Linkedin, Twitter, Mail, Code } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import ParticleSystem from "./particle-system";

// Interactive Floating Elements Component
const FloatingElements = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const elements = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {elements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl"
          style={{
            width: element.size,
            height: element.size,
            left: `${element.x}%`,
            top: `${element.y}%`,
          }}
          animate={{
            x: (mousePosition.x - window.innerWidth / 2) * 0.02 * (element.id + 1),
            y: (mousePosition.y - window.innerHeight / 2) * 0.02 * (element.id + 1),
            scale: [1, 1.2, 1],
          }}
          transition={{
            x: { type: "spring", stiffness: 50, damping: 50 },
            y: { type: "spring", stiffness: 50, damping: 50 },
            scale: { duration: 4, repeat: Infinity, delay: element.delay },
          }}
        />
      ))}
    </div>
  );
};

// Animated Code Block Component
const AnimatedCodeBlock = () => {
  const codeLines = [
    "const developer = {",
    "  name: 'Ben Rogers',",
    "  skills: ['React', 'Node.js', 'TypeScript'],",
    "  passion: 'Building amazing apps',",
    "  available: true",
    "};",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="bg-slate-900/90 backdrop-blur-sm rounded-lg p-6 font-mono text-sm border border-slate-700 shadow-xl"
    >
      <div className="flex items-center mb-3 space-x-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      {codeLines.map((line, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
          className="text-green-400 mb-1"
        >
          <span className="text-slate-500 mr-2">{index + 1}</span>
          {line}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 pt-20 relative overflow-hidden"
    >
      <ParticleSystem particleCount={30} />
      <FloatingElements />
      
      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1 
                className="text-5xl md:text-6xl font-bold text-slate-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Hi, I'm <span className="text-primary bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Ben</span>
              </motion.h1>
              <motion.h2 
                className="text-2xl md:text-3xl text-slate-600 font-light"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Full Stack Developer
              </motion.h2>
              <motion.p 
                className="text-lg text-slate-600 leading-relaxed max-w-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                I create exceptional digital experiences through clean code and
                innovative solutions. Passionate about building scalable
                applications that make a difference.
              </motion.p>
            </div>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Button
                onClick={() => scrollToSection("projects")}
                className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("contact")}
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-primary hover:text-white transition-all duration-200"
              >
                Get In Touch
              </Button>
            </motion.div>

            <motion.div 
              className="flex space-x-6 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <a
                href="https://github.com"
                className="text-slate-400 hover:text-primary transition-colors duration-200 text-xl transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                className="text-slate-400 hover:text-primary transition-colors duration-200 text-xl transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://twitter.com"
                className="text-slate-400 hover:text-primary transition-colors duration-200 text-xl transform hover:scale-110"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="mailto:ben@benrogers.dev"
                className="text-slate-400 hover:text-primary transition-colors duration-200 text-xl transform hover:scale-110"
              >
                <Mail className="w-6 h-6" />
              </a>
            </motion.div>
          </motion.div>

          <div className="relative space-y-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative group">
                <motion.img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=800"
                  alt="Professional headshot of Ben Rogers"
                  className="w-80 h-80 object-cover rounded-2xl shadow-2xl mx-auto transition-transform duration-300 group-hover:scale-105"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                />
                <motion.div 
                  className="absolute -bottom-6 -right-6 w-24 h-24 bg-accent rounded-full flex items-center justify-center shadow-xl"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                >
                  <Code className="text-white text-2xl w-8 h-8" />
                </motion.div>
              </div>
            </motion.div>
            
            <AnimatedCodeBlock />
          </div>
        </div>
      </div>
    </section>
  );
}
