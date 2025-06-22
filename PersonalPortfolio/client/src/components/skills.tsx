import { motion } from "framer-motion";
import { Laptop, Server, Wrench } from "lucide-react";
import { useState } from "react";
import InteractiveTechStack from "./interactive-tech-stack";

export default function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  
  const skillCategories = [
    {
      title: "Frontend",
      icon: Laptop,
      color: "blue",
      skills: [
        { name: "React.js", level: 4 },
        { name: "TypeScript", level: 5 },
        { name: "Tailwind CSS", level: 4 },
        { name: "Next.js", level: 4 },
      ],
    },
    {
      title: "Backend",
      icon: Server,
      color: "green",
      skills: [
        { name: "Node.js", level: 5 },
        { name: "Python", level: 4 },
        { name: "PostgreSQL", level: 4 },
        { name: "AWS", level: 3 },
      ],
    },
    {
      title: "Tools & Others",
      icon: Wrench,
      color: "purple",
      skills: [
        { name: "Git", level: 5 },
        { name: "Docker", level: 4 },
        { name: "Figma", level: 4 },
        { name: "Agile/Scrum", level: 4 },
      ],
    },
  ];

  const SkillDots = ({ level, isHovered }: { level: number; isHovered: boolean }) => (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className={`w-2 h-2 rounded-full ${
            i < level ? "bg-current" : "bg-slate-300"
          }`}
          animate={{
            scale: isHovered && i < level ? [1, 1.3, 1] : 1,
          }}
          transition={{
            duration: 0.3,
            delay: i * 0.1,
            repeat: isHovered ? Infinity : 0,
            repeatType: "reverse",
          }}
        />
      ))}
    </div>
  );

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group cursor-pointer"
              onMouseEnter={() => setHoveredCategory(categoryIndex)}
              onMouseLeave={() => setHoveredCategory(null)}
              whileHover={{ scale: 1.02 }}
            >
              <motion.div
                className={`w-16 h-16 ${
                  category.color === "blue"
                    ? "bg-blue-100 text-primary"
                    : category.color === "green"
                    ? "bg-green-100 text-accent"
                    : "bg-purple-100 text-purple-600"
                } rounded-lg flex items-center justify-center mb-6 transition-all duration-300`}
                animate={{
                  rotate: hoveredCategory === categoryIndex ? [0, 5, -5, 0] : 0,
                }}
                transition={{ duration: 0.5 }}
              >
                <category.icon className="w-8 h-8" />
              </motion.div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="flex items-center justify-between"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-slate-600">{skill.name}</span>
                    <div
                      className={
                        category.color === "blue"
                          ? "text-primary"
                          : category.color === "green"
                          ? "text-accent"
                          : "text-purple-600"
                      }
                    >
                      <SkillDots level={skill.level} isHovered={hoveredCategory === categoryIndex} />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 flex justify-center"
        >
          <InteractiveTechStack />
        </motion.div>
      </div>
    </section>
  );
}
