import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaPython,
  FaGitAlt,
  FaDocker
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb, 
  SiPostgresql,
  SiNextdotjs,
  SiExpress,
  SiGraphql,
  SiRedis
} from 'react-icons/si';

const Skills = () => {
  const skills = [
    { icon: FaHtml5, name: "HTML5", color: "#E34F26" },
    { icon: FaCss3Alt, name: "CSS3", color: "#1572B6" },
    { icon: FaJs, name: "JavaScript", color: "#F7DF1E" },
    { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    { icon: FaReact, name: "React", color: "#61DAFB" },
    { icon: SiNextdotjs, name: "Next.js", color: "#000000" },
    { icon: FaNodeJs, name: "Node.js", color: "#339933" },
    { icon: SiExpress, name: "Express", color: "#000000" },
    { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
    { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
    { icon: SiTailwindcss, name: "Tailwind", color: "#06B6D4" },
    { icon: FaPython, name: "Python", color: "#3776AB" },
    { icon: SiGraphql, name: "GraphQL", color: "#E10098" },
    { icon: SiRedis, name: "Redis", color: "#DC382D" },
    { icon: FaGitAlt, name: "Git", color: "#F05032" },
    { icon: FaDocker, name: "Docker", color: "#2496ED" }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Skills
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10, 
                scale: 1.1,
                rotateY: 15,
                transition: { duration: 0.3 }
              }}
              className="group"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:shadow-2xl transition-all duration-300 relative overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10"
                >
                  <skill.icon 
                    className="w-12 h-12 mx-auto mb-3 transition-colors duration-300"
                    style={{ color: skill.color }}
                  />
                </motion.div>
                
                <h3 className="text-sm font-semibold text-white relative z-10">
                  {skill.name}
                </h3>
                
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-2xl"
                  style={{
                    background: `radial-gradient(circle, ${skill.color}20 0%, transparent 70%)`
                  }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;