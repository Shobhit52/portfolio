import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface TechIcon {
  id: string;
  name: string;
  color: string;
  x: number;
  y: number;
  size: number;
  rotation: number;
}

export default function InteractiveTechStack() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const techStack = [
    { name: "React", color: "#61DAFB", icon: "⚛️" },
    { name: "TypeScript", color: "#3178C6", icon: "📘" },
    { name: "Node.js", color: "#339933", icon: "🟢" },
    { name: "Python", color: "#3776AB", icon: "🐍" },
    { name: "PostgreSQL", color: "#336791", icon: "🐘" },
    { name: "Docker", color: "#2496ED", icon: "🐳" },
    { name: "AWS", color: "#FF9900", icon: "☁️" },
    { name: "Git", color: "#F05032", icon: "📋" },
  ];

  const [techIcons, setTechIcons] = useState<TechIcon[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const containerWidth = 400;
    const containerHeight = 400;
    const radius = 120;
    const center = { x: containerWidth / 2, y: containerHeight / 2 };

    const icons: TechIcon[] = techStack.map((tech, index) => {
      const angle = (index / techStack.length) * 2 * Math.PI;
      const x = center.x + Math.cos(angle) * radius;
      const y = center.y + Math.sin(angle) * radius;

      return {
        id: tech.name,
        name: tech.name,
        color: tech.color,
        x,
        y,
        size: Math.random() * 20 + 40,
        rotation: Math.random() * 360,
      };
    });

    setTechIcons(icons);
  }, []);

  return (
    <div 
      className="relative w-96 h-96 mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm"
        animate={{
          scale: isHovered ? 1.1 : 1,
          rotate: [0, 360],
        }}
        transition={{
          scale: { duration: 0.3 },
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
        }}
      />

      {techIcons.map((icon, index) => (
        <motion.div
          key={icon.id}
          className="absolute flex items-center justify-center rounded-full backdrop-blur-sm border shadow-lg cursor-pointer"
          style={{
            backgroundColor: `${icon.color}20`,
            borderColor: icon.color,
            width: icon.size,
            height: icon.size,
            left: icon.x - icon.size / 2,
            top: icon.y - icon.size / 2,
          }}
          animate={{
            x: isHovered 
              ? (mousePosition.x - window.innerWidth / 2) * 0.05 * (index + 1)
              : 0,
            y: isHovered 
              ? (mousePosition.y - window.innerHeight / 2) * 0.05 * (index + 1)
              : 0,
            scale: isHovered ? [1, 1.2, 1] : 1,
            rotate: [icon.rotation, icon.rotation + 360],
          }}
          transition={{
            x: { type: "spring", stiffness: 100, damping: 20 },
            y: { type: "spring", stiffness: 100, damping: 20 },
            scale: { duration: 2, repeat: Infinity, delay: index * 0.2 },
            rotate: { duration: 10, repeat: Infinity, ease: "linear" },
          }}
          whileHover={{ 
            scale: 1.3,
            zIndex: 10,
          }}
        >
          <div className="text-2xl">
            {techStack[index]?.icon || "💻"}
          </div>
          
          <motion.div
            className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0"
            animate={{
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            {icon.name}
          </motion.div>
        </motion.div>
      ))}

      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          scale: isHovered ? 1.1 : 1,
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="text-6xl">💻</div>
      </motion.div>
    </div>
  );
}