import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  speed: number;
  direction: number;
  opacity: number;
}

interface ParticleSystemProps {
  particleCount?: number;
  className?: string;
}

export default function ParticleSystem({ particleCount = 50, className = "" }: ParticleSystemProps) {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);

    // Initialize particles
    const initialParticles: Particle[] = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 1 + 0.5,
      direction: Math.random() * Math.PI * 2,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    setParticles(initialParticles);

    return () => window.removeEventListener("resize", updateDimensions);
  }, [particleCount]);

  useEffect(() => {
    if (particles.length === 0) return;

    const animateParticles = () => {
      setParticles((prevParticles) =>
        prevParticles.map((particle) => {
          let newX = particle.x + Math.cos(particle.direction) * particle.speed;
          let newY = particle.y + Math.sin(particle.direction) * particle.speed;

          // Wrap around edges
          if (newX < 0) newX = dimensions.width;
          if (newX > dimensions.width) newX = 0;
          if (newY < 0) newY = dimensions.height;
          if (newY > dimensions.height) newY = 0;

          return {
            ...particle,
            x: newX,
            y: newY,
          };
        })
      );
    };

    const intervalId = setInterval(animateParticles, 50);
    return () => clearInterval(intervalId);
  }, [particles.length, dimensions]);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-blue-400/30"
          style={{
            left: particle.x,
            top: particle.y,
            width: particle.size,
            height: particle.size,
            opacity: particle.opacity,
          }}
          animate={{
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: particle.id * 0.1,
          }}
        />
      ))}
    </div>
  );
}