import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Projects() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "Full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include real-time inventory, admin dashboard, and mobile-responsive design.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["React", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates, drag-and-drop interface, and team collaboration features. Built with modern React patterns.",
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["React", "TypeScript", "Firebase"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Fitness Tracking App",
      description:
        "Cross-platform mobile app for fitness tracking with social features, workout plans, and progress analytics. Built with React Native and modern UI patterns.",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["React Native", "Express.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Analytics Dashboard",
      description:
        "Real-time data visualization platform with interactive charts, customizable dashboards, and advanced filtering. Processes millions of data points efficiently.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["Vue.js", "D3.js", "Python"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "Social Platform",
      description:
        "Full-featured social media platform with real-time messaging, content sharing, and advanced privacy controls. Handles thousands of concurrent users.",
      image:
        "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["Next.js", "Socket.io", "Redis"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "AI Content Generator",
      description:
        "AI-powered content generation platform using OpenAI API. Features include text generation, image creation, and content optimization with user-friendly interface.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=300",
      technologies: ["React", "OpenAI API", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  const getTechColor = (tech: string) => {
    const colors: { [key: string]: string } = {
      React: "bg-blue-100 text-primary",
      "Node.js": "bg-green-100 text-accent",
      MongoDB: "bg-purple-100 text-purple-600",
      TypeScript: "bg-yellow-100 text-yellow-600",
      Firebase: "bg-red-100 text-red-600",
      "React Native": "bg-blue-100 text-primary",
      "Express.js": "bg-green-100 text-accent",
      PostgreSQL: "bg-gray-100 text-gray-600",
      "Vue.js": "bg-blue-100 text-primary",
      "D3.js": "bg-purple-100 text-purple-600",
      Python: "bg-green-100 text-accent",
      "Next.js": "bg-blue-100 text-primary",
      "Socket.io": "bg-green-100 text-accent",
      Redis: "bg-orange-100 text-orange-600",
      "OpenAI API": "bg-green-100 text-accent",
      AWS: "bg-yellow-100 text-yellow-600",
    };
    return colors[tech] || "bg-gray-100 text-gray-600";
  };

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A showcase of my recent work and the impact I've created for clients
            and users.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white border border-slate-200 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group relative overflow-hidden"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0"
                animate={{
                  opacity: hoveredProject === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="relative overflow-hidden rounded-t-xl">
                <motion.img
                  src={project.image}
                  alt={`${project.title} mockup`}
                  className="w-full h-48 object-cover transition-transform duration-300"
                  animate={{
                    scale: hoveredProject === index ? 1.1 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"
                  animate={{
                    opacity: hoveredProject === index ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute bottom-4 left-4 right-4 flex justify-center space-x-4">
                    <motion.a
                      href={project.liveUrl}
                      className="bg-white/90 backdrop-blur-sm text-slate-900 p-2 rounded-full hover:bg-white transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{
                        y: hoveredProject === index ? 0 : 20,
                        opacity: hoveredProject === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="bg-white/90 backdrop-blur-sm text-slate-900 p-2 rounded-full hover:bg-white transition-colors duration-200"
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{
                        y: hoveredProject === index ? 0 : 20,
                        opacity: hoveredProject === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Github className="w-4 h-4" />
                    </motion.a>
                  </div>
                </motion.div>
              </div>
              <div className="p-6 relative z-10">
                <motion.h3 
                  className="text-xl font-semibold text-slate-900 mb-3"
                  animate={{
                    color: hoveredProject === index ? "#3b82f6" : "#0f172a",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      className={`px-3 py-1 text-sm rounded-full ${getTechColor(tech)}`}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ 
                        opacity: 1, 
                        scale: hoveredProject === index ? 1.05 : 1,
                      }}
                      transition={{ 
                        duration: 0.3, 
                        delay: techIndex * 0.05,
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
